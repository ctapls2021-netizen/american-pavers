import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home2CTABand() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#1A292C] w-full max-w-full">
      {/* Background Image with Authentic Scrim Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/brand/photo-driveway-herringbone.png"
          alt="American Pavers & Turf Outdoor Living"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim: Dark on the left for contrast, translucent on the right to reveal lush landscaping */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(14,23,25,0.88) 0%, rgba(14,23,25,0.62) 45%, rgba(14,23,25,0.15) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="max-w-[620px] text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-3">
            FREE ESTIMATE
          </span>

          <h2 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[35px] leading-[1.12] text-white">
            Book a site visit this week.
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-[21px] leading-[1.5] text-stone-300">
            No pressure, no subcontractors, no moving prices.
          </p>
        </div>

        {/* Right: Action Buttons Side by Side */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => scrollTo('quote-section')}
            className="w-full sm:w-auto justify-center px-7 py-4 bg-[#019934] hover:bg-[#017026] text-white font-semibold text-base sm:text-lg rounded-md transition-colors flex items-center gap-2.5 cursor-pointer shadow-sm active:scale-98"
          >
            <span>Get a free quote</span>
            <ArrowRight className="w-5 h-5 stroke-[1.75]" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="w-full sm:w-auto justify-center px-7 py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-base sm:text-lg rounded-md border border-white/20 hover:border-white/40 transition-colors flex items-center cursor-pointer active:scale-98"
          >
            <span>See our work</span>
          </button>
        </div>
      </div>
    </section>
  );
}
