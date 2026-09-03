import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  if (!companyData.promoBanner.enabled) return null;

  return (
    <div className="bg-gradient-to-r from-stone-900 via-neutral-900 to-stone-950 text-white text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-amber-600/90 text-white px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase shrink-0">
            <Sparkles className="w-3 h-3 text-amber-200" />
            {companyData.promoBanner.badge}
          </span>
          <span className="text-stone-200 font-medium truncate">
            {companyData.promoBanner.text}
          </span>
        </div>
        <Link
          href={companyData.promoBanner.linkUrl}
          className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 shrink-0 transition-colors"
        >
          <span>{companyData.promoBanner.linkText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
