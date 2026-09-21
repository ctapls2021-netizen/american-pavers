'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ScrollVideoHero from '@/components/sections/ScrollVideoHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import ProcessSteps from '@/components/sections/ProcessSteps';
import ServiceBannerSlider from '@/components/sections/ServiceBannerSlider';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import Footer from '@/components/layout/Footer';
import LeadFormModal from '@/components/ui/LeadFormModal';
import JsonLdSchema from '@/components/seo/JsonLdSchema';
import { generalFaqs } from '@/data/faqs';

interface HomePageClientProps {
  sanitySettings?: any;
  sanityServices?: any;
  sanityProjects?: any;
  sanityTestimonials?: any;
}

export default function HomePageClient({
  sanitySettings,
  sanityServices,
  sanityProjects,
  sanityTestimonials,
}: HomePageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Patio Pavers');
  const [initialZip, setInitialZip] = useState('');

  const handleOpenModal = (service?: string) => {
    if (service) setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLdSchema />
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main className="flex-1">
        {/* Interactive Video Scroll Hero */}
        <ScrollVideoHero
          onOpenConsultation={() => handleOpenModal()}
        />

        {/* Core Services Catalog (Connected to Sanity with fallback) */}
        <div id="services-grid">
          <ServicesGrid
            onOpenModal={handleOpenModal}
            customServices={sanityServices}
          />
        </div>

        {/* Before / After Interactive Slider */}
        <BeforeAfterSlider onOpenModal={handleOpenModal} />

        {/* Process Steps */}
        <ProcessSteps onOpenModal={handleOpenModal} />

        {/* Full-Width Service Showcase Banner Slider */}
        <ServiceBannerSlider onOpenModal={handleOpenModal} />

        {/* Real Customer Testimonials */}
        <TestimonialsGrid />

        {/* Frequently Asked Questions */}
        <FaqAccordion faqs={generalFaqs} />

        {/* Bottom CTA Banner */}
        <BottomCtaBanner onOpenModal={() => handleOpenModal()} />
      </main>

      <Footer />

      {/* Global Lead Capture Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
        defaultZip={initialZip}
      />
    </div>
  );
}
