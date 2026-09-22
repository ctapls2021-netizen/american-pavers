import React from 'react';
import { companyData } from '@/data/company';

export default function LandingLegal() {
  return (
    <footer className="bg-[#0E1719] text-stone-400 py-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-left">
        <div>
          &copy; {new Date().getFullYear()} {companyData.name}. All Rights Reserved. CA CSLB Licensed Contractor.
        </div>

        <div className="flex items-center gap-4 text-stone-500 text-[11px]">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
          <span>•</span>
          <span>Do Not Sell My Information</span>
        </div>
      </div>
    </footer>
  );
}
