import type { Metadata } from 'next';
import AboutPageClientV2 from './AboutPageClientV2';

export const metadata: Metadata = {
  title: 'About Us (Design v2) | American Pavers & Turf',
  description:
    'Learn about American Pavers & Turf. 28 years of master craftsmanship, civil engineering base compaction, and lifetime warranties across Southern California.',
};

export default function AboutPageV2() {
  return <AboutPageClientV2 />;
}
