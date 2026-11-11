// Renders test/fixture/deck.html with the current theme ("new") and with a
// baseline version of the theme taken from git ("baseline"), screenshots
// every slide plus overview mode, and compares the two pixel by pixel.
// Slides marked data-baseline-differs are skipped in that comparison; slides
// with data-expect-opacity must get that overlay opacity from the new theme.
//
// Environment:
//   BASELINE_REF  git revision whose escience_6.0.0.esm.js is the baseline
//                 (default 1ef0fd0, the last single-file release)
//   CHROME        browser executable (default: `chromium` on PATH)
//   MAX_DIFF      pixels allowed to differ per screenshot (default 0)
//
// Output goes to test/output/ (gitignored): <variant>/<nn>.png and diff/<nn>.png.

import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const root = resolve(fileURLToPath(import.meta.url), '../..');
const out = join(root, 'test/output');
const baselineRef = process.env.BASELINE_REF || '1ef0fd0';
const maxDiff = Number(process.env.MAX_DIFF || 0);
const chrome = process.env.CHROME
  || execFileSync('sh', ['-c', 'command -v chromium'], { encoding: 'utf8' }).trim();

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'baseline.esm.js'),
  execFileSync('git', ['-C', root, 'show', `${baselineRef}:escience_6.0.0.esm.js`]));

const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject' };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  const file = join(root, path);
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  try {
    const body = readFileSync(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' }).end(body);
  } catch { res.writeHead(404).end(); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/test/fixture/deck.html`;

const browser = await chromium.launch({ executablePath: chrome });
const errors = [];

async function shoot(variant) {
  const dir = join(out, variant);
  mkdirSync(dir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', e => errors.push(`${variant}: ${e.message}`));
  page.on('response', r => { if (r.status() >= 400) errors.push(`${variant}: HTTP ${r.status()} ${r.url()}`); });
  await page.goto(`${base}?variant=${variant}`);
  await page.waitForFunction(() => window.deckReady === true);
  await page.evaluate(() => document.fonts.ready);
  const count = await page.evaluate(() => window.deck.getTotalSlides());
  const names = [];
  const slides = {};
  for (let i = 0; i < count; i++) {
    await page.evaluate(i => window.deck.slide(i), i);
    await page.waitForTimeout(300);
    const name = String(i).padStart(2, '0');
    await page.screenshot({ path: join(dir, `${name}.png`) });
    names.push(name);
    slides[name] = await page.evaluate(() => {
      const slide = window.deck.getCurrentSlide();
      const overlays = ['white_overlay', 'blue_overlay', 'purple_overlay', 'black_overlay']
        .map(id => Number(document.getElementById(id).style.opacity || 0));
      return {
        expect: slide.dataset.expectOpacity,
        differs: slide.hasAttribute('data-baseline-differs'),
        opacity: Math.max(...overlays),
      };
    });
    // Link colour at rest and on hover; the overlays switch it via CSS variables.
    const link = page.locator('.slides section.present a').first();
    if (await link.count()) {
      const color = () => link.evaluate(a => getComputedStyle(a).color);
      const rest = await color();
      await link.hover();
      const hover = await color();
      await page.mouse.move(0, 0);
      slides[name].link = `${rest} / hover ${hover}`;
    }
  }
  await page.evaluate(() => window.deck.toggleOverview(true));
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(dir, 'overview.png') });
  names.push('overview');
  const styleTags = await page.evaluate(() => document.head.querySelectorAll('style').length);
  await page.close();
  return { names, slides, styleTags };
}

const baseline = await shoot('baseline');
const current = await shoot('new');
await browser.close();
server.close();

mkdirSync(join(out, 'diff'), { recursive: true });
let failed = errors.length > 0;
for (const name of current.names) {
  const slide = current.slides[name];
  if (slide?.expect !== undefined) {
    const ok = Math.abs(slide.opacity - Number(slide.expect)) < 1e-9;
    if (!ok) failed = true;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(8)} overlay opacity ${slide.opacity} (expected ${slide.expect})`);
  }
  if (slide?.link !== undefined) {
    const was = baseline.slides[name].link;
    const ok = slide.link === was;
    if (!ok) failed = true;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(8)} link ${slide.link}${ok ? '' : ` (baseline ${was})`}`);
  }
  if (slide?.differs) { console.log(`skip ${name.padEnd(8)} differs from baseline on purpose`); continue; }
  const a = PNG.sync.read(readFileSync(join(out, 'baseline', `${name}.png`)));
  const b = PNG.sync.read(readFileSync(join(out, 'new', `${name}.png`)));
  const diff = new PNG({ width: a.width, height: a.height });
  const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
  if (n > 0) writeFileSync(join(out, 'diff', `${name}.png`), PNG.sync.write(diff));
  const ok = n <= maxDiff;
  if (!ok) failed = true;
  console.log(`${ok ? 'ok  ' : 'DIFF'} ${name.padEnd(8)} ${n} px`);
}
console.log(`<style> tags in <head>: baseline ${baseline.styleTags}, new ${current.styleTags}`);
for (const e of errors) console.log(`page error: ${e}`);
console.log(failed ? 'FAILED' : 'PASSED');
process.exit(failed ? 1 : 0);
