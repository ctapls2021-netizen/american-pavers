'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

export interface ServiceSlide {
  id: string;
  headline: string;
  subheading: string;
  buttonText: string;
  serviceName: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const serviceSlides: ServiceSlide[] = [
  {
    id: 'decking-pergolas',
    headline: 'Elevated Outdoor Living',
    subheading: 'Composite Decking & Louvered Pergolas That Defy Expectations',
    buttonText: 'EXPLORE DECKS & PERGOLAS',
    serviceName: 'Composite Decks & Pergolas',
    href: '/services/decking-pergolas',
    image: '/assets/generated/pergola_premium.jpg',
    imageAlt: 'Luxury composite deck with ocean view and Adirondack lounge chairs',
  },
  {
    id: 'driveway-pavers',
    headline: 'Engineered Curb Appeal',
    subheading: 'Interlocking Paver Driveways Built to Outlast Poured Concrete',
    buttonText: 'EXPLORE DRIVEWAY PAVERS',
    serviceName: 'Driveway Pavers',
    href: '/services/driveway-pavers',
    image: '/assets/generated/driveway_premium.jpg',
    imageAlt: 'High-strength interlocking paver driveway with custom border stones and estate landscaping',
  },
  {
    id: 'patio-pavers',
    headline: 'Outdoor Living Perfected',
    subheading: 'Custom Paver Patios Crafted for Year-Round California Entertaining',
    buttonText: 'EXPLORE PATIO PAVERS',
    serviceName: 'Patio Pavers',
    href: '/services/patio-pavers',
    image: '/assets/generated/patio_premium.jpg',
    imageAlt: 'Spacious curved backyard patio paver installation with fire pit and stone seating',
  },
  {
    id: 'synthetic-turf',
    headline: 'Always Green. Zero Water.',
    subheading: 'Drought-Tolerant, Pet-Friendly Luxury Synthetic Turf & Putting Greens',
    buttonText: 'EXPLORE ARTIFICIAL TURF',
    serviceName: 'Synthetic Turf',
    href: '/services/synthetic-turf',
    image: '/assets/generated/turf_premium.jpg',
    imageAlt: 'Lush green drought-tolerant artificial lawn with paver steps and landscape garden',
  },
  {
    id: 'pool-deck-pavers',
    headline: 'Resort-Style Pool Surrounds',
    subheading: 'Slip-Resistant, Cool-Touch Travertine & Interlocking Stone Coping',
    buttonText: 'EXPLORE POOL DECKS',
    serviceName: 'Pool Deck Pavers',
    href: '/services/pool-deck-pavers',
    image: '/assets/generated/pool_premium.jpg',
    imageAlt: 'Luxury swimming pool surrounded by cool-touch non-slip stone pavers and natural waterfalls',
  },
  {
    id: 'outdoor-kitchens',
    headline: 'Gourmet Al Fresco Living',
    subheading: 'Custom Stainless BBQ Islands, Built-In Pizza Ovens & Gas Fire Pits',
    buttonText: 'EXPLORE OUTDOOR KITCHENS',
    serviceName: 'Outdoor Kitchens',
    href: '/services/outdoor-kitchens',
    image: '/assets/generated/kitchen_premium.jpg',
    imageAlt: 'Custom outdoor kitchen suite with stainless steel grill and illuminated stone bar',
  },
];

interface AltServiceBannerSliderProps {
  onOpenModal?: (service?: string) => void;
}

export default function AltServiceBannerSlider({ onOpenModal }: AltServiceBannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = serviceSlides.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay timer (6 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden bg-stone-950 select-none border-y border-stone-800"
      aria-label="Outdoor Living Spaces Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      {serviceSlides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Background Image */}
            {isActive ? (
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center scale-100 transition-transform duration-10000 ease-out"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            ) : null}

            {/* Kōzen Architectural Soft Vignette */}
            <div className="absolute inset-0 bg-[#1A292C]/55 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-stone-950/50 pointer-events-none" />

            {/* Centered Content Box with Kōzen Editorial Serenity */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 z-20">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#42e078] uppercase mb-3 sm:mb-4 block">
                SIGNATURE COLLECTION
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-tight max-w-4xl drop-shadow-sm">
                {slide.headline}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-stone-200 font-normal mt-3 sm:mt-4 max-w-2xl leading-relaxed">
                {slide.subheading}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenModal) {
                      onOpenModal(slide.serviceName);
                    } else {
                      window.location.href = slide.href;
                    }
                  }}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#019934] hover:bg-[#01802b] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl cursor-pointer group"
                >
                  <span className="whitespace-nowrap">{slide.buttonText}</span>
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Circular Minimal Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-[#1A292C]/80 hover:bg-[#1A292C] text-white border border-stone-600/60 backdrop-blur-sm flex items-center justify-center transition-all duration-200 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-[#1A292C]/80 hover:bg-[#1A292C] text-white border border-stone-600/60 backdrop-blur-sm flex items-center justify-center transition-all duration-200 cursor-pointer"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
      </button>

      {/* Bottom Minimal Indicator Bar */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {serviceSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.serviceName}`}
              className="py-2 px-1 flex items-center justify-center cursor-pointer"
            >
              <span
                className={`h-[2px] transition-all duration-500 block ${
                  isActive ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
