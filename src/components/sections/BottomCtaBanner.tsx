import React from 'react';
import { companyData } from '@/data/company';
import { Phone, Sparkles, ShieldCheck } from 'lucide-react';

interface BottomCtaBannerProps {
  onOpenModal: () => void;
}

export default function BottomCtaBanner({ onOpenModal }: BottomCtaBannerProps) {
  return (
    <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-stone-800">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-stone-900/40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-amber-600/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          Transform Your Property This Season
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to See Your Yard in 3D Before You Build?
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Book your complimentary in-home design consultation. One of our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed estimate.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>Schedule Free 3D Consultation</span>
          </button>

          <a
            href={`tel:${companyData.phone}`}
            className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call {companyData.formattedPhone}</span>
          </a>
        </div>

        <p className="text-xs text-stone-400 pt-3 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          No pressure guarantee. 25-Year transferable warranty on all installations.
        </p>
      </div>
    </section>
  );
}
