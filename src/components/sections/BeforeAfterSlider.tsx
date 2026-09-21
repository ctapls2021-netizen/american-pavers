'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ChevronRight, ArrowLeftRight } from 'lucide-react';

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
    beforeImg: '/assets/transformations/driveway-before.webp',
    afterImg: '/assets/transformations/driveway-after.webp',
    description: 'Excavated 8 inches of compromised soil, leveled with geotextile aggregate, and installed heavy-duty interlocking pavers with custom soldier course borders.',
  },
  {
    id: 'patio',
    title: 'Cramped Slab to Outdoor Kitchen & Dining Retreat',
    location: 'Newport Beach, CA',
    category: 'Patio Pavers',
    beforeImg: '/assets/transformations/patio-before.webp',
    afterImg: '/assets/transformations/patio-after.webp',
    description: 'Replaced a weathered concrete slab with a 3x larger interlocking paver terrace, complete with built-in BBQ island, smoker station, and shaded dining pergola.',
  },
  {
    id: 'pool-deck',
    title: 'Excavation to Resort Pool Coping & Architectural Paver Deck',
    location: 'Palm Springs, CA',
    category: 'Pool Deck Pavers',
    beforeImg: '/assets/transformations/pool-deck-before.webp',
    afterImg: '/assets/transformations/pool-deck-after.webp',
    description: 'Transformed an excavated pool construction site into a luxury resort pool deck with slip-resistant pavers, smooth safety bullnose coping, and palm tree planter retaining wall.',
  },
  {
    id: 'turf',
    title: 'Drought-Stricken Brown Lawn to Emerald Synthetic Turf',
    location: 'San Diego, CA',
    category: 'Synthetic Turf',
    beforeImg: '/assets/transformations/turf-lawn-before.webp',
    afterImg: '/assets/transformations/turf-lawn-after.webp',
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
  },
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
    <section className="py-20 bg-white text-stone-900 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand mt-3">
            {title}
          </h2>
          <p className="text-base text-stone-600 mt-2">
            {subtitle}
          </p>

          {/* Project Selector Tabs */}
          {!hideTabs && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {transformations.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2.5 rounded-none text-xs font-bold transition-all cursor-pointer ${
                    selectedIdx === idx
                      ? 'bg-[#019934] text-white shadow-md'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {t.category} ({t.location})
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-16/10 sm:aspect-16/9 rounded-none overflow-hidden shadow-2xl select-none cursor-ew-resize border border-stone-300 bg-stone-100"
          >
            {/* After Image (Background) */}
            <img
              src={currentProject.afterImg}
              alt={`${currentProject.title} - After`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-[#019934] text-white text-xs font-extrabold px-3 py-1.5 rounded-none shadow-md pointer-events-none uppercase tracking-wider">
              After Transformation
            </div>

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
              <div className="absolute top-4 left-4 bg-stone-900/90 text-stone-200 text-xs font-extrabold px-3 py-1.5 rounded-none shadow-md pointer-events-none uppercase tracking-wider">
                Before
              </div>
            </div>

            {/* Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 bg-white text-stone-800 rounded-none shadow-xl flex items-center justify-center border-2 border-[#019934]">
                <ArrowLeftRight className="w-4 h-4 text-[#019934]" />
              </div>
            </div>
          </div>

          {/* Project Details & CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-none border border-stone-200 bg-transparent">
            <div>
              <div className="text-xs font-bold text-[#019934] uppercase tracking-wider">
                {currentProject.location} • {currentProject.category}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1A292C] mt-0.5">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                {currentProject.description}
              </p>
            </div>

            {onOpenModal && (
              <button
                type="button"
                onClick={() => onOpenModal(currentProject.category)}
                className="shrink-0 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-none shadow-md flex items-center gap-2 cursor-pointer transition-colors"
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
