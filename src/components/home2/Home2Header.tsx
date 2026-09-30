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
          {/* Home */}
          {basePath ? (
            <Link
              href={basePath}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              Home
            </Link>
          ) : (
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('top');
              }}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              Home
            </a>
          )}

          {/* About Us */}
          {basePath ? (
            <Link
              href={`${basePath}/about`}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              About Us
            </Link>
          ) : (
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about'); // Assuming there's an about section
              }}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              About Us
            </a>
          )}

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
          </div>

          {/* Gallery */}
          {basePath ? (
            <Link
              href={`${basePath}/gallery`}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              Gallery
            </Link>
          ) : (
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('work');
              }}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              Gallery
            </a>
          )}

          {/* Contact Us */}
          {basePath ? (
            <Link
              href={`${basePath}/contact`}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              Contact Us
            </Link>
          ) : (
            <a
              href="#quote-section"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('quote-section');
              }}
              className="flex items-center h-[38px] px-3.5 rounded-[6px] text-sm font-semibold tracking-[0.02em] text-white hover:text-[#4CC66E] hover:bg-white/5 transition-colors"
            >
              Contact Us
            </a>
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

      {/* THE NATIVE HOME 2 MEGA MENU PANEL */}
      {megaOpen && (
        <div 
          className="absolute left-0 right-0 top-full bg-[#1A292C] border-y border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 cursor-default hidden lg:block"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_340px] gap-12 items-start">
              {/* Hardscaping / Pavers */}
              <div>
                <h3 className="m-0 font-serif font-normal text-[26px] leading-snug text-white">Pavers & Hardscaping</h3>
                <ul className="list-none mt-6 p-0 grid grid-cols-1 gap-x-8 gap-y-4">
                  {servicesData.slice(0, 3).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={basePath ? `${basePath}/services/${s.slug}` : `/services/${s.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="text-stone-300 hover:text-[#4CC66E] transition-colors text-base font-medium"
                      >
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Turf & Outdoor */}
              <div>
                <h3 className="m-0 font-serif font-normal text-[26px] leading-snug text-white">Turf & Outdoor Living</h3>
                <ul className="list-none mt-6 p-0 grid grid-cols-2 gap-x-8 gap-y-4">
                  {servicesData.slice(3).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={basePath ? `${basePath}/services/${s.slug}` : `/services/${s.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="text-stone-300 hover:text-[#4CC66E] transition-colors text-base font-medium"
                      >
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Image Block */}
              <Link
                href={basePath ? `${basePath}/gallery` : '#work'}
                onClick={() => setMegaOpen(false)}
                className="relative block aspect-[4/3] overflow-hidden rounded-[6px] no-underline bg-stone-800 group shadow-md"
              >
                <Image
                  src="/assets/real/American pavers (17).jpg"
                  alt="Featured Outdoor Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1A292C]/40 group-hover:bg-[#1A292C]/20 transition-colors" />
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#4CC66E]">
                    Featured
                  </div>
                  <div className="flex items-center gap-2 mt-2 font-serif font-normal text-[22px] leading-snug text-white">
                    Explore outdoor design <ArrowRight className="w-[18px] h-[18px] stroke-[2]" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Utility Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-8 text-sm text-stone-300">
              <a href={`tel:${companyData.phone}`} className="flex items-center gap-2 text-stone-300 hover:text-[#4CC66E] transition-colors">
                <Phone className="w-[18px] h-[18px] stroke-[1.5]" />{companyData.formattedPhone}
              </a>
              <a href={`mailto:${companyData.email}`} className="flex items-center gap-2 text-stone-300 hover:text-[#4CC66E] transition-colors">
                <Mail className="w-[18px] h-[18px] stroke-[1.5]" />{companyData.email}
              </a>
              <span className="flex items-center gap-2 ml-auto">
                <MapPin className="w-[18px] h-[18px] stroke-[1.5]" />{companyData.primaryServiceArea}
              </span>
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
                <Link
                  href={basePath}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Home
                </Link>

                <Link
                  href={`${basePath}/about`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  About Us
                </Link>

                <span className="text-xs font-bold uppercase tracking-widest text-[#4CC66E] py-1 mt-2">
                  Services
                </span>
                <div className="pl-2 grid grid-cols-1 gap-1 pb-3 border-b border-white/10">
                  {servicesData.map((item) => (
                    <Link
                      key={item.slug}
                      href={`${basePath}/services/${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 text-sm font-medium text-stone-300 hover:text-white flex items-center justify-between"
                    >
                      <span>{item.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                    </Link>
                  ))}
                </div>

                <Link
                  href={`${basePath}/gallery`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E] mt-2"
                >
                  Gallery
                </Link>

                <Link
                  href={`${basePath}/contact`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Contact Us
                </Link>
              </>
            ) : (
              <>
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('top');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('about');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  About Us
                </a>

                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('services');
                  }}
                  className="py-2 text-base font-semibold text-[#4CC66E] mt-2"
                >
                  Services
                </a>
                <div className="pl-4 space-y-1.5 pb-2 border-b border-white/10">
                  {servicesData.slice(0, 4).map((link) => (
                    <a
                      key={link.slug}
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('services');
                      }}
                      className="block text-sm text-stone-300 hover:text-white"
                    >
                      {link.shortTitle}
                    </a>
                  ))}
                </div>

                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('work');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E] mt-2"
                >
                  Gallery
                </a>

                <a
                  href="#quote-section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('quote-section');
                  }}
                  className="py-2 text-base font-semibold text-white hover:text-[#4CC66E]"
                >
                  Contact Us
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
