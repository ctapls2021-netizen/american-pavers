import { defineField, defineType } from 'sanity';

export const location = defineType({
  name: 'location',
  title: 'Ciudades y Ubicaciones',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Ciudad / Zona',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'county',
      title: 'Condado (County)',
      type: 'string',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Título SEO (Meta Title)',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Descripción SEO (Meta Description)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de Cabecera (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'projectsCompleted',
      title: 'Proyectos Completados en la Zona',
      type: 'number',
    }),
    defineField({
      name: 'localOfficeAddress',
      title: 'Dirección de Oficina Local',
      type: 'string',
    }),
    defineField({
      name: 'highlightNeighborhoods',
      title: 'Vecindarios Destacados',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'zipCodes',
      title: 'Códigos Postales (Zip Codes)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
