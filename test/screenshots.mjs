// Renders test/fixture/deck.html with the current theme ("new") and with a
// baseline version of the theme taken from git ("baseline"), screenshots
// every slide plus overview mode, and compares the two pixel by pixel.
// Slides marked data-baseline-differs are skipped in that comparison; slides
// with data-expect-opacity must get that overlay opacity from the new theme.
// A second pass renders the new theme with ?print-pdf and checks that every
// page shows the decorations its slide shows on screen.
//
// Environment:
//   BASELINE_REF  git revision of the theme to compare against (default v0.2.0).
//                 Revisions from 0.2.0 on ship escience.js + escience.css;
//                 older ones (e.g. 1ef0fd0) are the single file
//                 escience_6.0.0.esm.js that injects its own CSS.
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
const baselineRef = process.env.BASELINE_REF || 'v0.2.0';
const maxDiff = Number(process.env.MAX_DIFF || 0);
const chrome = process.env.CHROME
  || execFileSync('sh', ['-c', 'command -v chromium'], { encoding: 'utf8' }).trim();

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const gitShow = path => execFileSync('git', ['-C', root, 'show', `${baselineRef}:${path}`],
  { stdio: ['ignore', 'pipe', 'ignore'] });
let baselineLayout;
try {
  writeFileSync(join(out, 'baseline.esm.js'), gitShow('escience.js'));
  writeFileSync(join(out, 'baseline.css'), gitShow('escience.css'));
  baselineLayout = 'split';
} catch {
  writeFileSync(join(out, 'baseline.esm.js'), gitShow('escience_6.0.0.esm.js'));
  baselineLayout = 'single';
}

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

// Runs in the page: which decorations are visible inside `container`, plus
// what the theme set on the slide. Used for the screen/print comparison.
// With `pageIndex`, the selectors apply inside that .pdf-page.
function decorationSignature([rootSelector, containerSelector, slideSelector, pageIndex]) {
  const scope = pageIndex === undefined ? document : document.querySelectorAll('.pdf-page')[pageIndex];
  const root = scope.querySelector(rootSelector);
  const container = scope.querySelector(containerSelector);
  const slide = scope.querySelector(slideSelector);
  const heading = slide?.querySelector('h1, h2, h3');
  const key = heading?.textContent.trim();
  if (!root || !container) return { key, decorations: `no ${root ? containerSelector : rootSelector}`, slide: '' };
  const box = container.getBoundingClientRect();
  const visible = [...root.children].filter(el => {
    const r = el.getBoundingClientRect();
    const w = Math.min(r.right, box.right) - Math.max(r.left, box.left);
    const h = Math.min(r.bottom, box.bottom) - Math.max(r.top, box.top);
    return Number(getComputedStyle(el).opacity) > 0.01 && w > 2 && h > 2;
  }).map(el => `${el.getAttribute('class').replace('escience-', '').replace(' escience-logo', '')}@${getComputedStyle(el).opacity}`);
  // The heading must not be covered by a decoration.
  const h = heading?.getBoundingClientRect();
  const onTop = h ? slide.contains(document.elementFromPoint(h.x + h.width / 2, h.y + h.height / 2)) : null;
  return {
    key,
    onTop,
    decorations: visible.sort().join(' '),
    slide: `links=${slide.dataset.escienceLinks || '-'} ${[...slide.classList].filter(c => c.startsWith('has-')).sort().join(' ')}`,
  };
}

async function shoot(variant) {
  const dir = join(out, variant);
  mkdirSync(dir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', e => errors.push(`${variant}: ${e.message}`));
  page.on('response', r => { if (r.status() >= 400) errors.push(`${variant}: HTTP ${r.status()} ${r.url()}`); });
  await page.goto(`${base}?variant=${variant}&layout=${baselineLayout}`);
  await page.waitForFunction(() => window.deckReady === true);
  await page.evaluate(() => document.fonts.ready);
  const count = await page.evaluate(() => window.deck.getSlides().length);
  const names = [];
  const slides = {};
  const signatures = [];
  for (let i = 0; i < count; i++) {
    await page.evaluate(i => {
      const { h, v } = window.deck.getIndices(window.deck.getSlides()[i]);
      window.deck.slide(h, v);
    }, i);
    await page.waitForTimeout(300);
    const name = String(i).padStart(2, '0');
    await page.screenshot({ path: join(dir, `${name}.png`) });
    names.push(name);
    if (variant === 'new') {
      signatures.push(await page.evaluate(decorationSignature,
        ['.reveal > .escience-decorations', '.reveal', '.slides section.present:not(.stack)']));
    }
    slides[name] = await page.evaluate(() => {
      const slide = window.deck.getCurrentSlide();
      // 0.2.0 has id="white_overlay" etc., later versions .escience-white-overlay
      const overlay = id => document.getElementById(id)
        || document.querySelector(`.reveal > .escience-decorations .escience-${id.replace('_', '-')}`);
      const overlays = ['white_overlay', 'blue_overlay', 'purple_overlay', 'black_overlay']
        .map(id => Number(getComputedStyle(overlay(id)).opacity));
      return {
        expect: slide.dataset.expectOpacity,
        expectSelection: slide.dataset.expectSelection,
        fontsDiffer: (slide.dataset.fontsDiffer || '').split(/\s+/).filter(Boolean),
        differs: slide.hasAttribute('data-baseline-differs'),
        opacity: Math.max(...overlays),
      };
    });
    // Typography of everything on the slide, compared with the baseline
    // below; screenshots miss elements that are not shown.
    slides[name].fonts = await page.evaluate(() => {
      const els = [...document.querySelectorAll('.slides section.present *')];
      return els.map(e => {
        const s = getComputedStyle(e);
        // Quotes and a trailing generic fallback (", sans-serif") are ignored.
        const family = s.fontFamily.replaceAll('"', '')
          .replace(/, (serif|sans-serif|monospace|system-ui)$/, '');
        return `${e.tagName.toLowerCase()}${e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : ''}: ${family} ${s.fontWeight} ${s.fontStyle} ${s.textTransform}`;
      });
    });
    slides[name].selection = await page.evaluate(() => {
      const p = document.querySelector('.slides section.present p');
      if (!p) return undefined;
      const s = getComputedStyle(p, '::selection');
      return `${s.color} on ${s.backgroundColor}`;
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
  // Speaker notes panel (as NEBULA shows it), on the first slide with notes.
  // Not shown during the screenshots, where it would cover the right third.
  const notesFonts = await page.evaluate(async () => {
    const deck = window.deck;
    const slide = deck.getSlides().find(s => s.querySelector('aside.notes'));
    deck.configure({ showNotes: true });
    const { h, v } = deck.getIndices(slide);
    deck.slide(h, v);
    await new Promise(r => setTimeout(r, 300));
    const fonts = [...document.querySelectorAll('.speaker-notes, .speaker-notes *')].map(e => {
      const s = getComputedStyle(e);
      return `${e.tagName.toLowerCase()}: ${s.fontFamily.replaceAll('"', '').replace(/, (serif|sans-serif|monospace|system-ui)$/, '')} ${s.fontWeight} ${s.fontStyle}`;
    });
    deck.configure({ showNotes: false });
    return fonts;
  });
  await page.evaluate(() => window.deck.toggleOverview(true));
  await page.waitForTimeout(500);
  await page.screenshot({ path: join(dir, 'overview.png') });
  names.push('overview');
  slides.overview = { maxDiff: await page.evaluate(() => {
    const n = document.querySelector('.reveal').dataset.overviewMaxDiff;
    return n === undefined ? undefined : Number(n);
  }) };
  const styleTags = await page.evaluate(() => document.head.querySelectorAll('style').length);
  await page.close();
  return { names, slides, styleTags, signatures, notesFonts };
}

// Print view of the new theme: one signature per PDF page.
async function shootPrint() {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('pageerror', e => errors.push(`print: ${e.message}`));
  await page.goto(`${base}?variant=new&print-pdf`);
  await page.waitForFunction(() => window.deckReady === true
    && document.querySelectorAll('.pdf-page .escience-decorations').length > 0);
  await page.evaluate(() => document.fonts.ready);
  const pages = await page.evaluate(() => document.querySelectorAll('.pdf-page').length);
  const signatures = [];
  for (let i = 1; i <= pages; i++) {
    await page.evaluate(i => document.querySelectorAll('.pdf-page')[i].scrollIntoView(), i - 1);
    signatures.push(await page.evaluate(decorationSignature,
      ['.escience-decorations', '.slide-background', 'section', i - 1]));
  }
  await page.screenshot({ path: join(out, 'print.png'), fullPage: true });
  await page.close();
  return signatures;
}

const baseline = await shoot('baseline');
const current = await shoot('new');
const print = await shootPrint();
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
  if (slide?.expectSelection !== undefined) {
    const ok = slide.selection === slide.expectSelection;
    if (!ok) failed = true;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(8)} selection ${slide.selection}${ok ? '' : ` (expected ${slide.expectSelection})`}`);
  }
  if (slide?.differs) { console.log(`skip ${name.padEnd(8)} differs from baseline on purpose`); continue; }
  if (slide?.fonts) {
    const was = baseline.slides[name].fonts;
    const allowed = f => slide.fontsDiffer.some(sel => f.startsWith(sel + ':'));
    const changed = slide.fonts.map((f, i) => f === was[i] || allowed(f) ? null : `    ${was[i]}\n -> ${f}`).filter(Boolean);
    if (slide.fonts.length !== was.length) changed.push(`    ${was.length} elements -> ${slide.fonts.length}`);
    if (changed.length) failed = true;
    console.log(`${changed.length ? 'FAIL' : 'ok  '} ${name.padEnd(8)} fonts of ${slide.fonts.length} elements`);
    for (const c of changed.slice(0, 8)) console.log(c);
  }
  const a = PNG.sync.read(readFileSync(join(out, 'baseline', `${name}.png`)));
  const b = PNG.sync.read(readFileSync(join(out, 'new', `${name}.png`)));
  const diff = new PNG({ width: a.width, height: a.height });
  const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
  if (n > 0) writeFileSync(join(out, 'diff', `${name}.png`), PNG.sync.write(diff));
  const ok = n <= (slide?.maxDiff ?? maxDiff);
  if (!ok) failed = true;
  console.log(`${ok ? 'ok  ' : 'DIFF'} ${name.padEnd(8)} ${n} px`);
}
{
  const ok = current.notesFonts.length > 1
    && JSON.stringify(current.notesFonts) === JSON.stringify(baseline.notesFonts);
  if (!ok) failed = true;
  console.log(`${ok ? 'ok  ' : 'FAIL'} notes    fonts of ${current.notesFonts.length} elements`
    + (ok ? '' : `\n    baseline: ${baseline.notesFonts.join(' | ')}\n    new:      ${current.notesFonts.join(' | ')}`));
}
const screenByKey = Object.fromEntries(current.signatures.map(s => [s.key, s]));
let printOk = print.length > 0;
for (const [i, p] of print.entries()) {
  const screen = screenByKey[p.key];
  const ok = screen && screen.decorations === p.decorations && screen.slide === p.slide
    && p.onTop !== false && screen.onTop !== false;
  if (!ok) {
    printOk = false;
    console.log(`FAIL print page ${i + 1} "${p.key}"\n    print:  ${p.decorations} | ${p.slide} | heading on top ${p.onTop}`
      + `\n    screen: ${screen ? `${screen.decorations} | ${screen.slide} | heading on top ${screen.onTop}` : 'no slide with this heading'}`);
  }
}
if (!printOk) failed = true;
console.log(`${printOk ? 'ok  ' : 'FAIL'} print    ${print.length} pages match their slides on screen`);
console.log(`<style> tags in <head>: baseline ${baseline.styleTags}, new ${current.styleTags}`);
for (const e of errors) console.log(`page error: ${e}`);
console.log(failed ? 'FAILED' : 'PASSED');
process.exit(failed ? 1 : 0);
