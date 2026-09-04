---
title: "Gemini Code Assist"
price: ""
models: "Gemini 3 Flash/Pro family"
quota: "Standard 1,500 agent req/day; Enterprise 2,000/day; 6,000 code req/day"
website: "https://cloud.google.com/products/gemini/pricing"
bestFor: "Teams and enterprises standardizing on Gemini inside IDEs and CLI"
type: "Paid"
priceRange: "Mid"
quotaModel: "Requests"
bestForTags: ["solo", "team", "enterprise", "ide", "agent"]
modelAccess: "Single"
flags: ["multimodal"]
---

# Gemini Code Assist

**Website:** [cloud.google.com/products/gemini/pricing](https://cloud.google.com/products/gemini/pricing) | **Docs:** [Quotas](https://docs.cloud.google.com/gemini/docs/quotas)

Google's Gemini-powered coding assistant for IDEs and the terminal, sold per seat to teams and enterprises.

**Important:** as of June 18, 2026, the free individual tier is no longer served by the IDE extensions, Gemini CLI, or the GitHub app. Google routes individuals to [Google Antigravity](/plans/antigravity/), which has a free Individual plan. Paid Standard/Enterprise licenses are unaffected.

### Plans

| Tier | Price | Notes |
|------|-------|-------|
| Standard | $19/user/mo (12-mo commitment, ~$22.80 billed monthly) | Agent mode + Gemini CLI: 1,500 requests/day |
| Enterprise | $45/user/mo (12-mo commitment, ~$54 billed monthly) | 2,000 agent requests/day, code customization from private repos |

### Models

Gemini family (Gemini 3 Flash and Pro class). Google does not publish a per-tier model split.

### Quotas

- Agent mode + Gemini CLI (combined): 1,500 (Standard) / 2,000 (Enterprise) requests/day
- Code completion and chat requests: 6,000/day
- Rate limit: 2 requests/second
- Gemini Code Assist on GitHub: at least 100 PR reviews/day, not counted against general quotas

### Tools

- IDE extensions: VS Code, JetBrains, Android Studio, Cloud Shell/Workstations
- Gemini CLI (open source, Apache 2.0)
- Gemini Code Assist for GitHub app (Preview; no new org installs since June 18, 2026)
- Enterprise code customization ingests GitHub/GitLab/Bitbucket repos

No standalone API product: the Gemini API is billed separately per token.
