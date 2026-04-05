# ServiceVoice AI — Make.com Workflow Architecture
> Blueprint for all automation workflows included in the kit.
> Build these once Make.com API key is available.
> Version 1.0 — April 2026

---

## OVERVIEW

Each ServiceVoice AI kit includes 3 Make.com workflows:

| Workflow | Trigger | Purpose |
|---|---|---|
| 1. Lead Capture | Retell AI webhook (call ends) | Log lead data, notify owner, book appointment |
| 2. Emergency Escalation | Retell AI webhook (urgency = emergency) | Immediately text owner/on-call tech |
| 3. Confirmation Text | After booking confirmed | Send SMS confirmation to caller |

---

## WORKFLOW 1 — LEAD CAPTURE

**Trigger:** Webhook from Retell AI (fires when call ends + data collected)

**Payload received:**
```json
{
  "caller_name": "John Smith",
  "address": "4521 W Thunderbird Rd, Phoenix AZ 85053",
  "issue_description": "AC not cooling, running constantly",
  "urgency": "standard",
  "preferred_time": "afternoon",
  "callback_number": "602-555-1234",
  "language": "english",
  "priority_flag": false,
  "call_timestamp": "2026-06-15T14:23:00-07:00"
}
```

**Steps:**

```
[Webhook] Receive Retell payload
    ↓
[Router] Branch on urgency
    ├── urgency = emergency → Workflow 2 (Emergency Escalation)
    └── urgency = standard / estimate → Continue
    ↓
[Google Sheets] Append row to "ServiceVoice Leads" sheet
    Columns: Timestamp | Name | Address | Issue | Urgency | Preferred Time | Phone | Language | Status
    ↓
[Gmail / SMTP] Send email notification to owner
    To: [owner_email]
    Subject: "New Lead: [caller_name] — [issue_description]"
    Body: Full lead summary
    ↓
[Twilio / SMS] Send SMS to owner
    "New lead: [Name] at [Address]. [Issue]. Wants [preferred_time]. Call: [phone]"
    ↓
[Google Calendar] Create appointment block
    Title: "ServiceVoice Lead — [caller_name]"
    Time: Based on preferred_time (morning = 9am, afternoon = 1pm, next business day default)
    Description: Full issue details + callback number
    ↓
[END]
```

---

## WORKFLOW 2 — EMERGENCY ESCALATION

**Trigger:** Router branch from Workflow 1 when urgency = emergency OR priority_flag = true

**Steps:**

```
[Webhook] Receive emergency payload
    ↓
[Twilio / SMS] Immediate text to on-call tech
    "🚨 EMERGENCY: [Name] at [Address]. [Issue]. Call NOW: [phone]"
    ↓
[Twilio / SMS] Immediate text to owner (if different from on-call)
    Same message
    ↓
[Gmail / SMTP] Send priority email to owner
    Subject: "🚨 EMERGENCY LEAD — [caller_name]"
    Body: Full details + priority flag reason
    ↓
[Google Sheets] Append row with urgency = EMERGENCY + red flag status
    ↓
[END]
```

---

## WORKFLOW 3 — CONFIRMATION SMS

**Trigger:** After appointment booked (can be fired from Workflow 1 or manually triggered)

**Steps:**

```
[Webhook or Manual trigger] Receive confirmation data
    ↓
[Twilio / SMS] Send confirmation to caller
    "Hi [Name], this is [Company Name]. Your service call is confirmed for [date/time].
     Our tech will call 30 min before arrival. Questions? Call us at [business number]."
    ↓
[Google Sheets] Update lead row: Status → "Confirmed"
    ↓
[END]
```

---

## GOOGLE SHEETS — LEAD LOG STRUCTURE

| Column | Type | Notes |
|---|---|---|
| Timestamp | DateTime | Auto from webhook |
| Name | String | |
| Address | String | |
| City | String | Parsed from address |
| Issue | String | |
| Urgency | Enum | emergency / standard / estimate |
| Preferred Time | String | |
| Phone | String | |
| Language | Enum | english / spanish |
| Priority Flag | Boolean | Medical/elderly in home |
| Status | Enum | New / Confirmed / Completed / No-show |
| Notes | String | Manual field for owner |

---

## REQUIRED MAKE.COM CONNECTIONS

| App | Purpose | Auth type |
|---|---|---|
| Webhooks (Make built-in) | Receive Retell payload | No auth — just URL |
| Google Sheets | Lead log | OAuth (Google account) |
| Gmail | Owner email notifications | OAuth (Google account) |
| Twilio | SMS — owner + caller confirmation | API key (SID + Auth Token) |
| Google Calendar | Appointment blocks | OAuth (Google account) |

**Twilio note:** Buyer needs a Twilio account + phone number. Cost: ~$1/month for number + ~$0.0075/SMS. Include setup instructions in deployment guide.

**Alternative to Twilio (simpler):** Email notification only — remove SMS steps. Reduces setup complexity for less tech-savvy buyers.

---

## RETELL AI WEBHOOK CONFIGURATION

In Retell AI agent settings:
1. Go to **Webhooks**
2. Add POST URL: `[Make.com webhook URL from Workflow 1]`
3. Trigger: **Call ended**
4. Payload: Map collected variables to JSON fields above

The Retell agent captures data via conversation variables — define these in the Retell agent builder to match the lead data object in each niche script.

---

---

## WORKFLOW 4 — FOUNDER INTELLIGENCE LOGGING

**Trigger:** Runs in parallel with Workflows 1 & 2 (added as a branch, not a separate scenario)

**Purpose:** Log every customer touchpoint to the Founder Intelligence Sheet from day one. Data compounds — analysis gets better as volume grows.

**Steps:**

```
[Branch from Workflow 1 or 2] Fork after receiving payload
    ↓
[Google Sheets] Append row to "Founder Intelligence Log" (separate sheet)
    Columns: Timestamp | Event Type | Buyer ID (anonymized) | Niche | Urgency |
             Lead Source | Language | Priority Flag | Notes
    ↓
[END — runs silently, no notification]
```

**Additional triggers to wire (beyond call leads):**

| Event | Source | How to capture |
|---|---|---|
| Purchase | Lemon Squeezy webhook → Make.com scenario | Lemon Squeezy supports webhooks on order.created |
| Refund | Lemon Squeezy webhook | order.refunded event |
| Subscription started | Lemon Squeezy webhook | subscription.created |
| Subscription cancelled | Lemon Squeezy webhook | subscription.cancelled |
| Support email received | Gmail → Make.com (watch inbox label "ServiceVoice Support") | Filter by label |
| Survey response | Tally webhook → Make.com | Already available via Tally webhook |

All events write to the same Founder Intelligence Sheet with a consistent schema.

---

## FOUNDER INTELLIGENCE SHEET — STRUCTURE

**Sheet name:** `Founder Intelligence Log`
**Stored in:** Same Google Drive as ServiceVoice Leads sheet

| Column | Type | Source |
|---|---|---|
| Timestamp | DateTime MST | Auto |
| Event Type | Enum | lead / purchase / refund / subscription_start / subscription_cancel / support_email / survey_response |
| Buyer ID | String (anonymized) | Hash of email or Lemon Squeezy order ID |
| Niche | Enum | HVAC / Plumbing / Electrical / Landscaping / Pool / Unknown |
| Channel | Enum | meta_ad / organic / direct / unknown |
| Language | Enum | english / spanish |
| Urgency | Enum | emergency / standard / estimate / n/a |
| Revenue | Number | 0 for leads; purchase amount for sales |
| Notes | String | Free text from support emails or survey responses |
| Status | Enum | new / active / at_risk / churned |

**Weekly analysis:** Woz pulls this sheet every Monday and sends Alistair a summary. No extra tools needed.

---

## DEPLOYMENT NOTES

- All 3 workflows ship as Make.com blueprint JSON files (importable with one click)
- Blueprint files location: `workflows/make-blueprints/` (to be created when Make.com API key available)
- Buyer connects their own Google account, Twilio account, and Retell account
- Deployment guide walks through each connection step-by-step
- Estimated setup time for buyer: 45–90 minutes
