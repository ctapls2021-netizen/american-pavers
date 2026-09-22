'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, ArrowRight, Check, ChevronDown, Loader2 } from 'lucide-react';
import { companyData } from '@/data/company';

const SERVICES = [
  'Paver driveway',
  'Patio or pool deck',
  'Walkway',
  'Artificial turf',
  'Retaining wall',
  'Not sure yet',
];

export default function Home2QuoteSplit() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    addressOrZip: '',
    service: '',
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
          zipCode: formData.addressOrZip || 'Los Angeles',
          serviceInterest: formData.service || 'Paver driveway',
          notes: `SMS Consent: ${formData.consent ? 'Yes' : 'No'}`,
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
    <section id="quote-section" className="grid grid-cols-1 lg:grid-cols-2 scroll-mt-20 border-b border-stone-200">
      {/* Left Column: Photograph under translucent wash, content pushed right toward center seam */}
      <div className="relative min-h-[520px] flex items-center bg-[#0E1719] text-white overflow-hidden py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
        <Image
          src="/assets/brand/photo-crew-installer-closeup.png"
          alt="Installer hand-setting a paver"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        {/* Exact 80% opacity dark wash */}
        <div className="absolute inset-0 bg-[#0E1719]/80" />

        <div className="relative z-10 w-full max-w-[560px] ml-auto mr-0 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-2.5">
            FREE ESTIMATE
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-serif font-normal text-white tracking-tight leading-tight">
            Tell us about the project.
          </h2>

          {/* Green accent rule (56px x 3px) */}
          <div className="w-14 h-[3px] bg-[#019934] mt-3.5 mb-5" />

          <p className="text-stone-300 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
            We reply within one business day and book the site visit at a time you are home.
          </p>

          <div className="mt-8 space-y-3.5">
            <div className="flex items-center gap-3 text-stone-200 text-xs sm:text-sm">
              <span className="text-[#4CC66E] flex items-center shrink-0">
                <MapPin className="w-4 h-4 stroke-[1.5]" />
              </span>
              <span>Serving Los Angeles County — Valley to the South Bay</span>
            </div>

            <div className="flex items-center gap-3 text-stone-200 text-xs sm:text-sm">
              <span className="text-[#4CC66E] flex items-center shrink-0">
                <Clock className="w-4 h-4 stroke-[1.5]" />
              </span>
              <span>Mon–Sat, 7am–6pm</span>
            </div>

            <div className="flex items-center gap-3 text-stone-200 text-xs sm:text-sm">
              <span className="text-[#4CC66E] flex items-center shrink-0">
                <Phone className="w-4 h-4 stroke-[1.5]" />
              </span>
              <a
                href={`tel:${companyData.phone}`}
                className="hover:text-[#4CC66E] transition-colors"
              >
                {companyData.formattedPhone} — placeholder number
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Pure white background, form pushed left toward center seam */}
      <div className="bg-white text-stone-900 flex items-center py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[560px] mr-auto ml-0 text-left">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-[#019934]/15 rounded-full flex items-center justify-center mx-auto text-[#019934]">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A292C]">
                Request received
              </h3>
              <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1A292C]">{formData.name}</strong>. We will call you to book the site visit within one business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    phone: '',
                    addressOrZip: '',
                    service: '',
                    consent: true,
                  });
                }}
                className="mt-4 px-6 py-2.5 bg-[#019934] text-white text-xs font-semibold rounded hover:bg-[#017026] transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-[26px] text-[#1A292C] font-normal leading-tight">
                  Get a free on-site estimate
                </h3>
                {/* Green accent rule (56px x 3px) */}
                <div className="w-14 h-[3px] bg-[#019934] mt-3.5 mb-6" />
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="quote-name"
                  className="text-[13px] font-semibold tracking-[0.08em] uppercase text-stone-500"
                >
                  Name <span className="text-[#019934]">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  placeholder="Jordan Ellis"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white text-[#1A292C] placeholder:text-stone-400 text-base py-3 px-3.5 border border-stone-200 rounded-[6px] focus:outline-none focus:border-[#019934] focus:ring-2 focus:ring-[#019934]/30 transition-all"
                />
              </div>

              {/* Phone with icon */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="quote-phone"
                  className="text-[13px] font-semibold tracking-[0.08em] uppercase text-stone-500"
                >
                  Phone <span className="text-[#019934]">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-stone-400 pointer-events-none flex">
                    <Phone className="w-[18px] h-[18px] stroke-[1.5]" />
                  </span>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="(323) 555-0100"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white text-[#1A292C] placeholder:text-stone-400 text-base py-3 pl-11 pr-3.5 border border-stone-200 rounded-[6px] focus:outline-none focus:border-[#019934] focus:ring-2 focus:ring-[#019934]/30 transition-all"
                  />
                </div>
              </div>

              {/* Address or ZIP with icon */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="quote-zip"
                  className="text-[13px] font-semibold tracking-[0.08em] uppercase text-stone-500"
                >
                  Address or ZIP
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-stone-400 pointer-events-none flex">
                    <MapPin className="w-[18px] h-[18px] stroke-[1.5]" />
                  </span>
                  <input
                    id="quote-zip"
                    type="text"
                    placeholder="Sherman Oaks, 91403"
                    value={formData.addressOrZip}
                    onChange={(e) => setFormData({ ...formData, addressOrZip: e.target.value })}
                    className="w-full bg-white text-[#1A292C] placeholder:text-stone-400 text-base py-3 pl-11 pr-3.5 border border-stone-200 rounded-[6px] focus:outline-none focus:border-[#019934] focus:ring-2 focus:ring-[#019934]/30 transition-all"
                  />
                </div>
              </div>

              {/* Service with chevron icon */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="quote-service"
                  className="text-[13px] font-semibold tracking-[0.08em] uppercase text-stone-500"
                >
                  Service <span className="text-[#019934]">*</span>
                </label>
                <div className="relative flex items-center">
                  <select
                    id="quote-service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white text-[#1A292C] text-base py-3 pl-3.5 pr-11 border border-stone-200 rounded-[6px] appearance-none cursor-pointer focus:outline-none focus:border-[#019934] focus:ring-2 focus:ring-[#019934]/30 transition-all"
                  >
                    <option value="">Choose a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-3.5 text-stone-400 pointer-events-none flex">
                    <ChevronDown className="w-[18px] h-[18px] stroke-[1.5]" />
                  </span>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-[4px] mt-0.5 flex items-center justify-center transition-colors border ${
                      formData.consent
                        ? 'bg-[#019934] border-[#019934] text-white'
                        : 'bg-white border-stone-300'
                    }`}
                  >
                    {formData.consent && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </span>
                  <span className="text-sm text-stone-700 leading-normal">
                    Text me photos of similar installs in my neighborhood.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-6 bg-[#019934] hover:bg-[#017026] active:scale-[0.99] text-white font-semibold text-base sm:text-lg rounded-[6px] transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-sm disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request my estimate</span>
                      <ArrowRight className="w-5 h-5 stroke-[1.75]" />
                    </>
                  )}
                </button>
              </div>

              {/* Microcopy note */}
              <p className="text-xs text-stone-400 text-center pt-1">
                We reply within one business day. No pressure, no subcontractors.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
