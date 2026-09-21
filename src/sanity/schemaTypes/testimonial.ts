import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Reseñas y Testimonios',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Nombre del Cliente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string',
    }),
    defineField({
      name: 'projectType',
      title: 'Tipo de Proyecto Realizado',
      type: 'string',
      description: 'Ej: Backyard Patio & Outdoor Kitchen',
    }),
    defineField({
      name: 'rating',
      title: 'Calificación (1 a 5 Estrellas)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'date',
      title: 'Fecha Visible',
      type: 'string',
      description: 'Ej: March 2026',
    }),
    defineField({
      name: 'quote',
      title: 'Texto del Testimonio / Reseña',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verified',
      title: '¿Reseña Verificada?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
