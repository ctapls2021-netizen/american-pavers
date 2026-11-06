import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectPhotos from '../ProjectPhotos';
import ProjectVideos from '../ProjectVideos';
import { notFound } from 'next/navigation';
import Home2Header from '@/components/home2/Home2Header';
import Home2Footer from '@/components/home2/Home2Footer';
import Home2QuoteSplit from '@/components/home2/Home2QuoteSplit';
import { galleryProjects, projectCategories } from '../projects';

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return galleryProjects.map(({ slug }) => ({ slug }));
}

async function getProject(params: PageProps['params']) {
  const { slug } = await params;
  const project = galleryProjects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject(params);
  return {
    title: `${project.title} in ${project.city} | American Pavers & Turf`,
    description: `See photos from our ${project.title.toLowerCase()} project in ${project.city}, California.`,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProject(params);

  return (
    <div className="min-h-screen bg-white">
      <Home2Header basePath="/v3" />
      <main>
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <Link href="/v3/gallery" className="text-sm font-bold text-[#01782a] hover:underline">
            ← Back to project gallery
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[#01782a]">
            {project.categories.map((category) => projectCategories[category]).join(' / ')}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-[#1A292C] sm:text-6xl">{project.title}</h1>
          <p className="mt-3 text-lg text-stone-600">{project.city}, California</p>
          <ProjectPhotos photos={project.photos} title={project.title} />
          {project.videos.length > 0 && <ProjectVideos videos={project.videos} title={project.title} />}
        </section>
        <Home2QuoteSplit />
      </main>
      <Home2Footer basePath="/v3" />
    </div>
  );
}
