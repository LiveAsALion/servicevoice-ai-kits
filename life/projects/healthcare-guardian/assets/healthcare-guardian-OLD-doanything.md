# Healthcare Guardian — Project File

## Overview
Workplace violence prevention training built specifically for clinical healthcare environments. AI-delivered, compliance-focused, scalable.

**Persona:** Elias Reed (elias@healthcareguardiantraining.com)
**Phase:** Validation → moving toward Launch

---

## Product

### Core Offering
- 8-module training program, ~75 minutes total
- Delivered by AI avatar presenter "Morgan Hayes"
- On-demand, no scheduling required
- Generates audit-ready completion documentation

### Modules
1. The Landscape of Risk
2. Reading the Room
3. Pattern Recognition *(Pilot Module)*
4. The Neuroscience of Fear
5. The Voice Before the Violence
6. Team Safety Dynamics
7. When Words Aren't Enough
8. After the Incident

### Compliance Alignment
- OSHA workplace violence standards
- The Joint Commission WPV Prevention Standards
- CMS Conditions of Participation
- State mandates: CA, NY, TX (expanding)

### Key Stats (on landing page)
- 75% of all workplace assaults happen in healthcare (OSHA)
- Healthcare workers 5× more likely to experience violence than any other profession (BLS)
- Only 30% of incidents are ever reported
- $40–60K average cost of a single nurse turnover event

---

## Pricing

| Tier | Size | Price | Per Seat |
|---|---|---|---|
| Pilot | Min 5 seats | $145 ($29/seat) | $29 |
| Essentials | Up to 50 staff | $1,200/yr | $24 |
| Standard | 51–200 staff | $2,800/yr | $14–28 |
| Professional | 201–500 staff | $5,500/yr | $11–27 |
| Enterprise | 501–1,000 staff | $9,500/yr | $9.50–19 |
| Health System | 1,000+/multi-site | Custom | Contact |

CTA: Reserve Pilot Access → mailto:elias@healthcareguardiantraining.com

---

## Domains

| Domain | Role |
|---|---|
| healthcareguardiantraining.com | Primary |
| healthcareguardian.net | Redirect → primary |
| healthcareguardian.org | Redirect → primary |

**Registrar:** Namecheap
**Server IP:** 85.239.232.215 (VPS)
**DNS:** A records set for all three domains — propagating as of 2026-03-27

---

## Infrastructure (as of 2026-03-27)

- **Web server:** Nginx installed, running, configured
- **Web root:** `/var/www/healthcareguardiantraining.com/html/`
- **SSL:** ✅ Live — Let's Encrypt on all 3 domains (valid through June 25, auto-renewal configured)
- **Redirect config:** `.net` and `.org` → `https://healthcareguardiantraining.com` ✅ working
- **⚠️ DNS cleanup needed:** `healthcareguardiantraining.com` has stale A record `162.255.119.162` alongside correct `85.239.232.215` — remove old record in Namecheap when convenient
- **Security headers:** X-Frame-Options, X-Content-Type-Options, XSS-Protection, Referrer-Policy
- **Firewall:** UFW open on ports 80 and 443
- **Placeholder page:** Live at web root (Coming Soon)

---

## Existing Site
- URL: https://project-83f2cced.doanything.app
- Built in Do Anything website builder
- Displays correctly on mobile, broken on desktop (CSS responsive issue)
- Plan: Rebuild clean on VPS — same content, properly responsive

### Content pulled from existing site
All copy, stats, module descriptions, and pricing already captured above.
Still needed from Alistair:
- Logo / brand images
- Color scheme / branding direction (screenshot of mobile version preferred)

---

## Next Steps
1. ~~DNS propagation + SSL~~ ✅ Done
2. **Remove stale DNS A record** (`162.255.119.162`) from Namecheap for `healthcareguardiantraining.com`
3. Alistair provides logo + branding direction
3. Rebuild landing page clean — responsive for desktop and mobile
4. Deploy to `/var/www/healthcareguardiantraining.com/html/`
5. Validate across devices
6. Move to launch phase

---

## Decisions Log
- 2026-03-27: Initial file created from DM session context
- 2026-03-27: SSL live on all 3 domains via Let's Encrypt (valid through June 25, auto-renewal configured). Stale DNS A record flagged for cleanup.

## Last Updated
2026-03-27 15:20 — SSL confirmed live; stale DNS record flagged
