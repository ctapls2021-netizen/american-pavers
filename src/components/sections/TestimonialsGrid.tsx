import React from 'react';
import TestimonialsSection from '@/components/ui/testimonials-3';

export default function TestimonialsGrid() {
  return (
    <section className="relative w-full bg-stone-50 px-4 sm:px-6 py-24 sm:py-28 md:pb-36 border-t border-stone-200 overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Header Section matching brand style */}
        <div className="mx-auto mb-16 md:mb-20 max-w-2xl text-center">
          {/* Subtitle / Overline: pure typography matching all other sections */}
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-3">
            Homeowner Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
            Loved by California Homeowners Everywhere
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl mx-auto">
            Don&apos;t just take our word for it — discover why families across Southern California trust{' '}
            <span className="font-semibold text-stone-900">American Pavers &amp; Turf</span> for lifetime outdoor living.
          </p>
        </div>

        {/* The Staggered Animated Testimonials Grid Component */}
        <TestimonialsSection />
      </div>
    </section>
  );
}

