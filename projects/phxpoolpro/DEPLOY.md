# PHX Pool Pro — VPS Deployment Guide

> **Security first.** This guide isolates the site completely from the rest of your VPS.
> The Docker container has no access to the host filesystem, OpenClaw data, or other services.
> Read every step before running anything.

---

## Prerequisites (one-time, if not already done)

```bash
# Install Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER   # logout & back in after this

# Install Docker Compose v2
sudo apt-get install -y docker-compose-plugin

# Install Nginx (if not already running for your other site)
sudo apt-get install -y nginx

# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx
```

---

## Step 1 — Point your domain DNS

At your registrar (Namecheap, Cloudflare, etc.):

| Type | Host | Value |
|------|------|-------|
| A | @ | YOUR_VPS_IP |
| A | www | YOUR_VPS_IP |

Wait for propagation (usually 5–30 min with Cloudflare, up to 1hr elsewhere).
Confirm with: `dig phxpoolpro.com +short`

---

## Step 2 — Copy project files to VPS

From your local machine or directly on the VPS:

```bash
# On your VPS — create a dedicated directory outside OpenClaw
sudo mkdir -p /srv/phxpoolpro
sudo chown $USER:$USER /srv/phxpoolpro

# Copy project files into it
# (Option A: from this workspace)
cp -r /root/.openclaw/workspace/projects/phxpoolpro/* /srv/phxpoolpro/

# (Option B: from local machine via scp)
# scp -r ./phxpoolpro/ user@YOUR_VPS:/srv/phxpoolpro/
```

---

## Step 3 — Create the runtime secrets file

Secrets are stored in `/root/.openclaw/.env.secrets` as the canonical location.
The project `.env` is populated from there — the Docker container never touches `.env.secrets`.

```bash
# 1. Add secrets to the master secrets file
nano /root/.openclaw/.env.secrets
# Add lines:
#   PHXPOOLPRO_RESEND_API_KEY=re_YOUR_ACTUAL_KEY_HERE
#   PHXPOOLPRO_NOTIFY_EMAIL=Alex.Rivera.PPL@gmail.com

# 2. Populate the project .env from secrets (run once at setup, or after key rotation)
cd /srv/phxpoolpro
cp .env.example .env

# Pull values from .env.secrets into project .env
RESEND_KEY=$(grep PHXPOOLPRO_RESEND_API_KEY /root/.openclaw/.env.secrets | cut -d= -f2)
NOTIFY=$(grep PHXPOOLPRO_NOTIFY_EMAIL /root/.openclaw/.env.secrets | cut -d= -f2)
sed -i "s|RESEND_API_KEY=.*|RESEND_API_KEY=${RESEND_KEY}|" .env
sed -i "s|NOTIFY_EMAIL=.*|NOTIFY_EMAIL=${NOTIFY}|" .env

# 3. Lock it down
chmod 600 .env
```

---

## Step 4 — Get your Resend API key

1. Go to https://resend.com — free account
2. Add and verify domain: `phxpoolpro.com`
3. Add DNS records Resend gives you (SPF, DKIM) — do this at your registrar
4. Create an API key → paste into `.env`
5. Free tier: 100 emails/day, 3,000/month — plenty for MVP

---

## Step 5 — Build and start the container

```bash
cd /srv/phxpoolpro

# Build the Docker image
docker compose build --no-cache

# Start it (detached)
docker compose up -d

# Confirm it's running
docker compose ps
docker compose logs -f   # Ctrl+C to exit
```

The app is now running on `127.0.0.1:3000` — only accessible from localhost.
Nothing external can reach it yet.

---

## Step 6 — Install Nginx site config

```bash
# Copy the nginx config
sudo cp /srv/phxpoolpro/nginx.conf /etc/nginx/sites-available/phxpoolpro

# Enable it
sudo ln -s /etc/nginx/sites-available/phxpoolpro /etc/nginx/sites-enabled/phxpoolpro

# Test config (do NOT reload yet — SSL certs don't exist yet)
sudo nginx -t
```

If test passes, temporarily comment out the SSL certificate lines in
`/etc/nginx/sites-available/phxpoolpro` (the four lines under `# SSL — filled in by certbot`),
then:

```bash
sudo systemctl reload nginx
```

---

## Step 7 — Get SSL certificate

```bash
sudo certbot --nginx -d phxpoolpro.com -d www.phxpoolpro.com
```

Certbot will:
- Verify domain ownership
- Issue a free Let's Encrypt certificate
- Auto-update your nginx config with the SSL paths
- Set up auto-renewal

After it completes:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

Now visit https://phxpoolpro.com — you should see the live site with HTTPS.

---

## Step 8 — Verify isolation (confirm OpenClaw is protected)

```bash
# Confirm the container can NOT access host filesystem
docker exec phxpoolpro ls /root 2>&1
# Expected: "ls: /root: Permission denied" or similar

# Confirm it's on its own network
docker network ls
docker network inspect phxpoolpro_phxpoolpro_net

# Confirm OpenClaw is NOT on the same network
# OpenClaw runs as a node process, not in Docker — completely separate

# Confirm the app only listens on localhost
ss -tlnp | grep 3000
# Expected: 127.0.0.1:3000 — NOT 0.0.0.0:3000
```

---

## Step 9 — Test the form end-to-end

1. Go to https://phxpoolpro.com
2. Fill out the form with your own info
3. Submit
4. Confirm: you receive a notification email at Alex.Rivera.PPL@gmail.com
5. Confirm: the submitter receives a confirmation email

If email doesn't arrive, check:
```bash
docker compose logs phxpoolpro | grep -i "error\|resend"
```

---

## Ongoing maintenance

```bash
# View live logs
docker compose -f /srv/phxpoolpro/docker-compose.yml logs -f

# Restart after config changes
docker compose -f /srv/phxpoolpro/docker-compose.yml restart

# Deploy an update (after changing code)
cd /srv/phxpoolpro
docker compose down
docker compose build --no-cache
docker compose up -d

# SSL auto-renews via certbot cron — verify it's set up
sudo certbot renew --dry-run
```

---

## Security summary — what protects OpenClaw

| Layer | Protection |
|-------|-----------|
| Docker container | Runs as non-root user (uid 1001), read-only filesystem |
| Docker network | Isolated bridge network — no access to host or other containers |
| Port binding | App only on `127.0.0.1:3000` — never exposed directly |
| Nginx | Only entry point; rate-limits the API, blocks dotfiles and sensitive extensions |
| UFW firewall | Only ports 22, 80, 443 open — port 3000 never in UFW |
| .env file | Mode 600, never committed to git |
| No shared volumes | Container has zero mounts to host filesystem |

The OpenClaw process, your workspace files, and all sensitive data are completely unreachable
from this container. The container's only outbound connection is to Resend's API to send emails.

---

## If something breaks

| Problem | Fix |
|---------|-----|
| Site shows 502 Bad Gateway | Container is down — run `docker compose up -d` |
| Form submits but no email | Check RESEND_API_KEY in `.env`; check Resend domain verification |
| SSL cert error | Run `sudo certbot renew --force-renewal` |
| Container won't start | Run `docker compose logs` to see the error |
| Port 3000 conflict | Check `ss -tlnp \| grep 3000` — kill conflicting process |
