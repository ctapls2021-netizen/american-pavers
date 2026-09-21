import { getSiteSettings, getHomePage, getServices, getProjects, getTestimonials } from '@/sanity/queries';
import HomePageClient from './HomePageClient';

export const dynamic = 'force-static';

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
