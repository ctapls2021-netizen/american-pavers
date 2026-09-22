import React from 'react';

interface StatItem {
  value: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '1,200', suffix: '+', label: 'Driveways installed' },
  { value: '7', suffix: ' days', label: 'Typical install' },
  { value: '12', suffix: ' yrs', label: 'Warranty' },
  { value: '0', label: 'Subcontractors' },
];

export default function LandingTrustStrip() {
  return (
    <section className="bg-[#1A292C] text-white border-y border-white/10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center sm:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-none tracking-tight">
                {stat.value}
                {stat.suffix && (
                  <span className="text-xl sm:text-2xl lg:text-3xl text-[#4CC66E] font-sans font-medium ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="mt-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
