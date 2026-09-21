'use client';

import React from 'react';
import { ChevronRight, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/company';
import ReviewLogoMarquee from '@/components/ui/ReviewLogoMarquee';

interface AltImageHeroProps {
  onOpenConsultation: () => void;
  onExploreServices?: () => void;
}

export default function AltImageHero({
  onOpenConsultation,
  onExploreServices,
}: AltImageHeroProps) {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreServices) {
      onExploreServices();
      return;
    }
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 text-white pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* High-Resolution Luxury Photography Background — Light & Clear */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/banners/banner-driveway-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/assets/banners/banner-driveway.webp"
            type="image/webp"
          />
          <img
            src="/assets/banners/banner-driveway.webp"
            alt="Luxury Estate Custom Interlocking Pavers & Turf by American Pavers & Turf"
            className="w-full h-full object-cover object-center sm:object-[center_35%]"
            // @ts-ignore
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        {/* Lighter, clear architectural overlay so the stone driveway and estate are vivid and bright */}
        <div className="absolute inset-0 bg-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/10 to-stone-950/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center mt-6 sm:mt-10">
        {/* Top Trust Eyebrow (Clean text: no background, no border) */}
        <div className="inline-flex items-center gap-2 text-stone-100 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8 drop-shadow-md">
          <ShieldCheck className="w-4 h-4 text-[#42e078] shrink-0" />
          <span>CSLB Licensed &amp; Insured</span>
          <span className="text-white/40">•</span>
          <span className="text-[#42e078] font-bold">25-Year Master Warranty</span>
        </div>

        {/* Hero Title */}
        <h1
          className="font-extrabold tracking-tight text-white drop-shadow-2xl max-w-5xl"
          style={{
            fontSize: 'clamp(2.35rem, 6vw, 4.85rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
          }}
        >
          Luxury Custom Pavers, Turf &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-[#42e078]">
            Architectural Outdoor Living
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 sm:mt-6 text-stone-200 text-base sm:text-lg md:text-xl max-w-3xl font-normal leading-relaxed drop-shadow-md">
          Transforming Southern California estates with interlocking stone driveways, private resort patios, and lush synthetic turf. Zero cracking, engineered drainage, and guaranteed 3D plans before we break ground.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <button
            onClick={onOpenConsultation}
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-base shadow-2xl hover:shadow-[#019934]/30 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer rounded-none active:scale-98"
          >
            <span>Get Free 3D Design &amp; Estimate</span>
            <ChevronRight className="w-5 h-5" />
          </button>

          <a
            href="#services"
            onClick={handleScrollToServices}
            className="w-full sm:w-auto px-8 py-4 bg-stone-900/80 hover:bg-stone-900 border border-white/30 hover:border-white/70 text-white font-semibold text-base shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer rounded-none"
          >
            <span>Explore All 6 Services</span>
            <ChevronRight className="w-5 h-5 text-stone-400" />
          </a>
        </div>

        {/* Quick Homeowner Guarantee Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
            <span>Complimentary In-Home 3D Render</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
            <span>0% APR Financing Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
            <span>No Obligation Same-Day Quote</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Trust Stats & Review Platforms Marquee */}
      <div className="relative z-10 w-full mt-12 sm:mt-16">
        {/* Trust Stats Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 px-6 bg-stone-900/75 backdrop-blur-md border border-white/15">
            <div className="text-center sm:text-left border-r border-white/10 last:border-0 pr-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {companyData.yearsInBusiness}+ Years
              </span>
              <span className="text-xs text-stone-400 font-medium">Southern California Authority</span>
            </div>
            <div className="text-center sm:text-left md:border-r border-white/10 pr-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {companyData.projectsCompleted.toLocaleString()}+
              </span>
              <span className="text-xs text-stone-400 font-medium">Completed Hardscape Projects</span>
            </div>
            <div className="text-center sm:text-left border-r border-white/10 last:border-0 pr-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#42e078] tracking-tight">
                {companyData.averageRating} ★
              </span>
              <span className="text-xs text-stone-400 font-medium">Google, Yelp &amp; Houzz</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                25-Year
              </span>
              <span className="text-xs text-stone-400 font-medium">Workmanship Master Warranty</span>
            </div>
          </div>
        </div>

        {/* Verified Review Platforms Marquee */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <ReviewLogoMarquee />
        </div>
      </div>
    </section>
  );
}
