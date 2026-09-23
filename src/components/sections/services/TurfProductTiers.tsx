'use client';

import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

export interface TurfTier {
  id: string;
  namePrefix: string;
  tierName: string;
  pileHeight: string;
  faceWeight: string;
  usageDescription: string;
  imageSrc: string;
  imageAlt: string;
  highlighted?: boolean;
}

const TURF_TIERS: TurfTier[] = [
  {
    id: 'standard',
    namePrefix: 'SP Turf ®',
    tierName: 'Standard',
    pileHeight: '1-5/8 in.',
    faceWeight: '55 oz.',
    usageDescription: 'Great for light to moderate use',
    imageSrc: '/assets/products/turf-standard.webp',
    imageAlt: 'SP Turf Standard Artificial Grass Sample',
  },
  {
    id: 'pro',
    namePrefix: 'SP Turf ®',
    tierName: 'Pro',
    pileHeight: '1-3/4 in.',
    faceWeight: '70 oz.',
    usageDescription: 'Great for moderate use',
    imageSrc: '/assets/products/turf-pro.webp',
    imageAlt: 'SP Turf Pro Artificial Grass Sample',
    highlighted: true,
  },
  {
    id: 'premium',
    namePrefix: 'SP Turf ®',
    tierName: 'Premium',
    pileHeight: '2 in.',
    faceWeight: '67 oz.',
    usageDescription: 'Great for moderate to heavy use',
    imageSrc: '/assets/products/turf-premium.webp',
    imageAlt: 'SP Turf Premium Artificial Grass Sample',
  },
];

interface TurfProductTiersProps {
  title?: string;
  subtitle?: string;
  onOpenModal?: () => void;
  tiers?: TurfTier[];
}

export default function TurfProductTiers({
  title = 'Options for Every Space and Budget',
  subtitle = 'Engineered with realistic multi-tone fibers, Cool-Blade thermal protection, and 30+ inches/hour drainage for California homes.',
  onOpenModal,
  tiers = TURF_TIERS,
}: TurfProductTiersProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-stone-200 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            Turf Collections &amp; Specifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-normal leading-[1.15] text-[#1A292C] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${
                tier.highlighted
                  ? 'border-[#019934]/40 shadow-[0_12px_36px_rgba(1,153,52,0.12)] ring-1 ring-[#019934]/20'
                  : 'border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)]'
              }`}
            >
              {/* Product Sample Image Header */}
              <div className="relative w-full aspect-[281/144] overflow-hidden bg-stone-100 border-b border-stone-100">
                <Image
                  src={tier.imageSrc}
                  alt={tier.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                {tier.highlighted && (
                  <span className="absolute top-3 right-3 bg-[#019934] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-[26px] text-[#1A292C] font-normal tracking-tight mb-6">
                  <span>{tier.namePrefix} </span>
                  <span className="font-bold">{tier.tierName}</span>
                </h3>

                {/* Specs */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-0.5">
                      Pile Height
                    </span>
                    <span className="text-xl font-bold text-stone-900">
                      {tier.pileHeight}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-0.5">
                      Face Weight
                    </span>
                    <span className="text-xl font-bold text-stone-900">
                      {tier.faceWeight}
                    </span>
                  </div>
                </div>

                {/* Usage Benefit Line */}
                <div className="pt-4 border-t border-stone-100 flex items-center gap-2.5 text-stone-700 text-sm font-medium mt-auto">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#019934] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{tier.usageDescription}</span>
                </div>

                {/* Request Estimate / Sample Button */}
                {onOpenModal && (
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className={`mt-6 w-full py-3 px-4 rounded-[6px] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.highlighted
                        ? 'bg-[#019934] hover:bg-[#017026] text-white shadow-sm'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                    }`}
                  >
                    <span>Request Free Sample</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-500">
            Backed by our <strong>15-Year UV &amp; Wear Warranty</strong> · 100% Lead-Free &amp; Non-Toxic · Qualifies for SoCal Water Rebates.
          </p>
        </div>
      </div>
    </section>
  );
}
