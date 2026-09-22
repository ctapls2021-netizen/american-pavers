'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

export default function LandingStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('quote-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="sticky bottom-0 z-40 bg-[#1A292C] text-white border-t border-white/15 shadow-[0_-8px_24px_rgba(14,23,25,0.35)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Value Text */}
        <div className="text-xs sm:text-sm text-stone-200 truncate">
          <strong className="text-white font-bold">Free on-site estimate.</strong>{' '}
          <span className="text-stone-400 hidden sm:inline">Booking March installs now.</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={scrollToForm}
            className="px-4 sm:px-5 py-2.5 bg-[#FF6B01] hover:bg-[#E05E00] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get my price</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`tel:${companyData.phone}`}
            className="px-3.5 sm:px-4 py-2.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/20 transition-colors flex items-center gap-1.5"
            aria-label="Call directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#4CC66E]" />
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
