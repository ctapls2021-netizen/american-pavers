import React from 'react';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';

const PROJECTS = [
  {
    image: '/assets/brand/photo-driveway-herringbone.png',
    tag: 'Driveway',
    title: 'Herringbone, 2,400 sq ft',
    location: 'Sherman Oaks',
  },
  {
    image: '/assets/brand/photo-bluestone-slabs.png',
    tag: 'Pool deck',
    title: 'Large-format porcelain',
    location: 'Studio City',
  },
  {
    image: '/assets/brand/photo-cobble-walkway.png',
    tag: 'Walkway',
    title: 'Charcoal cobble path',
    location: 'Glendale',
  },
];

const TESTIMONIALS = [
  {
    quote: 'They re-graded the whole slope before a single paver went down. Two winters later, still dry.',
    name: 'M. Alvarez',
    detail: 'Driveway · Pasadena',
  },
  {
    quote: 'The quote was the price. That has not happened to us with a contractor before.',
    name: 'D. Chen',
    detail: 'Patio · Studio City',
  },
];

export default function LandingProofSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            RECENT INSTALLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Los Angeles driveways, finished this season.
          </h2>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-900 shadow-md border border-stone-200"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/90 via-[#0E1719]/30 to-transparent pointer-events-none" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wide">
                  {project.tag}
                </span>
              </div>

              {/* Bottom Metadata */}
              <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-stone-300 text-xs sm:text-sm mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4CC66E] shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#C3E0CC]/35 border border-[#019934]/20 rounded-lg p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#019934] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#019934]" />
                  ))}
                </div>

                {/* Serif Quote */}
                <p className="font-serif text-lg sm:text-xl text-[#1A292C] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-[#019934]/15 flex flex-col">
                <span className="font-bold text-[#1A292C] text-sm sm:text-base">
                  {t.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-600 font-semibold mt-0.5">
                  {t.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
