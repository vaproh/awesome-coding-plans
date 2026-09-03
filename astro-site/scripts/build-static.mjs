import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");
const distDir = join(__dirname, "../dist");
const sourceDir = join(rootDir, "plans");

function parseFrontmatter(content) {
  if (!content.startsWith("---")) return { data: {}, body: content };
  const end = content.indexOf("\n---", 3);
  if (end < 0) return { data: {}, body: content };
  const data = {};
  for (const line of content.slice(4, end).split("\n")) {
    const match = line.match(/^([\w-]+):\s*(.*)$/);
    if (!match) continue;
    let value = match[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) value = value.slice(1, -1).split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
    else value = value.replace(/^['"]|['"]$/g, "");
    data[match[1]] = value;
  }
  return { data, body: content.slice(end + 4).replace(/^\n+/, "") };
}

const escapeHtml = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const inferPrice = (body) => (body.match(/\$[\d.]+(?:-\$?[\d.]+)?\/mo|￥[\d.]+\/mo|Free|Discontinued/) || ["See plan details"])[0];

// Get all plan markdown files
const files = readdirSync(sourceDir).filter((f) => f.endsWith(".md") && f !== "student-discounts-freebies.md");

// Read the base template
const template = readFileSync(join(__dirname, "../src/templates/plan.html"), "utf-8");

// Build nav links
const navLinks = files
  .map((f) => {
    const slug = f.replace(".md", "");
    const content = readFileSync(join(sourceDir, f), "utf-8");
    const { data } = parseFrontmatter(content);
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = data.title || (titleMatch ? titleMatch[1].trim() : slug);
    return { slug, title };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

const navHtml = navLinks.map((l) => `<a href="/plans/${l.slug}">${l.title}</a>`).join("\n      ");

let generated = 0;
const catalog = [];

for (const file of files) {
  const slug = file.replace(".md", "");
  const content = readFileSync(join(sourceDir, file), "utf-8");
  const { data, body } = parseFrontmatter(content);

  // Extract title
  const titleMatch = body.match(/^#\s+(.+)$/m);
  const title = data.title || (titleMatch ? titleMatch[1].trim() : slug);
  catalog.push({ slug, title, type: data.type || "Paid", price: data.price || inferPrice(body), priceRange: data.priceRange || "Premium", quotaModel: data.quotaModel || "Mixed", models: data.models || "", quota: data.quota || "", bestFor: data.bestFor || "", bestForTags: data.bestForTags || [], modelAccess: data.modelAccess || "Multi-model", flags: data.flags || [], website: data.website || "" });

  // Extract website
  const websiteMatch = body.match(/\[.*?\]\((https?:\/\/[^\)]+)\)/);
  const website = data.website || (websiteMatch ? websiteMatch[1] : "");

  // Remove the first heading from content
  const contentWithoutTitle = body.replace(/^#\s+.+\n\n/, "");

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
    .replace(/{{WEBSITE}}/g, escapeHtml(website))
    .replace(/{{TYPE}}/g, escapeHtml(data.type || "Paid"))
    .replace(/{{PRICE_RANGE}}/g, escapeHtml(data.priceRange || "Premium"))
    .replace(/{{MODEL_ACCESS}}/g, escapeHtml(data.modelAccess || "Multi-model"))
    .replace(/{{PRICE}}/g, escapeHtml(data.price || inferPrice(body)))
    .replace(/{{QUOTA}}/g, escapeHtml(data.quota || "See plan details"))
    .replace(/{{QUOTA_MODEL}}/g, escapeHtml(data.quotaModel || "Mixed"))
    .replace(/{{BEST_FOR}}/g, escapeHtml(data.bestFor || "AI coding"))
    .replace(/{{TAGS}}/g, (Array.isArray(data.bestForTags) ? data.bestForTags : []).map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join(""))
    .replace(/{{NAV}}/g, pageNav);

  // Write the file
  mkdirSync(join(distDir, "plans", slug), { recursive: true });
  writeFileSync(join(distDir, "plans", slug, "index.html"), page);
  generated++;
}

console.log(`Generated ${generated} plan pages`);
writeFileSync(join(distDir, "plans.json"), JSON.stringify({ updated: "2026-09-03", plans: catalog }, null, 2));
