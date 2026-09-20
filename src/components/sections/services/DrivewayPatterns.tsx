'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, ChevronRight, Sparkles, Check } from 'lucide-react';

interface DrivewayPatternsProps {
  onOpenModal?: () => void;
}

const drivewayStyles = [
  {
    id: 'herringbone',
    name: '45° / 90° Herringbone Interlock',
    tagline: 'Maximum Mechanical Interlock for Heavy Vehicles & Turning Torque',
    image: 'https://images.ctfassets.net/zkpxzicsuxng/5HC0oZ5riLDLXm9FI4GzkI/e48f8a21579c6d6821f40448f2116636/driveway10.webp',
    description:
      'The gold standard for driveways. The zigzagging pattern distributes vehicle tire braking and turning forces in two directions across the stones, making it mathematically impossible for individual pavers to rotate or shift.',
    idealFor: 'High-traffic driveways, heavy SUVs, trucks, and multi-car parking areas.',
    features: ['Highest structural interlock', 'Zero lateral movement', 'Classic European aesthetic'],
    colors: ['Charcoal Slate', 'Tuscan Blend', 'Sierra Grey'],
  },
  {
    id: 'euro-cobble',
    name: 'Tumbled Euro Cobblestone',
    tagline: 'Old-World European Elegance with Textured Weathered Edges',
    image: 'https://images.unsplash.com/photo-1584463699039-b9b5fef798f4?auto=format&fit=crop&w=1200&q=80',
    description:
      'Featuring rounded, pillowed edges and antiqued textures that resemble centuries-old European villages. Its varied sizing creates visual interest while remaining extremely durable under heavy everyday use.',
    idealFor: 'Spanish Colonial, Mediterranean, Craftsman, and Traditional California architecture.',
    features: ['Weathered antique finish', 'Camouflages dust & tire tracks', 'Multi-size interlocking formats'],
    colors: ['Pecan Blend', 'Desert Buff', 'Victorian Smoke'],
  },
  {
    id: 'modern-planks',
    name: 'Contemporary Large-Format Planks',
    tagline: 'Clean Architectural Lines for Modern & Mid-Century Estates',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Elongated, linear slabs with micro-chamfered joints that produce ultra-sleek, continuous lines. Creates a dramatic, high-end look that expands the visual width of your front estate.',
    idealFor: 'Modern Contemporary, Mid-Century Modern, and Luxury Custom California Builds.',
    features: ['Minimalist micro-chamfer', 'Expansive aesthetic footprint', 'Smooth non-slip finish'],
    colors: ['Onyx Charcoal', 'Glacier White', 'Basalt Natural'],
  },
  {
    id: 'ashlar-slate',
    name: 'Ashlar Natural Slate Pattern',
    tagline: 'Multi-Dimensional Stone Layout with Rich Organic Textures',
    image: 'https://images.ctfassets.net/zkpxzicsuxng/1BbW6RXdex3dkz6PYPgVwW/902cfd606bef64f8f365603465d4ec75/driveway.webp',
    description:
      'A modular combination of 3 to 4 complementary square and rectangular stones laid in a seemingly random yet mathematically aligned pattern. Delivers the authentic appearance of natural quarried flagstone.',
    idealFor: 'Ranch, Craftsman, Hillside Estates, and Tuscan Villa properties.',
    features: ['Authentic natural stone cleft', 'Non-repetitive organic rhythm', 'Durable non-skid surface'],
    colors: ['Sedona Blend', 'Monte Carlo Slate', 'Coastal Tan'],
  },
];

export default function DrivewayPatterns({ onOpenModal }: DrivewayPatternsProps) {
  const [activeTab, setActiveTab] = useState(drivewayStyles[0].id);
  const current = drivewayStyles.find((s) => s.id === activeTab) || drivewayStyles[0];

  return (
    <section className="py-20 md:py-28 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-3">
            Curated Styles & Patterns
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
            Driveway Paver Patterns Engineered for Curb Appeal & Load Strength
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Every architectural style demands the right stone silhouette. Explore our most popular patterns, specifically engineered to resist vehicular shear force while elevating property value.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {drivewayStyles.map((style) => {
            const isActive = style.id === activeTab;
            return (
              <button
                key={style.id}
                type="button"
                onClick={() => setActiveTab(style.id)}
                className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold transition-all rounded-none cursor-pointer border ${
                  isActive
                    ? 'bg-[#1A292C] text-white border-[#1A292C] shadow-md'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {style.name.split(' (')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Pattern Showcase Card */}
        <div className="bg-stone-50 border border-stone-200 p-6 sm:p-10 rounded-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Image with Badge */}
          <div className="lg:col-span-6 relative overflow-hidden h-[300px] sm:h-[380px] border border-stone-200 shadow-sm">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A292C]/90 text-[#42e078] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              10,000+ PSI Rated
            </div>
          </div>

          {/* Right: Technical Details & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#019934] uppercase tracking-widest block">
                Pattern Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A292C] font-serif-brand mt-1">
                {current.name}
              </h3>
              <p className="text-sm font-semibold text-stone-600 mt-1">
                {current.tagline}
              </p>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>

            {/* Ideal For */}
            <div className="p-3.5 bg-white border border-stone-200 text-xs text-stone-700">
              <span className="font-bold text-stone-900">Best Suited For: </span>
              {current.idealFor}
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                  <div className="w-4 h-4 rounded-full bg-[#019934] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Color Blends */}
            <div className="pt-2">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">
                Available California Color Palettes:
              </span>
              <div className="flex flex-wrap gap-2">
                {current.colors.map((color, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 bg-white border border-stone-300 text-stone-800 text-xs font-medium"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {onOpenModal && (
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#019934] hover:bg-[#01802b] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Request Physical Stone Samples in 3D</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
