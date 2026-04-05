# ServiceVoice AI Kits — Project File
> Single source of truth. Session history resets. This file does not.
> Update the Decisions Log the same turn a decision is made.
> Last updated: 2026-04-05

---

## Project Overview

**Concept:** Done-for-you AI voice agent kits for small service businesses (HVAC, plumbing, electrical, landscaping, pool care). Pre-built Retell AI voice agents packaged with scripts, Make.com workflows, and a Notion delivery hub — enabling SMBs to handle inbound calls, after-hours leads, and appointment booking without hiring.

**Persona:** Malcolm Reid (malcolm.reid@doanything.com)

**Phase:** Validation — April 15 go/no-go deadline

**Positioning:**
- Not a SaaS subscription — a kit/product (one-time purchase)
- Target customer: owner-operated service businesses in the $500K–$3M revenue range
- Phoenix-first launch (seasonal demand spike in summer; trades culture is high)
- Pain: missed calls = missed revenue; hiring a receptionist is expensive

---

## Value Proposition

**Core problem:** Service businesses miss 25–40% of inbound calls. Each missed call = lost job. An AI voice agent answers 24/7, qualifies the lead, and books the appointment.

**Differentiator:** Pre-built, configured, and ready to deploy — not a DIY platform requiring setup expertise.

---

## Pricing Structure

| Product | LS ID | Price | Status |
|---|---|---|---|
| Core Kit | 945297 | $497 one-time | ✅ Published |
| Monthly Updates | 947854 | $47/month | ✅ Published |
| Spanish Language Pack | 947855 | $97 add-on | ✅ Published |
| Done-With-You | — | $797 | Deferred until 20 sales |

**Launch price decision:** Survey market at $397/$497 first. If ≥70% WTP at $497 → launch at $497. Survey data needed before locking.

**Buy URLs (live):**
- Core Kit: https://servicevoice-ai.lemonsqueezy.com/checkout/buy/31232fb7-9dbb-42ca-9440-6cef9e5e4c1a
- Monthly Updates: https://servicevoice-ai.lemonsqueezy.com/checkout/buy/449a4e04-c5bd-41d6-870e-d83b62911f0b
- Spanish Pack: https://servicevoice-ai.lemonsqueezy.com/checkout/buy/b7834732-9690-4c23-965f-9c667e64b80d

> **Buyer ongoing cost disclosure (mandatory):** Retell AI charges ~$0.11–$0.15/min. Typical small business: $90–$150/month paid directly to Retell. Must be disclosed prominently — hidden cost will tank reviews.

---

## Validation Plan

**April 15 go/no-go — 10 days out as of 2026-04-05**

**Paid (live):**
- [x] Meta ads: 3 ads running at $8/day (campaign 6919077778186) → Tally survey
- [ ] Survey responses: TARGET 50+ by April 15 | CURRENT: 0 (check Tally)
- [ ] If <50 by April 12 → increase to $20/day for final sprint

**Organic (Alistair manual):**
- [ ] PhoenixTradesPro: Post 2 warmup comments (r/HVAC + r/Plumbing) — scripts ready
- [ ] BuildingAlone_: 1 comment in r/smallbusiness — script ready
- [ ] No product mentions — genuine value only

**Decision triggers:**
- ≥50 responses + ≥70% WTP at $497 → ✅ GO. Lock $497. Wire Lemon Squeezy delivery. Open for sales.
- <50 responses OR WTP <70% → diagnose before spending more. Possible pivot to $197 or different niche.

---

## Delivery System (as of 2026-04-05)

**Customer journey:**
1. Purchase via Lemon Squeezy checkout
2. LS sends thank-you email with Notion hub link
3. Notion hub contains everything organized — scripts, setup guide, workflow instructions
4. Buyer downloads Make.com blueprint JSONs from links inside Notion hub
5. Buyer imports blueprints into Make.com, connects Retell AI, goes live

**No ZIP file needed** — Notion hub replaces ZIP as primary delivery. Make.com blueprint JSONs hosted as direct download links inside Notion.

### Notion Delivery Hub
- **Status:** ✅ Built and live
- **Root page ID:** 33943355-c6e1-8001-ac30-c12477e261a6
- **Workspace:** Alistair Morrison's Space (notion.so)
- **Integration:** WozBot (API key: NOTION_API_KEY in .env.secrets)
- **Structure:**
  - 👋 Start Here
  - 📦 What's In Your Kit
  - 🚀 Deployment Guide
  - 📞 Call Scripts (5 sub-pages: HVAC, Plumbing, Electrical, Landscaping, Pool Care)
  - ⚙️ Make.com Workflows
  - 📊 Lead Tracking Sheet
  - 🆘 Troubleshooting
  - 📬 Support

---

## Stack & Infrastructure

### Landing Page
- **URL:** https://servicevoicekit.com
- **File:** /var/www/servicevoicekit/index.html (VPS)
- **SSL:** Let's Encrypt — auto-renews July 1, 2026
- **Privacy policy:** https://servicevoicekit.com/privacy.html
- **Domain registrar:** Namecheap

### Lemon Squeezy
- **Store:** ServiceVoice AI (ID: 335379)
- **Store URL:** https://servicevoice-ai.lemonsqueezy.com
- **Account:** liveasalion@gmail.com
- **Plan:** Free
- **Status:** Live — all 3 products published with active checkout URLs
- **Payout:** Connected (confirmed by active buy URLs)

### Retell AI — 5 Live Agents
| Niche | Agent ID |
|---|---|
| HVAC | agent_365bc8b5dac7e6b350b279a22e |
| Plumbing | agent_77f0704d9e26b07419fab508cb |
| Electrical | agent_d9941c6c464460abf1d640180a |
| Landscaping | agent_3690a560e21cda972afd416beb |
| Pool Care | agent_ffba18524cd9a588015128d737 |
- Voice: openai-Nova | LLM: gpt-4o-mini | Post-call analysis: 8 fields each

### Make.com
- **Account:** servicevoiceai@gmail.com (org ID: 7159998)
- **API key:** MAKE_API_KEY in .env.secrets
- **4 scenarios built (all inactive):**
  - SVAI - Lead Capture (ID: 4628289)
  - SVAI - Emergency Escalation (ID: 4628291)
  - SVAI - Confirmation SMS (ID: 4628292)
  - SVAI - Founder Intelligence Log (ID: 4628293)
- **To activate scenarios, buyer must connect:** Google Sheets (OAuth), Gmail (same Google account), Google Calendar (same), Twilio (optional, for SMS)
- **Woz cannot activate these** — connections require buyer's own Google/Twilio accounts; that is by design (buyer owns their data)
- **Remaining:** Export blueprint JSON files → host on GitHub or Google Drive → link inside Notion hub so buyers can download and import

### Meta Ads
- **Business Portfolio:** ServiceVoiceAi (Alistair's personal account)
- **Ad Account:** act_948122668150382 — active, Privacy card ••3651
- **Facebook Page:** ServiceVoice AI
- **App ID:** 1685154492844701
- **System User:** WozBot (admin role)
- **Token:** META_SYSTEM_USER_TOKEN in .env.secrets
- **Campaign:** ID 6919077778186 | $8/day CBO | Phoenix 25mi | Ages 30–55 | FB+IG feed
- **Ads:**
  - 6919079370986 — "You just missed another call..."
  - 6919079387386 — "Stop paying $150/mo..."
  - 6919079410386 — "Phoenix HVAC, plumbing, and electrical owners..."

### Surveys
- **Tally:** https://tally.so/r/eqEXQE — live, responses: **0 as of 2026-04-05 05:17 MST**
- **Tally form ID:** q4WNy2 | Status: Published | Not closed
- **Google Form (backup):** https://forms.gle/cynGrnhaBwonGcMS6
- **Tally API key:** TALLY_API_KEY in .env.secrets
- **Waitlist Sheet ID:** 14xf8wBIl6lJFaTcnZhn57F-BZwtj-2H2qbHOjpOxXTk

### Reddit
- **PhoenixTradesPro** (trades lane)
  - Email: ServiceVoiceAI+reddit2@gmail.com
  - Created: 2026-03-24 | Karma: ~1
  - Target: r/HVAC, r/Plumbing, r/phoenix
  - Credentials: REDDIT_SERVICEVOICE_BLUECOLLAR_* in .env.secrets
- **BuildingAlone_** (entrepreneur lane)
  - Created: 2026-03-22 | Karma: ~1
  - Target: r/smallbusiness, r/Entrepreneur, r/sweatystartup
  - Credentials: REDDIT_SERVICEVOICE_WHITECOLLAR_* in .env.secrets
- **No_Rutabaga7771** — permanently banned (DoAnything bot error, March 2026)

### Google Ads
- **Customer ID:** 869-878-7366 (ServiceVoiceAI@gmail.com)
- **Card ••7715** via Google Pay
- **Status:** Campaign spec drafted, not activated

### Email
- **Project Gmail:** ServiceVoiceAI@gmail.com
- **SMTP:** SV_SMTP_ADDRESS / SV_SMTP_APP_PASSWORD in .env.secrets (placeholder — not yet configured)

### Notion
- **API key:** NOTION_API_KEY in .env.secrets
- **Integration:** WozBot (bot ID: 33943355-c6e1-8110-b933-00276327d732)
- **Hub page:** ID 33943355-c6e1-8001-ac30-c12477e261a6

### ConvertKit
- **Status:** Deferred to first sale. Post-purchase email sequence (5 emails) written and ready.

---

## Assets Built — Full Inventory

| Asset | Status | Location |
|---|---|---|
| HVAC call script | ✅ Complete | servicevoice-assets/scripts/HVAC-call-script.md |
| Plumbing call script | ✅ Complete | servicevoice-assets/scripts/Plumbing-call-script.md |
| Electrical call script | ✅ Complete | servicevoice-assets/scripts/Electrical-call-script.md |
| Landscaping call script | ✅ Complete | servicevoice-assets/scripts/Landscaping-call-script.md |
| Pool Care call script | ✅ Complete | servicevoice-assets/scripts/Pool-call-script.md |
| Make.com workflow architecture | ✅ Complete | servicevoice-assets/workflows/make-workflow-architecture.md |
| Make.com blueprint JSONs | ❌ Not yet exported | Need to export from Make.com → host → link in Notion |
| Deployment guide | ✅ Complete | servicevoice-assets/delivery/deployment-guide.md |
| Notion delivery hub | ✅ Live | notion.so — page ID above |
| Post-purchase email sequence | ✅ Written | servicevoice-assets/email-sequences/post-purchase-sequence.md |
| Lemon Squeezy product copy | ✅ Used | servicevoice-assets/delivery/lemon-squeezy-product-copy.md |
| Founder Intelligence sheet template | ✅ Complete | servicevoice-assets/delivery/founder-intelligence-sheet-template.md |
| Notion hub structure doc | ✅ Complete | servicevoice-assets/delivery/notion-hub-structure.md |
| Ad creatives (7 images) | ✅ Complete | servicevoice-assets/ |
| Landing page | ✅ Live | servicevoicekit.com |
| Privacy policy | ✅ Live | servicevoicekit.com/privacy.html |
| Retell AI agents (5) | ✅ Live | IDs above |
| Phase 1 research report | ✅ Ingested | servicevoice-assets/ServiceVoice-AI-Kits-Phase1-Report.pdf |
| Spanish Language Pack scripts | ❌ Not yet built | Post-validation |

---

## Open Items

**Woz — can execute now:**
- [ ] Export Make.com blueprint JSONs (3 files) → host on GitHub or Google Drive → link in Notion hub
- [ ] Wire Notion hub link to Lemon Squeezy post-purchase delivery (product thank-you page)
- [ ] Pull Tally survey response count via API and report
- [ ] Draft Reddit warmup comments for week 2 (Alistair posts manually)
- [ ] Monitor Meta ad campaign performance

**Alistair:**
- [ ] Post Reddit warmup comments — PhoenixTradesPro (r/HVAC) + BuildingAlone_ (r/smallbusiness)
- [ ] Approve all outreach/campaigns before send (protocol locked)

**Post-validation (after April 15 GO decision):**
- [ ] Wire ConvertKit post-purchase sequence
- [ ] Build Spanish Language Pack scripts ($97 add-on)
- [ ] Produce onboarding video
- [ ] Activate Google Ads campaign
- [ ] Done-With-You tier at 20 sales

---

## ARR Goals

**45-Day (by ~May 17, 2026)**
- [x] Meta validation campaign live ✅
- [x] Landing page live ✅
- [x] All 5 Retell agents live ✅
- [x] Lemon Squeezy store live ✅
- [x] Notion delivery hub built ✅
- [ ] 50+ survey responses
- [ ] Go/no-go locked on launch price
- [ ] First sale closed

**6-Month (by ~October 2026)**
- [ ] 10 one-time sales = $4,970+ gross
- [ ] 20+ active subscribers = ~$940/mo MRR
- [ ] Spanish Language Pack live
- [ ] Meta ads CPL <$40, ROAS >1
- [ ] DWY ($797) introduced at 20-sale threshold
- [ ] $500–$1,000/mo recurring ARR

---

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-03-28 | File created as stub | Project referenced in MEMORY.md but no disk file existed |
| 2026-03-28 | Phase confirmed: Validation | No build commitment without 30+ survey responses |
| 2026-03-28 | Phoenix-first launch strategy | Local market knowledge, seasonal demand, trades culture |
| 2026-04-01 | Ad creative set uploaded (6 images) | Full Meta ad set saved to servicevoice-assets/ |
| 2026-04-01 | Phase 1 Research Report ingested | Strong Go verdict — zero competition in one-time kit space |
| 2026-04-01 | Full DoAnything chat session reviewed | Sessions 1–5 ingested; Phase 2 history documented |
| 2026-04-01 | Project transferred to Woz/OpenClaw | DoAnything was primary agent; now Woz/OpenClaw |
| 2026-04-02 | Pricing model corrected | $397/$497/$797 were WTP probe points, NOT product tiers. Core = $497 + $47/mo + $97 Spanish. DoAnything bot error. |
| 2026-04-02 | ARR goals defined | 45-day and 6-month targets set |
| 2026-04-02 | Meta infrastructure confirmed | Portfolio active, ad account in good standing, Malcolm Reid removed |
| 2026-04-02 | Landing page migrated to VPS | servicevoicekit.com — Nginx, SSL, static HTML |
| 2026-04-02 | Reddit dual-account strategy | PhoenixTradesPro = trades; BuildingAlone_ = entrepreneur; Alistair posts manually |
| 2026-04-02 | Landing page live and tweaked | Pricing rebuilt as single $497 + add-ons |
| 2026-04-03 | Meta API access established | WozBot system user created; token in .env.secrets |
| 2026-04-03 | Validation campaign launched | Campaign 6919077778186; 3 ads; $8/day; Phoenix 25mi |
| 2026-04-03 | Privacy policy added | Required for Meta app Live mode |
| 2026-04-03 | Pre-build sprint completed | All 5 scripts, Make.com architecture, deployment guide, email sequence, LS copy |
| 2026-04-04 | Founder Intelligence system designed | Workflow 4 (logging) added; weekly summary cron live (ID: 5cddc844) |
| 2026-04-05 | Lemon Squeezy fully built via Playwright | Core Kit $497 ✅; Monthly Updates $47 ✅; Spanish Pack $97 ✅; all published with live buy URLs |
| 2026-04-05 | Store confirmed live | All 3 products have active checkout URLs; payout account connected |
| 2026-04-05 | Delivery model: Notion hub (no ZIP) | Notion hub replaces ZIP; Make.com blueprint JSONs hosted as download links inside Notion |
| 2026-04-05 | Notion delivery hub built | Full hub live: 8 sections + 5 niche script sub-pages; WozBot integration active |
| 2026-04-05 | ConvertKit deferred to first sale | Sequences written; platform not needed until first buyer |
| 2026-04-05 | Make.com scenarios confirmed built | 4 scenarios in account — inactive, pending Google/Twilio connections |
| 2026-04-05 | Outreach pre-approval protocol locked | Every campaign stops at draft; Alistair approves before send; no exceptions |
| 2026-04-05 | Campaign approval protocol | All social/email/ad campaigns require Alistair sign-off before publishing |

---

## Phase 1 Research Summary

**Verdict: Strong Go. Proceed to Phase 2 Demand Validation.**

- 1,514 HVAC contractors in Phoenix; 72% single-owner ops
- Trades owners lose $45K–$120K/year from missed calls
- 27–74% of home service calls go unanswered
- Summer (May–Sept): 300–400% call volume spike
- Zero competition in one-time deployable kit space
- All SaaS competitors charge forever ($45–$150/mo)

**Self-audit flags:**
- Retell usage costs ($90–$150/month buyer-side) must be disclosed — hidden costs tank reviews
- Focus on 30–45 age demo via Facebook
- GHL agencies may offer managed service at $200–$500/mo — differentiate on ownership + price

**Phoenix differentiators built into kit:**
- Summer surge scripts (AC emergency triage)
- AZ timezone logic (MST, no daylight saving)
- Monsoon season roofing scripts (July–Sept)
- Bilingual auto-detection + Spanish Pack
- AZ local pricing benchmarks in scripts

## Decisions Added from DM Session (2026-04-05 continued)

| Date | Decision | Rationale |
|---|---|---|
| 2026-04-05 | ConvertKit dropped entirely for now | SMTP direct send sufficient for 0-20 customers. ConvertKit reminder cron set at 20-customer threshold (cron ID: bc78e06b). |
| 2026-04-05 | Reddit comment karma threshold set at 20 (not 50) | 20 comment karma in relevant subreddits is meaningful signal; global karma number is less relevant. Age threshold remains 30 days. Daily check cron live (ID: e3a51185). |
| 2026-04-05 | Daily 8am Phoenix morning brief live | Includes ServiceVoice survey count, Meta ad spend, Reddit karma, Alistair tasks. Cron ID: c2f5c176. |
| 2026-04-05 | Skill-building rule established | Any task done 3+ times requires a Playwright automation skill or SMTP outreach skill. Rule written to AGENTS.md and operating-principles.md. |
| 2026-04-05 | Model routing strategy planned | Sonnet remains primary reasoning brain. Haiku or Gemini Flash for routine crons. Pending API keys: Perplexity (research), Grok (social content/trends), Codex (code tasks). |
| 2026-04-05 | Notion delivery hub fully live | Built via API: 8 sections, 5 niche script sub-pages. WozBot integration active. Delivery = Notion link (no ZIP). |
| 2026-04-05 | Make.com blueprint JSONs remaining | Need to export 3 scenario blueprints → host → link inside Notion hub. Last remaining delivery asset. |
| 2026-04-05 | Lemon Squeezy store fully live | All 3 products published with active buy URLs. Payout confirmed connected. |
