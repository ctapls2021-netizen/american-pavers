import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pavers, Turf, Decking & More - System Pavers',
  description: "Pavers for patios or driveways designed & expertly installed. We've helped over 90,000 homeowners remodel their yards with landscape pavers, turf, decks, pergolas, retaining walls & more. Free consultations. Financing available. We are the nation's leading hardscape experts.",
  icons: {
    icon: 'https://systempavers.com/favicon.ico',
  },
};

const systemPaversCssFiles = [
  '/systempavers-assets/css/0f75ac4959245241.css',
  '/systempavers-assets/css/1325495d6211ae6b.css',
  '/systempavers-assets/css/978f2b62dc150e64.css',
  '/systempavers-assets/css/2d84a559fa66a2df.css',
  '/systempavers-assets/css/6d6328c5cc974126.css',
  '/systempavers-assets/css/9e6efea2e5e1fef7.css',
  '/systempavers-assets/css/c89e79953dc454c6.css',
  '/systempavers-assets/css/3a5e961dee7de1d8.css',
  '/systempavers-assets/css/1d1d8ebdf3af6f68.css',
  '/systempavers-assets/css/e5996d1d313f472c.css',
  '/systempavers-assets/css/5189fb382abb477a.css',
  '/systempavers-assets/css/7d58200c8c7a2d9c.css',
  '/systempavers-assets/css/cfaacf5ad639353e.css',
];

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
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        {systemPaversCssFiles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-lato: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              --font-playfair: 'Playfair Display', Georgia, serif;
            }
            body {
              font-family: var(--font-lato);
              margin: 0;
              padding: 0;
            }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
