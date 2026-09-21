import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'Optimización SEO y Redes Sociales',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Título (Título para Google)',
      type: 'string',
      description:
        'Recomendado entre 45 y 60 caracteres. Es el título azul visible en los resultados de búsqueda de Google.',
      validation: (Rule) =>
        Rule.max(70).warning('Los títulos de más de 65 caracteres suelen cortarse en Google.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción (Resumen en Google)',
      type: 'text',
      rows: 3,
      description:
        'Recomendado entre 130 y 160 caracteres. Es el texto descriptivo que persuade al usuario a hacer clic en Google.',
      validation: (Rule) =>
        Rule.max(170).warning(
          'Las descripciones de más de 160 caracteres se truncan con puntos suspensivos.'
        ),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen para Redes Sociales y WhatsApp (Open Graph)',
      type: 'image',
      description:
        'Imagen que aparece automáticamente al compartir el enlace por WhatsApp, Facebook, iMessage o LinkedIn (Recomendado: 1200 x 630 px).',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Palabras Clave Objetivo (Keywords)',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Términos de búsqueda principales para seguimiento interno del especialista en SEO.',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'noIndex',
      title: '¿Ocultar esta página de Google? (no-index)',
      type: 'boolean',
      description:
        'Activa esto únicamente si NO deseas que Google indexe ni muestre esta página en sus resultados de búsqueda.',
      initialValue: false,
    }),
  ],
});
