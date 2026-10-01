'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';
import { companyData } from '@/data/company';

export interface FAQItem {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
  category?: string;
}

export interface Home2FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  tag?: string;
  className?: string;
}

const DEFAULT_FAQS = [
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

const headerVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home2FAQ({
  faqs,
  title = 'Before you call.',
  subtitle,
  tag = 'QUESTIONS',
  className = '',
}: Home2FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const displayFaqs =
    faqs && faqs.length > 0
      ? faqs.map((f) => ({
          q: f.q || f.question || '',
          a: f.a || f.answer || '',
        }))
      : DEFAULT_FAQS;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className={`py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200 scroll-mt-20 w-full max-w-full overflow-hidden ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            {tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3.5 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>
          )}

          <a
            href={`tel:${companyData.phone}`}
            className="inline-flex items-center gap-2 mt-4 text-sm sm:text-base font-semibold text-[#019934] hover:text-[#017026] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#019934]" />
            <span>Still unsure? Call {companyData.formattedPhone} and ask.</span>
          </a>
        </motion.div>

        {/* Animated FAQ Accordion List */}
        <motion.div 
          className="divide-y divide-stone-200 border-y border-stone-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div key={idx} variants={itemVariants} className="py-5 sm:py-6">
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
                  <motion.div 
                    className="mt-3.5 pr-8"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
