'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { companyData } from '@/data/company';
import { ChevronRight, Phone } from 'lucide-react';

interface DrivewayHeroLampProps {
  onOpenModal?: () => void;
}

export default function DrivewayHeroLamp({ onOpenModal }: DrivewayHeroLampProps) {
  return (
    <section className="relative overflow-hidden bg-[#1A292C] text-white">
      {/* 1. Real Authentic Paver Driveway Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/banners/banner-driveway.webp"
          alt="American Pavers & Turf Luxury Driveway Installation"
          className="w-full h-full object-cover object-center scale-105 brightness-[0.72] contrast-115 opacity-80"
          loading="eager"
        />
        {/* Calibrated dark overlay so the real driveway is vividly visible while keeping text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A292C]/85 via-[#1A292C]/50 to-[#1A292C]/95" />
      </div>

      {/* 2. Breadcrumbs Bar */}
      <div className="relative z-20 bg-[#0c1618]/60 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-400">Services</span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="font-bold text-[#42e078]">Driveway Pavers</span>
        </div>
      </div>

      {/* 3. Compact Lamp Beam over the Real Driveway Photo */}
      <LampContainer className="pt-8 pb-12 md:pb-14">

        {/* Illuminated Headline */}
        <motion.h1
          initial={{ opacity: 0.5, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-serif-brand leading-[1.14] max-w-4xl drop-shadow-md"
        >
          Engineered Driveway Pavers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-white to-[#42e078]">
            Built for a Lifetime
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4 text-center text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl leading-relaxed text-pretty drop-shadow-sm font-normal"
        >
          Transform cracked, stained concrete into an architectural masterpiece. High-density interlocking pavers engineered to withstand heavy RVs, seismic settling, and California heat without ever cracking.
        </motion.p>

        {/* CTA Buttons in Radio Cero (Single line, brand compliant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto"
        >
          {onOpenModal && (
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto whitespace-nowrap h-13 px-8 flex items-center justify-center gap-2 rounded-none font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#01802b] via-[#019934] to-[#019934] hover:brightness-110 shadow-2xl transition-all cursor-pointer"
            >
              <span className="whitespace-nowrap">Schedule Free 3D Driveway Design</span>
              <ChevronRight className="w-5 h-5 text-white/90 shrink-0" />
            </button>
          )}

          <a
            href={`tel:${companyData.phone}`}
            className="w-full sm:w-auto whitespace-nowrap h-13 px-7 flex items-center justify-center gap-2 rounded-none font-bold text-sm sm:text-base text-white border border-white/25 bg-black/30 hover:bg-black/50 backdrop-blur-md transition-all cursor-pointer shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#42e078] shrink-0" />
            <span className="whitespace-nowrap">Call {companyData.formattedPhone}</span>
          </a>
        </motion.div>
      </LampContainer>
    </section>
  );
}
