import { getSiteSettings, getServices, getProjects, getTestimonials } from '@/sanity/queries';
import HomePageClient from './HomePageClient';

export const dynamic = 'force-static';

export default async function HomePage() {
  const [sanitySettings, sanityServices, sanityProjects, sanityTestimonials] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getProjects(),
    getTestimonials(),
  ]);

  return (
    <HomePageClient
      sanitySettings={sanitySettings}
      sanityServices={sanityServices}
      sanityProjects={sanityProjects}
      sanityTestimonials={sanityTestimonials}
    />
  );
}
