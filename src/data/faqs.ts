export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const generalFaqs: FaqItem[] = [
  {
    category: 'Process & Cost',
    question: 'How much does a custom paver project cost with American Pavers & Turf?',
    answer: 'Every outdoor project is custom-engineered based on square footage, soil preparation, demolition, and your chosen paver style. During our complimentary In-Home 3D Design Consultation, an American Pavers & Turf master designer evaluates your yard, visualizes your project in real-time 3D, and provides an itemized, guaranteed estimate with zero hidden fees.',
  },
  {
    category: 'Materials & Durability',
    question: 'Why does American Pavers recommend interlocking pavers over poured concrete?',
    answer: 'Traditional poured and stamped concrete is rigid, cracking inevitably under California soil settling and seismic micro-movements. American Pavers & Turf installs high-density interlocking pavers rated at 10,000+ PSI over a deeply compacted crushed aggregate base locked with polymeric sand. They flex naturally without cracking and are backed by our lifetime warranty.',
  },
  {
    category: 'Timeline',
    question: 'How long does American Pavers take to complete an installation?',
    answer: 'Most standard residential driveway, patio, and synthetic turf installations are completed by American Pavers & Turf in just 3 to 5 business days once on-site excavation begins. Comprehensive estate transformations involving multi-tier retaining walls, outdoor BBQ kitchens, and pool coping typically take 2 to 3 weeks.',
  },
  {
    category: 'Financing',
    question: 'What financing options are available through American Pavers & Turf?',
    answer: 'American Pavers & Turf partners with top California home improvement lenders to offer flexible financing solutions, including 0% APR promotional financing for up to 18 months, as well as low-interest monthly plans starting as low as $149/month with no prepayment penalties.',
  },
  {
    category: 'Permits & HOA',
    question: 'Does American Pavers handle city permits and HOA architectural approvals?',
    answer: 'Yes, absolutely. As a licensed California General Building (Class B) and C-27 Landscape/Hardscape Contractor (CSLB #1087421), American Pavers & Turf drafts full architectural site plans, pulls municipal permits, and provides complete HOA architectural submission packages for your board.',
  },
  {
    category: 'Warranty',
    question: 'What does the American Pavers Lifetime Craftsmanship Warranty cover?',
    answer: 'Our comprehensive warranty protects your investment against base settling, paver shifting, edge restraint failure, and installation defects. Furthermore, the American Pavers & Turf warranty is fully transferable to the next homeowner, increasing the appraised market value of your property.',
  },
];

