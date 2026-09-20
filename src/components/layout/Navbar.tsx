'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { cn } from '@/lib/utils';
import {
  Phone,
  ChevronDown,
  ChevronRight,
  Layers,
  Sun,
  Waves,
  Leaf,
  Flame,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Star,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Image as ImageIcon,
  MapPin,
  Trees,
  LucideIcon,
} from 'lucide-react';

interface NavbarProps {
  onOpenModal?: () => void;
}

type NavLinkItem = {
  title: string;
  href: string;
  description?: string;
  icon: LucideIcon;
};

// Services mapped with Lucide icons (exact slug alignment)
const serviceIcons: Record<string, LucideIcon> = {
  'driveway-pavers': Layers,
  'patio-pavers': Sun,
  'pool-deck-pavers': Waves,
  'synthetic-turf': Leaf,
  'outdoor-kitchens': Flame,
  'decking-pergolas': Trees,
};

function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return scrolled;
}

function MenuToggleIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <div className={cn('relative flex items-center justify-center w-5 h-5', className)}>
      <span
        className={cn(
          'absolute h-0.5 w-5 bg-current transition-all duration-300 transform',
          open ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-5 bg-current transition-all duration-200',
          open ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-5 bg-current transition-all duration-300 transform',
          open ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
        )}
      />
    </div>
  );
}

function DropdownListItem({
  title,
  description,
  icon: Icon,
  href,
  isActive = false,
  onClick,
}: NavLinkItem & { isActive?: boolean; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center gap-3.5 p-3 rounded-none transition-all group border',
        isActive
          ? 'bg-[#ebf9ee] border-[#019934]/35 shadow-xs'
          : 'border-transparent hover:border-stone-200/60 hover:bg-stone-50'
      )}
    >
      <div
        className={cn(
          'flex aspect-square size-11 shrink-0 items-center justify-center rounded-none transition-all shadow-xs',
          isActive
            ? 'bg-[#019934] text-white'
            : 'bg-[#ebf9ee] text-[#019934] group-hover:bg-[#019934] group-hover:text-white'
        )}
      >
        <Icon className="size-5 transition-transform group-hover:scale-110" />
      </div>
      <div className="flex flex-col items-start justify-center min-w-0">
        <span
          className={cn(
            'font-bold text-sm leading-tight',
            isActive ? 'text-[#019934]' : 'text-[#1A292C] group-hover:text-[#019934]'
          )}
        >
          {title}
        </span>
        {description && (
          <span className="text-stone-500 text-xs line-clamp-1 mt-0.5 leading-snug">
            {description}
          </span>
        )}
      </div>
    </Link>
  );
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const scrolled = useScroll(15);

  const isHomeActive = pathname === '/';
  const isAboutActive = pathname === '/about';
  const isServicesActive = pathname.startsWith('/services');
  const isGalleryActive = pathname === '/gallery';
  const isContactActive = pathname === '/contact';

  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMobile]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200 border-b',
        scrolled
          ? 'bg-white/95 supports-[backdrop-filter]:bg-white/90 border-stone-200/80 backdrop-blur-md shadow-xs'
          : 'bg-white border-stone-200/70'
      )}
    >
      {/* Container aligned with site maximum width max-w-7xl */}
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 py-2">
            <img
              src="/assets/logos/logo-primary.svg"
              alt="American Pavers & Turf"
              className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-[1.02] duration-150"
            />
          </Link>

          {/* Desktop Navigation Links: Home, About Us, Services, Gallery, Contact Us */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <Link
              href="/"
              className={cn(
                'px-3 py-2 text-sm transition-colors',
                isHomeActive
                  ? 'text-[#019934] font-bold'
                  : 'text-[#1A292C] font-semibold hover:text-[#019934]'
              )}
            >
              Home
            </Link>

            {/* 2. About Us */}
            <Link
              href="/about"
              className={cn(
                'px-3 py-2 text-sm transition-colors',
                isAboutActive
                  ? 'text-[#019934] font-bold'
                  : 'text-[#1A292C] font-semibold hover:text-[#019934]'
              )}
            >
              About Us
            </Link>

            {/* 3. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen((prev) => !prev);
                }}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 text-sm transition-colors cursor-default select-none',
                  isServicesActive || servicesOpen
                    ? 'text-[#019934] font-bold'
                    : 'text-[#1A292C] font-semibold hover:text-[#019934]'
                )}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    isServicesActive || servicesOpen ? 'text-[#019934]' : 'text-stone-500',
                    servicesOpen && 'rotate-180'
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-[640px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-none shadow-2xl border border-stone-200/90 p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {servicesData.map((s) => {
                        const Icon = serviceIcons[s.slug] || Layers;
                        const isCurrentService = pathname === `/services/${s.slug}`;
                        return (
                          <DropdownListItem
                            key={s.slug}
                            title={s.shortTitle}
                            description={s.tagline}
                            icon={Icon}
                            href={`/services/${s.slug}`}
                            isActive={isCurrentService}
                            onClick={() => setServicesOpen(false)}
                          />
                        );
                      })}
                    </div>

                    {/* Dropdown Footer */}
                    <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between px-3 text-xs">
                      <span className="text-stone-500 flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#019934]" />
                        25-Year Transferable Craftsmanship Warranty
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setServicesOpen(false);
                          if (onOpenModal) onOpenModal();
                        }}
                        className="text-[#019934] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Free 3D Design Consultation</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Gallery */}
            <Link
              href="/gallery"
              className={cn(
                'px-3 py-2 text-sm transition-colors',
                isGalleryActive
                  ? 'text-[#019934] font-bold'
                  : 'text-[#1A292C] font-semibold hover:text-[#019934]'
              )}
            >
              Gallery
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact"
              className={cn(
                'px-3 py-2 text-sm transition-colors',
                isContactActive
                  ? 'text-[#019934] font-bold'
                  : 'text-[#1A292C] font-semibold hover:text-[#019934]'
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Actions: Phone Consultation & Primary CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${companyData.phone}`}
            className="flex items-center gap-2.5 text-[#1A292C] hover:text-[#019934] transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-[#019934] text-white group-hover:bg-[#01802b] flex items-center justify-center transition-colors shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                Call Direct
              </div>
              <div className="text-sm font-extrabold text-[#1A292C] group-hover:text-[#019934] leading-tight transition-colors">
                {companyData.formattedPhone}
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={onOpenModal}
            className="bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm px-5 py-2.5 rounded-none shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Free 3D Estimate</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${companyData.phone}`}
            className="p-2.5 rounded-none bg-[#019934] text-white active:bg-[#01802b] transition-colors shadow-xs"
            aria-label="Call Direct"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setOpenMobile(!openMobile)}
            className="p-2.5 rounded-none text-stone-800 hover:bg-stone-100 transition-colors focus:outline-hidden cursor-pointer"
            aria-expanded={openMobile}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <MenuToggleIcon open={openMobile} className="text-[#1A292C]" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {openMobile && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white border-b border-stone-200 max-h-[85vh] overflow-y-auto px-5 py-6 space-y-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Services Category */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#019934] mb-3">
                Products & Services
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {servicesData.map((s) => {
                  const Icon = serviceIcons[s.slug] || Layers;
                  const isCurrentService = pathname === `/services/${s.slug}`;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setOpenMobile(false)}
                      className={cn(
                        'flex items-center gap-3 p-2.5 rounded-none transition-all border',
                        isCurrentService
                          ? 'bg-[#ebf9ee] border-[#019934]/35 text-[#019934] font-bold'
                          : 'border-transparent hover:bg-stone-50 text-stone-800'
                      )}
                    >
                      <div
                        className={cn(
                          'w-8 h-8 rounded-none flex items-center justify-center shrink-0',
                          isCurrentService ? 'bg-[#019934] text-white' : 'bg-[#ebf9ee] text-[#019934]'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{s.shortTitle}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-stone-100">
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                Quick Navigation
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  onClick={() => setOpenMobile(false)}
                  className={cn(
                    'p-2.5 rounded-none font-semibold text-xs transition-colors bg-stone-50',
                    isHomeActive
                      ? 'text-[#019934] font-bold'
                      : 'text-stone-800 hover:text-[#019934]'
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpenMobile(false)}
                  className={cn(
                    'p-2.5 rounded-none font-semibold text-xs transition-colors bg-stone-50',
                    isAboutActive
                      ? 'text-[#019934] font-bold'
                      : 'text-stone-800 hover:text-[#019934]'
                  )}
                >
                  About Us
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setOpenMobile(false)}
                  className={cn(
                    'p-2.5 rounded-none font-semibold text-xs transition-colors bg-stone-50',
                    isGalleryActive
                      ? 'text-[#019934] font-bold'
                      : 'text-stone-800 hover:text-[#019934]'
                  )}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpenMobile(false)}
                  className={cn(
                    'p-2.5 rounded-none font-semibold text-xs transition-colors bg-stone-50',
                    isContactActive
                      ? 'text-[#019934] font-bold'
                      : 'text-stone-800 hover:text-[#019934]'
                  )}
                >
                  Contact Us
                </Link>
                <Link
                  href="/financing"
                  onClick={() => setOpenMobile(false)}
                  className="p-2.5 rounded-none bg-stone-50 font-semibold text-xs text-stone-800 hover:text-[#019934]"
                >
                  0% Financing
                </Link>
                <Link
                  href="/locations/los-angeles"
                  onClick={() => setOpenMobile(false)}
                  className="p-2.5 rounded-none bg-stone-50 font-semibold text-xs text-stone-800 hover:text-[#019934]"
                >
                  Service Areas
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
              <a
                href={`tel:${companyData.phone}`}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-none bg-stone-50 border border-stone-200 text-stone-900 font-bold text-sm hover:bg-[#ebf9ee] hover:text-[#019934] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#019934] text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call {companyData.formattedPhone}</span>
                <ChevronRight className="w-4 h-4 text-stone-400 ml-auto" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setOpenMobile(false);
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Free 3D Estimate</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar, Navbar as Header };
