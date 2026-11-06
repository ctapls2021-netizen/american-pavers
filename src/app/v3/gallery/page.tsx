import type { Metadata } from 'next';
import GalleryPageClientV2 from './GalleryPageClientV2';

export const metadata: Metadata = {
  title: 'Project Gallery (Design v2) | American Pavers & Turf',
  description:
    'Explore photos and videos of real paver and synthetic turf projects across California.',
};

export default function GalleryPageV2() {
  return <GalleryPageClientV2 />;
}
