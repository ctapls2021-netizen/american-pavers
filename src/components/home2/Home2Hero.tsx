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
    <section id="hero" className="relative min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] flex items-center bg-[#0E1719] text-white overflow-hidden w-full max-w-full">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1719]/95 via-[#0E1719]/80 to-[#0E1719]/35 lg:w-[75%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/85 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        {/* Copy Container */}
        <div className="max-w-2xl text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-2 sm:mb-3">
            Los Angeles · Pavers &amp; turf
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight text-white">
            Luxury remodeling designed around your lifestyle.
          </h1>

          <p className="mt-3.5 sm:mt-5 text-stone-300 text-sm sm:text-base lg:text-xl font-normal leading-relaxed max-w-xl">
            We design and install paver driveways, patios and artificial turf lawns across Los Angeles County. One crew, one warranty, and the base work done properly underneath.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo('quote-section')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#019934] hover:bg-[#017026] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer"
            >
              See our work
            </button>
          </div>
        </div>

        {/* Integrated StatRow Overlay: 2 columns under 1200px, 4 columns at >=1200px */}
        <div className="mt-10 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {STATS.map((s, i) => {
              const IconComp = s.icon;
              const hasLeftBorder = i === 1 || i === 3;
              const hasDesktopOnlyBorder = i === 2;

              return (
                <div
                  key={s.label}
                  className={`min-w-0 flex items-start gap-2.5 sm:gap-3.5 ${
                    hasLeftBorder
                      ? 'border-l border-white/15 pl-4 sm:pl-6'
                      : hasDesktopOnlyBorder
                      ? 'xl:border-l xl:border-white/15 xl:pl-6'
                      : ''
                  }`}
                >
                  <span className="text-[#4CC66E] shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-xl sm:text-2xl lg:text-4xl text-white font-normal leading-none truncate">
                      {s.value}
                      {s.suffix && (
                        <span className="text-xs sm:text-sm lg:text-base text-[#4CC66E] font-sans ml-0.5">
                          {s.suffix}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-tight sm:tracking-wider text-stone-400 leading-tight">
                      {s.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-3 sm:mt-4 text-[11px] text-stone-400">
            Placeholder figures — replace with the company&apos;s real numbers before publishing.
          </p>
        </div>
      </div>
    </section>
  );
}
