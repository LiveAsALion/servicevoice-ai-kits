# Founder Intelligence Log — Google Sheet Template
> Standardized schema for all projects. Create one sheet per project.
> Woz reads this weekly and sends Monday morning summary.
> Version 1.0 — April 2026

---

## HOW TO CREATE

1. Go to Google Drive (use ServiceVoiceAI@gmail.com for SVAI, project email for others)
2. New → Google Sheets → rename to `[Project Name] — Founder Intelligence Log`
3. Create two tabs: **Event Log** and **Weekly Snapshot**
4. Set up columns per schema below
5. Share with Woz (read access via Google Sheets API using existing OAuth)

---

## TAB 1 — EVENT LOG

| Column | Format | Notes |
|---|---|---|
| A: Timestamp | DateTime (MST) | Auto-filled by Make.com |
| B: Event Type | Enum | See event types below |
| C: Buyer ID | String | Anonymized — use order ID or hash, never raw email |
| D: Niche | Enum | HVAC / Plumbing / Electrical / Landscaping / Pool / Unknown |
| E: Channel | Enum | meta_ad / organic / referral / direct / unknown |
| F: Language | Enum | english / spanish |
| G: Revenue | Number | 0 for leads; purchase amount for transactions |
| H: Sentiment | Enum | positive / neutral / negative / unknown |
| I: Notes | String | Support email subject, survey text snippet, or call summary |
| J: Status | Enum | new / active / at_risk / churned / n/a |
| K: Follow-up Needed | Boolean | TRUE if action required |

### Event Types
- `lead` — inbound call captured by Retell AI
- `survey_response` — Tally survey submitted
- `purchase` — Lemon Squeezy order completed
- `refund` — order refunded
- `subscription_start` — $47/mo subscription activated
- `subscription_cancel` — subscription cancelled
- `support_email` — inbound email to support inbox
- `no_show` — booked appointment not kept (flagged by owner)
- `upsell_converted` — buyer upgraded from core to subscription or Spanish Pack

---

## TAB 2 — WEEKLY SNAPSHOT

*Woz populates this automatically each Monday. Read-only for reference.*

| Row | Field | Value |
|---|---|---|
| 1 | Week ending | Date |
| 2 | Total leads | Count |
| 3 | Total purchases | Count |
| 4 | Total revenue | $ |
| 5 | Active subscribers | Count |
| 6 | Refunds / cancellations | Count |
| 7 | Support emails | Count |
| 8 | Top niche by lead volume | Enum |
| 9 | Avg sentiment | Score |
| 10 | At-risk buyers | Count |
| 11 | Upsell opportunities | Count |
| 12 | Woz recommendation | Text |

---

## CROSS-PROJECT STANDARD

Apply this same sheet to every active project:

| Project | Sheet owner email | Status |
|---|---|---|
| ServiceVoice AI | ServiceVoiceAI@gmail.com | Create when Make.com is wired |
| Phoenix Pool Leads | Alex.Rivera.PPL@gmail.com | Create when first lead comes in |
| Healthcare Guardian | alistair@healthcareguardiantraining.com | Create now (form submissions active) |
| SpeedShield | liveasalion@proton.me | Create when IAP goes live |
| Fueled for Duty | liveasalion@proton.me | Create when first sale |

**Rule:** Sheet gets created the moment a project has any form of customer touchpoint. Not after validation. Not after launch. Day one.

---

## WEEKLY ANALYSIS — HOW IT WORKS

Every Monday at 8:00 AM MST, Woz:

1. Reads the Event Log via Google Sheets API
2. Calculates weekly metrics
3. Flags: at-risk buyers (no activity 14+ days), upsell hooks (niche/behavior signals), churn events
4. Writes summary to Weekly Snapshot tab
5. Texts Alistair the summary

Format of Monday summary text:
```
📊 SVAI Weekly — [Date]

Leads: X | Purchases: X | Revenue: $X
Active subs: X | Cancellations: X

🔴 At risk: [X buyers — action needed]
🟡 Upsell hooks: [X opportunities]
🟢 Top niche: [HVAC/etc]

Rec: [1-line action item]
```

No fluff. No recap. Just the numbers and one move.
