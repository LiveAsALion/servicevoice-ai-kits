# ServiceVoice AI Kits — Project File
> Single source of truth. Session history resets. This file does not.
> Update the Decisions Log the same turn a decision is made.

---

## Project Overview

**Concept:** Done-for-you AI voice agent kits for small service businesses (HVAC, plumbing, electrical, landscaping, pool care). Pre-built Retell AI voice agents packaged with templates, scripts, and onboarding guides — enabling SMBs to handle inbound calls, after-hours leads, and appointment booking without hiring.

**Persona:** Malcolm Reid (malcolm.reid@doanything.com)

**Phase:** Validation

**Positioning:**
- Not a SaaS subscription — a kit/product (one-time or annual)
- Target customer: owner-operated service businesses in the $500K–$3M revenue range
- Phoenix-first launch (seasonal demand spike in summer; trades culture is high)
- Pain: missed calls = missed revenue; hiring a receptionist is expensive

---

## Value Proposition

**Core problem:** Service businesses miss 25–40% of inbound calls. Each missed call = lost job. An AI voice agent answers 24/7, qualifies the lead, and books the appointment.

**Differentiator:** Pre-built, configured, and ready to deploy — not a DIY platform requiring setup expertise.

---

## Pricing Structure (Corrected 2026-04-02)

**Original spec (Alistair's intent):** $497 one-time + subscription option for continuous updates + Spanish add-on
**WTP probing:** $397/$497/$797 were market research price points suggested by DoAnything bot to probe where demand clusters — NOT product tiers. Ads correctly never mentioned tiers.

| Product | Price | Notes |
|---|---|---|
| Core Kit | **$497 one-time** | All 5 niches, Retell AI agent, Make.com workflows, deployment guide, Phoenix/AZ scripts |
| Subscription (updates) | **$47/month** | Continuous updates, quarterly refresh, ongoing support — offered at checkout as upsell |
| Spanish Language Pack | **$97 add-on** | Bilingual scripts, Phoenix market-tuned (43% Hispanic market) |
| Done-With-You | **$797** | Add AFTER 20 sales only — 90-min live setup call |

**Launch price decision:** Survey the market at $397/$497 points first. If ≥70% WTP at $497 → launch at $497. If market clusters at $397 → launch there and walk up with social proof. Do not commit to launch price before survey data.

> **Note:** Buyer's ongoing cost (not our revenue) is $90–$150/month paid directly to Retell AI for call usage. Must be disclosed prominently — hidden cost will tank reviews.

---

## Validation Plan (Phase 2 — Updated from Phase 1 Report)

**Organic (Free — do FIRST):**
- [ ] Post WTP surveys in: r/HVAC, r/Plumbing, r/phoenix, r/smallbusiness
- [ ] Post in Facebook groups: Blue Collar Millionaire, HVAC Business Owners, Phoenix Small Business Network
- [ ] Target: 50+ responses, ≥70% WTP in $200–$600 range
- [ ] Timeline: Start immediately, 48-hour collection window

**Paid (only after organic confirms demand — $100 max):**
- [ ] Meta ads: "HVAC business owner Phoenix AZ" targeting
- [ ] Test 3 creative angles (missed calls, time savings, competitor comparison)
- [ ] Google Ads: "AI phone answering for HVAC Phoenix" intent keywords
- [ ] Cap: $100 total, $20/day max

**Success threshold:** ≥50 responses, ≥70% yes at recommended price point

**Pivot trigger:** If <70% yes OR WTP clusters below $300 → test $197 first, or pivot to auto repair / dental niches

**Post-survey (48h):** Compile responses → go/no-go on $397 vs $497 launch price → get Alistair approval before any paid spend

---

## Stack

| Layer | Tool | Cost |
|---|---|---|
| Voice Agent | Retell AI (primary) / Vapi (fallback) | Buyer pays ~$0.11–$0.15/min |
| Workflow | Make.com (default) / n8n (advanced) | Free tier available |
| Calendar | Google Calendar | Free |
| Sales Platform | Lemon Squeezy | 5% + $0.50/transaction |
| Content Delivery | Notion + ZIP | Free |
| Email Sequences | ConvertKit (free to 1,000 subs) | Free |
| Demo Narration | ElevenLabs | Free tier |
| Internal Analytics | Google Sheets + n8n | Free |
| Landing Page | servicevoicekit.com (VPS — Nginx + SSL) | $12/yr domain |

---

## ARR Goals (Set 2026-04-02)

**45-Day Revenue Targets (by ~May 17, 2026)**
- [x] Meta Business Manager rebuilt under Alistair's personal account; System User token provisioned for Woz ✅
- [x] Landing page migrated from DoAnything to VPS (Nginx + SSL) ✅
- [ ] WTP survey at 50+ responses (organic + paid combined)
- [ ] Go/no-go decision locked on launch price ($397 vs $497)
- [x] First $100 Meta validation campaign live and reporting ✅ (launched 2026-04-03)
- [ ] HVAC MVP kit drafted (Retell agent + Make.com workflow + deployment guide)
- [ ] ConvertKit email capture live on landing page
- [ ] Both Reddit accounts at 20+ karma, warmup complete
- [ ] **Revenue target: First sale closed**

**6-Month ARR Targets (by ~October 2026)**
- [ ] 10 one-time sales = $4,970+ gross revenue
- [ ] $47/mo subscription tested at checkout; 20+ active subscribers = ~$940/mo MRR
- [ ] Spanish Language Pack live as $97 add-on
- [ ] All 5 niches built
- [ ] Meta ads at CPL <$40, ROAS >1
- [ ] 20-sale threshold hit → DWY ($797) introduced
- [ ] **ARR target: $500–$1,000/mo recurring (~$6K–$12K ARR) from subscriptions**

---

## ⚠️ Critical Path to April 15 Go/No-Go (12 Days)

> Every blocker flows from one root: **Meta developer SMS verification**. Unblock that first. Everything else cascades.

**Step 1 — Unblock Meta (Alistair, 1 action):**
- Retry SMS verification on Meta developer account (ServiceVoiceAI@gmail.com)
- If SMS fails again: use a different phone number (temp SMS service or Alistair's personal #)
- Once verified: Create Meta App → System User (WozBot) → Generate token → DM to Woz

**Step 2 — Woz loads Meta ads (within 24h of token):**
- Load 3 campaign drafts into ad account act_948122668150382
- Set $8/day CBO, Traffic objective → Tally survey URL
- Expected: ads live within 48h of Step 1 completion

**Step 3 — Reddit warmup (parallel, Alistair manually):**
- PhoenixTradesPro: Post 2 comments this week (scripts provided) — r/HVAC + r/Plumbing
- BuildingAlone_: 1 comment in r/smallbusiness this week
- No product mentions — genuine value only

**Step 4 — Survey threshold:**
- Target: 50+ responses before April 15
- If paid ads driving traffic and survey <50 by April 12 → extend budget to $20/day for final 3 days
- If 50+ responses with ≥70% WTP at $497 → ✅ GO. Lock launch price. Start HVAC kit build.
- If <50 responses OR WTP <70% → investigate pivot before spending more

**Hard deadline:** April 15 — build or kill decision. No slide.

---

## Open Items (as of 2026-04-02)

**On Alistair:**
- [x] Business portfolio confirmed (ServiceVoiceAi) — full control ✅
- [x] Ad account confirmed active (act_948122668150382) ✅
- [x] Page confirmed as portfolio asset ✅
- [x] Malcolm Reid removed from portfolio ✅
- [ ] Complete Meta developer account setup (SMS verification failing — retry tomorrow)
- [ ] Create Meta app → System User (WozBot) → generate token → send to Woz privately
- [ ] Reset PhoenixTradesPro Reddit password (forgot password → ServiceVoiceAI+reddit2@gmail.com)
- [ ] Post Reddit warmup comments this week (scripts provided — 2 comments, 2–3 days apart, one account at a time)

**On Woz (pending Meta token):**
- [ ] Load 3 ad drafts into new Meta BM and set up $8/day Traffic campaign
- [ ] Wire landing page email capture to ConvertKit
- [ ] Find next batch of Reddit threads for week 2 comments

**Build (post-validation):**
- [x] HVAC call script — Phoenix-tuned, full call flow, lead data object ✅ (2026-04-03)
- [x] Plumbing call script ✅ (2026-04-03)
- [x] Electrical call script ✅ (2026-04-03)
- [x] Landscaping call script ✅ (2026-04-03)
- [x] Pool Care call script ✅ (2026-04-03)
- [x] Make.com workflow architecture (3 workflows mapped) ✅ (2026-04-03)
- [x] Deployment guide (full step-by-step for buyers) ✅ (2026-04-03)
- [x] Notion hub structure blueprint ✅ (2026-04-03)
- [x] Post-purchase email sequence (5 emails, ConvertKit-ready) ✅ (2026-04-03)
- [x] Lemon Squeezy product page copy (Core + Subscription + Spanish Pack) ✅ (2026-04-03)
- [ ] Build Make.com blueprint JSON files (needs Make.com API key)
- [x] Build Retell AI agents — all 5 niches live ✅ (2026-04-03)
  - HVAC: agent_365bc8b5dac7e6b350b279a22e
  - Plumbing: agent_77f0704d9e26b07419fab508cb
  - Electrical: agent_d9941c6c464460abf1d640180a
  - Landscaping: agent_3690a560e21cda972afd416beb
  - Pool Care: agent_ffba18524cd9a588015128d737
  - Voice: openai-Nova | LLM: gpt-4o-mini | Post-call analysis: 8 fields each
- [ ] Build Notion hub live workspace (needs Notion access)
- [ ] Configure Lemon Squeezy products + checkout (needs account)
- [ ] Wire ConvertKit email sequence (needs account)
- [ ] Produce onboarding video
- [ ] Spanish Language Pack scripts (bilingual — $97 add-on)

---

## Infrastructure & Credentials

### Landing Page
- **URL:** https://servicevoicekit.com
- **File:** /var/www/servicevoicekit/index.html (on VPS)
- **SSL:** Let's Encrypt — auto-renews July 1, 2026
- **Domain registrar:** Namecheap

### Email
- **Project Gmail:** ServiceVoiceAI@gmail.com

### Surveys
- **Tally (primary):** https://tally.so/r/eqEXQE — live, 0 responses as of 2026-04-02
- **Google Form (backup):** https://forms.gle/cynGrnhaBwonGcMS6
- **Waitlist Google Sheet ID:** 14xf8wBIl6lJFaTcnZhn57F-BZwtj-2H2qbHOjpOxXTk

### Reddit
- **PhoenixTradesPro** (blue collar / trades lane)
  - Email: ServiceVoiceAI+reddit2@gmail.com
  - Created: 2026-03-24 | Karma: ~1 | No product posts until ~May 8
  - Target subs: r/HVAC, r/Plumbing, r/phoenix
  - Credentials: REDDIT_SERVICEVOICE_BLUECOLLAR_* in .env.secrets
- **BuildingAlone_** (white collar / entrepreneur lane)
  - Created: 2026-03-22 | Karma: ~1
  - Target subs: r/smallbusiness, r/Entrepreneur, r/sweatystartup
  - Credentials: REDDIT_SERVICEVOICE_WHITECOLLAR_* in .env.secrets
- **No_Rutabaga7771** — permanently banned (first account, created by DoAnything bot)

### Meta Ads
- **Business Portfolio:** ServiceVoiceAi — confirmed active, Alistair has full control
- **Ad Account:** act_948122668150382 — active, in good standing, Privacy card ••3651 on file
- **Facebook Page:** ServiceVoice AI — confirmed as asset in portfolio
- **Malcolm Reid:** removed from portfolio (2026-04-02)
- **System User (WozBot):** NOT YET CREATED — blocked on Meta developer account SMS verification
- **Status:** Ad account and page are ready. Blocked on developer account verification to create app → system user → API token for Woz

### Google Ads
- **Customer ID:** 869-878-7366 (ServiceVoiceAI@gmail.com)
- **Privacy card ••7715** added via Google Pay
- **Campaign spec drafted** — not loaded yet

---

## Decisions Log
> Append new decisions here. Never overwrite old ones.

| Date | Decision | Rationale |
|---|---|---|
| 2026-03-28 | File created as stub | Project referenced in MEMORY.md but no disk file existed — ghost reference eliminated |
| 2026-03-28 | Phase confirmed: Validation | No build commitment without 30+ survey responses |
| 2026-03-28 | Phoenix-first launch strategy | Local market knowledge, seasonal demand spike, trades culture alignment |
| 2026-04-01 | Ad creative set uploaded (6 images) | Full Meta ad set — hook, pain amplifiers, comparison, CTA creatives — saved to servicevoice-assets/ |
| 2026-04-01 | Phase 1 Research Report ingested | Malcolm Reid report (March 20, 2026) — Strong Go verdict, zero competition in one-time kit space, Phase 2 validation plan defined |
| 2026-04-01 | 7th ad creative saved (banner) | "Stop Losing Jobs to Voicemail" — brand/awareness banner, no CTA |
| 2026-04-01 | Full DoAnything chat session reviewed | Sessions 1–5 ingested; complete Phase 2 history documented below |
| 2026-04-01 | Project transferred to Woz/OpenClaw workspace | DoAnything bot was primary agent; now transitioning to this workspace |
| 2026-04-02 | Pricing model corrected | $397/$497/$797 were WTP probe points, NOT tiers. Core product = $497 one-time + $47/mo subscription for updates + $97 Spanish add-on. DoAnything bot repackaged probes as tiers — that was an error. Ads were correct (no tier language). Survey market before locking launch price. |
| 2026-04-02 | ARR Goals defined | 45-day and 6-month revenue targets set; see ARR Goals section |
| 2026-04-02 | Meta infrastructure confirmed | Business portfolio (ServiceVoiceAi) active under Alistair's personal account; ad account act_948122668150382 in good standing; page confirmed as asset; Malcolm Reid removed; blocked on Meta developer SMS verification to create app + system user token for Woz |
| 2026-04-02 | Landing page migrated | servicevoicekit.com purchased (Namecheap); static HTML rebuilt from DoAnything source; Nginx on VPS; SSL live on both apex and www; auto-renews July 1 |
| 2026-04-02 | Reddit dual-account strategy confirmed | PhoenixTradesPro = trades lane (r/HVAC etc.); BuildingAlone_ = entrepreneur lane (r/smallbusiness etc.); Option C warmup: Woz finds threads + drafts comments, Alistair posts manually |
| 2026-04-02 | Reddit credentials stored | Both accounts in .env.secrets under REDDIT_SERVICEVOICE_BLUECOLLAR_* and REDDIT_SERVICEVOICE_WHITECOLLAR_* |
| 2026-04-02 | Landing page live and tweaked | Hero text scaled down; stat cards fixed; Spanish Pack emoji fixed; pricing rebuilt as single $497 product + add-ons (no tiers); footnote removed |
| 2026-04-03 | Meta API access established | WozBot app created (ID: 1685154492844701); System User WozBot created with admin role; token stored in .env.secrets as META_SYSTEM_USER_TOKEN |
| 2026-04-03 | Validation campaign launched via API | Campaign ID: 6919077778186; Ad Set ID: 6919077908986; 3 ads live (IDs: 6919079370986, 6919079387386, 6919079410386); $8/day CBO; Phoenix 25mi radius; ages 30-55; FB+IG feed only; Advantage+ OFF; all pointing to Tally survey |
| 2026-04-03 | Privacy policy added to servicevoicekit.com | Required to set WozBot app to Live mode; live at https://servicevoicekit.com/privacy.html |
| 2026-04-03 | Pre-build sprint completed | All 5 niche scripts written; Make.com workflow architecture mapped; deployment guide written; Notion hub blueprinted; 5-email post-purchase ConvertKit sequence written; Lemon Squeezy product copy written. Remaining: platform accounts (Retell, Make.com, Notion, Lemon Squeezy, ConvertKit) needed to go live. |
| 2026-04-04 | Founder Intelligence system designed | Workflow 4 (logging) added to Make.com architecture; Google Sheet schema standardized across all projects; Monday 8am MST weekly summary cron job live (cron ID: 5cddc844-4f1c-4532-8e67-36a25904f5fb); Buyer-facing Insights Meta-Agent deferred to post-10-customers milestone |
| 2026-04-05 | Lemon Squeezy product lineup built via Playwright automation | Core Kit (ID: 945297) updated to $497, full description; Monthly Updates (ID: 947854, $47) and Spanish Language Pack (ID: 947855, $97) created and published in UI. Store activation required before products are purchasable — connect Stripe + complete payout setup at Settings → Payouts. |
| 2026-04-05 | Outreach / campaign pre-approval protocol locked | Every campaign (email, social, SMS) stops at draft. Alistair approves before anything sends. No exceptions. Applies to all platforms. |
| 2026-04-05 | ConvertKit deferred to first sale | Sequences are written and ready. Platform not needed until first buyer exists. |
| 2026-04-05 | Make.com scenarios confirmed built | 4 scenarios live in account (org 7159998): SVAI Lead Capture, Emergency Escalation, Confirmation SMS, Founder Intelligence Log — all inactive, pending Make.com account connections (Google, Twilio). |

---

## Phase 1 Research Summary (Malcolm Reid — March 20, 2026)

**Verdict: Strong Go. Proceed to Phase 2 Demand Validation.**

**Market:**
- 1,514 HVAC contractors in Phoenix; 72% single-owner ops (1,091 = core target)
- ~600–800 have enough digital presence to be reachable online
- Trades owners lose $45K–$120K/year from missed calls
- 27–74% of home service calls go unanswered; 85% of missed callers don't leave voicemail
- Summer (May–Sept): 115°F+ heat = 300–400% call volume spike

**Competition:**
- All SaaS competitors charge forever (Allo $45/mo, Rosie $49/mo, AnsweringAgent $50–$150/mo)
- DIY platforms (Retell, Vapi, GoHighLevel) require technical setup — no templates
- **Zero competition in one-time deployable kit space — genuine first-mover window**

**Self-audit flags:**
- National AI adoption data may overstate Phoenix solo-operator tech readiness → validate locally
- Retell usage costs ($90–$150/month buyer-side) must be disclosed prominently — hidden costs will tank reviews
- Older solo trades owners may resist; focus on 30–45 age demo via Facebook + smartphones
- GHL agencies in Phoenix may already offer managed service at $200–$500/mo — differentiate on ownership + price

**Phoenix differentiators to build into kit:**
- Summer surge scripts (AC emergency triage)
- AZ timezone logic (Mountain Standard, no daylight saving)
- Monsoon season roofing scripts (July–Sept)
- Bilingual auto-detection + Spanish Pack
- No-show follow-up with Phoenix drive time acknowledgment
- AZ local pricing benchmarks in scripts

**Report file:** `life/projects/servicevoice-assets/ServiceVoice-AI-Kits-Phase1-Report.pdf`

---

## Ad Creatives (2026-04-01)

Saved to `life/projects/servicevoice-assets/`.

| File | Hook / Concept | Price Shown | CTA |
|---|---|---|---|
| ad-hook-attic-107deg.jpg | "It's 107°. Your phone is ringing. You're in the attic." | — | None (awareness/hook) |
| ad-missed-2400-call.jpg | "You just missed another $2,400 call" | — | Lock In My $100 Discount |
| ad-weekly-reality-check.jpg | "5 missed calls = $7,500 lost. Every. Single. Week." | — | None (pain amplifier) |
| ad-stop-paying-monthly.jpg | "Stop paying $150/mo. Pay once. Own it." | $497 one-time | See How It Works |
| ad-comparison-397-vs-monthly.jpg | Monthly subs $97–$200 vs ServiceVoice $397 one-time | $397 one-time | None |
| ad-built-for-phoenix.jpg | "Built for Phoenix HVAC, Plumbing & Electrical Owners" | — | Get Early Access — $100 Off |
| ad-stop-losing-jobs-banner.jpg | "Stop Losing Jobs to Voicemail." — brand/awareness banner | — | None |

---

## Campaign Drafts (Ready to Load into New Meta BM)

- **Campaign:** "SVA - Survey - Traffic" — $8/day CBO, Traffic objective
- **Ad 1:** "You just missed another call. That's $2,400 walking to your competitor..." / Headline: "Stop Losing Jobs to Voicemail" / CTA: Learn More / URL: tally.so/r/eqEXQE
- **Ad 2:** "Most AI answering services charge $150/month — forever. What if you paid once?" / Headline: "Pay Once. Own It. No Subscriptions."
- **Ad 3:** "Phoenix HVAC, plumbing, and electrical owners — summer is coming..." / Headline: "Built for Phoenix Trades"
- Images: servicevoice-assets/ folder

---

## Notes

- Malcolm Reid is the operating persona — all outreach, landing pages, and communications use this identity
- Do not conflate with Healthcare Guardian (Elias Reed) or Fueled for Duty (Cole Mercer) — keep personas isolated
