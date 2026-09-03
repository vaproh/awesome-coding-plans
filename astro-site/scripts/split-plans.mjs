import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");
const plansDir = join(__dirname, "../src/content/plans");
const sourceDir = join(rootDir, "plans");

// Ensure output directory exists
mkdirSync(plansDir, { recursive: true });

// Get all plan markdown files (exclude student discounts)
const files = readdirSync(sourceDir).filter(
  (f) => f.endsWith(".md") && f !== "student-discounts-freebies.md"
);

let generated = 0;

for (const file of files) {
  const slug = file.replace(".md", "");
  let content = readFileSync(join(sourceDir, file), "utf-8");

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  // Extract website from markdown link
  const websiteMatch = content.match(/\[.*?\]\((https?:\/\/[^\)]+)\)/);
  const website = websiteMatch ? websiteMatch[1] : "";

  // Extract price from content (look for price patterns)
  const priceMatch = content.match(/\$[\d.]+\/mo|￥[\d.]+\/mo|Free|Discontinued/);
  const price = priceMatch ? priceMatch[0] : "";

  // Check if file already has frontmatter
  if (!content.startsWith("---")) {
    const frontmatter = `---
title: "${title}"
price: "${price}"
models: ""
quota: ""
website: "${website}"
bestFor: ""
---

`;
    writeFileSync(join(plansDir, file), frontmatter + content);
  } else {
    writeFileSync(join(plansDir, file), content);
  }
  generated++;
}

console.log(`Generated ${generated} plan files in ${plansDir}`);
