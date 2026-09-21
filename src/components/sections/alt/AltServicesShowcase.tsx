'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface AltServicesShowcaseProps {
  onOpenModal: (serviceName?: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  warranty: string;
}

const servicesCatalog: ServiceCardData[] = [
  {
    id: 'patio-pavers',
    title: 'Backyard Patio Pavers',
    tag: 'Patios & Fire Lounges',
    description:
      'Interlocking stone surfaces engineered for open-air dining, fire pits, and lifelong stability without cracking.',
    image: '/assets/cards/card-patio.webp',
    warranty: '25-Year Warranty',
  },
  {
    id: 'driveway-pavers',
    title: 'Interlocking Driveways',
    tag: 'Heavy-Duty Driveways',
    description:
      'Engineered to withstand 8,000+ PSI vehicular loads with compacted base armor to prevent shifting or sinking.',
    image: '/assets/cards/card-driveway.webp',
    warranty: '25-Year Warranty',
  },
  {
    id: 'pool-deck-pavers',
    title: 'Pool Deck Remodeling',
    tag: 'Cool-Touch Pool Decks',
    description:
      'Heat-reflective, barefoot-friendly pavers with rapid water drainage and smooth, salt-resistant safety coping.',
    image: '/assets/cards/card-pool.webp',
    warranty: '25-Year Warranty',
  },
  {
    id: 'synthetic-turf',
    title: 'Luxury Synthetic Turf',
    tag: 'Pet & Family Turf',
    description:
      'Antimicrobial, pet-friendly artificial grass engineered for zero watering, rapid drainage, and lush green all year.',
    image: '/assets/cards/card-turf.webp',
    warranty: '15-Year Turf Warranty',
  },
  {
    id: 'outdoor-kitchens',
    title: 'Outdoor Kitchens & BBQs',
    tag: 'Custom Masonry Living',
    description:
      'Handcrafted culinary islands with built-in stainless grills, quartz prep countertops, and integrated LED task lighting.',
    image: '/assets/cards/card-kitchen.webp',
    warranty: 'Lifetime Craftsmanship',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining & Seat Walls',
    tag: 'Structural Terracing',
    description:
      'Architectural stone masonry engineered for hillside slope stability, expansive terracing, and built-in perimeter seating.',
    image: '/assets/cards/card-deck.webp',
    warranty: '25-Year Warranty',
  },
];

export default function AltServicesShowcase({ onOpenModal }: AltServicesShowcaseProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-100/70 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#019934] block mb-2">
            Master Hardscape Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
            Comprehensive Outdoor Transformations
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Commercial-grade foundation engineering, physical stone curation in sunlight, and photorealistic 3D architectural renders included with every project.
          </p>
        </div>

        {/* Services Grid (Clean, minimalist, zero bullet points, punchy text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesCatalog.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border border-stone-200/90 hover:border-stone-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Photo Header with Floating Pill Tag */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-stone-950/75 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/15">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Card Body — Short concise description, no bullet points */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1A292C] group-hover:text-[#019934] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-stone-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#019934] shrink-0" />
                    <span>{service.warranty}</span>
                  </span>

                  {/* Clean CTA Button — Locked in single line */}
                  <button
                    type="button"
                    onClick={() => onOpenModal(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap flex-nowrap px-4 py-2.5 bg-[#019934] hover:bg-[#01802b] text-white font-medium text-xs uppercase tracking-wider rounded-md shadow-xs transition-all duration-150 cursor-pointer active:scale-98 shrink-0 group/btn"
                  >
                    <span className="whitespace-nowrap">Free Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Multi-Service Bundle Banner */}
        <div className="mt-14 p-7 sm:p-9 bg-[#1A292C] text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#42e078] uppercase tracking-widest block mb-1">
              Multi-Service Package
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Need Multiple Services Combined Into One Master Project?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Save up to $2,500 when bundling Pavers + Synthetic Turf + Built-In Outdoor Living with a single master crew and lifetime guarantee.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenModal('Full Yard Transformation')}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap px-6 py-3.5 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md transition-all cursor-pointer shrink-0 shadow-md active:scale-98"
          >
            <span className="whitespace-nowrap">Claim Multi-Service Discount</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
