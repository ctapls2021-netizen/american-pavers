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
      description: 'Longitud ideal: hasta 20 caracteres (máx. recomendado: 30)',
      validation: (Rule) =>
        Rule.required().max(30).warning('Recomendado: máximo 30 caracteres para el nombre.'),
    }),
    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string',
      description: 'Ej: Pasadena, CA (máx. recomendado: 30)',
      validation: (Rule) =>
        Rule.max(30).warning('Recomendado: máximo 30 caracteres.'),
    }),
    defineField({
      name: 'projectType',
      title: 'Tipo de Proyecto Realizado',
      type: 'string',
      description: 'Ej: Backyard Patio & Outdoor Kitchen (máx. recomendado: 45)',
      validation: (Rule) =>
        Rule.max(45).warning('Recomendado: máximo 45 caracteres.'),
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
      description: 'Ej: March 2026 (máx. recomendado: 20)',
      validation: (Rule) =>
        Rule.max(20).warning('Recomendado: máximo 20 caracteres.'),
    }),
    defineField({
      name: 'quote',
      title: 'Texto del Testimonio / Reseña',
      type: 'text',
      rows: 4,
      description: 'Longitud ideal: hasta 300 caracteres (máx. recomendado: 380)',
      validation: (Rule) =>
        Rule.required().max(380).warning('Recomendado: máximo 380 caracteres para que las tarjetas mantengan una altura equilibrada.'),
    }),
    defineField({
      name: 'verified',
      title: '¿Reseña Verificada?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
