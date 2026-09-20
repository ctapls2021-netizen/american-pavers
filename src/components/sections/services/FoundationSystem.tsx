'use client';

import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, ChevronRight, HardHat, Compass } from 'lucide-react';

interface FoundationSystemProps {
  onOpenModal?: () => void;
}

const foundationLayers = [
  {
    step: '01',
    title: 'Precision Excavation & Geotextile Stabilization',
    depth: '8" to 12" Below Grade',
    description:
      'We excavate deep into the subgrade, removing unstable native dirt. A heavy-duty woven geotextile barrier is installed to prevent expansive California clay from migrating up into the base, eliminating sinking and rutting.',
    highlights: ['Subgrade laser grading', 'Heavy-duty geotextile membrane', 'Soil stabilization'],
  },
  {
    step: '02',
    title: 'High-Density Crushed Aggregate Road Base',
    depth: '4" to 6" Compacted Base',
    description:
      'Commercial-grade Class II road base is installed in multiple 2-inch lifts. Each lift is hydraulically compacted to 98% Modified Proctor Density using vibratory plate compactors for maximum vehicular load support.',
    highlights: ['98% Proctor compaction', 'Engineered drainage pitch', 'Rated for heavy RVs & trucks'],
  },
  {
    step: '03',
    title: 'Calibrated ASTM-C33 Bedding Sand Course',
    depth: 'Exact 1" Screed Layer',
    description:
      'A uniform 1-inch layer of washed, sharp angular silica sand is screeded across the compacted base. This creates the bed into which the pavers seat during final vibration, locking the vertical friction.',
    highlights: ['Sharp angular sand particles', 'Consistent 1" thickness', 'Eliminates air pockets'],
  },
  {
    step: '04',
    title: '10,000+ PSI Interlocking Concrete Pavers',
    depth: '60mm to 80mm Paver Thickness',
    description:
      'Factory-cured, low-absorption pavers rated at over 10,000 PSI are laid in tight interlocking patterns (such as 45° or 90° herringbone for maximum vehicular shear resistance). Interlock transfers weight laterally.',
    highlights: ['10,000+ PSI compressive strength', 'Zero cracking from ground shift', 'Integral color pigmentation'],
  },
  {
    step: '05',
    title: 'Reinforced Concrete Edge Restraints & Polymeric Lock',
    depth: 'Perimeter Anchoring System',
    description:
      'A continuous reinforced concrete edge beam or heavy-duty structural restraint is poured below grade around the entire perimeter. Joint sand is activated with high-grade polymeric resin, hardening like stone to block weeds and ants.',
    highlights: ['Sub-surface concrete anchor', 'Polymeric sand resin lock', 'Zero weeds or insect erosion'],
  },
];

export default function FoundationSystem({ onOpenModal }: FoundationSystemProps) {
  return (
    <section className="py-20 md:py-28 bg-[#1A292C] text-white overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#019934]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#42e078] block mb-3">
            Engineering Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif-brand">
            The 5-Layer Driveway Foundation System™
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed">
            A driveway paver installation is only as strong as what lies underneath. Our certified ICPI installation methodology guarantees your driveway will never sink, shift, or form wheel ruts.
          </p>
        </div>

        {/* 5-Layer Visual Timeline Grid */}
        <div className="space-y-6">
          {foundationLayers.map((layer, index) => (
            <div
              key={layer.step}
              className="group relative bg-white/[0.03] border border-white/10 hover:border-[#019934]/50 transition-all p-6 sm:p-8 rounded-none flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left: Step number & Title */}
              <div className="flex items-start gap-4 sm:gap-6 lg:w-1/3">
                <div className="w-12 h-12 rounded-none bg-gradient-to-br from-[#01802b] to-[#019934] text-white font-black text-lg flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  {layer.step}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#42e078] uppercase tracking-wider block">
                    {layer.depth}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif-brand mt-0.5 leading-snug">
                    {layer.title}
                  </h3>
                </div>
              </div>

              {/* Center: Detailed Description */}
              <div className="lg:w-5/12 text-xs sm:text-sm text-stone-300 leading-relaxed">
                {layer.description}
              </div>

              {/* Right: Technical Highlights */}
              <div className="lg:w-1/4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-2">
                {layer.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-[#42e078] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ICPI Guarantee Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#0c1618] to-[#142326] border border-[#019934]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#019934]/20 border border-[#019934]/40 flex items-center justify-center text-[#42e078] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">
                ICPI Certified Master Installation Crew
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Installed strictly to Interlocking Concrete Pavement Institute specifications with a 25-Year transferable warranty.
              </p>
            </div>
          </div>

          {onOpenModal && (
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto whitespace-nowrap h-12 px-6 flex items-center justify-center gap-2 rounded-none font-bold text-xs uppercase tracking-wider text-white bg-[#019934] hover:bg-[#01802b] transition-all cursor-pointer shadow-md"
            >
              <span>Schedule 3D Engineering Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
