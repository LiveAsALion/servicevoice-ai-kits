# Healthcare Guardian — Project File

> Single source of truth. Session history resets. This file doesn't.
> Location: `/root/.openclaw/workspace/life/projects/healthcare-guardian/healthcare-guardian.md`
> Last updated: 2026-04-03

---

## Project Identity

| Field | Value |
|---|---|
| **Company name** | Healthcare Guardian |
| **Product** | B2B online workplace violence prevention training for healthcare organizations |
| **Executive** | Alistair Morrison — President/Executive Director (real identity; Elias Reed persona retired 2026-03-31) |
| **Email (current)** | elias@healthcareguardiantraining.com (active; keep as redirect ≥90 days) |
| **Email (primary)** | alistair@healthcareguardiantraining.com — active; primary outreach address |
| **Website** | healthcareguardiantraining.com (live on VPS) |
| **Current Phase** | Validation — 0 signals received |

---

## Business Model

| Tier | Price | Notes |
|---|---|---|
| Pilot Module (Module 3) | $29/seat (min 5 = $145) | 30-day access, single module |
| Full Curriculum — Pilot Conversion | $49/seat | Pilot participants only; 30-day window post-completion; pilot spend credited |
| Full Curriculum — Standard | $59/seat | Annual billing available |
| Facility License (≤50 seats) | $2,200/year | Admin dashboard, certs, tracking |
| Department License (≤150 seats) | $5,500/year | |
| Enterprise (unlimited) | Contact us | Health systems, multi-site |

**Conversion path:** Post-pilot completion email (Day 3) triggers $49/seat upgrade offer, valid 30 days. Pilot spend ($29/seat) applied as credit toward full curriculum. Landing page and post-pilot email sequence must reflect this.

---

## Target Buyers (3 Personas)

- **A:** Chief Nursing Officer (CNO)
- **B:** VP Patient Safety / Quality
- **C:** HR Director / Workforce Development

---

## Curriculum — 8 Modules (Scripts Complete, Video NOT Produced)

| Module | Title | Runtime | Status |
|---|---|---|---|
| 1 | The Landscape of Risk | 9-10 min | Script ✅ / Video ❌ |
| 2 | Reading the Room | 10-11 min | Script ✅ / Video ❌ |
| 3 | Pattern Recognition (PILOT) | 10-12 min | Script ✅ / Video ❌ |
| 4 | The Neuroscience of Fear | 9-10 min | Script ✅ / Video ❌ |
| 5 | The Voice Before the Violence | 11-12 min | Script ✅ / Video ❌ |
| 6 | Team Safety Dynamics | 8-9 min | Script ✅ / Video ❌ |
| 7 | When Words Aren't Enough | 9-10 min | Script ✅ / Video ❌ |
| 8 | After the Incident | 8-9 min | Script ✅ / Video ❌ |

Total runtime: 76-93 min | SCORM-ready: Yes (planned) | CEU (ANCC): PENDING

---

## Infrastructure Status

| Item | Status | Notes |
|---|---|---|
| Domain (healthcareguardiantraining.com) | ✅ Live | Namecheap, pointing to VPS |
| .net and .org redirects | ✅ Live | Redirect to .com |
| DNS | ✅ All propagated | A, CNAME, MX, SPF, DKIM |
| Google Workspace / elias@ email | ✅ Active | Keep active as redirect ≥90 days |
| Google Workspace / alistair@ email | ✅ Created and active | SMTP configured; App Password saved to .env.secrets (HCG_SMTP_APP_PASSWORD) |
| Landing page | ✅ Live on VPS | Nginx was down 2026-03-31 ~02:48–04:37 CEST; restarted by Woz |
| Gmail SMTP App Password | ✅ Configured | Saved to .env.secrets; Woz has send access via smtp.gmail.com:587 |
| LinkedIn profile (Elias Reed) | 🗑️ DELETE | Profile is live with minimal content — delete immediately. Persona retired; having it live creates credibility risk. |
| LinkedIn profile (Alistair Morrison) | 🟡 Started | Created 2026-04-03 — name and title only. Full buildout (headline, about, featured, content calendar) deferred until validation gate opens. |
| LMS (Teachable) | ❌ Not set up | |
| Stripe / payments | ❌ On hold | Waiting for validation |
| LLC / EIN / Bank | ❌ On hold | Waiting for validation milestone |
| HG Shield logo (H+G in shield) | ❌ Missing | Built in doanything.com workspace; not migrated; needs rebuild — confirmed by Woz 2026-03-31 |

---

## Outreach Status

**Critical issue:** Day 1 emails sent 2026-03-25 from wrong sender (malcolm.reid@doanything.com). Reply-to was set to elias@, but FROM shows wrong address.

| Prospect | Title | Org | Status |
|---|---|---|---|
| Beth Draves | CNO | Banner University Medicine Tucson | Sent (wrong sender), no reply |
| Melisa Serventi | CNO | Banner Health Page | Sent (wrong sender), no reply |
| Susan Mouret | CNO | Banner Desert & Children's | Sent (wrong sender), no reply |
| Shelley Mayes | CNO/COO | Banner Chandler | Sent (wrong sender), no reply |
| Lynn Watson | CNO | Dignity Health St. Joseph's Tucson | Sent (wrong sender), no reply |
| Bridget Cohen | CNO | Banner Rehabilitation Phoenix | ❌ Undeliverable |
| Bennie Clonts | VP/CNO | HonorHealth Scottsdale | Sent (wrong sender), no reply |
| Jorge Salas | CNO | Carondelet St. Mary's | ❌ Bounced |
| Ralph Parker | CEO/CNO | Banner Page Hospital | Sent (wrong sender), no reply |
| Denise Hackett | CNO | AZ Spine & Joint | Not contacted |
| Terresa Thomas | CNO | Arizona Specialty Hospital | Not contacted |
| Susan Kelley | CNO | Gila River Health Care | Not contacted |
| Joy Upshaw | SVP/CNO | Tucson Medical Center | Not contacted |
| Marla Pino-Ramirez | CNO | Northpark Health & Rehab | Not contacted |

Day 3 follow-ups OVERDUE (due 2026-03-28).
Tier 2 (VP Patient Safety) and Tier 3 (HR Directors): Not contacted.

---

## Validation Targets (Gate for LLC/Financials)

| Tier | Target | Status |
|---|---|---|
| Tier 1 | 10+ positive email responses | 0 |
| Tier 2 | 5 discovery calls with budget conversation | 0 |
| Tier 3 | 1 signed LOI or paid pilot | 0 |

---

## Assets Built

| Asset | Status |
|---|---|
| All 8 module scripts + HeyGen formatting | ✅ Complete |
| 10-slide B2B sales deck | ✅ Complete |
| One-pager (print-ready) | ✅ Complete |
| Outreach email sequences (3 personas, 5 touches each) | ✅ Complete |
| LinkedIn content calendar (8 posts) | ✅ Complete |
| Demand validation survey (22 questions, Typeform-ready) | ✅ Complete (not deployed) |
| Landing page copy | ✅ Complete |
| HG Shield logo (navy/gold) | ✅ Complete |
| Avatar production workflow (HeyGen) | ✅ Complete |
| Elias Reed LinkedIn profile content | ✅ Written (not published) |

---

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-03-25 | Outreach launched early (wrong sender) | Gmail integration broken; used malcolm.reid@ as workaround — needs to be resent |
| 2026-03-27 | Moved landing page from doanything.com to VPS | doanything.com support ticket #130 unresolved; user self-resolved |
| 2026-03 | LLC/EIN/Stripe on hold until validation | Correct — don't spend until demand confirmed |
| 2026-03-30 | Project transitioned from doanything.com to Woz/OpenClaw workspace | Full document set uploaded and project file created |
| 2026-03-31 | Elias Reed persona retired | Alistair Morrison is the real executive and face of the company; Elias created credibility/consistency risk in live sales situations; elias@ kept active as redirect only |
| 2026-03-31 | Pilot conversion path added | $49/seat upgrade offer for pilot completers (30-day window, pilot spend credited); addresses the pricing gap between $29 pilot and $59 full curriculum |
| 2026-03-31 | Identity protection plan needed | Alistair is active LEO; social media presence and data broker redaction strategy needed before full public profile is built |
| 2026-04-03 | Identity protection complete | opengovpay.com (unremovable). InstantCheckmate/TruthFinder — suppressed. Spokeo — opt-out submitted (3-7 day processing). BeenVerified — opt-out submitted. Google Alerts set: "Alistair Morrison", "Alistair Morrison" "Healthcare Guardian", "liveasalion@gmail.com". PO Box in hand for LLC. LinkedIn fully unblocked — go live after validation gate opens. |
| 2026-03-31 | Email warming approach confirmed | Manual warm-up (free); new alistair@ address to be created; SMTP App Password grants Woz send access without full credential handoff |
| 2026-03-31 | HG shield logo confirmed missing from current workspace | Text-only wordmark on live site; H+G shield needs rebuild (SVG) |
| 2026-04-01 | Training avatar confirmed as Maya Serrano | Latina female, senior clinician persona. Reverts prior agent's switch to "Morgan Hayes." Stock HeyGen avatar — verify library has suitable option before subscribing. |
| 2026-04-01 | HeyGen plan decision: Business tier ($149/mo, one month) | Only tier with SCORM export — required for LMS integration promised in outreach. Stock avatar approach confirmed; custom Digital Twin deferred until post-validation. |
| 2026-04-03 | SCORM availability confirmed | Business tier SCORM export confirmed by Alistair. Not listed on public pricing page but available in-account. Original plan decision stands. |
| 2026-04-03 | HeyGen spend on hold until validation | Correct per original rule — 0 validation signals received. Resume after outreach produces 10+ positive responses or discovery call. |
| 2026-04-03 | Email warm-up status confirmed | alistair@ live since 2026-03-31; warm-up cron running daily 9am Phoenix. Timeline shortened from 14 to 7 days due to 17 replies on Day 1 (100% reply rate from engaged contacts). Cron runs through 2026-04-07. Address ready for cold outreach 2026-04-08. Deliverability issue (spam subject lines "Re:", "Reminder", etc.) identified and fixed 2026-04-02. |
| 2026-04-03 | HeyGen API key confirmed in .env.secrets | Key: HEYGEN_API_KEY; current account is free tier — 0 API quota; UI shows 3 free videos but free credits are UI-only, not API-accessible. Business upgrade required for API access. |
| 2026-04-03 | Avatar confirmed: Jansen | Avatar ID: 6d0f33201fee4da780b9fee4478a8088 / Voice ID: 9b4cf29f1de846c38df71339d9e7a094. Premium avatar — UUID format confirms it's gated behind paid tier. Not visible via free API. Will be accessible post-Business upgrade. |
| 2026-04-03 | HeyGen Business tier confirmed as correct plan | SCORM export available on Business tier (not listed on public pricing page but confirmed in-account). Public pricing shows Creator ($29) and Pro ($99) only — Business is unlisted/enterprise. Promo codes to try at checkout: BRANDNAT20 (verified Feb 2026), FIRSTMOVERS20 (verified Oct 2025). Annual billing = ~$72/mo vs $149/mo monthly. |
| 2026-04-03 | Colossyan evaluated and rejected | Avatar motion quality too poor for credible healthcare training content. Commonly known issue. HeyGen confirmed as correct platform. |
| 2026-04-03 | HeyGen templates — employee training template noted | Templates support custom avatar swap (Jansen compatible). Worth using as scene base rather than building from scratch. Use when Business upgrade is live. |
| 2026-04-03 | Video production approach clarified | HeyGen handles Jansen segments + scene assembly + text overlays + teaching slides. Stock footage (B-roll) requires separate library (~$15-50/mo or free sources like Pexels). Final SCORM packaging = HeyGen export. 3-tool stack: HeyGen + stock footage source + optional lightweight editor for B-roll stitching. |
| 2026-04-03 | Session protocol failures documented | Agent read wrong project file at session open (Fueled for Duty instead of Healthcare Guardian). Project file was stale — prior sessions failed to update it before closing. Rules updated in AGENTS.md this session. |
| 2026-04-03 | Avatar changed to Jansen | Avatar ID: 6d0f33201fee4da780b9fee4478a8088 / Voice ID: 9b4cf29f1de846c38df71339d9e7a094 (solo assigned voice for Jansen). Replaces Maya Serrano / Shirley selection. |

---

## Immediate Next Steps (Priority Order)

1. ~~**Create alistair@healthcareguardiantraining.com**~~ ✅ Done
2. ~~**Generate SMTP App Password**~~ ✅ Done — saved to .env.secrets
3. ~~**Begin email warm-up**~~ ✅ Running — cron job active daily 9:00 AM Phoenix; started 2026-03-31; completes 2026-04-14
4. **Wait for warm-up to complete (April 8)** — Timeline shortened from 14 to 7 days; 17 Day 1 replies = 100% reply rate; cron runs through April 7; outreach ready April 8
5. **Resend Day 1 outreach** from alistair@ to all prospects who received wrong-sender email
6. **Send overdue Day 3 follow-ups** (were due 2026-03-28)
6. **Rebuild HG shield logo** (SVG — H+G integrated into shield, navy/gold) — Woz to produce on confirmation
7. **Identity protection plan** — data broker redaction + safe social profile build for Alistair (flag when ready to start)
8. **Update landing page** — add $49/seat pilot conversion offer; update executive name/bio (drop Elias)
9. **Deploy validation survey** (Typeform)
10. **Build LinkedIn profile** (Alistair Morrison — after identity protection plan is in place)
11. **Produce Module 3 pilot video** (HeyGen — 48-hour path)
12. **Set up Teachable pilot course + Stripe** (after validation gate hit)
13. **Contact remaining Tier 1 prospects + begin Tier 2/3 outreach**

---

## SMTP App Password — Setup Instructions

To give Woz send access to Google Workspace email:

1. Sign into the Google Account for healthcareguardiantraining.com
2. Go to **My Account → Security**
3. Under "How you sign in to Google" — ensure **2-Step Verification is ON** (required)
4. Scroll to **App Passwords** (at bottom of 2-Step Verification section)
5. Click "Create App Password" — name it "Woz Outreach"
6. Copy the 16-character password generated
7. Save it to: `/root/.openclaw/workspace/secrets/hcg_smtp.txt`
   - Format: `alistair@healthcareguardiantraining.com | <app-password>`
8. Woz will use this for SMTP sends via smtp.gmail.com:587 (TLS)

**Do not share this in chat.** Save directly to the secrets file.

---

## Assets Now Ingested and Preserved

All 24 source PDFs fully read and content preserved. Key working files:
- `life/projects/hcg-assets/pilot-demo-flow.md` — Full 20-min demo script + objection handling ✅
- `life/projects/hcg-assets/README.md` — Asset index ✅

## Additional Assets (Built in doanything.com — Content Now Read)

These were created in the doanything.com workspace and referenced in chat history but not in the uploaded docs. Need to locate or recreate:

- HCG-Phase1-Market-Research-Report.md
- HCG-Phase2-Validation-Master-Plan.md
- HCG-Pilot-Demo-Flow.md (full 20-min demo script + objection handling + enrollment flow)
- HCG-LLC-Operating-Agreement.md
- HCG-Mercury-Application-Guide.md
- HCG-Stripe-Setup-Checklist.md
- HCG-Module1 through Module8 HeyGen Scripts (individual files)
- 10-slide B2B sales deck (built by designer subagent)
- Print-ready one-pager (8.5"×11")

---

## Key Decisions From Chat History

| Decision | Context |
|---|---|
| Physical content excluded | No restraint/physical defense in digital course; saved for future in-person offering |
| Training avatar name | **Jansen** — Avatar ID: `6d0f33201fee4da780b9fee4478a8088` / Voice ID: `9b4cf29f1de846c38df71339d9e7a094` (solo assigned voice). Selected 2026-04-03. Replaces all prior avatar selections (Maya Serrano / Shirley / Morgan Hayes). |
| Pilot-first (Module 3 only) | Validated approach — build only after signals confirmed |
| Direct sales only, first 12 months | No channel partners (HealthStream, Relias) initially |
| Geographic phased: AZ/TX/NY first | CA, IL, WA in second wave |
| Healthcare Guardian name retained | User open to change only if "definitive improvement" — brand retained |
| Compliance claims as marketing language | "Joint Commission aligned" not certified — needs precise framing with buyers |
| LinkedIn CAPTCHA blocked auto-creation | Elias Reed account created via Google SSO manually; profile still not filled in |
| Multiple landing page rebuilds | At least 3 builds across doanything.com projects (c32fbf0b, 83f2cced, e84fc4cb) |
| doanything.com platform abandoned | Custom domain mapping never resolved via platform; user self-hosted on VPS |
| Context limit loops | doanything.com agent hit context limits repeatedly; critical context may be fragmented or lost |

---

## Known Risks

- Alistair is active LEO — public business identity requires data broker redaction and careful social profile construction before going live
- 0 clinical credentials backing the curriculum
- ANCC CEU approval not guaranteed; timeline unknown
- "Joint Commission aligned" is marketing language, not certification
- B2B healthcare sales cycles are 3-12 months
- No social proof / testimonials yet
- Several key assets built in doanything.com workspace — may need recovery or rebuild
- Context limit loops in prior platform mean some decisions may be lost/inconsistent
- Email outreach reputation at risk — wrong-sender issue on Day 1 emails (sent from malcolm.reid@); alistair@ warm-up completes April 7; resend Day 1 + overdue Day 3 follow-ups from alistair@ on April 8
- Warm-up deliverability issue fixed (2026-04-02) — spam subject lines banned from cron pool


---
## Decisions Added from DM Session (2026-04-05)

| Date | Decision | Rationale |
|---|---|---|
| 2026-04-05 | Outreach pre-approval protocol locked | Woz drafts all campaigns (email sequences, follow-ups, new prospect batches) and presents: who is receiving it, exact content, which campaign. Alistair approves, then Woz sends. No exceptions. Triggered by doanything.com wrong-sender incident. |
| 2026-04-05 | HeyGen deferred until post-validation | Intentional — maximize single Business tier month by waiting until after validation gate opens. Not a capability gap. |
| 2026-04-05 | Outreach launch: April 8 from alistair@ | Warm-up complete (17 Day 1 replies = 100% reply rate). First action April 8: resend Day 1 emails to all wrong-sender prospects + send overdue Day 3 follow-ups. Woz will draft both batches for Alistair approval before sending. |
| 2026-04-05 | Uncontacted Tier 1 prospects still pending | Denise Hackett (AZ Spine), Terresa Thomas (AZ Specialty), Susan Kelley (Gila River), Joy Upshaw (Tucson Medical), Marla Pino-Ramirez (Northpark) — not yet contacted. Tier 2 (VP Patient Safety) and Tier 3 (HR Directors) also not started. |
| 2026-04-05 | SMTP confirmed operational | alistair@healthcareguardiantraining.com; credentials in .env.secrets (HCG_SMTP_APP_PASSWORD); Woz sends via smtp.gmail.com:587 |
| 2026-04-05 | Daily morning brief includes HCG tasks | 8am Phoenix brief will surface: outreach status, response count, next prospect batch, and any Alistair actions required |
