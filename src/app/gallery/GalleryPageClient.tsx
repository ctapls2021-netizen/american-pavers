'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';
import {
  MapPin,
  Phone,
  ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { companyData } from '@/data/company';

interface GalleryItem {
  id: string;
  title: string;
  city: string;
  category: 'driveways' | 'patios' | 'pools' | 'turf' | 'kitchens' | 'decks';
  categoryTitle: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Circular Driveway with Soldier Course',
    city: 'Pasadena, CA',
    category: 'driveways',
    categoryTitle: 'Driveway Pavers',
    image: '/assets/transformations/driveway-after.webp',
    description: 'Charcoal & Tuscan blend 10,000+ PSI pavers with permeable polymeric joint lock.',
  },
  {
    id: 'g2',
    title: 'Resort Patio with BBQ Island & Outdoor Dining',
    city: 'Newport Beach, CA',
    category: 'patios',
    categoryTitle: 'Patio Pavers',
    image: '/assets/transformations/patio-after.webp',
    description: 'Large-format architectural patio pavers, integrated gas BBQ island, and dining area.',
  },
  {
    id: 'g3',
    title: 'Travertine Pool Coping & Non-Slip Paver Deck',
    city: 'Palm Springs, CA',
    category: 'pools',
    categoryTitle: 'Pool Deck Pavers',
    image: '/assets/transformations/pool-deck-after.webp',
    description: 'Cool-touch safety coping and slip-resistant pavers compatible with saltwater chlorination.',
  },
  {
    id: 'g4',
    title: 'Antimicrobial Pet Turf & Clean Living Lawn',
    city: 'San Diego, CA',
    category: 'turf',
    categoryTitle: 'Synthetic Turf',
    image: '/assets/transformations/turf-lawn-after.webp',
    description: 'Odor-free organic zeolite infill with 30+ in/hr rapid vertical drainage.',
  },
  {
    id: 'g5',
    title: 'Architectural Gas Fire Pit & Seating Lounge',
    city: 'Irvine, CA',
    category: 'kitchens',
    categoryTitle: 'Outdoor Kitchens',
    image: '/assets/transformations/fire-pit-after.webp',
    description: 'Custom natural gas fire pit with stacked stone masonry and smooth paver seating surround.',
  },
  {
    id: 'g6',
    title: 'Motorized Louvered Pergola & Herringbone Stone',
    city: 'Los Angeles, CA',
    category: 'decks',
    categoryTitle: 'Decks & Pergolas',
    image: '/assets/transformations/pergola-after.webp',
    description: 'All-weather motorized louvered roof with rain sensor over 45° herringbone pavers.',
  },
  {
    id: 'g7',
    title: 'Estate Grand Motor Court with Inlaid Borders',
    city: 'Beverly Hills, CA',
    category: 'driveways',
    categoryTitle: 'Driveway Pavers',
    image: '/assets/driveways/driveway-real-2.webp',
    description: 'Heavy vehicular rating aggregate sub-base engineered to withstand full SUV loads.',
  },
  {
    id: 'g8',
    title: 'Coastal Terraced Pavers & Emerald Turf Inset',
    city: 'Laguna Beach, CA',
    category: 'turf',
    categoryTitle: 'Synthetic Turf',
    image: '/assets/transformations/turf-pool-after.webp',
    description: 'Seamless transition between custom travertine pavers and tournament-grade turf.',
  },
  {
    id: 'g9',
    title: 'Artisan Masonry Outdoor Kitchen with 304 Steel',
    city: 'Encino, CA',
    category: 'kitchens',
    categoryTitle: 'Outdoor Kitchens',
    image: '/assets/generated/kitchen_premium.jpg',
    description: 'Marine-grade 304 stainless steel grill, granite counters, and outdoor refrigeration.',
  },
  {
    id: 'g10',
    title: 'Reflective Oasis Pool Deck with Bullnose Edges',
    city: 'Santa Monica, CA',
    category: 'pools',
    categoryTitle: 'Pool Deck Pavers',
    image: '/assets/generated/pool_premium.jpg',
    description: 'High-SRI heat-reflective pavers that stay comfortable under intense summer sunshine.',
  },
  {
    id: 'g11',
    title: 'Custom Multi-Hole Practice Putting Green',
    city: 'Rancho Santa Fe, CA',
    category: 'turf',
    categoryTitle: 'Synthetic Turf',
    image: '/assets/generated/turf_premium.jpg',
    description: 'PGA-stimp contoured putting surface with chipping fringe and clean interlocking perimeter.',
  },
  {
    id: 'g12',
    title: 'Capped Composite Decking & Modern Shade Arbor',
    city: 'Glendale, CA',
    category: 'decks',
    categoryTitle: 'Decks & Pergolas',
    image: '/assets/generated/pergola_premium.jpg',
    description: 'Splinter-free, zero-maintenance composite boards with concealed clip fastenings.',
  },
];

// Generative Art Canvas Component adapted to brand green guidelines (#019934 / #42e078)
const GenerativeArtCanvas = ({ isHovered }: { isHovered: boolean }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const numLines = 30;

    class Line {
      x: number;
      y: number;
      speed: number;
      angle: number;
      length: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 400);
        this.y = Math.random() * (canvas?.height || 400);
        this.speed = Math.random() * 0.5 + 0.15;
        this.angle = Math.random() * Math.PI * 2;
        this.length = Math.random() * 22 + 6;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (!canvas) return;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        // Brand green stroke: #42e078 / #019934
        ctx.strokeStyle = `rgba(66, 224, 120, ${Math.random() * 0.4 + 0.15})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    let lines: Line[] = [];
    const init = () => {
      lines = [];
      for (let i = 0; i < numLines; i++) {
        lines.push(new Line());
      }
    };

    const animate = () => {
      if (isHovered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lines.forEach((line) => {
          line.update();
          line.draw();
        });
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    canvas.width = 400;
    canvas.height = 400;
    init();
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    />
  );
};

// Gallery Card Component with 3D tilt effect and Radio Cero
interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

const GalleryCard = ({ item, index }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants: Variants = {
    offscreen: { y: 35, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        bounce: 0.35,
        duration: 0.7,
        delay: (index % 3) * 0.1,
      },
    },
  };

  return (
    <motion.div
      key={item.id}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative w-full rounded-none bg-white border border-stone-200/90 hover:border-[#019934] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden"
    >
      {/* Top Brand Green Bar ("eso en verde") */}
      <div className="w-full h-2.5 bg-[#019934] shrink-0" />

      {/* 1. Clean Real Image (Sin textos ni badges encima) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 rounded-none border-b border-stone-200">
        <img
          src={item.image}
          alt={item.city}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Generative Art Canvas in Brand Green */}
        <GenerativeArtCanvas isHovered={isHovered} />
      </div>

      {/* 2. White Area with ONLY the City Name */}
      <div className="py-3.5 px-4 bg-white flex items-center justify-center gap-1.5">
        <MapPin className="w-4 h-4 text-[#019934] shrink-0" />
        <span className="text-sm sm:text-base font-bold text-[#1A292C] tracking-wide font-serif-brand">
          {item.city}
        </span>
      </div>
    </motion.div>
  );
};

interface GalleryPageClientProps {
  galleryData?: any;
  sanityProjects?: any[];
}

export default function GalleryPage({ galleryData, sanityProjects }: GalleryPageClientProps = {}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Driveway Pavers');
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'driveways' | 'patios' | 'pools' | 'turf' | 'kitchens' | 'decks'
  >('all');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main className="flex-1">
        {/* ==================================================================== */}
        {/* 1. HERO BANNER (SERVICE PAGE FORMAT: 50% HEIGHT & BREADCRUMBS)       */}
        {/* ==================================================================== */}
        <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-stone-950 text-white flex flex-col justify-between">
          {/* Static Background Image with zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/assets/generated/driveway_premium.jpg"
              alt="American Pavers & Turf Gallery"
              className="w-full h-full object-cover object-center scale-105"
              loading="eager"
            />
          </div>

          {/* Atmospheric Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/85 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,15,18,0.7)_100%)] pointer-events-none z-10" />

          {/* Top Breadcrumbs Bar */}
          <div className="relative z-20 bg-stone-950/60 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-bold text-[#42e078]">Gallery</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
            <span className="text-[#42e078] font-bold text-xs uppercase tracking-widest mb-2 drop-shadow">
              {galleryData?.hero?.badge || 'Master Installation Portfolio'}
            </span>

            <h1
              className="text-white font-extrabold tracking-tight drop-shadow-2xl max-w-4xl font-serif-brand"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {galleryData?.hero?.heading || 'Real Southern California Transformations Gallery'}
            </h1>

            <p className="mt-3 text-stone-200 font-medium text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              {galleryData?.hero?.subheading ||
                'Explore authentic completed installations across Los Angeles, Orange County, San Diego, and Palm Springs—crafted with 10,000+ PSI interlocking stone and backed by our 25-year warranty.'}
            </p>

            {/* Action Buttons in Radio Cero */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <button
                onClick={() => handleOpenModal()}
                type="button"
                className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Schedule Free 3D Design</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#42e078] shrink-0" />
                <span className="whitespace-nowrap">Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* ==================================================================== */}
        {/* 2. INTERACTIVE 3D GALLERY WITH CITY LABELS & GENERATIVE LINES        */}
        {/* ==================================================================== */}
        <section className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200 text-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Green Subtitle */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
                Southern California Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand">
                Featured Hardscape &amp; Outdoor Living Installations
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                Hover over any project to inspect its 3D architectural perspective. Click any design to request a complimentary in-home 3D estimate.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'driveways', label: 'Driveways' },
                { id: 'patios', label: 'Patios & Living' },
                { id: 'pools', label: 'Pool Decks' },
                { id: 'turf', label: 'Synthetic Turf' },
                { id: 'kitchens', label: 'Outdoor Kitchens' },
                { id: 'decks', label: 'Decks & Pergolas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#019934] text-white shadow-md'
                      : 'bg-white text-stone-700 hover:text-[#019934] hover:bg-stone-50 border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 3D Tilt Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 3. BOTTOM CTA BANNER                                                 */}
        {/* ==================================================================== */}
        <BottomCtaBanner
          onOpenModal={() => handleOpenModal()}
          title="Inspired by Our Work? Let’s Design Your Outdoor Sanctuary."
          subtitle="Schedule your complimentary in-home 3D design consultation. Our senior hardscape architects will measure your space, bring physical stone samples, and provide a guaranteed, transparent 3D estimate."
        />
      </main>

      <Footer />

      {/* Global Lead Form Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
