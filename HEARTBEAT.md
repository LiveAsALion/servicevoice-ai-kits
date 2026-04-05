# HEARTBEAT.md
> Active checklist for heartbeat polls. Keep this small — every line costs tokens.
> Update this file when checks change. Remove completed one-offs immediately.

---

## Check Rotation
Run 2–4 of these per day (track last-run in memory/heartbeat-state.json):

- **Email** — Any urgent unread in liveasalion@proton.me?
- **Calendar** — Events in next 24–48h? Anything needing prep?
- **Project blockers** — Any active project stuck waiting on an external input?
- **Weather** — Relevant outdoor plans or operational impact (Phoenix heat, monsoon)?

**Rules:**
- Check each category at most once per 4 hours
- Don't check between 23:00–07:00 Europe/Berlin unless flagged urgent
- If nothing to report from any check, return HEARTBEAT_OK silently
- If something needs attention, surface it clearly with one-line summary

---

## One-Off Reminders
_(Add here when Alistair asks to be reminded of something; delete after firing)_

---

## Current Project Watch
_(Add a line here when a project needs a periodic status nudge)_

- **Fueled for Duty** (`projects/fueled-for-duty/fueled-for-duty.md`) — active build phase; review Decisions Log for undocumented items
- ServiceVoice AI Kits — no project file on disk yet; flag when Alistair is active
- Healthcare Guardian — no project file on disk yet; flag when Alistair is active

## Project File Protocol Reminder
Every active project file is the single source of truth. Session history resets; files don't.
On any project conversation: read the file first, write decisions immediately, never assume chat history will persist.

---

## Last Updated
> v1.0 — 2026-03-26 — Created by nightly self-improvement run (no file existed; heartbeats were firing as no-ops)
