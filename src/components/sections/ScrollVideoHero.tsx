'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ReviewLogoMarquee from '@/components/ui/ReviewLogoMarquee';

export interface ScrollVideoHeroProps {
  videoSrc?: string;
  title?: string;
  tagline?: string;
  scrollHint?: string;
  scrubDistance?: number;
  onOpenConsultation?: () => void;
}

const DEFAULT_VIDEO = '/videos/hero-american-pavers.mp4';

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function ScrollVideoHero({
  videoSrc = DEFAULT_VIDEO,
  title = 'AMERICAN PAVERS & TURF',
  tagline = 'Luxury Custom Pavers, Artificial Turf & Outdoor Living',
  scrollHint = 'SCROLL TO ENTER',
  scrubDistance = 4200,
  onOpenConsultation,
}: ScrollVideoHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 768);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let duration = 0;
    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let hasStartedScrolling = false;
    let isSeeking = false;
    let pendingTime: number | null = null;
    let locked = false;
    let lockedScrollY = 0;
    let touchStartY = 0;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const onLoadedData = () => {
      duration = video.duration || 0;
      setReady(true);
    };
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('loadedmetadata', onLoadedData);
    if (video.readyState >= 1) onLoadedData();

    // Kickstart load for mobile and modern browsers
    const kickstartLoad = () => {
      const p = video.play();
      if (p && typeof p.then === 'function') {
        p.then(() => video.pause()).catch(() => {});
      } else {
        video.pause();
      }
    };
    kickstartLoad();

    const onSeeked = () => {
      isSeeking = false;
      if (pendingTime !== null && videoRef.current) {
        const t = pendingTime;
        pendingTime = null;
        if (Math.abs(t - videoRef.current.currentTime) > 0.005) {
          isSeeking = true;
          videoRef.current.currentTime = t;
        }
      }
    };
    video.addEventListener('seeked', onSeeked);

    function seekTo(t: number) {
      if (isSeeking) {
        pendingTime = t;
        return;
      }
      if (videoRef.current && Math.abs(t - videoRef.current.currentTime) <= 0.005) {
        return;
      }
      isSeeking = true;
      if (videoRef.current) {
        videoRef.current.currentTime = t;
      }
    }

    let unlockedDirection: 'down' | 'up' | null = null;
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

    function engageLock() {
      if (locked || typeof document === 'undefined') return;
      if (window.innerWidth < 768) {
        setIsUnlocked(true);
        return;
      }
      locked = true;
      setIsUnlocked(false);
      lockedScrollY = window.scrollY;
      const b = document.body.style;
      b.position = 'fixed';
      b.top = `-${lockedScrollY}px`;
      b.left = '0';
      b.right = '0';
      b.width = '100%';
      b.height = '100%';
      b.overscrollBehavior = 'none';
    }

    function releaseLock(direction?: 'down' | 'up') {
      if (!locked || typeof document === 'undefined') return;
      locked = false;
      setIsUnlocked(true);
      if (direction) unlockedDirection = direction;
      
      const y = lockedScrollY;
      const b = document.body.style;
      b.position = '';
      b.top = '';
      b.left = '';
      b.right = '';
      b.width = '';
      b.height = '';
      b.overscrollBehavior = '';
      
      window.scrollTo({ top: y, behavior: 'instant' });
    }

    // Lock immediately if at top on mount
    if (window.scrollY <= 5) {
      engageLock();
    }



    function addDelta(deltaY: number) {
      if (!locked) return false;

      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
      targetProgress = next;

      if (targetProgress > 0.001) hasStartedScrolling = true;

      if (targetProgress >= 0.999 && deltaY > 0) {
        releaseLock('down');
        window.scrollBy({ top: 120, behavior: 'smooth' });
      } else if (targetProgress <= 0.001 && deltaY < 0) {
        if (lockedScrollY > 5) {
          releaseLock('up');
          window.scrollBy({ top: -120, behavior: 'smooth' });
        }
      }

      return true;
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        addDelta(e.deltaY);
        e.preventDefault();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (locked) {
        const y = e.touches[0]?.clientY ?? touchStartY;
        const deltaY = touchStartY - y;
        touchStartY = y;
        addDelta(deltaY);
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    section.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    section.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });

    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.28;
      if (Math.abs(targetProgress - currentProgress) < 0.0002) {
        currentProgress = targetProgress;
      }

      if (duration > 0) {
        seekTo(currentProgress * duration);
      }

      if (videoRef.current) {
        const scale = 1 + currentProgress * 0.06;
        videoRef.current.style.transform = `scale(${scale})`;
      }

      if (titleRef.current) {
        let opacity = 0;
        let translateY = 0;
        let scale = 1;
        let blur = 0;

        if (currentProgress <= 0.35) {
          const t = 1 - currentProgress / 0.35;
          opacity = t;
          translateY = (1 - t) * -20;
          scale = 0.97 + t * 0.03;
          blur = (1 - t) * 6;
        } else if (currentProgress >= 0.70) {
          const t = (currentProgress - 0.70) / 0.30;
          opacity = t;
          translateY = (1 - t) * 20;
          scale = 0.97 + t * 0.03;
          blur = (1 - t) * 6;
        }

        titleRef.current.style.opacity = String(opacity);
        titleRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
        titleRef.current.style.filter = blur > 0.1 ? `blur(${blur}px)` : 'none';
        titleRef.current.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
      }

      // Hint chevron stays always visible — no opacity control here

      // Soft scrim overlay fades from 0.45 → 0 with a smooth quadratic curve
      if (overlayRef.current) {
        // (1 - x)^2 creates a smoother drop-off than linear (1 - x)
        const smoothFade = Math.pow(1 - currentProgress, 2);
        overlayRef.current.style.opacity = String(0.45 * smoothFade);
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    const skipHandler = () => {
      const nextSection = document.getElementById('services-grid');
      if (nextSection) {
        releaseLock('down');
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const hintEl = hintRef.current;

    if (hintEl) hintEl.addEventListener('click', skipHandler);
    window.addEventListener('hero-skip', skipHandler);

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('loadedmetadata', onLoadedData);
      video.removeEventListener('seeked', onSeeked);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('hero-skip', skipHandler);
      section.removeEventListener('touchstart', onTouchStart, true);
      section.removeEventListener('touchmove', onTouchMove, true);
      if (hintEl) hintEl.removeEventListener('click', skipHandler);
      cancelAnimationFrame(rafId);
      releaseLock();
    };
  }, [scrubDistance, isDesktop]);

  const triggerSkip = () => {
    const nextSection = document.getElementById('services-grid');
    if (nextSection) {
      // Allow regular smooth scrolling
      nextSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch an event so the internal lock logic can clean up
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('hero-skip'));
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden select-none bg-stone-950 md:touch-none"
    >
      {/* Mobile poster */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none md:hidden">
        <source
          media="(min-width: 769px)"
          srcSet="/assets/generated/driveway_premium.jpg"
          type="image/webp"
        />
        <img
          src="/assets/banners/banner-driveway-mobile.webp"
          alt="American Pavers & Turf Hero"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Background Scrubbed Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: ready ? 1 : 0,
          transformOrigin: 'center center',
          willChange: 'transform',
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Atmospheric Contrast Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/20 to-stone-950/75 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,15,18,0.55)_100%)] pointer-events-none z-[1]" />
      {/* Soft legibility scrim — fades out progressively as user scrolls */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none z-[2]"
        style={{ opacity: 0.45, transition: 'opacity 0.5s ease-out', willChange: 'opacity' }}
      />

      {/* Initial Hero Title (Visible on load) */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[10] mt-12 sm:mt-8"
        style={{ pointerEvents: 'auto', willChange: 'transform, filter, opacity' }}
      >
        <span className="text-[#4CC66E] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-5 drop-shadow-md">
          Los Angeles · Pavers & turf
        </span>
        <h1
          className="text-white font-serif font-normal tracking-tight drop-shadow-2xl max-w-4xl"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
          }}
        >
          Luxury remodeling designed around your lifestyle.
        </h1>
        <p className="mt-5 text-stone-200 font-medium text-base sm:text-lg max-w-2xl drop-shadow-md">
          We design and install paver driveways, patios and artificial turf lawns across Los Angeles County. One crew, one warranty, and the base work done properly underneath.
        </p>

        {/* Action Buttons on Initial Load */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none pointer-events-auto">
          <button
            onClick={onOpenConsultation || triggerSkip}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase"
          >
            <span>GET A FREE QUOTE</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={triggerSkip}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-stone-900/80 hover:bg-stone-900 border border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base shadow-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase"
          >
            <span>SEE OUR WORK</span>
          </button>
        </div>

        {/* Verified Review Platforms Marquee: Google, Yelp, BuildZoom, Houzz */}
        <div className="mt-10 sm:mt-14 w-full max-w-4xl mx-auto pointer-events-auto">
          <ReviewLogoMarquee />
        </div>
      </div>

      {/* Scroll Down Indicator — always visible, above everything */}
      <div
        ref={hintRef}
        style={{ opacity: 1 }}
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center justify-center p-3 text-white hover:text-white cursor-pointer z-[50] drop-shadow-md"
      >
        <ChevronDown className="w-10 h-10 text-[#42e078] animate-bounce drop-shadow-lg" />
      </div>

      
      {/* Scrubbing Progress Bar */}
      <div className="absolute left-0 right-0 bottom-0 h-1.5 bg-white/10 z-30">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-[#019934] to-[#42e078] origin-left scale-x-0"
        />
      </div>
    </div>
  );
}

