'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, XCircle, Plus } from 'lucide-react';
import { ComparisonItem, ComparativeImagesData } from '../sections/services/PaversVsConcrete';

interface Home2ComparisonHotspotsProps {
  serviceSlug?: string;
  onOpenModal?: () => void;
  overline?: string;
  title?: string;
  subtitle?: string;
  primaryColumnTitle?: string;
  secondaryColumnTitle?: string;
  items?: ComparisonItem[];
  footerText?: string;
  buttonText?: string;
  comparativeImages?: ComparativeImagesData;
}

// Hardcoded hotspot coordinates (percentages) for up to 6 items to spread them around the image
const HOTSPOT_POSITIONS = [
  { top: '75%', left: '40%' }, // near bottom center (e.g. slip resistance)
  { top: '55%', left: '75%' }, // mid right (e.g. heat)
  { top: '65%', left: '20%' }, // mid left (e.g. coping)
  { top: '40%', left: '35%' }, // upper left
  { top: '35%', left: '60%' }, // upper right
  { top: '80%', left: '80%' }, // bottom right
];

export default function Home2ComparisonHotspots({
  overline = 'Interactive Comparison',
  title = 'Explore the American Pavers Difference',
  subtitle = 'Tap or hover over the flashing hotspots below to see why high-density pavers outperform conventional concrete in every category.',
  primaryColumnTitle = 'American Pavers',
  secondaryColumnTitle = 'Conventional',
  items = [],
  comparativeImages,
}: Home2ComparisonHotspotsProps) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  // Fallback image if not provided
  const bgImage = comparativeImages?.primaryImage || '/assets/generated/pool_premium.jpg';

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#1A292C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-[#4CC66E] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            {overline}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-white leading-tight mb-5">
            {title}
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Hotspot Image Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <Image
            src={bgImage}
            alt="Interactive comparison"
            fill
            className="object-cover"
          />
          {/* Dark gradient overlay to make hotspots pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Hotspots */}
          {items.slice(0, 6).map((item, idx) => {
            const pos = HOTSPOT_POSITIONS[idx];
            const isActive = activeHotspot === idx;

            return (
              <div
                key={idx}
                className="absolute z-10"
                style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveHotspot(idx)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => setActiveHotspot(isActive ? null : idx)}
              >
                {/* Hotspot Button */}
                <button
                  type="button"
                  className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#4CC66E] scale-110 shadow-[0_0_20px_rgba(76,198,110,0.6)]' : 'bg-white hover:bg-[#4CC66E] hover:scale-110 shadow-lg'
                  }`}
                >
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${isActive ? 'bg-[#4CC66E]' : 'bg-white'}`} style={{ animationDuration: '2s' }} />
                  <Plus className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isActive ? 'text-white rotate-45' : 'text-[#1A292C]'}`} />
                </button>

                {/* Tooltip Card */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-[280px] sm:w-[320px] bg-white rounded-lg shadow-2xl p-5 transition-all duration-300 pointer-events-none origin-bottom ${
                    isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
                  }`}
                >
                  {/* Triangle pointer */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white" />

                  <h4 className="font-serif text-lg text-[#1A292C] font-bold mb-3 leading-snug">
                    {item.feature}
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-bold uppercase text-[#019934] tracking-wider mb-0.5">{primaryColumnTitle}</span>
                        <span className="text-xs text-stone-900 font-medium leading-tight">{item.pavers}</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-stone-100" />
                    
                    <div className="flex gap-2.5 items-start">
                      <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[10px] font-bold uppercase text-stone-400 tracking-wider mb-0.5">{secondaryColumnTitle}</span>
                        <span className="text-xs text-stone-500 leading-tight">{item.concrete}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
