import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "../..");
const plansDir = join(__dirname, "../src/content/plans");
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

function quote(value) { return JSON.stringify(value || ""); }
function serialize(data) {
  return `---\ntitle: ${quote(data.title)}\nprice: ${quote(data.price)}\nmodels: ${quote(data.models)}\nquota: ${quote(data.quota)}\nwebsite: ${quote(data.website)}\nbestFor: ${quote(data.bestFor)}\ntype: ${quote(data.type || "Paid")}\npriceRange: ${quote(data.priceRange || "Premium")}\nquotaModel: ${quote(data.quotaModel || "Mixed")}\nbestForTags: [${(data.bestForTags || []).map(quote).join(", ")}]\nmodelAccess: ${quote(data.modelAccess || "Multi-model")}\nflags: [${(data.flags || []).map(quote).join(", ")}]\n---\n\n`;
}

// Ensure output directory exists
mkdirSync(plansDir, { recursive: true });

// Get all plan markdown files (exclude student discounts)
const files = readdirSync(sourceDir).filter(
  (f) => f.endsWith(".md") && f !== "student-discounts-freebies.md"
);

let generated = 0;

for (const file of files) {
  const slug = file.replace(".md", "");
  const content = readFileSync(join(sourceDir, file), "utf-8");
  const parsed = parseFrontmatter(content);
  const data = parsed.data;
  const body = parsed.body;

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = data.title || (titleMatch ? titleMatch[1].trim() : slug);

  // Extract website from markdown link
  const websiteMatch = content.match(/\[.*?\]\((https?:\/\/[^\)]+)\)/);
  const website = data.website || (websiteMatch ? websiteMatch[1] : "");

  // Extract price from content (look for price patterns)
  const priceMatch = content.match(/\$[\d.]+(?:-\$?[\d.]+)?\/mo|￥[\d.]+\/mo|Free|Discontinued/);
  const price = priceMatch ? priceMatch[0] : "";

  // Check if file already has frontmatter
  const outputData = { ...data, title, price: data.price || price, website };
  writeFileSync(join(plansDir, file), serialize(outputData) + body);
  generated++;
}

console.log(`Generated ${generated} plan files in ${plansDir}`);
