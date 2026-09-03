'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-[37px] z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center text-white shadow-md group-hover:bg-amber-700 transition-colors">
              <Layers className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-extrabold text-xl tracking-tight text-stone-900 leading-none">
                {companyData.name.split(' ')[0]} <span className="text-amber-700 font-semibold">{companyData.name.split(' ').slice(1).join(' ')}</span>
              </div>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold mt-0.5">
                Luxury Outdoor Living Systems
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-stone-700 hover:text-amber-800 transition-colors rounded-md"
              >
                <span>Products & Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full pt-2 w-[540px] z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-stone-200/90 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="p-2.5 rounded-lg hover:bg-stone-50 transition-colors group flex flex-col"
                      >
                        <div className="font-semibold text-sm text-stone-900 group-hover:text-amber-700 flex items-center justify-between">
                          <span>{s.shortTitle}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-amber-600" />
                        </div>
                        <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                          {s.tagline}
                        </p>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2 mt-1 border-t border-stone-100 flex items-center justify-between px-2 text-xs text-stone-500">
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <ShieldCheck className="w-4 h-4" /> 25-Year Master Workmanship Warranty Included
                      </span>
                      <Link href="/services/driveway-pavers" className="font-semibold text-amber-700 hover:underline">
                        View All Solutions →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-stone-700 hover:text-amber-800 transition-colors rounded-md"
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {locationsOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-stone-200/90 p-3 flex flex-col gap-1">
                    {locationsData.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="px-3 py-2 rounded-lg hover:bg-stone-50 text-sm font-medium text-stone-800 hover:text-amber-700 flex items-center justify-between transition-colors"
                      >
                        <span>{loc.name}, {loc.stateCode}</span>
                        <span className="text-[11px] text-stone-400 font-normal">
                          {loc.projectsCompleted.toLocaleString()}+ jobs
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/financing"
              className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-amber-800 transition-colors rounded-md"
            >
              0% Financing
            </Link>

            <Link
              href="/gallery"
              className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-amber-800 transition-colors rounded-md"
            >
              Before & After
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2 text-stone-900 hover:text-amber-800 transition-colors py-1 font-bold text-sm tracking-wide"
            >
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold text-stone-500">Talk To A Designer</div>
                <div className="text-sm font-extrabold text-stone-900 leading-none">{companyData.formattedPhone}</div>
              </div>
            </a>

            <button
              type="button"
              onClick={onOpenModal}
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Free 3D Design Estimate</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${companyData.phone}`}
              className="p-2.5 rounded-lg bg-stone-100 text-stone-900 active:bg-stone-200"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 text-amber-800" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-800 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-stone-400 tracking-wider px-2 py-1">
              Products & Services
            </div>
            {servicesData.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-stone-800 hover:bg-stone-50"
              >
                {s.title}
              </Link>
            ))}
          </div>

          <div className="space-y-1 pt-2 border-t border-stone-100">
            <div className="text-xs uppercase font-bold text-stone-400 tracking-wider px-2 py-1">
              Service Areas
            </div>
            <div className="grid grid-cols-2 gap-1">
              {locationsData.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 text-xs text-stone-700 hover:text-amber-700 font-medium"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <Link
              href="/financing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800"
            >
              0% Financing Options
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800"
            >
              Before & After Gallery
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              className="w-full bg-amber-700 text-white font-bold text-sm py-3.5 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Get Free 3D Estimate</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
