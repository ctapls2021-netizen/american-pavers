'use client';

import React from 'react';
import Carousel, { SlideData } from '@/components/ui/carousel';

const drivewaySlides: SlideData[] = [
  {
    title: 'Pasadena, CA',
    src: '/assets/real/thumbs/American pavers (1).jpg',
  },
  {
    title: 'Beverly Hills, CA',
    src: '/assets/real/thumbs/American pavers (10).jpg',
  },
  {
    title: 'Newport Beach, CA',
    src: '/assets/real/thumbs/American pavers (21).jpg',
  },
  {
    title: 'San Fernando Valley, CA',
    src: '/assets/real/thumbs/American pavers (33).jpg',
  },
  {
    title: 'Irvine, CA',
    src: '/assets/real/thumbs/American pavers (25).jpg',
  },
  {
    title: 'Encino, CA',
    src: '/assets/real/thumbs/American pavers (7).jpg',
  },
];

interface DrivewayCarouselSectionProps {
  title?: string;
  subtitle?: string;
  overline?: string;
  slides?: SlideData[];
}

export default function DrivewayCarouselSection({
  overline = 'Regional Project Gallery',
  title = 'Custom Driveway Paver Installations',
  subtitle = 'Explore authentic interlocking paver entrances designed and built across our primary Southern California service communities.',
  slides = drivewaySlides,
}: DrivewayCarouselSectionProps) {
  return (
    <section className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Estilo del Home sin borde, sin fondo, sin icono ni emojis */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
            {overline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A292C] font-serif-brand tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3D Interactive Carousel */}
        <div className="relative overflow-hidden w-full pb-20 pt-4">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
