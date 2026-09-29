'use client';

import React from 'react';
import Link from 'next/link';
import Home2Header from '@/components/home2/Home2Header';
import Home2Footer from '@/components/home2/Home2Footer';
import Home2About from '@/components/home2/Home2About';
import Home2Process from '@/components/home2/Home2Process';
import Home2Reviews from '@/components/home2/Home2Reviews';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import { ChevronRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

export default function AboutPageClientV2() {
  const handleScrollToQuote = () => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-stone-900 selection:bg-[#019934] selection:text-white">
      {/* Home 2 Header with /v2 navigation */}
      <Home2Header basePath="/v2" onOpenQuote={handleScrollToQuote} />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* Editorial Hero Banner */}
        <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-[#1A292C] text-white flex flex-col justify-between">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/assets/real/American pavers (17).jpg"
              alt="About American Pavers & Turf"
              className="w-full h-full object-cover object-center scale-105 opacity-50"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1A292C]/80 via-[#1A292C]/50 to-[#1A292C] pointer-events-none z-10" />

          {/* Breadcrumbs */}
          <div className="relative z-20 bg-black/30 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Link href="/v2" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-bold text-[#4CC66E]">About Us</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
            <span className="text-[#4CC66E] font-bold text-xs uppercase tracking-[0.22em] mb-2 drop-shadow">
              28 Years of Hardscape Excellence
            </span>

            <h1
              className="text-white font-serif font-normal tracking-tight drop-shadow-2xl max-w-4xl"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Civil Engineering Precision Meets Master Stone Artistry
            </h1>

            <p className="mt-3 text-stone-200 font-normal text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              Founded on civil engineering standards, American Pavers &amp; Turf replaces cracked, failing concrete with 10,000+ PSI interlocking stone, zero-water synthetic turf, and turnkey outdoor living built for generations.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <button
                onClick={handleScrollToQuote}
                type="button"
                className="w-full sm:w-auto px-7 py-3 rounded-[6px] bg-[#019934] hover:bg-[#017026] text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
              >
                <span>Request Free Consultation</span>
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#4CC66E]" />
                <span>Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </div>

          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* 18 Years & 4 Core Values from Home 2 */}
        <Home2About />

        {/* 4 Visits Process Timeline from Home 2 */}
        <Home2Process />

        {/* Customer Reviews from Home 2 */}
        <Home2Reviews />

        {/* Split Quote Studio connected to /api/lead */}
        <Home2QuoteSplit />
      </main>

      {/* Home 2 Footer */}
      <Home2Footer basePath="/v2" />
    </div>
  );
}
