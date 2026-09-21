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
          initialValue: 'Project Portfolio',
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Our Masterpiece Installations',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          initialValue: 'Explore our portfolio of completed luxury interlocking paver driveways, resort patios, non-slip pool decks, and lush synthetic turf throughout Southern California.',
        }),
      ],
    }),
  ],
});
