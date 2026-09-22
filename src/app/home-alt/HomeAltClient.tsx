'use client';

import React from 'react';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import Home2Header from '@/components/home2/Home2Header';
import Home2Hero from '@/components/home2/Home2Hero';
import Home2Services from '@/components/home2/Home2Services';
import Home2About from '@/components/home2/Home2About';
import Home2Process from '@/components/home2/Home2Process';
import Home2WorkMosaic from '@/components/home2/Home2WorkMosaic';
import Home2Reviews from '@/components/home2/Home2Reviews';
import Home2CTABand from '@/components/home2/Home2CTABand';
import Home2FAQ from '@/components/home2/Home2FAQ';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import Home2Footer from '@/components/home2/Home2Footer';

export default function HomeAltClient() {
  const handleScrollToQuote = () => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="flex flex-col min-h-screen w-full max-w-full overflow-x-clip bg-white text-stone-900 selection:bg-[#019934] selection:text-white">
      {/* Rich SEO Structured Data */}
      <JsonLdSchema />

      {/* Top Utility Bar & Official Header */}
      <Home2Header onOpenQuote={handleScrollToQuote} />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* Hero Section with Scrim, Value Proposition & Key Metrics */}
        <Home2Hero />

        {/* What We Install: 6 Service Cards with 3:4 Aspect Ratios */}
        <Home2Services />

        {/* About Us: 18 Years, 4 Core Values & Green Statement Bar */}
        <Home2About />

        {/* Process Timeline: 4 Visits, No Surprises with Animated Step Indicator */}
        <Home2Process />

        {/* Work Mosaic: Asymmetric Project Showcase Across Los Angeles */}
        <Home2WorkMosaic />

        {/* Official Reviews: Google (4.9), Yelp (4.8), Houzz (5.0) & Testimonials */}
        <Home2Reviews />

        {/* High-Impact Direct CTA Banner */}
        <Home2CTABand />

        {/* FAQ Accordion: Honest Answers to 5 Common Customer Questions */}
        <Home2FAQ />

        {/* Split Quote Studio: On-Site Photography & Connected Lead Capture */}
        <Home2QuoteSplit />
      </main>

      {/* Multi-Column Corporate Footer with License Details */}
      <Home2Footer />
    </div>
  );
}
