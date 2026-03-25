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

| Project | File | Current Phase |
|---|---|---|
| ServiceVoice AI Kits | /projects/servicevoice.md | Validation |
| Healthcare Guardian | /projects/healthcare-guardian.md | Validation |
| Trading Bot | /projects/trading-bot.md | Build |
| Civic Speed Monitor | /projects/civic-speed-monitor.md | Build |

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
> v1.1 — added server/infra section, firewall reminder rule
