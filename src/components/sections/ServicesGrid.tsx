import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesGridProps {
  onOpenModal: (service?: string) => void;
}

export default function ServicesGrid({ onOpenModal }: ServicesGridProps) {
  return (
    <section className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
            Engineered Outdoor Living
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
            Custom Paver Solutions Tailored to Your Home
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Every element is engineered for maximum compressive strength, optimal water drainage, and lifelong elegance. Select a solution to learn more.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {service.shortTitle}
                  </span>
                  <h3 className="text-lg font-bold drop-shadow-xs">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-stone-600 line-clamp-2">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <ul className="space-y-2 pt-2 border-t border-stone-100">
                  {service.benefits.slice(0, 3).map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-stone-800 hover:text-amber-700 inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenModal(service.title)}
                    className="bg-stone-900 hover:bg-amber-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
