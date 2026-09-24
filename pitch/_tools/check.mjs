// Checks every demo in pitch/<slug>/index.html:
//  - screenshots 390x844 and 1280x800 -> pitch/_screens/<slug>-mobile.png / -desktop.png
//  - no horizontal scroll at 390px
//  - no console errors / page errors
//  - tel:, mailto: and external links are well-formed (and external ones respond)
//  - concept banner and robots noindex meta are present
// Usage: node pitch/_tools/check.mjs [slug-prefix ...] [--no-net]
// Needs: npm i playwright (a Chromium build is expected to be installed).
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const shots = path.join(root, '_screens');
fs.mkdirSync(shots, { recursive: true });
const args = process.argv.slice(2);
const noNet = args.includes('--no-net');
const only = args.filter((a) => !a.startsWith('--'));
const slugs = fs.readdirSync(root).filter((d) => !d.startsWith('_') && !d.startsWith('.') && fs.existsSync(path.join(root, d, 'index.html')))
  .filter((d) => !only.length || only.some((o) => d.startsWith(o)));

// Optional: route browser traffic through Node (needed behind a TLS-intercepting proxy).
let routeViaNode = null;
if (process.env.ROUTE_VIA_NODE) ({ routeViaNode } = await import(process.env.ROUTE_VIA_NODE));

// tiny static server so pages load over http:// like on GitHub Pages
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = path.join(root, u);
  if (f.endsWith('/')) f += 'index.html';
  if (!f.startsWith(root) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'content-type': f.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const base = `http://127.0.0.1:${server.address().port}`;

const linkCache = new Map();
async function probe(url) {
  if (linkCache.has(url)) return linkCache.get(url);
  const p = (async () => {
    try {
      const r = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20000), headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1', 'accept-language': 'ru-RU,ru;q=0.9' } });
      return r.status;
    } catch (e) { return 'ERR ' + (e.cause?.code || e.name); }
  })();
  linkCache.set(url, p);
  return p;
}

const browser = await chromium.launch();
const report = [];
let failed = 0;
for (const slug of slugs) {
  const problems = [], warnings = [];
  for (const [kind, vp] of [['mobile', { width: 390, height: 844 }], ['desktop', { width: 1280, height: 800 }]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: kind === 'mobile' ? 2 : 1, locale: 'ru-RU', isMobile: kind === 'mobile', hasTouch: kind === 'mobile' });
    if (routeViaNode) await routeViaNode(ctx);
    const pg = await ctx.newPage();
    const errs = [];
    pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    pg.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
    await pg.goto(`${base}/${slug}/`, { waitUntil: 'networkidle', timeout: 60000 });
    await pg.evaluate(async () => { // trigger reveal animations, then return to top
      for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
      document.querySelectorAll('.reveal').forEach((e) => e.classList.add('on'));
      window.scrollTo(0, 0);
    });
    await pg.waitForTimeout(700);
    if (kind === 'mobile') {
      const sw = await pg.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
      if (sw[0] > sw[1]) {
        const wide = await pg.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1 && getComputedStyle(e).position !== 'fixed').slice(0, 5).map((e) => e.tagName + '.' + e.className));
        problems.push(`horizontal scroll at 390px: scrollWidth ${sw[0]} > ${sw[1]} (${wide.join(', ')})`);
      }
      const info = await pg.evaluate(() => ({
        banner: !!document.querySelector('.concept') && /Концепт нового сайта для .+Подготовил Егор Лязин для обсуждения с владельцем\. Не официальный сайт\./.test(document.querySelector('.concept').textContent),
        robots: document.querySelector('meta[name="robots"]')?.content,
        links: [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')),
        imgsNoAlt: [...document.querySelectorAll('img:not([alt])')].length,
        iconLinksNoName: [...document.querySelectorAll('a,button')].filter((a) => !(a.textContent.trim() || a.getAttribute('aria-label') || a.getAttribute('title'))).length,
      }));
      if (!info.banner) problems.push('concept banner missing or text differs');
      if (info.robots !== 'noindex, nofollow') problems.push('robots meta missing');
      if (info.imgsNoAlt) problems.push(`${info.imgsNoAlt} <img> without alt`);
      if (info.iconLinksNoName) problems.push(`${info.iconLinksNoName} links/buttons without accessible name`);
      for (const h of new Set(info.links)) {
        if (h.startsWith('#')) {
          if (h.length > 1 && !(await pg.$(h))) problems.push(`broken anchor ${h}`);
        } else if (h.startsWith('tel:')) {
          if (!/^tel:\+7\d{10}$/.test(h)) problems.push(`bad tel link ${h}`);
        } else if (h.startsWith('mailto:')) {
          if (!/^mailto:[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(h)) problems.push(`bad mailto ${h}`);
        } else if (/^https?:\/\//.test(h)) {
          try { new URL(h); } catch { problems.push(`bad url ${h}`); continue; }
          if (!noNet) {
            const st = await probe(h);
            if (typeof st !== 'number' || st >= 400) (st === 403 || st === 429 || /yclients|instagram|facebook/.test(h) ? warnings : problems).push(`link ${h} -> ${st}`);
          }
        } else problems.push(`unexpected link ${h}`);
      }
    }
    await pg.screenshot({ path: path.join(shots, `${slug}-${kind}.png`), fullPage: true });
    await pg.screenshot({ path: path.join(shots, `${slug}-${kind}-fold.png`) });
    for (const e of errs) problems.push(`[${kind}] console: ${e}`);
    await ctx.close();
  }
  if (problems.length) failed++;
  report.push({ slug, problems, warnings });
  console.log(`${problems.length ? 'FAIL' : 'ok  '} ${slug}${problems.map((p) => '\n     ✗ ' + p).join('')}${warnings.map((p) => '\n     ! ' + p).join('')}`);
}
await browser.close();
server.close();
fs.writeFileSync(path.join(shots, 'report.json'), JSON.stringify(report, null, 1));
process.exit(failed ? 1 : 0);
