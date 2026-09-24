'use client';

import React, { useState } from 'react';
import { CheckCircle2, Star, Loader2 } from 'lucide-react';

import ReviewLogoMarquee from '@/components/ui/ReviewLogoMarquee';

interface BottomCtaBannerProps {
  onOpenModal?: () => void;
  title?: string;
  subtitle?: string;
}

export default function BottomCtaBanner({
  title = 'Ready to See Your Yard in 3D Before You Build?',
  subtitle = 'Book your complimentary in-home design consultation. One of our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf.',
}: BottomCtaBannerProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: 'Pavers',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          serviceInterest: formData.projectType,
          notes: formData.notes,
          zipCode: 'California',
          timeframe: 'Immediate',
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#1A292C] text-white py-16 sm:py-20 lg:py-24 border-t border-stone-800">
      {/* Background Image: Authentic Paver Patio with atmospheric overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/real/American pavers (17).jpg"
          alt="American Pavers & Turf Background"
          className="w-full h-full object-cover object-center opacity-75 sm:opacity-85 brightness-95 contrast-105"
          loading="lazy"
        />
        {/* Slate Gradients ensuring text readability while keeping the paver background clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A292C]/85 via-[#1A292C]/50 to-[#1A292C]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A292C]/75 via-transparent to-[#0c1618]/80" />
      </div>

      {/* Ambient green glows */}
      <figure className="pointer-events-none absolute -bottom-[40%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[#019934]/15 blur-[160px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-10 hidden aspect-square w-[28vw] rounded-full bg-[#019934]/10 opacity-50 blur-[100px] md:block" />

      {/* Main Content: Review Marquee at Top + 2-Column Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Infinite Marquee of Verified Review Platforms placed at top */}
        <div className="pb-10 mb-12 border-b border-white/10">
          <ReviewLogoMarquee />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headings & Value Props */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-2">
            {/* Main Heading */}
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif-brand leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Value Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-stone-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#42e078] shrink-0" />
                <span>Certified ICPI & C-27 Master Installation Crews</span>
              </div>
              <div className="flex items-center gap-3 text-stone-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#42e078] shrink-0" />
                <span>25-Year to Lifetime Transferable Structural Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-stone-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#42e078] shrink-0" />
                <span>Complimentary In-Home 3D Design Simulation & Stone Samples</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Consultation Request Form (Matching screenshot) */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#edf4ee] p-6 sm:p-8 rounded-none border border-stone-200/90 shadow-2xl text-stone-900">
              {status === 'success' ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#019934]/15 rounded-full flex items-center justify-center mx-auto text-[#019934]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1A292C] font-serif-brand">
                    Consultation Request Received!
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#1A292C]">{formData.firstName}</span>. One of our senior hardscape architects will contact you shortly at <span className="font-bold text-[#1A292C]">{formData.phone}</span> to confirm your free 3D design consultation.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        projectType: 'Pavers',
                        notes: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#1A292C] text-white text-xs font-bold uppercase tracking-wider rounded-none hover:bg-stone-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Row 1: First name & Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-first-name" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                        First name
                      </label>
                      <input
                        id="cta-first-name"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-last-name" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                        Last name
                      </label>
                      <input
                        id="cta-last-name"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-email" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                        Email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-phone" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                        Phone
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project type */}
                  <div>
                    <label htmlFor="cta-project-type" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                      Project type
                    </label>
                    <select
                      id="cta-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                    >
                      <option value="Driveway Pavers">Driveway Pavers</option>
                      <option value="Patio Pavers">Patio Pavers</option>
                      <option value="Pool Deck Pavers">Pool Deck Pavers</option>
                      <option value="Synthetic Turf">Synthetic Turf</option>
                      <option value="Outdoor Kitchens & Fire Pits">Outdoor Kitchens & Fire Pits</option>
                      <option value="Decks & Pergolas">Decks & Pergolas</option>
                      <option value="Complete Outdoor Living">Complete Outdoor Living</option>
                    </select>
                  </div>

                  {/* Row 4: Tell us about your project */}
                  <div>
                    <label htmlFor="cta-notes" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                      Tell us about your project
                    </label>
                    <textarea
                      id="cta-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Approximate dimensions, current conditions, or design ideas..."
                      className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm px-6 py-3.5 rounded-none shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <span>Request a Consultation</span>
                      )}
                    </button>
                  </div>

                  {/* Helper Text */}
                  <p className="text-[11px] sm:text-xs text-stone-500 pt-1">
                    Consultation requests will be activated when final contact details are confirmed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
