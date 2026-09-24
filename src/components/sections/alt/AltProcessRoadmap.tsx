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
    image: '/assets/generated/patio_premium.jpg',
  },
  {
    step: '03',
    title: 'ICPI Master Installation & 25-Yr Warranty',
    subtitle: 'Built to Last Generations',
    description:
      'Certified master craftsmen excavate, compact geotextile aggregate sub-base, precision-lay interlocking stone, and sweep polymeric sand. Complete final walkthrough inspection.',
    image: '/assets/generated/pergola_premium.jpg',
  },
];

export default function AltProcessRoadmap({ onOpenModal }: AltProcessRoadmapProps) {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FAF9F6] text-stone-900 scroll-mt-20 border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Kōzen Editorial Minimalism) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#019934] block mb-3">
            ARCHITECTURAL ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            How We Transform Your Property in 3 Simple Steps
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-normal leading-relaxed">
            No guesswork, no sudden price surprises, and no subcontractors. A seamless white-glove process from initial sketch to final warranty certificate.
          </p>
        </div>

        {/* 3-Phase Roadmap Grid (Kōzen Atelier Journey) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processPhases.map((phase) => (
            <div
              key={phase.step}
              className="bg-white border border-stone-200/80 p-7 sm:p-8 flex flex-col justify-between hover:border-stone-400 hover:shadow-xl transition-all duration-500 group"
            >
              <div>
                {/* Step Top Header (Large Serif Numeral) */}
                <div className="pb-4 mb-6 border-b border-stone-100 flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-serif text-stone-300 group-hover:text-[#019934] transition-colors">
                    {phase.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-400">
                    Phase {phase.step}
                  </span>
                </div>

                {/* Photo Preview Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-stone-100 border border-stone-100">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#019934] uppercase tracking-[0.2em] block mb-2">
                  {phase.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#1A292C] font-normal leading-snug">
                  {phase.title}
                </h3>
                <p className="mt-3 text-stone-600 text-sm leading-relaxed font-normal">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Action Bar (Kōzen Luxury Studio Invitation) */}
        <div className="mt-16 p-8 sm:p-12 bg-[#1A292C] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-semibold text-[#42e078] uppercase tracking-[0.25em] block mb-2">
              GUARANTEED ZERO-PRESSURE CONSULTATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight">
              Ready to See Exactly What Your Space Looks Like in 3D?
            </h3>
            <p className="mt-2 text-stone-300 text-sm leading-relaxed font-normal">
              Book a free 45-minute in-home consultation. We measure your lot, bring stone swatches, and give you an exact, transparent quote.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="px-8 py-4 bg-[#019934] hover:bg-[#01802b] active:scale-98 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap flex-nowrap cursor-pointer shadow-lg"
          >
            <span className="whitespace-nowrap">Start With Free Phase 1</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
