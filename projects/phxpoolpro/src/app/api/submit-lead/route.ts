import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'Alex.Rivera.PPL@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'PHX Pool Pro <noreply@phxpoolpro.com>';

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim().slice(0, 500);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name    = sanitize(body.name);
    const email   = sanitize(body.email);
    const phone   = sanitize(body.phone);
    const area    = sanitize(body.area);
    const service = sanitize(body.service);
    const details = sanitize(body.details);

    // Basic validation
    if (!name || !email || !phone || !area || !service) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    // Rough email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Phoenix',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Send notification email to Alex
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject: `🏊 New lead: ${name} — ${area} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0ea5e9; margin-bottom: 4px;">New lead — PHX Pool Pro</h2>
          <p style="color: #6b7280; font-size: 13px; margin-top: 0;">${timestamp}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Phone</td><td style="padding: 8px 0; font-weight: 600;"><a href="tel:${phone}" style="color: #0ea5e9;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Area</td><td style="padding: 8px 0;">${area}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
          </table>
          ${details ? `
          <div style="background: #f9fafb; border-radius: 8px; padding: 14px 16px; margin-top: 16px;">
            <p style="color: #6b7280; font-size: 12px; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 0.05em;">Details</p>
            <p style="margin: 0; color: #374151; font-size: 15px;">${details}</p>
          </div>` : ''}
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">PHX Pool Pro · phxpoolpro.com</p>
        </div>
      `,
    });

    // Send confirmation email to homeowner
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Got it — I'll match you with a pool pro shortly",
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0ea5e9;">Hi ${name},</h2>
          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            I just received your request for <strong>${service}</strong> in <strong>${area}</strong>.
          </p>
          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            I'll match you with a reliable, vetted pool pro in your area and you'll hear back
            within 2 hours. If it's after hours, I'll have someone on it first thing in the morning.
          </p>
          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            Any questions? Just reply to this email or reach me directly at
            <a href="mailto:alex@phxpoolpro.com" style="color: #0ea5e9;">alex@phxpoolpro.com</a>.
          </p>
          <p style="color: #374151; font-size: 15px; margin-top: 24px;">
            — Alex Rivera<br/>
            <span style="color: #9ca3af;">PHX Pool Pro</span>
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">
            You're receiving this because you submitted a request at phxpoolpro.com.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('submit-lead error:', err);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}
