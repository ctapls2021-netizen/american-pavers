export const projectCategories = {
  driveways: 'Driveways',
  patios: 'Patios & Backyards',
  walkways: 'Walkways & Steps',
  turf: 'Synthetic Turf',
  walls: 'Retaining Walls',
  commercial: 'Commercial',
} as const;

export type ProjectCategory = keyof typeof projectCategories;

interface ProjectEntry {
  slug: string;
  city: string;
  title: string;
  cover: number;
  coverFile?: string;
  categories: ProjectCategory[];
  photoCount: number;
  videoCount?: number;
  firstPhoto?: number;
}

const entries: ProjectEntry[] = [
  { slug: 'agoura-hills', city: 'Agoura Hills', title: 'Backyard Turf', cover: 3, categories: ['turf'], photoCount: 4, firstPhoto: 2 },
  { slug: 'beverly-hills-turf-rooftop', city: 'Beverly Hills', title: 'Rooftop Turf', cover: 1, categories: ['turf'], photoCount: 3, videoCount: 1 },
  { slug: 'calabasas-putting-green', city: 'Calabasas', title: 'Putting Green', cover: 1, categories: ['turf'], photoCount: 4 },
  { slug: 'chatsworth', city: 'Chatsworth', title: 'Front Lawn', cover: 4, categories: ['turf'], photoCount: 9 },
  { slug: 'chatsworth-walkway', city: 'Chatsworth', title: 'Paver Walkway', cover: 2, coverFile: 'american-pavers-chatsworth-walkway-main.webp', categories: ['walkways'], photoCount: 4 },
  { slug: 'chula-vista', city: 'Chula Vista', title: 'Pavers & Turf', cover: 1, categories: ['patios', 'turf'], photoCount: 2 },
  { slug: 'corona', city: 'Corona', title: 'Stepping Stones & Turf', cover: 2, categories: ['walkways', 'turf'], photoCount: 7 },
  { slug: 'corona-pavers', city: 'Corona', title: 'Front Entry Pavers', cover: 1, categories: ['walkways'], photoCount: 3 },
  { slug: 'del-mar', city: 'Del Mar', title: 'Paver Patio', cover: 2, coverFile: 'american-pavers-del-mar-patio-main.webp', categories: ['patios'], photoCount: 4 },
  { slug: 'equinox-west-hollywood', city: 'West Hollywood', title: 'Equinox Turf', cover: 4, categories: ['commercial', 'turf'], photoCount: 8, videoCount: 4 },
  { slug: 'escondido', city: 'Escondido', title: 'Paver Patio & Turf', cover: 1, categories: ['patios', 'turf'], photoCount: 2 },
  { slug: 'hidden-hills', city: 'Hidden Hills', title: 'Lawn & Pavers', cover: 7, categories: ['turf'], photoCount: 9, videoCount: 2 },
  { slug: 'hidden-hills-pavers', city: 'Hidden Hills', title: 'Driveway Paver Installation', cover: 4, categories: ['driveways'], photoCount: 13 },
  { slug: 'inglewood', city: 'Inglewood', title: 'Driveway & Front Yard', cover: 5, categories: ['driveways', 'turf'], photoCount: 6 },
  { slug: 'la-jolla', city: 'La Jolla', title: 'Paver Walkways & Steps', cover: 8, categories: ['walkways'], photoCount: 9 },
  { slug: 'oakland', city: 'Oakland', title: 'Paver Installation', cover: 2, categories: ['patios'], photoCount: 4 },
  { slug: 'oceanside', city: 'Oceanside', title: 'Paver Driveway', cover: 2, categories: ['driveways'], photoCount: 5 },
  { slug: 'rancho-cucamonga', city: 'Rancho Cucamonga', title: 'Curved Paver Driveway', cover: 3, coverFile: 'american-pavers-rancho-cucamonga-driveway-main.webp', categories: ['driveways'], photoCount: 7 },
  { slug: 'san-bernardino', city: 'San Bernardino', title: 'Front Lawn & Walkway', cover: 3, categories: ['turf', 'walkways'], photoCount: 7 },
  { slug: 'simi-valley', city: 'Simi Valley', title: 'Backyard Turf', cover: 2, categories: ['turf'], photoCount: 4 },
  { slug: 'tarzana', city: 'Tarzana', title: 'Garden Turf', cover: 4, categories: ['turf'], photoCount: 8 },
  { slug: 'vallejo', city: 'Vallejo', title: 'Paver Driveway', cover: 2, categories: ['driveways'], photoCount: 4 },
  { slug: 'van-nuys', city: 'Van Nuys', title: 'Paver Driveway', cover: 5, categories: ['driveways'], photoCount: 6 },
  { slug: 'victorville', city: 'Victorville', title: 'Retaining Walls & Pavers', cover: 1, categories: ['walls'], photoCount: 8 },
  { slug: 'west-hills', city: 'West Hills', title: 'Backyard Lawn & Paving', cover: 1, categories: ['patios', 'turf'], photoCount: 1 },
  { slug: 'west-hills-turf-and-wall', city: 'West Hills', title: 'Turf & Retaining Wall', cover: 4, categories: ['walls', 'turf'], photoCount: 7, videoCount: 3 },
  { slug: 'woodland-hills-backyard', city: 'Woodland Hills', title: 'Backyard Pavers & Turf', cover: 2, categories: ['patios', 'turf'], photoCount: 7, videoCount: 1 },
  { slug: 'woodland-hills-turf', city: 'Woodland Hills', title: 'Backyard Turf', cover: 2, categories: ['turf'], photoCount: 4 },
];

function mediaPath(slug: string, name: string) {
  return `/assets/v2/projects/${slug}/${name}`;
}

function numberedMedia(slug: string, type: 'photo' | 'video', number: number) {
  const extension = type === 'photo' ? 'webp' : 'mp4';
  const prefix = type === 'photo' ? `american-pavers-${slug}-` : '';
  return mediaPath(slug, `${prefix}${type}-${String(number).padStart(2, '0')}.${extension}`);
}

export const galleryProjects = entries.map((entry) => {
  const { slug, city, title, categories, cover, coverFile, photoCount, videoCount = 0, firstPhoto = 1 } = entry;
  const coverPhoto = coverFile ? mediaPath(slug, coverFile) : numberedMedia(slug, 'photo', cover);
  const photoNumbers = Array.from({ length: photoCount }, (_, index) => index + firstPhoto);
  return {
    slug,
    city,
    title,
    categories,
    thumbnail: mediaPath(slug, `american-pavers-${slug}-cover.webp`),
    photos: [
      coverPhoto,
      ...photoNumbers.filter((number) => number !== cover).map((number) => numberedMedia(slug, 'photo', number)),
    ],
    videos: Array.from({ length: videoCount }, (_, index) => numberedMedia(slug, 'video', index + 1)),
  };
});

export type GalleryProject = (typeof galleryProjects)[number];
