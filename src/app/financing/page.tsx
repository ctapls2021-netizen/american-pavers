'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FinancingSection from '@/components/sections/FinancingSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { companyData } from '@/data/company';
import { ShieldCheck, CheckCircle2, DollarSign, Calendar, Zap, CreditCard, ChevronRight } from 'lucide-react';

export default function FinancingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const financingFaqs = [
    {
      category: 'Financing',
      question: 'How do I qualify for the 0% promotional financing?',
      answer: 'Qualification is quick and straightforward. You can submit a pre-qualification request online or during your in-home 3D consultation. Most decisions take less than 60 seconds and do not affect your credit score for initial pre-approval.',
    },
    {
      category: 'Financing',
      question: 'Are there any hidden application fees or early payoff penalties?',
      answer: 'None whatsoever. All of our loan options feature zero prepayment penalties, meaning you can pay down or pay off the balance anytime without fees.',
    },
    {
      category: 'Financing',
      question: 'Can I combine promotional financing with the $2,500 rebate?',
      answer: 'Yes! During our current seasonal promotion, qualified projects can combine promotional financing plans with instant manufacturer rebates.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-stone-950 text-white py-16 lg:py-24 text-center border-b border-stone-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#42e078] block">
              Transparent Financing Plans
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Flexible Payment Options for Your Outdoor Renovation
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
              Transform your driveway, patio, or pool deck now with low monthly payments and promotional 0% interest terms.
            </p>
          </div>
        </section>

        {/* 3 Core Financing Plans */}
        <section className="py-16 bg-white text-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-[#019934] transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ebf9ee] text-[#019934] flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    0% APR for 18 Months
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Equal monthly payments with zero interest when paid in full within the 18-month promotional period.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-stone-200 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#019934]" />
                      Zero interest for 1.5 years
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#019934]" />
                      Quick 60-second digital approval
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="mt-6 w-full bg-[#1A292C] hover:bg-[#019934] text-white font-bold text-sm py-3 rounded-none transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Apply for 0% Promo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Option 2: Featured Plan */}
              <div className="bg-[#ebf9ee]/70 rounded-2xl p-8 border-2 border-[#019934] shadow-lg flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#019934] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-none shadow-sm">
                  Most Popular Choice
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-none bg-[#019934] text-white flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Low Monthly Budget Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Payments as low as <strong className="text-stone-900">$149/month</strong>. Spread payments over up to 84 to 120 months for ultimate cash flow flexibility.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-[#019934]/30 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#019934]" />
                      Lowest possible monthly obligation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#019934]" />
                      Zero prepayment penalties anytime
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="mt-6 w-full bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm py-3 rounded-none shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Calculate My Low Monthly Plan</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Option 3 */}
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-[#019934] transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-none bg-[#ebf9ee] text-[#019934] flex items-center justify-center">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Deferred Payment Option
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600">
                    No payments and no interest for up to 12 full months. Install your dream patio now, pay nothing until next year.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-stone-200 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#019934]" />
                      $0 down payment required
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#019934]" />
                      Start enjoying your patio this weekend
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="mt-6 w-full bg-[#1A292C] hover:bg-[#019934] text-white font-bold text-sm py-3 rounded-none transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Check Deferred Eligibility</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Calculator Section */}
        <FinancingSection onOpenModal={() => setModalOpen(true)} />

        {/* FAQs */}
        <FaqAccordion
          faqs={financingFaqs}
          title="Financing FAQs"
          subtitle="Simple, direct answers regarding loans, interest, and credit requirements."
        />

        <BottomCtaBanner onOpenModal={() => setModalOpen(true)} />
      </main>

      <Footer />

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Financing Consultation"
      />
    </div>
  );
}
