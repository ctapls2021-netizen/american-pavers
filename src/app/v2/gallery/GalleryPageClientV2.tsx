'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Home2Header from '@/components/home2/Home2Header';
import Home2Footer from '@/components/home2/Home2Footer';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

interface GalleryItem {
  id: string;
  title: string;
  city: string;
  category: 'all' | 'driveways' | 'patios' | 'pools' | 'turf' | 'kitchens' | 'decks';
  categoryTitle: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Circular Driveway with Soldier Course',
    city: 'Pasadena, CA',
    category: 'driveways',
    categoryTitle: 'Driveway Pavers',
    image: '/assets/transformations/driveway-after.webp',
    description: 'Charcoal & Tuscan blend 10,000+ PSI pavers with permeable polymeric joint lock.',
  },
  {
    id: 'g2',
    title: 'Resort Patio with BBQ Island & Outdoor Dining',
    city: 'Newport Beach, CA',
    category: 'patios',
    categoryTitle: 'Patio Pavers',
    image: '/assets/transformations/patio-after.webp',
    description: 'Large-format architectural patio pavers, integrated gas BBQ island, and dining area.',
  },
  {
    id: 'g3',
    title: 'Travertine Pool Coping & Non-Slip Paver Deck',
    city: 'Palm Springs, CA',
    category: 'pools',
    categoryTitle: 'Pool Deck Pavers',
    image: '/assets/transformations/pool-deck-after.webp',
    description: 'Cool-touch safety coping and slip-resistant pavers compatible with saltwater chlorination.',
  },
  {
    id: 'g4',
    title: 'Antimicrobial Pet Turf & Clean Living Lawn',
    city: 'San Diego, CA',
    category: 'turf',
    categoryTitle: 'Synthetic Turf',
    image: '/assets/transformations/turf-lawn-after.webp',
    description: 'Odor-free organic zeolite infill with 30+ in/hr rapid vertical drainage.',
  },
  {
    id: 'g5',
    title: 'Architectural Gas Fire Pit & Seating Lounge',
    city: 'Irvine, CA',
    category: 'kitchens',
    categoryTitle: 'Outdoor Kitchens',
    image: '/assets/transformations/fire-pit-after.webp',
    description: 'Custom natural gas fire pit with stacked stone masonry and smooth paver seating surround.',
  },
  {
    id: 'g6',
    title: 'Motorized Louvered Pergola & Herringbone Stone',
    city: 'Los Angeles, CA',
    category: 'decks',
    categoryTitle: 'Decks & Pergolas',
    image: '/assets/transformations/pergola-after.webp',
    description: 'All-weather motorized louvered roof with rain sensor over 45° herringbone pavers.',
  },
  {
    id: 'g7',
    title: 'Estate Grand Motor Court with Inlaid Borders',
    city: 'Beverly Hills, CA',
    category: 'driveways',
    categoryTitle: 'Driveway Pavers',
    image: '/assets/driveways/driveway-real-2.webp',
    description: 'Heavy vehicular rating aggregate sub-base engineered to withstand full SUV loads.',
  },
  {
    id: 'g8',
    title: 'Coastal Terraced Pavers & Emerald Turf Inset',
    city: 'Laguna Beach, CA',
    category: 'turf',
    categoryTitle: 'Synthetic Turf',
    image: '/assets/transformations/turf-pool-after.webp',
    description: 'Seamless transition between custom travertine pavers and tournament-grade turf.',
  },
  {
    id: 'g9',
    title: 'Modern Linear Pool Surround with Bullnose Edge',
    city: 'Encino, CA',
    category: 'pools',
    categoryTitle: 'Pool Deck Pavers',
    image: '/assets/real/American pavers (9).jpg',
    description: 'Cool-touch pavers engineered to prevent wet slipping and absorb solar heat.',
  },
  {
    id: 'g10',
    title: 'Gourmet Outdoor BBQ Island with Granite Counters',
    city: 'Rancho Palos Verdes, CA',
    category: 'kitchens',
    categoryTitle: 'Outdoor Kitchens',
    image: '/assets/real/American pavers (18).jpg',
    description: 'Marine-grade 304 stainless steel grill suite with integrated refrigerator.',
  },
  {
    id: 'g11',
    title: 'Multi-Level Composite Deck with Glass Railings',
    city: 'Manhattan Beach, CA',
    category: 'decks',
    categoryTitle: 'Decks & Pergolas',
    image: '/assets/real/American pavers (2).jpg',
    description: 'Splinter-free capped composite boards engineered for coastal marine environments.',
  },
  {
    id: 'g12',
    title: 'Herringbone European Cobblestone Motor Court',
    city: 'Santa Monica, CA',
    category: 'driveways',
    categoryTitle: 'Driveway Pavers',
    image: '/assets/real/American pavers (1).jpg',
    description: 'Classic European cobblestone pattern with interlocking structural base.',
  },
];

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'Driveways', value: 'driveways' },
  { label: 'Patios', value: 'patios' },
  { label: 'Pool Decks', value: 'pools' },
  { label: 'Synthetic Turf', value: 'turf' },
  { label: 'Outdoor Kitchens', value: 'kitchens' },
  { label: 'Decks & Pergolas', value: 'decks' },
] as const;

export default function GalleryPageClientV2() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleScrollToQuote = () => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white text-stone-900 selection:bg-[#019934] selection:text-white">
      {/* Home 2 Header */}
      <Home2Header basePath="/v2" onOpenQuote={handleScrollToQuote} />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* Editorial Hero Banner */}
        <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-[#1A292C] text-white flex flex-col justify-between">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/assets/generated/patio_premium.jpg"
              alt="Gallery Portfolio"
              className="w-full h-full object-cover object-center scale-105 opacity-45"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1A292C]/80 via-[#1A292C]/50 to-[#1A292C] pointer-events-none z-10" />

          {/* Breadcrumbs */}
          <div className="relative z-20 bg-black/30 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Link href="/v2" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-bold text-[#4CC66E]">Project Gallery</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
            <span className="text-[#4CC66E] font-bold text-xs uppercase tracking-[0.22em] mb-2 drop-shadow">
              California Architectural Portfolio
            </span>

            <h1
              className="text-white font-serif font-normal tracking-tight drop-shadow-2xl max-w-4xl"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Real Projects. Permanent Craftsmanship.
            </h1>

            <p className="mt-3 text-stone-200 font-normal text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              Explore authentic paver driveways, resort patios, slip-resistant pool surrounds, zero-water synthetic turf, and gourmet outdoor kitchens installed across Southern California.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <button
                onClick={handleScrollToQuote}
                type="button"
                className="w-full sm:w-auto px-7 py-3 rounded-[6px] bg-[#019934] hover:bg-[#017026] text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
              >
                <span>Request Your Free 3D Design</span>
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#4CC66E]" />
                <span>Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </div>

          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* Filter Bar */}
        <section className="bg-stone-50 border-b border-stone-200 py-6 sticky top-20 z-30 backdrop-blur-md bg-stone-50/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setActiveFilter(f.value)}
                    className={`px-4 py-2 rounded-[6px] text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1A292C] text-white shadow-sm'
                        : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-lg overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#4CC66E]" />
                      <span>{item.city}</span>
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#019934] block mb-1">
                        {item.categoryTitle}
                      </span>
                      <h3 className="font-serif text-lg text-[#1A292C] font-normal leading-snug group-hover:text-[#019934] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleScrollToQuote}
                        className="text-xs font-bold text-[#019934] hover:text-[#017026] flex items-center gap-1 transition-colors"
                      >
                        <span>Get Quote for Similar</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Split Quote Studio connected to /api/lead */}
        <Home2QuoteSplit />
      </main>

      {/* Home 2 Footer */}
      <Home2Footer basePath="/v2" />
    </div>
  );
}
