'use client';

import React, { useState } from 'react';
import { CheckCircle2, Loader2, Phone } from 'lucide-react';
import ReviewLogoMarquee from '@/components/ui/ReviewLogoMarquee';
import { companyData } from '@/data/company';

interface AltBottomCtaBannerProps {
  onOpenModal?: () => void;
  title?: string;
  subtitle?: string;
}

export default function AltBottomCtaBanner({
  title = 'Ready to See Your Yard in 3D Before You Build?',
  subtitle = 'Book your complimentary in-home design consultation. One of our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf.',
}: AltBottomCtaBannerProps) {
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
    <section className="relative min-h-[640px] overflow-hidden bg-[#1A292C] text-white py-20 sm:py-28 border-t border-stone-800">
      {/* Background Image: Authentic Paver Patio with Kōzen architectural tone */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/banners/banner-patio.webp"
          alt="American Pavers & Turf Outdoor Space"
          className="w-full h-full object-cover object-center opacity-40 brightness-90 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1A292C]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A292C] via-transparent to-[#121B1C]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Review Platform Marquee */}
        <div className="pb-12 mb-16 border-b border-white/10">
          <ReviewLogoMarquee />
        </div>

        {/* 2-Column Grid: Editorial Story & Consultation Studio Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols): Copy & Assurances */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#42e078] block">
              07 — COMPLIMENTARY 3D SESSION
            </span>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* Value Guarantees with Delicate Border */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-stone-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#42e078] shrink-0 mt-0.5" />
                <span>Certified ICPI &amp; C-27 Master Installation Crews</span>
              </div>
              <div className="flex items-start gap-3 text-stone-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#42e078] shrink-0 mt-0.5" />
                <span>25-Year to Lifetime Transferable Structural Guarantee</span>
              </div>
              <div className="flex items-start gap-3 text-stone-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#42e078] shrink-0 mt-0.5" />
                <span>Complimentary In-Home 3D Design Simulation &amp; Stone Samples</span>
              </div>
            </div>

            {/* Direct Phone Call Prompt */}
            <div className="pt-2 flex items-center gap-3 text-stone-400 text-xs">
              <span>Prefer speaking now?</span>
              <a
                href={`tel:${companyData.phone}`}
                className="font-bold text-white hover:text-[#42e078] transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#42e078]" />
                {companyData.formattedPhone}
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Kōzen Atelier Consultation Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#FAF9F6] p-7 sm:p-10 border border-stone-200 shadow-2xl text-stone-900">
              <div className="mb-6 border-b border-stone-200/80 pb-4">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#019934] block mb-1">
                  ZERO-PRESSURE APPOINTMENT
                </span>
                <h3 className="text-2xl font-serif text-[#1A292C] font-normal">
                  Schedule In-Home 3D Session
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Precise yard measurements and physical stone samples delivered to your door.
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#019934]/15 rounded-full flex items-center justify-center mx-auto text-[#019934]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif text-[#1A292C]">
                    Consultation Request Received!
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#1A292C]">{formData.firstName}</span>. A senior hardscape designer will contact you at <span className="font-bold text-[#1A292C]">{formData.phone}</span> to confirm your session date and bring requested swatches.
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
                    className="mt-4 px-6 py-2.5 bg-[#1A292C] text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Row 1: Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="alt-cta-first-name" className="block text-xs font-semibold text-[#1A292C] mb-1.5 uppercase tracking-wider">
                        First Name *
                      </label>
                      <input
                        id="alt-cta-first-name"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-sm text-[#1A292C] focus:outline-none focus:ring-1 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="alt-cta-last-name" className="block text-xs font-semibold text-[#1A292C] mb-1.5 uppercase tracking-wider">
                        Last Name
                      </label>
                      <input
                        id="alt-cta-last-name"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-sm text-[#1A292C] focus:outline-none focus:ring-1 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="alt-cta-email" className="block text-xs font-semibold text-[#1A292C] mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        id="alt-cta-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-sm text-[#1A292C] focus:outline-none focus:ring-1 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="alt-cta-phone" className="block text-xs font-semibold text-[#1A292C] mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        id="alt-cta-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-sm text-[#1A292C] focus:outline-none focus:ring-1 focus:ring-[#019934] focus:border-[#019934] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type */}
                  <div>
                    <label htmlFor="alt-cta-project-type" className="block text-xs font-semibold text-[#1A292C] mb-1.5 uppercase tracking-wider">
                      Project of Interest
                    </label>
                    <select
                      id="alt-cta-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-sm text-[#1A292C] focus:outline-none focus:ring-1 focus:ring-[#019934] focus:border-[#019934] transition-all"
                    >
                      <option value="Patio Pavers">Patio Pavers</option>
                      <option value="Driveway Pavers">Driveway Pavers</option>
                      <option value="Pool Deck Pavers">Pool Deck Pavers</option>
                      <option value="Synthetic Turf">Synthetic Turf</option>
                      <option value="Outdoor Kitchens & Fire Pits">Outdoor Kitchens & Fire Pits</option>
                      <option value="Decks & Pergolas">Decks & Pergolas</option>
                      <option value="Complete Outdoor Living">Complete Outdoor Living</option>
                    </select>
                  </div>

                  {/* Row 4: Project Notes */}
                  <div>
                    <label htmlFor="alt-cta-notes" className="block text-xs font-semibold text-[#1A292C] mb-1.5 uppercase tracking-wider">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      id="alt-cta-notes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Approximate square footage, desired start date, or specific goals..."
                      className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-sm text-[#1A292C] focus:outline-none focus:ring-1 focus:ring-[#019934] focus:border-[#019934] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs uppercase tracking-widest py-4 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <span>Request 3D In-Home Consultation</span>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-400 text-center pt-1">
                    Free estimate · No obligation · Licensed &amp; Bonded CA Contractor
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
