import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zpmj5onp';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

async function seedSeo() {
  console.log('--- Adding Default SEO to all Sanity Documents ---');

  // 1. Home Page SEO
  console.log('Updating Home Page SEO...');
  await client
    .patch('homePage')
    .set({
      seo: {
        _type: 'seo',
        metaTitle: 'American Pavers & Turf | Luxury Pavers, Artificial Turf & Outdoor Living',
        metaDescription:
          'Transform your California home with 10,000+ PSI interlocking pavers, lush drought-tolerant synthetic turf, and custom outdoor living. 25-year warranty.',
        keywords: [
          'pavers southern california',
          'driveway pavers',
          'patio pavers',
          'synthetic turf',
          'outdoor living',
        ],
        noIndex: false,
      },
    })
    .commit();

  // 2. About Page SEO
  console.log('Updating About Page SEO...');
  await client
    .patch('aboutPage')
    .set({
      seo: {
        _type: 'seo',
        metaTitle: 'About American Pavers & Turf | 18+ Years of Hardscape Excellence',
        metaDescription:
          'Southern California’s premier hardscape contractors with 2,400+ projects completed. Learn about our civil engineering standards and 25-year warranty.',
        keywords: ['hardscape contractor', 'icpi certified pavers', 'california paving company'],
        noIndex: false,
      },
    })
    .commit();

  // 3. Contact Page SEO
  console.log('Updating Contact Page SEO...');
  await client
    .patch('contactPage')
    .set({
      seo: {
        _type: 'seo',
        metaTitle: 'Schedule Free 3D Design Consultation | American Pavers & Turf',
        metaDescription:
          'Get your complimentary on-site 3D digital design consultation, laser measurements, and itemized proposal across Los Angeles and Orange County.',
        keywords: ['free paver estimate', '3d hardscape design consultation', 'paver quote'],
        noIndex: false,
      },
    })
    .commit();

  // 4. Gallery Page SEO
  console.log('Updating Gallery Page SEO...');
  await client
    .patch('galleryPage')
    .set({
      seo: {
        _type: 'seo',
        metaTitle: 'Hardscape Project Gallery & Transformations | American Pavers & Turf',
        metaDescription:
          'Browse real before & after transformations of interlocking paver driveways, modern patios, pool decks, and turf installations across Southern California.',
        keywords: ['paver photos', 'before after pavers', 'driveway paver designs'],
        noIndex: false,
      },
    })
    .commit();

  // 5. Services SEO
  const serviceSeoMap = {
    'service-driveway-pavers': {
      metaTitle: 'Interlocking Driveway Pavers | 10,000+ PSI Concrete Replacement',
      metaDescription:
        'End cracked concrete forever. Our interlocking driveway pavers provide 4x concrete strength, flexible jointing, and 25-year warranty protection.',
      keywords: ['driveway pavers', 'interlocking pavers driveway', 'concrete replacement'],
    },
    'service-patio-pavers': {
      metaTitle: 'Backyard Patio Pavers & Outdoor Living Design | California',
      metaDescription:
        'Expand your outdoor living space with architect-grade stone pavers, integrated seating walls, fire pits, and precision drainage systems.',
      keywords: ['patio pavers', 'backyard patio design', 'stone pavers'],
    },
    'service-pool-deck-pavers': {
      metaTitle: 'Non-Slip Pool Deck Remodeling & Bullnose Coping Pavers',
      metaDescription:
        'Resort-grade heat-reflective pool deck pavers and smooth coping stones. Saltwater chlorinator resistant and 100% slip-safe for children.',
      keywords: ['pool deck pavers', 'pool coping pavers', 'cool pavers pool'],
    },
    'service-synthetic-turf': {
      metaTitle: 'Luxury Drought-Tolerant Synthetic Turf | Pet-Friendly Artificial Grass',
      metaDescription:
        'Save up to 70% on water bills with antimicrobial, odor-free pet turf and evergreen luxury synthetic lawns for Southern California homes.',
      keywords: ['synthetic turf', 'artificial grass', 'pet turf lawn'],
    },
    'service-outdoor-kitchens': {
      metaTitle: 'Custom Outdoor Kitchens, BBQ Islands & Masonry | American Pavers',
      metaDescription:
        'Turnkey culinary outdoor centers with stainless steel grills, granite countertops, pizza ovens, and licensed gas and electrical installations.',
      keywords: ['outdoor kitchen', 'bbq island', 'outdoor kitchen contractor'],
    },
    'service-decking-pergolas': {
      metaTitle: 'Motorized Louvered Pergolas & Architectural Patio Covers',
      metaDescription:
        'Escape harsh afternoon sun with motorized louvered pergolas, insulated patio covers, and composite decking built for year-round comfort.',
      keywords: ['louvered pergola', 'motorized patio cover', 'outdoor shade pergola'],
    },
  };

  for (const [id, seoData] of Object.entries(serviceSeoMap)) {
    console.log(`Updating SEO for ${id}...`);
    await client
      .patch(id)
      .set({
        seo: {
          _type: 'seo',
          ...seoData,
          noIndex: false,
        },
      })
      .commit();
  }

  // 6. Locations SEO
  const locations = await client.fetch('*[_type == "location"]{_id, name, metaTitle, metaDescription}');
  for (const loc of locations) {
    console.log(`Updating SEO for location ${loc.name}...`);
    await client
      .patch(loc._id)
      .set({
        seo: {
          _type: 'seo',
          metaTitle: loc.metaTitle || `${loc.name} Pavers & Turf | American Pavers`,
          metaDescription: loc.metaDescription || `Top-rated pavers and turf contractor in ${loc.name}.`,
          keywords: [`${loc.name} pavers`, `${loc.name} artificial turf`],
          noIndex: false,
        },
      })
      .commit();
  }

  console.log('✅ ALL SEO FIELDS SEEDED SUCCESSFULLY ACROSS ALL DOCUMENTS!');
}

seedSeo().catch((err) => {
  console.error('Seed SEO Error:', err);
  process.exit(1);
});
