'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

export default function LandingFinalCta() {
  const scrollToForm = () => {
    const el = document.getElementById('quote-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0E1719] text-white overflow-hidden text-center">
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/brand/photo-bluestone-slabs.png"
          alt="American Pavers & Turf Outdoor Space"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0E1719]/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-3">
          FREE ON-SITE ESTIMATE
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
          Book this week&apos;s remaining slots.
        </h2>

        <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
          We reply within one business day and quote at the door. No obligation, no pressure.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToForm}
            className="px-8 py-4 bg-[#FF6B01] hover:bg-[#E05E00] active:scale-98 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book my free estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyData.phone}`}
            className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-white/20 backdrop-blur-sm transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#4CC66E]" />
            <span>{companyData.formattedPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
