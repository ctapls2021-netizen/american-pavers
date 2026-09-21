import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zpmj5onp';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_WRITE_TOKEN is missing!');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

async function seedAllPages() {
  console.log('--- Seeding All Pages & Locations into Sanity ---');

  // 1. About Page
  console.log('Seeding About Page...');
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    title: 'Página Nosotros (About Us)',
    hero: {
      badge: 'Who We Are',
      heading: 'Southern California’s Trusted Paver & Hardscape Masters',
      subheading:
        'Building enduring, high-load outdoor spaces with 10,000+ PSI engineered pavers since 2008.',
    },
    story: {
      badge: 'Our Story & Commitment',
      heading: 'Engineered Precision Meets Architectural Elegance',
      bodyParagraph1:
        'Founded over 18 years ago, American Pavers & Turf was born out of frustration with cracked concrete driveways, water-wasting lawns, and subpar contractor workmanship. We set out to create a company rooted in structural engineering rigor, honest pricing, and unmatched customer care.',
      bodyParagraph2:
        'Today, our dedicated crews have completed over 2,400 bespoke installations across Los Angeles, Orange County, San Diego, and the desert communities—maintaining a 4.9-star average rating and zero unresolved complaints.',
    },
  });

  // 2. Contact Page
  console.log('Seeding Contact Page...');
  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',
    title: 'Página Contacto (Contact Us)',
    hero: {
      badge: 'Schedule Free In-Home Consultation',
      heading: 'Let’s Design Your Dream Outdoor Living Space',
      subheading:
        'Free on-site 3D digital design consultation, laser measurements, and an itemized firm quote with 25-year transferable warranty protection.',
    },
    supportNote: 'Prefer to speak with an estimator right now? Call us directly:',
  });

  // 3. Financing Page
  console.log('Seeding Financing Page...');
  await client.createOrReplace({
    _id: 'financingPage',
    _type: 'financingPage',
    title: 'Página Financiamiento (Financing)',
    hero: {
      badge: 'Transparent Financing Plans',
      heading: 'Flexible Payment Options for Your Outdoor Renovation',
      subheading:
        'Transform your driveway, patio, or pool deck now with low monthly payments and promotional 0% interest terms.',
    },
  });

  // 4. Gallery Page
  console.log('Seeding Gallery Page...');
  await client.createOrReplace({
    _id: 'galleryPage',
    _type: 'galleryPage',
    title: 'Página Galería (Gallery)',
    hero: {
      badge: 'Project Portfolio',
      heading: 'Our Masterpiece Installations',
      subheading:
        'Explore our portfolio of completed luxury interlocking paver driveways, resort patios, non-slip pool decks, and lush synthetic turf throughout Southern California.',
    },
  });

  // 5. Locations (6 cities)
  console.log('Seeding Locations...');
  const locations = [
    {
      slug: 'los-angeles',
      name: 'Los Angeles',
      county: 'Los Angeles County',
      metaTitle: 'Premier Pavers, Turf & Outdoor Living in Los Angeles, CA',
      metaDescription:
        'Top-rated driveway pavers, patio design, artificial turf, and outdoor kitchens in Los Angeles. Free in-home 3D consultation & 25-year warranty.',
      projectsCompleted: 14200,
      localOfficeAddress: '11835 W Olympic Blvd, Los Angeles, CA 90064',
      highlightNeighborhoods: [
        'Brentwood',
        'Bel Air',
        'Hollywood Hills',
        'Westwood',
        'Silver Lake',
        'Studio City',
      ],
      zipCodes: ['90001', '90024', '90046', '90049', '90068', '90077', '90210'],
    },
    {
      slug: 'pasadena',
      name: 'Pasadena & San Gabriel Valley',
      county: 'Los Angeles County',
      metaTitle: 'Custom Paver Patios & Driveways in Pasadena, CA',
      metaDescription:
        'Historic and modern interlocking paver installations in Pasadena, Arcadia, and San Marino. Certified hardscape contractors with lifetime guarantees.',
      projectsCompleted: 8350,
      localOfficeAddress: '301 E Colorado Blvd, Pasadena, CA 91101',
      highlightNeighborhoods: [
        'Old Pasadena',
        'Oak Knoll',
        'San Rafael Hills',
        'Hastings Ranch',
        'San Marino',
      ],
      zipCodes: ['91101', '91105', '91107', '91006', '91108', '91011'],
    },
    {
      slug: 'orange-county',
      name: 'Orange County',
      county: 'Orange County',
      metaTitle: 'Luxury Paver Patios, Pool Decks & Turf in Orange County, CA',
      metaDescription:
        'Elevate your outdoor space with luxury interlocking pavers and drought-resistant turf in Newport Beach, Irvine, and Laguna Niguel. Schedule your free 3D design.',
      projectsCompleted: 18900,
      localOfficeAddress: '2010 Main St, Irvine, CA 92614',
      highlightNeighborhoods: [
        'Newport Coast',
        'Turtle Rock',
        'Coto de Caza',
        'Shady Canyon',
        'Huntington Beach',
      ],
      zipCodes: ['92618', '92620', '92651', '92660', '92677', '92807'],
    },
    {
      slug: 'san-diego',
      name: 'San Diego',
      county: 'San Diego County',
      metaTitle: 'Outdoor Remodeling, Pavers & Synthetic Turf in San Diego, CA',
      metaDescription:
        'San Diego’s trusted contractors for interlocking pavers, modern turf, and outdoor kitchens. Perfect coastal durability and zero water landscaping.',
      projectsCompleted: 11400,
      localOfficeAddress: '4370 La Jolla Village Dr, San Diego, CA 92122',
      highlightNeighborhoods: [
        'La Jolla',
        'Del Mar',
        'Carmel Valley',
        'Point Loma',
        'Pacific Beach',
        'Encinitas',
      ],
      zipCodes: ['92037', '92014', '92101', '92109', '92130', '92024'],
    },
    {
      slug: 'san-fernando-valley',
      name: 'San Fernando Valley',
      county: 'Los Angeles County',
      metaTitle: 'Premier Paver Patios, Driveways & Turf in San Fernando Valley, CA',
      metaDescription:
        'Expert interlocking paver design, driveway installations, and drought-resistant turf in Sherman Oaks, Encino, Calabasas, and Woodland Hills.',
      projectsCompleted: 11200,
      localOfficeAddress: '15303 Ventura Blvd, Sherman Oaks, CA 91403',
      highlightNeighborhoods: [
        'Sherman Oaks',
        'Encino',
        'Calabasas',
        'Studio City',
        'Woodland Hills',
      ],
      zipCodes: ['91403', '91316', '91302', '91364', '91604'],
    },
    {
      slug: 'ventura-county',
      name: 'Ventura & Conejo Valley',
      county: 'Ventura County',
      metaTitle: 'Custom Pavers, Pool Decks & Turf in Thousand Oaks & Ventura, CA',
      metaDescription:
        'Luxury interlocking paver installations, pool deck pavers, and realistic artificial grass in Thousand Oaks, Westlake Village, and Simi Valley.',
      projectsCompleted: 8700,
      localOfficeAddress: '2801 Townsgate Rd, Westlake Village, CA 91361',
      highlightNeighborhoods: [
        'Westlake Village',
        'Thousand Oaks',
        'Oak Park',
        'Newbury Park',
        'Simi Valley',
      ],
      zipCodes: ['91360', '91361', '91362', '91377', '93065'],
    },
  ];

  for (const loc of locations) {
    await client.createOrReplace({
      _id: `location-${loc.slug}`,
      _type: 'location',
      name: loc.name,
      slug: { _type: 'slug', current: loc.slug },
      county: loc.county,
      metaTitle: loc.metaTitle,
      metaDescription: loc.metaDescription,
      projectsCompleted: loc.projectsCompleted,
      localOfficeAddress: loc.localOfficeAddress,
      highlightNeighborhoods: loc.highlightNeighborhoods,
      zipCodes: loc.zipCodes,
    });
  }

  console.log('✅ ALL PAGES & LOCATIONS SEEDED SUCCESSFULLY!');
}

seedAllPages().catch((err) => {
  console.error('Fatal seed error:', err);
  process.exit(1);
});
