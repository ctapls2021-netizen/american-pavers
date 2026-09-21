import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { companyData } from '@/data/company';
import { getServiceBySlug } from '@/sanity/queries';
import ServicePageClient from './ServicePageClient';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const localService = servicesData.find((s) => s.slug === slug);
  const sanityService = await getServiceBySlug(slug);
  const service = sanityService || localService;

  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | ${companyData.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const localService = servicesData.find((s) => s.slug === slug);
  const sanityService = await getServiceBySlug(slug);

  if (!localService && !sanityService) {
    notFound();
  }

  // Merge Sanity live data with localService structure (features, materials, faqs)
  const mergedService = {
    ...(localService || {}),
    ...(sanityService || {}),
    title: sanityService?.title || localService?.title,
    shortTitle: sanityService?.shortTitle || localService?.shortTitle,
    tagline: sanityService?.tagline || localService?.tagline,
    description: sanityService?.description || localService?.description,
    startingPrice: sanityService?.startingPrice || localService?.startingPrice,
    benefits: sanityService?.benefits?.length ? sanityService.benefits : localService?.benefits,
  };

  return <ServicePageClient service={mergedService as any} />;
}
