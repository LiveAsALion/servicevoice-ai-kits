# Healthcare Guardian Landing Page

A professional B2B landing page for Healthcare Guardian's workplace violence prevention training program, targeting hospital CNOs, VPs of Patient Safety, and HR Directors.

## Features

- **Modern Design**: Dark navy background (#1A2347) with gold accents (#FFD700)
- **Responsive Layout**: Fully responsive design for mobile and desktop
- **Complete Sections**:
  - Navigation with CTA
  - Hero section with dual CTAs
  - Statistics showcase
  - Problem/Solution presentation
  - 8-module curriculum overview
  - Compliance information
  - Transparent pricing (Pilot, Per-Seat, Facility)
  - Contact form with mailto integration
  - Professional footer
- **Self-Hostable**: Configured for standalone deployment on VPS
- **Production-Ready**: Built with Next.js 14, TypeScript, and Tailwind CSS v4

## Tech Stack

- **Next.js 16.0.4** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Playfair Display** (serif) and **Inter** (sans-serif) fonts
- **React 19** with hooks

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm start
```

The build command creates a `.next` directory with a standalone build suitable for self-hosting.

## Deployment to Ubuntu/Debian VPS

### Prerequisites

- Ubuntu 20.04+ or Debian 11+ VPS
- Root or sudo access
- Domain name pointed to your VPS IP

### Step 1: Install Node.js

```bash
# Install Node.js 18.x or higher
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 2: Install PM2

```bash
# Install PM2 globally
sudo npm install -g pm2

# Verify installation
pm2 --version
```

### Step 3: Upload Your Application

```bash
# Option 1: Using Git (recommended)
cd /var/www
sudo git clone <your-repository-url> healthcare-guardian
cd healthcare-guardian

# Option 2: Using SCP/SFTP
# Upload your project files to /var/www/healthcare-guardian
```

### Step 4: Build the Application

```bash
cd /var/www/healthcare-guardian

# Install dependencies
sudo npm install

# Build for production
sudo npm run build
```

### Step 5: Configure PM2

```bash
# Start the application with PM2
sudo pm2 start npm --name "healthcare-guardian" -- start

# Save PM2 configuration
sudo pm2 save

# Setup PM2 to start on system boot
sudo pm2 startup systemd
# Follow the command output instructions

# Check application status
sudo pm2 status
sudo pm2 logs healthcare-guardian
```

### Step 6: Install and Configure Nginx

```bash
# Install Nginx
sudo apt-get update
sudo apt-get install -y nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/healthcare-guardian
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/healthcare-guardian /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Enable Nginx on boot
sudo systemctl enable nginx
```

### Step 7: Configure Firewall

```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

# Check status
sudo ufw status
```

### Step 8: Install SSL Certificate (HTTPS)

```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Obtain and install SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts to configure SSL

# Test auto-renewal
sudo certbot renew --dry-run
```

### Step 9: Verify Deployment

Visit your domain in a browser:
- HTTP: `http://yourdomain.com`
- HTTPS: `https://yourdomain.com`

## PM2 Management Commands

```bash
# View application status
pm2 status

# View logs
pm2 logs healthcare-guardian

# Restart application
pm2 restart healthcare-guardian

# Stop application
pm2 stop healthcare-guardian

# Delete from PM2
pm2 delete healthcare-guardian

# Monitor resources
pm2 monit
```

## Updating the Application

```bash
cd /var/www/healthcare-guardian

# Pull latest changes (if using Git)
sudo git pull

# Install any new dependencies
sudo npm install

# Rebuild the application
sudo npm run build

# Restart with PM2
sudo pm2 restart healthcare-guardian

# Check logs
sudo pm2 logs healthcare-guardian
```

## Environment Variables (Optional)

If you need environment variables, create a `.env.local` file:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Troubleshooting

### Application won't start
```bash
# Check PM2 logs
pm2 logs healthcare-guardian --lines 50

# Check if port 3000 is available
sudo lsof -i :3000

# Restart PM2
pm2 restart healthcare-guardian
```

### Nginx errors
```bash
# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### SSL certificate issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificates manually
sudo certbot renew
```

## Performance Optimization

### Enable Gzip Compression in Nginx

Edit `/etc/nginx/nginx.conf`:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;
```

### PM2 Cluster Mode

For better performance on multi-core servers:

```bash
pm2 start npm --name "healthcare-guardian" -i max -- start
```

## Contact Form

The contact form uses a `mailto:` link that opens the user's email client with pre-filled information. For production use, consider integrating with:
- SendGrid
- AWS SES
- Resend
- Nodemailer with SMTP

## License

© 2026 Healthcare Guardian. All rights reserved.

## Support

For deployment assistance, contact: elias@healthcareguardiantraining.com
