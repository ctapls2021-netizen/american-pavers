import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locationsData } from '@/data/locations';
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
  const location = locationsData.find((l) => l.slug === city);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { city } = await params;
  const location = locationsData.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  return <LocationPageClient location={location} />;
}
