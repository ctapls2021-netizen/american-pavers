import type { Metadata } from 'next';
import './globals.css';
import LiveVisualEditing from '@/components/sanity/LiveVisualEditing';

export const metadata: Metadata = {
  title: 'American Pavers & Turf | Luxury Pavers, Artificial Turf & Outdoor Living',
  description: "Master contractors specializing in luxury interlocking pavers, synthetic turf, outdoor kitchens, patio design, driveways & hardscaping. Free 3D design consultation & lifetime craftsmanship warranty.",
  icons: {
    icon: '/assets/logos/logo-icon.svg',
    shortcut: '/assets/logos/logo-icon.svg',
    apple: '/assets/logos/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/banners/banner-driveway-mobile.webp"
          type="image/webp"
          media="(max-width: 768px)"
          // @ts-ignore
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/banners/banner-driveway.webp"
          type="image/webp"
          media="(min-width: 769px)"
          // @ts-ignore
          fetchPriority="high"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@300;400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..800;1,8..60,400..800&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Fustat:wght@300;400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..800;1,8..60,400..800&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className="antialiased selection:bg-[#019934] selection:text-white">
        <LiveVisualEditing />
        {children}
      </body>
    </html>
  );
}
