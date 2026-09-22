import React from 'react';
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

        {/* Platform Strip (Google, Yelp, Houzz) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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

        {/* 3 Editorial Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
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

        <p className="mt-8 text-xs text-stone-400 leading-relaxed text-left max-w-2xl">
          Placeholder quotes and scores — replace with the real review counts and attributed quotes. Platform logos are the official SVGs supplied by the client, rendered in white.
        </p>
      </div>
    </section>
  );
}
