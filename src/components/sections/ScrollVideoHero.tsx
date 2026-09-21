'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { companyData } from '@/data/company';

export interface ScrollVideoHeroProps {
  videoSrc?: string;
  title?: string;
  tagline?: string;
  scrollHint?: string;
  scrubDistance?: number;
  onOpenConsultation?: () => void;
}

const DEFAULT_VIDEO = '/videos/hero-entrance.mp4?v=3';
const FALLBACK_VIDEO = '/videos/Camera_moving_toward_house_entrance_20260918154417.mp4?v=3';

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function ScrollVideoHero({
  videoSrc = DEFAULT_VIDEO,
  title = 'AMERICAN PAVERS & TURF',
  tagline = 'Luxury Custom Pavers, Artificial Turf & Outdoor Living',
  scrollHint = 'SCROLL TO ENTER',
  scrubDistance = 3000,
  onOpenConsultation,
}: ScrollVideoHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

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

    // Ensure DOM properties are set for scrub control in all browsers
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const onLoadedData = () => {
      duration = video.duration || 0;
      if (video.currentTime === 0) {
        video.currentTime = 0.01;
      }
    };
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('loadedmetadata', onLoadedData);

    if (video.readyState >= 1) {
      onLoadedData();
    }

    // Safely kickstart frame buffer without leaving video playing (desktop only to prevent mobile network starvation)
    const kickstartLoad = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) return;
      const p = video.play();
      if (p && typeof p.then === 'function') {
        p.then(() => {
          video.pause();
          video.currentTime = 0.01;
        }).catch(() => {
          video.pause();
          video.currentTime = 0.01;
        });
      } else {
        video.pause();
        video.currentTime = 0.01;
      }
    };
    kickstartLoad();

    let lastSeekTime = -1;

    const onSeeked = () => {
      isSeeking = false;
      if (pendingTime !== null && video) {
        const t = pendingTime;
        pendingTime = null;
        seekTo(t);
      }
    };
    video.addEventListener('seeked', onSeeked);

    function seekTo(t: number) {
      if (!video || video.readyState < 1) return;
      if (isSeeking) {
        pendingTime = t;
        return;
      }
      if (Math.abs(t - lastSeekTime) < 0.015) {
        return;
      }
      isSeeking = true;
      lastSeekTime = t;
      try {
        if (typeof (video as any).fastSeek === 'function') {
          (video as any).fastSeek(t);
        } else {
          video.currentTime = t;
        }
      } catch {
        video.currentTime = t;
      }
    }

    function lockScroll() {
      if (locked || typeof document === 'undefined') return;
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

    function unlockScroll() {
      if (!locked || typeof document === 'undefined') return;
      locked = false;
      setIsUnlocked(true);
      const y = lockedScrollY;
      const b = document.body.style;
      b.position = '';
      b.top = '';
      b.left = '';
      b.right = '';
      b.width = '';
      b.height = '';
      b.overscrollBehavior = '';
      window.scrollTo(0, y);
    }

    // Engage lock on top position (desktop only for smooth scrolling on mobile)
    if (window.scrollY < 20 && (typeof window !== 'undefined' && window.innerWidth >= 768)) {
      lockScroll();
    } else {
      setIsUnlocked(true);
    }

    function addDelta(deltaY: number) {
      if (!locked) {
        // Re-lock if user scrolls back to the very top
        if (window.scrollY <= 5 && deltaY < 0) {
          lockScroll();
          targetProgress = 1;
          currentProgress = 1;
          return true;
        }
        return false;
      }

      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
      targetProgress = next;
      if (targetProgress > 0.001) hasStartedScrolling = true;

      // When the scrub finishes and user continues scrolling, unlock smoothly
      if (targetProgress >= 0.99 && deltaY > 0) {
        unlockScroll();
        window.scrollBy({ top: 120, behavior: 'smooth' });
      }

      return true;
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        addDelta(e.deltaY);
        e.preventDefault();
      } else if (window.scrollY <= 5 && e.deltaY < -10) {
        addDelta(e.deltaY);
        e.preventDefault();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!locked && window.scrollY > 5) return;
      const y = e.touches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - y;
      touchStartY = y;
      const handled = addDelta(deltaY);
      if (handled && locked) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    section.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    section.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });

    // Animation frame loop driven purely by scroll progress
    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.25;
      if (Math.abs(targetProgress - currentProgress) < 0.0003) {
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
        const t = 1 - clamp(currentProgress / 0.30, 0, 1);
        titleRef.current.style.opacity = String(t);
        titleRef.current.style.transform = `translateY(${(1 - t) * -25}px)`;
        titleRef.current.style.pointerEvents = t > 0.5 ? 'auto' : 'none';
      }

      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? '0' : '1';
      }

      if (taglineRef.current) {
        const t = clamp((currentProgress - 0.70) / 0.25, 0, 1);
        taglineRef.current.style.opacity = String(t);
        taglineRef.current.style.transform = `translateY(${(1 - t) * 20}px)`;
        taglineRef.current.style.pointerEvents = t > 0.5 ? 'auto' : 'none';
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('loadedmetadata', onLoadedData);
      video.removeEventListener('seeked', onSeeked);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      section.removeEventListener('touchstart', onTouchStart, true);
      section.removeEventListener('touchmove', onTouchMove, true);
      cancelAnimationFrame(rafId);
      unlockScroll();
    };
  }, [scrubDistance, isDesktop]);

  const handleSkipToContent = () => {
    const nextSection = document.getElementById('services-grid');
    if (nextSection) {
      const b = document.body.style;
      b.position = '';
      b.top = '';
      b.left = '';
      b.right = '';
      b.width = '';
      b.height = '';
      b.overscrollBehavior = '';
      setIsUnlocked(true);
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden select-none bg-stone-950 md:touch-none"
    >
      {/* Instant LCP Responsive Poster Image (37KB on mobile vs full-res on desktop) */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source
          media="(min-width: 769px)"
          srcSet="/assets/banners/banner-driveway.webp"
          type="image/webp"
        />
        <img
          src="/assets/banners/banner-driveway-mobile.webp"
          alt="American Pavers & Turf Hero"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Background Scrubbed Video — Rendered ONLY on desktop to eliminate 4MB mobile data download */}
      {isDesktop && (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          poster="/assets/banners/banner-driveway.webp"
          className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={FALLBACK_VIDEO} type="video/mp4" />
        </video>
      )}

      {/* Atmospheric Contrast Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/20 to-stone-950/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,15,18,0.55)_100%)] pointer-events-none" />

      {/* Initial Hero Title (Visible on load) */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
        style={{ pointerEvents: 'auto' }}
      >
        <h1
          className="text-white font-extrabold tracking-tight drop-shadow-2xl max-w-5xl"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
        <p className="mt-4 text-white/90 font-medium text-base sm:text-lg max-w-xl drop-shadow-md">
          Transforming residential architecture with custom interlocking pavers and lush synthetic turf.
        </p>

        {/* Action Buttons on Initial Load */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none pointer-events-auto">
          <button
            onClick={onOpenConsultation || handleSkipToContent}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Free 3D Design & Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleSkipToContent}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-stone-900/80 hover:bg-stone-900 border border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base shadow-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore All Services</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Secondary Tagline (Reveals smoothly during scroll) */}
      <div
        ref={taglineRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 opacity-0 z-10"
        style={{ pointerEvents: 'none' }}
      >
        <span className="text-[#42e078] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 drop-shadow">
          Elevate Your Lifestyle
        </span>
        <h2
          className="text-white font-extrabold drop-shadow-2xl max-w-4xl"
          style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
            lineHeight: 1.2,
          }}
        >
          {tagline}
        </h2>
        <p className="mt-3 text-stone-200 text-sm sm:text-base max-w-2xl font-normal drop-shadow">
          Engineered for enduring strength, water conservation, and curb appeal.
        </p>

        {/* Action Buttons at Door Entrance */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none pointer-events-auto">
          <button
            onClick={onOpenConsultation || handleSkipToContent}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Free 3D Design & Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleSkipToContent}
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-stone-900/80 hover:bg-stone-900 border border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base shadow-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore All Services</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={hintRef}
        onClick={handleSkipToContent}
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-opacity duration-300 cursor-pointer z-10 text-[11px] font-bold tracking-[0.25em] drop-shadow-md"
      >
        <span>{scrollHint}</span>
        <ChevronDown className="w-5 h-5 text-[#42e078] animate-bounce" />
      </div>

      {/* Scrubbing Progress Bar */}
      <div className="absolute left-0 right-0 bottom-0 h-1.5 bg-white/10 z-30">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-[#019934] to-[#42e078] origin-left scale-x-0 transition-transform duration-75"
        />
      </div>
    </div>
  );
}
