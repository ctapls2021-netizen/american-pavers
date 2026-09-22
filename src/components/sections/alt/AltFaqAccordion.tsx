'use client';

import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { FaqItem, generalFaqs } from '@/data/faqs';
import { companyData } from '@/data/company';

interface AltFaqAccordionProps {
  faqs?: FaqItem[];
  tag?: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function AltFaqAccordion({
  faqs = generalFaqs,
  tag = '06 — FREQUENTLY ASKED QUESTIONS',
  title = 'Looking for Answers?',
  subtitle = 'Everything you need to know about our outdoor living process, 10,000 PSI pavers, California permits, and American Pavers & Turf lifetime warranty.',
  imageSrc = '/assets/faq-pavers.webp',
}: AltFaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-stone-900 border-b border-stone-200/70">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header in Kōzen Editorial Style */}
        <div className="max-w-3xl mb-14 sm:mb-18 text-left">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#019934] block mb-3">
            {tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Architectural Photo + Assistance Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-stone-200/90 bg-stone-100 shadow-md">
              <img
                src={imageSrc}
                alt="American Pavers & Turf Interlocking Paver Installation"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-700 bg-white/95 backdrop-blur-sm px-3 py-1 border border-stone-200 shadow-xs">
                  ICPI Certified
                </span>
              </div>
            </div>

            {/* Direct Expert Assistance Box in Kōzen Mineral Dark */}
            <div className="p-6 sm:p-7 bg-[#1A292C] text-white border border-stone-800">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#42e078] block mb-2">
                EXPERT CONSULTATION
              </span>
              <h3 className="text-xl font-serif font-normal text-white">
                Have a Specific Project Question?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                Speak directly with an ICPI-certified hardscape specialist. We provide engineering guidance and cost estimations with zero sales pressure.
              </p>
              <div className="mt-5 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <a
                  href={`tel:${companyData.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#42e078] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#42e078]" />
                  <span>{companyData.formattedPhone}</span>
                </a>
                <span className="text-[11px] text-stone-400">Mon–Sat 7am–7pm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Serene Accordion List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-stone-200/80 border-y border-stone-200/80">
            {faqs.map((faq, index) => {
              const isOpen = openIdx === index;
              return (
                <div
                  key={index}
                  className="py-5 sm:py-6 cursor-pointer group transition-colors"
                  onClick={() => toggle(index)}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-4 select-none">
                    <span className="text-xs font-serif text-stone-400 mt-1 shrink-0 w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-serif flex-1 transition-colors duration-200 leading-snug ${
                        isOpen
                          ? 'text-[#019934]'
                          : 'text-[#1A292C] group-hover:text-[#019934]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-7 h-7 rounded-none border border-stone-200 flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-[#1A292C] text-white border-[#1A292C]' : 'bg-white text-stone-500 group-hover:border-stone-400'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Smooth Expandable Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out pl-10 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pt-3.5'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
