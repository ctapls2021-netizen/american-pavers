import type { Metadata } from 'next';
import { getGalleryPage, getSiteSettings, getProjects } from '@/sanity/queries';
import { buildMetadata } from '@/sanity/seoHelper';
import GalleryPageClient from './GalleryPageClient';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const [settings, gallery] = await Promise.all([getSiteSettings(), getGalleryPage()]);
  return buildMetadata({
    seo: gallery?.seo || settings?.seo,
    defaultTitle: 'Masterpiece Installations Gallery | American Pavers & Turf',
    defaultDescription:
      'Explore genuine before & after transformations of paver driveways, patios, pool decks, and turf across Southern California.',
  });
}

export default async function GalleryPage() {
  const [galleryData, sanityProjects] = await Promise.all([getGalleryPage(), getProjects()]);
  return <GalleryPageClient galleryData={galleryData} sanityProjects={sanityProjects} />;
}
