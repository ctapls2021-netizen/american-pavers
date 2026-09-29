import type { Metadata } from 'next';
import GalleryPageClientV2 from './GalleryPageClientV2';

export const metadata: Metadata = {
  title: 'Project Gallery (Design v2) | American Pavers & Turf',
  description:
    'Browse our California portfolio of custom interlocking paver driveways, luxury patios, resort pool decks, synthetic turf lawns, and gourmet outdoor kitchens.',
};

export default function GalleryPageV2() {
  return <GalleryPageClientV2 />;
}
