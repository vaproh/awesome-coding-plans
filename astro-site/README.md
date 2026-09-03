# Awesome Coding Plans Web

Astro static site for [Awesome Coding Plans](https://awesome-coding-plans.netlify.app). The catalog is generated from the canonical Markdown files in `../plans/`.

## Development

```sh
npm ci
npm run dev
```

Use `npm run build` to generate the production site in `dist/`, including the 30 static plan detail routes and `plans.json`.

## Data Flow

- `../plans/*.md` is the source of truth for plan content and catalog metadata.
- `scripts/split-plans.mjs` copies source Markdown into the Astro content collection and normalizes inferred price, website, and legacy fields.
- `src/content.config.ts` validates the metadata schema.
- `scripts/build-static.mjs` converts each source plan to a static page under `dist/plans/<slug>/` and writes `dist/plans.json`.

Each plan supports `type` (`Free`, `Paid`, or `Freemium`), `priceRange`, `quotaModel`, `bestForTags`, `modelAccess`, and `flags`. The home page filters against those fields with native browser controls, so it does not depend on a search service or client framework.

## SEO And Agent Access

The site emits page titles, descriptions, canonical URLs, Open Graph metadata, and Schema.org JSON-LD. Static discovery files live in `public/`:

- `favicon.svg` for the site icon.
- `robots.txt` for crawler access.
- `llms.txt` for agent-oriented entry points and source guidance.
- `plans.json` is generated at build time as the machine-readable catalog.

## Deployment

The repository root `netlify.toml` runs `npm ci && npm run build` from this directory with Node 22 and publishes `astro-site/dist`.

Generated files and local tooling output are ignored. Do not commit `node_modules`, `dist`, `.astro`, or local browser-test artifacts.
