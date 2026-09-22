import React from 'react';
import Image from 'next/image';
import { Users, Ruler, FileText, ShieldCheck, ArrowRight } from 'lucide-react';

const VALUES = [
  {
    icon: Users,
    title: 'Our own crews',
    description: 'No subcontractors. The people who quote the job are the people on site.',
  },
  {
    icon: Ruler,
    title: 'Base work first',
    description: 'We price excavation and compaction openly, because that is what outlives the surface.',
  },
  {
    icon: FileText,
    title: 'One fixed number',
    description: 'A written price with the base itemised. It does not move once the crew arrives.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed and insured',
    description: 'Bonded, insured, and permitted where the city requires it.',
  },
];

export default function Home2About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative bg-[#0E1719] text-white overflow-hidden scroll-mt-20 w-full max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/brand/photo-crew-laying-pavers.png"
          alt="American Pavers & Turf crew laying a paver driveway"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0E1719]/80" />
      </div>

      <div className="relative z-10">
        {/* Upper 2-Column Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-3">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              Eighteen years of Los Angeles ground.
            </h2>
            <p className="mt-5 text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
              We started as a two-man paving crew in the Valley and never moved off the tools. Today we install driveways, patios and turf across the county — still with our own people, still quoting the base work honestly.
            </p>
            <p className="mt-8 text-xs text-stone-400">
              Placeholder company history — send the real founding story for this section.
            </p>
          </div>

          {/* Right Column: Values Card */}
          <div className="lg:col-span-6 bg-[#0E1719]/75 backdrop-blur-md border border-white/15 rounded-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {VALUES.map((v) => {
                const IconComp = v.icon;
                return (
                  <div key={v.title} className="text-left">
                    <span className="text-[#4CC66E] mb-3 block">
                      <IconComp className="w-6 h-6" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lower Full-Width Green Action Bar */}
        <div className="bg-[#019934] text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-white" />
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                The crew that quotes your job is the crew that builds it.
              </h3>
            </div>

            <button
              type="button"
              onClick={() => scrollTo('quote-section')}
              className="w-full sm:w-auto justify-center px-7 py-3 bg-transparent hover:bg-white hover:text-[#019934] text-white font-bold text-xs uppercase tracking-wider rounded border-2 border-white transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer active:scale-98"
            >
              <span>Meet the crew</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
