import { defineField, defineType } from 'sanity';

export const galleryPage = defineType({
  name: 'galleryPage',
  title: 'Página Galería (Gallery)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      initialValue: 'Página Galería (Gallery)',
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
          initialValue: 'Project Portfolio',
          validation: (Rule) =>
            Rule.max(30).warning('Recomendado: máximo 30 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          description: 'Longitud ideal: hasta 35 caracteres (máx. recomendado: 50)',
          initialValue: 'Our Masterpiece Installations',
          validation: (Rule) =>
            Rule.max(50).warning('Recomendado: máximo 50 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          description: 'Longitud ideal: hasta 180 caracteres (máx. recomendado: 230)',
          initialValue: 'Explore our portfolio of completed luxury interlocking paver driveways, resort patios, non-slip pool decks, and lush synthetic turf throughout Southern California.',
          validation: (Rule) =>
            Rule.max(230).warning('Recomendado: máximo 230 caracteres.'),
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
