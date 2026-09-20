'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

interface ServiceHeroStaticProps {
  title?: string;
  tagline?: string;
  imageSrc?: string;
  serviceName?: string;
  onOpenModal?: () => void;
}

export default function ServiceHeroStatic({
  title = 'Engineered Driveway Pavers',
  tagline = 'Transforming California residential driveways with 10,000+ PSI interlocking pavers guaranteed for a lifetime.',
  imageSrc = '/assets/banners/banner-driveway.webp',
  serviceName = 'Driveway Pavers',
  onOpenModal,
}: ServiceHeroStaticProps) {
  return (
    <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-stone-950 text-white flex flex-col justify-between">
      {/* 1. Static Service Background Image (Replica del Home con imagen estática) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
      </div>

      {/* 2. Atmospheric Contrast Overlays (Idéntico al Home) */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/85 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,15,18,0.7)_100%)] pointer-events-none z-10" />

      {/* 3. Top Navigation / Breadcrumbs Bar */}
      <div className="relative z-20 bg-stone-950/60 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-400">Services</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-bold text-[#42e078]">{serviceName}</span>
        </div>
      </div>

      {/* 4. Centered Hero Content (Idéntico a la tipografía y botones del Home) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
        <span className="text-[#42e078] font-bold text-xs uppercase tracking-widest mb-2 drop-shadow">
          Master Installation Series
        </span>

        <h1
          className="text-white font-extrabold tracking-tight drop-shadow-2xl max-w-4xl"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>

        <p className="mt-3 text-stone-200 font-medium text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
          {tagline}
        </p>

        {/* Action Buttons in Radio Cero (Single line) */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
          {onOpenModal && (
            <button
              onClick={onOpenModal}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Get Free 3D Design &amp; Consultation</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          )}

          <a
            href={`tel:${companyData.phone}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#42e078] shrink-0" />
            <span className="whitespace-nowrap">Call {companyData.formattedPhone}</span>
          </a>
        </div>
      </div>

      {/* 5. Bottom Brand Line Accent */}
      <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
    </section>
  );
}
