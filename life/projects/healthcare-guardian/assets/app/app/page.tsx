'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:elias@healthcareguardiantraining.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nTitle: ${formData.title}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1A2347]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-[#FFD700] text-2xl font-serif font-bold">
              Healthcare Guardian
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-[#FFD700] transition-colors">Home</a>
              <a href="#program" className="text-white hover:text-[#FFD700] transition-colors">The Program</a>
              <a href="#compliance" className="text-white hover:text-[#FFD700] transition-colors">Compliance</a>
              <a href="#pricing" className="text-white hover:text-[#FFD700] transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-[#FFD700] transition-colors">Contact</a>
            </div>

            <a
              href="#pricing"
              className="bg-[#FFD700] text-[#1A2347] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors"
            >
              Reserve Pilot Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Your staff deserves to go home the same way they came in.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Healthcare Guardian is the only training program built specifically for frontline healthcare workers — scenario-driven, neuroscience-backed, and designed to change behavior, not just check a box.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#pricing"
              className="bg-[#FFD700] text-[#1A2347] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#FFD700]/90 transition-colors"
            >
              Reserve Pilot Access — $29/seat
            </a>
            <a
              href="#contact"
              className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#FFD700]/10 transition-colors"
            >
              Request a Facility Demo
            </a>
          </div>

          <p className="text-sm text-white/60">
            Minimum 5 seats. 30-day pilot access to all 8 modules.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#0F1729]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#FFD700] mb-4">75%</div>
              <p className="text-white/90 mb-2">of all workplace assaults happen in healthcare</p>
              <p className="text-sm text-white/50">OSHA</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#FFD700] mb-4">5×</div>
              <p className="text-white/90 mb-2">healthcare workers are more likely to experience violence than any other profession</p>
              <p className="text-sm text-white/50">BLS</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#FFD700] mb-4">30%</div>
              <p className="text-white/90 mb-2">of incidents are ever reported. The real number is far worse.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#FFD700] mb-4">$40-60K</div>
              <p className="text-white/90 mb-2">average cost of a single nurse turnover event</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Compliance training doesn't prepare people for real situations.
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Most workplace violence training checks a regulatory box. Slides. A quiz. A certificate. None of it changes what a nurse does when a patient grabs her arm in the ED at 2am. Healthcare Guardian was built to change that.
          </p>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="program" className="py-20 px-6 lg:px-8 bg-[#0F1729]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16">
            Scenario-based training that builds real skills.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A2347] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">
                Evidence-Based Curriculum
              </h3>
              <p className="text-white/90 leading-relaxed">
                8 modules developed with clinical input and grounded in neuroscience. Covers recognition, de-escalation, team dynamics, and post-incident recovery.
              </p>
            </div>

            <div className="bg-[#1A2347] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">
                Built for Healthcare Workers
              </h3>
              <p className="text-white/90 leading-relaxed">
                Not generic workplace safety. Designed specifically for nurses, techs, and frontline staff in high-acuity environments.
              </p>
            </div>

            <div className="bg-[#1A2347] p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">
                Joint Commission & CMS Aligned
              </h3>
              <p className="text-white/90 leading-relaxed">
                Meets regulatory requirements and generates the documentation your compliance team needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16">
            8 Modules. Complete Coverage.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Module 1: The Landscape of Risk',
              'Module 2: Reading the Room',
              'Module 3: Pattern Recognition',
              'Module 4: The Neuroscience of Fear',
              'Module 5: The Voice Before the Violence',
              'Module 6: Team Safety Dynamics',
              'Module 7: When Words Aren\'t Enough',
              'Module 8: After the Incident'
            ].map((module, index) => (
              <div key={index} className="bg-[#0F1729] p-6 rounded-lg border border-white/10 hover:border-[#FFD700]/50 transition-colors">
                <p className="text-lg text-white font-semibold">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-20 px-6 lg:px-8 bg-[#0F1729]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Built to satisfy regulators. Designed to actually work.
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Joint Commission NPSG compliance. CMS documentation requirements. OSHA 3148 guidelines. Our reporting dashboard gives you completion rates, comprehension scores, and scenario performance data — the kind of evidence that holds up to scrutiny.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16">
            Transparent Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0F1729] p-8 rounded-lg border border-white/10 hover:border-[#FFD700]/50 transition-colors">
              <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">Pilot</h3>
              <div className="text-4xl font-bold text-white mb-2">$29<span className="text-xl text-white/60">/seat</span></div>
              <p className="text-white/70 mb-6">Minimum 5 seats = $145</p>
              <p className="text-white/90 mb-6">Full curriculum access for 30 days.</p>
              <a
                href="#contact"
                className="block w-full bg-[#FFD700] text-[#1A2347] py-3 rounded-lg text-center font-bold hover:bg-[#FFD700]/90 transition-colors"
              >
                Reserve Pilot Access
              </a>
            </div>

            <div className="bg-[#0F1729] p-8 rounded-lg border border-white/10 hover:border-[#FFD700]/50 transition-colors">
              <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">Per-Seat License</h3>
              <div className="text-4xl font-bold text-white mb-2">$59<span className="text-xl text-white/60">/seat</span></div>
              <p className="text-white/70 mb-6">Annual billing available</p>
              <p className="text-white/90 mb-6">Perfect for smaller teams or specific departments.</p>
              <a
                href="#contact"
                className="block w-full bg-[#FFD700] text-[#1A2347] py-3 rounded-lg text-center font-bold hover:bg-[#FFD700]/90 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-[#0F1729] p-8 rounded-lg border border-white/10 hover:border-[#FFD700]/50 transition-colors">
              <h3 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">Facility License</h3>
              <div className="text-4xl font-bold text-white mb-2">$1,200+<span className="text-xl text-white/60">/year</span></div>
              <p className="text-white/70 mb-6">$1,200–$15,000+ depending on facility size</p>
              <p className="text-white/90 mb-6">Unlimited seats for your entire organization.</p>
              <a
                href="#contact"
                className="block w-full bg-[#FFD700] text-[#1A2347] py-3 rounded-lg text-center font-bold hover:bg-[#FFD700]/90 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-[#0F1729]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-white/70 text-center mb-12">
            Ready to protect your staff? Let's talk.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-semibold">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A2347] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-white mb-2 font-semibold">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A2347] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-white mb-2 font-semibold">Organization *</label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1A2347] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A2347] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2 font-semibold">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A2347] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2 font-semibold">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1A2347] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFD700] text-[#1A2347] py-4 rounded-lg text-lg font-bold hover:bg-[#FFD700]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-serif font-bold text-[#FFD700] mb-4">Healthcare Guardian</div>
            <p className="text-white/70 mb-6">
              Workplace Violence Prevention Training Built for Healthcare
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="text-center text-white/50 text-sm">
            © 2026 Healthcare Guardian. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
