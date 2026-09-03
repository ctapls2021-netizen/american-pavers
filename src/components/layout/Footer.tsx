import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { Phone, Mail, MapPin, ShieldCheck, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-700 flex items-center justify-center text-white shadow-md">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                {companyData.name}
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The nation’s benchmark for engineered interlocking concrete pavers, synthetic turf systems, and luxury outdoor entertainment environments. Transforming residential landscapes since 1992.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white font-bold">
                  {companyData.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Serving {companyData.primaryServiceArea}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-[11px] text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{companyData.licenseNumber}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Products & Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {locationsData.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {loc.name}, {loc.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Trust */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Customer Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/financing" className="hover:text-amber-400 transition-colors">
                  0% Financing Options
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">
                  Before & After Transformations
                </Link>
              </li>
              <li>
                <span className="text-amber-400 font-semibold">
                  25-Year Workmanship Warranty
                </span>
              </li>
              <li>
                <span>ICPI Certified Master Installers</span>
              </li>
              <li>
                <span>Free In-Home 3D Design Included</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-xs">
          <p>
            © {new Date().getFullYear()} {companyData.legalName}. All rights reserved. Licensed, Bonded & Fully Insured.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400">Privacy Policy</span>
            <span className="hover:text-stone-400">Terms of Service</span>
            <span className="hover:text-stone-400">Contractor Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
