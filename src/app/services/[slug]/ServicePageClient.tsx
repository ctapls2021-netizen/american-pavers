'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/types';
import { companyData } from '@/data/company';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FaqAccordion from '@/components/sections/FaqAccordion';
import TrustBar from '@/components/sections/TrustBar';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import LeadFormModal from '@/components/ui/LeadFormModal';
import ServiceHeroStatic from '@/components/sections/services/ServiceHeroStatic';
import DrivewayFeatureSplit from '@/components/sections/services/DrivewayFeatureSplit';
import PaversVsConcrete, { ComparisonItem } from '@/components/sections/services/PaversVsConcrete';
import PaverInstallationLayers from '@/components/sections/services/PaverInstallationLayers';
import PaversVsOtherMaterials from '@/components/sections/services/PaversVsOtherMaterials';
import DrivewayCarouselSection from '@/components/sections/services/DrivewayCarouselSection';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import TurfProductTiers from '@/components/sections/services/TurfProductTiers';
import { CheckCircle2, ShieldCheck, ChevronRight, Layers } from 'lucide-react';

const patioComparisonData: ComparisonItem[] = [
  {
    feature: 'Seismic & Ground Settling',
    pavers: 'Flexible sand joints articulate seamlessly with zero cracking',
    concrete: 'Rigid slab inevitably fractures as California clay expands and shrinks',
    winner: 'pavers',
    detail: 'Southern California soils shift seasonally. Pavers disperse ground tension across joints instead of developing ugly stress cracks.',
  },
  {
    feature: 'Summer Heat & Barefoot Comfort',
    pavers: 'High-SRI cool-touch pavers reflect intense afternoon sunlight',
    concrete: 'Dense concrete absorbs heat and becomes uncomfortably hot to walk on',
    winner: 'pavers',
    detail: 'Engineered pavers with light-reflective mineral aggregates remain pleasant underfoot even during peak July and August heat.',
  },
  {
    feature: 'Rain Drainage & Standing Puddles',
    pavers: 'Permeable bedding drains excess rainwater naturally into base',
    concrete: 'Porous slabs puddle water, breeding mildew, algae, and mosquitoes',
    winner: 'pavers',
    detail: 'Water filters through joints into the sub-base, eliminating slippery puddles near patio doors and outdoor furniture.',
  },
  {
    feature: 'BBQ Grease, Wine & Stain Resistance',
    pavers: 'High-density sealed surface repels food oils, wine, and spills',
    concrete: 'Porous unsealed concrete permanently absorbs cooking grease',
    winner: 'pavers',
    detail: 'Factory-cured pavers resist backyard party spills. Any stubborn spot cleans easily with mild soap and water.',
  },
  {
    feature: 'Tree Roots & Plumbing Repairability',
    pavers: 'Stones lift in minutes for root trimming or pipe access and reset invisibly',
    concrete: 'Roots heave and crack slabs, requiring jackhammers and leaving obvious patches',
    winner: 'pavers',
    detail: 'If you ever need irrigation repairs or gas line extensions, pavers are reinstalled seamlessly with zero evidence.',
  },
  {
    feature: 'Aesthetic Value & Lifespan',
    pavers: 'Timeless architectural patterns backed by 25-year structural warranty',
    concrete: 'Dull gray or fading stamped concrete prone to chipping within 3-5 years',
    winner: 'pavers',
    detail: 'Interlocking pavers significantly increase home resale value and maintain their rich color and texture for decades.',
  },
];

const poolComparisonData: ComparisonItem[] = [
  {
    feature: 'Wet Slip Resistance & Foot Traction',
    pavers: 'Micro-textured pavers exceed strict commercial ADA wet slip standards',
    concrete: 'Poured or stamped concrete becomes dangerously slick when splashed',
    winner: 'pavers',
    detail: 'Designed specifically for wet poolside feet, preventing dangerous slip-and-fall accidents for children and guests.',
  },
  {
    feature: 'Barefoot Heat Performance',
    pavers: 'Light-toned high-SRI stone pavers stay cool in the midday California sun',
    concrete: 'Standard concrete slabs bake under UV rays and scorch tender bare feet',
    winner: 'pavers',
    detail: 'Solar-reflective formulas keep deck temperatures noticeably lower than dark concrete or composite wood.',
  },
  {
    feature: 'Chlorine & Saltwater Durability',
    pavers: 'Impervious factory-cured stone resists saltwater corrosion and chemical pitting',
    concrete: 'Saltwater and pool sanitizers slowly erode, pit, and flake concrete surfaces',
    winner: 'pavers',
    detail: 'High-density paver matrix resists salt crystallization and pool chemical splashes without surface spalling.',
  },
  {
    feature: 'Pool Safety Coping & Bullnose Edges',
    pavers: 'Smooth rounded bullnose coping stones protect hands, knees, and swimsuits',
    concrete: 'Rough cantilevered concrete edges chip, scrape skin, and snag bathing suits',
    winner: 'pavers',
    detail: 'Custom pool edge coping creates a luxurious, rounded grip for swimmers exiting the water safely.',
  },
  {
    feature: 'Underground Pool Plumbing Access',
    pavers: 'Lifts cleanly for pipe, skimmer, or LED light repairs and reinstalls invisibly',
    concrete: 'Requires noisy jackhammering and leaves mismatched, unsightly scar lines',
    winner: 'pavers',
    detail: 'Pool equipment lines inevitably need maintenance. Paver systems save thousands in repair and restoration costs.',
  },
  {
    feature: 'Seismic Shock & Pool Shell Protection',
    pavers: 'Jointed system absorbs ground micro-movements without stressing pool beam',
    concrete: 'Rigid deck pulls against the pool bond beam, risking structural fractures',
    winner: 'pavers',
    detail: 'Independent expansion joints prevent ground settling from transferring structural stress to your pool shell.',
  },
];

const turfComparisonData: ComparisonItem[] = [
  {
    feature: 'Annual Water Consumption',
    pavers: '0 Gallons (Saves 55+ gal/sq.ft. annually)',
    concrete: 'Tens of thousands of gallons on high tiered rates',
    winner: 'pavers',
    detail: 'Save up to 70% on monthly municipal water utility bills immediately upon installation.',
  },
  {
    feature: 'Pet Performance & Odor Control',
    pavers: 'Antimicrobial Zeolite neutralizes ammonia odor',
    concrete: 'Urine burns yellow dead spots & creates mud',
    winner: 'pavers',
    detail: 'Urine drains directly through perforated backing into aggregate; solids rinse clean with zero mud.',
  },
  {
    feature: 'Maintenance & Weekend Labor',
    pavers: 'Zero mowing, edging, fertilizing, or aerating',
    concrete: 'Weekly mowing, noisy gas mowers & weed pulling',
    winner: 'pavers',
    detail: 'Reclaim your weekends with a clean surface that only needs occasional leaf blower sweeps.',
  },
  {
    feature: 'Chemicals, Fertilizers & Runoff',
    pavers: '100% Non-toxic, lead-free, zero chemicals needed',
    concrete: 'Requires chemical fertilizers, weed killers & pesticides',
    winner: 'pavers',
    detail: 'Safe for dogs, children, and local watershed ecology with zero toxic fertilizer runoff.',
  },
  {
    feature: 'Storm Drainage & Mud Prevention',
    pavers: '30+ inches/hour rapid drainage sub-base',
    concrete: 'Clay soil puddles, creating muddy paw tracks',
    winner: 'pavers',
    detail: 'Children and pets can play outside immediately after rain with zero mud tracked into your home.',
  },
  {
    feature: 'Appearance & UV Warranty',
    pavers: '15-Year UV fade warranty, stays emerald green 365 days',
    concrete: 'Browns in summer heat, develops bald patches & crabgrass',
    winner: 'pavers',
    detail: 'UV-stabilized American polyethylene fibers withstand Southern California sun without fading.',
  },
];

const kitchenComparisonData: ComparisonItem[] = [
  {
    feature: 'Structural Framing Core',
    pavers: 'Welded heavy-gauge galvanized steel or CMU block',
    concrete: 'Flimsy thin aluminum or combustible wood framing',
    winner: 'pavers',
    detail: 'Engineered to support heavy commercial appliances, natural stone, and seismic loads without sagging.',
  },
  {
    feature: 'Appliance Grade & Durability',
    pavers: '304 & marine-grade 316 stainless steel suites',
    concrete: 'Low-grade 430 stainless steel prone to surface rust',
    winner: 'pavers',
    detail: 'Withstands corrosive coastal marine air and extreme summer heat without pitting or staining.',
  },
  {
    feature: 'Countertop Materials & UV Stability',
    pavers: 'Honed natural granite, porcelain slabs & outdoor concrete',
    concrete: 'Standard indoor quartz (yellows under direct UV rays)',
    winner: 'pavers',
    detail: 'Resistant to hot grill pans, grease splatters, citrus acids, and direct sunlight.',
  },
  {
    feature: 'Gas, Electrical & Plumbing Permitting',
    pavers: 'Complete architectural drawings & city permits handled',
    concrete: 'DIY kits often violate local fire codes & gas clearances',
    winner: 'pavers',
    detail: 'Fully permitted with certified pressure tests for natural gas lines and dedicated GFCI circuits.',
  },
  {
    feature: 'Custom Layout & Site Fit',
    pavers: 'Tailored 3D architectural design built to exact yard dimensions',
    concrete: 'Rigid fixed-size rectangular modular boxes',
    winner: 'pavers',
    detail: 'Custom angles, bar seating heights, pizza oven recesses, and integrated trash drawers.',
  },
  {
    feature: 'Structural Workmanship Warranty',
    pavers: 'Comprehensive lifetime structural build warranty',
    concrete: 'Limited 1-year parts-only manufacturer warranty',
    winner: 'pavers',
    detail: 'Backed by licensed California Class B hardscape and outdoor living general contractors.',
  },
];

const pergolaComparisonData: ComparisonItem[] = [
  {
    feature: 'Weather Protection & Louver Control',
    pavers: 'Motorized 180° rotation with optical rain sensors',
    concrete: 'Static open wood slats with zero rain protection',
    winner: 'pavers',
    detail: 'Louvers close automatically when rain begins, channeling water silently down internal posts.',
  },
  {
    feature: 'Termite, Rot & Splinter Resistance',
    pavers: '100% Extruded aluminum & capped composite (Trex)',
    concrete: 'Natural redwood & cedar prone to rot, termites & splinters',
    winner: 'pavers',
    detail: 'Splinter-free barefoot comfort and zero pest damage, ideal for California poolside living.',
  },
  {
    feature: 'Annual Maintenance & Repainting',
    pavers: 'Zero staining, painting, or sanding ever required',
    concrete: 'Requires costly biennial sanding, staining, and sealing',
    winner: 'pavers',
    detail: 'Occasional hose rinse keeps surfaces looking showroom new for decades.',
  },
  {
    feature: 'Wind Load Engineering',
    pavers: 'Engineered for 110–120 MPH California wind ratings',
    concrete: 'Lightweight wood pergolas vulnerable to high Santa Ana winds',
    winner: 'pavers',
    detail: 'Deep concrete pier footings and heavy structural steel baseplates engineered for seismic code.',
  },
  {
    feature: 'Integrated Smart Features',
    pavers: 'Concealed LED dimmable channels, heaters & fan mounts',
    concrete: 'Exposed surface wiring and conduit pipes',
    winner: 'pavers',
    detail: 'Internal raceways conceal all electrical wires for flush-mounted infrared patio heaters and fans.',
  },
  {
    feature: 'Warranty Protection',
    pavers: '25 to 50-Year manufacturer stain & fade warranty',
    concrete: 'Typically no warranty against wood warpage or sun cracking',
    winner: 'pavers',
    detail: 'Engineered capping technology shields deck boards from UV degradation and foot traffic.',
  },
];

interface ServicePageClientProps {
  service: ServiceItem;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const isDriveway = service.slug === 'driveway-pavers';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {isDriveway ? (
          /* ==================================================================== */
          /* SPECIALIZED DRIVEWAY PAVERS EXPERIENCE                               */
          /* ==================================================================== */
          <>
            {/* 1. Replicated Home Hero with Static Service Image & 50% Height */}
            <ServiceHeroStatic
              title="Engineered Driveway Pavers"
              tagline="Transforming California residential driveways with 10,000+ PSI interlocking pavers guaranteed for a lifetime."
              imageSrc="/assets/banners/banner-driveway.webp"
              serviceName={service.shortTitle}
              onOpenModal={handleOpenModal}
            />

            {/* 2. Editorial Split Feature with Real Paver Image, Typography & 2 Buttons */}
            <DrivewayFeatureSplit onOpenModal={handleOpenModal} />

            {/* 3. Installation You Can Trust (3D Layered Base Engineering) */}
            <PaverInstallationLayers onOpenModal={handleOpenModal} />

            {/* 4. Pavers vs Other Materials (Split Visual & Performance Points) */}
            <PaversVsOtherMaterials
              serviceSlug={service.slug}
              onOpenModal={handleOpenModal}
              comparisonAnchorId="engineering-comparison"
            />

            {/* 5. Interlocking Pavers vs. Poured Concrete Engineering Comparison */}
            <PaversVsConcrete
              serviceSlug={service.slug}
              primaryColumnTitle="American Pavers & Turf Driveway"
              secondaryColumnTitle="Conventional Poured Concrete"
              onOpenModal={handleOpenModal}
            />

            {/* 4. 3D Regional Installation Carousel (Aceternity UI adapted to Brand Style) */}
            <DrivewayCarouselSection />

            {/* 5. Real Driveway Before / After Transformation */}
            <BeforeAfterSlider
              onOpenModal={handleOpenModal}
              initialId="driveway"
              hideTabs={true}
              title="Real Before & After Driveway Transformation"
              subtitle="Slide across to see how we transformed an aged, cracked concrete driveway into a luxury 10,000+ PSI interlocking paver entrance in Pasadena, CA."
            />

            {/* 6. Customer Testimonials */}
            <TestimonialsGrid />

            {/* 7. Driveway Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: 'Driveway Pavers' }))}
                title="Driveway Pavers Frequently Asked Questions"
                subtitle="Get honest, contractor-direct answers about driveway permits, slopes, weight capacities, and pricing across Southern California."
              />
            )}

            {/* 8. Bottom CTA Banner */}
            <BottomCtaBanner
              onOpenModal={handleOpenModal}
              title="Ready to Transform Your Home with a Custom Paver Driveway?"
              subtitle="Schedule your complimentary in-home design consultation. One of our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf."
            />
          </>
        ) : service.slug === 'patio-pavers' ? (
          /* ==================================================================== */
          /* SPECIALIZED PATIO PAVERS EXPERIENCE                                  */
          /* ==================================================================== */
          <>
            {/* 1. Hero with Static Service Image & 50% Height */}
            <ServiceHeroStatic
              title="Luxury Backyard Patio Pavers"
              tagline="Transforming Southern California backyards into resort-inspired outdoor living spaces with custom interlocking pavers and stone artistry."
              imageSrc="/assets/banners/banner-patio.webp"
              serviceName={service.shortTitle}
              onOpenModal={handleOpenModal}
            />

            {/* 2. Editorial Split Feature with Real Photo & 2 Buttons */}
            <DrivewayFeatureSplit
              overline="Backyard Architecture & Living"
              title="Designed for California Sunshine. Built to Last Generations."
              description="Say goodbye to cramped, sun-baked concrete slabs and decaying wood decks. Our custom interlocking patio paver systems are engineered with high-SRI cool-touch finishes, flexible earthquake-resistant aggregate bases, and seamless integration for outdoor kitchens, fire pits, and shaded dining pavilions."
              imageSrc="/assets/transformations/patio-after.webp"
              imageAlt="Luxury Backyard Patio Paver Installation in Newport Beach, CA"
              primaryBtnText="Schedule Free 3D Design"
              onOpenModal={handleOpenModal}
            />

            {/* 3. Installation You Can Trust (3D Layered Base Engineering) */}
            <PaverInstallationLayers onOpenModal={handleOpenModal} />

            {/* 4. Pavers vs Other Materials (Split Visual & Performance Points) */}
            <PaversVsOtherMaterials
              serviceSlug={service.slug}
              onOpenModal={handleOpenModal}
              comparisonAnchorId="engineering-comparison"
            />

            {/* 5. Pavers vs Concrete Slabs Comparison */}
            <PaversVsConcrete
              serviceSlug={service.slug}
              overline="Material Performance"
              title="Why Interlocking Patio Pavers Outlast Concrete Slabs"
              subtitle="Poured concrete backyard slabs inevitably develop hairline fractures, puddle water, and absorb excessive summer heat. Discover how interlocking pavers deliver flexible jointing, natural drainage, and lifetime elegance."
              primaryColumnTitle="American Pavers & Turf Patio"
              secondaryColumnTitle="Conventional Concrete Slab"
              items={patioComparisonData}
              footerText="Over 800+ California Patio Transformations Completed. Backed by our 25-Year transferable structural guarantee."
              buttonText="Design Your Custom Patio"
              onOpenModal={handleOpenModal}
            />

            {/* 4. 3D Regional Installation Carousel */}
            <DrivewayCarouselSection
              overline="California Patio Portfolio"
              title="Custom Patio Paver Installations"
              subtitle="Explore authentic outdoor living patios engineered and installed for homeowners across Los Angeles, Orange County, and the Inland Empire."
              slides={[
                { title: 'Newport Beach, CA', src: '/assets/transformations/patio-after.webp' },
                { title: 'Beverly Hills, CA', src: '/assets/banners/banner-patio.webp' },
                { title: 'Irvine, CA', src: '/assets/transformations/fire-pit-after.webp' },
                { title: 'Pasadena, CA', src: '/assets/transformations/pergola-after.webp' },
                { title: 'San Diego, CA', src: '/assets/banners/banner-turf.webp' },
                { title: 'Encino, CA', src: '/assets/banners/banner-kitchen.webp' },
              ]}
            />

            {/* 5. Real Patio Before / After Transformation */}
            <BeforeAfterSlider
              onOpenModal={handleOpenModal}
              initialId="patio"
              hideTabs={true}
              title="Real Before & After Patio Transformation"
              subtitle="Move your cursor across to see how we expanded a cramped 180 sq. ft. concrete slab into a 650 sq. ft. luxury interlocking paver dining and BBQ retreat in Newport Beach, CA."
            />

            {/* 6. Customer Testimonials */}
            <TestimonialsGrid />

            {/* 7. Patio Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: 'Patio Pavers' }))}
                title="Patio Pavers Frequently Asked Questions"
                subtitle="Get honest, contractor-direct answers about patio drainage, heat absorption, design flexibility, and cost estimates across Southern California."
              />
            )}

            {/* 8. Bottom CTA Banner */}
            <BottomCtaBanner
              onOpenModal={handleOpenModal}
              title="Ready to Build Your Dream Backyard Patio?"
              subtitle="Schedule your complimentary in-home 3D design consultation. Our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf."
            />
          </>
        ) : service.slug === 'pool-deck-pavers' ? (
          /* ==================================================================== */
          /* SPECIALIZED POOL DECK PAVERS EXPERIENCE                              */
          /* ==================================================================== */
          <>
            {/* 1. Hero with Static Service Image & 50% Height */}
            <ServiceHeroStatic
              title="Slip-Resistant Pool Deck Pavers"
              tagline="Transforming California pool surrounds and coping with cool-touch, non-slip interlocking pavers guaranteed for a lifetime."
              imageSrc="/assets/banners/banner-pool.webp"
              serviceName={service.shortTitle}
              onOpenModal={handleOpenModal}
            />

            {/* 2. Editorial Split Feature with Real Photo & 2 Buttons */}
            <DrivewayFeatureSplit
              overline="Resort Pool Living & Safety"
              title="Engineered for Barefoot Comfort, Wet Traction & Resort Elegance."
              description="Upgrade cracked, burning-hot concrete with high-performance interlocking pool deck pavers and custom bullnose safety coping. Engineered with textured non-slip finishes meeting strict ADA slip-resistance standards, high Solar Reflectance Index (SRI) materials that stay cool on summer afternoons, and impervious sealants unaffected by chlorine or saltwater splash."
              imageSrc="/assets/transformations/pool-deck-after.webp"
              imageAlt="Luxury Slip-Resistant Pool Deck Pavers and Bullnose Coping"
              primaryBtnText="Schedule Free 3D Design"
              onOpenModal={handleOpenModal}
            />

            {/* 3. Installation You Can Trust (3D Layered Base Engineering) */}
            <PaverInstallationLayers onOpenModal={handleOpenModal} />

            {/* 4. Pavers vs Other Materials (Split Visual & Performance Points) */}
            <PaversVsOtherMaterials
              serviceSlug={service.slug}
              onOpenModal={handleOpenModal}
              comparisonAnchorId="engineering-comparison"
            />

            {/* 5. Pavers vs Poured Pool Concrete Comparison */}
            <PaversVsConcrete
              serviceSlug={service.slug}
              overline="Poolside Safety Comparison"
              title="Why Interlocking Pool Pavers Outperform Poured Concrete"
              subtitle="Poured concrete around swimming pools gets burning hot, becomes slippery when wet, and requires expensive jackhammering for plumbing repairs. Interlocking pavers stay cool, grip bare feet, and lift invisibly for pipe maintenance."
              primaryColumnTitle="American Pavers & Turf Pool Deck"
              secondaryColumnTitle="Conventional Pool Concrete"
              items={poolComparisonData}
              footerText="Exceeds ADA wet slip resistance standards. Backed by our 25-Year transferable structural guarantee."
              buttonText="Design Your Resort Pool Deck"
              onOpenModal={handleOpenModal}
            />

            {/* 4. 3D Regional Installation Carousel */}
            <DrivewayCarouselSection
              overline="California Pool Portfolio"
              title="Custom Pool Deck & Coping Installations"
              subtitle="Explore authentic resort-inspired pool surrounds, bullnose coping, and integrated spas built across Southern California."
              slides={[
                { title: 'Palm Springs, CA', src: '/assets/banners/banner-pool.webp' },
                { title: 'Beverly Hills, CA', src: '/assets/transformations/pool-deck-after.webp' },
                { title: 'Newport Beach, CA', src: '/assets/transformations/turf-pool-after.webp' },
                { title: 'Irvine, CA', src: '/assets/banners/banner-patio.webp' },
                { title: 'Pasadena, CA', src: '/assets/transformations/patio-after.webp' },
                { title: 'San Diego, CA', src: '/assets/banners/banner-turf.webp' },
              ]}
            />

            {/* 5. Real Pool Deck Before / After Transformation */}
            <BeforeAfterSlider
              onOpenModal={handleOpenModal}
              initialId="pool-deck"
              hideTabs={true}
              title="Real Before & After Pool Deck Transformation"
              subtitle="Slide across to see how we transformed an excavated pool construction site into a luxury resort pool deck with slip-resistant pavers, safety coping, and lush landscaping in Palm Springs, CA."
            />

            {/* 6. Customer Testimonials */}
            <TestimonialsGrid />

            {/* 7. Pool Deck Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: 'Pool Deck Pavers' }))}
                title="Pool Deck Pavers Frequently Asked Questions"
                subtitle="Get honest, contractor-direct answers about pool coping options, wet slip resistance, saltwater compatibility, and underground plumbing access across Southern California."
              />
            )}

            {/* 8. Bottom CTA Banner */}
            <BottomCtaBanner
              onOpenModal={handleOpenModal}
              title="Ready to Build Your Private Resort Pool Deck?"
              subtitle="Schedule your complimentary in-home 3D design consultation. Our senior pool hardscape specialists will measure your pool surround, bring physical stone samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf."
            />
          </>
        ) : service.slug === 'synthetic-turf' ? (
          /* ==================================================================== */
          /* SPECIALIZED SYNTHETIC TURF EXPERIENCE                                */
          /* ==================================================================== */
          <>
            {/* 1. Hero with Static Service Image & 50% Height */}
            <ServiceHeroStatic
              title="Lush Artificial Grass & Putting Greens"
              tagline="Drought-tolerant, pet-friendly, zero-water artificial turf that stays emerald green 365 days a year across Southern California."
              imageSrc="/assets/banners/banner-turf.webp"
              serviceName={service.shortTitle}
              onOpenModal={handleOpenModal}
            />

            {/* 2. Editorial Split Feature with Real Photo & 2 Buttons */}
            <DrivewayFeatureSplit
              overline="Water Conservation & Pet Performance"
              title="Save Thousands in Water Bills While Enjoying a Flawless, Mud-Free Lawn."
              description="Upgrade dying California grass with American-made synthetic turf featuring Cool-Blade heat dissipation, antimicrobial zeolite pet infill, and 30+ inches/hour drainage. Perfect for active dogs, family play, poolside accents, and custom backyard putting greens with zero mowing, fertilizers, or water waste."
              imageSrc="/assets/transformations/turf-lawn-after.webp"
              imageAlt="Luxury Artificial Turf and Putting Green Installation"
              primaryBtnText="Schedule Free 3D Design"
              onOpenModal={handleOpenModal}
            />

            {/* 3. Turf Product Options: Standard, Pro & Premium */}
            <TurfProductTiers onOpenModal={handleOpenModal} />

            {/* 4. Turf vs Natural Grass Comparison */}
            <PaversVsConcrete
              serviceSlug={service.slug}
              overline="Lawn Performance Comparison"
              title="Why Synthetic Turf Beats High-Water Natural California Grass"
              subtitle="Traditional grass in Southern California demands thousands of gallons of costly tiered water, constant mowing, chemical fertilizers, and tracks wet mud inside. Premium synthetic turf eliminates maintenance while maintaining pristine curb appeal."
              primaryColumnTitle="American Synthetic Turf"
              secondaryColumnTitle="Natural California Grass"
              items={turfComparisonData}
              footerText="Qualifies for Southern California Water District Turf Replacement Rebates ($2 to $5+/sq.ft.)."
              buttonText="Calculate Your Turf Savings"
              onOpenModal={handleOpenModal}
            />

            {/* 4. 3D Regional Installation Carousel */}
            <DrivewayCarouselSection
              overline="California Turf Portfolio"
              title="Custom Turf & Putting Green Installations"
              subtitle="Explore authentic lawn replacements, dog runs, and championship putting greens installed across Southern California."
              slides={[
                { title: 'San Diego, CA', src: '/assets/transformations/turf-lawn-after.webp' },
                { title: 'Beverly Hills, CA', src: '/assets/banners/banner-turf.webp' },
                { title: 'Irvine, CA', src: '/assets/banners/banner-patio.webp' },
                { title: 'Newport Beach, CA', src: '/assets/banners/banner-pool.webp' },
                { title: 'Pasadena, CA', src: '/assets/transformations/patio-after.webp' },
                { title: 'Palm Springs, CA', src: '/assets/transformations/fire-pit-after.webp' },
              ]}
            />

            {/* 5. Real Turf Before / After Transformation */}
            <BeforeAfterSlider
              onOpenModal={handleOpenModal}
              initialId="turf"
              hideTabs={true}
              title="Real Before & After Synthetic Turf Transformation"
              subtitle="Slide across to see how we transformed drought-stricken, dead dormant grass into a vibrant emerald green synthetic grass lawn with modern paver borders in San Diego, CA."
            />

            {/* 6. Customer Testimonials */}
            <TestimonialsGrid />

            {/* 7. Turf Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: 'Synthetic Turf' }))}
                title="Synthetic Turf Frequently Asked Questions"
                subtitle="Get honest, contractor-direct answers about pet turf drainage, turf removal rebates, heat reduction, putting greens, and long-term durability across Southern California."
              />
            )}

            {/* 8. Bottom CTA Banner */}
            <BottomCtaBanner
              onOpenModal={handleOpenModal}
              title="Ready for an Emerald Green Lawn Without the Water Bill?"
              subtitle="Schedule your complimentary in-home 3D design consultation. Our senior turf specialists will measure your lawn, bring turf samples, calculate local water rebates, and provide an exact, transparent quote with American Pavers & Turf."
            />
          </>
        ) : service.slug === 'outdoor-kitchens' ? (
          /* ==================================================================== */
          /* SPECIALIZED OUTDOOR KITCHENS & FIRE PITS EXPERIENCE                 */
          /* ==================================================================== */
          <>
            {/* 1. Hero with Static Service Image & 50% Height */}
            <ServiceHeroStatic
              title="Custom Outdoor Kitchens & Fire Pits"
              tagline="Gourmet stainless steel BBQ islands, outdoor pizza ovens, granite countertops, and cozy gas fire features."
              imageSrc="/assets/banners/banner-kitchen.webp"
              serviceName={service.shortTitle}
              onOpenModal={handleOpenModal}
            />

            {/* 2. Editorial Split Feature with Real Photo & 2 Buttons */}
            <DrivewayFeatureSplit
              overline="Gourmet Outdoor Living & Culinary Craft"
              title="Architectural Outdoor Kitchens & Warm Gas Fire Pit Lounges."
              description="Transform your backyard into an outdoor culinary paradise. We custom engineer heavy-duty galvanized steel framing or structural masonry block suites equipped with 304 marine-grade stainless steel BBQ grills, beverage coolers, granite counters, and push-button electronic gas fire pits plumbed directly to your residential gas line."
              imageSrc="/assets/transformations/fire-pit-after.webp"
              imageAlt="Luxury Custom Outdoor Kitchen and Gas Fire Pit Lounge"
              primaryBtnText="Schedule Free 3D Design"
              onOpenModal={handleOpenModal}
            />

            {/* 3. Custom Masonry vs Modular Box Kits Comparison */}
            <PaversVsConcrete
              serviceSlug={service.slug}
              overline="Construction Quality Comparison"
              title="Why Custom Masonry & Steel Kitchens Outlast Modular Kits"
              subtitle="Prefabricated box-store outdoor islands degrade under California heat, warp, and lack proper utility clearances. Discover why commercial-grade welded steel and reinforced masonry provide unmatched longevity."
              primaryColumnTitle="American Pavers & Turf Custom Build"
              secondaryColumnTitle="Prefabricated Modular Box Kits"
              items={kitchenComparisonData}
              footerText="Over 600+ California Outdoor Living Suites Built. End-to-end gas, electric, and plumbing permitting handled."
              buttonText="Design Your Outdoor Kitchen"
              onOpenModal={handleOpenModal}
            />

            {/* 4. 3D Regional Installation Carousel */}
            <DrivewayCarouselSection
              overline="California Outdoor Living Portfolio"
              title="Custom Kitchens & Fire Pit Installations"
              subtitle="Browse authentic outdoor BBQ suites, swim-up bars, and fireside seating areas built across Southern California."
              slides={[
                { title: 'Irvine, CA', src: '/assets/banners/banner-kitchen.webp' },
                { title: 'Newport Beach, CA', src: '/assets/transformations/fire-pit-after.webp' },
                { title: 'Beverly Hills, CA', src: '/assets/banners/banner-patio.webp' },
                { title: 'Palm Springs, CA', src: '/assets/banners/banner-pool.webp' },
                { title: 'Pasadena, CA', src: '/assets/transformations/patio-after.webp' },
                { title: 'San Diego, CA', src: '/assets/banners/banner-turf.webp' },
              ]}
            />

            {/* 5. Real Kitchen / Fire Pit Before / After Transformation */}
            <BeforeAfterSlider
              onOpenModal={handleOpenModal}
              initialId="outdoor-kitchen"
              hideTabs={true}
              title="Real Before & After Outdoor Kitchen & Fire Pit Transformation"
              subtitle="Slide across to see how we transformed an overgrown weed yard into a modern gas fire pit lounge and outdoor living retreat in Irvine, CA."
            />

            {/* 6. Customer Testimonials */}
            <TestimonialsGrid />

            {/* 7. Outdoor Kitchen Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: 'Outdoor Kitchens & Fire Pits' }))}
                title="Outdoor Kitchens & Fire Pits Frequently Asked Questions"
                subtitle="Get honest, contractor-direct answers about natural gas plumbing, city permits, countertop materials, appliance warranties, and custom design options across Southern California."
              />
            )}

            {/* 8. Bottom CTA Banner */}
            <BottomCtaBanner
              onOpenModal={handleOpenModal}
              title="Ready to Build Your Custom Gourmet Outdoor Kitchen?"
              subtitle="Schedule your complimentary in-home 3D design consultation. Our senior outdoor living architects will measure your space, present 3D layouts, showcase countertop and appliance options, and deliver a guaranteed transparent quote with American Pavers & Turf."
            />
          </>
        ) : service.slug === 'decking-pergolas' ? (
          /* ==================================================================== */
          /* SPECIALIZED DECKS & PERGOLAS EXPERIENCE                              */
          /* ==================================================================== */
          <>
            {/* 1. Hero with Static Service Image & 50% Height */}
            <ServiceHeroStatic
              title="Composite Decks & Louvered Pergolas"
              tagline="Modern composite decking and motorized pergolas engineered for sun protection and modern outdoor living."
              imageSrc="/assets/banners/banner-deck.webp"
              serviceName={service.shortTitle}
              onOpenModal={handleOpenModal}
            />

            {/* 2. Editorial Split Feature with Real Photo & 2 Buttons */}
            <DrivewayFeatureSplit
              overline="Architectural Shade & Splinter-Free Decking"
              title="Motorized Louvered Shade Systems & Low-Maintenance Composite Living."
              description="Enjoy your California backyard in any weather. Our motorized dual-walled aluminum pergolas feature 180-degree rotating louvers and automatic optical rain sensors that seal shut instantly when showers begin. Paired with splinter-free capped composite decking (Trex / TimberTech) that never rots, warps, or requires staining."
              imageSrc="/assets/transformations/pergola-after.webp"
              imageAlt="Modern Louvered Aluminum Pergola and Composite Decking"
              primaryBtnText="Schedule Free 3D Design"
              onOpenModal={handleOpenModal}
            />

            {/* 3. Composite & Aluminum vs Wood Comparison */}
            <PaversVsConcrete
              serviceSlug={service.slug}
              overline="Material Durability Comparison"
              title="Why Capped Composite & Extruded Aluminum Outperform Natural Wood"
              subtitle="Traditional redwood and cedar decks warp, crack, splinter, and rot within 7 to 10 years under relentless Southern California UV rays. Discover the zero-maintenance advantage of engineered composites and powder-coated aluminum."
              primaryColumnTitle="Composite Decks & Aluminum Pergolas"
              secondaryColumnTitle="Traditional Wood Decks & Arbors"
              items={pergolaComparisonData}
              footerText="Engineered for 110+ MPH California Wind Loads. Backed by 25 to 50-Year manufacturer stain & fade warranties."
              buttonText="Calculate Your Pergola & Deck Cost"
              onOpenModal={handleOpenModal}
            />

            {/* 4. 3D Regional Installation Carousel */}
            <DrivewayCarouselSection
              overline="California Decking & Pergola Portfolio"
              title="Custom Decks & Motorized Pergolas"
              subtitle="Explore motorized aluminum pergolas, multi-level composite decks, and integrated privacy screens built across Southern California."
              slides={[
                { title: 'Los Angeles, CA', src: '/assets/banners/banner-deck.webp' },
                { title: 'Pasadena, CA', src: '/assets/transformations/pergola-after.webp' },
                { title: 'Newport Beach, CA', src: '/assets/banners/banner-patio.webp' },
                { title: 'Beverly Hills, CA', src: '/assets/banners/banner-kitchen.webp' },
                { title: 'San Diego, CA', src: '/assets/banners/banner-turf.webp' },
                { title: 'Palm Springs, CA', src: '/assets/banners/banner-pool.webp' },
              ]}
            />

            {/* 5. Real Pergola Before / After Transformation */}
            <BeforeAfterSlider
              onOpenModal={handleOpenModal}
              initialId="pergola"
              hideTabs={true}
              title="Real Before & After Pergola & Deck Transformation"
              subtitle="Slide across to see how we transformed concrete rubble and an unshaded yard into a motorized louvered pergola and outdoor living deck in Los Angeles, CA."
            />

            {/* 6. Customer Testimonials */}
            <TestimonialsGrid />

            {/* 7. Decks & Pergolas Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: 'Decks & Pergolas' }))}
                title="Decks & Pergolas Frequently Asked Questions"
                subtitle="Get honest, contractor-direct answers about motorized rain sensors, wind ratings, composite stain resistance, municipal permits, and custom lighting across Southern California."
              />
            )}

            {/* 8. Bottom CTA Banner */}
            <BottomCtaBanner
              onOpenModal={handleOpenModal}
              title="Ready to Transform Your Backyard with Shade & Modern Decking?"
              subtitle="Schedule your complimentary in-home 3D design consultation. Our senior outdoor structure architects will measure your space, demonstrate motorized louver samples, and provide a guaranteed, transparent 3D estimate with American Pavers & Turf."
            />
          </>
        ) : (
          /* ==================================================================== */
          /* GENERAL SERVICE TEMPLATE (For other services)                       */
          /* ==================================================================== */
          <>
            {/* Breadcrumb Bar */}
            <div className="bg-stone-100 border-b border-stone-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-stone-600">
              <div className="max-w-7xl mx-auto flex items-center gap-1.5">
                <Link href="/" className="hover:text-stone-900">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-stone-400">Services</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                <span className="font-bold text-stone-900">{service.shortTitle}</span>
              </div>
            </div>

            {/* General Hero Banner */}
            <section className="relative bg-[#1A292C] text-white py-20 lg:py-28 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-40">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-center filter brightness-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A292C] via-[#1A292C]/85 to-transparent z-10" />

              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#42e078] block">
                    Master Installation Series
                  </span>

                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif-brand">
                    {service.title}
                  </h1>

                  <p className="text-lg text-stone-200 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleOpenModal}
                      className="bg-[#019934] hover:bg-[#01802b] text-white font-extrabold text-sm px-6 py-3.5 rounded-none shadow-lg transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Schedule Free 3D Design Consultation</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <a
                      href={`tel:${companyData.phone}`}
                      className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-sm font-bold px-5 py-3.5 rounded-none transition-all flex items-center gap-2"
                    >
                      <span>Call {companyData.formattedPhone}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <TrustBar />

            {/* Benefits & Specifications */}
            <section className="py-20 bg-white text-stone-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
                      Why Choose Our {service.shortTitle}
                    </span>

                    <h2 className="text-3xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
                      Engineered Beyond Conventional Concrete Standards
                    </h2>

                    <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#019934] shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-stone-800">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-stone-50 rounded-none border border-stone-200 flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8 text-[#019934] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                          25-Year Master Workmanship Guarantee
                        </div>
                        <div className="text-xs text-stone-600">
                          Covers settling, joint integrity, edge restraint failure, and structural shifting. Fully transferable.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-stone-50 rounded-none p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                      <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-3 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-[#019934]" />
                        Installation Specifications
                      </h3>

                      <div className="space-y-4">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="font-bold text-sm text-stone-900 flex items-center gap-2">
                              <span className="w-6 h-6 bg-[#019934] text-white text-xs flex items-center justify-center font-black">
                                {idx + 1}
                              </span>
                              {feat.title}
                            </div>
                            <p className="text-xs text-stone-600 pl-8 leading-relaxed">
                              {feat.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-stone-200">
                        <button
                          type="button"
                          onClick={handleOpenModal}
                          className="w-full bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm py-3.5 rounded-none shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <span>Speak with a {service.shortTitle} Specialist</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Testimonials from Home */}
            <TestimonialsGrid />

            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                faqs={service.faqs.map((f) => ({ ...f, category: service.shortTitle }))}
                title={`Frequently Asked Questions About ${service.shortTitle}`}
                subtitle="Get honest answers to common homeowner questions about permits, preparation, and costs."
              />
            )}

            <BottomCtaBanner onOpenModal={handleOpenModal} />
          </>
        )}
      </main>

      <Footer />

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={service.title}
      />
    </div>
  );
}
