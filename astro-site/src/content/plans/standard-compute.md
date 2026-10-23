---
title: "Standard Compute"
price: "$19/mo"
models: "Frontier + open via smart routing (Claude Opus/Sonnet 5.5, GPT-6 Astra/Luna, GPT-5.6 Sol, Gemini, DeepSeek, Qwen, Kimi, GLM, MiniMax)"
quota: "$19/$39/$89/$249 per mo individual; $20/$41/$95/$269 monthly compute budget; stops at budget, no overage"
website: "https://standardcompute.com/coding-subscription"
bestFor: "Heavy agent users who want one fixed monthly bill across frontier and open models"
type: "Paid"
priceRange: "Mid"
quotaModel: "Credits"
bestForTags: ["solo", "heavy", "agent", "api"]
modelAccess: "Frontier"
flags: ["open-source"]
updated: "2026-10-15"
---

# Standard compute


**Website:** [standardcompute.com](https://standardcompute.com/coding-subscription)

Flat-rate subscription with access to frontier and open models via smart routing. No 5-hour or weekly windows. Each plan has a fixed monthly compute budget in USD, and each request draws it down at the model's per-token rate; requests run at full speed until it is used, then stop until renewal or an upgrade.

### Models (smart-routed)

| Category | Models |
|----------|--------|
| **Frontier** | Claude Opus 5.5, Claude Sonnet 5.5, GPT-6 Astra, GPT-5.6 Sol, Gemini 3.1 Pro |
| **Efficient** | GPT-6 Luna, Claude Haiku 5.5, Gemini 3.8 Flash, DeepSeek V4.1 Flash, GLM 5.3 Flash |
| **Open** | GLM 5.3, Kimi K3, MiniMax M3, DeepSeek V4 Pro, Qwen 3.8 27B |

### Plans

| Tier | Price | Compute Budget | Notes |
|------|-------|----------------|-------|
| **Starter** | $19/mo | $20/mo ($30 first month) | Entry tier, one agent at a time, 1 API key |
| **Economy** | $39/mo | $41/mo ($61 first month) | Parallel agents |
| **Standard** | $89/mo | $95/mo ($142 first month) | Priority lane |
| **Pro** | $249/mo | $269/mo ($403 first month) | Highest priority scheduling |
| **Pro Plus** (business) | $499/mo | $549/mo | No cap on API keys; Growth $999 and Scale $2,499 above it |

### Key Features
- **Fixed monthly compute budget in USD** — each request is counted at the model's per-token rate; usage shown live in the dashboard
- **No 5-hour windows, no weekly caps**
- **Stops at budget, no overage** — requests return HTTP 402 until renewal or an upgrade; optional Pay as you go top-ups on Economy and above (smart pacing was retired on Oct 8, 2026)
- **Smart routing** — the `standardcompute` model sends each step to the cheapest capable model, or pin an exact model
- **OpenAI- and Anthropic-compatible API** — `https://api.stdcmpt.com/v1`; Claude Code via `/v1/messages`, Codex via `/v1/responses`, OpenCode via models.dev
- **Opt-in Europe/US Compliance rules** per key, team or company
- **7-day fair refund** — cancel in first week, pay only for compute used
- **$0.25 trial compute** for eligible new accounts, no card needed

---
