import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

const WORK_ITEMS = [
  {
    image: '/assets/brand/photo-driveway-herringbone.png',
    tag: 'Driveway',
    title: 'Herringbone driveway, 2,400 sq ft',
    location: 'Sherman Oaks',
    colSpan: 'sm:col-span-2 sm:row-span-2',
  },
  {
    image: '/assets/brand/photo-cobble-walkway.png',
    tag: 'Steps',
    title: 'Stepped entry, 42 risers',
    location: 'Silver Lake',
    colSpan: 'sm:col-span-1 sm:row-span-2',
  },
  {
    image: '/assets/brand/photo-bluestone-slabs.png',
    tag: 'Patio',
    title: 'Bluestone patio',
    location: 'Pasadena',
    colSpan: 'sm:col-span-1 sm:row-span-1',
  },
  {
    image: '/assets/brand/photo-cobble-walkway.png',
    tag: 'Walkway',
    title: 'Charcoal cobble path',
    location: 'Glendale',
    colSpan: 'sm:col-span-1 sm:row-span-1',
  },
  {
    image: '/assets/brand/photo-bluestone-slabs.png',
    tag: 'Pool deck',
    title: 'Porcelain pool deck',
    location: 'Studio City',
    colSpan: 'sm:col-span-1 sm:row-span-1',
  },
  {
    image: '/assets/brand/photo-driveway-herringbone.png',
    tag: 'Driveway',
    title: 'Twin-band apron',
    location: 'Encino',
    colSpan: 'sm:col-span-1 sm:row-span-1',
  },
  {
    image: '/assets/brand/photo-driveway-herringbone.png',
    tag: 'Turf',
    title: 'Front lawn replacement',
    location: 'Culver City',
    colSpan: 'sm:col-span-1 sm:row-span-1',
  },
  {
    image: '/assets/brand/photo-bluestone-slabs.png',
    tag: 'Pool deck',
    title: 'Porcelain coping run',
    location: 'Woodland Hills',
    colSpan: 'sm:col-span-1 sm:row-span-1',
  },
];

export default function Home2WorkMosaic() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200 scroll-mt-20">
      {/* Full-bleed container: fills viewport width, only gutter holding it in */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
              Recent installs.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => scrollTo('quote-section')}
            className="px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-[#1A292C] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded border border-stone-300 transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>View the full gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mosaic Grid: full-width stepped columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[clamp(220px,18vw,300px)]">
          {WORK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-lg overflow-hidden bg-stone-900 shadow-md border border-stone-200 cursor-pointer ${item.colSpan}`}
              onClick={() => scrollTo('quote-section')}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/90 via-[#0E1719]/35 to-transparent pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
                  {item.tag}
                </span>
              </div>

              {/* Title & Location */}
              <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-stone-300 text-xs sm:text-sm mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4CC66E] shrink-0" />
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
