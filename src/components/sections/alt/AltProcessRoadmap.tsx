'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface AltProcessRoadmapProps {
  onOpenModal: () => void;
}

interface ProcessPhase {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const processPhases: ProcessPhase[] = [
  {
    step: '01',
    title: 'In-Home 3D Design & Precision Laser Scan',
    subtitle: 'Visualize Before You Commit',
    description:
      'A senior hardscaping architect visits your property, assesses grade elevations and water drainage, and generates a realistic 3D architectural rendering of your new yard.',
    image: '/assets/driveway-slide-1.webp',
  },
  {
    step: '02',
    title: 'Physical Stone Curation & City Permitting',
    subtitle: 'Touch the Materials First',
    description:
      'We bring physical interlocking stone pavers and turf swatches right to your home so you can match textures in natural sunlight. We handle all city permits and HOA approvals.',
    image: '/assets/cards/card-patio.webp',
  },
  {
    step: '03',
    title: 'ICPI Master Installation & 25-Yr Warranty',
    subtitle: 'Built to Last Generations',
    description:
      'Certified master craftsmen excavate, compact geotextile aggregate sub-base, precision-lay interlocking stone, and sweep polymeric sand. Complete final walkthrough inspection.',
    image: '/assets/banners/banner-deck.webp',
  },
];

export default function AltProcessRoadmap({ onOpenModal }: AltProcessRoadmapProps) {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white text-stone-900 scroll-mt-20 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
            Architectural Execution Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
            How We Transform Your Property in 3 Simple Steps
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            No guesswork, no sudden price surprises, and no subcontractors. A seamless white-glove process from initial sketch to final warranty certificate.
          </p>
        </div>

        {/* 3-Phase Roadmap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {processPhases.map((phase) => (
            <div
              key={phase.step}
              className="relative bg-stone-50 border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-stone-400 hover:shadow-xl transition-all duration-300 group rounded-none"
            >
              <div>
                {/* Step Top Header (Only the number) */}
                <div className="pb-4 mb-5 border-b border-stone-200">
                  <span className="text-3xl sm:text-4xl font-black text-stone-300 font-mono tracking-tighter group-hover:text-[#019934] transition-colors">
                    {phase.step}
                  </span>
                </div>

                {/* Photo Preview Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden mb-5 bg-stone-200">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-900/15" />
                </div>

                {/* Content */}
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  {phase.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#1A292C] leading-snug">
                  {phase.title}
                </h3>
                <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Action Bar */}
        <div className="mt-14 p-8 sm:p-10 bg-[#1A292C] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold text-[#42e078] uppercase tracking-widest block mb-1">
              Guaranteed Zero-Pressure Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to See Exactly What Your Space Looks Like in 3D?
            </h3>
            <p className="mt-2 text-stone-300 text-sm leading-relaxed">
              Book a free 45-minute in-home consultation. We measure your lot, bring stone swatches, and give you an exact, transparent quote.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="px-8 py-4 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl transition-colors shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap cursor-pointer rounded-none active:scale-98"
          >
            <span className="whitespace-nowrap">Start With Free Phase 1</span>
            <ChevronRight className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
