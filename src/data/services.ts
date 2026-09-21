import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    slug: 'driveway-pavers',
    title: 'Interlocking Driveway Pavers',
    shortTitle: 'Driveway Pavers',
    tagline: 'Transform your home’s curb appeal with cracked-free, 10,000+ PSI engineered driveway pavers.',
    description: 'Say goodbye to ugly cracked concrete, oil stains, and constant sealing. Our interlocking driveway pavers offer 4x the compressive strength of poured concrete, flexible jointing that resists earthquakes and ground movement, and lifetime aesthetic elegance.',
    heroImage: '/assets/driveway-feature-card.webp',
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
      before: '/assets/transformations/driveway-before.webp',
      after: '/assets/transformations/driveway-after.webp',
      label: 'Aged Concrete to Interlocking Paver Driveway in Pasadena, CA',
    },
    faqs: [
      {
        question: 'Can you use pavers on sloped or steep driveways?',
        answer: 'Yes, absolutely. Interlocking pavers are ideal for sloped driveways because their textured surface provides superior vehicular traction compared to slick poured concrete. During engineering, our crews take laser slope measurements, install reinforced concrete footer restraints at the base, and use geotextile soil pins to completely eliminate downslope creep.',
      },
      {
        question: 'Can you install pavers over an existing concrete driveway?',
        answer: 'The short answer is no. Overlaying pavers directly on top of old concrete traps moisture underneath, raises garage lip elevations improperly, and mirrors existing concrete cracks directly up into the paver joints. We demolish and haul away the old concrete, excavate to proper subgrade depth, and build our 5-layer 98% Proctor compacted aggregate foundation.',
      },
      {
        question: 'What kinds of vehicles can our paver driveway support?',
        answer: 'Professionally installed driveway pavers from American Pavers & Turf withstand over 10,000 PSI—more than four times the compressive strength of standard concrete. Our deep aggregate foundation is engineered to effortlessly support everyday passenger vehicles, heavy commercial delivery trucks, boats, and full-size Class-A RVs with zero rutting.',
      },
      {
        question: 'How long does an interlocking paver driveway last?',
        answer: 'Our paver installations are engineered to last 50+ years. Because individual pavers flex naturally with California seismic micro-movements and expansive clay expansion, they never fracture or crack like rigid concrete. Every driveway project is backed by our 25-Year transferable master craftsmanship warranty.',
      },
      {
        question: 'How much do driveway pavers cost in California?',
        answer: 'Driveway paver costs vary based on total square footage, excavation depth, existing demolition, and the specific stone collection selected (such as Euro Cobble, Large-Format Planks, or Herringbone). During our complimentary in-home consultation, a senior hardscape architect measures your site, brings physical stone samples, and provides a guaranteed, transparent 3D design estimate with 0% APR financing options.',
      },
      {
        question: 'How long does it take to install a paver driveway?',
        answer: 'Most standard residential 2-car to 4-car driveways (800 to 2,000 sq. ft.) are fully completed in 4 to 6 working days. This includes concrete demolition, excavation, base compaction, paver laying, edge beam pouring, and polymeric sand locking.',
      },
      {
        question: 'What routine maintenance is required for driveway pavers?',
        answer: 'Interlocking pavers require minimal maintenance. Occasional sweeping and periodic garden hose washing keep them looking pristine. Our polymeric sand joint lock prevents weeds and ant tunnels. We recommend an optional commercial-grade clear seal refresh every 3 to 5 years to enhance color luster and resist tire marks.',
      },
      {
        question: 'Can I customize the pattern, border soldier course, and colors?',
        answer: 'Yes, 100% custom. Choose from 45°/90° herringbone, tumbled cobbles, or modern mega-slabs, accented with contrasting charcoal border courses, custom driveway apron banding, and integrated low-voltage lighting pavers.',
      },
    ],
  },
  {
    slug: 'patio-pavers',
    title: 'Luxury Backyard Patio Pavers',
    shortTitle: 'Patio Pavers',
    tagline: 'Create your private resort with custom patio pavers designed for California outdoor living.',
    description: 'Transform unused dirt, dated slabs, or decaying wood into a breathtaking outdoor living retreat. Our patio paver systems are custom tailored to your architecture with integrated seating walls, lighting, and entertainment layouts.',
    heroImage: 'https://images.ctfassets.net/zkpxzicsuxng/7CTlE9jM5t4dItHH9r7bfo/17cb31b1fe4863f1e5c2256eb5d6eb5d/patiofeature1.webp',
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
      before: '/assets/transformations/patio-before.webp',
      after: '/assets/transformations/patio-after.webp',
      label: 'Cramped Slab to Outdoor Kitchen & Dining in Newport Beach, CA',
    },
    faqs: [
      {
        question: 'Will weeds grow between the patio pavers?',
        answer: 'No. We use commercial-grade polymeric joint sand activated with water during installation that cures into a rock-hard, flexible barrier. This prevents weed spores from germinating and stops ant colonization while still allowing thermal expansion.',
      },
      {
        question: 'Do patio pavers get too hot in the California summer sun?',
        answer: 'We offer specialized light-toned pavers, natural travertine, and porcelain tiles engineered with high Solar Reflectance Index (SRI) ratings. These materials reflect solar infrared radiation, staying comfortable and safe for bare feet even during peak summer afternoons.',
      },
      {
        question: 'Can you install pavers over an existing cracked concrete patio slab?',
        answer: 'If the existing slab is structurally sound and level, thin overlay pavers can sometimes be installed with specialized adhesive. However, if the concrete is cracked, sunken, or slopes toward your foundation, we demolish and haul away the old slab, excavate to proper subgrade depth, and build a 4-to-6-inch compacted aggregate foundation with proper drainage slope.',
      },
      {
        question: 'How do interlocking patio pavers handle drainage and heavy rain?',
        answer: 'Before laying a single stone, our crews laser-grade your yard to establish a minimum 1% to 2% slope directing water away from your home’s foundation. Additionally, permeable paver systems allow rainwater to filter naturally into the subgrade aggregate, preventing standing puddles and mosquito breeding.',
      },
      {
        question: 'How long does a backyard patio paver installation take?',
        answer: 'Most standard residential backyard patios (400 to 1,200 sq. ft.) are completed in 3 to 5 working days. This includes old surface demolition, excavation, geotextile fabric placement, aggregate compaction, paver laying, edge beam restraint installation, and polymeric sand sealing.',
      },
      {
        question: 'Can I integrate an outdoor kitchen, fire pit, or pergola later?',
        answer: 'Yes! That is one of the greatest advantages of pavers. During initial 3D design, we can pre-run underground electrical conduits and natural gas lines beneath the paver foundation so you can seamlessly add a built-in BBQ island, fire pit, or motorized pergola in future phases with zero disruption.',
      },
      {
        question: 'What is the lifespan and maintenance comparison between wood decks and paver patios?',
        answer: 'Wood decks in California require annual sanding, staining, and sealing, and typically rot or splinter after 10 to 15 years. Interlocking pavers are virtually maintenance-free, never rot or splinter, resist BBQ grease stains, and are backed by our 25-Year transferable structural guarantee.',
      },
      {
        question: 'How much does a custom patio paver installation cost in California?',
        answer: 'Cost depends on total square footage, demolition requirements, site access, and the stone collection selected (such as modern large-format slabs, tumbled antiqued stones, or natural travertine). During our free in-home consultation, we take laser measurements, present physical stone samples, and provide a transparent, itemized 3D design quote with 0% APR financing options.',
      },
    ],
  },
  {
    slug: 'pool-deck-pavers',
    title: 'Slip-Resistant Pool Deck Pavers',
    shortTitle: 'Pool Deck Pavers',
    tagline: 'Resort-style pool surrounds that stay cool underfoot and eliminate slippery wet hazards.',
    description: 'Upgrade your swimming pool surround with porcelain, travertine, and interlocking concrete pool pavers. Engineered with textured non-slip finishes and coping stones with bullnose edges for safe swimming and effortless entertaining.',
    heroImage: 'https://images.ctfassets.net/zkpxzicsuxng/5WY3aoz4ZlVuh7jJAgm0LK/6ec8b073d454967d98c9b479a18e9235/pooldecks.jpg',
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
        answer: 'In many cases, yes. If the existing concrete pool deck is structurally sound and level, we can install ultra-thin remodel overlay pavers and cantilever coping with specialized flexible mortar, saving significant demolition and haul-away costs.',
      },
      {
        question: 'How do pool pavers handle saltwater chlorinators and pool chemicals?',
        answer: 'Our pool deck pavers and natural travertine stones are treated with high-grade breathable fluorochemical sealants that are completely impervious to saltwater splash, pool chlorine, muriatic acid, and calcium efflorescence.',
      },
      {
        question: 'Are pool pavers slippery when wet?',
        answer: 'No. Safety is our top priority. We select pavers, unpolished travertine, and porcelain with textured surfaces that meet or exceed ADA and OSHA wet Dynamic Coefficient of Friction (DCOF) standards, providing exceptional barefoot traction for children and adults.',
      },
      {
        question: 'Do pool deck pavers stay cool enough for bare feet in high summer temperatures?',
        answer: 'Yes. We engineer pool surrounds using light ivory and silver travertine, shellstone, and light-toned architectural pavers featuring high Solar Reflectance Index (SRI) ratings. These materials absorb significantly less heat than dark stamped concrete or asphalt, staying comfortable even on 100°F California days.',
      },
      {
        question: 'What coping edge options are available for the pool and spa border?',
        answer: 'We offer full bullnose rounded coping (ideal for swimmers climbing in and out), modern square eased-edge coping for contemporary pools, and rough-chiseled rockface coping for natural lagoon aesthetics. All coping pieces are custom cut to fit pool steps, curved contours, and raised spas.',
      },
      {
        question: 'What happens if underground pool plumbing leaks under the pavers?',
        answer: 'Unlike poured concrete which requires noisy jackhammers and leaves permanent, unsightly discolored patches, interlocking pool deck pavers can be individually lifted in minutes. After your plumber repairs the pipe, our crews re-level the base and reinstall the exact same stones with zero evidence of work.',
      },
      {
        question: 'How long does it take to remodel a residential pool deck with pavers?',
        answer: 'Most typical backyard pool deck renovations (800 to 1,800 sq. ft.) are completed in 4 to 7 working days, including perimeter coping installation, drainage channel grading, and polymeric joint sand sealing.',
      },
      {
        question: 'How much does a custom pool deck paver installation cost in California?',
        answer: 'Pricing depends on total square footage, coping linear footage, whether full demolition is required or an overlay is feasible, and the material selected (interlocking pavers, travertine, or porcelain). During our free in-home consultation, a senior pool hardscape specialist provides detailed measurements and an itemized 3D design estimate with 0% APR financing options.',
      },
    ],
  },
  {
    slug: 'synthetic-turf',
    title: 'Lush Artificial Grass & Putting Greens',
    shortTitle: 'Synthetic Turf',
    tagline: 'Drought-tolerant, pet-friendly, zero-water artificial turf that stays emerald green 365 days a year.',
    description: 'Cut your water bills by up to 70% while enjoying a pristine, manicured lawn all year long. Our American-made artificial turf features antimicrobial pet infill, heat-dissipating blade technology, and 15-year UV fade warranties.',
    heroImage: '/assets/transformations/turf-lawn-after.webp',
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
        question: 'How does artificial turf handle pet urine and waste odors?',
        answer: 'We install a perforated permeable backing coupled with organic antimicrobial zeolite infill. Zeolite neutralizes ammonia gas molecules on contact, preventing foul odors even under direct California summer heat. Waste drains straight through to the compacted aggregate base.',
      },
      {
        question: 'Does artificial grass get hot in California summers?',
        answer: 'Modern turf features Cool-Blade IR-reflective technology that stays 10 to 15°F cooler than older synthetic grasses. On scorching summer days, a quick 30-second rinse with a garden hose lowers the surface temperature immediately.',
      },
      {
        question: 'How fast does artificial turf drain compared to natural lawn?',
        answer: 'Our synthetic turf systems drain over 30 to 40 inches of water per hour through high-flow micro-perforated backing and a crushed rock aggregate sub-base—far exceeding California torrential storm events with zero puddling or mud.',
      },
      {
        question: 'Are turf removal rebates available in Southern California?',
        answer: 'Yes! Many California water districts (including LADWP, Metropolitan Water District, and local agencies) offer grass replacement rebates ranging from $2.00 to $5.00+ per square foot. We supply all required technical specifications and photos to assist your rebate application.',
      },
      {
        question: 'Is your synthetic turf safe for children and pets?',
        answer: '100%. All turf varieties we install are certified non-toxic, 100% lead-free, and PFAS-free, fully complying with rigorous California Proposition 65 consumer safety standards.',
      },
      {
        question: 'Can you install custom backyard putting greens?',
        answer: 'Absolutely. We design and install tournament-grade putting greens with customizable stimpmeter ball roll speeds (9 to 12), natural undulations, chipping fringes, and heavy-duty aluminum regulation cups.',
      },
      {
        question: 'How long will synthetic turf last in California?',
        answer: 'High-density American-made turf lasts 15 to 25 years under intense California sun. Every installation includes manufacturer UV degradation warranties and our comprehensive workmanship guarantee.',
      },
      {
        question: 'What maintenance is required for artificial turf?',
        answer: 'Virtually zero maintenance. Simply blow off seasonal fallen leaves with a leaf blower and rinse pet areas occasionally with a garden hose. You never have to mow, fertilize, aerate, or pay high water bills again.',
      },
    ],
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Custom Outdoor Kitchens & Fire Pits',
    shortTitle: 'Outdoor Kitchens & Fire Pits',
    tagline: 'Gourmet outdoor cooking suites, custom BBQ islands, granite countertops, and cozy gas fire features.',
    description: 'Bring the culinary experience outdoors. We engineer custom stainless steel BBQ islands, outdoor pizza ovens, wine coolers, bar seating, and linear fire pits plumbed directly to natural gas or propane.',
    heroImage: '/assets/transformations/fire-pit-after.webp',
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
        question: 'Do outdoor kitchens and gas lines require permits in California?',
        answer: 'Yes. Running new electrical branch circuits, natural gas supply lines, and plumbing tie-ins requires city permits. American Pavers & Turf handles all engineering plans, load calculations, and municipal inspections end-to-end.',
      },
      {
        question: 'Should I choose natural gas or propane for my BBQ island?',
        answer: 'Most Southern California homeowners prefer natural gas plumbed directly to the residential meter because fuel never runs out mid-barbecue. However, we also design dedicated vented storage compartments for portable propane tanks.',
      },
      {
        question: 'What are the best countertop materials for California outdoor kitchens?',
        answer: 'Honed or leathered natural granite, porcelain slabs, and outdoor-rated concrete withstand thermal heat, intense UV radiation, and grease without staining or discoloring. Standard indoor quartz is avoided due to UV resin discoloration.',
      },
      {
        question: 'How are your custom BBQ islands and outdoor kitchens framed?',
        answer: 'We build exclusively with heavy-gauge welded galvanized steel framing sheeted in cementitious backer board, or structural CMU concrete block reinforced with rebar. We never use combustible wood framing near heat appliances.',
      },
      {
        question: 'Can outdoor refrigerators withstand 100°F+ California summer heat?',
        answer: 'Yes, provided they are UL-certified outdoor-rated models. Outdoor-rated refrigerators feature forced-air compressor cooling coils and insulated 304 stainless steel cabinets certified to keep contents food-safe at 38°F even in triple-digit heat.',
      },
      {
        question: 'How do custom gas fire pits ignite and operate safely?',
        answer: 'We install electronic spark push-button ignition or keyed safety brass valves with automatic thermocouple gas shutoffs. Burners are built from heavy marine-grade 304 stainless steel or solid brass for lifetime corrosion resistance.',
      },
      {
        question: 'Can an outdoor kitchen be installed on top of existing patio pavers?',
        answer: 'Yes. We can construct directly on top of stable paver patios, or selectively lift paver courses to trench gas, electric, and drainage lines invisibly before relaying pavers with zero visible seams.',
      },
      {
        question: 'How long does it take to design and construct an outdoor kitchen?',
        answer: 'Custom 3D design and renderings take 3 to 5 business days. Once municipal permits are approved, framing, rough-in utilities, stone masonry veneer, and counter installation typically take 2 to 3 weeks on-site.',
      },
    ],
  },
  {
    slug: 'decking-pergolas',
    title: 'Composite Decks & Louvered Pergolas',
    shortTitle: 'Decks & Pergolas',
    tagline: 'Modern composite decking and motorized pergolas engineered for sun protection and modern outdoor living.',
    description: 'Elevate your outdoor environment with splinter-free Trex composite decking and motorized louvred aluminum pergolas. Complete with wind sensors, integrated LED dimmable lighting, and rainproof gutters.',
    heroImage: '/assets/transformations/pergola-after.webp',
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
        question: 'Why choose composite decking over traditional wood?',
        answer: 'High-performance composite decking (Trex / TimberTech) eliminates splinters, wood rot, termite damage, warping, and yearly staining. While natural wood degrades in 8 to 12 years under intense sun, composite decking carries a 25 to 50-year stain and fade warranty.',
      },
      {
        question: 'How do motorized louvered pergolas protect against rain?',
        answer: 'Pergola louvers feature interlocking dual-walled aluminum blades that seal watertight when closed. Optical rain sensors automatically trigger the louvers to shut at the first raindrop, directing water silently through integrated internal post gutters.',
      },
      {
        question: 'Are your pergolas engineered for high California wind loads?',
        answer: 'Yes. Our structural extruded aluminum pergolas are engineered to withstand winds up to 110–120 mph when closed, anchored with heavy structural steel plates embedded into deep reinforced concrete footings.',
      },
      {
        question: 'Can you integrate outdoor heaters, fans, and LED lighting into pergolas?',
        answer: 'Yes! We pre-wire internal electrical channels for flush-mounted infrared patio heaters (Infratech/Bromic), outdoor ceiling fans, motorized drop-down sun screens, and smartphone-controlled dimmable perimeter LED lighting.',
      },
      {
        question: 'Are building permits required for composite decks and pergolas?',
        answer: 'Decks elevated more than 30 inches above grade and permanent pergolas attached to the home or exceeding local square footage limits require municipal engineering permits. We handle all architectural drawings, structural calculations, and permit approvals.',
      },
      {
        question: 'Does composite decking get too hot for bare feet in summer?',
        answer: 'Modern capped composite boards utilize infrared-reflective pigments and cellular PVC cores that dissipate heat significantly faster than older generation composites, keeping them comfortable for barefoot lounging.',
      },
      {
        question: 'Can you build a pergola over an existing paver patio?',
        answer: 'Yes. We carefully lift perimeter pavers, core-drill to pour deep concrete pier footings down to structural subsoil, anchor the heavy structural posts, and reinstall the pavers neatly around each post with no visible concrete scars.',
      },
      {
        question: 'What maintenance does a composite deck and aluminum pergola require?',
        answer: 'Virtually zero maintenance. An occasional rinse with a garden hose and mild soapy water removes surface dust and pollen. You never need to sand, stain, paint, or reseal your outdoor living space.',
      },
    ],
  },
];
