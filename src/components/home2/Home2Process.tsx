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
  const railRef = useRef<HTMLOListElement>(null);
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [reached, setReached] = useState(1);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setProgress(1);
      setReached(PROCESS_STEPS.length);
      return;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rail = railRef.current;
      if (!rail) return;
      const r = rail.getBoundingClientRect();
      const line = window.innerHeight * 0.62;
      setProgress(Math.max(0, Math.min(1, (line - r.top) / (r.height || 1))));
      let count = 0;
      nodeRefs.current.forEach((el) => {
        if (el && el.getBoundingClientRect().top < line) {
          count += 1;
        }
      });
      setReached(Math.max(1, count));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-[#FAFAFA] text-stone-900 border-b border-stone-200 scroll-mt-20 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-2.5 sm:mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Four visits, no surprises.
          </h2>
        </div>

        {/* Process Timeline Rail Container: CSS-based responsive layout (zero horizontal overflow) */}
        <ol
          ref={railRef}
          className="relative list-none mx-auto max-w-[1060px] pl-14 sm:pl-20 min-[900px]:pl-0"
        >
          {/* Background Rail */}
          <span
            aria-hidden="true"
            className="absolute top-2.5 bottom-2.5 w-[2px] bg-stone-200 left-[23px] sm:left-[31px] min-[900px]:left-1/2 min-[900px]:-translate-x-1/2"
          />

          {/* Animated Filled Green Rail */}
          <span
            aria-hidden="true"
            style={{
              height: `calc((100% - 20px) * ${progress})`,
            }}
            className="absolute top-2.5 w-[2px] bg-[#019934] left-[23px] sm:left-[31px] min-[900px]:left-1/2 min-[900px]:-translate-x-1/2 transition-[height] duration-200 linear"
          />

          {PROCESS_STEPS.map((step, i) => {
            const on = i < reached;
            const isRight = i % 2 === 1;
            const isLast = i === PROCESS_STEPS.length - 1;
            const IconComp = step.icon;

            return (
              <li
                key={step.number}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                style={{
                  opacity: on ? 1 : 0.42,
                  transform: on ? 'none' : 'translateY(12px)',
                }}
                className={`relative transition-all duration-500 ease-out ${
                  isLast ? 'pb-0' : 'pb-12 sm:pb-18 min-[900px]:pb-24'
                }`}
              >
                {/* Desktop Alternating View (min-[900px]:grid) */}
                <div className="hidden min-[900px]:grid grid-cols-[1fr_128px_1fr] items-start">
                  {/* Left Column */}
                  <div>
                    {!isRight && (
                      <div className="text-right">
                        <div className="flex items-baseline gap-3 justify-end">
                          <span
                            className={`font-sans text-[13px] font-semibold tracking-[0.08em] shrink-0 ${
                              on ? 'text-[#019934]' : 'text-stone-400'
                            }`}
                          >
                            {step.number}
                          </span>
                          <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[35px] leading-[1.12] text-[#1A292C]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-base sm:text-lg lg:text-[21px] leading-[1.5] text-[#273C40] max-w-[460px] ml-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="relative flex justify-center">
                    <span
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10 border-2 ${
                        on
                          ? 'bg-[#019934] border-[#019934] text-white shadow-md'
                          : 'bg-[#FAFAFA] border-stone-300 text-stone-400'
                      }`}
                    >
                      <IconComp className="w-7 h-7 stroke-[1.5]" />
                    </span>
                  </div>

                  {/* Right Column */}
                  <div>
                    {isRight && (
                      <div className="text-left">
                        <div className="flex items-baseline gap-3 justify-start">
                          <span
                            className={`font-sans text-[13px] font-semibold tracking-[0.08em] shrink-0 ${
                              on ? 'text-[#019934]' : 'text-stone-400'
                            }`}
                          >
                            {step.number}
                          </span>
                          <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[35px] leading-[1.12] text-[#1A292C]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-base sm:text-lg lg:text-[21px] leading-[1.5] text-[#273C40] max-w-[460px]">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile & Tablet View (<900px: clean single column) */}
                <div className="min-[900px]:hidden text-left relative">
                  {/* Left Node Icon */}
                  <span
                    className={`absolute top-0 -left-14 sm:-left-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10 border-2 ${
                      on
                        ? 'bg-[#019934] border-[#019934] text-white shadow-md'
                        : 'bg-[#FAFAFA] border-stone-300 text-stone-400'
                    }`}
                  >
                    <IconComp className="w-5 h-5 sm:w-7 sm:h-7 stroke-[1.5]" />
                  </span>

                  {/* Content */}
                  <div>
                    <div className="flex items-baseline gap-2.5">
                      <span
                        className={`font-sans text-xs sm:text-[13px] font-semibold tracking-[0.08em] shrink-0 ${
                          on ? 'text-[#019934]' : 'text-stone-400'
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3 className="font-serif font-normal text-xl sm:text-2xl leading-tight text-[#1A292C]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#273C40]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
