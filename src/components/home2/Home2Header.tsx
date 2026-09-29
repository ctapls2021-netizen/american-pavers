'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Layers,
  Sun,
  Waves,
  Leaf,
  Flame,
  Trees,
  ChevronRight,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';

interface Home2HeaderProps {
  onOpenQuote?: () => void;
  basePath?: string;
}

const serviceIcons: Record<string, any> = {
  'driveway-pavers': Layers,
  'patio-pavers': Sun,
  'pool-deck-pavers': Waves,
  'synthetic-turf': Leaf,
  'outdoor-kitchens': Flame,
  'decking-pergolas': Trees,
};

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
  const pathname = usePathname();

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
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMegaOpen((prev) => !prev);
              }}
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

            {megaOpen && (
              <div className="absolute left-0 top-full pt-2 w-[640px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-none shadow-2xl border border-stone-200/90 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {servicesData.map((s) => {
                      const Icon = serviceIcons[s.slug] || Layers;
                      const serviceHref = basePath ? `${basePath}/services/${s.slug}` : `/services/${s.slug}`;
                      const isCurrentService = pathname === `/services/${s.slug}` || pathname === `/v2/services/${s.slug}`;
                      return (
                        <Link
                          key={s.slug}
                          href={serviceHref}
                          onClick={() => setMegaOpen(false)}
                          className={`flex items-center gap-3.5 p-3 rounded-none transition-all group border ${
                            isCurrentService
                              ? 'bg-[#ebf9ee] border-[#4CC66E]/35 shadow-xs'
                              : 'border-transparent hover:border-stone-200/60 hover:bg-stone-50'
                          }`}
                        >
                          <div
                            className={`flex aspect-square size-11 shrink-0 items-center justify-center rounded-none transition-all shadow-xs ${
                              isCurrentService
                                ? 'bg-[#4CC66E] text-white'
                                : 'bg-[#ebf9ee] text-[#4CC66E] group-hover:bg-[#4CC66E] group-hover:text-white'
                            }`}
                          >
                            <Icon className="w-5 h-5 shrink-0" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span
                              className={`text-sm font-bold tracking-tight transition-colors ${
                                isCurrentService ? 'text-[#4CC66E]' : 'text-[#1A292C] group-hover:text-[#4CC66E]'
                              }`}
                            >
                              {s.shortTitle}
                            </span>
                            {s.tagline && (
                              <span className="text-stone-500 text-xs line-clamp-1 mt-0.5 leading-snug">
                                {s.tagline}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between px-3 text-xs">
                    <span className="text-stone-500 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#4CC66E]" />
                      25-Year Transferable Craftsmanship Warranty
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setMegaOpen(false);
                        if (onOpenQuote) {
                          onOpenQuote();
                        } else {
                          const targetId = 'quote-section';
                          const el = document.getElementById(targetId);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="text-[#4CC66E] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Free 3D Design Consultation</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

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
