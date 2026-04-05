# ServiceVoice AI Kits — Deployment Guide
> Step-by-step setup for non-technical service business owners.
> Estimated time: 60–90 minutes
> Version 1.0 — April 2026

---

## Before You Start

You'll need:
- [ ] A **Retell AI** account (retellai.com — free to start, pay per minute of call usage)
- [ ] A **Make.com** account (make.com — free tier works for most small businesses)
- [ ] A **Google account** (Gmail + Google Calendar + Sheets)
- [ ] Your business phone number and business hours
- [ ] Optional: A **Twilio** account for SMS notifications (twilio.com — ~$1/month)

**Important — understand your ongoing cost:**
Retell AI charges approximately $0.11–$0.15 per minute of call time. For a typical small service business taking 20–40 calls per day averaging 2–3 minutes each, expect $50–$150/month in Retell usage. This is paid directly to Retell AI — it is not a ServiceVoice AI charge.

---

## STEP 1 — Set Up Your Retell AI Account

1. Go to [retellai.com](https://retellai.com) and create a free account
2. Verify your email
3. In the dashboard, click **Create Agent**
4. Choose **LLM-powered agent** (not rule-based)
5. Set the agent name to your business name (e.g., "Valley HVAC")

### Configure Agent Identity
- **Agent first name:** Alex (or customize)
- **Voice:** Select a natural-sounding voice — we recommend "Nat" or "Judy" for a warm tone
- **Language:** English (Spanish bilingual option — see Spanish Pack supplement)
- **Interruption sensitivity:** Medium

### Set Business Hours
- Go to **Call Routing** settings
- Set your business hours (e.g., Mon–Sat 7am–7pm MST)
- Enable **after-hours mode** — this triggers the after-hours greeting in the script

### Paste Your Script
1. Go to **Agent Prompt**
2. Open your niche script file (e.g., `HVAC-call-script.md`)
3. Copy the full script and paste it into the prompt field
4. Replace all `[Company Name]`, `[business number]`, and `[website]` placeholders with your actual information
5. Click **Save**

### Set Up Call Variables (Data Collection)
In the Retell agent builder, define these variables so the agent captures lead data:
- `caller_name`
- `address`
- `issue_description`
- `urgency` (values: emergency, standard, estimate)
- `preferred_time`
- `callback_number`
- `language`
- `priority_flag` (true/false)

### Test Your Agent
1. Click **Test Call** in the Retell dashboard
2. Run through 3 scenarios: emergency, standard booking, after-hours
3. Confirm the agent captures all variables correctly
4. Adjust the prompt if any responses feel off

### Connect Your Phone Number
1. Go to **Phone Numbers** in Retell
2. Purchase a local Phoenix area number (602 or 480) — or port your existing number
3. Assign the number to your agent

---

## STEP 2 — Set Up Make.com Workflows

1. Go to [make.com](https://make.com) and create a free account
2. Click **Create a new scenario**

### Import the Blueprints
*(Blueprint JSON files are included in your kit — import them instead of building from scratch)*

1. Click the **three dots** menu → **Import Blueprint**
2. Upload `workflow-1-lead-capture.json`
3. Connect your accounts when prompted (Google Sheets, Gmail, Google Calendar)
4. Copy the **Webhook URL** that Make.com generates — you'll paste this into Retell AI
5. Repeat for `workflow-2-emergency-escalation.json` and `workflow-3-confirmation-sms.json`

### Connect Google Sheets
1. In Make.com, click the Google Sheets module
2. Authorize your Google account
3. Create a new spreadsheet called **"ServiceVoice Leads"**
4. The workflow will auto-create the column headers on first run

### Connect Gmail (for email notifications)
1. Authorize your Google account in the Gmail module
2. Set the **To** field to your business email
3. Test with a dummy submission — confirm you receive the notification

### Set Up SMS (optional but recommended)
1. Create a free Twilio account at [twilio.com](https://twilio.com)
2. Get a phone number (~$1/month)
3. Copy your **Account SID** and **Auth Token**
4. In Make.com, connect Twilio using these credentials
5. Set the **To** number to your personal cell

### Paste Webhook URL into Retell AI
1. Copy your Make.com Webhook URL from Workflow 1
2. Go to Retell AI → **Webhooks**
3. Add the URL as a POST webhook on **Call Ended**
4. Map your call variables to the JSON payload fields

---

## STEP 3 — Test the Full Flow

Run a complete end-to-end test:

1. Call your Retell AI number
2. Go through a standard booking scenario
3. Confirm:
   - [ ] Agent captured all data correctly
   - [ ] Make.com workflow fired
   - [ ] Lead appeared in Google Sheets
   - [ ] Email notification received
   - [ ] Calendar appointment created
   - [ ] SMS received (if Twilio enabled)

If anything is missing — check the Make.com scenario run history for errors. Most issues are authorization (re-connect the affected app) or field mapping (variable names don't match).

---

## STEP 4 — Go Live

1. Forward your business phone number to your Retell AI number
   - Contact your phone carrier or use Google Voice to forward
   - Set forwarding after 3–4 rings (so you can still answer live if available)
2. Test one more live call from a different phone
3. You're live ✅

---

## STEP 5 — Monitor + Optimize (First 30 Days)

**Week 1:** Check Google Sheets daily — review every lead the agent captured. Note anything the agent mishandled.

**Week 2:** Adjust the agent prompt for any common issues. Retell AI lets you update the prompt without rebuilding.

**Month 1:** Review your call recordings in Retell AI dashboard. Identify the top 3 call types and make sure the script handles them perfectly.

**Ongoing:** Update your business hours in Retell AI seasonally.

---

## Common Issues + Fixes

| Issue | Fix |
|---|---|
| Agent not answering | Check phone forwarding is active; check Retell phone number is assigned to agent |
| Lead data not reaching Make.com | Verify webhook URL in Retell; check Make.com scenario is turned ON |
| Google Sheets not updating | Re-authorize Google account in Make.com |
| Agent using wrong greeting | Check business hours setting in Retell — may be reading as after-hours |
| SMS not sending | Re-check Twilio SID/Auth Token; verify phone number format (+1XXXXXXXXXX) |
| Agent not collecting address | Check that `address` variable is defined in Retell agent builder |

---

## Need Help?

Email: ServiceVoiceAI@gmail.com
Response time: Within 1 business day

For buyers on the monthly update subscription — you'll receive updated scripts seasonally (summer surge, monsoon, winter slow season) and any Retell/Make.com platform changes.
