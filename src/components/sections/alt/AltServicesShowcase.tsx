'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

interface AltServicesShowcaseProps {
  onOpenModal: (serviceName?: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'all' | 'pavers' | 'turf' | 'living';
  image: string;
  specs: string[];
  badge: string;
}

const servicesCatalog: ServiceCardData[] = [
  {
    id: 'patio-pavers',
    title: 'Backyard Patio Pavers',
    subtitle: 'Private Resort Living & Entertainment',
    description:
      'Elevate your backyard with interlocking pavers designed for open-air dining, fire lounges, and lifelong stability without surface cracking.',
    category: 'pavers',
    image: '/assets/cards/card-patio.webp',
    specs: ['Slip-Resistant Surface', 'Laser-Graded Drainage', 'Zero Weeds & Settling'],
    badge: 'Most Popular',
  },
  {
    id: 'driveway-pavers',
    title: 'Interlocking Driveways',
    subtitle: 'Heavy-Duty Architectural Curb Appeal',
    description:
      'Built to withstand 8,000+ PSI loads without shifting, sinking, or oil staining. Increases immediate home appraisal value significantly.',
    category: 'pavers',
    image: '/assets/cards/card-driveway.webp',
    specs: ['8,000+ PSI Concrete Density', 'Geotextile Base Armor', '25-Yr Workmanship'],
    badge: 'Maximum ROI',
  },
  {
    id: 'pool-deck-pavers',
    title: 'Pool Deck Remodeling',
    subtitle: 'Heat-Reflective & Barefoot Friendly',
    description:
      'Engineered coping and cool-touch paving stones that keep pool decks comfortable in direct California summer sun with natural water dissipation.',
    category: 'pavers',
    image: '/assets/cards/card-pool.webp',
    specs: ['Cool-Touch Technology', 'Precision Coping Edges', 'Salt & Chlorine Proof'],
    badge: 'Cool-Touch Stone',
  },
  {
    id: 'synthetic-turf',
    title: 'Luxury Synthetic Turf',
    subtitle: 'Zero Water, Always Pristine & Lush',
    description:
      'Next-generation non-toxic artificial grass engineered with antimicrobial pet infill, 100% permeable flow-through backing, and year-round green beauty.',
    category: 'turf',
    image: '/assets/cards/card-turf.webp',
    specs: ['Pet Odor Neutralizing', 'Saves 70% Outdoor Water', 'UV Color Lock'],
    badge: 'Zero Maintenance',
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens & BBQ Islands',
    subtitle: 'Custom Stonework & Culinary Design',
    description:
      'Handcrafted culinary islands with built-in stainless gas grills, quartz prep surfaces, draft beer dispensers, and integrated LED task illumination.',
    category: 'living',
    image: '/assets/cards/card-kitchen.webp',
    specs: ['Solid Masonry Framing', 'Granite / Quartz Counters', 'All-Weather Electrical'],
    badge: 'Custom Built',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining & Seat Walls',
    subtitle: 'Structural Terracing & Garden Masonry',
    description:
      'Architectural grade block walls that tame hillside slopes, expand usable square footage, and create elegant built-in perimeter seating.',
    category: 'living',
    image: '/assets/cards/card-deck.webp',
    specs: ['Engineered Hydrostatic Relief', 'Integrated Low-Voltage LED', 'Seismic Grade Tie-Ins'],
    badge: 'Engineered',
  },
];

export default function AltServicesShowcase({ onOpenModal }: AltServicesShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pavers' | 'turf' | 'living'>('all');

  const filtered =
    activeFilter === 'all'
      ? servicesCatalog
      : servicesCatalog.filter((s) => s.category === activeFilter || s.category === 'all');

  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-100/70 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
              Master Hardscape Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
              Comprehensive Outdoor Transformations
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Engineered with commercial-grade foundation standards, physical stone sample selections, and full 3D visual preview.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Services (6)', val: 'all' },
              { label: 'Interlocking Pavers', val: 'pavers' },
              { label: 'Synthetic Turf', val: 'turf' },
              { label: 'Outdoor Living', val: 'living' },
            ].map((tab) => (
              <button
                key={tab.val}
                type="button"
                onClick={() => setActiveFilter(tab.val as any)}
                className={`px-4 py-2 text-xs font-bold tracking-wide uppercase transition-colors cursor-pointer rounded-none border ${
                  activeFilter === tab.val
                    ? 'bg-[#1A292C] text-white border-[#1A292C]'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500 hover:bg-stone-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Self-Contained: No internal links, pure conversion focus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-stone-200/90 hover:border-[#019934]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image with Category Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1">
                  {service.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#019934] uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A292C] group-hover:text-[#019934] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specs & Deliverables List */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-stone-100">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#019934] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Conversion Action — Instant Modal Trigger (No Subpage Nav) */}
                <div className="mt-7 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="text-stone-500 text-[11px] font-semibold">
                    0% Financing Available
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenModal(service.title)}
                    className="px-4 py-2.5 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>Request 3D Plan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#019934]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1A292C]">
                Need Multiple Services Combined Into One Master Project?
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                Save up to $2,500 when bundling Pavers + Synthetic Turf + Built-In Outdoor Living.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenModal('Full Yard Transformation')}
            className="w-full md:w-auto px-6 py-3 bg-[#1A292C] hover:bg-black text-white font-bold text-xs uppercase tracking-wider cursor-pointer shrink-0 transition-colors flex items-center justify-center gap-2"
          >
            <span>Claim Multi-Service Discount</span>
            <ChevronRight className="w-4 h-4 text-[#42e078]" />
          </button>
        </div>
      </div>
    </section>
  );
}
