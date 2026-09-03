export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  startingPrice?: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  materialOptions?: {
    name: string;
    description: string;
    image: string;
    colors: string[];
  }[];
  beforeAfterImage?: {
    before: string;
    after: string;
    label: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface LocationItem {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  zipCodes: string[];
  projectsCompleted: number;
  highlightNeighborhoods: string[];
  localOfficeAddress: string;
  averageRating: number;
  reviewCount: number;
}

export interface TestimonialItem {
  id: string;
  author: string;
  city: string;
  state: string;
  projectType: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
  image?: string;
}

export interface LeadSubmission {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
  serviceInterest: string;
  timeframe: string;
  estimatedBudget?: string;
  notes?: string;
  sourceUrl?: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  formattedPhone: string;
  email: string;
  hours: string;
  licenseNumber: string;
  yearsInBusiness: number;
  projectsCompleted: number;
  averageRating: number;
  reviewCount: number;
  warrantyYears: number | string;
  primaryServiceArea: string;
  promoBanner: {
    enabled: boolean;
    badge: string;
    text: string;
    linkText: string;
    linkUrl: string;
  };
}
