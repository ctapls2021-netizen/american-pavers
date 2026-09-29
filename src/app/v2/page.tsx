import type { Metadata } from 'next';
import HomeV2Client from './HomeV2Client';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'American Pavers & Turf | Luxury Pavers, Turf & Outdoor Living (Design v2)',
  description:
    'Master hardscaping contractors specializing in luxury interlocking pavers, synthetic turf, outdoor kitchens, custom patios, driveways & 3D landscape architecture.',
};

export default function HomeV2Page() {
  return <HomeV2Client />;
}
