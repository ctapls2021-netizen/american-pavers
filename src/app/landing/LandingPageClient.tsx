'use client';

import React from 'react';
import LandingHero from '@/components/landing/LandingHero';
import LandingTrustStrip from '@/components/landing/LandingTrustStrip';
import LandingOfferSection from '@/components/landing/LandingOfferSection';
import LandingProofSection from '@/components/landing/LandingProofSection';
import LandingProcessFaq from '@/components/landing/LandingProcessFaq';
import LandingFinalCta from '@/components/landing/LandingFinalCta';
import LandingLegal from '@/components/landing/LandingLegal';
import LandingStickyBar from '@/components/landing/LandingStickyBar';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

export default function LandingPageClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-stone-900 overflow-x-hidden selection:bg-[#019934] selection:text-white">
      {/* Schema.org Structured Data */}
      <JsonLdSchema />

      <main className="flex-1 w-full">
        {/* Hero with direct quote form */}
        <LandingHero />

        {/* 4-stat proof strip (2x2 on mobile) */}
        <LandingTrustStrip />

        {/* What the price includes: technical base specifications */}
        <LandingOfferSection />

        {/* Recent Los Angeles project installations & reviews */}
        <LandingProofSection />

        {/* 3 Steps process & interactive FAQ accordion */}
        <LandingProcessFaq />

        {/* Final CTA conversion banner */}
        <LandingFinalCta />
      </main>

      {/* Minimalist legal footer */}
      <LandingLegal />

      {/* Mobile-optimized sticky action bar (bottom) */}
      <LandingStickyBar />
    </div>
  );
}
