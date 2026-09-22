import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import { companyData } from '@/data/company';

const COLS = [
  {
    title: 'PAVERS',
    links: ['Driveways', 'Patios & pool decks', 'Walkways', 'Retaining walls'],
  },
  {
    title: 'TURF',
    links: ['Front lawns', 'Backyards', 'Pet turf', 'Putting greens'],
  },
  {
    title: 'COMPANY',
    links: ['Our process', 'Our work', 'Service areas', 'Contact'],
  },
];

export default function Home2Footer() {
  return (
    <footer className="bg-[#0E1719] text-stone-400 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* 4 columns at >=1200px, 2 columns under 1200px, 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-10 lg:gap-12 text-left">
          {/* Col 1: Brand Info */}
          <div>
            <div className="relative w-52 h-10 mb-5">
              <Image
                src="/assets/brand/logo-horizontal-white.png"
                alt="American Pavers & Turf"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Paver and artificial turf installation across Los Angeles County. Licensed, bonded and insured.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-2 text-white font-semibold hover:text-[#4CC66E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4CC66E]" />
                <span>{companyData.formattedPhone}</span>
              </a>

              <a
                href="mailto:info@americanpaversturf.com"
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#4CC66E]" />
                <span>info@americanpaversturf.com</span>
              </a>

              <div className="flex items-center gap-2 text-stone-400">
                <Clock className="w-4 h-4 text-[#4CC66E]" />
                <span>Mon–Sat, 7am–6pm</span>
              </div>
            </div>
          </div>

          {/* Col 2, 3, 4: Link Columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#4CC66E] block mb-4">
                {col.title}
              </span>

              <ul className="space-y-2.5 text-sm text-stone-300">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal Line */}
      <div className="border-t border-stone-800/80 py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} American Pavers &amp; Turf. All Rights Reserved.</span>
          <span>California Licensed Contractor C-27 &amp; C-29 (CSLB #1087452). Fully Bonded &amp; Insured.</span>
        </div>
      </div>
    </footer>
  );
}
