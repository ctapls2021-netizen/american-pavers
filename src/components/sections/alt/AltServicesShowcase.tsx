'use client';

import React from 'react';
import Image from 'next/image';

interface AltServicesShowcaseProps {
  onOpenModal: (serviceName?: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  buttonText: string;
}

const servicesCatalog: ServiceCardData[] = [
  {
    id: 'patio-pavers',
    title: 'Backyard Patio Pavers',
    tag: 'Patio Pavers',
    description: 'Open-air dining patios and custom fire lounges.',
    image: '/assets/cards/card-patio.webp',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'driveway-pavers',
    title: 'Interlocking Driveways',
    tag: 'Driveways',
    description: 'Engineered for heavy vehicle loads with zero cracking.',
    image: '/assets/cards/card-driveway.webp',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'pool-deck-pavers',
    title: 'Pool Deck Remodeling',
    tag: 'Pool Decks',
    description: 'Cool-touch, barefoot-friendly stone surfaces.',
    image: '/assets/cards/card-pool.webp',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'synthetic-turf',
    title: 'Luxury Synthetic Turf',
    tag: 'Artificial Turf',
    description: 'Pet-friendly, zero-maintenance lush green lawn.',
    image: '/assets/cards/card-turf.webp',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens & BBQs',
    tag: 'Outdoor Living',
    description: 'Custom masonry islands with built-in stainless grills.',
    image: '/assets/cards/card-kitchen.webp',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining & Seat Walls',
    tag: 'Hardscape Masonry',
    description: 'Architectural stone walls for slope stability and seating.',
    image: '/assets/cards/card-deck.webp',
    buttonText: 'Request 3D Plan',
  },
];

export default function AltServicesShowcase({ onOpenModal }: AltServicesShowcaseProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white text-stone-900 scroll-mt-20 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (White background theme) */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#48a24c] block mb-2">
            LOS ANGELES · SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight">
            Master Hardscape &amp; Turf Services
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg font-normal">
            Commercial-grade foundation engineering, physical stone curation, and photorealistic 3D architectural renders included with every project.
          </p>
        </div>

        {/* Services Grid (Full-bleed image cards, no bg/border on subtitle, zero emojis, zero icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesCatalog.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenModal(service.title)}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl cursor-pointer border border-stone-200/70 hover:border-stone-300 transition-all duration-300"
            >
              {/* Full Bleed Photography Background */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for Crisp Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20 group-hover:from-stone-950/95 transition-all duration-300" />

              {/* Top-Left Subtitle (Clean text: NO background, NO border, no icons, no emojis) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {service.tag}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 flex flex-col items-start justify-end">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal max-w-sm">
                  {service.description}
                </p>

                {/* Action Button (Clean button, no emojis, no icons) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(service.title);
                  }}
                  className="mt-4 px-5 py-2.5 bg-white hover:bg-stone-100 active:scale-98 text-stone-900 font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all whitespace-nowrap cursor-pointer"
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Multi-Service Bundle Banner (No emojis, no icons) */}
        <div className="mt-14 p-7 sm:p-9 bg-stone-950 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-semibold text-[#48a24c] uppercase tracking-widest block mb-1">
              MULTI-SERVICE PACKAGE
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-normal text-white">
              Need Multiple Services Combined Into One Master Project?
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Save up to $2,500 when bundling Pavers + Synthetic Turf + Built-In Outdoor Living with a single master crew and lifetime guarantee.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenModal('Full Yard Transformation')}
            className="px-6 py-3.5 bg-[#48a24c] hover:bg-[#3ea748] active:scale-98 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all cursor-pointer shrink-0 shadow-lg whitespace-nowrap"
          >
            Claim Multi-Service Discount
          </button>
        </div>
      </div>
    </section>
  );
}
