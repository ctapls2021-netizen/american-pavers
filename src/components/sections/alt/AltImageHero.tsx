'use client';

import React from 'react';
import { ArrowRight, Shield, CheckCircle2, Hammer, Calendar, Star } from 'lucide-react';

interface AltImageHeroProps {
  onOpenConsultation: () => void;
  onExploreServices?: () => void;
}

export default function AltImageHero({
  onOpenConsultation,
  onExploreServices,
}: AltImageHeroProps) {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreServices) {
      onExploreServices();
      return;
    }
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 text-white pt-28 pb-6 sm:pt-36 sm:pb-8">
      {/* High-Resolution Luxury Photography Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/banners/banner-driveway-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/assets/banners/banner-driveway.webp"
            type="image/webp"
          />
          <img
            src="/assets/banners/banner-driveway.webp"
            alt="Luxury Estate Custom Interlocking Pavers & Turf by American Pavers & Turf"
            className="w-full h-full object-cover object-[70%_center] sm:object-[65%_center]"
            // @ts-ignore
            fetchPriority="high"
            decoding="sync"
          />
        </picture>

        {/* Left-Side Dark Vignette Overlay so White Text & Buttons Pop With 100% Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-transparent sm:w-[75%] lg:w-[62%]" />
        <div className="absolute inset-0 bg-stone-950/30" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
      </div>

      {/* Main Left-Aligned Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Tag */}
          <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#48a24c] mb-3 sm:mb-4">
            LOS ANGELES · PAVERS &amp; TURF
          </div>

          {/* Luxury Editorial Serif Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-white leading-[1.12] tracking-tight">
            Luxury remodeling<br className="hidden sm:inline" />
            {' '}designed around your<br className="hidden sm:inline" />
            {' '}lifestyle.
          </h1>

          {/* Subheading Paragraph */}
          <p className="mt-5 sm:mt-6 text-stone-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
            We design and install paver driveways, patios and artificial turf lawns across Los Angeles County. One crew, one warranty, and the base work done properly underneath.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* Primary Quote Button — Arrow and text strictly locked in one single line */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap flex-nowrap px-6 sm:px-7 py-3.5 bg-[#48a24c] hover:bg-[#3ea748] text-white font-medium text-sm sm:text-base rounded-md shadow-lg shadow-[#48a24c]/20 transition-all duration-150 cursor-pointer active:scale-98 group shrink-0"
            >
              <span className="whitespace-nowrap">Get a free quote</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary See Our Work Button */}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="inline-flex items-center justify-center whitespace-nowrap flex-nowrap px-6 sm:px-7 py-3.5 bg-stone-900/70 hover:bg-stone-800/90 border border-white/20 hover:border-white/40 text-white font-medium text-sm sm:text-base rounded-md backdrop-blur-xs transition-all duration-150 cursor-pointer shrink-0"
            >
              <span className="whitespace-nowrap">See our work</span>
            </a>
          </div>

          {/* Trust Guarantee Pills */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/70 border border-white/10 text-xs text-stone-300 font-medium whitespace-nowrap backdrop-blur-xs">
              <Shield className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Licensed, bonded &amp; insured</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/70 border border-white/10 text-xs text-stone-300 font-medium whitespace-nowrap backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>12-year installation warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Stats Bar (Clean 4-column divider layout) */}
      <div className="relative z-10 w-full mt-12 sm:mt-16 pt-6 pb-2 border-t border-white/15 bg-stone-950/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Stat 1: Installs */}
            <div className="flex items-center gap-3.5 md:border-r border-white/10 pr-4">
              <Hammer className="w-5 h-5 text-[#48a24c] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline">
                  1,200<span className="text-[#48a24c] font-normal ml-0.5">+</span>
                </div>
                <div className="text-[11px] font-semibold text-stone-400 tracking-wider uppercase mt-0.5">
                  Installs Completed
                </div>
              </div>
            </div>

            {/* Stat 2: In Business */}
            <div className="flex items-center gap-3.5 md:border-r border-white/10 pr-4">
              <Calendar className="w-5 h-5 text-[#48a24c] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline">
                  18<span className="text-xs font-normal text-[#48a24c] ml-1">yrs</span>
                </div>
                <div className="text-[11px] font-semibold text-stone-400 tracking-wider uppercase mt-0.5">
                  In Business
                </div>
              </div>
            </div>

            {/* Stat 3: Warranty */}
            <div className="flex items-center gap-3.5 md:border-r border-white/10 pr-4">
              <Shield className="w-5 h-5 text-[#48a24c] shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline">
                  12<span className="text-xs font-normal text-[#48a24c] ml-1">yrs</span>
                </div>
                <div className="text-[11px] font-semibold text-stone-400 tracking-wider uppercase mt-0.5">
                  Workmanship Warranty
                </div>
              </div>
            </div>

            {/* Stat 4: Reviews */}
            <div className="flex items-center gap-3.5">
              <Star className="w-5 h-5 text-[#48a24c] shrink-0 fill-[#48a24c]" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  4.9
                </div>
                <div className="text-[11px] font-semibold text-stone-400 tracking-wider uppercase mt-0.5">
                  Average Review
                </div>
              </div>
            </div>
          </div>

          {/* Muted Disclamer Note */}
          <div className="mt-4 text-[11px] text-stone-500 font-normal">
            Placeholder figures — replace with the company&apos;s real numbers before publishing.
          </div>
        </div>
      </div>
    </section>
  );
}
