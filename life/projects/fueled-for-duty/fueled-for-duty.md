# Fueled for Duty

## Overview
A content brand targeting first responders (LEO, firefighters, paramedics, nurses) built around functional nutrition and performance. Persona: **Cole Mercer** — believable, relatable, built for this audience.

**Current Phase:** Content Production — building initial video assets via HeyGen

---

## Persona: Cole Mercer

- Former/current LEO tone — authentic to the shift-work audience
- Voice clone created in HeyGen (2026-03-27)
- Avatar created in HeyGen (2026-03-27)
- **Avatar ID:** _pending — Alistair to provide_
- **Voice ID:** _pending — Alistair to provide_

---

## Decisions Log

### 2026-03-27 — Initial HeyGen Session
- Cole Mercer avatar + voice clone created in HeyGen by Alistair
- Sample video rendering in progress

**Intro Script (locked):**
> "12-hour shift. 115 degrees. Vending machine for dinner — again. I'm Cole Mercer, and I got tired of running on fumes. This page is for every LEO, firefighter, paramedic, and nurse who's done the same thing. No fluff. Just fuel that actually works on the job."

**Video Production Decisions:**
- Captions: YES — auto-generate in HeyGen, mandatory
- Name card: YES — `Cole Mercer | Fueled for Duty`, bottom corner, full duration
- Text overlay: Flash "12-hour shift. 115 degrees." as graphic in first 2 seconds, simultaneous with audio hook
- End quote/headline: NO — script closes strong, don't add overlay

**HeyGen Automation Pipeline (planned):**
- Flow: script → HeyGen API → render → Ayrshare → posted
- Fully automated target
- Alistair handing full account ownership to Woz for posting and monetization

**Blocked On:**
- HeyGen API key (Alistair to provide)
- Avatar ID for Cole Mercer
- Voice ID (cloned voice)
- Ayrshare account/API key
- Alistair circling back later (from session on 2026-03-27)

---

## Platform Strategy
- Short-form video (TikTok, Reels, YouTube Shorts) as primary distribution
- Audience: first responders — LEO, firefighters, paramedics, nurses
- Hook-first content format — lead with the pain, not the product

---

## Next Actions
- [ ] HeyGen Business tier upgrade (deferred — waiting for HCG validation first)
- [ ] Once HeyGen is live: provide Avatar ID and Voice ID for Cole Mercer
- [ ] Build HeyGen → Ayrshare automation pipeline (Ayrshare API key ✅ already in .env.secrets; Instagram + TikTok connected)
- [ ] Define product / affiliate structure (what Cole actually recommends)
- [ ] Review sample video render once HeyGen is active

## Infrastructure Status (2026-04-05)
| Item | Status |
|---|---|
| HeyGen account | ✅ Active (free tier — 0 API quota; Business upgrade needed for API + SCORM) |
| HeyGen API key | ✅ In .env.secrets (HEYGEN_API_KEY) — unusable until Business upgrade |
| Ayrshare API key | ✅ In .env.secrets |
| Instagram (@fueledforduty) | ✅ Connected to Ayrshare |
| TikTok (@fueledforduty) | ✅ Connected to Ayrshare |
| Cole Mercer avatar | ✅ Created in HeyGen by Alistair (2026-03-27) — Avatar/Voice IDs not yet logged |
| Cole Mercer voice clone | ✅ Created in HeyGen by Alistair (2026-03-27) |

## Blocker
**HeyGen Business tier** — required for API access and video production. Intentionally deferred until HCG validation gate is hit (~10+ positive responses). One month subscription at ~$149 covers both HCG curriculum production AND FFD content batch. Purchase together to maximize the single month.
