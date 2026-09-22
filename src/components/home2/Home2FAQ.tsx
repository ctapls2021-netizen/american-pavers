'use client';

import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { companyData } from '@/data/company';

const FAQS = [
  {
    q: 'How long does a driveway take?',
    a: 'Most driveways are demolished, based and laid in five to seven working days. Weather and permit timing are the usual variables.',
  },
  {
    q: 'Do you subcontract the work?',
    a: 'No. Our own crews handle demolition, base, laying and clean-up. The warranty is ours, so the work is ours.',
  },
  {
    q: 'Is artificial turf safe for dogs?',
    a: 'Yes. Pet-rated blades over a permeable drainage base, with an antimicrobial infill so nothing sits in the surface.',
  },
  {
    q: 'Do you pull permits?',
    a: 'Where the city requires one — retaining walls, certain drainage work — we pull it and schedule the inspection.',
  },
  {
    q: 'What does it cost?',
    a: 'Paver installs typically start around $18 per square foot installed, depending on base condition, material and access. The site visit gives you a fixed number.',
  },
];

export default function Home2FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Before you call.
          </h2>

          <a
            href={`tel:${companyData.phone}`}
            className="inline-flex items-center gap-2 mt-4 text-sm sm:text-base font-semibold text-[#019934] hover:text-[#017026] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#019934]" />
            <span>Still unsure? Call {companyData.formattedPhone} and ask.</span>
          </a>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#1A292C] group-hover:text-[#019934] transition-colors leading-snug">
                    {faq.q}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#019934] border-[#019934] text-white'
                        : 'border-stone-300 text-stone-500 group-hover:border-stone-500'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8">
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
