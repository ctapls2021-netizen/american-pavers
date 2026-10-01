'use client';

import React from 'react';
import Link from 'next/link';
import Home2Header from '@/components/home2/Home2Header';
import Home2Footer from '@/components/home2/Home2Footer';
import Home2About from '@/components/home2/Home2About';
import Home2Process from '@/components/home2/Home2Process';
import Home2Reviews from '@/components/home2/Home2Reviews';
import Home2FAQ from '@/components/home2/Home2FAQ';
import Home2CTABand from '@/components/home2/Home2CTABand';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';
import { generalFaqs } from '@/data/faqs';

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
        {/* Unified Background Wrapper for Hero & About */}
        <div className="relative w-full">
          {/* Shared Background Image (Worker) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.img
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
              src="/assets/brand/photo-crew-laying-pavers.png"
              alt="American Pavers & Turf crew"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#0E1719]/85" />
          </div>

          {/* Editorial Hero Banner */}
          <section className="relative z-10 w-full h-[50vh] min-h-[380px] max-h-[500px] text-white flex flex-col justify-between">
            {/* Breadcrumbs */}
            <div className="relative z-20 bg-black/30 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
              <div className="max-w-7xl mx-auto flex items-center gap-2">
                <Link href="/v2" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                <span className="font-bold text-[#019934]">About Us</span>
              </div>
            </div>

            {/* Centered Hero Content */}
            <motion.div 
              className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-[#019934] font-bold text-xs uppercase tracking-[0.22em] mb-2 drop-shadow">
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
                  <Phone className="w-4 h-4 text-[#019934]" />
                  <span>Call {companyData.formattedPhone}</span>
                </a>
              </div>
            </motion.div>

            {/* <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" /> */}
          </section>

          {/* 18 Years & 4 Core Values from Home 2 (Transparent Background) */}
          <div className="relative z-10">
            <Home2About transparentBg />
          </div>
        </div>

        {/* Home 2 Free Estimate CTA Band between light sections */}
        <Home2CTABand basePath="/v2" onOpenQuote={handleScrollToQuote} />

        {/* 4 Visits Process Timeline from Home 2 (Light Background) */}
        <Home2Process />

        {/* Customer Reviews from Home 2 */}
        <Home2Reviews />

        {/* Frequently Asked Questions from Home 2 */}
        <Home2FAQ
          faqs={generalFaqs}
          title="Frequently Asked Questions About Us"
          subtitle="Everything you need to know about our outdoor living process, 10,000 PSI pavers, California permits, and American Pavers & Turf 25-year warranty."
        />

        {/* Split Quote Studio connected to /api/lead */}
        <Home2QuoteSplit />
      </main>

      {/* Home 2 Footer */}
      <Home2Footer basePath="/v2" />
    </div>
  );
}
