#!/usr/bin/env python3
"""HCG email warm-up script — sends 10-12 casual emails spaced 30s+ apart."""

import smtplib
import time
import random
import sys
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

SMTP_USER = "alistair@healthcareguardiantraining.com"
SMTP_PASS = "yjwa sfxa ysdp vccf"
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587

RECIPIENTS = [
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

SUBJECT_BODY_PAIRS = [
    (
        "Quick check-in",
        "Hey, just wanted to reach out and say hello. Hope things are going well on your end. Been a busy week but finally getting a moment to breathe. Catch up soon?"
    ),
    (
        "Touching base",
        "Hope your week is off to a good start. Just getting this new account set up and wanted to make sure everything's working. Give me a shout if you get a chance."
    ),
    (
        "Hey from Alistair",
        "Just testing out this new email setup. If you get this, feel free to reply — always good to know things are landing properly. Hope you're doing well!"
    ),
    (
        "Checking in",
        "It's been a while — wanted to reach out and see how you've been. Nothing urgent, just thinking of you. Hope things are good on your end."
    ),
    (
        "New email, same me",
        "Switching things over to this address going forward. Just wanted to make sure contacts have the new one. Reply if you get this — would love to catch up soon."
    ),
    (
        "Quick note",
        "Short one today — just wanted to say hi and check in. Things have been moving fast lately. Hope all is well with you, talk soon."
    ),
    (
        "Hey — got a minute?",
        "Nothing major, just reaching out. I've been heads down on some projects but wanted to stay in touch. Let me know how things are going when you get a chance."
    ),
    (
        "Wanted to reach out",
        "Hey! Just getting some email stuff organized and wanted to make sure I had your address in the new system. How have you been? It's been too long."
    ),
    (
        "Long time no talk",
        "Just popping in to say hello. I know we've both been busy but wanted to make sure we stay connected. Hope everything's going well — drop me a line when you can."
    ),
    (
        "Staying in touch",
        "Just a quick note to check in. Getting this new email sorted out and wanted to make sure I have the right contacts. Hope your week is treating you well!"
    ),
    (
        "Hello from the new inbox",
        "Testing out this address — making sure emails are sending and landing properly. If you see this, let me know! Always good to confirm the tech is cooperating."
    ),
    (
        "Hope you're doing well",
        "Just wanted to send a quick note your way. Things have been good here, staying busy. Hope life is treating you well — reach out anytime!"
    ),
    (
        "Just saying hi",
        "Quick one — just wanted to touch base and say hello. Been meaning to reach out for a while. Hope things are great on your end, talk soon!"
    ),
    (
        "Getting settled in",
        "Just getting this new email account up and running. Wanted to make sure my contacts transferred over properly. Hope you're having a great week!"
    ),
]

def send_batch():
    send_count = 10 + random.randint(0, 2)  # 10-12

    # Shuffle recipients and pairs
    recipients = random.sample(RECIPIENTS, min(send_count, len(RECIPIENTS)))
    pairs = random.sample(SUBJECT_BODY_PAIRS, min(send_count, len(SUBJECT_BODY_PAIRS)))

    results = []

    print(f"Connecting to SMTP as {SMTP_USER}...")
    server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
    server.starttls()
    server.login(SMTP_USER, SMTP_PASS)
    print("Connected and authenticated.")

    for i, (recipient, (subject, body)) in enumerate(zip(recipients, pairs)):
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = f"Alistair Morrison <{SMTP_USER}>"
        msg["To"] = recipient

        # Add slight personal variation to body
        variations = [
            "", 
            " Hope that finds you well.",
            " Take care!",
            " Have a great rest of your week.",
            " Talk soon.",
        ]
        full_body = body + random.choice(variations)
        msg.attach(MIMEText(full_body, "plain"))

        try:
            server.sendmail(SMTP_USER, recipient, msg.as_string())
            status = "✓ SENT"
            print(f"[{i+1}/{send_count}] {status} → {recipient} | Subject: {subject}")
            results.append((recipient, subject, "SENT"))
        except Exception as e:
            status = f"✗ FAILED: {e}"
            print(f"[{i+1}/{send_count}] {status} → {recipient}")
            results.append((recipient, subject, f"FAILED: {e}"))

        # Space sends — 30 to 60 seconds apart (skip delay after last)
        if i < len(recipients) - 1:
            delay = random.randint(30, 60)
            print(f"  Waiting {delay}s before next send...")
            time.sleep(delay)

    server.quit()
    return results, send_count

if __name__ == "__main__":
    results, send_count = send_batch()
    sent = sum(1 for _, _, s in results if s == "SENT")
    failed = send_count - sent
    
    print(f"\nDone. {sent}/{send_count} sent, {failed} failed.")
    
    # Output summary for logging
    print("\n--- RESULT_SUMMARY ---")
    print(f"SENT={sent}")
    print(f"FAILED={failed}")
    for r, s, status in results:
        print(f"  {status} | {r} | {s}")
    print("--- END_SUMMARY ---")
