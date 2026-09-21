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
    image: '/assets/banners/banner-deck.webp',
    imageAlt: 'Luxury composite deck with ocean view and Adirondack lounge chairs',
  },
  {
    id: 'driveway-pavers',
    headline: 'Engineered Curb Appeal',
    subheading: 'Interlocking Paver Driveways Built to Outlast Poured Concrete',
    buttonText: 'EXPLORE DRIVEWAY PAVERS',
    serviceName: 'Driveway Pavers',
    href: '/services/driveway-pavers',
    image: '/assets/banners/banner-driveway.webp',
    imageAlt: 'High-strength interlocking paver driveway with custom border stones and estate landscaping',
  },
  {
    id: 'patio-pavers',
    headline: 'Outdoor Living Perfected',
    subheading: 'Custom Paver Patios Crafted for Year-Round California Entertaining',
    buttonText: 'EXPLORE PATIO PAVERS',
    serviceName: 'Patio Pavers',
    href: '/services/patio-pavers',
    image: '/assets/banners/banner-patio.webp',
    imageAlt: 'Spacious curved backyard patio paver installation with fire pit and stone seating',
  },
  {
    id: 'synthetic-turf',
    headline: 'Always Green. Zero Water.',
    subheading: 'Drought-Tolerant, Pet-Friendly Luxury Synthetic Turf & Putting Greens',
    buttonText: 'EXPLORE ARTIFICIAL TURF',
    serviceName: 'Synthetic Turf',
    href: '/services/synthetic-turf',
    image: '/assets/banners/banner-turf.webp',
    imageAlt: 'Lush green drought-tolerant artificial lawn with paver steps and landscape garden',
  },
  {
    id: 'pool-deck-pavers',
    headline: 'Resort-Style Pool Surrounds',
    subheading: 'Slip-Resistant, Cool-Touch Travertine & Interlocking Stone Coping',
    buttonText: 'EXPLORE POOL DECKS',
    serviceName: 'Pool Deck Pavers',
    href: '/services/pool-deck-pavers',
    image: '/assets/banners/banner-pool.webp',
    imageAlt: 'Luxury swimming pool surrounded by cool-touch non-slip stone pavers and natural waterfalls',
  },
  {
    id: 'outdoor-kitchens',
    headline: 'Gourmet Al Fresco Living',
    subheading: 'Custom Stainless BBQ Islands, Built-In Pizza Ovens & Gas Fire Pits',
    buttonText: 'EXPLORE OUTDOOR KITCHENS',
    serviceName: 'Outdoor Kitchens',
    href: '/services/outdoor-kitchens',
    image: '/assets/banners/banner-kitchen.webp',
    imageAlt: 'Custom outdoor kitchen suite with stainless steel grill and illuminated stone bar',
  },
];

interface ServiceBannerSliderProps {
  onOpenModal?: (service?: string) => void;
}

export default function ServiceBannerSlider({ onOpenModal }: ServiceBannerSliderProps) {
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

  // Autoplay timer (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
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

  // Preload all banner images into browser cache for instant high-res transitions
  useEffect(() => {
    serviceSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <section
      className="relative w-full h-[380px] sm:h-[440px] md:h-[490px] lg:h-[540px] overflow-hidden bg-stone-950 select-none"
      aria-label="Outdoor Living Services Showcase"
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
            {/* Background Image - Razor sharp 2560px WebP */}
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />

            {/* Subtle atmospheric vignette overlay for crisp readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {/* Centered Content Box */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 z-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] leading-tight max-w-4xl">
                {slide.headline}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-white/95 font-medium mt-2.5 sm:mt-3.5 drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] max-w-2xl">
                {slide.subheading}
              </p>

              <div className="mt-6 sm:mt-7 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenModal) {
                      onOpenModal(slide.serviceName);
                    } else {
                      window.location.href = slide.href;
                    }
                  }}
                  className="inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 bg-[#1A292C] hover:bg-[#019934] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-none transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
                >
                  <span>{slide.buttonText}</span>
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Circular Navigation Arrow - Left */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
      </button>

      {/* Circular Navigation Arrow - Right */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {serviceSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.serviceName}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
