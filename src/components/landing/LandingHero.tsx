'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Clock, Check, ShieldCheck, Star, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { companyData } from '@/data/company';

interface LandingHeroProps {
  onSuccess?: () => void;
}

const SERVICES = [
  'Paver driveway',
  'Patio or pool deck',
  'Walkway',
  'Artificial turf',
  'Retaining wall',
  'Not sure yet',
];

export default function LandingHero({ onSuccess }: LandingHeroProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zipCode: '',
    service: 'Paver driveway',
    notes: '',
    consent: true,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    setStatus('submitting');
    try {
      const names = formData.name.trim().split(' ');
      const firstName = names[0];
      const lastName = names.slice(1).join(' ') || '';

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: formData.phone,
          zipCode: formData.zipCode || 'Los Angeles',
          serviceInterest: formData.service,
          notes: `${formData.notes ? formData.notes + ' | ' : ''}SMS Consent: ${formData.consent ? 'Yes' : 'No'}`,
          timeframe: 'Immediate',
        }),
      });

      if (res.ok) {
        setStatus('success');
        if (onSuccess) onSuccess();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0E1719] text-white overflow-hidden">
      {/* High-Resolution Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/brand/photo-driveway-herringbone.png"
          alt="Luxury Paver Driveway Installation in Los Angeles"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-center"
        />
        {/* Scrim Overlay for Perfect Contrast on Desktop and Mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1719]/95 via-[#0E1719]/80 to-[#0E1719]/95 lg:bg-gradient-to-r lg:from-[#0E1719]/95 lg:via-[#0E1719]/80 lg:to-[#0E1719]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
        {/* Top Header Bar */}
        <header className="flex items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-white/10">
          <div className="relative w-48 sm:w-56 h-11">
            <Image
              src="/assets/brand/logo-horizontal-white.png"
              alt="American Pavers & Turf"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <a
            href={`tel:${companyData.phone}`}
            className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#4CC66E] transition-colors whitespace-nowrap"
            aria-label="Call American Pavers & Turf"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#4CC66E]" />
            </span>
            <span className="hidden xs:inline">{companyData.formattedPhone}</span>
            <span className="xs:hidden">Call Now</span>
          </a>
        </header>

        {/* Main 2-Column Hero: Copy on Left, Conversion Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start my-auto py-8 sm:py-12">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Seasonal Promo Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6B01]/15 border border-[#FF6B01]/30 text-[#FFA057] text-xs font-semibold uppercase tracking-wider w-fit mb-4">
              <Clock className="w-3.5 h-3.5 shrink-0 text-[#FF8C38]" />
              <span>Spring install pricing — booking March</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.1] tracking-tight">
              A paver driveway, installed in one week.
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-stone-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              Free on-site estimate anywhere in Los Angeles County. Fixed written price, our own crews, and a 12-year workmanship warranty.
            </p>

            {/* 3 Hard Truths / Guarantees */}
            <div className="mt-6 sm:mt-8 space-y-3.5">
              {[
                'Six inches of compacted base — quoted openly, not hidden',
                'One crew from demolition to walkthrough, no subcontractors',
                'The quote is the price. It does not move mid-job.',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 text-white">
                  <span className="w-5 h-5 rounded-full bg-[#019934]/20 border border-[#4CC66E]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#4CC66E] stroke-[2.5]" />
                  </span>
                  <span className="text-sm sm:text-base text-stone-200 font-medium leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#4CC66E]" />
                <span>Licensed, bonded &amp; insured</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold">
                <Star className="w-4 h-4 text-[#FFA057] fill-[#FFA057]" />
                <span>4.9 average review</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Quote Form */}
          <div id="quote-form" className="lg:col-span-5 w-full scroll-mt-24">
            <div className="bg-white rounded-md p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900">
              {status === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#019934]/15 rounded-full flex items-center justify-center mx-auto text-[#019934]">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A292C]">
                    Request received!
                  </h3>
                  <p className="text-stone-600 text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1A292C]">{formData.name}</strong>. We will call you at <strong className="text-[#1A292C]">{formData.phone}</strong> to confirm your site visit within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        phone: '',
                        zipCode: '',
                        service: 'Paver driveway',
                        notes: '',
                        consent: true,
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#1A292C] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-stone-800 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[26px] text-[#1A292C] font-normal leading-tight">
                      Get your fixed price
                    </h3>
                    {/* Brand Green 3px Rule */}
                    <div className="w-14 h-[3px] bg-[#019934] mt-3 mb-5" />
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="landing-name" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                      Name *
                    </label>
                    <input
                      id="landing-name"
                      type="text"
                      required
                      placeholder="Jordan Ellis"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 bg-stone-50 border border-stone-300 rounded px-3.5 text-base text-[#1A292C] placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                    />
                  </div>

                  {/* Phone & Zip Code Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="landing-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                        Phone *
                      </label>
                      <div className="relative">
                        <input
                          id="landing-phone"
                          type="tel"
                          required
                          placeholder="(323) 555-0100"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-12 bg-stone-50 border border-stone-300 rounded pl-10 pr-3 text-base text-[#1A292C] placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                        />
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="landing-zip" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                        City or ZIP
                      </label>
                      <div className="relative">
                        <input
                          id="landing-zip"
                          type="text"
                          placeholder="Sherman Oaks, 91403"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full h-12 bg-stone-50 border border-stone-300 rounded pl-10 pr-3 text-base text-[#1A292C] placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                        />
                        <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="landing-service" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                      Service *
                    </label>
                    <select
                      id="landing-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 bg-stone-50 border border-stone-300 rounded px-3.5 text-base text-[#1A292C] focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Project Details */}
                  <div>
                    <label htmlFor="landing-notes" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                      Project Details (Optional)
                    </label>
                    <textarea
                      id="landing-notes"
                      rows={2}
                      placeholder="Approximate dimensions, current conditions, or timeline..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded p-3 text-sm text-[#1A292C] placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all resize-y"
                    />
                  </div>

                  {/* SMS Consent Checkbox */}
                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded text-[#019934] focus:ring-[#019934] border-stone-300 cursor-pointer"
                    />
                    <span className="text-xs text-stone-600 leading-snug">
                      Text me photos of similar installs in my neighborhood.
                    </span>
                  </label>

                  {/* Orange Quote Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full h-14 bg-[#FF6B01] hover:bg-[#E05E00] active:scale-98 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Book my free estimate</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] sm:text-xs text-stone-500 text-center pt-1 font-medium">
                    One visit. One measurement. One written number.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note in Hero */}
        <div className="py-4 text-center text-xs text-stone-400 border-t border-white/10">
          American Pavers &amp; Turf · Licensed California Hardscape &amp; Landscape Contractor
        </div>
      </div>
    </section>
  );
}
