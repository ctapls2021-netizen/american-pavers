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

const NODE = 64;

export default function Home2Process() {
  const railRef = useRef<HTMLOListElement>(null);
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [reached, setReached] = useState(1);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)');
    const handleMq = (e: MediaQueryListEvent) => setNarrow(e.matches);
    setNarrow(mq.matches);
    mq.addEventListener('change', handleMq);
    return () => mq.removeEventListener('change', handleMq);
  }, []);

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

  const alt = !narrow;
  const railPos = alt ? 'calc(50% - 1px)' : '31px';

  const renderNode = (step: typeof PROCESS_STEPS[0], on: boolean) => {
    const IconComp = step.icon;
    return (
      <span
        style={{
          width: NODE,
          height: NODE,
          left: alt ? `calc(50% - ${NODE / 2}px)` : 0,
        }}
        className={`absolute top-0 rounded-full flex items-center justify-center transition-all duration-300 z-10 border-2 ${
          on
            ? 'bg-[#019934] border-[#019934] text-white shadow-md'
            : 'bg-[#FAFAFA] border-stone-300 text-stone-400'
        }`}
      >
        <IconComp className="w-7 h-7 stroke-[1.5]" />
      </span>
    );
  };

  const renderBody = (step: typeof PROCESS_STEPS[0], on: boolean, isRight: boolean) => (
    <div className={alt && !isRight ? 'text-right' : 'text-left'}>
      {/* Step Number + Title Row */}
      <div
        className={`flex items-baseline gap-3 ${
          alt && !isRight ? 'justify-end' : 'justify-start'
        }`}
      >
        <span
          className={`font-sans text-[13px] font-semibold tracking-[0.08em] shrink-0 transition-colors duration-300 ${
            on ? 'text-[#019934]' : 'text-stone-400'
          }`}
        >
          {step.number}
        </span>
        <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-[35px] leading-[1.12] text-[#1A292C]">
          {step.title}
        </h3>
      </div>

      {/* Description Paragraph */}
      <p
        className={`mt-4 text-base sm:text-lg lg:text-[21px] leading-[1.5] text-[#273C40] max-w-[460px] ${
          alt && !isRight ? 'ml-auto' : ''
        }`}
      >
        {step.description}
      </p>
    </div>
  );

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAFAFA] text-stone-900 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#019934] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A292C] tracking-tight leading-tight">
            Four visits, no surprises.
          </h2>
        </div>

        {/* Process Timeline Rail Container */}
        <ol
          ref={railRef}
          style={{
            maxWidth: 1060,
            paddingLeft: alt ? 0 : `${NODE + 24}px`,
          }}
          className="relative list-none mx-auto"
        >
          {/* Background Rail */}
          <span
            aria-hidden="true"
            style={{ left: railPos }}
            className="absolute top-2.5 bottom-2.5 w-[2px] bg-stone-200"
          />

          {/* Animated Filled Green Rail */}
          <span
            aria-hidden="true"
            style={{
              left: railPos,
              height: `calc((100% - 20px) * ${progress})`,
            }}
            className="absolute top-2.5 w-[2px] bg-[#019934] transition-[height] duration-200 linear"
          />

          {PROCESS_STEPS.map((step, i) => {
            const on = i < reached;
            const isRight = i % 2 === 1;
            const isLast = i === PROCESS_STEPS.length - 1;

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
                className={`relative transition-all duration-500 ease-out ${isLast ? 'pb-0' : 'pb-20 sm:pb-24'}`}
              >
                {alt ? (
                  <div
                    style={{
                      gridTemplateColumns: `1fr ${NODE + 64}px 1fr`,
                    }}
                    className="grid items-start"
                  >
                    <div>{!isRight && renderBody(step, on, false)}</div>
                    <div className="relative">{renderNode(step, on)}</div>
                    <div>{isRight && renderBody(step, on, true)}</div>
                  </div>
                ) : (
                  <>
                    <span
                      style={{
                        left: `calc(-1 * ${NODE + 24}px)`,
                      }}
                      className="absolute top-0 block"
                    >
                      {renderNode(step, on)}
                    </span>
                    {renderBody(step, on, true)}
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
