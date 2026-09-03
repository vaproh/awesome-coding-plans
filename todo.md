# TODO

Last updated: September 3, 2026

## Data gaps in `plans.json` catalog

The frontmatter carries filter metadata (`type`, `priceRange`, `quotaModel`, `bestForTags`, `modelAccess`, `flags`), but three machine-readable fields are still empty because they live in the Markdown body, not the frontmatter:

| Field | Filled | Empty | Source |
|-------|--------|-------|--------|
| `price` | 30 | 0 | Auto-extracted from body |
| `models` | 0 | **30** | Needs frontmatter or parser extraction |
| `quota` | 0 | **30** | Needs frontmatter or parser extraction |
| `bestFor` | 0 | **30** | Needs frontmatter or parser extraction |
| `website` | 0 | **30** | Auto-extracted but not propagated to catalog |

### Fix path

Two options, pick one:

1. **Add fields to frontmatter** (recommended). Add `models`, `quota`, `bestFor`, and `website` to every root `plans/*.md` frontmatter block. This keeps the source of truth human-readable and editable. Then `build-static.mjs` already reads them via `parseFrontmatter()`.

2. **Parse from body**. Extract the first pricing table row for `quota`, the model list for `models`, and the `**Website:**` link for `website` during `build-static.mjs`. Faster to implement but harder to maintain.

### Per-plan extraction needed

For each of the 30 plans, the body contains:
- `**Website:**` line with a `[label](url)` link (for `website`)
- A `### Models` table or list (for `models`)
- A `### Plans` / `### Pricing` table or list with quota details (for `quota`)
- A paragraph or line describing who the plan is best for (for `bestFor`)

---

## Priority 1: Fill `website` in catalog

Every plan body already has a `**Website:**` link. The `build-static.mjs` regex extracts it but only uses it for the HTML page, not `plans.json`. Fix: push extracted `website` into the catalog entry.

File: `astro-site/scripts/build-static.mjs` line ~65.

---

## Priority 2: Add `models`, `quota`, `bestFor` to frontmatter

Add these four fields to every root `plans/*.md`:

```yaml
---
title: "Cursor"
type: "Paid"
priceRange: "Premium"
quotaModel: "Mixed"
bestForTags: ["solo", "team", "ide", "agent"]
modelAccess: "Multi-model"
flags: ["multimodal", "student-discount"]
models: "Cursor Models pool + 30 third-party models"
quota: "500 slow + 500 fast premium requests/mo"
bestFor: "Solo and team IDE users who want agent assistance"
website: "https://cursor.com/pricing"
---
```

The `split-plans.mjs` already copies frontmatter as-is, so the schema in `src/content.config.ts` already defaults these to `""`. No loader change needed.

---

## Priority 3: Category pages

Currently only three content pages: Catalog, Comparison, Student Discounts, FAQ. Add:

- `/by-model-access` - Group plans by Single / Multi-model / Aggregator / Frontier
- `/by-price` - Budget, Mid, Premium, Enterprise tiers with cards
- `/by-tag` - Agent, IDE, CLI, API, BYOK, Offline categories
- `/tools` - Comparison of coding tools (IDEs, CLI agents, extensions)

---

## Priority 4: Comparison table data

The `comparison.astro` page has manually curated tables. These should be generated from `plans.json` to stay in sync. Build a `<ComparisonTable>` component that filters and sorts plans by category.

---

## Priority 5: Search engine optimization

- [ ] Add `og:image` as a proper 1200x630 PNG/SVG (current `favicon.svg` is tiny)
- [ ] Add `<meta name="theme-color">` matching the dark background
- [ ] Add breadcrumbs with `BreadcrumbList` JSON-LD to plan detail pages
- [ ] Add `ItemList` JSON-LD to the catalog index page
- [ ] Consider adding `/api/plans.json` redirect for discoverability

---

## Priority 6: Accessibility

- [ ] Add `aria-pressed` to tag filter buttons (currently missing)
- [ ] Add keyboard navigation for tag chips (arrow keys within `.chips`)
- [ ] Add skip-to-content link at the top of the layout
- [ ] Test with a screen reader on the filter UI
- [ ] Add focus-visible styles for keyboard navigation

---

## Priority 7: Performance

- [ ] Replace Google Fonts with self-hosted fonts (removes external request)
- [ ] Add `loading="lazy"` to any images if added later
- [ ] Inline critical CSS for above-the-fold content
- [ ] Add `rel="preconnect"` for any remaining external origins

---

## Priority 8: Data freshness

- [ ] Add a GitHub Action that checks plan websites weekly and flags 404s or price changes
- [ ] Add a "last verified" badge to each plan card (currently only in footer/site-wide)
- [ ] Add an `updated` field to each plan frontmatter for per-plan freshness

---

## Priority 9: Developer experience

- [ ] Remove dead `pageNav` variable from `build-static.mjs`
- [ ] Remove dead `.top-search` CSS from `Base.astro` if any remains
- [ ] Remove dead `flex: 1` from `.main` (inert with `display: block` parent)
- [ ] Rename `--free`, `--orange`, `--red` CSS variables to `--muted-1`, `--muted-2`, `--muted-3` or similar neutral names
- [ ] Add a `typecheck` or `lint` script to `astro-site/package.json`

---

## Priority 10: Content quality

- [ ] Verify all 30 plan prices against official sources (last verified Sep 3, 2026)
- [ ] Add missing plans: Anthropic Max, Google Gemini Code Assist, Amazon Q Developer, Replit Agent
- [ ] Add a "How to choose" guide page with decision tree
- [ ] Add a "Changelog" page tracking plan additions and price changes
