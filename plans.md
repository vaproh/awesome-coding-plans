# Awesome Coding Plans — Detailed Reference

> Deep dives on every plan. For overview and quick picks, see [README.md](README.md).

*Last updated: September 2026*

---

## Quick Comparison

### Budget Plans (Under $10)

| Plan | Price | Models | Best For |
|------|-------|--------|----------|
| [Chutes](#chutes) | $3/mo | 13+ open | Cheapest PAYG |
| [MiMo](#mimo-token-plan) | $6/mo | 6 models | No weekly/5h caps |
| [Qwen](#qwen-token-plan) | ~$6/mo | 5+ models | Multi-model |
| [Step](#step-plan) | $6.99/mo | 4+ models | Multimodal |
| [Cline Pass](#cline-pass) | $9.99/mo | 14 open | Cline users |

### Mid-Range Plans ($10-$20)

| Plan | Price | Models | Best For |
|------|-------|--------|----------|
| [GitHub Copilot](#github-copilot) | $10/mo | 30+ models | Most models |
| [Perch](#perch-ai) | $10/mo | 15+ models | Smart routing |
| [OpenCode Go](#opencode-go) | $10/mo | 24 models | Best value |
| [NanoGPT](#nanogpt) | $12/mo | 4+ models | 1000+ via PAYGO |
| [Kimi Code](#kimi-code) | Free / ¥49 | 4 models | K3 flagship |
| [Mistral](#mistral-vibe) | $14.99/mo | 7 models | European AI |
| [GLM](#glm-coding-plan) | $18/mo | 2 models | GLM-5.3 flagship |
| [Standard Compute](#standard-compute) | $19/mo | All frontiers | No windows |
| [Claude](#claude-plans) | $17-20/mo | 4 models | Frontier quality |

### Premium Plans ($20+)

| Plan | Price | Models | Best For |
|------|-------|--------|----------|
| [Codex](#openai-codex-plans) | $20/mo | Tiered | OpenAI ecosystem |
| [Cursor](#cursor) | $20/mo | Multi-model | AI-native IDE |
| [Windsurf](#windsurf) | $20/mo | Multi-model | Cascade agent |
| [MiniMax](#minimax-token-plan) | $22/mo | 5+ models | Multimodal |
| [Synthetic](#synthetic) | $30/mo | 16 open | Privacy |

---

## MiMo Token Plan

**Website:** [mimo.mi.com](https://mimo.mi.com/pricing) | **Docs:** [Token Plan Docs](https://mimo.mi.com/docs/en-US/price/token-plan)

Xiaomi's coding subscription for AI programming scenarios. Uses a transparent Credit system across the MiMo V2.5 model family.

### Models

| Model | Type | Context |
|-------|------|---------|
| `mimo-v2.5-pro` | Flagship reasoning (text) | 1M |
| `mimo-v2.5` | Multimodal (text + image) | 1M |
| `mimo-v2.5-asr` | Speech recognition | — |
| `mimo-v2.5-tts` | Text-to-speech | — |
| `mimo-v2.5-tts-voiceclone` | Voice cloning TTS | — |
| `mimo-v2.5-tts-voicedesign` | Voice design TTS | — |

> TTS models are free for a limited time. ASR billed per hour of audio.

### Plans

| Tier | Price | Credits | Equivalent |
|------|-------|---------|------------|
| **Lite** | $6/mo | 4.1B | Base |
| **Standard** | $16/mo | 11B | 2.7x Lite |
| **Pro** | $50/mo | 38B | 9.3x Lite |
| **Max** | $100/mo | 82B | 20x Lite |

### Key Features
- **No weekly cap, no 5-hour cap** — unlimited usage window
- **Night discount:** 0.8x Credit usage (00:00-08:00 UTC+8)
- **Free TTS models** (limited time)
- **Coding framework support:** OpenClaw, OpenCode, Codex, Claude Code, MiMo Claw
- **MiMo Claw** agent platform available as add-on (stackable with Token Plan)

---

## GLM Coding Plan

**Website:** [z.ai/subscribe](https://z.ai/subscribe) | **Docs:** [docs.z.ai](https://docs.z.ai/devpack/overview)

Zhipu AI's subscription for coding agents. All tiers get the same flagship models — only quota differs.

### Models

| Model | Type | Notes |
|-------|------|-------|
| `GLM-5.3` | Flagship coding | Latest, SOTA open-source |
| `GLM-5.3-Flash` | Fast multimodal | Native vision support |
| `GLM-5.2 / 5.1` | Auto-routed to GLM-5.3 | Backward compatible |
| `GLM-4.7` | Auto-routed to GLM-5.3-Flash | Backward compatible |

### Bundled MCP Tools
- Vision Understanding
- Web Search MCP
- Web Reader MCP
- Zread MCP (open-source repo access)

### Plans

| Tier | Price | Credits/5h | Credits/week | Notes |
|------|-------|------------|--------------|-------|
| **Lite** | $18/mo ($12.6/yr) | 2,000 | 10,000 | ~400 prompts/week |
| **Pro** | $80/mo ($56/yr) | 12,000 | 60,000 | ~2,000 prompts/week, faster generation |
| **Max** | $168/mo ($117.6/yr) | 28,000 | 140,000 | First access to new models, peak priority |

> **Off-peak discount:** 50% fewer Credits outside 14:00-18:00 UTC+8 (weekdays). Quarterly -20%, Yearly -30%.

### Supported Tools
ZCode, Claude Code, Cline, OpenCode, Goose, OpenClaw, Roo Code, Kilo Code, and 20+ more.

---

## Qwen Token Plan

**Website:** [docs.qwencloud.com](https://docs.qwencloud.com/coding-plan/overview)

Alibaba Cloud's credit-based plan for AI coding. Access to Qwen, DeepSeek, GLM, and more through one subscription.

### Models

| Model | Type |
|-------|------|
| `Qwen3.8-Max` | Flagship (GA) |
| `qwen3.8-flash` | Fast model |
| `deepseek-v4-pro-0813` | DeepSeek flagship |
| `qwen3.7-plus` | Vision model |
| `qwen-image-3.0-pro` | Image generation |
| `GLM` | Zhipu AI model |

### Plans

| Tier | Price | Credits/7 days | Concurrent Agents |
|------|-------|----------------|-------------------|
| **Lite** | ~$6/mo | 2,500 | 1-2 |
| **Standard** | ~$18/mo | 10,000 | 3-4 |
| **Pro** | ~$68/mo | 40,000 | 6-8 |

> **Night discount:** 50% off-peak usage. Credits refresh every 7 days.

### Supported Tools
OpenClaw, Claude Code, OpenCode, Cursor, Codex, Qwen Code, QwenPaw, Cherry Studio, Chatbox, Cline, Qoder, Lingma, Kilo CLI, Hermes Agent.

---

## MiniMax Token Plan

**Website:** [platform.minimax.io](https://platform.minimax.io/subscribe/token-plan) | **Docs:** [Token Plan Docs](https://platform.minimax.io/docs/token-plan/intro)

Full-spectrum AI subscription covering language, speech, video, and image models.

### Models

| Model | Type | Notes |
|-------|------|-------|
| `M3` | Flagship language | Latest generation |
| `M2.7` | Previous gen language | Shared quota with M3 |
| `M2.7-highspeed` | Fast variant | 3x quota usage |
| Image models | Image generation | Shared quota |
| Speech models | TTS / ASR | Shared quota |

### Plans

| Tier | Price | Est. M3 Tokens/mo | Agents | Video Gen |
|------|-------|-------------------|--------|-----------|
| **Plus** | $22/mo | ~1.7B | 3-4 | — |
| **Max** | $55/mo | ~5.1B | 4-5 | 3/day |
| **Ultra** | $132/mo | ~12.5B | 6-7 | 5/day |

### Key Features
- **5-hour rolling + weekly quota windows**
- **Text, image, speech share one quota**
- **MiniMax Code Desktop/Web** included
- **BYOK** — works with OpenClaw, Claude Code, Cline, OpenCode, Grok CLI, Hermes Agent, Kilo Code, Droid

---

## Mistral Vibe

**Website:** [mistral.ai/pricing](https://mistral.ai/pricing/) | **Vibe Product](https://mistral.ai/products/vibe/code/)

Mistral's unified AI agent for work and code. Formerly "Le Chat."

### Models

| Model | Type | Best For |
|-------|------|----------|
| `Mistral Medium 3.5` | Flagship | Complex multi-step engineering |
| `Devstral 2` | Coding agent | Autonomous coding tasks |
| `Codestral` | Code completion | Fast code generation |
| `Codestral Embed` | Code search | Semantic code search |
| `Mistral Small` | Lightweight | Cost-sensitive projects |
| `Voxtral` | Speech | Audio/speech intelligence |
| `OCR` | Document AI | Document processing |

### Plans

| Tier | Price | API Credits | Sessions/Day | Best For |
|------|-------|-------------|---------------|----------|
| **Free** | $0 | $10/mo | 2 | Trying Vibe |
| **Pro** | $14.99/mo | $30/mo | 100 | All-day coding |
| **Student** | $5.99/mo | $15/mo | 100 | Verified students |
| **Team** | $24.99/user/mo | — | Higher | Shared workspace |
| **Enterprise** | $50/user/mo | — | Custom | Private deployment |

### Key Features
- **Vibe CLI** — terminal coding agent
- **Vibe Web** — browser-based
- **VS Code integration**
- **24-hour max session duration**
- **100 sessions/day** on paid plans
- **Fine-tuning** available for Enterprise

---

## Perch AI

**Website:** [perchai.app](https://www.perchai.app/)

Model-agnostic AI assistant with smart routing ("Roost"). Every premium model for one price.

### Models

**Starter (Free):**
- Qwen 3.6, GLM 5, Kimi K2.5, Gemma 4, MiniMax M2.7, MiniMax M3

**Pro (adds):**
- Grok 4.6, Qwen 3.8 Flash, GLM 5.2, DeepSeek V4 Flash (both context variants), Kimi K2.7 Code, Kimi K2.6, MiniMax M3, Qwen 3.8 27B, Nemotron Ultra, Nemotron 3.5 Lightning, Qwen 3.7 Plus, DeepSeek V4 Pro, Inkling

### Plans

| Tier | Price | Included Usage | Notes |
|------|-------|----------------|-------|
| **Starter** | Free | Up to $20/mo | No credit card |
| **Pro** | $10/mo (early access) | Up to $150/mo | Fair-use Roost routing + $75 manual selection |
| **Enterprise** | Custom | Custom | Volume pricing, shared workspaces |

### Key Features
- **Roost smart routing** — auto-selects best model per task
- **BYOK** — run any model with your own API key, no limits
- **Citation verification** and Writing Studio
- **Flock multi-agent** and financial suites
- **Web, Desktop, CLI** under one account

---

## Claude Plans

**Website:** [anthropic.com/pricing](https://www.anthropic.com/pricing)

Anthropic's official subscription tiers with access to Claude models across products.

### Models

| Model | Type | Best For |
|-------|------|----------|
| `Claude Opus 5` | Frontier | Hardest reasoning tasks |
| `Claude Sonnet 5` | Balanced | Daily coding |
| `Claude Haiku 4.5` | Fast | Quick tasks, high volume |
| `Claude Fable 5` | Latest | Newest capabilities |

### Plans

| Tier | Price | Usage | Includes |
|------|-------|-------|----------|
| **Free** | $0 | Limited | Chat, code gen, web search, memory, MCP |
| **Pro** | $17/mo (annual) / $20/mo | More than Free | Claude Code, Cowork, Design, Science, Research |
| **Max** | $100-200/mo | 5x or 20x Pro | Higher output limits, early access, priority |

### Key Features
- **Claude Code** — terminal/IDE coding agent
- **Claude Cowork** — multi-step work agent
- **Claude Research** — deep research reports
- **Microsoft 365 integration** (Pro+)
- **Connectors** with remote MCP
- **Extended thinking** for complex work

---

## OpenAI Codex Plans

**Website:** [openai.com/pricing](https://openai.com/pricing)

OpenAI's subscription tiers for ChatGPT with Codex agent access.

### Models

| Tier | Models |
|------|--------|
| **Go** | Core model |
| **Plus** | Advanced models |
| **Pro** | Frontier Pro model |

### Plans

| Tier | Price | Key Features |
|------|-------|--------------|
| **Go** | $8/mo | More messages/uploads, image creation, longer memory, expanded voice. *No Codex agent.* |
| **Plus** | $20/mo | Advanced models, Thinking image, Work agent, **Codex agent**, deep research, Projects |
| **Pro** | $100/mo | 5x Plus usage, Frontier Pro, max Codex/Work agent, unlimited chat/images, early access |

> **The Codex agent starts at Plus ($20/mo).** The Go tier ($8) is basically just more ChatGPT — no coding agent access.

### Key Features
- **Codex agent** — dedicated coding agent
- **Work agent** — multi-step task execution
- **Deep research** — comprehensive analysis
- **Custom GPTs** / Projects
- **Maximum memory and context** (Pro)

---

## OpenCode Go

**Website:** [opencode.ai](https://opencode.ai)

Multi-model aggregator subscription — one plan, access to many frontier models.

### Models

| Model | Provider |
|-------|----------|
| Grok 4.6 | xAI |
| GLM-5.3 | Zhipu AI |
| GLM-5.3-Flash | Zhipu AI |
| Kimi K3 | Moonshot AI |
| Qwen3.8 Max | Alibaba |
| DeepSeek V4 | DeepSeek |
| MiniMax M3 | MiniMax |
| LongCat-2.0 | — |

### Plan

| Tier | Price | Limits |
|------|-------|--------|
| **Go** | $10/mo | $12/5h, $30/week, $60/month |

> Dollar-based limits (not credits). Usage deducted at each model's pay-as-you-go rate.

---

## Kimi Code

**Website:** [kimi.com/coding](https://www.kimi.com/coding) | **Docs:** [Kimi Code Docs](https://www.kimi.com/code/docs/en/)

Moonshot AI's coding subscription featuring the K3 flagship model (2.8T parameters).

### Models

| Model ID | Version | Context | Speed | Availability |
|----------|---------|---------|-------|--------------|
| `k3` | Kimi K3 | 256K–1M | Standard | Moderato+ (1M needs Allegretto+) |
| `k3-256k` | Kimi K3 (256K) | 256K | Standard | Moderato+ |
| `kimi-for-coding` | K2.7 Code | 256K | Standard | All members (including free) |
| `kimi-for-coding-highspeed` | K2.7 Code HS | 256K | 5-6x faster | Allegretto+ |

### Plans

| Tier | Price | K3 Access | HighSpeed | 1M Context | Credits |
|------|-------|-----------|-----------|------------|---------|
| **Adagio** | Free | No (K2.7 only) | No | No | — |
| **Andante** | ¥49/mo | No | No | No | 1x |
| **Moderato** | ¥99/mo | Yes (256K) | No | No | 2x |
| **Allegretto** | ¥199/mo | Yes (1M) | Yes | Yes | 4x |
| **Allegro** | ¥699/mo | Yes (1M) | Yes | Yes | 10x |

### Key Features
- **Agent Swarm** — multi-agent collaboration (Moderato+)
- **Goal Mode** — autonomous task completion (Allegretto+)
- **Kimi Claw** — cloud/local AI assistant (Allegretto+)
- **5-hour + weekly rate limits** (Kimi Code specific)
- **Shared credit pool** across all Kimi features
- **BYOK** support for third-party tools

---

## Step Plan

**Website:** [platform.stepfun.ai/step-plan](https://platform.stepfun.ai/step-plan) | **Docs:** [Step Plan Docs](https://platform.stepfun.ai/docs/en/step-plan/overview)

StepFun's subscription for flagship models with smart routing. Credit-based monthly allowance.

### Models

| Model | Type | Notes |
|-------|------|-------|
| `step-3.7-flash` | Multimodal reasoning | Native image/video, 3 effort levels |
| `step-3.5-flash` | Agent/coding | 196B total / 11B activated MoE |
| `step-3.5-flash-2603` | High-frequency agent | Token-efficient, low-inference mode |
| `stepaudio-2.5-tts` | Text-to-speech | Contextual TTS |
| `stepaudio-2.5-asr` | Speech recognition | Next-gen ASR |
| `step-router-v1` | Smart routing | Dispatches by task complexity |
| `step-image-edit-2` | Image editing | Text-to-image + editing |

### Plans

| Tier | Price | Monthly Credits | Notes |
|------|-------|-----------------|-------|
| **Flash Mini** | $6.99/mo | 400M | Getting started |
| **Flash Plus** | $9.99/mo | 1,600M | Priority API access |
| **Flash Pro** | $29/mo | 8,000M | Heavy use |
| **Flash Max** | $99/mo | 40,000M | Professional workloads |

> **$1 ≈ 7M Credits.** All tiers get same high-speed model performance. Quarterly/Yearly discounts available.

### Key Features
- **No request-frequency limits** — spend credits flexibly
- **Smart routing** — auto-selects right model for task
- **Multi-device login**
- **MCP tools** coverage
- **Booster packs** available ($6.99/400M, $9.99/1600M)
- **Works with:** OpenClaw, Claude Code, Cline, Kilo Code, Roo Code, Trae, Cursor

---

## GitHub Copilot

**Website:** [github.com/features/copilot](https://github.com/features/copilot/plans) | **Docs:** [Copilot Docs](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals)

The industry-standard AI coding assistant with the broadest model catalog. Uses GitHub AI Credits (1 credit = $0.01).

### Models (all paid tiers get all models)

| Provider | Models |
|----------|--------|
| **Anthropic** | Claude Opus 5, Opus 4.8, Sonnet 5, Sonnet 4.6, Haiku 4.5, Fable 5, Fable 5.1 |
| **OpenAI** | GPT-5.6 Sol/Terra/Luna, GPT-5.5, GPT-5.4, GPT-5.3-Codex, GPT-5 mini |
| **Google** | Gemini 3.7 Flash, 3.6 Flash, 3.5 Flash, 3.1 Pro |
| **xAI** | Grok 4.6, Grok 4.5 |
| **Moonshot** | Kimi K3, Kimi K2.7 Code |
| **Microsoft** | MAI-Code-1.1-Flash |
| **GitHub** | Raptor mini (fine-tuned) |

### Plans

| Tier | Price | Base Credits | Flex Allotment | Total |
|------|-------|--------------|----------------|-------|
| **Pro** | $10/mo | 1,000 | 500 | 1,500 |
| **Pro+** | $39/mo | 3,900 | 3,100 | 7,000 |
| **Max** | $100/mo | 10,000 | 10,000 | 20,000 |
| **Business** | $19/user/mo | — | — | 1,900 |
| **Enterprise** | $39/user/mo | — | — | 3,900 |

### Key Features
- **Code completions** are unlimited (don't use credits)
- **Agent mode** and **Copilot CLI** consume credits
- **Cloud agent** and **code review** included
- **3rd-party agents:** Claude Code and Codex accessible from Copilot
- **Copilot Chat** across IDE, mobile, GitHub.com
- **Audit logs** on Pro+

---

## Cursor

**Website:** [cursor.com/pricing](https://cursor.com/pricing) | **Docs:** [Cursor Models & Pricing](https://cursor.com/docs/models-and-pricing)

AI-native code editor with two usage pools: Cursor's own models (generous) and third-party models (at API price).

### Models

**Cursor Models pool (generous usage):**

| Model | Provider | Notes |
|-------|----------|-------|
| Grok 4.6 | Cursor + xAI | Jointly trained |
| Grok 4.6 (Fast) | Cursor + xAI | Higher effort |
| Grok 4.5 | Cursor + xAI | Previous gen |
| Composer 2.5 | Cursor | Default agent model |
| Composer 2.5 (Fast) | Cursor | Fast mode |

**Other Models pool (billed at API price):**
All frontier models — Claude, GPT, Gemini, etc. Pro includes $20 of third-party usage, Pro+ $70, Ultra $400.

### Plans

| Tier | Price | Cursor Models | 3rd-party Pool | Agent Multiplier |
|------|-------|---------------|----------------|------------------|
| **Hobby** | Free | Limited | None | — |
| **Pro** | $20/mo ($16/yr) | Included | $20 included | 1x |
| **Pro+** | $60/mo ($48/yr) | Included | $70 included | 3x |
| **Ultra** | $200/mo ($160/yr) | Included | $400 included | 20x |
| **Teams Std** | $40/user/mo | Included | Per-seat pool | — |
| **Teams Premium** | $120/user/mo | Included | Larger pool | 5x Standard |

### Key Features
- **Two pools:** Cursor models (big allowance) + third-party (dollar allowance)
- **No hard stop** — overage billed at API rates in arrears
- **BugBot** automated code review
- **Cloud agents** for background tasks
- **MCP support**, skills, hooks
- **Monthly pools don't roll over**

---

## Windsurf

**Website:** [windsurf.com/pricing](https://windsurf.com/pricing)

AI-native IDE (VS Code fork) with Cascade agent. Uses daily + weekly quota windows (no credits since March 2026).

### Models

| Category | Models |
|----------|--------|
| **Premium Plus** | Claude Opus 4.6/4.8/5, GPT-5.4, GPT-5.3-Codex |
| **Premium** | Claude Sonnet 4.6, GPT-5.2, Gemini 3.1 Pro |
| **Lightweight** | Claude Haiku, GPT-5.4 mini, Flash models |
| **Proprietary** | SWE-1.5 (Windsurf's own model) |

### Plans

| Tier | Price | Fast Requests/Day | Notes |
|------|-------|-------------------|-------|
| **Free** | $0 | Limited | Unlimited Tab, unlimited slow requests |
| **Pro** | $20/mo (~$17/yr) | ~17-500 depending on model tier | Standard quota |
| **Max** | $200/mo (~$167/yr) | ~42-1,190 depending on model tier | Parallel agents, cloud agents |
| **Teams** | $40/user/mo | Standard per seat | Centralized billing, BugBot |
| **Enterprise** | ~$60/user/mo | Custom | RBAC, SSO/SCIM, audit logs |

### Key Features
- **Daily + weekly quotas** refresh automatically (no more credit pool)
- **"Fast requests"** = top-tier models; **"slow requests"** = lightweight (unlimited but rate-limited)
- **SWE-1.5** proprietary model included
- **Cloud agents** for background development
- **BYOK supported** — bypass quota entirely, pay API directly
- **Parallel agents** on Max tier

---

## Cline Pass

**Website:** [cline.bot/cline-pass](https://cline.bot/cline-pass) | **Docs:** [Cline Docs](https://docs.cline.bot/getting-started/clinepass)

Subscription exclusively for the Cline coding agent. 2-5x standard API rate limits on curated open-weight models.

### Models

| Model | Provider | Best For |
|-------|----------|----------|
| GLM-5.3 | Z.ai | Deep reasoning |
| GLM-5.2 | Z.ai | Agentic workflows |
| Kimi K3 | Moonshot | Long-horizon coding |
| Kimi K2.7 Code | Moonshot | Code completion |
| Kimi K2.6 | Moonshot | Agentic workflows |
| DeepSeek V4 Pro | DeepSeek | Large changes |
| DeepSeek V4 Flash | DeepSeek | Fast iteration |
| MiMo V2.5 Pro | Xiaomi | Pro workloads |
| MiMo V2.5 | Xiaomi | Efficient edits |
| MiniMax M3 | MiniMax | General coding |
| Qwen3.8 Max | Alibaba | Complex coding |
| Qwen3.7 Max | Alibaba | Heavy workloads |
| Qwen3.7 Plus | Alibaba | Balanced coding |

### Plan

| Tier | Price | Quota |
|------|-------|-------|
| **Cline Pass** | $9.99/mo ($4.99 first month) | 2-5x standard API rate limits |

### Key Features
- **Cline-only** — works in VS Code, JetBrains, CLI
- **Flat subscription** — no per-token billing
- **No lock-in** — still works alongside BYOK
- **Additional processing fee may apply** (on top of $9.99)

---

## Synthetic

**Website:** [synthetic.new/pricing](https://synthetic.new/pricing)

Flat-fee subscription for open-weight models on private infrastructure. No training on your data, prompts deleted within 14 days.

### Models

| Model | Context | Status |
|-------|---------|--------|
| Kimi K3 | 512K | Included |
| Nemotron-3-Super-120B | 256K | Included |
| gpt-oss-120b | 128K | Included |
| Qwen3.8-27B | 256K | Included |
| GLM-4.7-Flash | 192K | Included |
| GLM-5.2 | 512K | Included |
| GLM-5.3-Flash | 512K | Beta |

### Plan

| Tier | Price | Requests/5h | Weekly Credits | Concurrency |
|------|-------|-------------|----------------|-------------|
| **Subscription Pack** | $30/mo ($1/day) | 500 | $24/week (~$102/mo value) | 1 per model |

### Key Features
- **Anthropic-compatible endpoint** — drops into Claude Code
- **OpenAI-compatible endpoint** — works with any agent
- **No token metering** — flat monthly price
- **1 concurrent request per model** (parallel across different models)
- **Stack packs** for higher limits
- **No training on data**, prompts deleted in 14 days
- **Codebase indexing** included (via Nomic embeddings)

---

## Chutes

**Website:** [chutes.ai/pricing](https://chutes.ai/pricing)

Decentralized AI inference with optional subscription tiers. Known for cheapest PAYG rates.

### Models

| Tier | Models |
|------|--------|
| **Base ($3)** | GLM-4.7, MiniMax M2.5, Qwen3-235B, GPT-OSS-120B, and smaller models |
| **Plus ($10)** | GLM-5, GLM-5.1, GLM-5.2, Kimi K2.5, DeepSeek V3.2, Qwen3.5, MiniMax M2.5+ |
| **Pro ($20)** | Same as Plus with larger quota |

### Plans

| Tier | Price | Quota Model | PAYGO Discount |
|------|-------|-------------|----------------|
| **Base** | $3/mo | ~5x PAYGO value/month | 3% off PAYGO |
| **Plus** | $10/mo | ~5x PAYGO value/month | 6% off PAYGO |
| **Pro** | $20/mo | ~5x PAYGO value/month | 10% off PAYGO |

### Key Features
- **TEE (Trusted Execution Environment)** — confidential compute
- **Token-based quota** — capped at 5x subscription value
- **Shorter rolling windows** may apply (4h rolling window observed)
- **Also offers PAYGO** without subscription (competitive rates)
- **GPU deployment** available for private models
- **Model lineup changes** — flagships pulled from Base tier in 2026

---

## NanoGPT

**Website:** [nano-gpt.com/pricing](https://nano-gpt.com/pricing)

Multi-model API gateway with optional subscription. 1000+ models accessible through one API key.

### Subscription Models

| Model | Provider |
|-------|----------|
| GLM 5 | Zhipu AI |
| Kimi K2.5 | Moonshot AI |
| MiniMax M2.7 | MiniMax |
| DeepSeek V3.2 | DeepSeek |

### Plan

| Tier | Price | Included Models | Notes |
|------|-------|-----------------|-------|
| **Subscription** | $12/mo | 4 flagship open models | Weekly input token limits, burst rate limits |
| **PAYG** | From $0.10 | All 1000+ models | No markup on list prices |

### Key Features
- **No markup** — API at list prices
- **1000+ models** via PAYGO
- **Subscription** covers 4 flagship models (weekly limits apply)
- **MCP support** for coding tools
- **BYOK** supported (5% fee)
- **5% invite discount** on queries
- **Crypto or card** payments

---

## Standard Compute

**Website:** [standardcompute.com](https://standardcompute.com/coding-subscription)

Flat-rate subscription with access to ALL frontier models via smart routing. No token meter, no session windows.

### Models (smart-routed)

| Category | Models |
|----------|--------|
| **Frontier** | Claude Opus 5, GPT-5.6 Sol, Gemini 3.1 Pro |
| **Open** | GLM 5.2, Kimi K3, MiniMax M3, DeepSeek V4 |

### Plans

| Tier | Price | Compute Budget | Notes |
|------|-------|----------------|-------|
| **Economy** | $19/mo | ~$65/mo of API work | Entry tier |
| **Standard** | $39/mo | ~$130/mo of API work | Parallel agents, 4% bonus |
| **Pro** | $89/mo | ~$310/mo of API work | Priority scheduling, 6% bonus |
| **Pro+** | $249/mo | ~$880/mo of API work | Highest priority, 8% bonus |
| **Business** | $499/mo | ~$1,800/mo | Unlimited API keys |
| **Growth** | $999/mo | ~$3,700/mo | Region selection (EU/US) |
| **Enterprise** | $2,499/mo | ~$9,300/mo | Priority support |

### Key Features
- **No token meter** — fixed monthly compute budget
- **No 5-hour windows, no weekly caps**
- **Smart routing** — picks best model per request automatically
- **Frontier + open models** in one plan
- **Optional smart pacing** to spread budget across month
- **Unused shared pool** goes back to serving members
- **7-day fair refund** — cancel in first week, pay only for compute used
- **Free starter credit** — no card needed to test

---

---

## Plan Comparison Tables

### Overall Best Picks

| Category | Winner | Price | Why |
|----------|--------|-------|-----|
| **Cheapest** | MiMo Lite | $6/mo | Lowest entry with real coding models + no weekly/5h caps |
| **Best Value** | OpenCode Go | $10/mo | 24 models, 6x usage value, works with any agent |
| **Best Price/Quality** | GLM Lite | $18/mo | GLM-5.3 flagship, 50% off-peak, 20+ tools supported |
| **Best for Model Variety** | GitHub Copilot Pro | $10/mo | 30+ models (Claude, GPT, Gemini, Grok, Kimi) |
| **Best for Open Models** | Perch Pro | $10/mo | 15+ models, smart routing, BYOK, $150 usage |
| **Best for Heavy Use** | Standard Compute | $19/mo | No token meter, no windows, all frontiers |
| **Best for Students** | GitHub Student Pack | Free | $700+ value (JetBrains, Copilot, cloud credits) |
| **Best Free Tier** | Kimi Code (Adagio) | Free | K2.7 Code model, full CLI, no card |
| **Best All-in-One IDE** | Cursor Pro | $20/mo | Grok 4.6 + Composer 2.5, AI-native editor |
| **Best for Multimodal** | MiniMax Plus | $22/mo | M3 + image + speech in one quota |
| **Best for Privacy** | Synthetic | $30/mo | No training, 14-day deletion, Anthropic-compatible |
| **Best for Agent Platform** | Kimi Allegro | ¥699/mo | Swarm, Claw, Goal Mode, 1M context |

---

### Under $10/Month

| Plan | Price | Models | Quota | Best For |
|------|-------|--------|-------|----------|
| **Chutes Base** | $3 | GLM-4.7, MiniMax M2.5, Qwen3-235B, GPT-OSS-120B | 5x PAYGO value | Cheapest sub, good for light use |
| **MiMo Lite** | $6 | 6 MiMo models (v2.5-pro, v2.5, TTS, ASR) | 4.1B Credits/mo | Cheapest with no weekly/5h caps |
| **Qwen Lite** | ~$6 | Qwen3.8, DeepSeek V4, GLM, qwen-image | 2,500 Credits/7 days | Multi-model, 7-day refresh |
| **Step Mini** | $6.99 | Step 3.7 Flash, 3.5 Flash, audio, image | 400M Credits | High-speed reasoning + multimodal |
| **Cline Pass** | $9.99 ($4.99 1st) | 14 open models (Kimi, GLM, DeepSeek, Qwen…) | 2-5x rate limits | Cline users, open models only |

### $10-$20/Month

| Plan | Price | Models | Quota | Best For |
|------|-------|--------|-------|----------|
| **GitHub Copilot Pro** | $10 | 30+ models (all major labs) | 1,500 AI Credits | Best model variety at $10 |
| **Perch Pro** | $10 | 15+ models (incl. Grok 4.6, DeepSeek V4) | Up to $150 usage | Smart routing, BYOK, model-agnostic |
| **OpenCode Go** | $10 | 24 open models (Grok, GLM-5.3, Kimi K3…) | $12/5h, $30/wk, $60/mo | Best value, 6x usage multiplier |
| **NanoGPT** | $12 | GLM 5, Kimi K2.5, DeepSeek V3.2, MiniMax | Weekly token limits | 1000+ models via PAYGO |
| **Kimi Moderato** | ¥99 (~$14) | K3 (256K), K2.7 Code | 60 agent credits | K3 flagship access, budget tier |
| **Mistral Pro** | $14.99 | Medium 3.5, Devstral 2, Codestral | 100 sessions/day | European AI, open weights |
| **GLM Lite** | $18 | GLM-5.3, GLM-5.3-Flash | 2K/5h + 10K/week | Best flagship model at low price |
| **Standard Compute** | $19 | All frontiers (Claude, GPT, Gemini) + open | Flat monthly budget | No token meter, no windows |
| **Claude Pro** | $17-20 | Opus 5, Sonnet 5, Haiku 4.5 | ~5x Free | Frontier model quality |

---

### $20+/Month

| Plan | Price | Models | Quota | Best For |
|------|-------|--------|-------|----------|
| **Codex Plus** | $20 | Advanced models, Codex agent | Tiered | OpenAI ecosystem, Codex agent |
| **Cursor Pro** | $20 | Grok 4.6, Composer 2.5, + 3rd-party | $23rd-party pool | AI-native IDE, in-editor agent |
| **Windsurf Pro** | $20 | Claude, GPT, Gemini, SWE-1.5 | Daily/weekly quota | Cascade agent, VS Code fork |
| **MiniMax Plus** | $22 | M3, M2.7, image, speech | 5h rolling + weekly | Multimodal in one quota |
| **Synthetic** | $30 | 16 open models (Kimi, GLM, Qwen…) | 500 req/5h + weekly | No token meter, privacy-focused |
| **GitHub Copilot Pro+** | $39 | 30+ models | 7,000 AI Credits | Heavy Copilot usage |
| **GLM Pro** | $80 | GLM-5.3, GLM-5.3-Flash | 12K/5h + 60K/week | Professional GLM power user |

---

### Best by Use Case

| Use Case | Best Pick | Runner-Up | Why |
|----------|-----------|-----------|-----|
| **Solo dev on a budget** | OpenCode Go ($10) | MiMo Lite ($6) | Most models per dollar |
| **Daily professional coding** | Cursor Pro ($20) | Windsurf Pro ($20) | Best in-editor agent experience |
| **Heavy agentic workflows** | Standard Compute ($19) | GLM Pro ($80) | No windows, no token meter |
| **Student (any school)** | GitHub Pack (free) | Claude annual ($17/mo) | $700+ free tools |
| **Student (partner school)** | Claude for Education (free) | Kiro Students (free) | Full Pro features free |
| **Open-source only** | Synthetic ($30) | Cline Pass ($9.99) | No proprietary models |
| **Model variety** | GitHub Copilot ($10) | Perch Pro ($10) | 30+ / 15+ models |
| **Privacy-conscious** | Synthetic ($30) | Mistral ($14.99) | No training, data deletion |
| **Multimodal (image+speech)** | MiniMax ($22) | Step Pro ($29) | One quota covers all modalities |
| **Longest context** | Kimi Allegretto (¥199) | GLM Max ($168) | 1M token context windows |
| **Terminal-first coding** | Claude Pro ($20) | Codex Plus ($20) | Best CLI agent experience |
| **IDE-native experience** | Cursor Pro ($20) | Windsurf Pro ($20) | Full AI-native editors |
| **BYOK + subscription** | Perch Pro ($10) | Standard Compute ($19) | Use own keys, no limits |
| **Fastest setup** | OpenCode Go ($10) | Cline Pass ($9.99) | Works with any agent instantly |

---

### Quick Decision Matrix

| If you want... | Go with... | Price |
|----------------|-----------|-------|
| The absolute cheapest | MiMo Lite | $6/mo |
| Most models for $10 | OpenCode Go | $10/mo |
| Best model quality under $20 | Claude Pro | $17-20/mo |
| No usage windows ever | Standard Compute | $19/mo |
| Free as a student | GitHub Student Pack | $0 |
| Best free coding agent | Kimi Code (Adagio) | $0 |
| AI-native IDE | Cursor Pro | $20/mo |
| All frontiers in one sub | Standard Compute | $19/mo |
| Open models only | Synthetic | $30/mo |
| Best value overall | OpenCode Go | $10/mo |

---

## Student Discounts & Freebies

Verified students have access to significant discounts — sometimes free — across many of these platforms. Here's every legit student offer available in 2026.

---

### GitHub Student Developer Pack

**Website:** [education.github.com/pack](https://education.github.com/pack)

The grand student deal. One verification unlocks **$700+** in free tools for ~2 years.

| Offer | Value | What You Get |
|-------|-------|--------------|
| **GitHub Copilot Student** | ~$10/mo | Unlimited completions + AI Credits (⚠️ new sign-ups paused since April 2026; existing users keep it) |
| **GitHub Pro** | ~$4/mo | Advanced repo insights, more Codespaces |
| **JetBrains All Products Pack** | ~$289/yr | IntelliJ, PyCharm, WebStorm, CLion, Rider — free while verified |
| **DigitalOcean** | $200 credit | Cloud credit valid 1 year |
| **Azure for Students** | $100 credit | No credit card required |
| **GitKraken** | ~$60 value | 6 months free (Desktop, GitLens, CLI) |
| **DataCamp** | ~$75 value | 3 months full library access |
| **Free domain** | ~$15 | 1 year via Namecheap/Name.com |

**Eligibility:** Age 13+, enrolled in degree/diploma program, school email or enrollment docs.
**Re-verification:** ~2 years. Apply at [education.github.com/pack](https://education.github.com/pack).

> **Important:** New Copilot Student sign-ups were paused in April 2026. The rest of the pack is unaffected. Graduates get 40% off JetBrains for 2 years.

---

### Claude for Education

**Website:** [claude.com/education](https://www.claude.com/education)

Anthropic does **not** offer individual student discount codes. But there are legit routes:

| Route | What You Get | How |
|-------|-------------|-----|
| **Claude for Education** (partner universities) | Free Claude Pro (incl. Claude Code) | Sign in with university email at [claude.ai](https://claude.ai) |
| **Campus Program** (Ambassadors/Builder Clubs) | Free Pro + API credits + stipend | Apply at [claude.com/programs/campus](https://www.claude.com/programs/campus) |
| **Student Builder API Credits** | ~$50 in API credits | Apply with .edu email for academic projects |
| **Annual billing discount** | $17/mo instead of $20/mo | No student status needed — just choose annual |

**Known partner schools:** Northeastern, LSE, Champlain College, USF Law, Northumbria University.
**Reality check:** If your school isn't a partner, there's no individual discount. Annual billing ($200/yr) is the only price cut Anthropic publishes.

---

### Google AI Pro (Gemini) for Students

**Website:** [gemini.google/students](https://gemini.google/students)

| Region | What You Get | Duration |
|--------|-------------|----------|
| **US students** | Google AI Pro free (valued at $19.99/mo) | 1 year |
| **International students** | Google AI Plus free | 1 year |

**US plan includes:** 4x higher Gemini usage, Gemini Spark, Gemini in Gmail/Docs, **5 TB storage**, Google Health Premium.

**Eligibility:** 18+, US college students (international varies). Redeem by December 31, 2026.
**After trial:** Auto-charges $19.99/mo (or local equivalent) unless cancelled.

---

### ChatGPT for Students

**Website:** [chatgpt.com/students](https://chatgpt.com/students/2026/)

| Offer | Value | Details |
|-------|-------|---------|
| **ChatGPT Work free** | $80 value (4 x $20) | 4 months free for eligible US college students |

**Eligibility:** Full-time or part-time students at eligible US degree-granting institutions. Claim by October 31.

---

### Cursor Student Discount

**Status:** ❌ **Discontinued for new sign-ups** (as of June 25, 2026).

| What happened | Details |
|--------------|---------|
| **Old program** | 1 year free Cursor Pro ($240 value) via SheerID |
| **New students** | Can't claim anymore |
| **Existing users** | Keep their rate until plan expires, then $20/mo |
| **Alternative** | Event-based credits at campus events (starting Fall 2026) |
| **Researchers** | Master's/PhD/educators can request credits via form |
| **Still free** | Cursor Hobby plan (limited agent, no card) |

---

### Zed for Students

**Website:** [zed.dev/education](https://zed.dev/education)

| Offer | Value | Details |
|-------|-------|---------|
| **Zed Student** | $120/yr value | 1 year free Zed Pro |

**Includes:** $10/mo AI token credits, unlimited edit predictions, real-time collaboration.
**Note:** Does NOT include Claude Opus, Claude Fable, or GPT Pro models.

---

### Kiro Students (AWS)

**Website:** [kiro.dev/students](https://kiro.dev/students/)

| Offer | Value | Details |
|-------|-------|---------|
| **Kiro Students** | $20/mo value | 1 year free (1,000 credits/month) |

**Eligibility:** Students at 11 partner universities (US/Canada only):
- Arizona State, Cal Poly SLO, CSU Fullerton, Carnegie Mellon, Georgia Tech, Hampton, NYU, U Chicago, U Toronto, U Waterloo, UT Austin

**No credit card.** After 1 year, auto-downgrades to Free tier (50 credits/mo).

---

### Perplexity Education Pro

**Website:** [perplexity.ai/students](https://www.perplexity.ai/students)

| Offer | Price | Details |
|-------|-------|---------|
| **Education Pro** | $10/mo (50% off) | Everything in Pro + education nudges |
| **Referral stacking** | Up to 24 months free | 1 month per friend referred (with .edu email) |

**Includes:** Comet browser, Perplexity Computer, Learn Mode, unlimited Pro Searches, premium models.
**Verification:** SheerID (may require more than just .edu email).

---

### Windsurf Student Discount

**Status:** ⚠️ Unclear / possibly expired.

Some sources claim 50% off Pro (~$7.50-10/mo with .edu email), but the official pricing page currently shows no dedicated student plan. The standard **Free plan** ($0) remains available to everyone.

---

### Google Antigravity (Free Preview)

**Website:** [antigravity.google](https://antigravity.google/)

| Offer | Details |
|-------|---------|
| **Free during preview** | Google's agentic IDE platform — free with generous Gemini 3 Pro limits |

**Includes:** Gemini 3, Claude Sonnet 4.5, GPT-OSS models. Available on macOS, Linux, Windows.

---

### Quick Student Cheat Sheet

| Service | Student Price | Value |
|---------|--------------|-------|
| **GitHub Student Pack** | Free | $700+ in tools |
| **Claude for Education** | Free (partner schools) | $240/yr |
| **Google AI Pro** | Free 1 year (US) | $240 value |
| **ChatGPT Work** | Free 4 months (US) | $80 value |
| **Zed Pro** | Free 1 year | $120 value |
| **Kiro** | Free 1 year (11 schools) | $240 value |
| **Perplexity** | $10/mo or free via referrals | $240/yr value |
| **JetBrains** | Free via GitHub Pack | $289/yr |
| **Cursor** | ❌ Discontinued | Use Hobby free |
| **Windsurf** | Free plan ($0) | Limited quota |

---

*Last updated: September 2026. Pricing and model availability may change. Always verify on official websites before subscribing.*
