'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, ArrowRight, Check, Loader2 } from 'lucide-react';
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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="quote-section" className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] scroll-mt-20 border-b border-stone-200">
      {/* Left Column: Photo & Company Info */}
      <div className="lg:col-span-6 relative flex items-center bg-[#0E1719] text-white overflow-hidden py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
        <Image
          src="/assets/brand/photo-crew-installer-closeup.png"
          alt="Installer hand-setting an interlocking paver"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0E1719]/80" />

        <div className="relative z-10 max-w-lg text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-3">
            FREE ESTIMATE
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
            Tell us about the project.
          </h2>

          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            We reply within one business day and book the site visit at a time you are home.
          </p>

          <div className="mt-8 space-y-4 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3 text-stone-200 text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#4CC66E]">
                <MapPin className="w-4 h-4" />
              </span>
              <span>Serving Los Angeles County — Valley to the South Bay</span>
            </div>

            <div className="flex items-center gap-3 text-stone-200 text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#4CC66E]">
                <Clock className="w-4 h-4" />
              </span>
              <span>Mon–Sat, 7am–6pm</span>
            </div>

            <div className="flex items-center gap-3 text-stone-200 text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#4CC66E]">
                <Phone className="w-4 h-4" />
              </span>
              <a href={`tel:${companyData.phone}`} className="font-semibold text-white hover:text-[#4CC66E] transition-colors">
                {companyData.formattedPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Quote Form */}
      <div className="lg:col-span-6 bg-white text-stone-900 flex items-center py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
        <div className="w-full max-w-lg mx-auto text-left">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#019934]/15 rounded-full flex items-center justify-center mx-auto text-[#019934]">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A292C]">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A292C] font-normal leading-tight">
                  Get a free on-site estimate
                </h3>
                <div className="w-14 h-[3px] bg-[#019934] mt-3 mb-5" />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                  Name *
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  placeholder="Jordan Ellis"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 bg-stone-50 border border-stone-300 rounded px-3.5 text-base text-[#1A292C] focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                />
              </div>

              {/* Phone & ZIP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                    Phone *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    placeholder="(323) 555-0100"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 bg-stone-50 border border-stone-300 rounded px-3.5 text-base text-[#1A292C] focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="quote-zip" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                    Address or ZIP
                  </label>
                  <input
                    id="quote-zip"
                    type="text"
                    placeholder="Sherman Oaks, 91403"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full h-12 bg-stone-50 border border-stone-300 rounded px-3.5 text-base text-[#1A292C] focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="quote-service" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                  Service *
                </label>
                <select
                  id="quote-service"
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

              {/* Project details */}
              <div>
                <label htmlFor="quote-notes" className="block text-xs font-bold uppercase tracking-wider text-[#1A292C] mb-1.5">
                  Project details
                </label>
                <textarea
                  id="quote-notes"
                  rows={2}
                  placeholder="Approximate square footage, timeline, anything else."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded p-3 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:border-[#019934] focus:ring-1 focus:ring-[#019934] transition-all resize-y"
                />
              </div>

              {/* Consent checkbox */}
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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full h-14 bg-[#019934] hover:bg-[#017026] active:scale-98 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request my estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-stone-500 text-center pt-1">
                We reply within one business day. No pressure, no subcontractors.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
