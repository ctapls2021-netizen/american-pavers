'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { companyData } from '@/data/company';

interface Home2HeaderProps {
  onOpenQuote?: () => void;
  basePath?: string;
}

const SERVICES_CATALOG = [
  { name: 'Driveway Pavers', slug: 'driveway-pavers', category: 'pavers' },
  { name: 'Patio Pavers', slug: 'patio-pavers', category: 'pavers' },
  { name: 'Pool Deck Pavers', slug: 'pool-deck-pavers', category: 'pavers' },
  { name: 'Synthetic Turf', slug: 'synthetic-turf', category: 'turf' },
  { name: 'Outdoor Kitchens', slug: 'outdoor-kitchens', category: 'turf' },
  { name: 'Decks & Pergolas', slug: 'decking-pergolas', category: 'pavers' },
];

export default function Home2Header({ onOpenQuote, basePath }: Home2HeaderProps) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    setMegaOpen(false);
    setMobileMenuOpen(false);
    const targetId = id.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    setMegaOpen(false);
    setMobileMenuOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      scrollTo('quote-section');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1A292C] text-white border-b border-white/10 shadow-md">
      {/* Top Utility Bar (Black 20% overlay, 35px height) */}
      <div className="bg-black/20 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[34px] flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.06em] uppercase text-stone-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4CC66E] stroke-[1.75]" />
            <span>Licensed, bonded &amp; insured</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-[0.06em] uppercase text-stone-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4CC66E] stroke-[1.75]" />
            <span>12-year installation warranty</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (72px mobile, 84px desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] sm:h-[84px] flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo (Horizontal White) */}
        {basePath ? (
          <Link
            href={basePath}
            className="relative w-36 sm:w-56 h-[32px] sm:h-[42px] shrink-0 flex items-center"
          >
            <Image
              src="/assets/brand/logo-horizontal-white.png"
              alt="American Pavers & Turf"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        ) : (
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('top');
            }}
            className="relative w-36 sm:w-56 h-[32px] sm:h-[42px] shrink-0 flex items-center"
          >
            <Image
              src="/assets/brand/logo-horizontal-white.png"
              alt="American Pavers & Turf"
              fill
              className="object-contain object-left"
              priority
            />
          </a>
        )}

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Services with Mega Menu */}
          <button
            type="button"
            onClick={() => setMegaOpen(!megaOpen)}
            className={`flex items-center gap-1.5 h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] transition-colors cursor-pointer ${
              megaOpen
                ? 'bg-white/10 text-[#4CC66E]'
                : 'text-white hover:text-[#4CC66E] hover:bg-white/5'
            }`}
          >
            <span>Services</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2] ${
                megaOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {basePath ? (
            <>
              <Link
                href={`${basePath}/gallery`}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                Our work
              </Link>
              <Link
                href={`${basePath}#process`}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                Process
              </Link>
              <Link
                href={`${basePath}/about`}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                About Us
              </Link>
              <Link
                href={`${basePath}/contact`}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                Contact
              </Link>
            </>
          ) : (
            <>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('work');
                }}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                Our work
              </a>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('process');
                }}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                Process
              </a>
              <a
                href="#quote-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('quote-section');
                }}
                className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
              >
                Contact
              </a>
            </>
          )}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Direct Phone Link */}
          <a
            href={`tel:${companyData.phone}`}
            className="hidden sm:flex items-center gap-2 text-white hover:text-[#4CC66E] text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 stroke-[1.75]" />
            <span>{companyData.formattedPhone}</span>
          </a>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={handleQuoteClick}
            className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#019934] hover:bg-[#017026] text-white text-xs sm:text-sm font-semibold rounded-[6px] shadow-sm transition-colors cursor-pointer active:scale-98 whitespace-nowrap"
          >
            Get a free quote
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#4CC66E] rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay (Services Dropdown) */}
      {megaOpen && (
        <div className="hidden lg:block absolute left-0 right-0 top-[100%] bg-[#1A292C] border-t border-b border-white/10 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-12 gap-10 items-start">
              {/* Group 1: Pavers */}
              <div className="col-span-4">
                <h3 className="font-serif text-xl text-white font-normal mb-5">
                  Pavers
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Driveway Pavers', slug: 'driveway-pavers' },
                    { name: 'Patio Pavers', slug: 'patio-pavers' },
                    { name: 'Pool Deck Pavers', slug: 'pool-deck-pavers' },
                    { name: 'Decks & Pergolas', slug: 'decking-pergolas' },
                  ].map((item) => (
                    <li key={item.slug}>
                      {basePath ? (
                        <Link
                          href={`${basePath}/services/${item.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="text-stone-300 hover:text-[#4CC66E] text-base transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href="#services"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo('services');
                          }}
                          className="text-stone-300 hover:text-[#4CC66E] text-base transition-colors"
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 2: Turf & Outdoor Living */}
              <div className="col-span-4">
                <h3 className="font-serif text-xl text-white font-normal mb-5">
                  Turf &amp; Outdoor Living
                </h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    { name: 'Synthetic Turf', slug: 'synthetic-turf' },
                    { name: 'Outdoor Kitchens', slug: 'outdoor-kitchens' },
                    { name: 'Front Lawns', slug: 'synthetic-turf' },
                    { name: 'Putting Greens', slug: 'synthetic-turf' },
                    { name: 'Pet Turf', slug: 'synthetic-turf' },
                    { name: 'Drainage & Grading', slug: 'driveway-pavers' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      {basePath ? (
                        <Link
                          href={`${basePath}/services/${item.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="text-stone-300 hover:text-[#4CC66E] text-base transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href="#services"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo('services');
                          }}
                          className="text-stone-300 hover:text-[#4CC66E] text-base transition-colors"
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 3: Featured Card */}
              <div className="col-span-4">
                {basePath ? (
                  <Link
                    href={`${basePath}/gallery`}
                    onClick={() => setMegaOpen(false)}
                    className="group relative block aspect-[4/3] rounded-[6px] overflow-hidden bg-stone-800 shadow-md border border-white/10"
                  >
                    <Image
                      src="/assets/brand/photo-bluestone-slabs.png"
                      alt="Featured turf & outdoor design"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/90 via-[#0E1719]/40 to-transparent" />
                    <div className="absolute left-5 right-5 bottom-5">
                      <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#4CC66E] block mb-1">
                        Featured Portfolio
                      </span>
                      <div className="flex items-center gap-2 font-serif text-lg text-white">
                        <span>Explore full project gallery</span>
                        <ArrowRight className="w-4 h-4 text-[#4CC66E] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('services');
                    }}
                    className="group relative block aspect-[4/3] rounded-[6px] overflow-hidden bg-stone-800 shadow-md border border-white/10"
                  >
                    <Image
                      src="/assets/brand/photo-bluestone-slabs.png"
                      alt="Featured turf & outdoor design"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/90 via-[#0E1719]/40 to-transparent" />
                    <div className="absolute left-5 right-5 bottom-5">
                      <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#4CC66E] block mb-1">
                        Featured
                      </span>
                      <div className="flex items-center gap-2 font-serif text-lg text-white">
                        <span>Explore turf &amp; outdoor design</span>
                        <ArrowRight className="w-4 h-4 text-[#4CC66E] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Info Strip inside Mega Menu */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-sm text-stone-300">
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4CC66E]" />
                <span>{companyData.formattedPhone}</span>
              </a>

              <a
                href="mailto:info@americanpaversturf.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#4CC66E]" />
                <span>info@americanpaversturf.com</span>
              </a>

              <div className="flex items-center gap-2 ml-auto">
                <MapPin className="w-4 h-4 text-[#4CC66E]" />
                <span>Serving Los Angeles County</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A292C] border-t border-white/10 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {basePath ? (
              <>
                <span className="text-xs font-bold uppercase tracking-widest text-[#4CC66E] py-1">
                  Services
                </span>
                <div className="pl-2 grid grid-cols-1 gap-1 pb-3 border-b border-white/10">
                  {SERVICES_CATALOG.map((item) => (
                    <Link
                      key={item.slug}
                      href={`${basePath}/services/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 text-sm font-medium text-stone-300 hover:text-white flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </Link>
                  ))}
                </div>

                <Link
                  href={`${basePath}/gallery`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Our work
                </Link>

                <Link
                  href={`${basePath}#process`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Process
                </Link>

                <Link
                  href={`${basePath}/about`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  About Us
                </Link>

                <Link
                  href={`${basePath}/contact`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('services');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Services
                </a>
                <div className="pl-4 space-y-1.5 pb-2">
                  {SERVICES_CATALOG.slice(0, 4).map((link) => (
                    <a
                      key={link.slug}
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('services');
                      }}
                      className="block text-sm text-stone-300 hover:text-white"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('work');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Our work
                </a>

                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('process');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Process
                </a>

                <a
                  href="#quote-section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('quote-section');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Contact
                </a>
              </>
            )}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#4CC66E]" />
              <span>{companyData.formattedPhone}</span>
            </a>
            <button
              type="button"
              onClick={handleQuoteClick}
              className="w-full py-3 bg-[#019934] text-white font-semibold text-sm rounded-[6px] text-center"
            >
              Get a free quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
