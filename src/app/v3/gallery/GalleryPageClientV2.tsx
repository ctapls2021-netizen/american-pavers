'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  ChevronRight,
} from 'lucide-react';
import Home2Header from '@/components/home2/Home2Header';
import Home2Footer from '@/components/home2/Home2Footer';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { companyData } from '@/data/company';

import { galleryProjects, projectCategories, type GalleryProject, type ProjectCategory } from './projects';

const tabs = [
  { id: 'all', label: 'All Projects' },
  ...Object.entries(projectCategories).map(([id, label]) => ({ id: id as ProjectCategory, label })),
] as const;

function GalleryCard({ project }: { project: GalleryProject }) {
  return (
    <Link
      href={`/v3/gallery/${project.slug}`}
      prefetch={false}
      className="group block overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:border-[#019934] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#019934]"
    >
      <div className="h-2 bg-[#019934]" />
      <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-stone-100">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-[#1A292C]">{project.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-stone-600">
          <MapPin aria-hidden="true" className="size-4 text-[#019934]" />
          {project.city}, CA
        </p>
        <span className="mt-4 inline-block text-sm font-bold text-[#01782a]">View project →</span>
      </div>
    </Link>
  );
}

export default function GalleryPageV2() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Driveway Pavers');
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const filteredItems =
    activeFilter === 'all'
      ? galleryProjects
      : galleryProjects.filter((project) => project.categories.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Home2Header basePath="/v3" onOpenQuote={() => handleOpenModal()} />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* ==================================================================== */}
        {/* 1. HERO BANNER (SERVICE PAGE FORMAT: 50% HEIGHT & BREADCRUMBS)       */}
        {/* ==================================================================== */}
        <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-stone-950 text-white flex flex-col justify-between">
          {/* Static Background Image with zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.img
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
              src="/assets/v2/projects/rancho-cucamonga/american-pavers-rancho-cucamonga-photo-03.webp"
              alt="American Pavers & Turf Gallery"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Atmospheric Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/85 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,15,18,0.7)_100%)] pointer-events-none z-10" />

          {/* Top Breadcrumbs Bar */}
          <div className="relative z-20 bg-stone-950/60 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Link href="/v3" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-bold text-[#019934]">Gallery</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <motion.div
            className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[#019934] font-bold text-xs uppercase tracking-widest mb-2 drop-shadow">
              Project Portfolio
            </span>

            <h1
              className="text-white font-serif font-normal tracking-tight drop-shadow-2xl max-w-4xl"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Our California Projects
            </h1>

            <p className="mt-3 text-stone-200 font-medium text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              Browse real paver and turf installations. Open a project to see photos from the job.
            </p>

            {/* Action Buttons in Radio Cero */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <button
                onClick={() => handleOpenModal()}
                type="button"
                className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Schedule Free 3D Design</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#019934] shrink-0" />
                <span className="whitespace-nowrap">Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </motion.div>

          {/* Bottom Accent Line */}
          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* ==================================================================== */}
        {/* 2. INTERACTIVE 3D GALLERY WITH CITY LABELS & GENERATIVE LINES        */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200 text-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Green Subtitle */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
                California Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A292C] tracking-tight">
                Featured Hardscape &amp; Outdoor Living Installations
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                Filter by project type or open any project to explore its gallery.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={activeFilter === tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#019934] text-white shadow-md'
                      : 'bg-white text-stone-700 hover:text-[#019934] hover:bg-stone-50 border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Project gallery grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((project) => (
                <GalleryCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 3. HOME 2 SPLIT QUOTE FORM                                           */}
        {/* ==================================================================== */}
        <Home2QuoteSplit />
      </main>

      <Home2Footer basePath="/v3" />

      {/* Global Lead Form Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
