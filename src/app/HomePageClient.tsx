'use client';

import React, { useState, useEffect } from 'react';
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
import { client } from '@/sanity/client';
import LiveVisualEditing from '@/components/sanity/LiveVisualEditing';

interface HomePageClientProps {
  sanitySettings?: any;
  sanityHomePage?: any;
  sanityServices?: any;
  sanityProjects?: any;
  sanityTestimonials?: any;
}

export default function HomePageClient({
  sanitySettings,
  sanityHomePage,
  sanityServices,
  sanityProjects,
  sanityTestimonials,
}: HomePageClientProps) {
  const [homePage, setHomePage] = useState(sanityHomePage);
  const [services, setServices] = useState(sanityServices);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Patio Pavers');
  const [initialZip, setInitialZip] = useState('');

  // Live Preview Listener: activa actualización en tiempo real cuando se ve dentro de Sanity Studio Presentation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isIframe = window.self !== window.top;
    const isPreview = window.location.search.includes('preview');

    if (isIframe || isPreview) {
      console.log('[Sanity Live Preview] Subscribing to live content updates...');
      
      const homeSub = client
        .listen('*[_type == "homePage"][0]')
        .subscribe((update: any) => {
          if (update.result) {
            setHomePage((prev: any) => ({ ...prev, ...update.result }));
          }
        });

      const servicesSub = client
        .listen('*[_type == "service"]')
        .subscribe(() => {
          client
            .fetch('*[_type == "service"] | order(order asc, _createdAt desc)')
            .then((res: any) => {
              if (res && res.length > 0) setServices(res);
            })
            .catch(() => {});
        });

      return () => {
        homeSub.unsubscribe();
        servicesSub.unsubscribe();
      };
    }
  }, []);

  const handleOpenModal = (service?: string) => {
    if (service) setSelectedService(service);
    setModalOpen(true);
  };

  const heroHeadline = homePage?.hero?.headlineNormal
    ? `${homePage.hero.headlineNormal} ${homePage.hero.headlineHighlight || ''}`.trim()
    : undefined;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LiveVisualEditing />
      <JsonLdSchema />
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main className="flex-1">
        {/* Interactive Video Scroll Hero */}
        <ScrollVideoHero
          onOpenConsultation={() => handleOpenModal()}
          title={heroHeadline}
          tagline={homePage?.hero?.subheadline}
        />

        {/* Core Services Catalog (Connected to Sanity with fallback) */}
        <div id="services-grid">
          <ServicesGrid
            onOpenModal={handleOpenModal}
            customServices={services}
            customHeader={homePage?.servicesSection}
          />
        </div>

        {/* Before / After Interactive Slider */}
        <BeforeAfterSlider
          onOpenModal={handleOpenModal}
          title={homePage?.transformationsSection?.heading}
          subtitle={homePage?.transformationsSection?.subheading}
        />

        {/* Process Steps */}
        <ProcessSteps
          onOpenModal={handleOpenModal}
          badge={homePage?.processSection?.badge}
          heading={homePage?.processSection?.heading}
        />

        {/* Full-Width Service Showcase Banner Slider */}
        <ServiceBannerSlider onOpenModal={handleOpenModal} />

        {/* Real Customer Testimonials */}
        <TestimonialsGrid />

        {/* Frequently Asked Questions */}
        <FaqAccordion
          faqs={generalFaqs}
          tag={homePage?.faqSection?.badge}
          title={homePage?.faqSection?.heading}
          subtitle={homePage?.faqSection?.subheading}
        />

        {/* Bottom CTA Banner */}
        <BottomCtaBanner
          onOpenModal={() => handleOpenModal()}
          title={homePage?.bottomCta?.heading}
          subtitle={homePage?.bottomCta?.subheading}
        />
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
