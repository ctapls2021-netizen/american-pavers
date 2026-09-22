'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Ruler, FileText, Hammer, ShieldCheck } from 'lucide-react';

const PROCESS_STEPS = [
  {
    number: '01',
    icon: Ruler,
    title: 'Site visit',
    description: 'We measure, check drainage and grade, and tell you what the base work will actually cost.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Design & fixed quote',
    description: 'Material samples, a layout plan, and one written price that does not move.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Demolition & base',
    description: 'The part nobody photographs. Excavation, compaction, and edge restraint.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Install & walkthrough',
    description: 'Laying, cutting, polymeric sand, and a walkthrough before the crew leaves.',
  },
];

export default function Home2Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.7) setActiveStep(1);
      if (rect.top < windowHeight * 0.5) setActiveStep(2);
      if (rect.top < windowHeight * 0.3) setActiveStep(3);
      if (rect.top < windowHeight * 0.1) setActiveStep(4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAFAFA] text-stone-900 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Four visits, no surprises.
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (Desktop center, mobile left) */}
          <div className="absolute top-8 bottom-8 left-6 md:left-1/2 w-0.5 bg-stone-200 -translate-x-1/2" />
          <div
            className="absolute top-8 left-6 md:left-1/2 w-0.5 bg-[#019934] -translate-x-1/2 transition-all duration-500 ease-out"
            style={{ height: `${((activeStep - 1) / 3) * 100}%` }}
          />

          <div className="space-y-12 sm:space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 1;
              const isCompleted = idx < activeStep;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                  }`}
                >
                  {/* Content Box (50% on desktop) */}
                  <div className="flex-1 pl-16 md:pl-0">
                    <div className="bg-white p-6 sm:p-7 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#019934] mb-1">
                        <span>Phase {step.number}</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#1A292C] font-normal">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon (Circle) */}
                  <div
                    className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                      isCompleted
                        ? 'bg-[#019934] border-[#019934] text-white shadow-md'
                        : 'bg-white border-stone-300 text-stone-400'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Empty spacer for desktop symmetry */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
