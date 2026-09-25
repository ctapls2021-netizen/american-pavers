import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ChevronRight } from 'lucide-react';

import { urlForImage } from '@/sanity/image';

interface ServicesGridProps {
  onOpenModal: (service?: string) => void;
  customServices?: any[];
  customHeader?: {
    badge?: string;
    heading?: string;
    subheading?: string;
  };
}

export default function ServicesGrid({ onOpenModal, customServices, customHeader }: ServicesGridProps) {
  const list = customServices && customServices.length > 0 ? customServices : servicesData;

  return (
    <section className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
            {customHeader?.badge || 'Our Core Specialties'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand mt-2">
            {customHeader?.heading || 'Custom Paver & Outdoor Living Solutions'}
          </h2>
          <p className="text-base text-stone-600 mt-2">
            {customHeader?.subheading || 'Engineered for superior durability, natural drainage, and lifelong elegance.'}
          </p>
        </div>

        {/* Services Cards Grid — replica minimalist card-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {list.map((service) => {
            const localMap: Record<string, string> = {
              'driveway-pavers': '/assets/generated/driveway_premium.webp',
              'patio-pavers': '/assets/generated/patio_premium.jpg',
              'pool-deck-pavers': '/assets/generated/pool_premium.jpg',
              'synthetic-turf': '/assets/generated/turf_premium.jpg',
              'outdoor-kitchens': '/assets/generated/kitchen_premium.jpg',
              'decking-pergolas': '/assets/generated/pergola_premium.jpg'
            };
            const imgSrc = localMap[service.slug] || (service.heroImage?.asset
              ? urlForImage(service.heroImage).width(1000).height(625).url()
              : (typeof service.heroImage === 'string' ? service.heroImage : '/assets/generated/driveway_premium.jpg'));

            return (
            <div
              key={service.slug}
              className="bg-white rounded-none overflow-hidden border border-stone-200/90 hover:border-stone-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Clean Real Image — sin textos ni gradientes oscuros superpuestos */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 rounded-none">
                <img
                  src={imgSrc}
                  alt={service.title}
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body — poco texto, tipografía clara */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1A292C] group-hover:text-[#019934] transition-colors leading-snug">
                    {service.shortTitle || service.title}
                  </h3>
                  <p className="mt-2.5 text-stone-600 text-sm leading-relaxed line-clamp-2">
                    {service.tagline || service.description}
                  </p>
                </div>

                {/* Bottom Action — botón radio cero y flecha angular */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-bold text-[#1A292C] hover:text-[#019934] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Service</span>
                    <ChevronRight className="w-4 h-4 text-[#019934] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenModal(service.shortTitle)}
                    className="px-4 py-2 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs rounded-none transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Get Estimate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
