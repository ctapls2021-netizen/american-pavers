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

// Smart positioning to prevent screen overflow and text overlap
const HOTSPOT_POSITIONS = [
  { top: '75%', left: '35%', dir: 'top', align: 'center' }, // Bottom center-left
  { top: '65%', left: '75%', dir: 'top', align: 'right' },  // Bottom right (prevents right overflow)
  { top: '40%', left: '20%', dir: 'bottom', align: 'left' }, // Top left (opens down, prevents left overflow)
  { top: '35%', left: '80%', dir: 'bottom', align: 'right' },// Top right (opens down, prevents right overflow)
  { top: '55%', left: '50%', dir: 'top', align: 'center' },  // Dead center
  { top: '80%', left: '60%', dir: 'top', align: 'center' },  // Bottom center-right
];

export default function Home2ComparisonHotspots({
  overline = 'Interactive Comparison',
  title = 'Explore the American Pavers Difference',
  subtitle = 'Tap the flashing hotspots below to see why high-density pavers outperform conventional concrete in every category.',
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
        <div className="text-center mb-16 lg:mb-24">
          <div className="text-[#019934] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
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
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-xl shadow-2xl ring-1 ring-white/10">
          <Image
            src={bgImage}
            alt="Interactive comparison"
            fill
            className={`object-cover rounded-xl ${comparativeImages?.imagePosition || 'object-center'}`}
          />
          {/* Dark gradient overlay to make hotspots pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl pointer-events-none" />

          {/* Hotspots */}
          {items.slice(0, 6).map((item, idx) => {
            const pos = HOTSPOT_POSITIONS[idx] || HOTSPOT_POSITIONS[0];
            const isActive = activeHotspot === idx;
            
            // Tooltip vertical direction
            const isBottomDir = pos.dir === 'bottom';
            const verticalClasses = isBottomDir ? 'top-full mt-4 origin-top' : 'bottom-full mb-4 origin-bottom';
            const activeTranslateY = isBottomDir ? 'translate-y-0' : 'translate-y-0';
            const inactiveTranslateY = isBottomDir ? '-translate-y-2' : 'translate-y-2';

            // Tooltip horizontal alignment
            let horizontalClasses = '';
            let triangleHorizontalClasses = '';

            if (pos.align === 'left') {
              // Align left edge of tooltip to left side
              horizontalClasses = 'left-0 translate-x-[-20px]';
              triangleHorizontalClasses = 'left-[30px]';
            } else if (pos.align === 'right') {
              // Align right edge of tooltip to right side
              horizontalClasses = 'right-0 translate-x-[20px]';
              triangleHorizontalClasses = 'right-[30px]';
            } else {
              // Center alignment
              horizontalClasses = 'left-1/2 -translate-x-1/2';
              triangleHorizontalClasses = 'left-1/2 -translate-x-1/2';
            }

            // Triangle placement (up or down)
            const triangleVerticalClasses = isBottomDir
              ? 'bottom-full -mb-1 border-8 border-transparent border-b-white' // Points UP
              : 'top-full -mt-1 border-8 border-transparent border-t-white'; // Points DOWN

            return (
              <div
                key={idx}
                className={`absolute ${isActive ? 'z-[60]' : 'z-10'}`}
                style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
              >
                {/* Hotspot Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveHotspot(isActive ? null : idx);
                  }}
                  className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 shadow-lg cursor-pointer ${
                    isActive ? 'bg-[#019934] scale-110 shadow-[0_0_20px_rgba(76,198,110,0.6)]' : 'bg-white hover:bg-[#019934] hover:scale-110'
                  }`}
                >
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${isActive ? 'bg-[#019934]' : 'bg-white'}`} style={{ animationDuration: '2s' }} />
                  <Plus className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isActive ? 'text-white rotate-45' : 'text-[#1A292C]'}`} />
                </button>

                {/* Tooltip Card */}
                <div
                  className={`absolute w-[280px] sm:w-[320px] bg-white rounded-lg shadow-2xl p-5 transition-all duration-300 pointer-events-none ${verticalClasses} ${horizontalClasses} ${
                    isActive ? `opacity-100 scale-100 ${activeTranslateY}` : `opacity-0 scale-95 ${inactiveTranslateY}`
                  }`}
                >
                  {/* Triangle pointer */}
                  <div className={`absolute ${triangleVerticalClasses} ${triangleHorizontalClasses}`} />

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
