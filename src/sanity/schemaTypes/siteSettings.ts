import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración General del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Comercial',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legalName',
      title: 'Razón Social Legal',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Eslogan / Subtítulo Principal',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono (Formato Internacional)',
      type: 'string',
      description: 'Ej: +18005558873',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formattedPhone',
      title: 'Teléfono Visible',
      type: 'string',
      description: 'Ej: (800) 555-8873',
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico de Contacto',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Horario de Atención',
      type: 'string',
    }),
    defineField({
      name: 'licenseNumber',
      title: 'Licencia / Certificaciones',
      type: 'string',
    }),
    defineField({
      name: 'yearsInBusiness',
      title: 'Años en el Mercado',
      type: 'number',
    }),
    defineField({
      name: 'projectsCompleted',
      title: 'Proyectos Completados',
      type: 'number',
    }),
    defineField({
      name: 'averageRating',
      title: 'Calificación Promedio (1.0 - 5.0)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'warrantyYears',
      title: 'Garantía Escrita',
      type: 'string',
      description: 'Ej: 25-Year Master Warranty',
    }),
    defineField({
      name: 'primaryServiceArea',
      title: 'Área de Cobertura Principal',
      type: 'string',
    }),
  ],
});
