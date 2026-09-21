import type { Metadata } from 'next';
import { getContactPage, getSiteSettings } from '@/sanity/queries';
import { buildMetadata } from '@/sanity/seoHelper';
import ContactPageClient from './ContactPageClient';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const [settings, contact] = await Promise.all([getSiteSettings(), getContactPage()]);
  return buildMetadata({
    seo: contact?.seo || settings?.seo,
    defaultTitle: 'Contact Us | American Pavers & Turf',
    defaultDescription:
      'Schedule a free in-home 3D design consultation and itemized estimate with Southern California’s premier paver and turf contractors.',
  });
}

export default async function ContactPage() {
  const contactData = await getContactPage();
  return <ContactPageClient contactData={contactData} />;
}
