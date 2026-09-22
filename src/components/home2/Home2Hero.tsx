'use client';

import React from 'react';
import Image from 'next/image';
import { Hammer, Calendar, ShieldCheck, Star, ArrowRight } from 'lucide-react';

const STATS = [
  { icon: Hammer, value: '1,200', suffix: '+', label: 'Installs completed' },
  { icon: Calendar, value: '18', suffix: ' yrs', label: 'In business' },
  { icon: ShieldCheck, value: '12', suffix: ' yrs', label: 'Workmanship warranty' },
  { icon: Star, value: '4.9', suffix: '', label: 'Average review' },
];

export default function Home2Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[760px] flex items-center bg-[#0E1719] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/brand/photo-driveway-herringbone.png"
          alt="Luxury Paver Driveway by American Pavers & Turf"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-center"
        />
        {/* Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1719]/95 via-[#0E1719]/75 to-[#0E1719]/30 lg:w-[75%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Copy Container */}
        <div className="max-w-2xl text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-3">
            Los Angeles · Pavers &amp; turf
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.08] tracking-tight text-white">
            Luxury remodeling designed around your lifestyle.
          </h1>

          <p className="mt-4 sm:mt-5 text-stone-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
            We design and install paver driveways, patios and artificial turf lawns across Los Angeles County. One crew, one warranty, and the base work done properly underneath.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo('quote-section')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#019934] hover:bg-[#017026] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer"
            >
              See our work
            </button>
          </div>
        </div>

        {/* Integrated StatRow Overlay: 2 columns under 1200px, 4 columns at 1200px and above */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 min-[1200px]:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((s, i) => {
              const IconComp = s.icon;
              const isEvenIn2Col = i % 2 === 1;

              return (
                <div
                  key={s.label}
                  className={`flex items-start gap-3.5 sm:gap-4 ${
                    isEvenIn2Col ? 'max-[1199px]:border-l max-[1199px]:border-white/15 max-[1199px]:pl-5 sm:max-[1199px]:pl-6' : ''
                  } ${
                    i > 0 ? 'min-[1200px]:border-l min-[1200px]:border-white/15 min-[1200px]:pl-6' : ''
                  }`}
                >
                  <span className="text-[#4CC66E] shrink-0 mt-0.5 sm:mt-1">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                      {s.value}
                      {s.suffix && (
                        <span className="text-base sm:text-lg text-[#4CC66E] font-sans ml-0.5">
                          {s.suffix}
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-400">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-[11px] text-stone-400">
            Placeholder figures — replace with the company&apos;s real numbers before publishing.
          </p>
        </div>
      </div>
    </section>
  );
}
