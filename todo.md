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

- [x] Done. `build-static.mjs` now extracts `website` before building the catalog entry, so the body fallback lands in `plans.json`.

---

## Priority 2: Add `models`, `quota`, `bestFor` to frontmatter

- [x] Done. All 30 root `plans/*.md` files now carry `website`, `models`, `quota`, and `bestFor` frontmatter. `plans.json` is fully populated across all five data fields.

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

- [x] Remove dead `pageNav`/`navLinks`/`navHtml` from `build-static.mjs`
- [x] Remove dead `flex: 1` from `.main` in `Base.astro`
- [ ] Remove dead `.top-search` CSS from `Base.astro` if any remains
- [ ] Rename `--free`, `--orange`, `--red` CSS variables to neutral names
- [ ] Add a `typecheck` or `lint` script to `astro-site/package.json`

---

## Priority 10: Content quality

- [ ] Verify all 30 plan prices against official sources (last verified Sep 3, 2026)
- [ ] Add missing plans: Anthropic Max, Google Gemini Code Assist, Amazon Q Developer, Replit Agent
- [ ] Add a "How to choose" guide page with decision tree
- [ ] Add a "Changelog" page tracking plan additions and price changes
