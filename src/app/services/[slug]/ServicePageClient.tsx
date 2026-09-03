'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/types';
import { companyData } from '@/data/company';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FaqAccordion from '@/components/sections/FaqAccordion';
import TrustBar from '@/components/sections/TrustBar';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { CheckCircle2, ShieldCheck, Sparkles, ChevronRight, Layers } from 'lucide-react';

interface ServicePageClientProps {
  service: ServiceItem;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-stone-100 border-b border-stone-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-stone-600">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-400">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-bold text-stone-900">{service.shortTitle}</span>
          </div>
        </div>

        {/* Hero Banner for Service */}
        <section className="relative bg-stone-950 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent z-10" />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 bg-amber-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                Master Installation Series
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-stone-200 leading-relaxed">
                {service.tagline}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Schedule Free 3D Design Consultation
                </button>
                <a
                  href={`tel:${companyData.phone}`}
                  className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-sm font-bold px-5 py-3.5 rounded-xl transition-all"
                >
                  Call {companyData.formattedPhone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBar />

        {/* Deep Dive: Benefits & Engineering Features */}
        <section className="py-20 bg-white text-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                  Why Choose Our {service.shortTitle}
                </span>

                <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                  Engineered Beyond Conventional Concrete Standards
                </h2>

                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-stone-800">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-amber-700 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      25-Year Master Workmanship Guarantee
                    </div>
                    <div className="text-xs text-stone-600">
                      Covers settling, joint integrity, edge restraint failure, and structural shifting. Fully transferable.
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features Box */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-6">
                  <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-700" />
                    Installation Specifications
                  </h3>

                  <div className="space-y-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="font-bold text-sm text-stone-900 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-black">
                            {idx + 1}
                          </span>
                          {feat.title}
                        </div>
                        <p className="text-xs text-stone-600 pl-8 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <button
                      type="button"
                      onClick={handleOpenModal}
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Speak with a {service.shortTitle} Specialist</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <FaqAccordion
            faqs={service.faqs.map((f) => ({ ...f, category: service.shortTitle }))}
            title={`Frequently Asked Questions About ${service.shortTitle}`}
            subtitle="Get honest answers to common homeowner questions about permits, preparation, and costs."
          />
        )}

        <BottomCtaBanner onOpenModal={handleOpenModal} />
      </main>

      <Footer />

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={service.title}
      />
    </div>
  );
}
