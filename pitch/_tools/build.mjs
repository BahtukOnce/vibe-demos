// Builds pitch/<slug>/index.html for every site config in ./sites.
// Usage: node pitch/_tools/build.mjs [slug-prefix ...]
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { page } from './kit.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const only = process.argv.slice(2);
const files = fs.readdirSync(path.join(here, 'sites')).filter((f) => f.endsWith('.mjs')).sort();
for (const f of files) {
  const cfg = (await import(path.join(here, 'sites', f))).default;
  if (only.length && !only.some((o) => cfg.slug.startsWith(o) || f.startsWith(o))) continue;
  const dir = path.join(root, cfg.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = page(cfg);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`${cfg.slug.padEnd(28)} ${(html.length / 1024).toFixed(1)} KB`);
}
