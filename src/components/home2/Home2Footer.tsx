import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';

interface LinkItem {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: LinkItem[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: 'PAVERS',
    links: [
      { name: 'Driveways', href: '#services' },
      { name: 'Patios & pool decks', href: '#services' },
      { name: 'Walkways', href: '#services' },
      { name: 'Retaining walls', href: '#services' },
    ],
  },
  {
    title: 'TURF',
    links: [
      { name: 'Front lawns', href: '#services' },
      { name: 'Backyards', href: '#services' },
      { name: 'Pet turf', href: '#services' },
      { name: 'Putting greens', href: '#services' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'Our process', href: '#process' },
      { name: 'Our work', href: '#work' },
      { name: 'Service areas', href: '#services' },
      { name: 'Contact', href: '#quote-section' },
    ],
  },
];

export default function Home2Footer() {
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
              href="tel:3235550100"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
              className="hover:text-[#4CC66E] transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0 text-white" />
              <span>(323) 555-0100</span>
            </a>

            <a
              href="mailto:hello@americanpaversturf.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#FFFFFF',
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
              className="hover:text-[#4CC66E] transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0 text-white" />
              <span>hello@americanpaversturf.com</span>
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
              <Clock className="w-4 h-4 shrink-0 text-[#B3C2C6]" />
              <span>Mon–Sat, 7am–6pm</span>
            </span>
          </div>
        </div>

        {/* 3 Navigation Columns */}
        {COLUMNS.map((c, idx) => (
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
                color: '#4CC66E', // var(--green-400)
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
