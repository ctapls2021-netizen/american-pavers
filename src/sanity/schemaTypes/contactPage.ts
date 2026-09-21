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
          description: 'Longitud ideal: hasta 35 caracteres (máx. recomendado: 48)',
          initialValue: 'Schedule Free In-Home Consultation',
          validation: (Rule) =>
            Rule.max(48).warning('Recomendado: máximo 48 caracteres.'),
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          description: 'Longitud ideal: hasta 50 caracteres (máx. recomendado: 65)',
          initialValue: 'Let’s Design Your Dream Outdoor Living Space',
          validation: (Rule) =>
            Rule.max(65).warning('Recomendado: máximo 65 caracteres.'),
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          description: 'Longitud ideal: hasta 150 caracteres (máx. recomendado: 195)',
          initialValue: 'Free on-site 3D digital design consultation, laser measurements, and an itemized firm quote with 25-year transferable warranty protection.',
          validation: (Rule) =>
            Rule.max(195).warning('Recomendado: máximo 195 caracteres.'),
        }),
      ],
    }),
    defineField({
      name: 'supportNote',
      title: 'Nota de Asistencia Directa',
      type: 'string',
      description: 'Longitud ideal: hasta 65 caracteres (máx. recomendado: 85)',
      initialValue: 'Prefer to speak with an estimator right now? Call us directly:',
      validation: (Rule) =>
        Rule.max(85).warning('Recomendado: máximo 85 caracteres.'),
    }),
    defineField({
      name: 'seo',
      title: '🎯 Optimización SEO y Redes Sociales',
      type: 'seo',
    }),
  ],
});
