import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/fonts");
mkdirSync(outDir, { recursive: true });

const sources = [
  "node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  "node_modules/@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2",
  "node_modules/@fontsource/dm-mono/files/dm-mono-latin-500-normal.woff2",
];

for (const rel of sources) {
  const src = join(__dirname, "..", rel);
  copyFileSync(src, join(outDir, rel.split("/").pop()));
}

console.log(`Synced ${sources.length} font files to public/fonts`);
