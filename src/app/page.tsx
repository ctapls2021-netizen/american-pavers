import type { Metadata } from 'next';
import { getSiteSettings, getHomePage, getServices, getProjects, getTestimonials } from '@/sanity/queries';
import { buildMetadata } from '@/sanity/seoHelper';
import HomePageClient from './HomePageClient';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const [settings, home] = await Promise.all([getSiteSettings(), getHomePage()]);
  return buildMetadata({
    seo: home?.seo || settings?.seo,
    defaultTitle: 'American Pavers & Turf | Luxury Pavers, Artificial Turf & Outdoor Living',
    defaultDescription:
      'Master contractors specializing in luxury interlocking pavers, synthetic turf, outdoor kitchens, patio design, driveways & hardscaping. Free 3D design consultation.',
  });
}

export default async function HomePage() {
  const [sanitySettings, sanityHomePage, sanityServices, sanityProjects, sanityTestimonials] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getServices(),
    getProjects(),
    getTestimonials(),
  ]);

  return (
    <HomePageClient
      sanitySettings={sanitySettings}
      sanityHomePage={sanityHomePage}
      sanityServices={sanityServices}
      sanityProjects={sanityProjects}
      sanityTestimonials={sanityTestimonials}
    />
  );
}
