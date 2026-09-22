'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import AltImageHero from '@/components/sections/alt/AltImageHero';
import AltServicesShowcase from '@/components/sections/alt/AltServicesShowcase';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import AltProcessRoadmap from '@/components/sections/alt/AltProcessRoadmap';
import AltServiceBannerSlider from '@/components/sections/alt/AltServiceBannerSlider';
import AltTestimonialsGrid from '@/components/sections/alt/AltTestimonialsGrid';
import AltFaqAccordion from '@/components/sections/alt/AltFaqAccordion';
import AltBottomCtaBanner from '@/components/sections/alt/AltBottomCtaBanner';
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

      {/* Official Master Navbar (Same as original home, with non-navigating presentation items) */}
      <Navbar onOpenModal={() => handleOpenModal()} disabledNav={true} />

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

        {/* Kōzen Curated Signature Spaces Slider */}
        <AltServiceBannerSlider onOpenModal={handleOpenModal} />

        {/* Verified Customer Testimonials with Editorial Header */}
        <div id="reviews" className="scroll-mt-20">
          <AltTestimonialsGrid />
        </div>

        {/* Frequently Asked Questions with Architectural Consultation Card */}
        <div id="faq" className="scroll-mt-20">
          <AltFaqAccordion faqs={generalFaqs} />
        </div>

        {/* Closing Atelier Consultation & Estimate Studio */}
        <div id="contact">
          <AltBottomCtaBanner onOpenModal={() => handleOpenModal()} />
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
