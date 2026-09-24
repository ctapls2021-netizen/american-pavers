'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface StepItem {
  id: number;
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    id: 1,
    number: '1',
    title: 'Free Consultation at Your Home',
    description:
      'Our design expert will look over your yard, then sit down with you to discuss exactly what you’re looking for in your outdoor remodel.',
  },
  {
    id: 2,
    number: '2',
    title: 'Design- No Strings Attached',
    description:
      'We’ll craft a few personalized designs for your approval so you can see exactly how your space will transform. You\'ll see the design and a cost estimate the same day!',
  },
  {
    id: 3,
    number: '3',
    title: 'Installation!',
    description:
      'Then, we’ll bring your vision to life through professional installation using premium materials, all backed by our industry-leading warranties.',
  },
];

interface ProcessStepsProps {
  onOpenModal?: (service?: string) => void;
  badge?: string;
  heading?: string;
}

export default function ProcessSteps({
  onOpenModal,
  badge = 'How It Works',
  heading = 'Our 3-Step Process',
}: ProcessStepsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = stepsData.findIndex((item) => item.id === nodeId);
    const totalNodes = stepsData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setAutoRotate(true);
    } else {
      setExpandedId(id);
      setAutoRotate(false);
      centerViewOnNode(id);
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedId(null);
      setAutoRotate(true);
    }
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && isVisible) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.25) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, isVisible]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isMobile ? 165 : 285;
    const radian = (angle * Math.PI) / 180;

    const x = Number((radius * Math.cos(radian)).toFixed(2));
    const y = Number((radius * Math.sin(radian)).toFixed(2));

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Number(Math.max(0.6, Math.min(1, 0.6 + 0.4 * ((1 + Math.sin(radian)) / 2))).toFixed(3));

    return { x, y, angle, zIndex, opacity };
  };

  return (
    <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 bg-[#0B1113] text-white border-t border-b border-stone-800 overflow-hidden select-none">
      {/* Translucent Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/assets/real/process-bg.png"
          alt="American Pavers Process"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[#0B1113]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1113] via-transparent to-[#0B1113]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif-brand mt-2">
            {heading}
          </h2>
        </div>

        {/* Orbit Canvas Container */}
        <div
          ref={containerRef}
          onClick={handleContainerClick}
          className="relative w-full h-[560px] sm:h-[640px] lg:h-[680px] flex items-center justify-center cursor-default"
        >
          {/* Center Logo - Solo desaparece al abrir la tarjeta del step */}
          <div
            className={`relative flex items-center justify-center pointer-events-none z-10 transition-all duration-500 ease-in-out ${
              expandedId !== null
                ? 'opacity-0 scale-75 pointer-events-none'
                : 'opacity-100 scale-100'
            }`}
          >
            <img
              src="/assets/logos/logo-step.svg"
              alt="American Pavers & Turf"
              width={180}
              height={150}
              loading="lazy"
              decoding="async"
              className="w-28 sm:w-36 lg:w-40 h-auto object-contain"
            />
          </div>

          {/* Orbital Circle Ring (Línea más clara y visible) */}
          <div className="absolute w-[330px] h-[330px] sm:w-[570px] sm:h-[570px] rounded-full border border-white/35 sm:border-white/40 pointer-events-none" />

          {/* Orbiting Nodes */}
          <div
            ref={orbitRef}
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {stepsData.map((item, index) => {
              const position = calculateNodePosition(index, stepsData.length);
              const isExpanded = expandedId === item.id;

              const nodeStyle = {
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
              };

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-700 cursor-pointer flex flex-col items-center"
                  style={nodeStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  {/* Number Icon Box (Recuadro blanco y número en blanco) */}
                  <div
                    className={`
                      w-11 h-11 sm:w-13 sm:h-13 rounded-none flex items-center justify-center font-black text-sm sm:text-base transition-all duration-300 transform
                      ${
                        isExpanded
                          ? 'bg-[#019934] text-white border-2 border-white shadow-xl scale-110'
                          : 'bg-[#101719] text-white border-2 border-white/80 hover:border-white'
                      }
                    `}
                  >
                    {item.number}
                  </div>

                  {/* Step Title (Letras en blanco) */}
                  <div
                    className={`
                      absolute top-13 sm:top-15 whitespace-nowrap
                      text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 pointer-events-none text-center text-white
                      ${isExpanded ? 'scale-105 drop-shadow-md' : 'opacity-90 hover:opacity-100'}
                    `}
                  >
                    {item.title}
                  </div>

                  {/* Clean Descriptive Card when Opened with Entrance Animation */}
                  {isExpanded && (
                    <div
                      className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 w-[85vw] max-w-sm sm:max-w-md bg-[#101719]/95 backdrop-blur-2xl border-2 border-white/60 shadow-2xl p-6 rounded-none z-50 text-left animate-in fade-in zoom-in-95 duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white" />

                      <h3 className="text-base sm:text-lg font-extrabold text-white">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/90 mt-2.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
