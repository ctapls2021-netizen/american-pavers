import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';
import { companyData } from '@/data/company';

interface Home2FooterProps {
  basePath?: string;
}

export default function Home2Footer({ basePath }: Home2FooterProps) {
  const columns = [
    {
      title: 'PAVERS',
      links: [
        { name: 'Driveways', href: basePath ? `${basePath}/services/driveway-pavers` : '#services' },
        { name: 'Patio Pavers', href: basePath ? `${basePath}/services/patio-pavers` : '#services' },
        { name: 'Pool Deck Pavers', href: basePath ? `${basePath}/services/pool-deck-pavers` : '#services' },
        { name: 'Decks & Pergolas', href: basePath ? `${basePath}/services/decking-pergolas` : '#services' },
      ],
    },
    {
      title: 'TURF & OUTDOOR',
      links: [
        { name: 'Synthetic Turf', href: basePath ? `${basePath}/services/synthetic-turf` : '#services' },
        { name: 'Outdoor Kitchens', href: basePath ? `${basePath}/services/outdoor-kitchens` : '#services' },
        { name: 'Front Lawns', href: basePath ? `${basePath}/services/synthetic-turf` : '#services' },
        { name: 'Putting Greens', href: basePath ? `${basePath}/services/synthetic-turf` : '#services' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'Our Process', href: basePath ? `${basePath}#process` : '#process' },
        { name: 'Our Work', href: basePath ? `${basePath}/gallery` : '#work' },
        { name: 'About Us', href: basePath ? `${basePath}/about` : '#about' },
        { name: 'Contact', href: basePath ? `${basePath}/contact` : '#quote-section' },
      ],
    },
  ];
  return (
    <footer
      style={{
        background: '#0E1719', // var(--surface-inverse-deep)
        color: '#B3C2C6', // var(--text-on-dark-muted) / var(--slate-300)
      }}
      className="w-full max-w-full overflow-hidden"
    >
      {/* Main Footer Grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(56px, 6vw, 80px) clamp(20px, 5vw, 64px) 40px',
        }}
        className="grid grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-8 sm:gap-x-10 gap-y-10"
      >
        {/* Brand Column */}
        <div className="col-span-2 xl:col-span-1">
          <div className="relative inline-block">
            <Image
              src="/assets/brand/logo-horizontal-white.png"
              alt="American Pavers & Turf"
              width={220}
              height={46}
              className="h-[46px] w-auto object-contain object-left block"
              priority
            />
          </div>

          <p
            style={{
              margin: '20px 0 0',
              fontSize: '0.9375rem', // var(--fs-body-sm)
              lineHeight: 1.7,
              maxWidth: 300,
              color: '#B3C2C6',
            }}
          >
            Paver and artificial turf installation across Los Angeles County. Licensed, bonded and insured.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginTop: '24px',
            }}
          >
            <a
              href={`tel:${companyData.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
              className="hover:text-[#019934] transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0 text-[#019934]" />
              <span>{companyData.formattedPhone}</span>
            </a>

            <a
              href="mailto:info@americanpaversturf.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#FFFFFF',
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
              className="hover:text-[#019934] transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0 text-[#019934]" />
              <span>info@americanpaversturf.com</span>
            </a>

            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.9375rem',
                color: '#B3C2C6',
              }}
            >
              <Clock className="w-4 h-4 shrink-0 text-[#019934]" />
              <span>Mon–Sat, 7am–6pm</span>
            </span>
          </div>
        </div>

        {/* 3 Navigation Columns */}
        {columns.map((c, idx) => (
          <div
            key={c.title}
            className={idx === 2 ? 'col-span-2 sm:col-span-1' : 'col-span-1'}
          >
            <div
              style={{
                fontSize: '0.75rem', // var(--fs-eyebrow)
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#019934', // var(--green-400)
              }}
            >
              {c.title}
            </div>

            <ul
              style={{
                listStyle: 'none',
                margin: '20px 0 0',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {c.links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      style={{
                        fontSize: '0.9375rem',
                        color: '#B3C2C6',
                        textDecoration: 'none',
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.9375rem',
                        color: '#B3C2C6',
                        textDecoration: 'none',
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Legal Line */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.16)', // var(--border-inverse)
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '20px clamp(20px, 5vw, 64px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8125rem', // var(--fs-caption)
            color: '#B3C2C6',
          }}
          className="flex-col sm:flex-row text-center sm:text-left"
        >
          <span>&copy; {new Date().getFullYear()} American Pavers &amp; Turf</span>
        </div>
      </div>
    </footer>
  );
}
