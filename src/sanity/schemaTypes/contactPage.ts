import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página Contacto (Contact Us)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      initialValue: 'Página Contacto (Contact Us)',
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
          initialValue: 'Schedule Free In-Home Consultation',
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Let’s Design Your Dream Outdoor Living Space',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          initialValue: 'Free on-site 3D digital design consultation, laser measurements, and an itemized firm quote with 25-year transferable warranty protection.',
        }),
      ],
    }),
    defineField({
      name: 'supportNote',
      title: 'Nota de Asistencia Directa',
      type: 'string',
      initialValue: 'Prefer to speak with an estimator right now? Call us directly:',
    }),
    defineField({
      name: 'seo',
      title: '🎯 Optimización SEO y Redes Sociales',
      type: 'seo',
    }),
  ],
});
