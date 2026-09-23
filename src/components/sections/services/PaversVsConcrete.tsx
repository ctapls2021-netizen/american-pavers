'use client';

import React from 'react';
import Image from 'next/image';
import { Check, X, ShieldAlert, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

export interface ComparisonItem {
  feature: string;
  pavers: string;
  concrete: string;
  winner?: 'pavers' | 'concrete';
  detail: string;
}

export interface ComparativeImagesData {
  primaryImage: string;
  primaryLabel: string;
  primaryBadge?: string;
  secondaryImage: string;
  secondaryLabel: string;
  secondaryBadge?: string;
}

interface PaversVsConcreteProps {
  serviceSlug?: string;
  onOpenModal?: () => void;
  overline?: string;
  title?: string;
  subtitle?: string;
  primaryColumnTitle?: string;
  secondaryColumnTitle?: string;
  items?: ComparisonItem[];
  footerText?: string;
  buttonText?: string;
  comparativeImages?: ComparativeImagesData;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Compressive Strength',
    pavers: '10,000+ PSI (High-Density Engineered)',
    concrete: '2,500 – 3,500 PSI (Standard Poured Slab)',
    winner: 'pavers',
    detail: 'Pavers withstand four times the vehicular load of standard concrete without surface spalling.',
  },
  {
    feature: 'Seismic & Ground Settling',
    pavers: 'Flexible interlock shifts seamlessly with zero cracking',
    concrete: 'Rigid slab inevitably cracks as expansive clay moves',
    winner: 'pavers',
    detail: 'Southern California clay soils expand and contract. Pavers disperse pressure across joints instead of fracturing.',
  },
  {
    feature: 'Heavy Vehicle & RV Support',
    pavers: 'Fully rated for heavy trucks, boats, and class-A RVs',
    concrete: 'Prone to cracking under repeated point loads and axle weight',
    winner: 'pavers',
    detail: 'Our 98% Proctor compacted aggregate base prevents tire ruts, depression, and edge failure.',
  },
  {
    feature: 'Repairability & Underground Access',
    pavers: 'Individual stones lift and reinstall invisibly in minutes',
    concrete: 'Requires noisy jackhammers and leaves mismatched ugly patches',
    winner: 'pavers',
    detail: 'If you ever need pipe repair or irrigation work, pavers are lifted and replaced with zero evidence.',
  },
  {
    feature: 'Oil, Fluid & Tire Stain Resistance',
    pavers: 'High-density sealed surface repels fluids and cleans easily',
    concrete: 'Porous surface permanently absorbs oil and fluids',
    winner: 'pavers',
    detail: 'Factory-cured concrete pavers paired with polymeric sand resist vehicle leaks and tire rubber marks.',
  },
  {
    feature: 'Warranty Protection',
    pavers: '25-Year transferable workmanship guarantee',
    concrete: 'Typically 1-year limited warranty (excludes cracking)',
    winner: 'pavers',
    detail: 'Most concrete contractors explicitly exclude cracks from their warranty. We guarantee against structural failure.',
  },
];

export default function PaversVsConcrete({
  serviceSlug,
  onOpenModal,
  overline = 'Engineering Comparison',
  title = 'Why Interlocking Pavers Outlast Conventional Concrete',
  subtitle = 'Concrete slabs in Southern California are guaranteed to crack due to ground settling and seismic micro-movement. Discover how high-density interlocking pavers eliminate cracking forever.',
  primaryColumnTitle = 'American Pavers & Turf',
  secondaryColumnTitle = 'Poured / Stamped Concrete',
  items = comparisonData,
  footerText = 'Over 1,200+ California Transformations Completed. Backed by our 25-Year transferable structural guarantee.',
  buttonText = 'Calculate Your Project Cost',
  comparativeImages,
}: PaversVsConcreteProps) {
  // Smart default comparative images based on section topic
  const defaultImages: ComparativeImagesData = (() => {
    // 1. Direct slug detection if provided
    const slug = (serviceSlug || '').toLowerCase();
    if (slug.includes('turf')) {
      return {
        primaryImage: '/assets/transformations/turf-lawn-after.webp',
        primaryLabel: 'American Drought-Resistant Synthetic Turf',
        primaryBadge: '365 Days Emerald Green · Zero Water',
        secondaryImage: '/assets/transformations/turf-lawn-before.webp',
        secondaryLabel: 'Natural High-Water California Grass',
        secondaryBadge: 'Brown Patches, Mud & High Utility Costs',
      };
    }
    if (slug.includes('patio')) {
      return {
        primaryImage: '/assets/transformations/patio-after.webp',
        primaryLabel: 'Custom Interlocking Patio Pavers & Coping',
        primaryBadge: 'Zero Cracks · 10,000+ PSI Luxury Living',
        secondaryImage: '/assets/transformations/patio-before.webp',
        secondaryLabel: 'Aging Poured Backyard Concrete Slab',
        secondaryBadge: 'Hairline Cracking & Unsealed Concrete',
      };
    }
    if (slug.includes('pool')) {
      return {
        primaryImage: '/assets/transformations/pool-deck-after.webp',
        primaryLabel: 'Slip-Resistant Cool-Touch Pool Pavers & Coping',
        primaryBadge: 'Barefoot Safe · Chlorine & Salt Resistant',
        secondaryImage: '/assets/transformations/pool-deck-before.webp',
        secondaryLabel: 'Conventional Slippery Concrete Pool Deck',
        secondaryBadge: 'Burning Hot in Summer & Jackhammer Repairs',
      };
    }
    if (slug.includes('kitchen')) {
      return {
        primaryImage: '/assets/transformations/fire-pit-after.webp',
        primaryLabel: 'Custom Welded Steel & Natural Masonry Living',
        primaryBadge: '304 Marine Stainless & Fully Permitted Utilities',
        secondaryImage: '/assets/transformations/fire-pit-before.webp',
        secondaryLabel: 'Prefabricated Modular Kit / Unfinished Space',
        secondaryBadge: 'Flimsy Framing, Warping & Fire Code Violations',
      };
    }
    if (slug.includes('deck') || slug.includes('pergola')) {
      return {
        primaryImage: '/assets/transformations/pergola-after.webp',
        primaryLabel: 'Capped Composite Decking & Louvered Pergola',
        primaryBadge: 'Zero Splinters · 25-50 Year Stain Warranty',
        secondaryImage: '/assets/transformations/pergola-before.webp',
        secondaryLabel: 'Weathered Natural Wood Deck & Framing',
        secondaryBadge: 'Splinters, Warping & Annual Restaining',
      };
    }
    if (slug.includes('driveway')) {
      return {
        primaryImage: '/assets/transformations/driveway-after.webp',
        primaryLabel: '10,000+ PSI Interlocking Paver Driveway',
        primaryBadge: '10,000+ PSI · Disperses Ground Settling',
        secondaryImage: '/assets/transformations/driveway-before.webp',
        secondaryLabel: 'Conventional Poured Concrete Driveway Slab',
        secondaryBadge: 'Rigid Surface Prone to Cracking & Staining',
      };
    }

    // 2. Keyword fallback (inspecting title, overline, and secondaryColumnTitle without brand pollution)
    const t = `${title} ${overline} ${secondaryColumnTitle}`.toLowerCase();
    if (t.includes('turf') || t.includes('grass') || t.includes('lawn')) {
      return {
        primaryImage: '/assets/transformations/turf-lawn-after.webp',
        primaryLabel: 'American Drought-Resistant Synthetic Turf',
        primaryBadge: '365 Days Emerald Green · Zero Water',
        secondaryImage: '/assets/transformations/turf-lawn-before.webp',
        secondaryLabel: 'Natural High-Water California Grass',
        secondaryBadge: 'Brown Patches, Mud & High Utility Costs',
      };
    }
    if (t.includes('patio')) {
      return {
        primaryImage: '/assets/transformations/patio-after.webp',
        primaryLabel: 'Custom Interlocking Patio Pavers & Coping',
        primaryBadge: 'Zero Cracks · 10,000+ PSI Luxury Living',
        secondaryImage: '/assets/transformations/patio-before.webp',
        secondaryLabel: 'Aging Poured Backyard Concrete Slab',
        secondaryBadge: 'Hairline Cracking & Unsealed Concrete',
      };
    }
    if (t.includes('pool')) {
      return {
        primaryImage: '/assets/transformations/pool-deck-after.webp',
        primaryLabel: 'Slip-Resistant Cool-Touch Pool Pavers & Coping',
        primaryBadge: 'Barefoot Safe · Chlorine & Salt Resistant',
        secondaryImage: '/assets/transformations/pool-deck-before.webp',
        secondaryLabel: 'Conventional Slippery Concrete Pool Deck',
        secondaryBadge: 'Burning Hot in Summer & Jackhammer Repairs',
      };
    }
    if (t.includes('kitchen')) {
      return {
        primaryImage: '/assets/transformations/fire-pit-after.webp',
        primaryLabel: 'Custom Welded Steel & Natural Masonry Living',
        primaryBadge: '304 Marine Stainless & Fully Permitted Utilities',
        secondaryImage: '/assets/transformations/fire-pit-before.webp',
        secondaryLabel: 'Prefabricated Modular Kit / Unfinished Space',
        secondaryBadge: 'Flimsy Framing, Warping & Fire Code Violations',
      };
    }
    if (t.includes('pergola') || t.includes('deck')) {
      return {
        primaryImage: '/assets/transformations/pergola-after.webp',
        primaryLabel: 'Capped Composite Decking & Louvered Pergola',
        primaryBadge: 'Zero Splinters · 25-50 Year Stain Warranty',
        secondaryImage: '/assets/transformations/pergola-before.webp',
        secondaryLabel: 'Weathered Natural Wood Deck & Framing',
        secondaryBadge: 'Splinters, Warping & Annual Restaining',
      };
    }

    // Default: Driveway / Pavers vs Concrete
    return {
      primaryImage: '/assets/transformations/driveway-after.webp',
      primaryLabel: '10,000+ PSI Interlocking Paver Driveway',
      primaryBadge: '10,000+ PSI · Disperses Ground Settling',
      secondaryImage: '/assets/transformations/driveway-before.webp',
      secondaryLabel: 'Conventional Poured Concrete Driveway Slab',
      secondaryBadge: 'Rigid Surface Prone to Cracking & Staining',
    };
  })();

  const activeImages = comparativeImages || defaultImages;

  return (
    <section id="engineering-comparison" className="py-20 md:py-28 bg-white border-t border-stone-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-3">
            {overline}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
            {title}
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Side-by-Side Comparative Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 lg:mb-12">
          {/* Winner / Primary Card */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#019934] shadow-[0_8px_30px_rgba(1,153,52,0.12)] group bg-stone-900">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={activeImages.primaryImage}
                alt={activeImages.primaryLabel}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="inline-flex items-center gap-1.5 bg-[#019934] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>{activeImages.primaryBadge}</span>
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#42e078] font-bold block mb-1">
                  {primaryColumnTitle}
                </span>
                <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl leading-tight drop-shadow-sm">
                  {activeImages.primaryLabel}
                </h4>
              </div>
            </div>
          </div>

          {/* Alternative / Secondary Card */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-sm group bg-stone-900">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={activeImages.secondaryImage}
                alt={activeImages.secondaryLabel}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="inline-flex items-center gap-1.5 bg-stone-900/90 text-stone-200 text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-stone-600/60 backdrop-blur-sm shadow-md">
                  <X className="w-3.5 h-3.5 text-rose-400 stroke-[2.5]" />
                  <span>{activeImages.secondaryBadge}</span>
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
                  {secondaryColumnTitle}
                </span>
                <h4 className="text-stone-200 font-semibold text-base sm:text-lg lg:text-xl leading-tight drop-shadow-sm">
                  {activeImages.secondaryLabel}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-white border border-stone-200 shadow-sm overflow-hidden rounded-lg">
          {/* 1. Desktop Table Header (>=md) */}
          <div className="hidden md:grid grid-cols-12 bg-[#1A292C] text-white p-5 lg:p-6 items-center">
            <div className="col-span-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-300">
              Feature / Performance
            </div>
            <div className="col-span-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-[#42e078] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{primaryColumnTitle}</span>
            </div>
            <div className="col-span-4 font-bold text-xs sm:text-sm uppercase tracking-wider text-stone-400 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0" />
              <span>{secondaryColumnTitle}</span>
            </div>
          </div>

          {/* 2. Mobile Table Header (<md) */}
          <div className="md:hidden bg-[#1A292C] text-white p-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-2.5">
              Feature / Performance Comparison
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#019934]/20 border border-[#019934]/40 rounded-lg p-2 flex items-center gap-1.5 min-w-0">
                <ShieldCheck className="w-4 h-4 text-[#42e078] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#42e078] leading-tight break-words">
                  {primaryColumnTitle}
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center gap-1.5 min-w-0">
                <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wide text-stone-300 leading-tight break-words">
                  {secondaryColumnTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-stone-200">
            {items.map((row, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 lg:p-6 hover:bg-stone-50/80 transition-colors"
              >
                {/* Mobile Feature Title & Detail (<md) */}
                <div className="mb-3 md:hidden">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    {row.feature}
                  </h3>
                  {row.detail && (
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                      {row.detail}
                    </p>
                  )}
                </div>

                {/* Grid on Desktop (12-cols) vs Mobile (Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
                  {/* Desktop Feature Title & Detail (>=md) */}
                  <div className="hidden md:block md:col-span-4 pr-3">
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                      {row.feature}
                    </h3>
                    {row.detail && (
                      <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                        {row.detail}
                      </p>
                    )}
                  </div>

                  {/* Primary Option Column */}
                  <div className="md:col-span-4 flex items-start gap-2.5 bg-[#ebf9ee]/60 p-3 sm:p-3.5 rounded-lg border border-[#019934]/20 md:border-0 md:bg-transparent md:p-0">
                    <div className="w-5 h-5 rounded-full bg-[#019934] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#017026] block md:hidden mb-0.5">
                        {primaryColumnTitle}
                      </span>
                      <span className="font-bold text-stone-900 text-xs sm:text-sm leading-snug block">
                        {row.pavers}
                      </span>
                    </div>
                  </div>

                  {/* Secondary Option Column */}
                  <div className="md:col-span-4 flex items-start gap-2.5 bg-stone-50 p-3 sm:p-3.5 rounded-lg border border-stone-200/80 md:border-0 md:bg-transparent md:p-0">
                    <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block md:hidden mb-0.5">
                        {secondaryColumnTitle}
                      </span>
                      <span className="text-stone-600 text-xs sm:text-sm leading-snug block">
                        {row.concrete}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-600">
              {footerText}
            </div>
            {onOpenModal && (
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full sm:w-auto px-6 py-3 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{buttonText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
