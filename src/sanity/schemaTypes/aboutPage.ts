import { defineField, defineType } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Página Nosotros (About Us)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      initialValue: 'Página Nosotros (About Us)',
      readOnly: true,
    }),
    defineField({
      name: 'hero',
      title: 'Hero / Cabecera',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta Superior',
          type: 'string',
          description: 'Longitud ideal: hasta 20 caracteres (máx. recomendado: 30)',
          initialValue: 'Who We Are',
          validation: (Rule) =>
            Rule.max(30).warning('Recomendado: máximo 30 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          description: 'Longitud ideal: hasta 55 caracteres (máx. recomendado: 75)',
          initialValue: 'Southern California’s Trusted Paver & Hardscape Masters',
          validation: (Rule) =>
            Rule.max(75).warning('Recomendado: máximo 75 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          description: 'Longitud ideal: hasta 100 caracteres (máx. recomendado: 140)',
          initialValue: 'Building enduring, high-load outdoor spaces with 10,000+ PSI engineered pavers since 2008.',
          validation: (Rule) =>
            Rule.max(140).warning('Recomendado: máximo 140 caracteres.'),
        }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Sección Historia & Trayectoria',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Etiqueta',
          type: 'string',
          description: 'Longitud ideal: hasta 25 caracteres (máx. recomendado: 35)',
          initialValue: 'Our Story & Commitment',
          validation: (Rule) =>
            Rule.max(35).warning('Recomendado: máximo 35 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          description: 'Longitud ideal: hasta 50 caracteres (máx. recomendado: 65)',
          initialValue: 'Engineered Precision Meets Architectural Elegance',
          validation: (Rule) =>
            Rule.max(65).warning('Recomendado: máximo 65 caracteres.'),
        }),
        defineField({
          name: 'bodyParagraph1',
          title: 'Párrafo 1',
          type: 'text',
          rows: 4,
          description: 'Longitud ideal: hasta 280 caracteres (máx. recomendado: 360)',
          initialValue: 'Founded over 18 years ago, American Pavers & Turf was born out of frustration with cracked concrete driveways, water-wasting lawns, and subpar contractor workmanship. We set out to create a company rooted in structural engineering rigor, honest pricing, and unmatched customer care.',
          validation: (Rule) =>
            Rule.max(360).warning('Recomendado: máximo 360 caracteres para no romper la proporción con la imagen lateral.'),
        }),
        defineField({
          name: 'bodyParagraph2',
          title: 'Párrafo 2',
          type: 'text',
          rows: 4,
          description: 'Longitud ideal: hasta 280 caracteres (máx. recomendado: 360)',
          initialValue: 'Today, our dedicated crews have completed over 2,400 bespoke installations across Los Angeles, Orange County, San Diego, and the desert communities—maintaining a 4.9-star average rating and zero unresolved complaints.',
          validation: (Rule) =>
            Rule.max(360).warning('Recomendado: máximo 360 caracteres.'),
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: '🎯 Optimización SEO y Redes Sociales',
      type: 'seo',
    }),
  ],
});
