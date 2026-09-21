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
  platform?: 'google' | 'yelp' | 'houzz';
}

const platformData = {
  google: {
    name: 'Google Review',
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
      </svg>
    ),
    badgeClass: 'text-stone-700 bg-stone-50 border-stone-200/90 shadow-2xs',
  },
  yelp: {
    name: 'Yelp Review',
    icon: (
      <svg className="w-4 h-4 shrink-0 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158z" />
      </svg>
    ),
    badgeClass: 'text-stone-700 bg-red-50/70 border-red-200/80 shadow-2xs',
  },
  houzz: {
    name: 'Houzz Review',
    icon: (
      <svg className="w-4 h-4 shrink-0 text-[#4DBC15]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z" />
      </svg>
    ),
    badgeClass: 'text-stone-700 bg-emerald-50/70 border-emerald-200/80 shadow-2xs',
  },
};

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
    platform: "google",
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
    platform: "yelp",
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
    platform: "houzz",
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
  const { quote, name, role, company, image, rating = 5, service, platform = 'google' } = testimonial;
  const platformInfo = platformData[platform] || platformData.google;

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

        {/* Card Content Top: Service Tag, Star Rating & Platform Badge */}
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

            {platformInfo && (
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-none border transition-all duration-300",
                  platformInfo.badgeClass
                )}
              >
                {platformInfo.icon}
                <span className="text-[11px] font-bold tracking-tight">
                  {platformInfo.name}
                </span>
              </div>
            )}
          </div>

          {service && (
            <div className="mb-3">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100 px-2.5 py-0.5 border border-stone-200/80 group-hover:text-[#019934] group-hover:border-[#019934]/40 group-hover:bg-emerald-50/50 transition-colors">
                {service}
              </span>
            </div>
          )}

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

