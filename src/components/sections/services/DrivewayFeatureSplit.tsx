'use client';

import React from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';

interface DrivewayFeatureSplitProps {
  overline?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  secondaryBtnPhone?: string;
  onOpenModal?: () => void;
}

export default function DrivewayFeatureSplit({
  overline = 'Engineered Excellence',
  title = 'Built to Outlast Concrete. Designed to Elevate Your Home.',
  description = 'Replace cracked, sunken concrete with high-performance interlocking pavers. Engineered to withstand heavy vehicular traffic, California seismic shifting, and harsh elements—delivering unmatched 10,000+ PSI durability and immediate curb appeal backed by our 25-year structural warranty.',
  imageSrc = '/assets/driveway-feature-card.webp',
  imageAlt = 'Luxury Interlocking Driveway Pavers Installation',
  primaryBtnText = 'Schedule Free 3D Design',
  secondaryBtnText = `Call ${companyData.formattedPhone}`,
  secondaryBtnPhone = companyData.phone,
  onOpenModal,
}: DrivewayFeatureSplitProps) {
  return (
    <section className="relative bg-stone-50 py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Subtitle / Overline: Clean typography without background, border, icon, or emojis */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
              {overline}
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A292C] font-serif-brand tracking-tight leading-[1.15]">
              {title}
            </h2>

            {/* Short Description */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Two Action Buttons (Radio Cero / rounded-none) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Secondary Button: Direct Call */}
              <a
                href={`tel:${secondaryBtnPhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-stone-300 bg-white hover:bg-stone-50 hover:border-stone-400 text-[#1A292C] font-semibold text-sm transition-all rounded-none shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#019934]" />
                <span>{secondaryBtnText}</span>
              </a>

              {/* Primary Button: Open 3D Design / Quote Modal */}
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A292C] hover:bg-[#019934] text-white font-semibold text-sm transition-all rounded-none shadow-md group cursor-pointer"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Real Paver Image */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
