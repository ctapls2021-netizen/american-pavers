import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locationsData } from '@/data/locations';
import { buildMetadata } from '@/sanity/seoHelper';
import { getLocations } from '@/sanity/queries';
import LocationPageClient from './LocationPageClient';

interface LocationPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const locations = await getLocations();
  const sanityLocation = locations?.find((l: any) => l.slug === city);
  const localLocation = locationsData.find((l) => l.slug === city);
  const location = sanityLocation || localLocation;

  if (!location) return { title: 'Location Not Found' };

  return buildMetadata({
    seo: location.seo,
    defaultTitle: location.metaTitle || `${location.name} | American Pavers & Turf`,
    defaultDescription: location.metaDescription || '',
  });
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { city } = await params;
  const location = locationsData.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  return <LocationPageClient location={location} />;
}
