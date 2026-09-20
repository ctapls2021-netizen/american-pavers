'use client';

import React from 'react';
import { Check, X, ShieldAlert, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

export interface ComparisonItem {
  feature: string;
  pavers: string;
  concrete: string;
  winner?: 'pavers' | 'concrete';
  detail: string;
}

interface PaversVsConcreteProps {
  onOpenModal?: () => void;
  overline?: string;
  title?: string;
  subtitle?: string;
  primaryColumnTitle?: string;
  secondaryColumnTitle?: string;
  items?: ComparisonItem[];
  footerText?: string;
  buttonText?: string;
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
  onOpenModal,
  overline = 'Engineering Comparison',
  title = 'Why Interlocking Pavers Outlast Conventional Concrete',
  subtitle = 'Concrete slabs in Southern California are guaranteed to crack due to ground settling and seismic micro-movement. Discover how high-density interlocking pavers eliminate cracking forever.',
  primaryColumnTitle = 'American Pavers & Turf',
  secondaryColumnTitle = 'Poured / Stamped Concrete',
  items = comparisonData,
  footerText = 'Over 1,200+ California Transformations Completed. Backed by our 25-Year transferable structural guarantee.',
  buttonText = 'Calculate Your Project Cost',
}: PaversVsConcreteProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Comparison Table Grid */}
        <div className="bg-white border border-stone-200 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#1A292C] text-white p-4 sm:p-6 items-center">
            <div className="col-span-12 md:col-span-4 font-bold text-sm uppercase tracking-wider text-stone-300">
              Feature / Performance
            </div>
            <div className="col-span-6 md:col-span-4 font-bold text-sm uppercase tracking-wider text-[#42e078] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{primaryColumnTitle}</span>
            </div>
            <div className="col-span-6 md:col-span-4 font-bold text-sm uppercase tracking-wider text-stone-400 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-stone-400" />
              <span>{secondaryColumnTitle}</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-stone-200">
            {items.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 gap-3 items-center hover:bg-stone-50/80 transition-colors"
              >
                {/* Feature Title & Detail */}
                <div className="col-span-12 md:col-span-4 pr-2">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    {row.feature}
                  </h3>
                  <p className="text-stone-500 text-xs mt-1 leading-relaxed hidden sm:block">
                    {row.detail}
                  </p>
                </div>

                {/* Pavers Column */}
                <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-start gap-2.5 bg-[#ebf9ee]/40 p-3 sm:p-2 border border-[#019934]/15 sm:border-0">
                  <div className="w-5 h-5 rounded-full bg-[#019934] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">
                      {row.pavers}
                    </span>
                  </div>
                </div>

                {/* Concrete Column */}
                <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-start gap-2.5 p-3 sm:p-2">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-stone-600 text-xs sm:text-sm">
                      {row.concrete}
                    </span>
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
