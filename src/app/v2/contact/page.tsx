import type { Metadata } from 'next';
import ContactPageClientV2 from './ContactPageClientV2';

export const metadata: Metadata = {
  title: 'Contact Us & Free 3D Estimate (Design v2) | American Pavers & Turf',
  description:
    'Schedule your complimentary in-home 3D design consultation with a licensed California hardscape architect. Exact laser measurements, 3D renderings, and transparent pricing.',
};

export default function ContactPageV2() {
  return <ContactPageClientV2 />;
}
