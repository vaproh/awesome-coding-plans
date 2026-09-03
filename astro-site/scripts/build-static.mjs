import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");
const distDir = join(__dirname, "../dist");
const sourceDir = join(rootDir, "plans");

// Get all plan markdown files
const files = readdirSync(sourceDir).filter((f) => f.endsWith(".md") && f !== "student-discounts-freebies.md");

// Read the base template
const template = readFileSync(join(__dirname, "../src/templates/plan.html"), "utf-8");

// Build nav links
const navLinks = files
  .map((f) => {
    const slug = f.replace(".md", "");
    const content = readFileSync(join(sourceDir, f), "utf-8");
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug;
    return { slug, title };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

const navHtml = navLinks.map((l) => `<a href="/plans/${l.slug}">${l.title}</a>`).join("\n      ");

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

  // Build page nav with active state
  const pageNav = navLinks
    .map(
      (l) =>
        `<a href="/plans/${l.slug}" class="${l.slug === slug ? "active" : ""}">${l.title}</a>`
    )
    .join("\n      ");

  // Replace template placeholders
  let page = template
    .replace(/{{TITLE}}/g, title)
    .replace(/{{SLUG}}/g, slug)
    .replace(/{{CONTENT}}/g, htmlContent)
    .replace(/{{WEBSITE}}/g, website)
    .replace(/{{NAV}}/g, pageNav);

  // Write the file
  mkdirSync(join(distDir, "plans", slug), { recursive: true });
  writeFileSync(join(distDir, "plans", slug, "index.html"), page);
  generated++;
}

console.log(`Generated ${generated} plan pages`);
