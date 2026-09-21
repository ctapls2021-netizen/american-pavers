import type { Metadata } from 'next';
import { urlForImage } from './image';

interface SanitySeo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: any;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata({
  seo,
  defaultTitle,
  defaultDescription,
}: {
  seo?: SanitySeo;
  defaultTitle: string;
  defaultDescription: string;
}): Metadata {
  const title = seo?.metaTitle || defaultTitle;
  const description = seo?.metaDescription || defaultDescription;
  const ogImageUrl = seo?.ogImage?.asset ? urlForImage(seo.ogImage).width(1200).height(630).url() : undefined;

  return {
    title,
    description,
    keywords: seo?.keywords,
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title,
      description,
      ...(ogImageUrl ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
    },
  };
}
