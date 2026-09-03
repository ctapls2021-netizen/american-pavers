'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LocationItem } from '@/types';
import { companyData } from '@/data/company';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroWithForm from '@/components/sections/HeroWithForm';
import TrustBar from '@/components/sections/TrustBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import FaqAccordion from '@/components/sections/FaqAccordion';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { generalFaqs } from '@/data/faqs';
import { MapPin, CheckCircle, Award, Star, ChevronRight, Phone } from 'lucide-react';

interface LocationPageClientProps {
  location: LocationItem;
}

export default function LocationPageClient({ location }: LocationPageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState('Patio Pavers');
  const [activeZip, setActiveZip] = useState(location.zipCodes[0] || '');

  const handleOpenModal = (service?: string, zip?: string) => {
    if (service) setActiveService(service);
    if (zip) setActiveZip(zip);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar onOpenModal={() => handleOpenModal('General Consultation')} />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-stone-100 border-b border-stone-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-stone-600">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-400">Service Areas</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-bold text-stone-900">{location.name}, {location.stateCode}</span>
          </div>
        </div>

        {/* Localized Hero */}
        <HeroWithForm
          onOpenModal={handleOpenModal}
          locationName={`${location.name}, ${location.stateCode}`}
          title={
            <>
              {location.name}&rsquo;s Trusted Choice for <br />
              <span className="text-amber-400">Interlocking Pavers & Turf</span>
            </>
          }
          subtitle={`Over ${location.projectsCompleted.toLocaleString()}+ outdoor renovations completed in ${location.county}. Certified ICPI installations with our 25-Year Master Warranty.`}
        />

        <TrustBar />

        {/* Localized City Details & Neighborhood Coverage */}
        <section className="py-16 bg-white text-stone-900 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                  Local Service Guarantee
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  Serving {location.name} & Surrounding Communities
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Our local {location.name} design team understands regional soil conditions, seismic considerations, and municipal permitting requirements. We provide full turn-key installations backed by on-site project management.
                </p>

                {/* Neighborhoods tags */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Popular Neighborhoods We Transform:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.highlightNeighborhoods.map((nb, i) => (
                      <span
                        key={i}
                        className="bg-stone-100 text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-200 flex items-center gap-1"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                        {nb}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Local Office and Contact */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                    <span><strong>Local Office:</strong> {location.localOfficeAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                    <a href={`tel:${companyData.phone}`} className="font-bold text-stone-900 hover:text-amber-700">
                      {companyData.formattedPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Local Stats Box */}
              <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
                <div className="flex items-center gap-2 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="text-white font-bold ml-1">{location.averageRating} Stars</span>
                </div>

                <div className="text-3xl font-extrabold">
                  {location.projectsCompleted.toLocaleString()}+
                  <span className="block text-xs font-normal text-stone-400 mt-1 uppercase tracking-wider">
                    Completed Installations in {location.county}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-stone-300 border-t border-stone-800 pt-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Complimentary In-Home 3D Site Measurements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Permits Handled with {location.name} Building Dept.</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenModal('Local Estimate')}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  Schedule Your {location.name} Design Visit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid onOpenModal={handleOpenModal} />

        {/* Before / After */}
        <BeforeAfterSlider onOpenModal={handleOpenModal} />

        {/* Localized FAQs */}
        <FaqAccordion
          faqs={generalFaqs}
          title={`Common Questions from ${location.name} Homeowners`}
          subtitle={`Everything you need to know about outdoor remodeling and pavers in ${location.county}.`}
        />

        <BottomCtaBanner onOpenModal={() => handleOpenModal('Location Bottom CTA')} />
      </main>

      <Footer />

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={activeService}
        defaultZip={activeZip}
      />
    </div>
  );
}
