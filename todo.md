# TODO

Last updated: September 4, 2026

## Completed

### Data completion (was Priority 1 + 2)

- [x] `plans.json` fully populated: `price`, `models`, `quota`, `bestFor`, `website`, and `updated` for all 33 plans.
- [x] Every `plans/*.md` frontmatter carries the same fields; per-plan verified dates surface on detail pages.
- [x] Added Gemini Code Assist, Amazon Q Developer, and Replit Agent plans (researched September 4, 2026).

### Site structure (was Priority 3 + 4)

- [x] Browse pages: `/by-price`, `/by-model-access`, `/by-tag`, `/tools`, generated from the catalog via a shared `PlanTable` component.
- [x] Comparison tables now generate from catalog data per price band; curated "Best Picks" remain hand-edited.
- [x] `/guide` decision page and `/changelog` added and linked from the navbar/footer.

### SEO (was Priority 5)

- [x] 1200x630 `og.png` (generated with sharp), referenced by all pages with `og:image:width/height`.
- [x] `theme-color`, `twitter:card summary_large_image` on every page.
- [x] `BreadcrumbList` JSON-LD on plan detail pages, `ItemList` JSON-LD on the catalog, `FAQPage` on FAQ.
- [x] `/api/plans.json` Netlify rewrite to `/plans.json`.
- [x] Sitemap covers all 11 site pages plus all 33 plan routes.

### Accessibility (was Priority 6)

- [x] Skip-to-content link on every page (Astro pages + static plan template).
- [x] `:focus-visible` styles globally.
- [x] `aria-pressed` on all filter and tag buttons, synced on every state change.
- [x] Arrow-key navigation within quick-filter and tag-chip groups.
- [ ] Screen-reader pass over the filter UI (needs a human/AT session; keyboard and ARIA structure verified by inspection only).

### Performance (was Priority 7)

- [x] Fonts self-hosted via `public/fonts` + `public/fonts.css` (Space Grotesk variable, DM Mono 400/500); Google Fonts requests and preconnects removed; `scripts/sync-fonts.mjs` runs in predev/prebuild.
- [x] `og.png` is the only remaining binary asset; no images in plan bodies, so lazy-loading is N/A.
- [ ] Inlining critical CSS: dismissed. Astro already ships one small hashed stylesheet per page; manual inlining adds build complexity for no measurable gain at this size.

### Data freshness (was Priority 8)

- [x] Per-plan `updated` field in frontmatter and `plans.json`, shown as a "verified" badge on each detail page.
- [x] `check-links.yml` now runs lychee weekly (Sundays) over README, plans.md, CONTRIBUTING, and all `plans/*.md`, so plan websites get checked for 404s automatically.
- [ ] Weekly price-diff automation (would need scraping per vendor; overkill until vendors force it).

### Developer experience (was Priority 9)

- [x] Dead code removed: `pageNav`/`navLinks`/`navHtml`, inert `flex: 1`, no `.top-search` remnants.
- [x] CSS variables renamed to semantic names: `--freemium`, `--discontinued` (monochrome grays).
- [x] `npm run check` script (`astro check` with `@astrojs/check` + `typescript` devDeps); 0 errors, 0 warnings.

### Content quality (was Priority 10)

- [x] Existing 30 plans re-verified September 3, 2026; 3 new plans verified September 4, 2026.
- [x] Claude Max confirmed current ($100/$200, 5x/20x) and already documented inside `claude-plans.md`; no separate file needed.
- [x] `/guide` "how to choose" page.
- [x] `/changelog` page.

## Remaining ideas (not committed)

- Screen-reader testing session (accessibility above).
- Automated per-vendor price scraping when catalogs drift.
- Additional plans if new notable coding subscriptions appear; file an issue via the `new_plan.yml` template.
