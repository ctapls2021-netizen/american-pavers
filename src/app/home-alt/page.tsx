import type { Metadata } from 'next';
import HomeAltClient from './HomeAltClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'American Pavers & Turf | Luxury Pavers, Turf & Outdoor Living (Design Option B)',
  description:
    'Master hardscaping contractors specializing in luxury interlocking pavers, synthetic turf, outdoor kitchens, custom patios, driveways & 3D landscape architecture.',
};

export default function HomeAltPage() {
  return <HomeAltClient />;
}
