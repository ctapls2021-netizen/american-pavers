import React from 'react';
import { companyData } from '@/data/company';
import { ShieldCheck, Award, Star, Clock, CheckCircle } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: Clock,
      value: `${companyData.yearsInBusiness}+ Years`,
      label: 'Of Hardscape Craftsmanship',
    },
    {
      icon: Award,
      value: `${companyData.projectsCompleted.toLocaleString()}+`,
      label: 'Homeowners Transformed',
    },
    {
      icon: Star,
      value: `${companyData.averageRating} ★★★★★`,
      label: `Across ${companyData.reviewCount.toLocaleString()}+ Reviews`,
    },
    {
      icon: ShieldCheck,
      value: '25-Year Guarantee',
      label: 'Transferable Workmanship',
    },
  ];

  return (
    <section className="bg-stone-900 text-white border-y border-stone-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs text-stone-400 mt-0.5 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-stone-400">
          <span className="flex items-center gap-1.5 text-stone-300">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            CSLB Licensed & Fully Insured
          </span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            ICPI Certified Paver Installers
          </span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            BBB Accredited (A+ Rating)
          </span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            0% Interest Promotional Financing
          </span>
        </div>
      </div>
    </section>
  );
}
