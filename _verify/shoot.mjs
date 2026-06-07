import { chromium } from 'playwright';
import { readdirSync } from 'fs';
const slides = readdirSync('slides').filter(f => f.endsWith('.html')).sort();
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errors = [];
page.on('pageerror', e => errors.push(`${page.url()}: ${e.message}`));
page.on('console', m => { if (m.type() === 'error') errors.push(`${page.url()}: console.error ${m.text()}`); });
for (const f of slides) {
  await page.goto(`file://${process.cwd()}/slides/${f}?static=1`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  // overflow check: any element extending beyond 1920x1080
  const overflow = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('*').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > 1925 || r.bottom > 1085 || r.left < -5 || r.top < -5)) bad.push(el.tagName + '.' + (el.className?.toString?.().slice(0,30) || ''));
    });
    return bad.slice(0, 5);
  });
  if (overflow.length) console.log(`OVERFLOW ${f}: ${overflow.join(', ')}`);
  await page.screenshot({ path: `_verify/${f.replace('.html', '.png')}` });
}
await browser.close();
if (errors.length) { console.log('ERRORS:'); errors.forEach(e => console.log(e)); } else console.log('No JS/console errors.');
console.log(`Shot ${slides.length} slides.`);
