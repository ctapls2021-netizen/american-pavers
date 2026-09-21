'use client';

import React, { useState } from 'react';
import AltNavbar from '@/components/layout/AltNavbar';
import AltImageHero from '@/components/sections/alt/AltImageHero';
import AltServicesShowcase from '@/components/sections/alt/AltServicesShowcase';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import AltProcessRoadmap from '@/components/sections/alt/AltProcessRoadmap';
import ServiceBannerSlider from '@/components/sections/ServiceBannerSlider';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import AltFooter from '@/components/layout/AltFooter';
import LeadFormModal from '@/components/ui/LeadFormModal';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { generalFaqs } from '@/data/faqs';

export default function HomeAltClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Patio Pavers');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div id="top" className="flex flex-col min-h-screen bg-white">
      <JsonLdSchema />

      {/* Self-Contained Anchor Navigation Header */}
      <AltNavbar onOpenModal={() => handleOpenModal()} />

      <main className="flex-1">
        {/* High-Impact Luxury Image Hero (Replaces scroll-video) */}
        <AltImageHero
          onOpenConsultation={() => handleOpenModal()}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Redesigned Services Showcase (Self-contained, no subpage navigation) */}
        <AltServicesShowcase onOpenModal={handleOpenModal} />

        {/* Real Interactive Before / After Transformations */}
        <div id="transformations" className="scroll-mt-20">
          <BeforeAfterSlider onOpenModal={handleOpenModal} />
        </div>

        {/* Redesigned 3-Phase Architectural Process Roadmap */}
        <AltProcessRoadmap onOpenModal={() => handleOpenModal()} />

        {/* Full-Width Showcase Slider */}
        <ServiceBannerSlider onOpenModal={handleOpenModal} />

        {/* Verified Customer Testimonials with Google, Yelp & Houzz Logos */}
        <div id="reviews" className="scroll-mt-20">
          <TestimonialsGrid />
        </div>

        {/* Frequently Asked Questions */}
        <div id="faq" className="scroll-mt-20">
          <FaqAccordion faqs={generalFaqs} />
        </div>

        {/* Closing Consultation & Estimate Banner */}
        <div id="contact">
          <BottomCtaBanner onOpenModal={() => handleOpenModal()} />
        </div>
      </main>

      {/* Self-Contained Footer */}
      <AltFooter onOpenModal={() => handleOpenModal()} />

      {/* Direct 3D Consultation Capture Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
