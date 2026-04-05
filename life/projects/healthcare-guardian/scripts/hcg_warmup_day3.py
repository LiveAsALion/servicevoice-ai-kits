#!/usr/bin/env python3
"""HCG Email Warm-Up — Day 4 (2026-04-02)"""

import smtplib
import time
import random
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "alistair@healthcareguardiantraining.com"
SMTP_PASS = "yjwa sfxa ysdp vccf"
FROM_NAME = "Elias Reed"
FROM_ADDR = "alistair@healthcareguardiantraining.com"

# Warm-up list — rotate through, avoid same recipients as yesterday's batch
# Yesterday's 12: fueledforduty, younglivesvm.gmail, julieteve.m, liveasalion.gmail,
#   giborim, valiantgiantkiller, emgiborim, happygiantkiller, alex.rivera.ppl,
#   juliet_eve, servicevoiceai, younglivesvm.icloud
# Today rotate through the full pool of 14, mixing in fresh ones
ALL_RECIPIENTS = [
    ("liveasalion@gmail.com", "A"),
    ("younglivesvm@gmail.com", "B"),
    ("giborim@icloud.com", "C"),
    ("emgiborim@gmail.com", "D"),
    ("valiantgiantkiller@gmail.com", "E"),
    ("happygiantkiller@icloud.com", "F"),
    ("juliet_eve@icloud.com", "G"),
    ("julieteve.m@gmail.com", "H"),
    ("fueledforduty@gmail.com", "I"),
    ("alex.rivera.ppl@gmail.com", "J"),
    ("servicevoiceai@gmail.com", "K"),
    ("liveasalion@proton.me", "L"),
    ("alistair.morrison@phoenix.gov", "M"),
    ("younglivesvm@icloud.com", "N"),
]

# Pick 11 recipients today — prioritize those NOT in yesterday's batch
# Yesterday's: I, B, H, A, C, E, D, F, J, G, K, N
# NOT yesterday's: L (liveasalion@proton.me), M (alistair.morrison@phoenix.gov)
# Fill rest with yesterday's
today_recipients = [
    ("liveasalion@proton.me", "L"),
    ("alistair.morrison@phoenix.gov", "M"),
    ("younglivesvm@gmail.com", "B"),
    ("julieteve.m@gmail.com", "H"),
    ("fueledforduty@gmail.com", "I"),
    ("giborim@icloud.com", "C"),
    ("emgiborim@gmail.com", "D"),
    ("happygiantkiller@icloud.com", "F"),
    ("valiantgiantkiller@gmail.com", "E"),
    ("alex.rivera.ppl@gmail.com", "J"),
    ("liveasalion@gmail.com", "A"),
]

# Varied casual subjects + bodies
emails = [
    {
        "to": "liveasalion@proton.me",
        "subject": "Quick heads up",
        "body": "Hey — just wanted to flag that I updated the training schedule for next week. Let me know if the Thursday slot still works for you."
    },
    {
        "to": "alistair.morrison@phoenix.gov",
        "subject": "Following up",
        "body": "Hope your week is going well. Wanted to circle back on the materials we discussed. I'll have the updated version ready by Friday."
    },
    {
        "to": "younglivesvm@gmail.com",
        "subject": "Re: Tuesday",
        "body": "Thanks for the note! Tuesday works for me. I'll send over the details later today."
    },
    {
        "to": "julieteve.m@gmail.com",
        "subject": "Quick question",
        "body": "Hey, do you still have those notes from last time? I'm putting something together and it would be helpful to reference them."
    },
    {
        "to": "fueledforduty@gmail.com",
        "subject": "Resource I mentioned",
        "body": "Found that link I was telling you about. I'll dig it up and send it separately — should be useful for what you're working on."
    },
    {
        "to": "giborim@icloud.com",
        "subject": "Check in",
        "body": "Just checking in — how did things go? I've been thinking about that conversation and want to make sure you have what you need."
    },
    {
        "to": "emgiborim@gmail.com",
        "subject": "Reminder — this week",
        "body": "Quick reminder that the window we talked about closes at the end of this week. Let me know if you have questions before then."
    },
    {
        "to": "happygiantkiller@icloud.com",
        "subject": "Hey",
        "body": "Not sure if you saw my last message — just wanted to make sure it didn't get lost. Nothing urgent, just wanted to stay in touch."
    },
    {
        "to": "valiantgiantkiller@gmail.com",
        "subject": "One more thing",
        "body": "Almost forgot — the link I mentioned is updated. I'll forward it when I get a minute. Good stuff in there."
    },
    {
        "to": "alex.rivera.ppl@gmail.com",
        "subject": "Touching base",
        "body": "Hope you're having a solid week. I'll have that update ready for you by tomorrow — thanks for your patience on this one."
    },
    {
        "to": "liveasalion@gmail.com",
        "subject": "Thursday timing",
        "body": "Does Thursday afternoon still work for you? If not, I'm flexible Friday morning. Just let me know what's easier."
    },
]

results = []

def send_email(to_addr, subject, body):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{FROM_NAME} <{FROM_ADDR}>"
    msg["To"] = to_addr
    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.ehlo()
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(FROM_ADDR, [to_addr], msg.as_string())

sent = 0
failed = 0

for i, email in enumerate(emails):
    try:
        send_email(email["to"], email["subject"], email["body"])
        sent += 1
        print(f"✓ [{i+1}/{len(emails)}] Sent to {email['to']} — \"{email['subject']}\"")
        results.append(f"  ✓ {email['to']} | {email['subject']}")
    except Exception as e:
        failed += 1
        print(f"✗ [{i+1}/{len(emails)}] FAILED to {email['to']}: {e}")
        results.append(f"  ✗ {email['to']} | ERROR: {e}")

    if i < len(emails) - 1:
        delay = random.randint(30, 65)
        print(f"  ⏱ Waiting {delay}s before next send...")
        time.sleep(delay)

print(f"\n--- DONE: {sent} sent, {failed} failed ---")
print("\n".join(results))

# Write summary to stdout for capture
print(f"\nSUMMARY|{sent}|{failed}")
