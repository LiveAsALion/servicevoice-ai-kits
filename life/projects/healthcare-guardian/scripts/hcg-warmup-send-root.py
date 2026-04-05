#!/usr/bin/env python3
import smtplib
import time
import random
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

SMTP_USER = "alistair@healthcareguardiantraining.com"
SMTP_PASS = "yjwa sfxa ysdp vccf"
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587

recipients = [
    "liveasalion@gmail.com",
    "younglivesvm@gmail.com",
    "giborim@icloud.com",
    "emgiborim@gmail.com",
    "valiantgiantkiller@gmail.com",
    "happygiantkiller@icloud.com",
    "juliet_eve@icloud.com",
    "julieteve.m@gmail.com",
    "fueledforduty@gmail.com",
    "alex.rivera.ppl@gmail.com",
    "servicevoiceai@gmail.com",
    "liveasalion@proton.me",
    "alistair.morrison@phoenix.gov",
    "younglivesvm@icloud.com",
]

subjects = [
    "Hey",
    "Quick note",
    "Checking in",
    "Wanted to reach out",
    "Hope you're doing well",
    "Just saying hi",
    "Long time no talk",
    "Staying in touch",
    "New email setup",
    "Getting settled in",
]

bodies = [
    "Hey! Just testing out my new email setup over here. Everything seems to be working fine on my end. Hope things are good with you!",
    "Just wanted to drop a quick note and say hi. Been a while since I've reached out from this address. Hope all is well!",
    "Checking in! Just getting this new account set up properly and wanted to make sure outgoing messages are landing okay. Let me know if you get this!",
    "Hope you're doing well! Just getting settled in with a new email address and wanted to say hello. Nothing urgent — just staying in touch.",
    "Hey there! Getting things set up on my end. Just wanted to reach out and say hi. Hope everything is going great on your side.",
    "Long time no talk! I'm getting this new email account sorted out and figured I'd reach out to a few people while I'm at it. Hope life is treating you well.",
    "Just saying hi from the new email. Getting everything configured properly. Hope you're having a great week so far!",
    "Wanted to reach out and test this new setup. If you get this, all is working on my end! Hope things are going well with you.",
    "Hey — just getting this account set up and wanted to send a quick message. Everything seems to be working okay. Hope you're doing well!",
    "Just a quick note — got this new email going and wanted to stay in touch. Nothing major, just reaching out. Hope all is well on your end!",
    "Hey! Hope things are good. Just testing out the new account setup. Let me know if this comes through fine — appreciate it!",
    "Getting settled in with this new email. Just wanted to say hi and make sure everything is working. Hope you're having a solid week!",
]

# Pick 11 random recipients (no repeats)
selected = random.sample(recipients, 11)

results = []

print(f"Starting warm-up batch — {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Sending to {len(selected)} recipients\n")

try:
    server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
    server.starttls()
    server.login(SMTP_USER, SMTP_PASS)

    for i, recipient in enumerate(selected):
        subject = random.choice(subjects)
        body = random.choice(bodies)

        msg = MIMEMultipart("alternative")
        msg["From"] = f"Elias Reed <{SMTP_USER}>"
        msg["To"] = recipient
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        try:
            server.sendmail(SMTP_USER, recipient, msg.as_string())
            status = "✓ SENT"
            print(f"[{i+1}/{len(selected)}] {status} → {recipient} | Subject: {subject}")
            results.append({"to": recipient, "subject": subject, "status": "sent"})
        except Exception as e:
            print(f"[{i+1}/{len(selected)}] ✗ FAILED → {recipient} | Error: {e}")
            results.append({"to": recipient, "subject": subject, "status": f"failed: {e}"})

        if i < len(selected) - 1:
            delay = random.randint(30, 55)
            print(f"  Waiting {delay}s before next send...")
            time.sleep(delay)

    server.quit()

except Exception as e:
    print(f"SMTP connection error: {e}")
    results.append({"to": "N/A", "subject": "N/A", "status": f"connection failed: {e}"})

# Write results to log file
log_path = "/root/.openclaw/workspace/memory/hcg-warmup-log.md"
sent_count = sum(1 for r in results if r["status"] == "sent")
date_str = datetime.now().strftime("%Y-%m-%d")
time_str = datetime.now().strftime("%H:%M:%S")

log_entry = f"\n## {date_str} — Batch run at {time_str}\n\n"
log_entry += f"**Sent:** {sent_count}/{len(selected)}\n\n"
log_entry += "| Recipient | Subject | Status |\n"
log_entry += "|-----------|---------|--------|\n"
for r in results:
    log_entry += f"| {r['to']} | {r['subject']} | {r['status']} |\n"
log_entry += "\n"

try:
    with open(log_path, "a") as f:
        f.write(log_entry)
    print(f"\nLog written to {log_path}")
except Exception as e:
    print(f"Failed to write log: {e}")

print(f"\nDone. {sent_count}/{len(selected)} emails sent.")
