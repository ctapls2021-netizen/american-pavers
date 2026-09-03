export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const generalFaqs: FaqItem[] = [
  {
    category: 'Process & Cost',
    question: 'How much does a custom paver or outdoor remodeling project cost?',
    answer: 'Every project is custom-engineered based on square footage, existing slope/demolition, paver style, and accessories (such as lighting, seating walls, or fire pits). During our complimentary In-Home 3D Design Consultation, our master designer measures your yard, produces a 3D visualization, and provides an itemized, guaranteed price with no hidden surprises.',
  },
  {
    category: 'Materials & Durability',
    question: 'Why are interlocking pavers superior to poured concrete or stamped concrete?',
    answer: 'Standard poured and stamped concrete is rigid; as the ground settles, experiences seismic micro-movements, or contracts under thermal changes, concrete inevitably cracks. Interlocking pavers are individual high-density stones (over 8,000 to 10,000 PSI) set over a compacted aggregate base and locked with polymeric sand. They flex naturally with soil movement, completely eliminating cracks, and if underground utility work is ever needed, individual pavers can be lifted and placed right back.',
  },
  {
    category: 'Timeline',
    question: 'How long does a typical outdoor renovation take from start to finish?',
    answer: 'Most standard driveway, patio, or turf installations take between 3 to 7 working days once on-site construction begins. Larger estate transformations involving multi-tier retaining walls, outdoor kitchens, and swimming pool copings typically take 2 to 3 weeks.',
  },
  {
    category: 'Financing',
    question: 'What financing options are available for homeowners?',
    answer: 'We offer flexible financing plans through top national lending partners, including 0% APR promotional plans for 12 to 18 months, as well as low-interest, extended payment options starting as low as $149/month with zero upfront prepayment penalties.',
  },
  {
    category: 'Permits & Warranty',
    question: 'Do you handle city permits and HOA approvals?',
    answer: 'Yes. As a fully licensed General Building (Class B) and Landscape/Hardscape Contractor, we prepare complete architectural site plans, submit all city permits, and provide HOA architectural submission packages directly to your association board.',
  },
  {
    category: 'Permits & Warranty',
    question: 'What does your 25-Year Workmanship Warranty cover?',
    answer: 'Our comprehensive warranty covers base settling, paver shifting, edge restraint integrity, and installation craftsmanship. It is also transferable to future homeowners, which adds substantial appraised value to your property.',
  },
];
