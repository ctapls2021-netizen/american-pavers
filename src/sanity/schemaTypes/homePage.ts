import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de Inicio (Home)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      initialValue: 'Página de Inicio',
      readOnly: true,
    }),

    // --- SECCIÓN 1: HERO PRINCIPAL ---
    defineField({
      name: 'hero',
      title: '1. Sección Hero Principal (Portada)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta Superior (Badge)',
          type: 'string',
          initialValue: 'Southern California’s #1 Paver & Turf Specialist',
        }),
        defineField({
          name: 'headlineNormal',
          title: 'Título Principal - Parte 1',
          type: 'string',
          initialValue: 'Luxury Hardscapes &',
        }),
        defineField({
          name: 'headlineHighlight',
          title: 'Título Principal - Destacado (Verde)',
          type: 'string',
          initialValue: 'Outdoor Living',
        }),
        defineField({
          name: 'subheadline',
          title: 'Subtítulo Descriptivo',
          type: 'text',
          rows: 3,
          initialValue: 'Engineered interlocking pavers, premium drought-tolerant synthetic turf, and resort-grade outdoor living spaces across Los Angeles and Orange County.',
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Texto del Botón Principal',
          type: 'string',
          initialValue: 'Get Free 3D Design Estimate',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Texto del Botón Secundario (Teléfono)',
          type: 'string',
          initialValue: 'Call (800) 555-8873',
        }),
      ],
    }),

    // --- SECCIÓN 2: SERVICIOS ---
    defineField({
      name: 'servicesSection',
      title: '2. Sección de Especialidades (Servicios)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta Superior',
          type: 'string',
          initialValue: 'Our Core Specialties',
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Custom Paver & Outdoor Living Solutions',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          initialValue: 'Engineered for superior durability, natural drainage, and lifelong elegance.',
        }),
      ],
    }),

    // --- SECCIÓN 3: TRANSFORMACIONES (ANTES Y DESPUÉS) ---
    defineField({
      name: 'transformationsSection',
      title: '3. Sección Antes y Después',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta Superior',
          type: 'string',
          initialValue: 'Real Project Transformations',
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Before & After Mastery',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          initialValue: 'Slide through our genuine project transformations to witness precision engineering.',
        }),
      ],
    }),

    // --- SECCIÓN 4: PROCESO ---
    defineField({
      name: 'processSection',
      title: '4. Sección Proceso (4 Pasos)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta Superior',
          type: 'string',
          initialValue: 'Our Proven Process',
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'From Consultation to Completion',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          initialValue: 'Our structured 4-step engineering approach guarantees 100% satisfaction.',
        }),
      ],
    }),

    // --- SECCIÓN 5: PREGUNTAS FRECUENTES (FAQ) ---
    defineField({
      name: 'faqSection',
      title: '5. Sección Preguntas Frecuentes',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta Superior',
          type: 'string',
          initialValue: 'Got Questions?',
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Frequently Asked Questions',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          initialValue: 'Everything you need to know about our pavers, warranties, and installation.',
        }),
      ],
    }),

    // --- SECCIÓN 6: CTA FINAL INFERIOR ---
    defineField({
      name: 'bottomCta',
      title: '6. Banner Final de Conversión (Llamado a la Acción)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'heading',
          title: 'Título Grande',
          type: 'string',
          initialValue: 'Ready to Transform Your Outdoor Space?',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo Persuasivo',
          type: 'string',
          initialValue: 'Schedule your free on-site design consultation today.',
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto del Botón',
          type: 'string',
          initialValue: 'Claim Your Free 3D Estimate',
        }),
        defineField({
          name: 'guaranteeNote',
          title: 'Nota de Garantía / Confianza',
          type: 'string',
          initialValue: 'Zero-pressure consultation. Includes custom 3D design & same-day itemized proposal.',
        }),
      ],
    }),

    // --- SECCIÓN SEO Y METADATOS ---
    defineField({
      name: 'seo',
      title: '🎯 Optimización SEO y Redes Sociales',
      type: 'seo',
    }),
  ],
});
