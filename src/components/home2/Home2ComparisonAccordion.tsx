'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown, ShieldCheck, ChevronRight } from 'lucide-react';
import { ComparisonItem, ComparativeImagesData } from '../sections/services/PaversVsConcrete';

interface Home2ComparisonAccordionProps {
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

export default function Home2ComparisonAccordion({
  serviceSlug,
  onOpenModal,
  overline = 'Engineering Comparison',
  title = 'Why Interlocking Pavers Outlast Conventional Concrete',
  subtitle = 'Concrete slabs in Southern California are guaranteed to crack due to ground settling and seismic micro-movement. Discover how high-density interlocking pavers eliminate cracking forever.',
  primaryColumnTitle = 'American Pavers & Turf',
  secondaryColumnTitle = 'Conventional Concrete',
  items = [],
  footerText = 'Backed by our 25-Year transferable structural guarantee.',
  buttonText = 'Design Your Project',
}: Home2ComparisonAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[#019934] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            {overline}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-[#1A292C] leading-tight mb-5">
            {title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white border transition-all duration-300 ${isOpen ? 'border-[#019934] shadow-md' : 'border-stone-200 hover:border-stone-300 shadow-sm'}`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-serif text-lg sm:text-xl transition-colors ${isOpen ? 'text-[#019934]' : 'text-[#1A292C]'}`}>
                    {item.feature}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#019934]' : ''}`} />
                </button>

                {/* Accordion Body */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-2">
                    <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                      {item.detail}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                      {/* Us */}
                      <div className="flex-1 bg-[#F8FAF8] p-5 border-l-4 border-[#019934]">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#019934] mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          {primaryColumnTitle}
                        </div>
                        <div className="text-stone-900 font-medium text-sm leading-snug">
                          {item.pavers}
                        </div>
                      </div>

                      {/* Them */}
                      <div className="flex-1 bg-stone-50 p-5 border-l-4 border-stone-300">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4" />
                          {secondaryColumnTitle}
                        </div>
                        <div className="text-stone-600 text-sm leading-snug">
                          {item.concrete}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 text-stone-600 text-sm">
            <ShieldCheck className="w-8 h-8 text-[#019934] shrink-0" />
            <p>{footerText}</p>
          </div>
          {onOpenModal && (
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto shrink-0 px-8 py-3.5 bg-[#019934] hover:bg-[#01802b] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{buttonText}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
