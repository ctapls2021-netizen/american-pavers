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
          initialValue: 'Who We Are',
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Southern California’s Trusted Paver & Hardscape Masters',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          initialValue: 'Building enduring, high-load outdoor spaces with 10,000+ PSI engineered pavers since 2008.',
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
          initialValue: 'Our Story & Commitment',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Engineered Precision Meets Architectural Elegance',
        }),
        defineField({
          name: 'bodyParagraph1',
          title: 'Párrafo 1',
          type: 'text',
          rows: 4,
          initialValue: 'Founded over 18 years ago, American Pavers & Turf was born out of frustration with cracked concrete driveways, water-wasting lawns, and subpar contractor workmanship. We set out to create a company rooted in structural engineering rigor, honest pricing, and unmatched customer care.',
        }),
        defineField({
          name: 'bodyParagraph2',
          title: 'Párrafo 2',
          type: 'text',
          rows: 4,
          initialValue: 'Today, our dedicated crews have completed over 2,400 bespoke installations across Los Angeles, Orange County, San Diego, and the desert communities—maintaining a 4.9-star average rating and zero unresolved complaints.',
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
