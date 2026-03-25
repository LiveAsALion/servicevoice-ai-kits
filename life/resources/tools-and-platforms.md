# Tools & Platforms

| Category | Tool |
|---|---|
| AI agent | Do Anything (Malcolm Reid) |
| Landing pages | Do Anything website builder |
| Surveys | Tally.so (primary), Google Forms (backup) |
| Email marketing | Google Workspace |
| Social warmup | Reddit, Facebook |
| Ads | Meta Business Manager, Google Ads |
| Voice AI | Retell AI (primary), Vapi (secondary) |
| Workflow automation | Make.com (default), n8n (advanced) |
| Digital product sales | Lemon Squeezy (primary), Gumroad (backup) |
| Video production | HeyGen |
| Scheduling/CRM | Jobber, HouseCall Pro |
| Code/bots | GitHub, Alpaca API, Telegram |
| Finance | Origin (financial hub) |

## AI Personas
- **Malcolm Reid** (malcolm.reid@doanything.com) — ServiceVoice AI, research/outreach/automation
- **Elias Reed** (elias@healthcareguardiantraining.com) — Healthcare Guardian
- **Alex Rivera** (Alex.Rivera.PPL@gmail.com) — Phoenix Pool Leads

## Infrastructure
- VPS: Ubuntu 24.04.4 LTS (root SSH via PowerShell)
- UFW firewall active — default deny inbound, SSH rate-limited on port 22
- OpenClaw gateway: loopback-only, not publicly exposed
- Rule: any new inbound service port → flag and open UFW before considering functional
