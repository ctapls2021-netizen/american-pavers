import React from 'react';
import { companyData } from '@/data/company';

export default function JsonLdSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': 'https://americanpaversturf.com/#organization',
        name: companyData.name,
        legalName: companyData.legalName,
        telephone: companyData.phone,
        email: companyData.email,
        priceRange: '$$$',
        openingHours: 'Mo-Sa 07:00-19:00',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
        description: companyData.tagline,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: companyData.averageRating.toString(),
          reviewCount: companyData.reviewCount.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Hardscape & Outdoor Living Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Driveway Interlocking Pavers',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Patio Pavers & Outdoor Living',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Synthetic Turf & Putting Greens',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
