'use client';

import React, { useState } from 'react';
import { FaqItem, generalFaqs } from '@/data/faqs';

interface FaqAccordionProps {
  faqs?: FaqItem[];
  tag?: string;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function FaqAccordion({
  faqs = generalFaqs,
  tag = "FAQ's",
  title = "Looking for answer?",
  subtitle = "Everything you need to know about our outdoor living process, 10,000 PSI pavers, California permits, and American Pavers & Turf lifetime warranty.",
  imageSrc = "/assets/faq-pavers.webp",
}: FaqAccordionProps) {
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
    <section className="py-20 sm:py-28 bg-white text-stone-900 border-t border-stone-200">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-14">
          {/* Left Column: Paver Project Showcase matching exact height of FAQ */}
          <div className="w-full lg:w-[440px] shrink-0 self-stretch flex">
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-0 overflow-hidden rounded-none shadow-lg border border-stone-200/90 bg-stone-100">
              <img
                src={imageSrc}
                alt="American Pavers & Turf Interlocking Paver Installation"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: FAQ Accordion Content */}
          <div className="flex-1 w-full">
            {/* Overline */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
              {tag}
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1A292C] tracking-tight font-serif-brand mt-1.5 leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-stone-600 mt-2.5 pb-2 leading-relaxed">
              {subtitle}
            </p>

            {/* Accordion Items List */}
            <div className="mt-3 divide-y divide-stone-200 border-t border-stone-200">
              {faqs.map((faq, index) => {
                const isOpen = openIdx === index;
                return (
                  <div
                    key={index}
                    className="py-4 cursor-pointer group transition-colors"
                    onClick={() => toggle(index)}
                  >
                    {/* Question Header */}
                    <div className="flex items-center justify-between gap-4 select-none">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                          isOpen
                            ? 'text-[#019934]'
                            : 'text-stone-900 group-hover:text-[#019934]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`shrink-0 transition-transform duration-300 ease-in-out ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        <path
                          d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                          stroke={isOpen ? '#019934' : '#1A292C'}
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Smooth Expandable Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 pt-3'
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
      </div>
    </section>
  );
}

