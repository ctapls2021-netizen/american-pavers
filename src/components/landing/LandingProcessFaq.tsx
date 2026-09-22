'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Send the form',
    description: 'Name, phone, and roughly where the driveway is. Thirty seconds.',
  },
  {
    number: '02',
    title: 'We visit',
    description: 'We measure, check drainage and grade, and show you material samples on site.',
  },
  {
    number: '03',
    title: 'You get one number',
    description: 'A fixed written price with the base work itemised. It does not move.',
  },
];

const FAQS = [
  {
    question: 'Is the estimate really free?',
    answer: 'Yes. We measure, quote, and leave. There is no charge and zero sales obligation.',
  },
  {
    question: 'How soon can you start?',
    answer: 'We are currently booking installs about two to three weeks out. Priority scheduling is available for emergency drainage or pending property sales.',
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes, we provide flexible financing options with 0% interest promotional periods and low monthly payment plans for qualified California homeowners.',
  },
];

export default function LandingProcessFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Three steps to a fixed price.
          </h2>
        </div>

        {/* 3 Step Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-5 p-5 sm:p-6 rounded-lg bg-stone-50 border border-stone-200/80"
            >
              <div className="w-12 h-12 rounded bg-[#1A292C] text-white flex items-center justify-center font-bold text-lg shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A292C]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-stone-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-stone-200">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A292C] mb-6 text-center sm:text-left">
            Frequently Asked Questions
          </h3>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left transition-colors cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#1A292C] group-hover:text-[#019934] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
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
                    <div className="mt-3 pr-8">
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
