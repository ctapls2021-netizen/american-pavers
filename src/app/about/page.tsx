import type { Metadata } from 'next';
import { getAboutPage, getSiteSettings } from '@/sanity/queries';
import { buildMetadata } from '@/sanity/seoHelper';
import AboutPageClient from './AboutPageClient';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const [settings, about] = await Promise.all([getSiteSettings(), getAboutPage()]);
  return buildMetadata({
    seo: about?.seo || settings?.seo,
    defaultTitle: 'About Us | American Pavers & Turf',
    defaultDescription:
      'Building enduring, high-load outdoor spaces with 10,000+ PSI engineered pavers and lush synthetic turf across Southern California since 2008.',
  });
}

export default async function AboutPage() {
  const aboutData = await getAboutPage();
  return <AboutPageClient aboutData={aboutData} />;
}
