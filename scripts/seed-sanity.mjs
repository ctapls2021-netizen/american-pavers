import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zpmj5onp';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_WRITE_TOKEN is missing in environment!');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

async function uploadImageIfExists(relPath) {
  try {
    const fullPath = path.join(process.cwd(), 'public', relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return null;
    }
    const stream = fs.createReadStream(fullPath);
    const asset = await client.assets.upload('image', stream, {
      filename: path.basename(fullPath),
    });
    console.log(`Uploaded asset: ${relPath} -> ${asset._id}`);
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.warn(`Failed to upload ${relPath}:`, err.message);
    return null;
  }
}

async function seed() {
  console.log('--- Starting Sanity Database Seed ---');

  // 1. Site Settings
  console.log('Seeding Site Settings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: 'American Pavers & Turf',
    legalName: 'American Pavers & Turf Inc.',
    tagline: 'Luxury Pavers, Artificial Turf & Outdoor Living',
    phone: '+18005558873',
    formattedPhone: '(800) 555-8873',
    email: 'info@americanpavers.com',
    hours: 'Mon - Sat: 7:00 AM - 6:00 PM',
    licenseNumber: 'CA C-27 #1084920',
    yearsInBusiness: 18,
    projectsCompleted: 2400,
    averageRating: 4.9,
    warrantyYears: '25-Year Master Warranty',
    primaryServiceArea: 'Orange County & Los Angeles',
  });

  // 2. Home Page (Page Builder)
  console.log('Seeding Home Page Builder...');
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    title: 'Página de Inicio',
    hero: {
      badge: 'Southern California’s #1 Paver & Turf Specialist',
      headlineNormal: 'Luxury Hardscapes &',
      headlineHighlight: 'Outdoor Living',
      subheadline:
        'Engineered interlocking pavers, premium drought-tolerant synthetic turf, and resort-grade outdoor living spaces across Los Angeles and Orange County.',
      primaryCtaText: 'Get Free 3D Design Estimate',
      secondaryCtaText: 'Call (800) 555-8873',
    },
    servicesSection: {
      badge: 'Our Core Specialties',
      heading: 'Custom Paver & Outdoor Living Solutions',
      subheading:
        'Engineered for superior durability, natural drainage, and lifelong elegance.',
    },
    transformationsSection: {
      badge: 'Real Project Transformations',
      heading: 'Before & After Mastery',
      subheading:
        'Slide through our genuine project transformations to witness precision engineering.',
    },
    processSection: {
      badge: 'Our Proven Process',
      heading: 'From Consultation to Completion',
      subheading:
        'Our structured 4-step engineering approach guarantees 100% satisfaction.',
    },
    faqSection: {
      badge: 'Got Questions?',
      heading: 'Frequently Asked Questions',
      subheading:
        'Everything you need to know about our pavers, warranties, and installation.',
    },
    bottomCta: {
      heading: 'Ready to Transform Your Outdoor Space?',
      subheading: 'Schedule your free on-site design consultation today.',
      ctaText: 'Claim Your Free 3D Estimate',
      guaranteeNote:
        'Zero-pressure consultation. Includes custom 3D design & same-day itemized proposal.',
    },
  });

  // 3. Services
  console.log('Seeding Services...');
  const services = [
    {
      slug: 'driveway-pavers',
      title: 'Interlocking Driveway Pavers',
      shortTitle: 'Driveway Pavers',
      tagline:
        'Transform your home’s curb appeal with cracked-free, 10,000+ PSI engineered driveway pavers.',
      description:
        'Say goodbye to ugly cracked concrete, oil stains, and constant sealing. Our interlocking driveway pavers offer 4x the compressive strength of poured concrete, flexible jointing that resists earthquakes and ground movement, and lifetime aesthetic elegance.',
      imagePath: 'assets/cards/card-driveway.webp',
      startingPrice: 'Free 3D Design Consultation',
      order: 1,
      benefits: [
        'Over 10,000 PSI Compressive Strength (4x stronger than standard concrete)',
        'Zero cracking or buckling from seismic activity or tree roots',
        'Permeable eco-friendly drainage options prevents pooling water',
        'Stain-resistant sealant and individual paver repairability',
        'Backed by our 25-Year transferable workmanship warranty',
      ],
    },
    {
      slug: 'patio-pavers',
      title: 'Backyard Patio Pavers',
      shortTitle: 'Patio Pavers',
      tagline:
        'Expand your California living space with custom-crafted paver patios built for effortless entertaining.',
      description:
        'Designed to withstand heavy entertaining, blazing sun, and thermal expansion without buckling. We grade, excavate, compact, and install architect-grade stone pavers that turn mundane yards into luxury outdoor retreats.',
      imagePath: 'assets/cards/card-patio.webp',
      startingPrice: 'Free 3D Design Consultation',
      order: 2,
      benefits: [
        'Custom geometric layouts, herringbone patterns, and multi-piece designs',
        'Seamless integration with fire pits, outdoor kitchens, and seating walls',
        'Heat-reflective stone surfaces that stay comfortable under barefoot heat',
        'Precision grading ensures 100% water flow away from home foundation',
        'High-density base aggregate prevents weed growth and ant infestations',
      ],
    },
    {
      slug: 'pool-deck-pavers',
      title: 'Pool Deck Remodeling & Pavers',
      shortTitle: 'Pool Deck Pavers',
      tagline:
        'Resort-grade non-slip pavers and bullnose pool coping engineered for cool comfort and safety.',
      description:
        'Replace hot, slippery, crumbling concrete decking with slip-resistant pavers that remain cool under the blazing California sun. Fully resistant to saltwater pool systems and heavy chlorine exposure.',
      imagePath: 'assets/cards/card-pool.webp',
      startingPrice: 'Free 3D Design Consultation',
      order: 3,
      benefits: [
        'Non-slip textured surface provides safety for running children',
        'Heat-deflective pavers stay significantly cooler than poured concrete',
        'Impervious to saltwater chlorinators, acid splashes, and UV bleaching',
        'Precision bullnose and safety-grip coping stone perimeter edges',
        'Integrated drainage channels divert splash water cleanly away from pool',
      ],
    },
    {
      slug: 'synthetic-turf',
      title: 'Luxury Drought-Tolerant Synthetic Turf',
      shortTitle: 'Synthetic Turf',
      tagline:
        'Always lush, evergreen, and maintenance-free. Cut your water bill by up to 70% instantly.',
      description:
        'Engineered for Southern California climate realities. Our non-toxic, pet-friendly artificial turf combines natural color multi-blade fibers with antimicrobial infill and high-flow perforated drainage backing.',
      imagePath: 'assets/cards/card-turf.webp',
      startingPrice: 'Free 3D Design Consultation',
      order: 4,
      benefits: [
        'Eliminates watering costs, mowing, fertilizing, and aeration permanently',
        'Antimicrobial organic infill prevents dog urine odors and bacteria growth',
        '100% lead-free, non-toxic, and hypoallergenic for children and pets',
        'High-volume perforated backing drains 30+ inches of rain/water per hour',
        'UV-stabilized fibers guaranteed against fading for 15+ years',
      ],
    },
    {
      slug: 'outdoor-kitchens',
      title: 'Custom Outdoor Kitchens & BBQ Islands',
      shortTitle: 'Outdoor Kitchens',
      tagline:
        'Complete culinary outdoor entertainment centers built with steel frames and custom masonry.',
      description:
        'Bring the comfort of indoor luxury cooking into your open-air backyard. We build custom modular or masonry BBQ islands complete with stainless steel grills, beverage centers, pizza ovens, and granite countertops.',
      imagePath: 'assets/cards/card-kitchen.webp',
      startingPrice: 'Free 3D Design Consultation',
      order: 5,
      benefits: [
        'Heavy-gauge galvanized steel framing with cementitious backer board',
        'Matching stone veneer or smooth stucco finish complementing your home',
        'Commercial 304-grade stainless steel appliance packages available',
        'Custom granite, quartzite, or porcelain outdoor-grade countertops',
        'Licensed gas, electrical, and plumbing line installations',
      ],
    },
    {
      slug: 'decking-pergolas',
      title: 'Pergolas, Patio Covers & Decking',
      shortTitle: 'Pergolas & Covers',
      tagline:
        'Architectural shade structures and composite decking that maximize year-round outdoor enjoyment.',
      description:
        'Escape harsh California afternoon heat under a custom motorized louvered pergola or solid insulated patio cover. Engineered to withstand heavy wind loads while incorporating recessed LED lighting, ceiling fans, and infrared patio heaters.',
      imagePath: 'assets/cards/card-deck.webp',
      startingPrice: 'Free 3D Design Consultation',
      order: 6,
      benefits: [
        'Motorized louvered roofs rotate 180° for custom sun and rain protection',
        'Powder-coated architectural aluminum resists rust, warping, and termites',
        'Integrated hidden downspouts and perimeter gutter drainage systems',
        'Smart app and remote control operation with automatic rain sensors',
        'Engineered permit-ready drawings with city building department approval',
      ],
    },
  ];

  for (const s of services) {
    console.log(`Processing service: ${s.slug}`);
    let heroImage = null;
    if (s.imagePath) {
      heroImage = await uploadImageIfExists(s.imagePath);
    }

    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: 'service',
      title: s.title,
      shortTitle: s.shortTitle,
      slug: { _type: 'slug', current: s.slug },
      tagline: s.tagline,
      description: s.description,
      startingPrice: s.startingPrice,
      order: s.order,
      benefits: s.benefits,
      ...(heroImage ? { heroImage } : {}),
    });
  }

  // 4. Testimonials
  console.log('Seeding Testimonials...');
  const testimonials = [
    {
      id: 't1',
      author: 'Jennifer & Marcus B.',
      city: 'Pasadena, CA',
      projectType: 'Backyard Patio & Outdoor Kitchen',
      rating: 5,
      date: 'February 2026',
      quote:
        'Our backyard was basically an uneven dirt slope with cracked 1970s concrete. The 3D design phase was incredible—we saw exactly how the fire pit, seating walls, and pavers would fit. The installation crew completed it in 9 days and the rain drainage has been 100% flawless.',
      verified: true,
    },
    {
      id: 't2',
      author: 'David L.',
      city: 'Newport Beach, CA',
      projectType: 'Driveway Interlocking Pavers',
      rating: 5,
      date: 'January 2026',
      quote:
        'Everyone in our neighborhood is asking who did our driveway. We had heavy root damage from a neighbor’s tree that destroyed our previous slab. The team excavated down 10 inches, laid a rock-solid aggregate base, and the charcoal pavers look like a luxury resort.',
      verified: true,
    },
    {
      id: 't3',
      author: 'Elena & Carlos R.',
      city: 'Encino, CA',
      projectType: 'Pool Deck Pavers & Synthetic Turf',
      rating: 5,
      date: 'March 2026',
      quote:
        'In the Southern California summer, our old pool deck was burning our feet. The light travertine pavers stay dramatically cooler, and the pet turf has solved all of our dog mud issues. Financing at 0% made this an absolute no-brainer.',
      verified: true,
    },
    {
      id: 't4',
      author: 'Robert M.',
      city: 'Beverly Hills, CA',
      projectType: 'Covered Pergola & Fire Pit Living Area',
      rating: 5,
      date: 'November 2025',
      quote:
        'From permitting through city inspection to the final polymeric sand lock, the project manager texted us updates daily with photos. True commercial-grade professionalism from start to finish.',
      verified: true,
    },
  ];

  for (const t of testimonials) {
    await client.createOrReplace({
      _id: `testimonial-${t.id}`,
      _type: 'testimonial',
      author: t.author,
      city: t.city,
      projectType: t.projectType,
      rating: t.rating,
      date: t.date,
      quote: t.quote,
      verified: t.verified,
    });
  }

  // 5. Projects (Before/After)
  console.log('Seeding Projects...');
  const transformations = [
    {
      id: 'driveway',
      title: 'Aged Concrete to Interlocking Paver Driveway',
      city: 'Pasadena, CA',
      category: 'driveway-pavers',
      beforeImg: 'assets/transformations/driveway-before.webp',
      afterImg: 'assets/transformations/driveway-after.webp',
      description:
        'Excavated 8 inches of compromised soil, leveled with geotextile aggregate, and installed heavy-duty interlocking pavers with custom soldier course borders.',
    },
    {
      id: 'patio',
      title: 'Cramped Slab to Outdoor Kitchen & Dining Retreat',
      city: 'Newport Beach, CA',
      category: 'patio-pavers',
      beforeImg: 'assets/transformations/patio-before.webp',
      afterImg: 'assets/transformations/patio-after.webp',
      description:
        'Replaced a weathered concrete slab with a 3x larger interlocking paver terrace, complete with built-in BBQ island, smoker station, and shaded dining pergola.',
    },
    {
      id: 'pool-deck',
      title: 'Excavation to Resort Pool Coping & Architectural Paver Deck',
      city: 'Palm Springs, CA',
      category: 'pool-deck-pavers',
      beforeImg: 'assets/transformations/pool-deck-before.webp',
      afterImg: 'assets/transformations/pool-deck-after.webp',
      description:
        'Converted an outdated Kool-deck surface into modern slip-resistant travertine pavers with custom bullnose pool coping stones.',
    },
    {
      id: 'turf-lawn',
      title: 'Muddy Patch to Drought-Proof Putting Green & Pet Turf',
      city: 'Irvine, CA',
      category: 'synthetic-turf',
      beforeImg: 'assets/transformations/turf-lawn-before.webp',
      afterImg: 'assets/transformations/turf-lawn-after.webp',
      description:
        'Removed patchy grass and dead soil, installed multi-layer crushed granite drainage base, and laid antimicrobial pet turf with custom 3-hole putting green.',
    },
  ];

  for (const p of transformations) {
    console.log(`Processing project: ${p.id}`);
    const beforeAsset = await uploadImageIfExists(p.beforeImg);
    const afterAsset = await uploadImageIfExists(p.afterImg);

    await client.createOrReplace({
      _id: `project-${p.id}`,
      _type: 'project',
      title: p.title,
      city: p.city,
      category: p.category,
      description: p.description,
      ...(beforeAsset ? { beforeImage: beforeAsset } : {}),
      ...(afterAsset ? { afterImage: afterAsset } : {}),
    });
  }

  console.log('✅ SEED COMPLETED SUCCESSFULLY! All data is now live in Sanity.');
}

seed().catch((err) => {
  console.error('Fatal seed error:', err);
  process.exit(1);
});
