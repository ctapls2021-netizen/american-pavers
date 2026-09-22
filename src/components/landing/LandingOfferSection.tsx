import React from 'react';
import Image from 'next/image';
import { Hammer, Layers, Ruler, Droplets, ShieldCheck, Truck, ArrowRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

const SPECS = [
  { icon: Hammer, text: 'Demolition & haul-off' },
  { icon: Layers, text: '6" compacted Class II base' },
  { icon: Ruler, text: 'Screeded bedding course' },
  { icon: Droplets, text: 'Grading & drainage check' },
  { icon: ShieldCheck, text: 'Polymeric sand & re-compaction' },
  { icon: Truck, text: 'Site clean-up' },
];

export default function LandingOfferSection() {
  const scrollToForm = () => {
    const el = document.getElementById('quote-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy, Technical Specs & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
              WHAT THE PRICE INCLUDES
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
              Everything under the pavers.
            </h2>

            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Most quotes you will get leave the base work vague. Ours itemises it, because that is what fails.
            </p>

            {/* 6 Technical Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
              {SPECS.map((spec, idx) => {
                const IconComponent = spec.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#019934]/10 text-[#019934] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#1A292C]">
                      {spec.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#FF6B01] hover:bg-[#E05E00] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Book my free estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="px-6 py-4 bg-stone-100 hover:bg-stone-200 text-[#1A292C] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-stone-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#019934]" />
                <span>{companyData.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Branded Photo Frame with Watermark */}
          <div className="lg:col-span-5 w-full">
            <figure className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-stone-900 shadow-2xl border border-stone-200">
              <Image
                src="/assets/brand/photo-cobble-walkway.png"
                alt="Charcoal cobble, laid on screeded bedding"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Subtle Brand Watermark */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-25">
                <Image
                  src="/assets/brand/logo-symbol-white.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <figcaption className="absolute bottom-5 left-5 right-5 text-left">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#4CC66E] block mb-1">
                  BASE WORK
                </span>
                <span className="text-white text-sm sm:text-base font-semibold block leading-snug">
                  Charcoal cobble, laid on screeded bedding
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
