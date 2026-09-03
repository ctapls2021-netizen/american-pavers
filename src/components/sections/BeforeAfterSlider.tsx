'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

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
    title: 'Cracked Asphalt to Interlocking Cobble Driveway',
    location: 'Pasadena, CA',
    category: 'Driveway Pavers',
    beforeImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80',
    description: 'Completely excavated 9 inches of compromised soil, installed a geo-textile base, and laid 1,450 sq. ft. of heavy-duty interlocking pavers with soldier course borders.',
  },
  {
    id: 'patio',
    title: 'Muddy Yard to Mediterranean Resort Living Area',
    location: 'Newport Beach, CA',
    category: 'Backyard Patio',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    description: 'Transformed an unusable sloped dirt backyard into a multi-tier outdoor living space with natural gas fire pit, seating walls, and cool-touch pavers.',
  },
  {
    id: 'turf-pool',
    title: 'Dying Grass to Luxury Pool Surround & Putting Green',
    location: 'Scottsdale, AZ',
    category: 'Pool & Turf',
    beforeImg: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=80',
    afterImg: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80',
    description: 'Eliminated high water bills with 2,200 sq. ft. of pet-friendly synthetic turf and slip-resistant travertine pool coping stones.',
  },
];

interface BeforeAfterSliderProps {
  onOpenModal?: (service?: string) => void;
}

export default function BeforeAfterSlider({ onOpenModal }: BeforeAfterSliderProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
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
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-white text-stone-900 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
            Drag to See the Before & After Difference
          </h2>
          <p className="text-base text-stone-600 mt-2">
            Slide left and right to inspect the dramatic craftsmanship difference between tired yards and our finished paver systems.
          </p>

          {/* Project Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {transformations.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setSelectedIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {t.category} ({t.location})
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-stone-200"
          >
            {/* After Image (Full background) */}
            <img
              src={currentProject.afterImg}
              alt={`${currentProject.title} After`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-20 bg-stone-900/80 backdrop-blur-md text-amber-400 text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-stone-700">
              AFTER (COMPLETED)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentProject.beforeImg}
                alt={`${currentProject.title} Before`}
                className="absolute inset-0 w-full h-full object-cover max-w-none filter contrast-90"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute inset-0 bg-stone-950/20" />
              <div className="absolute top-4 left-4 z-20 bg-stone-900/80 backdrop-blur-md text-stone-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-stone-700">
                BEFORE
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-stone-900 shadow-xl flex items-center justify-center border-2 border-amber-600">
                <ArrowLeftRight className="w-4 h-4 text-amber-700" />
              </div>
            </div>
          </div>

          {/* Project Details Box */}
          <div className="mt-6 bg-stone-50 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                {currentProject.location} • {currentProject.category}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mt-0.5">
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
                className="shrink-0 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Get a Similar 3D Design</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
