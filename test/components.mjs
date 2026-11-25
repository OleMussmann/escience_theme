// Renders test/fixture/page.html (components.css alone, outside a deck) on a
// light and on a dark page and checks what a study view or handout relies on:
//   - every piece of text has a contrast of at least 4.5:1 against the
//     background it sits on (cards keep their own colours, the rest follows
//     the page; .muted stays readable on both)
//   - every step and every detail is shown, with its label, and no two
//     details overlap
//   - headings in a card use the card's text colour, not the page's
//
// Environment: CHROME  browser executable (default: `chromium` on PATH)

import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const root = resolve(fileURLToPath(import.meta.url), '../..');
const chrome = process.env.CHROME
  || execFileSync('sh', ['-c', 'command -v chromium'], { encoding: 'utf8' }).trim();
const types = { '.html': 'text/html', '.css': 'text/css' };
const server = createServer((req, res) => {
  const file = join(root, normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)));
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  let body;
  try { body = readFileSync(file); } catch { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' }).end(body);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/test/fixture/page.html`;

// Runs in the page; returns a list of problems.
function inspect() {
  const problems = [];
  const rgba = c => { const m = c.match(/[\d.]+/g).map(Number); return [m[0], m[1], m[2], m[3] ?? 1]; };
  const lum = ([r, g, b]) => {
    const f = v => (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const background = el => {
    for (let e = el; e; e = e.parentElement) {
      const c = rgba(getComputedStyle(e).backgroundColor);
      if (c[3] > 0) return c;
    }
    return [255, 255, 255, 1];
  };
  const opacity = el => { let o = 1; for (let e = el; e; e = e.parentElement) o *= Number(getComputedStyle(e).opacity); return o; };
  const label = el => `${el.tagName.toLowerCase()}${el.className ? '.' + [...el.classList].join('.') : ''} "${el.textContent.trim().slice(0, 30)}"`;

  const root = document.querySelector('.escience-components');
  for (const el of root.querySelectorAll('*')) {
    if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue;
    const bg = background(el);
    const fg = rgba(getComputedStyle(el).color);
    const a = fg[3] * opacity(el);
    const seen = fg.slice(0, 3).map((v, i) => v * a + bg[i] * (1 - a));
    const [hi, lo] = [lum(seen), lum(bg)].sort((x, y) => y - x);
    const ratio = (hi + 0.05) / (lo + 0.05);
    if (ratio < 4.5) problems.push(`${label(el)}: contrast ${ratio.toFixed(2)}`);
  }

  const hidden = el => getComputedStyle(el).display === 'none' || getComputedStyle(el).visibility === 'hidden'
    || !el.getBoundingClientRect().height;
  for (const el of root.querySelectorAll('.step, .detail, .detail .label')) {
    if (hidden(el)) problems.push(`${label(el)}: not shown`);
  }
  const details = [...root.querySelectorAll('.detail')].map(d => [d, d.getBoundingClientRect()]);
  for (const [i, [a, ra]] of details.entries()) {
    for (const [b, rb] of details.slice(i + 1)) {
      if (ra.left < rb.right && rb.left < ra.right && ra.top < rb.bottom && rb.top < ra.bottom)
        problems.push(`${label(a)} overlaps ${label(b)}`);
    }
  }
  for (const h of root.querySelectorAll('.card:not(.bordered) :is(h1, h2, h3, h4, h5, h6)')) {
    if (getComputedStyle(h).color !== 'rgb(34, 34, 34)') problems.push(`${label(h)}: heading colour ${getComputedStyle(h).color}`);
  }
  return problems;
}

const browser = await chromium.launch({ executablePath: chrome });
let failed = 0;
for (const scheme of ['light', 'dark']) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  const errors = [];
  page.on('response', r => { if (r.status() >= 400) errors.push(`HTTP ${r.status()} ${r.url()}`); });
  await page.goto(`${base}?scheme=${scheme}`);
  const problems = [...errors, ...await page.evaluate(inspect)];
  for (const p of problems) console.log(`FAIL  ${scheme}: ${p}`);
  if (!problems.length) console.log(`components outside a deck, ${scheme} page: ok`);
  failed += problems.length;
  await page.close();
}
await browser.close();
server.close();
process.exit(failed ? 1 : 0);
