'use client';

import React, { useState } from 'react';
import { companyData } from '@/data/company';
import { Shield, Sparkles, CheckCircle, ArrowRight, Award, Star } from 'lucide-react';

interface HeroWithFormProps {
  onOpenModal: (service?: string, zip?: string) => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  locationName?: string;
}

export default function HeroWithForm({
  onOpenModal,
  title,
  subtitle,
  locationName,
}: HeroWithFormProps) {
  const [selectedService, setSelectedService] = useState('Patio Pavers');
  const [zipCode, setZipCode] = useState('');

  const services = [
    'Patio Pavers',
    'Driveway Pavers',
    'Pool Deck Pavers',
    'Synthetic Turf',
    'Outdoor Kitchen',
    'Full Backyard Remodel',
  ];

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode || zipCode.length < 5) {
      alert('Please enter a valid 5-digit ZIP code.');
      return;
    }
    onOpenModal(selectedService, zipCode);
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-stone-950 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury outdoor patio and driveway pavers"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-xs">
              <Award className="w-4 h-4 text-amber-400" />
              <span>
                {locationName ? `#1 Rated Outdoor Living in ${locationName}` : `${companyData.projectsCompleted.toLocaleString()}+ Homes Transformed Since 1992`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {title || (
                <>
                  Never Replace <br />
                  <span className="text-amber-400">Cracked Concrete</span> Again.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-stone-200 font-normal max-w-2xl leading-relaxed">
              {subtitle ||
                'Upgrade to 10,000+ PSI interlocking pavers, resort-style patio living, and drought-proof synthetic turf. Designed in hyper-realistic 3D and installed with our transferable 25-Year Master Workmanship Warranty.'}
            </p>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-stone-200">25-Yr Transferable Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-stone-200">Free 3D Virtual Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-stone-200">0% APR Financing Available</span>
              </div>
            </div>

            {/* Social rating snippet */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-stone-300">
                <span className="font-bold text-white">{companyData.averageRating} Stars</span> based on over{' '}
                <span className="font-bold text-white">{companyData.reviewCount.toLocaleString()}+ verified reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Converting Quick Quote Box */}
          <div id="quote-form" className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-900 border border-white/20">
              <div className="border-b border-stone-200 pb-4 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                  Limited Availability
                </span>
                <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                  Get Your Free 3D Design & Price Estimate
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Includes full yard 3D modeling and custom material samples.
                </p>
              </div>

              <form onSubmit={handleQuickQuote} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-2">
                    1. What are you looking to transform?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        className={`p-2.5 rounded-lg text-xs font-bold border transition-all text-left cursor-pointer ${
                          selectedService === s
                            ? 'bg-amber-50 border-amber-600 text-amber-900 ring-2 ring-amber-600/30'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                    2. Enter Your Project ZIP Code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 5-Digit ZIP (e.g. 90210)"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-4 py-3 text-sm font-semibold text-stone-900 focus:bg-white focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden tracking-wider"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-extrabold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Claim $2,500 Rebate & Free Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    Zero Sales Pressure
                  </span>
                  <span>🔒 100% Privacy Protected</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
