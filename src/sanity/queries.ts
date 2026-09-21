import { groq } from 'next-sanity';
import { client } from './client';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0]
`;

export const financingPageQuery = groq`
  *[_type == "financingPage"][0]
`;

export const galleryPageQuery = groq`
  *[_type == "galleryPage"][0]
`;

export const locationsQuery = groq`
  *[_type == "location"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    county,
    metaTitle,
    metaDescription,
    heroImage,
    projectsCompleted,
    localOfficeAddress,
    highlightNeighborhoods,
    zipCodes
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc, _createdAt desc) {
    _id,
    title,
    shortTitle,
    "slug": slug.current,
    tagline,
    description,
    heroImage,
    startingPrice,
    benefits,
    order
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    city,
    category,
    beforeImage,
    afterImage,
    description
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    author,
    city,
    projectType,
    rating,
    date,
    quote,
    verified
  }
`;

export async function getSiteSettings() {
  try {
    return await client.fetch(siteSettingsQuery);
  } catch (err) {
    console.warn('[Sanity] Error fetching siteSettings, using fallback:', err);
    return null;
  }
}

export async function getHomePage() {
  try {
    return await client.fetch(homePageQuery);
  } catch (err) {
    console.warn('[Sanity] Error fetching homePage, using fallback:', err);
    return null;
  }
}

export async function getServices() {
  try {
    const data = await client.fetch(servicesQuery);
    return data && data.length > 0 ? data : null;
  } catch (err) {
    console.warn('[Sanity] Error fetching services, using fallback:', err);
    return null;
  }
}

export async function getProjects() {
  try {
    const data = await client.fetch(projectsQuery);
    return data && data.length > 0 ? data : null;
  } catch (err) {
    console.warn('[Sanity] Error fetching projects, using fallback:', err);
    return null;
  }
}

export async function getTestimonials() {
  try {
    const data = await client.fetch(testimonialsQuery);
    return data && data.length > 0 ? data : null;
  } catch (err) {
    console.warn('[Sanity] Error fetching testimonials, using fallback:', err);
    return null;
  }
}

export async function getAboutPage() {
  try {
    return await client.fetch(aboutPageQuery);
  } catch (err) {
    console.warn('[Sanity] Error fetching aboutPage, using fallback:', err);
    return null;
  }
}

export async function getContactPage() {
  try {
    return await client.fetch(contactPageQuery);
  } catch (err) {
    console.warn('[Sanity] Error fetching contactPage, using fallback:', err);
    return null;
  }
}

export async function getFinancingPage() {
  try {
    return await client.fetch(financingPageQuery);
  } catch (err) {
    console.warn('[Sanity] Error fetching financingPage, using fallback:', err);
    return null;
  }
}

export async function getGalleryPage() {
  try {
    return await client.fetch(galleryPageQuery);
  } catch (err) {
    console.warn('[Sanity] Error fetching galleryPage, using fallback:', err);
    return null;
  }
}

export async function getLocations() {
  try {
    const data = await client.fetch(locationsQuery);
    return data && data.length > 0 ? data : null;
  } catch (err) {
    console.warn('[Sanity] Error fetching locations, using fallback:', err);
    return null;
  }
}
