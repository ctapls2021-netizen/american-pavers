import { groq } from 'next-sanity';
import { client } from './client';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]
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
