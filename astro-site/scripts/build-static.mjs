import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");
const distDir = join(__dirname, "../dist/plans");
const sourceDir = join(rootDir, "plans");

// Ensure output directory exists
mkdirSync(distDir, { recursive: true });

// Get all plan markdown files
const files = readdirSync(sourceDir).filter((f) => f.endsWith(".md") && f !== "student-discounts-freebies.md");

// Read template
const templatePath = join(__dirname, "../src/templates/plan.html");
let template = readFileSync(templatePath, "utf-8");

let generated = 0;

for (const file of files) {
  const slug = file.replace(".md", "");
  const content = readFileSync(join(sourceDir, file), "utf-8");

  // Extract title
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  // Extract website
  const websiteMatch = content.match(/\[.*?\]\((https?:\/\/[^\)]+)\)/);
  const website = websiteMatch ? websiteMatch[1] : "";

  // Remove the first heading from content
  const contentWithoutTitle = content.replace(/^#\s+.+\n\n/, "");

  // Convert markdown to HTML
  const htmlContent = marked.parse(contentWithoutTitle);

  // Replace template placeholders
  let page = template
    .replace(/{{TITLE}}/g, title)
    .replace(/{{SLUG}}/g, slug)
    .replace(/{{CONTENT}}/g, htmlContent)
    .replace(/{{WEBSITE}}/g, website);

  // Write the file
  mkdirSync(join(distDir, slug), { recursive: true });
  writeFileSync(join(distDir, slug, "index.html"), page);
  generated++;
}

console.log(`Generated ${generated} plan pages in ${distDir}`);
