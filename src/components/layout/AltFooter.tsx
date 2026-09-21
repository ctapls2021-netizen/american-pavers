'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock, ShieldCheck, MapPin, ChevronRight, Award } from 'lucide-react';
import { companyData } from '@/data/company';

interface AltFooterProps {
  onOpenModal: () => void;
}

export default function AltFooter({ onOpenModal }: AltFooterProps) {
  const serviceList = [
    'Interlocking Driveway Pavers',
    'Custom Backyard Patio Pavers',
    'Pool Deck Coping & Resurfacing',
    'Antimicrobial Synthetic Turf',
    'Outdoor Kitchens & BBQ Islands',
    'Structural Retaining & Seat Walls',
    'Fire Pits & Custom Pergolas',
    'Commercial Grade Drainage Systems',
  ];

  const serviceAreas = [
    'Los Angeles, CA',
    'Pasadena, CA',
    'Newport Beach, CA',
    'Irvine, CA',
    'Glendale, CA',
    'Burbank, CA',
    'Beverly Hills, CA',
    'Santa Monica, CA',
    'Orange County, CA',
    'San Fernando Valley, CA',
  ];

  return (
    <footer className="bg-stone-950 text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/assets/logos/logo-icon.svg"
                  alt="American Pavers & Turf"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white uppercase font-serif-brand">
                  American Pavers
                </span>
                <span className="text-[10px] tracking-widest text-[#42e078] font-bold uppercase">
                  &amp; Turf Masters
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6">
              Premier California contractor specializing in custom interlocking paving stones, luxury synthetic turf, and complete outdoor living transformations. Built on 28+ years of engineering excellence and backed by a 25-Year Master Workmanship Warranty.
            </p>

            <div className="p-3.5 bg-stone-900 border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#019934] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-300">
                <span className="font-bold text-white block">California Licensed Contractor</span>
                <span>Class B General Building, C-27 Landscaping &amp; C-29 Masonry. Fully Bonded &amp; Insured.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Specialties (3 cols) — Pure informative text (no subpage links) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-[#42e078] uppercase tracking-widest mb-4">
              Core Specialties
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              {serviceList.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#019934] rounded-full shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas (2 cols) — Pure informative text */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-[#42e078] uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {serviceAreas.map((area, i) => (
                <li key={i} className="text-stone-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Consultation & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-[#42e078] uppercase tracking-widest mb-4">
              Free 3D Estimate
            </h3>
            <p className="text-xs text-stone-300 mb-4">
              Schedule your complimentary in-home design session with digital laser measurement and exact cost breakdown.
            </p>

            <button
              type="button"
              onClick={onOpenModal}
              className="w-full py-3 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer rounded-none mb-4"
            >
              <span>Book 3D Design Session</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="space-y-2 text-xs text-stone-400">
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#019934]" />
                <span className="font-bold text-white">{companyData.formattedPhone}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#019934]" />
                <span>{companyData.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All Rights Reserved. CA CSLB Licensed Contractor.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>ICPI Certified Master Paver Installer</span>
            <span>•</span>
            <span className="text-[#019934] font-semibold">25-Year Workmanship Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
