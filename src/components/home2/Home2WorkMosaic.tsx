'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

const WORK_ITEMS = [
  {
    image: '/assets/real/American pavers (2).jpg',
    tag: 'Driveway',
    title: 'Herringbone driveway, 2,400 sq ft',
    location: 'Sherman Oaks',
    spanClass: 'col-span-2 row-span-2 xl:col-span-2 xl:row-span-2',
  },
  {
    image: '/assets/real/American pavers (10).jpg',
    tag: 'Steps',
    title: 'Stepped entry, 42 risers',
    location: 'Silver Lake',
    spanClass: 'col-span-1 row-span-2 xl:col-span-1 xl:row-span-2',
  },
  {
    image: '/assets/real/American pavers (13).jpg',
    tag: 'Patio',
    title: 'Bluestone patio',
    location: 'Pasadena',
    spanClass: 'col-span-1 row-span-1 xl:col-span-1 xl:row-span-1',
  },
  {
    image: '/assets/real/American pavers (21).jpg',
    tag: 'Walkway',
    title: 'Charcoal cobble path',
    location: 'Glendale',
    spanClass: 'col-span-1 row-span-1 xl:col-span-1 xl:row-span-1',
  },
  {
    image: '/assets/real/American pavers (24).jpg',
    tag: 'Pool deck',
    title: 'Porcelain pool deck',
    location: 'Studio City',
    spanClass: 'col-span-1 row-span-1 xl:col-span-1 xl:row-span-1',
  },
  {
    image: '/assets/real/American pavers (11).jpg',
    tag: 'Driveway',
    title: 'Twin-band apron',
    location: 'Encino',
    spanClass: 'col-span-1 row-span-1 xl:col-span-1 xl:row-span-1',
  },
  {
    image: '/assets/real/American pavers (16).jpg',
    tag: 'Turf',
    title: 'Front lawn replacement',
    location: 'Culver City',
    spanClass: 'col-span-1 row-span-1 xl:col-span-1 xl:row-span-1',
  },
  {
    image: '/assets/real/American pavers (25).jpg',
    tag: 'Pool deck',
    title: 'Porcelain coping run',
    location: 'Woodland Hills',
    spanClass: 'col-span-1 row-span-1 xl:col-span-1 xl:row-span-1',
  },
];

export default function Home2WorkMosaic() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-28 bg-white text-stone-900 border-b border-stone-200 scroll-mt-20 w-full max-w-full overflow-hidden">
      {/* Full-bleed container: fills viewport width, fluid gutter padding */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-2 sm:mb-3">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
              Recent installs.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => scrollTo('quote-section')}
            className="w-full sm:w-auto px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-[#1A292C] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-stone-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>View the full gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mosaic Grid: 2 cols on mobile and tablet (<1200px), 4 cols (>=1200px) */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 auto-rows-[140px] sm:auto-rows-[clamp(220px,18vw,300px)]">
          {WORK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-lg overflow-hidden bg-stone-900 shadow-md border border-stone-200 cursor-pointer ${item.spanClass}`}
              onClick={() => scrollTo('quote-section')}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1199px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/90 via-[#0E1719]/35 to-transparent pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10">
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold tracking-wide">
                  {item.tag}
                </span>
              </div>

              {/* Title & Location */}
              <div className="absolute bottom-2.5 sm:bottom-5 left-2.5 sm:left-5 right-2.5 sm:right-5 text-left z-10">
                <h3 className="text-white text-xs sm:text-lg lg:text-xl font-bold leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 sm:gap-1.5 text-stone-300 text-[10px] sm:text-sm mt-0.5 sm:mt-1.5">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4CC66E] shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
