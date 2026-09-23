'use client';

import React from 'react';
import Image from 'next/image';

interface PaversVsOtherMaterialsProps {
  onOpenModal?: () => void;
  title?: string;
  serviceSlug?: string;
  imageSrc?: string;
  imageAlt?: string;
  comparisonAnchorId?: string;
}

export default function PaversVsOtherMaterials({
  title = 'Pavers vs Other Materials',
  serviceSlug = 'driveway-pavers',
  imageSrc,
  imageAlt,
  comparisonAnchorId = 'engineering-comparison',
}: PaversVsOtherMaterialsProps) {
  const handleScrollToComparison = () => {
    const el = document.getElementById(comparisonAnchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine service-specific before/after split image
  const activeImage = (() => {
    if (imageSrc) return imageSrc;
    const slug = (serviceSlug || '').toLowerCase();
    if (slug.includes('patio')) {
      return '/assets/diagrams/patio-materials-comparison.jpg';
    }
    if (slug.includes('pool')) {
      return '/assets/diagrams/pool-materials-comparison.jpg';
    }
    return '/assets/diagrams/paver-materials-comparison.jpg';
  })();

  const activeAlt = (() => {
    if (imageAlt) return imageAlt;
    const slug = (serviceSlug || '').toLowerCase();
    if (slug.includes('patio')) {
      return 'Patio Pavers vs Aging Concrete Slab - Split Comparison';
    }
    if (slug.includes('pool')) {
      return 'Pool Deck Pavers vs Cracked Concrete Surround - Split Comparison';
    }
    return 'Driveway Pavers vs Poured Concrete - Split Comparison';
  })();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Clean Image without heavy recuadros */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-xl">
              <Image
                src={activeImage}
                alt={activeAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Clean Editorial Bullets without recuadros or boxes */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A292C] tracking-tight font-serif-brand">
              {title}
            </h2>

            <ul className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-stone-800 text-lg leading-none select-none">•</span>
                <span>
                  Pavers are designed to handle up to <strong className="text-stone-800 font-semibold">10,000+ PSI</strong>. They are individually placed for zero cracking like you&apos;ll find with{' '}
                  <span className="text-[#c05638]">concrete</span>,{' '}
                  <span className="text-[#c05638]">asphalt</span>, or{' '}
                  <span className="text-[#c05638]">brick</span>.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-800 text-lg leading-none select-none">•</span>
                <span>
                  With a tendency to discolor over time, concrete provides few customization options and detracts from property value.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-800 text-lg leading-none select-none">•</span>
                <span>
                  Backed by industry-leading{' '}
                  <span className="text-[#c05638]">warranties</span> (25-year transferable structural guarantee), pavers come in a wide array of styles and color options.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="text-stone-800 text-lg leading-none select-none">•</span>
                <span>
                  Pavers allow for better water and weather management.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleScrollToComparison}
                className="px-8 py-3.5 bg-[#1F3338] hover:bg-[#2A444B] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                SEE THE MATCHUPS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
