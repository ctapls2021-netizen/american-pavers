'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Menu, X, ChevronDown } from 'lucide-react';
import { companyData } from '@/data/company';

interface Home2HeaderProps {
  onOpenQuote?: () => void;
}

export default function Home2Header({ onOpenQuote }: Home2HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      scrollTo('quote-section');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-stone-900 shadow-sm border-b border-stone-200">
      {/* Top Utility Bar (Dark Slate) */}
      <div className="bg-[#1A292C] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-stone-300">
            <span className="font-medium">Serving Los Angeles County — Valley to South Bay</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-stone-200 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#4CC66E]" />
              <span>Licensed, bonded &amp; insured</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#4CC66E]" />
              <span>12-year installation warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="relative w-44 sm:w-52 h-10 shrink-0">
          <Image
            src="/assets/brand/logo-horizontal-dark.png"
            alt="American Pavers & Turf"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Services with Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesDropdown(!servicesDropdown)}
              onMouseEnter={() => setServicesDropdown(true)}
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-[#019934] transition-colors rounded-md cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdown && (
              <div
                onMouseLeave={() => setServicesDropdown(false)}
                className="absolute top-full left-0 w-64 bg-white rounded-md shadow-xl border border-stone-200 py-2 z-50"
              >
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#019934] font-medium"
                >
                  Paver Driveways
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#019934] font-medium"
                >
                  Patios &amp; Pool Decks
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#019934] font-medium"
                >
                  Artificial Turf
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#019934] font-medium"
                >
                  Walkways &amp; Steps
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#019934] font-medium"
                >
                  Retaining Walls
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full text-left px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#019934] font-medium"
                >
                  Drainage &amp; Grading
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-[#019934] transition-colors rounded-md cursor-pointer"
          >
            About us
          </button>

          <button
            type="button"
            onClick={() => scrollTo('process')}
            className="px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-[#019934] transition-colors rounded-md cursor-pointer"
          >
            Process
          </button>

          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-[#019934] transition-colors rounded-md cursor-pointer"
          >
            Our work
          </button>

          <button
            type="button"
            onClick={() => scrollTo('reviews')}
            className="px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-[#019934] transition-colors rounded-md cursor-pointer"
          >
            Reviews
          </button>

          <button
            type="button"
            onClick={() => scrollTo('faq')}
            className="px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-[#019934] transition-colors rounded-md cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Right CTA & Phone */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${companyData.phone}`}
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#1A292C] hover:text-[#019934] transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#019934]" />
            <span>{companyData.formattedPhone}</span>
          </a>

          <button
            type="button"
            onClick={handleQuoteClick}
            className="px-5 py-2.5 bg-[#019934] hover:bg-[#017026] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
          >
            <span>Get a free quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-[#019934] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="w-full text-left py-2.5 px-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="w-full text-left py-2.5 px-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded"
          >
            About us
          </button>
          <button
            type="button"
            onClick={() => scrollTo('process')}
            className="w-full text-left py-2.5 px-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded"
          >
            Process
          </button>
          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="w-full text-left py-2.5 px-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded"
          >
            Our work
          </button>
          <button
            type="button"
            onClick={() => scrollTo('reviews')}
            className="w-full text-left py-2.5 px-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded"
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo('faq')}
            className="w-full text-left py-2.5 px-3 text-base font-semibold text-stone-800 hover:bg-stone-50 rounded"
          >
            FAQ
          </button>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-3">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center justify-center gap-2 py-3 bg-stone-100 text-[#1A292C] font-bold text-sm rounded"
            >
              <Phone className="w-4 h-4 text-[#019934]" />
              <span>{companyData.formattedPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
