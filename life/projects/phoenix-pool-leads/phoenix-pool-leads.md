# Phoenix Pool Leads (PPL) — Project File

**Persona:** Alex Rivera (Alex.Rivera.PPL@gmail.com)
**Phase:** Validation — infrastructure live, Resend domain pending verification
**Last Updated:** 2026-04-02

> **SESSION PROTOCOL:** At the start of every conversation involving this project, read this file before responding. At the end of every session, update this file with all decisions, progress, and upcoming steps. Session history resets — this file does not.

---

## Business Model

- **Revenue model:** $99 flat per exclusive lead (per-lead only — commission model deferred indefinitely)
- **Homeowner side:** Free matching service via landing page form
- **Partner side:** No contract, no monthly fee initially — referral-only to start
- **Supply validation threshold:** 4 confirmed partners before activating paid ads
- **Scaling plan:** Prove model in pool vertical first, then expand to HVAC, lawn, solar, etc. under `homeprosaz.com` brand

---

## Decisions Log

| Date | Decision |
|---|---|
| 2026-03-18 | Project launched, outreach campaign started |
| 2026-03-18 | Initial landing page built in Next.js (DoAnything) |
| 2026-03-18 | Initial $100 ad budget approved in principle — held pending validation |
| 2026-03-20 | Outreach expanded to 80+ pros |
| 2026-03-26 | Day 7 follow-up sequence drafted |
| 2026-03-26 | Google Ads campaign built (paused pending validation) |
| 2026-04-01 | Project transferred from DoAnything to Woz/OpenClaw workspace |
| 2026-04-01/02 | Full project analysis completed — probability ~65-70% with sharp execution |
| 2026-04-01/02 | Domain strategy: use `phxpoolpro.com` for pool validation; buy/park `homeprosaz.com` for future expansion |
| 2026-04-01/02 | Decided against "leads" in domain name — signals broker, erodes homeowner trust |
| 2026-04-01/02 | `phxpoolpro.com` purchased on Namecheap — WhoisGuard enabled, Premium DNS skipped |
| 2026-04-01/02 | `homeprosaz.com` purchased on Namecheap — parked |
| 2026-04-01/02 | Docker installed on VPS (85.239.232.215) |
| 2026-04-01/02 | New landing page built and deployed — `/srv/phxpoolpro/` on VPS, Docker-isolated |
| 2026-04-01/02 | Nginx configured to proxy phxpoolpro.com → Docker container (127.0.0.1:3000) |
| 2026-04-01/02 | SSL cert issued via Certbot — auto-renews |
| 2026-04-01/02 | Resend account created; domain `phxpoolpro.com` added to Resend |
| 2026-04-01/02 | Resend API key stored in `/root/.openclaw/.env.secrets` as `PHXPOOLPRO_RESEND_API_KEY` |
| 2026-04-01/02 | Alex.Rivera.PPL@gmail.com App Password stored in `.env.secrets` for inbox monitoring |
| 2026-04-01/02 | Notification email target: Alex.Rivera.PPL@gmail.com (until Google Workspace set up) |
| 2026-04-01/02 | MX record skipped — Namecheap Email Forwarding locks MX; MX is optional (bounce tracking only) |
| 2026-04-01/02 | DNS records added: A @, A www → 85.239.232.215; DKIM TXT resend._domainkey; SPF TXT send |
| 2026-04-01/02 | Cron job set to poll Resend verification status every ~90 min; auto-sends test email + disables self when verified |
| 2026-04-02 | Resend domain status: DKIM verified ✅, SPF pending ⏳, MX skipped — overall status cycling between pending/failed |
| 2026-04-02 | Revenue model locked: $99 flat per-lead (exclusive). Commission model cut entirely. Per-lead is simpler, verifiable, and easier to pitch. |
| 2026-04-02 | 3A Pools close call script built — `life/projects/phoenix-pool-leads/assets/3a-pools-call-script.html` (print-ready) |
| 2026-04-02 | Partner one-pager built — `life/projects/phoenix-pool-leads/assets/partner-one-pager.html` (print-ready, email-ready) |

---

## Infrastructure Status

| Component | Status | Notes |
|---|---|---|
| phxpoolpro.com | ✅ Live | HTTPS, Nginx, Docker, SSL |
| Landing page | ✅ Live | Next.js, form functional |
| Form → Resend API | ✅ Wired | Returns 200; blocked only by domain verification |
| Resend domain verification | ⏳ Pending | DKIM ✅, SPF ⏳ — polling cron active |
| Docker isolation | ✅ Active | No host mounts, separate network, 127.0.0.1 only |
| Google Ads campaign | ⏳ Paused | Fully built, ready to activate |
| homeprosaz.com | 🅿️ Parked | Future expansion brand |
| Google Workspace | ❌ Not set up | alex@phxpoolpro.com inbox pending |
| Google Sheets service account | ❌ Not set up | Deferred |

### Server Details
- **VPS IP:** 85.239.232.215 (Ubuntu 24.04.4 LTS)
- **Project dir:** `/srv/phxpoolpro/`
- **Secrets:** `/root/.openclaw/.env.secrets`
- **Nginx config:** Existing server, same pattern as HCG site
- **Docker:** v29, Compose v5

### DNS Records (phxpoolpro.com — Namecheap)
| Type | Host | Value |
|---|---|---|
| A | @ | 85.239.232.215 |
| A | www | 85.239.232.215 |
| TXT | resend._domainkey | p=MIGfMA0...DAQAB (full DKIM key) |
| TXT | send | v=spf1 include:amazonses.com ~all |
| TXT | _dmarc | v=DMARC1; p=none; |
| MX | (skipped) | Email Forwarding active — Namecheap blocks MX add |

### Resend Domain
- **Domain ID:** `21ccad13-d45c-4cad-b1b8-da2b09568136`
- **Verification cron job ID:** `5bf75689-0396-4192-adf9-afc9e86062da` (polls ~90 min, self-disables on verified)

---

## Current Metrics (Supply Side)

| Metric | Count |
|---|---|
| Total companies in tracking sheet | 277 |
| Emails delivered | 78 |
| Emails sent (unconfirmed) | 44 |
| Bounced | 30+ |
| Confirmed Partners | **1** — Proactive Pool & Spa |
| Replied Interested | **1** — 3A Pools (needs close call) |
| Replied No Thanks | 1 — Love Pool Care |
| Validation threshold | 4 confirmed — **NOT HIT** |
| Total outreach estimated | ~120+ emails |

## Current Metrics (Demand Side)

| Metric | Count |
|---|---|
| Homeowner leads collected | **0** |
| Ad spend | $0 |
| Landing page | ✅ Live at phxpoolpro.com |
| Form functionality | Wired — blocked by Resend verification only |

---

## Key Contacts

| Company | Contact | Status |
|---|---|---|
| Proactive Pool & Spa | proactivepool@gmail.com | ✅ Confirmed Partner |
| 3A Pools | sales@3apools.com | 👀 Replied Interested — needs close call |
| Orange Tree Pools | orangetreepools@gmail.com | Delivered |
| Guardian Pool Service | James@guardianpoolservice.com | Delivered |
| Neptune Pools | Daryl@neptunepoolsaz.com | Delivered |
| Integrity Pool Care | support@integritypoolcareaz.com | Delivered |

---

## Open Blockers

1. **Resend domain not verified** — DKIM ✅, SPF ⏳. Cron polling. Once verified: test email auto-fires to Alex.Rivera.PPL@gmail.com, cron disables itself.
2. **Supply validation not hit** — 1 confirmed, need 4. Next step: call 3A Pools to close (#2), then pursue 2 more.
3. **Zero homeowner leads** — demand infrastructure live but not yet activated. Organic (Facebook groups, Nextdoor) can start now at $0. Paid Google Ads ready to flip on.
4. **Google Workspace not configured** — alex@phxpoolpro.com inbox doesn't exist yet. Using Alex.Rivera.PPL@gmail.com in the interim.
5. **Google Sheets service account** — not set up. Woz can't write to tracking sheet yet.

---

## Next Steps (Prioritized)

### Immediate (this week)
1. **Call 3A Pools** — close them as confirmed partner #2
2. **Phone outreach to 5-10 more pool pros** from existing list — higher response rate than email
3. **Wait for Resend verification** — cron will notify automatically; then test form end-to-end
4. **Organic demand seeding** — post in Phoenix homeowner Facebook groups / Nextdoor as Alex Rivera

### Once Resend Verified
5. **Full form test** — submit real lead, confirm notification + homeowner confirmation emails
6. **Decision on Google Ads timing** — consider running supply + demand validation in parallel at low spend ($10–20/day)

### Deferred
7. Google Workspace setup — add phxpoolpro.com as alias domain
8. Google Sheets service account — for Woz inbox/sheet monitoring
9. MX record — add later if Email Forwarding is ever disabled on Namecheap

---

## Assets Built (Full Inventory)

| Asset | Location / Status |
|---|---|
| Landing page (Next.js) | `/srv/phxpoolpro/` — live |
| Form API route | Built into Next.js app |
| Docker setup | `/srv/phxpoolpro/Dockerfile`, `docker-compose.yml` |
| Nginx config | `/etc/nginx/sites-available/phxpoolpro` |
| SSL cert | Certbot, auto-renews |
| Google Ads campaign | Built in Google Ads — paused |
| Google Ads setup guide | PDF — on file |
| Google Ads brief | PDF — on file |
| Partner onboarding sequence | PDF — 3-step email sequence |
| Day 7 follow-up sequence | PDF — 4 variations A/B/C/D |
| Target email list | ~75 emails |
| Tracking sheet | Google Sheets ("Phoenix Pool Leads Tracking") |
| 3A Pools call script | `life/projects/phoenix-pool-leads/assets/3a-pools-call-script.html` — print-ready |
| Partner one-pager | `life/projects/phoenix-pool-leads/assets/partner-one-pager.html` — print/email-ready |

---

## Project Analysis Summary (2026-04-02)

**Probability of success: 65–70%** — if execution sharpens.

**What's strong:** Real market (500k+ Phoenix pools), proven model (HomeAdvisor/Angi at scale), local advantage, solid assets built, infrastructure live.

**What's weak:** Supply validation stalled at 1/4 after 120+ emails (organic cold email strategy largely failed), zero demand generated, no product built yet (matching is manual), April–May window closing before Phoenix summer peak.

**Critical path to viability:** Get to 4 confirmed partners → activate Google Ads → generate first 5 homeowner leads → make first match → prove the loop works.

---
## Decisions Added from DM Session (2026-04-05)

| Date | Decision | Rationale |
|---|---|---|
| 2026-04-05 | Outreach pre-approval protocol locked | Every campaign stops at draft. Alistair approves before send. Applies to all PPL outreach. |
| 2026-04-05 | Twilio deferred | Not useful until PPL has confirmed partners with phone numbers to text. Revisit at 4+ partners. |
| 2026-04-05 | SPF record fix still needed | phxpoolpro.com SPF missing spf.resend.com — Alistair action in Namecheap DNS. Blocks Resend verification. |
| 2026-04-05 | 3A Pools close call still pending | Replied interested; Alistair needs to call to close as partner #2. Critical path to validation threshold. |
| 2026-04-05 | Daily morning brief includes PPL tasks | 8am Phoenix daily brief will surface PPL blockers and Alistair actions |
