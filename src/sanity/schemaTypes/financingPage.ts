import { defineField, defineType } from 'sanity';

export const financingPage = defineType({
  name: 'financingPage',
  title: 'Página Financiamiento (Financing)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      initialValue: 'Página Financiamiento (Financing)',
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
          initialValue: 'Transparent Financing Plans',
        }),
        defineField({
          name: 'heading',
          title: 'Título Principal',
          type: 'string',
          initialValue: 'Flexible Payment Options for Your Outdoor Renovation',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtítulo',
          type: 'text',
          rows: 3,
          initialValue: 'Transform your driveway, patio, or pool deck now with low monthly payments and promotional 0% interest terms.',
        }),
      ],
    }),
  ],
});
