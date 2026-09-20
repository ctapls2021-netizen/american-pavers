'use client';

import React, { useState, useRef, useId, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface SlideData {
  title: string;
  button?: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  total: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, total, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty('--x', `${x}px`);
      slideRef.current.style.setProperty('--y', `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = '1';
  };

  // Circular differential calculation to maintain symmetric balance on both sides at all times
  let diff = (index - current) % total;
  if (diff < -Math.floor(total / 2)) diff += total;
  if (diff > Math.floor(total / 2)) diff -= total;

  const isCurrent = diff === 0;
  const isAdjacent = Math.abs(diff) === 1;
  const isVisible = isCurrent || isAdjacent;

  const { src, title } = slide;

  return (
    <li
      ref={slideRef}
      className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end text-center text-white z-10 select-none cursor-pointer ${
        isVisible ? 'visible' : 'invisible pointer-events-none'
      }`}
      onClick={() => handleSlideClick(index)}
      onMouseMove={isCurrent ? handleMouseMove : undefined}
      onMouseLeave={isCurrent ? handleMouseLeave : undefined}
      style={{
        transform: `translateX(${diff * 108}%) ${
          isCurrent ? 'scale(1) rotateX(0deg)' : 'scale(0.92) rotateX(6deg)'
        }`,
        transition: isVisible
          ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease'
          : 'none',
        opacity: isCurrent ? 1 : isAdjacent ? 0.45 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        zIndex: isCurrent ? 30 : isAdjacent ? 20 : 10,
        transformOrigin: 'bottom',
      }}
    >
      {/* Slide Image Container with Radio Cero (rounded-none) and architectural subtle border */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#1A292C] rounded-none overflow-hidden transition-all duration-150 ease-out border border-stone-300/80 shadow-xl"
        style={{
          transform:
            isCurrent
              ? 'translate3d(calc(var(--x) / 28), calc(var(--y) / 28), 0)'
              : 'none',
        }}
      >
        <img
          className="absolute inset-0 w-[115%] h-[115%] object-cover transition-opacity duration-700 ease-in-out"
          style={{
            opacity: isCurrent ? 1 : 0.55,
          }}
          alt={title}
          src={src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />

        {/* Luxury contrast gradient for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A292C]/95 via-[#1A292C]/30 to-transparent pointer-events-none" />
        {isCurrent && (
          <div className="absolute inset-0 bg-black/15 transition-all duration-700 pointer-events-none" />
        )}
      </div>

      {/* Slide Content: Solo ciudad de cobertura y sin botón */}
      <article
        className={`relative p-6 sm:p-8 flex flex-col items-center justify-end pb-8 z-20 transition-opacity duration-500 ease-in-out ${
          isCurrent ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#42e078] mb-1.5 drop-shadow">
          Service Coverage Area
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif-brand tracking-tight drop-shadow-lg">
          {title}
        </h3>
      </article>
    </li>
  );
};

interface CarouselControlProps {
  type: 'previous' | 'next';
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      type="button"
      className="w-12 h-12 flex items-center justify-center bg-white hover:bg-[#019934] text-[#019934] hover:text-white border border-stone-300 hover:border-[#019934] transition-all rounded-none shadow-sm active:scale-95 cursor-pointer group"
      title={title}
      onClick={handleClick}
      aria-label={title}
    >
      {type === 'previous' ? (
        <ArrowLeft className="w-5 h-5 text-[#019934] group-hover:text-white transition-colors" />
      ) : (
        <ArrowRight className="w-5 h-5 text-[#019934] group-hover:text-white transition-colors" />
      )}
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 40) {
      handleNextClick();
    } else if (diffX < -40) {
      handlePreviousClick();
    }
    touchStartX.current = null;
  };

  const id = useId();

  return (
    <div
      className="relative w-[72vmin] max-w-[480px] h-[72vmin] max-h-[480px] mx-auto [perspective:1200px] [transform-style:preserve-3d]"
      aria-labelledby={`carousel-heading-${id}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="relative w-full h-full list-none p-0 m-0">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            total={slides.length}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* Navigation Controls: Radio Cero, brand styling */}
      <div className="absolute flex items-center justify-center gap-3 w-full top-[calc(100%+1.5rem)]">
        <CarouselControl
          type="previous"
          title="Previous Installation"
          handleClick={handlePreviousClick}
        />
        <div className="text-xs font-bold text-stone-500 uppercase tracking-wider px-3 select-none">
          {current + 1} / {slides.length}
        </div>
        <CarouselControl
          type="next"
          title="Next Installation"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Carousel;
