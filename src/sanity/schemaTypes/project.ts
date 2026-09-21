import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Proyectos y Transformaciones',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ciudad / Ubicación',
      type: 'string',
      description: 'Ej: Pasadena, Beverly Hills, Irvine',
    }),
    defineField({
      name: 'category',
      title: 'Categoría de Servicio',
      type: 'string',
      options: {
        list: [
          { title: 'Driveway Pavers', value: 'driveway-pavers' },
          { title: 'Patio Pavers', value: 'patio-pavers' },
          { title: 'Pool Deck Pavers', value: 'pool-deck-pavers' },
          { title: 'Synthetic Turf', value: 'synthetic-turf' },
          { title: 'Outdoor Kitchens', value: 'outdoor-kitchens' },
          { title: 'Decking & Pergolas', value: 'decking-pergolas' },
        ],
      },
    }),
    defineField({
      name: 'beforeImage',
      title: 'Foto Antes (Before)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'afterImage',
      title: 'Foto Después (After)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Breve Descripción del Trabajo Realizado',
      type: 'text',
      rows: 3,
    }),
  ],
});
