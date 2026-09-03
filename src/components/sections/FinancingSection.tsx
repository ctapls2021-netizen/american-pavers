'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';

interface FinancingSectionProps {
  onOpenModal: (service?: string) => void;
}

export default function FinancingSection({ onOpenModal }: FinancingSectionProps) {
  const [budget, setBudget] = useState(25000);

  // Simplified estimated monthly payment formula (e.g. 84 months at low promo rate)
  const estimatedMonthly = Math.round(budget / 72);

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-950 to-neutral-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Flexible Homeowner Financing
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enjoy Your Dream Patio Today. <br />
              <span className="text-amber-400">Pay Over Time.</span>
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Why wait to transform your outdoor living? We’ve partnered with top national lenders to offer custom financing solutions with quick approvals and zero prepayment penalties.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-stone-200">
                  <strong className="text-white">0% Interest for 18 Months</strong> on approved credit with equal monthly payments.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-stone-200">
                  <strong className="text-white">Low-Rate Long Term Plans</strong> extending up to 120 months for maximum affordability.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-stone-200">
                  <strong className="text-white">Zero Prepayment Penalties:</strong> Pay off your balance anytime without fees.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenModal('Financing Pre-Approval')}
                className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <DollarSign className="w-5 h-5" />
                <span>Check Your Financing Pre-Qualification</span>
              </button>
              <p className="text-[11px] text-stone-400 mt-2 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Soft credit inquiry will not impact your credit score.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Box */}
          <div className="lg:col-span-6">
            <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Estimated Monthly Payment
                  </h3>
                  <p className="text-xs text-stone-400">
                    Based on standard low-rate promotional plans
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">
                    ${estimatedMonthly}
                    <span className="text-xs font-normal text-stone-400">/mo*</span>
                  </div>
                </div>
              </div>

              {/* Range Slider */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-300">
                  <span>Project Investment:</span>
                  <span className="text-amber-400 text-base font-extrabold">
                    ${budget.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min={5000}
                  max={60000}
                  step={1000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-[11px] text-stone-500 font-semibold">
                  <span>$5,000 (Small Patio/Turf)</span>
                  <span>$30,000 (Full Living Area)</span>
                  <span>$60,000+ (Estate)</span>
                </div>
              </div>

              {/* Sample inclusions box */}
              <div className="mt-8 bg-stone-950/80 rounded-xl p-4 border border-stone-800 text-xs text-stone-300 space-y-2">
                <div className="font-bold text-stone-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  What’s included in your financing:
                </div>
                <p className="text-[11px] text-stone-400">
                  Complete excavation & demo, aggregate road base, pavers, polymeric sand, border restraints, clean-up, and full 25-year warranty protection.
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onOpenModal('Financing Plan')}
                  className="w-full bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 font-bold text-sm py-3.5 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Apply Estimate to In-Home Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
