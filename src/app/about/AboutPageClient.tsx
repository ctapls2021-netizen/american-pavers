'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { generalFaqs } from '@/data/faqs';
import {
  CheckCircle2,
  Phone,
  PhoneCall,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface AboutPageClientProps {
  aboutData?: any;
}

export default function AboutPageClient({ aboutData }: AboutPageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Patio Pavers');

  const handleOpenModal = (service?: string) => {
    if (service) setSelectedService(service);
    setModalOpen(true);
  };

  const heroBadge = aboutData?.hero?.badge || '28 Years of Hardscape Excellence';
  const heroHeading = aboutData?.hero?.heading || 'Engineering Architectural Outdoor Living Across Southern California';
  const heroSubheading = aboutData?.hero?.subheading || 'Founded on civil engineering standards, American Pavers & Turf replaces cracked, failing concrete with 10,000+ PSI interlocking stone, zero-water synthetic turf, and turnkey outdoor living built for generations.';

  const storyBadge = aboutData?.story?.badge || 'Who We Are';
  const storyHeading = aboutData?.story?.heading || 'Civil Engineering Precision Meets Master Stone Artistry';
  const storyP1 = aboutData?.story?.bodyParagraph1 || 'Founded in Southern California in 1998, American Pavers & Turf was established to end the frustrating cycle of cracked poured concrete driveways, deteriorating patios, and water-wasting lawns.';
  const storyP2 = aboutData?.story?.bodyParagraph2 || 'As licensed California General Building (Class B) and C-27 Landscaping contractors, we refuse to cut corners on the foundation. We excavate to native subgrade, stabilize expansive clay soils with industrial geotextiles, and achieve 98% Modified Proctor aggregate compaction—ensuring your hardscape never dips, cracks, or shifts under seismic ground motion.';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main className="flex-1">
        {/* HERO BANNER */}
        <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-stone-950 text-white flex flex-col justify-between">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/assets/real/American pavers (17).jpg"
              alt="About American Pavers & Turf"
              className="w-full h-full object-cover object-center scale-105"
              loading="eager"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/85 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,15,18,0.7)_100%)] pointer-events-none z-10" />

          {/* Breadcrumbs */}
          <div className="relative z-20 bg-stone-950/60 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-bold text-[#42e078]">About Us</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
            <span className="text-[#42e078] font-bold text-xs uppercase tracking-widest mb-2 drop-shadow">
              {heroBadge}
            </span>

            <h1
              className="text-white font-extrabold tracking-tight drop-shadow-2xl max-w-4xl font-serif-brand"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {heroHeading}
            </h1>

            <p className="mt-3 text-stone-200 font-medium text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              {heroSubheading}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <button
                onClick={() => handleOpenModal()}
                type="button"
                className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Schedule Free 3D Design</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#42e078] shrink-0" />
                <span className="whitespace-nowrap">Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </div>

          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* WHO WE ARE */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <div className="flex flex-col justify-center space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
                  {storyBadge}
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A292C] font-serif-brand tracking-tight leading-[1.15]">
                  {storyHeading}
                </h2>

                <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                  {storyP1}
                </p>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {storyP2}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
                    <span>CSLB Licensed Class B #984210</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
                    <span>100% In-House ICPI Certified Crews</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
                    <span>25-Year Written Transferable Warranty</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#019934] shrink-0" />
                    <span>45,000+ Completed Installations</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenModal()}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A292C] hover:bg-[#019934] text-white font-semibold text-sm transition-all rounded-none shadow-md group cursor-pointer"
                  >
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`tel:${companyData.phone}`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-stone-300 bg-white hover:bg-stone-50 hover:border-stone-400 text-[#1A292C] font-semibold text-sm transition-all rounded-none shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-[#019934]" />
                    <span>Call {companyData.formattedPhone}</span>
                  </a>
                </div>
              </div>

              <div className="w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-0 flex self-stretch">
                <div className="relative w-full h-full rounded-none overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100">
                  <img
                    src="/assets/real/thumbs/American pavers (15).jpg"
                    alt="Master Paver Stonemasons in Southern California"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand mt-2">
                Turnkey Architectural Outdoor Transformations
              </h2>
              <p className="text-base text-stone-600 mt-2 leading-relaxed">
                From 3D architectural CAD design and municipal permitting to laser-guided sub-base grading, compaction, and final polymeric joint lock, we deliver complete outdoor living spaces engineered for California homes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-none overflow-hidden border border-stone-200/90 hover:border-stone-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 rounded-none">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#1A292C] group-hover:text-[#019934] transition-colors leading-snug">
                        {service.shortTitle}
                      </h3>
                      <p className="mt-2.5 text-stone-600 text-sm leading-relaxed line-clamp-2">
                        {service.tagline}
                      </p>
                    </div>

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
                        onClick={() => handleOpenModal(service.shortTitle)}
                        className="px-4 py-2 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs rounded-none transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Get Estimate</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsGrid />

        {/* FAQS */}
        <FaqAccordion
          faqs={generalFaqs}
          tag="Common Inquiries"
          title="Frequently Asked Questions About Us"
          subtitle="Everything you need to know about our outdoor living process, 10,000 PSI pavers, California permits, and American Pavers & Turf 25-year warranty."
          imageSrc="/assets/faq-pavers.webp"
        />

        {/* BOTTOM CTA */}
        <BottomCtaBanner
          onOpenModal={() => handleOpenModal()}
          title="Ready to Build Your Custom Hardscape Sanctuary?"
          subtitle="Schedule your complimentary in-home 3D design consultation. Our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf."
        />
      </main>

      <Footer />

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
