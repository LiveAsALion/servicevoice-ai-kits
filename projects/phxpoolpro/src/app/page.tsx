'use client';

import { useState } from 'react';

const SERVICES = [
  'Weekly Cleaning & Maintenance',
  'Green Pool Rescue',
  'Pump / Equipment Repair',
  'Chemical Balancing',
  'Leak Detection',
  'Pool Opening / Closing',
  'Filter Cleaning',
  'Other',
];

const AREAS = [
  'Phoenix',
  'Scottsdale',
  'Tempe',
  'Mesa',
  'Chandler',
  'Gilbert',
  'Glendale',
  'Peoria',
  'Cave Creek / Carefree',
  'Ahwatukee',
  'Fountain Hills',
  'Paradise Valley',
  'Surprise / Avondale',
  'Other Valley area',
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    service: '',
    details: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', area: '', service: '', details: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again or call us directly.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ── HEADER ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-sky-600 tracking-tight">PHX Pool Pro</span>
            <span className="hidden sm:inline text-sm text-gray-500 ml-3">
              Phoenix Valley's Trusted Pool Network
            </span>
          </div>
          <a
            href="#quote"
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Phoenix Valley Pool Service
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Your pool fixed fast.<br />By someone who actually shows up.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm Alex. I run a small local team here in Phoenix that connects homeowners with
            reliable, vetted pool pros across the Valley — no ghosting, no surprises, no runaround.
          </p>
          <a
            href="#quote"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-colors"
          >
            Get My Free Quote →
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Typically matched within 2 hours · No commitment required
          </p>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-sky-600 text-white py-5 px-5">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-center">
          <span>✅ Vetted Local Pros Only</span>
          <span>✅ No Subscription Fees</span>
          <span>✅ Serving All Valley Zip Codes</span>
          <span>✅ Same-Week Service Available</span>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Why Phoenix homeowners choose us
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            We aren't a national directory. We're a local service run by someone who knows the Valley.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Pre-screened pros',
                body: 'Every company in our network has been checked for reliability, licensing, and track record. No fly-by-nights.',
              },
              {
                icon: '⚡',
                title: 'Fast response',
                body: "When your pump dies in July, you need someone today — not next week. We match you fast so your pool doesn't wait.",
              },
              {
                icon: '🤝',
                title: 'No runaround',
                body: 'One form. One match. One pro calls you directly. No haggling with five companies, no shared-lead chaos.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-sky-50 rounded-2xl p-7 text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">How it works</h2>
          <div className="space-y-10">
            {[
              {
                step: '1',
                title: 'Tell us what you need',
                desc: "Fill out the short form below. Takes about 60 seconds. Describe what's going on with your pool.",
              },
              {
                step: '2',
                title: 'We find your pro',
                desc: "I personally match your request to a vetted pool pro in your neighborhood — the right fit for your service area and your problem.",
              },
              {
                step: '3',
                title: 'They reach out. Job done.',
                desc: 'A pro contacts you directly, gives you a quote, and gets your pool sorted. No middleman friction after the match.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-500 text-white font-bold text-xl flex items-center justify-center shadow">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE TYPES ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Services we cover</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Weekly Cleaning',
              'Green Pool Rescue',
              'Equipment Repair',
              'Chemical Balancing',
              'Leak Detection',
              'Filter Service',
              'Pool Opening / Closing',
              'Pump Replacement',
            ].map((s) => (
              <span
                key={s}
                className="bg-sky-50 text-sky-700 border border-sky-200 text-sm font-medium px-4 py-2 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-12 px-5 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Serving the entire Valley</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Phoenix · Scottsdale · Tempe · Mesa · Chandler · Gilbert · Glendale · Peoria ·
            Ahwatukee · Cave Creek · Fountain Hills · Paradise Valley · Surprise · Avondale
          </p>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section id="quote" className="py-20 px-5 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Get your free quote
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Fill this out and I'll match you with a reliable local pro — usually within 2 hours.
            </p>

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">You're all set!</h3>
                <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
                  I've got your request. I'll match you with a vetted pool pro in your area and
                  you'll hear back within 2 hours.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  — Alex Rivera, PHX Pool Pro
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="First & last name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(602) 555-0123"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Your area <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white"
                    >
                      <option value="">Select your city / area</option>
                      {AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service needed <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white"
                    >
                      <option value="">What do you need?</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Tell me more (optional)
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. Pool has been green for a week, pump making grinding noise, want weekly service starting next month..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white font-bold text-lg py-4 rounded-full transition-colors shadow-lg"
                >
                  {status === 'submitting' ? 'Sending your request…' : 'Get My Free Quote →'}
                </button>

                <p className="text-xs text-center text-gray-400">
                  By submitting you agree to be contacted by Alex and matched pool service
                  providers. No spam. No subscription.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-800 text-white py-10 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-bold text-lg mb-1">PHX Pool Pro</p>
          <p className="text-gray-400 text-sm italic mb-4">
            "Keeping the Valley blue, one pool at a time."
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} PHX Pool Pro · Phoenix, AZ ·{' '}
            <a href="mailto:alex@phxpoolpro.com" className="hover:text-gray-300 transition-colors">
              alex@phxpoolpro.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
