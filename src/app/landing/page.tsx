import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Free Paver Driveway Estimate | American Pavers & Turf Los Angeles',
  description:
    'Free on-site estimate anywhere in Los Angeles County. Fixed written price, our own crews, six inches of compacted base, and a 12-year workmanship warranty.',
  openGraph: {
    title: 'A paver driveway, installed in one week. | American Pavers & Turf',
    description:
      'Fixed written price, our own crews, and a 12-year workmanship warranty across Los Angeles County.',
    images: ['/assets/brand/photo-driveway-herringbone.png'],
  },
};

export default function LandingPage() {
  return <LandingPageClient />;
}
