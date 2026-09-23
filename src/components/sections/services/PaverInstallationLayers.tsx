'use client';

import React from 'react';
import Image from 'next/image';

interface PaverInstallationLayersProps {
  onOpenModal?: () => void;
  title?: React.ReactNode;
}

export default function PaverInstallationLayers({
  title,
}: PaverInstallationLayersProps) {
  const displayTitle = title ?? (
    <>
      Installation <br /> You Can Trust
    </>
  );

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clean Editorial Text - No recuadros, no backgrounds */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A292C] tracking-tight font-serif-brand leading-tight">
              {displayTitle}
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              <p>
                Unlike crackable{' '}
                <span className="text-[#c05638] font-medium">concrete</span>,
                interlocking paving stones are designed to last for decades.
              </p>

              <p>
                Pavers can handle up to <strong className="text-stone-800 font-semibold">10,000+ PSI</strong> (compared to 2,500 – 3,500 PSI for concrete) to ensure cars, trucks, and RVs won&apos;t ruin your investment.
              </p>

              <p>
                Our exclusive{' '}
                <span className="text-[#019934] font-semibold">
                  American 5-Layer Precision Interlock System™
                </span>{' '}
                ensures longevity.
              </p>
            </div>
          </div>

          {/* Right Column: Floating 3D Image - No recuadro, no background, completely floating */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[16/11]">
              <Image
                src="/assets/diagrams/paver-installation-layers.jpg"
                alt="Installation You Can Trust - Concrete vs Interlocking Pavers 3D Cutaway"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
