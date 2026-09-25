'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

interface BeforeAfterPair {
  id: string;
  title: string;
  location: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

const transformations: BeforeAfterPair[] = [
  {
    id: 'driveway',
    title: 'Aged Concrete to Interlocking Paver Driveway',
    location: 'Pasadena, CA',
    category: 'Driveway Pavers',
    beforeImg: '/assets/transformations/driveway-modern-before.jpg',
    afterImg: '/assets/transformations/driveway-modern-after.jpg',
    description: 'Excavated 8 inches of compromised soil, leveled with geotextile aggregate, and installed heavy-duty interlocking pavers with custom soldier course borders.',
  },
  {
    id: 'patio',
    title: 'Cramped Slab to Outdoor Kitchen & Dining Retreat',
    location: 'Newport Beach, CA',
    category: 'Patio Pavers',
    beforeImg: '/assets/transformations/patio-modern-before.jpg',
    afterImg: '/assets/transformations/patio-modern-after.jpg',
    description: 'Replaced a weathered concrete slab with a 3x larger interlocking paver terrace, complete with built-in BBQ island, smoker station, and shaded dining pergola.',
  },
  {
    id: 'pool-deck',
    title: 'Excavation to Resort Pool Coping & Architectural Paver Deck',
    location: 'Palm Springs, CA',
    category: 'Pool Deck Pavers',
    beforeImg: '/assets/transformations/pool-deck-modern-before.jpg',
    afterImg: '/assets/transformations/pool-deck-modern-after.jpg',
    description: 'Transformed an excavated pool construction site into a luxury resort pool deck with slip-resistant pavers, smooth safety bullnose coping, and palm tree planter retaining wall.',
  },
  {
    id: 'turf',
    title: 'Drought-Stricken Brown Lawn to Emerald Synthetic Turf',
    location: 'San Diego, CA',
    category: 'Synthetic Turf',
    beforeImg: '/assets/transformations/turf-modern-before.jpg',
    afterImg: '/assets/transformations/turf-modern-after.jpg',
    description: 'Replaced dead, water-thirsty dormant grass with high-drainage, pet-friendly Cool-Blade synthetic turf and integrated interlocking paver patio borders.',
  },
  {
    id: 'outdoor-kitchen',
    title: 'Overgrown Weed Yard to Modern Fire Pit & BBQ Lounge',
    location: 'Irvine, CA',
    category: 'Outdoor Kitchens & Fire Pits',
    beforeImg: '/assets/transformations/fire-pit-before.webp',
    afterImg: '/assets/transformations/fire-pit-after.webp',
    description: 'Installed architectural large-format pavers, custom gas fire pit, black Adirondack lounge seating, and low-maintenance river rock landscape borders.',
  },
  {
    id: 'pergola',
    title: 'Demolition Rubble to Louvered Pergola Living Deck',
    location: 'Los Angeles, CA',
    category: 'Decks & Pergolas',
    beforeImg: '/assets/transformations/pergola-before.webp',
    afterImg: '/assets/transformations/pergola-after.webp',
    description: 'Cleared demolition concrete rubble to construct a motorized aluminum louvered pergola over two-tone herringbone pavers with a built-in outdoor grill island.',
  }
];

interface BeforeAfterSliderProps {
  onOpenModal?: (service?: string) => void;
  initialId?: string;
  hideTabs?: boolean;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  onOpenModal,
  initialId,
  hideTabs = false,
  title = 'Move Your Mouse to See the Before & After Difference',
  subtitle = 'Move your cursor across the project to reveal the dramatic craftsmanship difference between raw yards and our finished paver systems.',
}: BeforeAfterSliderProps) {
  const initialIndex = initialId ? Math.max(0, transformations.findIndex(t => t.id === initialId)) : 0;
  const [selectedIdx, setSelectedIdx] = useState(initialIndex);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = transformations[selectedIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-stone-900 border-b border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Kōzen Editorial Minimalism) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#019934] block mb-3">
            REAL TRANSFORMATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Project Selector Tabs (Kōzen Minimalist Underline Tabs) */}
          {!hideTabs && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-8 border-b border-stone-200/60 pb-3">
              {transformations.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
                    setSliderPosition(50);
                  }}
                  className={`pb-2.5 px-2 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer border-b-2 -mb-[13px] ${
                    selectedIdx === idx
                      ? 'border-[#019934] text-[#1A292C]'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {t.category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Comparison Container (Kōzen Clean Architectural Frame) */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[460px] overflow-hidden shadow-xl select-none cursor-ew-resize border border-stone-200/90 bg-stone-100"
          >
            {/* After Image (Background) */}
            <img
              src={currentProject.afterImg}
              alt={`${currentProject.title} - After`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentProject.beforeImg}
                alt={`${currentProject.title} - Before`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Vertical Divider Handle with clean minimal styling */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-2xl pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white/95 backdrop-blur-sm text-stone-800 rounded-full shadow-xl flex items-center justify-center border border-stone-200/90">
                <svg
                  className="w-4 h-4 text-stone-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="8 7 3 12 8 17" />
                  <polyline points="16 7 21 12 16 17" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Details & CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 border border-stone-200/80 bg-[#FAF9F6]">
            <div>
              <div className="text-[11px] font-semibold text-[#019934] uppercase tracking-[0.2em]">
                {currentProject.location} • {currentProject.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1A292C] mt-1 font-normal tracking-tight">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed font-normal">
                {currentProject.description}
              </p>
            </div>

            {onOpenModal && (
              <button
                type="button"
                onClick={() => onOpenModal(currentProject.category)}
                className="shrink-0 bg-[#019934] hover:bg-[#01802b] active:scale-98 text-white font-bold text-xs sm:text-sm px-6 py-3.5 shadow-md flex items-center gap-2 cursor-pointer transition-all uppercase tracking-wider whitespace-nowrap"
              >
                <span>Get a Similar 3D Design</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
