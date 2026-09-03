'use client';

import React, { useState } from 'react';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { Sparkles, MapPin, CheckCircle } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'driveways' | 'patios' | 'pools' | 'turf' | 'kitchens';
  location: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Circular Driveway with Soldier Course',
    category: 'driveways',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    description: 'Charcoal and Tuscan blend tumbled pavers with permeable joint sand.',
  },
  {
    id: 'g2',
    title: 'Resort Patio with Linear Fire Pit & Sitting Walls',
    category: 'patios',
    location: 'Newport Beach, CA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    description: 'Large-format porcelain slabs and integrated LED step illumination.',
  },
  {
    id: 'g3',
    title: 'Travertine Pool Coping & Surround',
    category: 'pools',
    location: 'Scottsdale, AZ',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80',
    description: 'Non-slip cool-touch ivory travertine with bullnose pool edges.',
  },
  {
    id: 'g4',
    title: 'Pet-Friendly Putting Green & Turf Lawn',
    category: 'turf',
    location: 'San Diego, CA',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    description: 'Antimicrobial odor-free infill with 4-hole custom putting green.',
  },
  {
    id: 'g5',
    title: 'Custom BBQ Island & Teak Bar Seating',
    category: 'kitchens',
    location: 'Pasadena, CA',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    description: '304 stainless steel grill, beverage cooler, and waterfall granite counter.',
  },
  {
    id: 'g6',
    title: 'Contemporary Linear Walkway with Turf Accents',
    category: 'patios',
    location: 'Dallas, TX',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    description: 'Geometric concrete steppers floating inside emerald artificial grass grid.',
  },
];

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'driveways' | 'patios' | 'pools' | 'turf' | 'kitchens'>('all');

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-stone-950 text-white py-16 text-center border-b border-stone-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Inspiration & Portfolios
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Real Project Transformations Gallery
            </h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
              Explore completed driveway pavers, resort backyard patios, synthetic turf lawns, and outdoor kitchens installed at real homes.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'driveways', label: 'Driveways' },
                { id: 'patios', label: 'Patios & Living' },
                { id: 'pools', label: 'Pool Decks' },
                { id: 'turf', label: 'Turf & Greens' },
                { id: 'kitchens', label: 'Outdoor Kitchens' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white text-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {item.location}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-stone-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> 25-Yr Warranty
                      </span>
                      <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800"
                      >
                        Get Quote For This Style →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Before & After */}
        <BeforeAfterSlider onOpenModal={() => setModalOpen(true)} />

        <BottomCtaBanner onOpenModal={() => setModalOpen(true)} />
      </main>

      <Footer />

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Custom Yard Design"
      />
    </div>
  );
}
