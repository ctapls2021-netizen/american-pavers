'use client';

import React from 'react';
import Link from 'next/link';
import Home2Header from '@/components/home2/Home2Header';
import Home2Footer from '@/components/home2/Home2Footer';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import Home2FAQ from '@/components/home2/Home2FAQ';
import { Phone, Mail, Clock, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyData } from '@/data/company';

export default function ContactPageClientV2() {
  const handleScrollToQuote = () => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-stone-900 selection:bg-[#019934] selection:text-white">
      {/* Home 2 Header */}
      <Home2Header basePath="/v2" onOpenQuote={handleScrollToQuote} />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* Editorial Hero Banner */}
        <section className="relative w-full h-[45vh] min-h-[350px] max-h-[480px] overflow-hidden bg-[#1A292C] text-white flex flex-col justify-between">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/assets/real/American pavers (14).jpg"
              alt="Contact American Pavers & Turf"
              className="w-full h-full object-cover object-center scale-105 opacity-40"
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
              <span className="font-bold text-[#4CC66E]">Contact Us</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
            <span className="text-[#4CC66E] font-bold text-xs uppercase tracking-[0.22em] mb-2 drop-shadow">
              Complimentary In-Home Consultation
            </span>

            <h1
              className="text-white font-serif font-normal tracking-tight drop-shadow-2xl max-w-4xl"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Let’s Design Your Outdoor Living Project
            </h1>

            <p className="mt-3 text-stone-200 font-normal text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              Schedule your free 3D design consultation with a senior California hardscape architect. No obligation, exact laser measurements, and physical stone samples.
            </p>
          </div>

          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* Quick Contact Bar */}
        <section className="bg-stone-50 border-b border-stone-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#019934]/10 text-[#019934] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Call Us Direct
                  </div>
                  <a
                    href={`tel:${companyData.phone}`}
                    className="font-serif text-lg text-[#1A292C] font-semibold hover:text-[#019934] transition-colors"
                  >
                    {companyData.formattedPhone}
                  </a>
                  <div className="text-xs text-stone-500 mt-0.5">Mon–Sat, 7am–6pm</div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#019934]/10 text-[#019934] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Email Inquiries
                  </div>
                  <a
                    href="mailto:info@americanpaversturf.com"
                    className="font-serif text-base text-[#1A292C] font-semibold hover:text-[#019934] transition-colors break-all"
                  >
                    info@americanpaversturf.com
                  </a>
                  <div className="text-xs text-stone-500 mt-0.5">Responses within 2 hours</div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#019934]/10 text-[#019934] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Service Areas
                  </div>
                  <div className="font-serif text-base text-[#1A292C] font-semibold">
                    Los Angeles &amp; OC
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">All SoCal Counties</div>
                </div>
              </div>

              {/* CSLB License */}
              <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#019934]/10 text-[#019934] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    CSLB License
                  </div>
                  <div className="font-serif text-base text-[#1A292C] font-semibold">
                    Class B &amp; C-27
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">Licensed, Bonded &amp; Insured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Home 2 Split Quote Studio */}
        <Home2QuoteSplit />

        {/* Home 2 FAQs */}
        <Home2FAQ />
      </main>

      {/* Home 2 Footer */}
      <Home2Footer basePath="/v2" />
    </div>
  );
}
