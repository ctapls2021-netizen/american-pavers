'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';

const PLATFORMS = [
  {
    name: 'Google',
    logo: '/assets/brand/logo-google-white.svg',
    score: '4.9',
    count: '212 reviews',
    width: 80,
    height: 24,
  },
  {
    name: 'Yelp',
    logo: '/assets/brand/logo-yelp-white.svg',
    score: '4.8',
    count: '96 reviews',
    width: 65,
    height: 30,
  },
  {
    name: 'Houzz',
    logo: '/assets/brand/logo-houzz-white.svg',
    score: '5.0',
    count: '41 reviews',
    width: 90,
    height: 20,
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
  {
    quote: 'Our dog destroyed the last lawn in a month. This one has held up for two years.',
    name: 'R. Okafor',
    detail: 'Pet turf · Culver City',
  },
];

export default function Home2Reviews() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    } else if (diff < -40) {
      setActiveSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
    touchStartX.current = null;
  };
  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-28 bg-[#1A292C] text-white border-b border-stone-800 scroll-mt-20 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-2 sm:mb-3">
            REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            What homeowners say.
          </h2>
        </div>

        {/* 1. Platform Strip on Desktop / Tablet (>=md: 3-column static grid) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-between p-5 sm:p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl sm:text-4xl text-white font-normal leading-none">
                  {p.score}
                </span>

                <div>
                  <div className="flex items-center gap-1 text-[#4CC66E] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#4CC66E]" />
                    ))}
                  </div>

                  <div className="relative h-6 flex items-center">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={p.width}
                      height={p.height}
                      className="object-contain"
                    />
                  </div>

                  <span className="text-[11px] text-stone-400 block mt-1">
                    {p.count}
                  </span>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-stone-400 shrink-0" />
            </div>
          ))}
        </div>

        {/* 1. Platform Strip on Mobile (<md: carrusel continuo infinito loop sin puntos de navegación, automático) */}
        <div className="md:hidden overflow-hidden w-full relative -mx-4 px-4 py-1">
          <div className="flex items-center gap-3 w-max animate-marquee-loop">
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="w-[230px] shrink-0 flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl text-white font-normal leading-none">
                    {p.score}
                  </span>

                  <div>
                    <div className="flex items-center gap-0.5 text-[#4CC66E] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#4CC66E]" />
                      ))}
                    </div>

                    <div className="relative h-5 flex items-center">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={p.width * 0.85}
                        height={p.height * 0.85}
                        className="object-contain"
                      />
                    </div>

                    <span className="text-[10px] text-stone-400 block mt-0.5">
                      {p.count}
                    </span>
                  </div>
                </div>

                <ExternalLink className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Testimonials on Desktop / Tablet (>=md: 3-column static grid) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#4CC66E] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#4CC66E]" />
                  ))}
                </div>

                <p className="font-serif text-lg sm:text-xl text-white leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col text-left">
                <span className="font-bold text-white text-sm sm:text-base">
                  {t.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-medium mt-0.5">
                  {t.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Testimonials on Mobile (<md: carrusel con puntos de navegación, automático) */}
        <div className="md:hidden mt-8">
          <div
            className="overflow-hidden w-full touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="w-full shrink-0">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 flex flex-col justify-between min-h-[200px]">
                    <div>
                      <div className="flex items-center gap-1 text-[#4CC66E] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#4CC66E]" />
                        ))}
                      </div>

                      <p className="font-serif text-base text-white leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-col text-left">
                      <span className="font-bold text-white text-sm">
                        {t.name}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-stone-400 font-medium mt-0.5">
                        {t.detail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots de navegación en móvil */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeSlide === i
                    ? 'w-6 h-2 bg-[#4CC66E]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
