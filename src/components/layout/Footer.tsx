import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { Phone, Mail, MapPin, ShieldCheck, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A292C] text-stone-300 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/logos/logo-white.svg"
                alt="American Pavers & Turf"
                width={163}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-11 sm:h-13 w-auto object-contain"
              />
            </Link>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              The benchmark in custom interlocking pavers, lush synthetic turf installations, and luxury outdoor living. Designed with architectural precision and guaranteed for a lifetime.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#019934]" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white font-bold">
                  {companyData.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#019934]" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#019934]" />
                <span>Serving {companyData.primaryServiceArea}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900/80 border border-stone-700/60 text-[11px] text-stone-300">
                <ShieldCheck className="w-4 h-4 text-[#019934] shrink-0" />
                <span>{companyData.licenseNumber}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-700/70 pb-2">
              Products & Systems
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#42e078] transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-700/70 pb-2">
              Service Areas
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {locationsData.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-[#42e078] transition-colors"
                  >
                    {loc.name}, {loc.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Trust */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-stone-700/70 pb-2">
              Customer Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/about" className="hover:text-[#42e078] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#42e078] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#42e078] transition-colors">
                  Gallery & Transformations
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-[#42e078] transition-colors">
                  0% Financing Options
                </Link>
              </li>
              <li>
                <span className="text-[#019934] font-semibold">
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
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-xs">
          <p>
            © {new Date().getFullYear()} {companyData.legalName}. All rights reserved. Licensed, Bonded & Fully Insured.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300">Privacy Policy</span>
            <span className="hover:text-stone-300">Terms of Service</span>
            <span className="hover:text-stone-300">Contractor Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
