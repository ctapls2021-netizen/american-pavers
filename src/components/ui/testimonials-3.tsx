'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, CheckCircle2 } from 'lucide-react';

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating?: number;
  service?: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "American Pavers & Turf completely transformed our outdated concrete backyard into a breathtaking private resort. The 3D design session was eye-opening — seeing the exact stone layout and lighting before excavation gave us total confidence. Six months later, the interlocking pavers and custom BBQ island still look brand new. Their craftsmanship is second to none.",
    image: "/assets/avatars/avatar-1.webp",
    name: "Elena & David Richardson",
    role: "Patio & Outdoor Kitchen",
    company: "Pasadena, CA",
    rating: 5,
    service: "Backyard Patio Pavers",
  },
  {
    quote:
      "Our cracked, oil-stained driveway was an eyesore. American Pavers replaced it with 10,000 PSI interlocking pavers in just five days. The crew was punctual, clean, and masterfully engineered the slope pitch to prevent water pooling. Neighbors constantly stop on their walks to ask who did our driveway. We couldn't be happier!",
    image: "/assets/avatars/avatar-2.webp",
    name: "Marcus Vance",
    role: "Interlocking Paver Driveway",
    company: "Newport Beach, CA",
    rating: 5,
    service: "Driveway Pavers",
  },
  {
    quote:
      "From the initial consultation to the final polymeric sand lock, American Pavers & Turf exceeded every expectation. Our kids and dogs love the heat-resistant synthetic grass, and our new composite deck overlooking the hills is our favorite spot for entertaining. Honest pricing, zero hidden fees, and backed by a true lifetime warranty.",
    image: "/assets/avatars/avatar-3.webp",
    name: "Sarah & Liam Chen",
    role: "Synthetic Turf & Composite Deck",
    company: "Irvine, CA",
    rating: 5,
    service: "Turf & Decking",
  },
];

export function DecorIcon({ className, ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 left-0 z-10 size-4 shrink-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)] stroke-1 stroke-stone-300 transition-all duration-300",
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function QuoteIcon({ className, ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

export function TestimonialCard({
  testimonial,
  index,
  className,
  ...props
}: {
  testimonial: TestimonialItem;
  index: number;
  className?: string;
}) {
  const { quote, name, role, company, image, rating = 5, service } = testimonial;

  return (
    <div
      className={cn(
        "relative w-full md:translate-y-[calc(2.5rem*var(--t-card-index))] transition-all duration-700 ease-out",
        className
      )}
      style={{
        "--t-card-index": index,
      } as React.CSSProperties}
    >
      <figure
        className="group relative flex flex-col justify-between gap-6 px-7 sm:px-8 pt-8 pb-7 bg-white shadow-sm border border-stone-200/90 transition-all duration-500 hover:shadow-2xl hover:border-[#019934]/60 hover:-translate-y-2 animate-testimonial-drift hover:[animation-play-state:paused]"
        style={{
          animationDelay: `${index * 1.4}s`,
          animationDuration: `${5.8 + index * 0.9}s`,
        }}
        {...props}
      >
        {/* Architectural blueprint extended lines extending beyond borders */}
        <div className="absolute -inset-y-6 -left-px w-px bg-stone-200 transition-colors duration-500 group-hover:bg-[#019934]/50 pointer-events-none" />
        <div className="absolute -inset-y-6 -right-px w-px bg-stone-200 transition-colors duration-500 group-hover:bg-[#019934]/50 pointer-events-none" />
        <div className="absolute -inset-x-6 -top-px h-px bg-stone-200 transition-colors duration-500 group-hover:bg-[#019934]/50 pointer-events-none" />
        <div className="absolute -right-6 -bottom-px -left-6 h-px bg-stone-200 transition-colors duration-500 group-hover:bg-[#019934]/50 pointer-events-none" />

        {/* Decorative Corner Crosshair with 90° rotation on card hover */}
        <DecorIcon className="transition-transform duration-500 group-hover:rotate-90 group-hover:stroke-[#019934] group-hover:scale-125" />

        {/* Card Content Top: Service Tag & Star Rating */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#019934] text-[#019934] transition-transform duration-300 group-hover:scale-110"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
            {service && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100 px-2.5 py-0.5 border border-stone-200 group-hover:text-[#019934] group-hover:border-[#019934]/40 group-hover:bg-emerald-50/50 transition-colors">
                {service}
              </span>
            )}
          </div>

          {/* Quote */}
          <blockquote className="flex gap-3 sm:gap-4">
            <QuoteIcon
              aria-hidden="true"
              className="size-6 shrink-0 stroke-1 text-stone-300 transition-colors duration-300 group-hover:text-[#019934]"
            />
            <p className="flex-1 font-normal text-sm sm:text-base text-stone-600 leading-relaxed group-hover:text-stone-800 transition-colors">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Card Bottom: Avatar & Client Metadata */}
        <figcaption className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
          <div className="flex items-center gap-3">
            <div className="relative size-11 rounded-full overflow-hidden ring-2 ring-stone-200 ring-offset-2 ring-offset-white transition-all duration-300 group-hover:ring-[#019934] group-hover:scale-105">
              <img
                src={image}
                alt={`${name}'s photo`}
                className="size-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <cite className="font-bold text-stone-900 text-sm not-italic font-serif-brand">
                  {name}
                </cite>
                <span title="Verified Project" className="inline-flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#019934]" />
                </span>
              </div>
              <p className="text-stone-500 text-xs">
                {role} • <span className="text-stone-700 font-medium">{company}</span>
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal entrance animation on mount
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

