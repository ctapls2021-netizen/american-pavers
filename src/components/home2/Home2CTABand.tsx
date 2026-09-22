import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home2CTABand() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-24 bg-[#0E1719] text-white overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/brand/photo-driveway-herringbone.png"
          alt="American Pavers & Turf Outdoor Living"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0E1719]/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-3">
          FREE ESTIMATE
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
          Book a site visit this week.
        </h2>

        <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          No pressure, no subcontractors, no moving prices.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo('quote-section')}
            className="px-8 py-4 bg-[#019934] hover:bg-[#017026] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Get a free quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-white/20 backdrop-blur-sm transition-colors cursor-pointer"
          >
            See our work
          </button>
        </div>
      </div>
    </section>
  );
}
