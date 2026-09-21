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
          description: 'Longitud ideal: hasta 50 caracteres (máx. recomendado: 65)',
          initialValue: 'Southern California’s #1 Paver & Turf Specialist',
          validation: (Rule) =>
            Rule.max(65).warning('Recomendado: máximo 65 caracteres para el badge superior.'),
        }),
        defineField({
          name: 'headlineNormal',
          title: 'Título Principal - Parte 1',
          type: 'string',
          description: 'Longitud ideal: hasta 20 caracteres (máx. recomendado: 30)',
          initialValue: 'Luxury Hardscapes &',
          validation: (Rule) =>
            Rule.max(30).warning('Recomendado: máximo 30 caracteres.'),
        }),
        defineField({
          name: 'headlineHighlight',
          title: 'Título Principal - Destacado (Verde)',
          type: 'string',
          description: 'Longitud ideal: hasta 15 caracteres (máx. recomendado: 25)',
          initialValue: 'Outdoor Living',
          validation: (Rule) =>
            Rule.max(25).warning('Recomendado: máximo 25 caracteres.'),
        }),
        defineField({
          name: 'subheadline',
          title: 'Subtítulo Descriptivo',
          type: 'text',
          rows: 3,
          description: 'Longitud ideal: hasta 160 caracteres (máx. recomendado: 200)',
          initialValue: 'Engineered interlocking pavers, premium drought-tolerant synthetic turf, and resort-grade outdoor living spaces across Los Angeles and Orange County.',
          validation: (Rule) =>
            Rule.max(200).warning('Recomendado: máximo 200 caracteres para no sobrecargar la vista en móviles.'),
        }),
        defineField({
          name: 'primaryCtaText',
          title: 'Texto del Botón Principal',
          type: 'string',
          description: 'Longitud ideal: hasta 28 caracteres (máx. recomendado: 36)',
          initialValue: 'Get Free 3D Design Estimate',
          validation: (Rule) =>
            Rule.max(36).warning('Recomendado: máximo 36 caracteres para que el botón mantenga proporciones adecuadas.'),
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Texto del Botón Secundario (Teléfono)',
          type: 'string',
          description: 'Longitud ideal: hasta 20 caracteres (máx. recomendado: 28)',
          initialValue: 'Call (800) 555-8873',
          validation: (Rule) =>
            Rule.max(28).warning('Recomendado: máximo 28 caracteres.'),
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
          description: 'Longitud ideal: hasta 25 caracteres (máx. recomendado: 40)',
          initialValue: 'Our Core Specialties',
          validation: (Rule) =>
            Rule.max(40).warning('Recomendado: máximo 40 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Longitud ideal: hasta 45 caracteres (máx. recomendado: 60)',
          initialValue: 'Custom Paver & Outdoor Living Solutions',
          validation: (Rule) =>
            Rule.max(60).warning('Recomendado: máximo 60 caracteres para mantener el titular en una o dos líneas.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          description: 'Longitud ideal: hasta 90 caracteres (máx. recomendado: 125)',
          initialValue: 'Engineered for superior durability, natural drainage, and lifelong elegance.',
          validation: (Rule) =>
            Rule.max(125).warning('Recomendado: máximo 125 caracteres.'),
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
          description: 'Longitud ideal: hasta 30 caracteres (máx. recomendado: 40)',
          initialValue: 'Real Project Transformations',
          validation: (Rule) =>
            Rule.max(40).warning('Recomendado: máximo 40 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Longitud ideal: hasta 30 caracteres (máx. recomendado: 50)',
          initialValue: 'Before & After Mastery',
          validation: (Rule) =>
            Rule.max(50).warning('Recomendado: máximo 50 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          description: 'Longitud ideal: hasta 95 caracteres (máx. recomendado: 130)',
          initialValue: 'Slide through our genuine project transformations to witness precision engineering.',
          validation: (Rule) =>
            Rule.max(130).warning('Recomendado: máximo 130 caracteres.'),
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
          description: 'Longitud ideal: hasta 25 caracteres (máx. recomendado: 35)',
          initialValue: 'Our Proven Process',
          validation: (Rule) =>
            Rule.max(35).warning('Recomendado: máximo 35 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Longitud ideal: hasta 35 caracteres (máx. recomendado: 50)',
          initialValue: 'From Consultation to Completion',
          validation: (Rule) =>
            Rule.max(50).warning('Recomendado: máximo 50 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          description: 'Longitud ideal: hasta 90 caracteres (máx. recomendado: 125)',
          initialValue: 'Our structured 4-step engineering approach guarantees 100% satisfaction.',
          validation: (Rule) =>
            Rule.max(125).warning('Recomendado: máximo 125 caracteres.'),
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
          description: 'Longitud ideal: hasta 20 caracteres (máx. recomendado: 30)',
          initialValue: 'Got Questions?',
          validation: (Rule) =>
            Rule.max(30).warning('Recomendado: máximo 30 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Longitud ideal: hasta 35 caracteres (máx. recomendado: 50)',
          initialValue: 'Frequently Asked Questions',
          validation: (Rule) =>
            Rule.max(50).warning('Recomendado: máximo 50 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo / Descripción',
          type: 'text',
          rows: 2,
          description: 'Longitud ideal: hasta 90 caracteres (máx. recomendado: 125)',
          initialValue: 'Everything you need to know about our pavers, warranties, and installation.',
          validation: (Rule) =>
            Rule.max(125).warning('Recomendado: máximo 125 caracteres.'),
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
          description: 'Longitud ideal: hasta 45 caracteres (máx. recomendado: 55)',
          initialValue: 'Ready to Transform Your Outdoor Space?',
          validation: (Rule) =>
            Rule.max(55).warning('Recomendado: máximo 55 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo Persuasivo',
          type: 'string',
          description: 'Longitud ideal: hasta 60 caracteres (máx. recomendado: 80)',
          initialValue: 'Schedule your free on-site design consultation today.',
          validation: (Rule) =>
            Rule.max(80).warning('Recomendado: máximo 80 caracteres.'),
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto del Botón',
          type: 'string',
          description: 'Longitud ideal: hasta 28 caracteres (máx. recomendado: 36)',
          initialValue: 'Claim Your Free 3D Estimate',
          validation: (Rule) =>
            Rule.max(36).warning('Recomendado: máximo 36 caracteres para mantener la armonía del botón.'),
        }),
        defineField({
          name: 'guaranteeNote',
          title: 'Nota de Garantía / Confianza',
          type: 'string',
          description: 'Longitud ideal: hasta 95 caracteres (máx. recomendado: 125)',
          initialValue: 'Zero-pressure consultation. Includes custom 3D design & same-day itemized proposal.',
          validation: (Rule) =>
            Rule.max(125).warning('Recomendado: máximo 125 caracteres.'),
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
