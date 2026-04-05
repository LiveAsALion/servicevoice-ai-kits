# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## GitHub

- PAT location: `/root/.openclaw/.env.secrets` → `GITHUB_PAT`
- Scope: repo (push access to LiveAsALion repos)
- Added: 2026-03-28

---

## Python / Playwright

- Python venv: `/opt/playwright-venv`
- Playwright binary: `/opt/playwright-venv/bin/playwright`
- Run scripts: `sudo -u playwright /opt/playwright-venv/bin/python3 script.py`
- Scripts directory: `/opt/playwright-scripts/` (owned by playwright user)
- Chromium installed (headless browser automation)
- Runs as non-root `playwright` system user (UID 109) — sandbox-safe
- Use for: Gemini shared links, Google Docs, any page behind a login wall

### Google Session Cookies
- Store exported cookies at: `/root/.openclaw/workspace/secrets/google_cookies.json`
- One-time export from your browser; Playwright loads them to bypass login
- **Configured** — cookies saved 2026-03-29; expires ~2027-03-xx (check if Playwright auth fails)

---

Add whatever helps you do your job. This is your cheat sheet.
