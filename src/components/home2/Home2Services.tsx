import React from 'react';
import Image from 'next/image';
import { Layers, Ruler, Sprout, Hammer, Droplets, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    iconSrc: '/assets/icons/pavers.png',
    image: '/assets/real/thumbs/American pavers (2).jpg',
    title: 'Paver driveways',
    description: 'Sand-set over six inches of compacted base, edge-restrained on all four sides.',
    linkLabel: 'See driveways',
  },
  {
    iconSrc: '/assets/icons/pool.png',
    image: '/assets/real/thumbs/American pavers (13).jpg',
    title: 'Patios & pool decks',
    description: 'Large-format bluestone and porcelain, laid to fall so water leaves the house.',
    linkLabel: 'See patios',
  },
  {
    iconSrc: '/assets/icons/turf.png',
    image: '/assets/real/thumbs/American pavers (16).jpg',
    title: 'Artificial turf',
    description: 'Pet-rated and putting-green blades over a drainage base that does not hold odor.',
    linkLabel: 'See turf',
  },
  {
    iconSrc: '/assets/icons/steps.png',
    image: '/assets/real/thumbs/walkways_and_steps_gen.jpg',
    title: 'Walkways & steps',
    description: 'Front paths, side yards and stepped entries cut to the grade of the lot.',
    linkLabel: 'See walkways',
  },
  {
    iconSrc: '/assets/icons/wall.png',
    image: '/assets/real/thumbs/retaining_walls_gen.jpg',
    title: 'Retaining walls',
    description: 'Engineered block walls with drainage behind, permitted where required.',
    linkLabel: 'See walls',
  },
  {
    iconSrc: '/assets/icons/drainage.svg',
    image: '/assets/real/thumbs/drainage_and_grading_gen.jpg',
    title: 'Drainage & grading',
    description: 'French drains and re-grading, quoted openly rather than buried in the paver price.',
    linkLabel: 'See drainage',
  },
];

export default function Home2Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200 scroll-mt-20 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            What we install
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Two trades, one crew.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Hardscape and turf are quoted, based and installed together — so nothing gets blamed on the other guy.
          </p>
        </div>

        {/* 6 Service Cards Grid (3 columns >=1200px, 2 columns on mobile and tablet) */}
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 xl:gap-8">
          {SERVICES.map((s, idx) => {
            return (
              <div
                key={idx}
                onClick={() => scrollTo('quote-section')}
                className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden bg-[#1A292C] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-200/80"
              >
                {/* Background Image */}
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719]/95 via-[#0E1719]/50 to-[#0E1719]/30 pointer-events-none" />

                {/* Top-Left Icon */}
                <div className="absolute top-2.5 left-2.5 sm:top-5 sm:left-5 text-white z-10">
                  <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-sm">
                    {s.iconSrc && (
                      <Image src={s.iconSrc} alt="" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    )}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute left-2.5 right-2.5 bottom-2.5 sm:left-6 sm:right-6 sm:bottom-6 text-left z-10">
                  <h3 className="font-serif text-sm sm:text-2xl sm:text-[26px] text-white font-normal leading-tight sm:leading-snug line-clamp-2 sm:line-clamp-none">
                    {s.title}
                  </h3>
                  <p className="hidden sm:block mt-2 text-stone-300 text-sm leading-relaxed font-normal">
                    {s.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-5 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded bg-white/15 group-hover:bg-[#019934] border border-white/20 group-hover:border-[#019934] backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300">
                    <span>{s.linkLabel}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-stone-400 text-left">
          Photography repeats across the six cards — only three brand images exist. Turf, retaining walls and drainage need their own shots.
        </p>
      </div>
    </section>
  );
}
