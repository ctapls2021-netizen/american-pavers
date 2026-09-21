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
      description: 'Longitud ideal: hasta 35 caracteres (máx. recomendado: 45)',
      validation: (Rule) =>
        Rule.required().max(45).warning('Recomendado: máximo 45 caracteres para mantener el balance en cabeceras.'),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Título Corto (para menús y botones)',
      type: 'string',
      description: 'Longitud ideal: hasta 20 caracteres (máx. recomendado: 25)',
      validation: (Rule) =>
        Rule.max(25).warning('Recomendado: máximo 25 caracteres para que los botones y menús no se desborden.'),
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
      description: 'Longitud ideal: hasta 100 caracteres (máx. recomendado: 135)',
      validation: (Rule) =>
        Rule.max(135).warning('Recomendado: máximo 135 caracteres para una introducción fluida.'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Comercial Completa',
      type: 'text',
      rows: 4,
      description: 'Longitud ideal: hasta 270 caracteres (máx. recomendado: 350)',
      validation: (Rule) =>
        Rule.max(350).warning('Recomendado: hasta 350 caracteres para preservar la proporción de la tarjeta.'),
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
      description: 'Ej: Free 3D Design Consultation (máx. recomendado: 40)',
      validation: (Rule) =>
        Rule.max(40).warning('Recomendado: máximo 40 caracteres.'),
    }),
    defineField({
      name: 'benefits',
      title: 'Lista de Beneficios / Ventajas',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.max(110).warning('Recomendado: hasta 110 caracteres por viñeta para mantener lectura ágil.'),
        },
      ],
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
