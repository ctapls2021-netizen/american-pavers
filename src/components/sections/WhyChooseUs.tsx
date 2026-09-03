import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const comparisons = [
    {
      feature: 'Compressive Strength',
      pavers: '8,000 - 10,000+ PSI',
      concrete: '2,500 - 3,500 PSI',
      stamped: '3,000 PSI',
    },
    {
      feature: 'Earthquake & Root Flex',
      pavers: 'Individual joints flex without cracking',
      concrete: 'Rigid slab cracks down the center',
      stamped: 'Surface cracks through the pattern',
    },
    {
      feature: 'Drainage & Water Runoff',
      pavers: 'Permeable joints prevent surface puddling',
      concrete: 'Causes standing water and pooling',
      stamped: 'Slippery and prone to surface standing water',
    },
    {
      feature: 'Repairability & Utility Access',
      pavers: 'Lift pavers, fix pipes/roots, and replace cleanly',
      concrete: 'Must jackhammer and pour an ugly mismatched patch',
      stamped: 'Impossible to color-match new patches',
    },
    {
      feature: 'Workmanship Warranty',
      pavers: '25-Year Transferable Guarantee',
      concrete: '1-Year standard (no crack warranty)',
      stamped: '1-Year standard',
    },
  ];

  return (
    <section className="py-20 bg-stone-900 text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Engineered Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Why Interlocking Pavers Outlast Poured Concrete
          </h2>
          <p className="text-stone-300 text-base mt-3 leading-relaxed">
            Poured concrete is designed to crack eventually. Our interlocking paver systems are engineered to endure generations of vehicle traffic, seismic activity, and harsh weather.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[680px] bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-2xl">
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-stone-800 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-400">
              <div className="col-span-4">Performance Factor</div>
              <div className="col-span-4 text-amber-400 font-extrabold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Interlocking Paver System
              </div>
              <div className="col-span-2 text-stone-400">Poured Concrete</div>
              <div className="col-span-2 text-stone-400">Stamped Concrete</div>
            </div>

            <div className="divide-y divide-stone-800/80">
              {comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 py-4 text-xs sm:text-sm items-center">
                  <div className="col-span-4 font-semibold text-stone-200">
                    {row.feature}
                  </div>
                  <div className="col-span-4 font-bold text-amber-300 flex items-start gap-2 bg-amber-500/5 p-2 rounded-lg border border-amber-500/20">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.pavers}</span>
                  </div>
                  <div className="col-span-2 text-stone-400 flex items-start gap-1.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.concrete}</span>
                  </div>
                  <div className="col-span-2 text-stone-400 flex items-start gap-1.5">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.stamped}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-2 text-stone-300">
                <Shield className="w-4 h-4 text-amber-400" />
                Tested to ASTM C936 and ICPI technical standards.
              </span>
              <span className="text-amber-400 font-semibold">
                Increases Home Resale Value by up to 12%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
