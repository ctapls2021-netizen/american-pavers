import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    slug: 'driveway-pavers',
    title: 'Interlocking Driveway Pavers',
    shortTitle: 'Driveway Pavers',
    tagline: 'Transform your home’s curb appeal with cracked-free, 10,000+ PSI engineered driveway pavers.',
    description: 'Say goodbye to ugly cracked concrete, oil stains, and constant sealing. Our interlocking driveway pavers offer 4x the compressive strength of poured concrete, flexible jointing that resists earthquakes and ground movement, and lifetime aesthetic elegance.',
    heroImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80',
    startingPrice: 'Free 3D Design Consultation',
    benefits: [
      'Over 10,000 PSI Compressive Strength (4x stronger than standard concrete)',
      'Zero cracking or buckling from seismic activity or tree roots',
      'Permeable eco-friendly drainage options prevents pooling water',
      'Stain-resistant sealant and individual paver repairability',
      'Backed by our 25-Year transferable workmanship warranty',
    ],
    features: [
      {
        title: 'Deep Aggregate Base System',
        description: 'Engineered multi-layer crushed stone base compacted to 98% modified proctor density, preventing wheel ruts and settling.',
        iconName: 'Layers',
      },
      {
        title: 'Polymeric Sand Joint Locking',
        description: 'Hardens like mortar to prevent weed growth and ant hills while maintaining thermal expansion flexibility.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Heavy-Duty Concrete Edge Restraints',
        description: 'Perimeter anchors prevent edge creep and lateral shift even under heavy truck loads and RV parking.',
        iconName: 'Anchor',
      },
    ],
    materialOptions: [
      {
        name: 'Euro Cobble Traditional',
        description: 'Tumbled, antique edge pavers providing Old World elegance and rustic charm.',
        image: 'https://images.unsplash.com/photo-1584463699039-b9b5fef798f4?auto=format&fit=crop&w=800&q=80',
        colors: ['Tuscan Blend', 'Sierra Granite', 'Charcoal Slate'],
      },
      {
        name: 'Modern Large Format Planks',
        description: 'Sleek, clean-lined geometric slabs for contemporary luxury estates.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        colors: ['Onyx Charcoal', 'Desert Buff', 'Glacier Silver'],
      },
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      label: 'Cracked Slab to Resort Driveway in Glendale, CA',
    },
    faqs: [
      {
        question: 'Are driveway pavers stronger than poured concrete?',
        answer: 'Yes. Poured concrete typically withstands 2,500 to 3,500 PSI, whereas high-density interlocking concrete pavers withstand over 8,000 to 10,000 PSI. Furthermore, pavers flex with ground settling rather than cracking down the middle.',
      },
      {
        question: 'How long does a driveway paver installation take?',
        answer: 'A standard 2-car to 3-car residential driveway (800 to 1,500 sq. ft.) typically takes 4 to 7 working days from excavation to polymeric sand compaction.',
      },
      {
        question: 'Can I park an RV or heavy truck on pavers?',
        answer: 'Absolutely. We engineer the base depth up to 8-10 inches of compacted crushed rock for heavy vehicle loading areas.',
      },
    ],
  },
  {
    slug: 'patio-pavers',
    title: 'Luxury Backyard Patio Pavers',
    shortTitle: 'Patio Pavers',
    tagline: 'Create your private resort with custom patio pavers designed for California outdoor living.',
    description: 'Transform unused dirt, dated slabs, or decaying wood into a breathtaking outdoor living retreat. Our patio paver systems are custom tailored to your architecture with integrated seating walls, lighting, and entertainment layouts.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80',
    startingPrice: 'Free 3D Design Consultation',
    benefits: [
      'Custom 3D CAD modeling of your yard before a single shovel enters the ground',
      'Slip-resistant textured surfaces safe for barefoot walks and children',
      'Seamless integration with outdoor kitchens, fire pits, and turf',
      'Low thermal absorption materials that stay cool on summer afternoons',
      'Lifetime guarantee against chipping and spalling',
    ],
    features: [
      {
        title: 'Precision Elevation & Slope Grading',
        description: 'Engineered drainage pitch ensures rain and irrigation flow safely away from your home’s foundation.',
        iconName: 'Compass',
      },
      {
        title: 'Multi-Pattern Layouts',
        description: 'Herringbone, running bond, ashlar stone, and circular focal medallions customized for your exterior.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Integrated Accent Borders',
        description: 'Contrasting soldier course borders define distinct zones for dining, lounging, and gathering.',
        iconName: 'Sparkles',
      },
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      label: 'Muddy Yard to Mediterranean Patio in Pasadena, CA',
    },
    faqs: [
      {
        question: 'Will weeds grow between the patio pavers?',
        answer: 'No. We use polymeric bonding sand activated with water during installation that forms a rock-hard barrier preventing weed spores from germinating.',
      },
      {
        question: 'Do patio pavers get too hot in the sun?',
        answer: 'We offer specialized light-toned pavers and travertine-finish stones that have high Solar Reflectance Index (SRI) ratings, staying significantly cooler than asphalt or dark poured concrete.',
      },
    ],
  },
  {
    slug: 'pool-deck-pavers',
    title: 'Slip-Resistant Pool Deck Pavers',
    shortTitle: 'Pool Deck Pavers',
    tagline: 'Resort-style pool surrounds that stay cool underfoot and eliminate slippery wet hazards.',
    description: 'Upgrade your swimming pool surround with porcelain, travertine, and interlocking concrete pool pavers. Engineered with textured non-slip finishes and coping stones with bullnose edges for safe swimming and effortless entertaining.',
    heroImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=80',
    startingPrice: 'Free 3D Design Consultation',
    benefits: [
      'ADA compliant wet slip-resistance test ratings',
      'Chlorine, saltwater, and pool chemical impervious surfaces',
      'Smooth bullnose coping edges comfortable for pool entry & exit',
      'Immediate access to underground pool plumbing without jackhammering',
    ],
    features: [
      {
        title: 'Cool-Touch Surface Technology',
        description: 'Micro-porous finishes reflect UV heat so you and your family can walk barefoot comfortably in peak heat.',
        iconName: 'Sun',
      },
      {
        title: 'Custom Coping & Cantilever Trim',
        description: 'Precision water-jet cut coping pieces that wrap corners seamlessly around pool steps and spas.',
        iconName: 'Waves',
      },
    ],
    faqs: [
      {
        question: 'Can you install pool pavers over existing concrete pool decks?',
        answer: 'In many cases, yes. If the existing concrete pool deck is structurally sound, we can install ultra-thin overlay pavers with specialized mortar, saving substantial demolition costs.',
      },
      {
        question: 'How do pool pavers handle saltwater chlorinators?',
        answer: 'Our pool deck pavers are sealed with high-grade fluorochemical sealants that are completely unaffected by saltwater splash, efflorescence, or chlorine.',
      },
    ],
  },
  {
    slug: 'synthetic-turf',
    title: 'Lush Artificial Grass & Putting Greens',
    shortTitle: 'Synthetic Turf',
    tagline: 'Drought-tolerant, pet-friendly, zero-water artificial turf that stays emerald green 365 days a year.',
    description: 'Cut your water bills by up to 70% while enjoying a pristine, manicured lawn all year long. Our American-made artificial turf features antimicrobial pet infill, heat-dissipating blade technology, and 15-year UV fade warranties.',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1800&q=80',
    startingPrice: 'Free 3D Design Consultation',
    benefits: [
      'Save tens of thousands of gallons of water annually',
      '100% lead-free, non-toxic, pet & child friendly certification',
      'Micro-channel backing draining over 30 inches of water per hour',
      'Zero mowing, weeding, fertilizing, or mud tracked into your house',
    ],
    features: [
      {
        title: 'Cool-Blade Thermoshield Tech',
        description: 'Unique blade profiles reflect infrared light to reduce surface temperatures by up to 15 degrees.',
        iconName: 'Leaf',
      },
      {
        title: 'Antimicrobial Odor-Lock Infill',
        description: 'Organic zeolite infill neutralizes ammonia odors from dog urine on contact.',
        iconName: 'Shield',
      },
    ],
    faqs: [
      {
        question: 'How do you clean artificial turf with dogs?',
        answer: 'Simple hose rinses wash liquid waste through the permeable base. Solid waste is picked up just like normal grass. We also offer pet-enzymatic sprays for deep seasonal cleaning.',
      },
      {
        question: 'Does artificial grass look fake?',
        answer: 'Our turf blends 4 distinct shades of olive and field green blades alongside a realistic tan thatch layer that mimics healthy natural California turf down to the touch.',
      },
    ],
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Custom Outdoor Kitchens & Fire Pits',
    shortTitle: 'Outdoor Kitchens',
    tagline: 'Gourmet outdoor cooking suites, custom BBQ islands, granite countertops, and cozy gas fire features.',
    description: 'Bring the culinary experience outdoors. We engineer custom stainless steel BBQ islands, outdoor pizza ovens, wine coolers, bar seating, and linear fire pits plumbed directly to natural gas or propane.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=80',
    startingPrice: 'Free 3D Design Consultation',
    benefits: [
      'Commercial-grade 304 stainless steel appliances',
      'Solid steel-stud or masonry block construction built to last a lifetime',
      'Outdoor-rated granite, quartz, and concrete countertops',
      'Full electrical, gas, and plumbing permitting handled end-to-end',
    ],
    features: [
      {
        title: 'Gas Fire Pits & Linear Fireplaces',
        description: 'Electronic spark ignition systems with lava rock, fire glass, and timer controls.',
        iconName: 'Flame',
      },
      {
        title: 'Weatherproof Storage & Refrigeration',
        description: 'Sealed gasket drawers and outdoor beverage coolers built for extreme summer heat.',
        iconName: 'Utensils',
      },
    ],
    faqs: [
      {
        question: 'Do you handle the gas and electrical permits?',
        answer: 'Yes! As a licensed Class B and specialty contractor, we handle all city permitting, architectural drawings, and utility tie-ins.',
      },
    ],
  },
  {
    slug: 'decking-pergolas',
    title: 'Composite Decks & Louvered Pergolas',
    shortTitle: 'Decks & Pergolas',
    tagline: 'Modern composite decking and motorized pergolas engineered for sun protection and modern outdoor living.',
    description: 'Elevate your outdoor environment with splinter-free Trex composite decking and motorized louvred aluminum pergolas. Complete with wind sensors, integrated LED dimmable lighting, and rainproof gutters.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
    startingPrice: 'Free 3D Design Consultation',
    benefits: [
      'Zero splintering, warping, or annual repainting required',
      'Motorized louvered roofs rotate 180 degrees at the touch of a button',
      'Hurricane-rated aluminum extruded posts and concealed fasteners',
      'Integrated LED channels for evening ambiance',
    ],
    features: [
      {
        title: 'Automatic Rain Sensors',
        description: 'Pergola louvers automatically close at the first drop of rain to keep your patio furniture dry.',
        iconName: 'CloudRain',
      },
      {
        title: 'Hidden Fastener Decking',
        description: 'Clean surface finish with no visible screw heads for a smooth barefoot feel.',
        iconName: 'CheckCircle',
      },
    ],
    faqs: [
      {
        question: 'How long does composite decking last?',
        answer: 'Premium capped composite decks carry 25 to 50-year manufacturer stain and fade warranties with practically zero maintenance.',
      },
    ],
  },
];
