import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Catálogo de Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Completo del Servicio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Título Corto (para menús y botones)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Subtítulo / Bajada Atractiva',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Comercial Completa',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Principal del Servicio',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'startingPrice',
      title: 'Texto de Precio o Consulta',
      type: 'string',
      description: 'Ej: Free 3D Design Consultation',
    }),
    defineField({
      name: 'benefits',
      title: 'Lista de Beneficios / Ventajas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Orden de Visualización',
      type: 'number',
    }),
    defineField({
      name: 'seo',
      title: '🎯 Optimización SEO y Redes Sociales',
      type: 'seo',
    }),
  ],
});
