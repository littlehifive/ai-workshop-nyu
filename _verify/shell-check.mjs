import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
const errs = [];
p.on('pageerror', e => errs.push(e.message));
await p.goto(`file://${process.cwd()}/index.html`, { waitUntil: 'networkidle' });
await p.waitForTimeout(2500);
const cards = await p.locator('.card').count();
await p.screenshot({ path: '_verify/shell-overview.png' });
// enter present mode on slide 1
await p.keyboard.press('Escape');
console.log(`cards in overview: ${cards}; JS errors: ${errs.length ? errs.join(' | ') : 'none'}`);
await b.close();
