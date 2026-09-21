'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyData } from '@/data/company';

interface AltNavbarProps {
  onOpenModal: () => void;
}

export default function AltNavbar({ onOpenModal }: AltNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#transformations' },
    { name: 'How It Works', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Micro-Bar (Trust & Phone) */}
      <div className="bg-stone-950 text-stone-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#42e078]" />
          <span className="font-semibold text-white">Licensed, Bonded &amp; Insured</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline text-stone-400">Class B, C-27 Landscape &amp; C-29 Masonry</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-stone-400">Serving Los Angeles &amp; Orange County</span>
          <a
            href={`tel:${companyData.phone}`}
            className="flex items-center gap-1.5 text-white font-bold hover:text-[#42e078] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#019934]" />
            <span>{companyData.formattedPhone}</span>
          </a>
        </div>
      </div>

      {/* Main Nav Container */}
      <div
        className={`w-full transition-colors duration-300 ${
          isScrolled
            ? 'bg-stone-950/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
            : 'bg-stone-950/80 backdrop-blur-xs py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
              <Image
                src="/assets/logos/logo-icon.svg"
                alt="American Pavers & Turf Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base sm:text-lg tracking-tight text-white leading-tight uppercase font-serif-brand">
                American Pavers
              </span>
              <span className="text-[10px] tracking-widest text-[#42e078] font-bold uppercase">
                &amp; Turf Masters
              </span>
            </div>
          </a>

          {/* Desktop On-Page Anchor Links (No External Page Links) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-stone-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyData.phone}`}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#42e078]" />
              <span>Call Direct</span>
            </a>

            <button
              type="button"
              onClick={onOpenModal}
              className="px-5 py-2.5 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-900/40 transition-colors flex items-center gap-1.5 cursor-pointer rounded-none active:scale-98"
            >
              <span>Get Free 3D Estimate</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-white/10 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-stone-200 hover:text-[#42e078] text-sm font-bold uppercase tracking-wider py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3.5 bg-[#019934] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-none"
              >
                <span>Get Free 3D Estimate</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full py-3 bg-stone-900 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#42e078]" />
                <span>Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
