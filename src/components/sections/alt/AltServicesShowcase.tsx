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
    image: '/assets/generated/patio_premium.jpg',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'driveway-pavers',
    title: 'Interlocking Driveways',
    tag: 'Driveways',
    description: 'Engineered for heavy vehicle loads with zero cracking.',
    image: '/assets/generated/driveway_premium.jpg',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'pool-deck-pavers',
    title: 'Pool Deck Remodeling',
    tag: 'Pool Decks',
    description: 'Cool-touch, barefoot-friendly stone surfaces.',
    image: '/assets/generated/pool_premium.jpg',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'synthetic-turf',
    title: 'Luxury Synthetic Turf',
    tag: 'Artificial Turf',
    description: 'Pet-friendly, zero-maintenance lush green lawn.',
    image: '/assets/generated/turf_premium.jpg',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens & BBQs',
    tag: 'Outdoor Living',
    description: 'Custom masonry islands with built-in stainless grills.',
    image: '/assets/generated/kitchen_premium.jpg',
    buttonText: 'Request 3D Plan',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining & Seat Walls',
    tag: 'Hardscape Masonry',
    description: 'Architectural stone walls for slope stability and seating.',
    image: '/assets/generated/pergola_premium.jpg',
    buttonText: 'Request 3D Plan',
  },
];

export default function AltServicesShowcase({ onOpenModal }: AltServicesShowcaseProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF9F6] text-stone-900 scroll-mt-20 border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Kōzen Editorial Minimalism) */}
        <div className="max-w-3xl mb-14 sm:mb-20 text-left">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#019934] block mb-3">
            LOS ANGELES · SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Master Hardscape &amp; Turf Services
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-normal leading-relaxed">
            Commercial-grade foundation engineering, physical stone curation, and photorealistic 3D architectural renders included with every project.
          </p>
        </div>

        {/* Services Grid (Kōzen Collection Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesCatalog.map((service) => (
            <article
              key={service.id}
              onClick={() => onOpenModal(service.title)}
              className="group cursor-pointer flex flex-col justify-between bg-white border border-stone-200/80 hover:border-stone-400 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Architectural Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Top-Left Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-700 bg-white/95 backdrop-blur-sm px-3 py-1 border border-stone-200/80 shadow-xs">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Card Details (Editorial Kōzen Typography) */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1A292C] group-hover:text-[#019934] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Action Link Footer */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#019934] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    {service.buttonText} &rarr;
                  </span>
                  <span className="text-[11px] text-stone-400 font-medium">
                    3D Simulation
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Multi-Service Bundle Banner (Kōzen Architectural Note) */}
        <div className="mt-16 p-8 sm:p-12 bg-[#1A292C] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800 shadow-xl">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] sm:text-xs font-semibold text-[#42e078] uppercase tracking-[0.25em] block mb-2">
              MULTI-SERVICE PACKAGE
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight">
              Need Multiple Services Combined Into One Master Project?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
              Save up to $2,500 when bundling Pavers + Synthetic Turf + Built-In Outdoor Living with a single master crew and lifetime guarantee.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenModal('Full Yard Transformation')}
            className="px-7 py-4 bg-[#019934] hover:bg-[#01802b] active:scale-98 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-lg whitespace-nowrap"
          >
            Claim Multi-Service Discount
          </button>
        </div>
      </div>
    </section>
  );
}
