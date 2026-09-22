import React from 'react';
import TestimonialsSection from '@/components/ui/testimonials-3';

export default function AltTestimonialsGrid() {
  return (
    <section className="relative w-full bg-[#FAF9F6] px-4 sm:px-6 py-24 sm:py-32 border-b border-stone-200/70 overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Header Section in Kōzen Editorial Minimalism */}
        <div className="mx-auto mb-16 md:mb-20 max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#019934] block mb-3">
            05 — HOMEOWNER TESTIMONIALS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Loved by California Homeowners Everywhere
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl mx-auto">
            Don&apos;t just take our word for it — discover why families across Southern California trust{' '}
            <span className="font-semibold text-stone-900">American Pavers &amp; Turf</span> for lifetime outdoor living.
          </p>
        </div>

        {/* The Animated Testimonials Grid Component */}
        <TestimonialsSection />
      </div>
    </section>
  );
}
