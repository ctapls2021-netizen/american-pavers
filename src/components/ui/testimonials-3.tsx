'use client';

import * as React from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  rating?: number;
  image?: string;
  platform?: 'google' | 'yelp' | 'houzz';
  service?: string;
}

export type TestimonialItem = TestimonialProps;

export const platformData = {
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
  },
  yelp: {
    name: 'Yelp Review',
    icon: (
      <svg className="w-4 h-4 shrink-0 text-[#FF1A1A]" viewBox="0 0 24 24" fill="currentColor">
        <path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041z" />
      </svg>
    ),
  },
  houzz: {
    name: 'Houzz Review',
    icon: (
      <svg className="w-4 h-4 shrink-0 text-[#4DBC15]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z" />
      </svg>
    ),
  },
};

export const testimonials: TestimonialItem[] = [
  {
    testimonial:
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
    testimonial:
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
    testimonial:
      "From the initial consultation to the final polymeric sand lock, American Pavers & Turf exceeded every expectation. Our kids and dogs love the heat-resistant synthetic grass, and our new composite deck overlooking the hills is our favorite spot for entertaining. Honest pricing, zero hidden fees, and backed by a true lifetime warranty.",
    image: "/assets/avatars/avatar-3.webp",
    name: "Sarah & Liam Chen",
    role: "Synthetic Turf & Composite Deck",
    company: "Irvine, CA",
    rating: 5,
    service: "Turf & Decking",
    platform: "houzz",
  },
  {
    testimonial:
      "Our old stamped concrete around the pool was dangerously slippery and burned our feet in the summer. American Pavers installed non-slip silver travertine pavers with bullnose pool coping. Not only does it stay dramatically cooler under the California sun, but it completely elevated our home's curb appeal and appraisal value.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Robert & Patricia Miller",
    role: "Pool Deck & Travertine Pavers",
    company: "Beverly Hills, CA",
    rating: 5,
    service: "Travertine Pool Deck",
    platform: "google",
  },
  {
    testimonial:
      "We had serious tree root upheaval and drainage issues on our hillside property. The engineering team excavated down 12 inches, installed a commercial-grade base, and built a structural retaining wall with integrated drainage. The project was completed on budget and passed city inspections without a single hitch. Worth every penny.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Carlos & Sofia Mendez",
    role: "Driveway & Retaining Wall",
    company: "Encino, CA",
    rating: 5,
    service: "Driveway & Hardscaping",
    platform: "yelp",
  },
  {
    testimonial:
      "We wanted a tournament-grade backyard putting green with sand bunkers and an integrated gas fire pit for evening family gatherings. The attention to detail on the grass fringe cuts and interlock paver patterns was artistic. Truly a five-star white glove contractor experience in Southern California.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Amanda & Keith Reynolds",
    role: "Putting Green & Fire Pit",
    company: "San Marino, CA",
    rating: 5,
    service: "Golf Turf & Fire Pit",
    platform: "houzz",
  },
];

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, platform = 'google', service, className, ...props }, ref) => {
    const platformInfo = platformData[platform] || platformData.google;

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-[#019934]/40 hover:-translate-y-1 flex flex-col justify-between h-full group",
          className
        )}
        {...props}
      >
        {/* Large Decorative Quote Watermark */}
        <div
          aria-hidden={true}
          className="absolute right-6 top-4 text-7xl font-serif text-stone-200/50 pointer-events-none select-none transition-colors duration-300 group-hover:text-[#019934]/20"
        >
          &ldquo;
        </div>

        <div className="flex flex-col gap-4 justify-between h-full relative z-10">
          <div>
            {/* Top Bar: Stars + Platform Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              {rating > 0 && (
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={cn(
                        index < rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-stone-200 text-stone-200"
                      )}
                    />
                  ))}
                </div>
              )}

              {platformInfo && (
                <div className="inline-flex items-center gap-1.5 bg-stone-50 border border-stone-200/80 px-2.5 py-0.5 rounded-full">
                  {platformInfo.icon}
                  <span className="text-xs font-semibold text-stone-600">
                    {platformInfo.name}
                  </span>
                </div>
              )}
            </div>

            {/* Testimonial Quote Text */}
            <p className="text-pretty text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              &ldquo;{testimonial}&rdquo;
            </p>
          </div>

          {/* Bottom Client Info */}
          <div className="flex items-center gap-4 justify-start pt-4 border-t border-stone-100 mt-2">
            <div className="flex items-center gap-3">
              {image && (
                <Avatar className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-stone-200/80 group-hover:ring-[#019934]/40 transition-all duration-300">
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback className="bg-[#019934]/10 text-[#019934] font-bold text-sm">
                    {name[0]}
                  </AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-stone-900 font-serif-brand text-sm sm:text-base">
                    {name}
                  </h3>
                  <span title="Verified California Homeowner">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#019934]" />
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-500">
                  {role}
                  {company && ` • ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Testimonial.displayName = 'Testimonial';

export { Testimonial };
export const TestimonialCard = Testimonial;

// --- Testimonials Carousel Section ---
export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

  // Number of cards per page on desktop is 3; total pages with 6 items = 2
  const pageSize = 3;
  const totalPages = Math.ceil(testimonials.length / pageSize);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  return (
    <div
      className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Testimonials Carousel Track */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-in-out">
        {visibleTestimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            {...testimonial}
            className="animate-in fade-in zoom-in-95 duration-300"
          />
        ))}
      </div>

      {/* Carousel Navigation Controls: 100% single-line, no wraps */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonials"
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-stone-300 text-stone-700 hover:bg-[#019934] hover:border-[#019934] hover:text-white transition-all shadow-sm active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 shrink-0" />
        </button>

        {/* Page indicator dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                currentPage === i
                  ? "w-8 bg-[#019934]"
                  : "w-2.5 bg-stone-300 hover:bg-stone-400"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonials"
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-stone-300 text-stone-700 hover:bg-[#019934] hover:border-[#019934] hover:text-white transition-all shadow-sm active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 shrink-0" />
        </button>
      </div>

      {/* Trust Rating Summary Footer Banner */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500 font-medium">
        <div className="flex items-center gap-1.5">
          {platformData.google.icon}
          <span>4.9 / 5.0 on Google (180+ reviews)</span>
        </div>
        <span className="hidden sm:inline text-stone-300">•</span>
        <div className="flex items-center gap-1.5">
          {platformData.yelp.icon}
          <span>5.0 / 5.0 on Yelp (110+ reviews)</span>
        </div>
        <span className="hidden sm:inline text-stone-300">•</span>
        <div className="flex items-center gap-1.5">
          {platformData.houzz.icon}
          <span>5.0 / 5.0 on Houzz (60+ reviews)</span>
        </div>
      </div>
    </div>
  );
}

// --- Demo Export for testimonial 3 compatibility ---
export function TestimonialDemo() {
  return (
    <div className="container py-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
