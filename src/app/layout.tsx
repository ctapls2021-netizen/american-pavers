import type { Metadata } from 'next';
import './globals.css';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/assets/banners/banner-driveway.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@300;400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..800;1,8..60,400..800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@300;400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..800;1,8..60,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#019934] selection:text-white">
        {children}
      </body>
    </html>
  );
}
