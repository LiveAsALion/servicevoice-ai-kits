# MEMORY.md
> What has been learned, confirmed, or updated over time.
> This file evolves. Update it when facts shift, projects change phase, or preferences are confirmed through use.
> Keep it short — if it doesn't need to be in every session, move it to the relevant project file.

---

## Operating Rhythm

- Runs parallel projects simultaneously — treats each like a startup with defined phases
- Phase structure: Research → Validation → Launch → Scale
- Phase triggers are specific and measurable (e.g., "30 survey responses = proceed to paid ads")
- Measures progress by real numbers, not activity
- Expects progress reports to open with metrics and blockers — not recaps

---

## Financial Stance

- Operating budget is tight — every dollar has to earn its place
- No paid tools without a clear ROI case
- No spending commitments without explicit approval
- Building toward sophisticated personal investing; currently working on budget discipline via Useorigin
- Uses Origin as financial hub

---

## Time & Location Standard
- **Always reference time in Phoenix, AZ MST (UTC-7).** Arizona does not observe daylight saving time — MST year-round.
- Apply this in all sessions, all projects, all chats (private or group). No exceptions.
- When giving time-based guidance ("check back tonight," "tomorrow morning," etc.) — always anchor to Phoenix local time.

## Confirmed Preferences (Learned Through Use)

- Prefers structured output: tables, status indicators, clear next steps
- Comfortable with uncertainty and making calls on incomplete data
- Does not need reassurance — just report what you found or did
- Will iterate on creative work until it sounds right — not looking for "good enough"
- Requests condensed output when given drafts — if he says cut it, cut it
- Does not want AI fingerprints in written work — especially professional documents and personal letters
- Phoenix-first lens: seasonal demand spikes (115°F summers, monsoon season), large Hispanic customer segment, trades culture

---

## Confirmed Reference Points

- *Beyond OODA* by Varg Freeborn — has read it; use as reference, not recap
- *Red Rising* series — familiar; use as taste reference for Sci-Fi/Fantasy recommendations
- K-9 Unit has faced significant external criticism — navigated without losing direction; this context matters in professional writing

---

## Active Project Index

| Project | File | Current Phase | Notable Status |
|---|---|---|---|
| ServiceVoice AI Kits | life/projects/servicevoice.md | Validation | Validation campaign live ✅ — 3 Meta ads running at $8/day (campaign 6919077778186) pointing to Tally survey. All 5 niche assets pre-built (scripts, Make.com architecture, deployment guide, Notion hub, email sequence, Lemon Squeezy copy, Retell AI agents live). Founder Intelligence logging system designed (2026-04-04). **Open:** Survey responses needed (target 50+ by April 15); Alistair Reddit warmup comments; platform accounts (Make.com, Notion, Lemon Squeezy, ConvertKit) still needed to go live. Hard deadline: April 15 go/no-go. |
| Healthcare Guardian | life/projects/healthcare-guardian/healthcare-guardian.md | Validation | SSL live ✅; email warm-up running through April 7; outreach launches April 8 |
| Trading Bot | life/projects/trading-bot.md | Build | Alpaca API in stack; repo TBD |
| SpeedShield (fka Civic Speed Monitor) | life/projects/speedshield/speedshield.md | Build | Field test passed (2026-03-31); Doze-aware activation live; multi-vehicle BT device picker added (MAC-based matching); double-TTS bug fixed; actual distance TTS; all Android runtime permissions correct (2026-04-01); pending: MAC-based BT field test, deploy update_cameras.py, Codemagic setup, in-app purchase layer, store submissions |
| Fueled for Duty | life/projects/fueled-for-duty/fueled-for-duty.md | Content Production | Cole Mercer avatar + voice clone created in HeyGen (2026-03-27); blocked on API keys |
| Phoenix Pool Leads | life/projects/phoenix-pool-leads.md | Validation | phxpoolpro.com live on VPS (2026-04-02); Docker + Nginx + SSL deployed; DNS conflict on www (CNAME + A record) — needs cleanup; SPF missing spf.resend.com; 0 leads so far, validation threshold = 4 confirmed partners |

---

## Server & Infrastructure

- VPS running Ubuntu 24.04.4 LTS, accessed via PowerShell SSH as root
- UFW firewall active (installed 2026-03-24): default deny inbound, SSH rate-limited on port 22
- **Rule:** Any time a new service is installed that needs an inbound port, flag it immediately and prompt to open the port in UFW before the service is considered functional
- OpenClaw gateway is loopback-only (not publicly exposed)
- SSH key hardening deferred — Alistair deciding on key strategy (Windows + phone backup vs single key)

---

## Last Updated
> Update this line each time the file is edited.
> v1.9 — ServiceVoice index updated to current state (validation campaign live, pre-build sprint complete); 2026-04-04
