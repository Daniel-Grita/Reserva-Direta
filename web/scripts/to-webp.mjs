import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, parse } from 'node:path';

const ROOTS = ['public/hero', 'public/case-studies', 'public/team'];
const QUALITY = 82;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const fmt = (n) => `${(n / 1024).toFixed(0)} KB`;

let totalBefore = 0;
let totalAfter = 0;

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const { dir, name, ext } = parse(file);
    if (ext.toLowerCase() !== '.png' && ext.toLowerCase() !== '.jpg' && ext.toLowerCase() !== '.jpeg') continue;
    const out = join(dir, `${name}.webp`);
    const before = statSync(file).size;
    await sharp(file).webp({ quality: QUALITY }).toFile(out);
    const after = statSync(out).size;
    totalBefore += before;
    totalAfter += after;
    console.log(`${file}  ${fmt(before)} → ${fmt(after)}  (-${(((before - after) / before) * 100).toFixed(0)}%)`);
    unlinkSync(file);
  }
}

console.log(`\nTotal: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`);
