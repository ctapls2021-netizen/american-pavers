import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool, defineDocuments } from 'sanity/presentation';
import { schema } from './src/sanity/schemaTypes';
import { projectId, dataset } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'American Pavers & Turf Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Panel de Contenido')
          .items([
            // Menú de Páginas
            S.listItem()
              .title('📄 Todas las Páginas')
              .child(
                S.list()
                  .title('Páginas del Sitio')
                  .items([
                    S.listItem()
                      .title('Página de Inicio (Home)')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('Nosotros (About Us)')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem()
                      .title('Financiamiento (Financing)')
                      .child(S.document().schemaType('financingPage').documentId('financingPage')),
                    S.listItem()
                      .title('Galería (Gallery)')
                      .child(S.document().schemaType('galleryPage').documentId('galleryPage')),
                    S.listItem()
                      .title('Contacto (Contact Us)')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                  ])
              ),

            // Catálogo de Servicios
            S.documentTypeListItem('service').title('🛠️ Catálogo de Servicios'),

            // Ciudades y Ubicaciones
            S.documentTypeListItem('location').title('📍 Ciudades y Ubicaciones'),

            // Proyectos y Testimonios
            S.documentTypeListItem('project').title('📸 Transformaciones (Antes/Después)'),
            S.documentTypeListItem('testimonial').title('⭐ Reseñas de Clientes'),

            S.divider(),

            // Configuración Global
            S.listItem()
              .title('⚙️ Configuración de la Empresa')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    presentationTool({
      previewUrl: {
        preview: '/',
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: `_type in ["homePage", "siteSettings", "service"]`,
          },
          {
            route: '/about',
            filter: `_type in ["aboutPage", "siteSettings"]`,
          },
          {
            route: '/contact',
            filter: `_type in ["contactPage", "siteSettings"]`,
          },
          {
            route: '/financing',
            filter: `_type in ["financingPage", "siteSettings"]`,
          },
          {
            route: '/gallery',
            filter: `_type in ["galleryPage", "project"]`,
          },
          {
            route: '/services/:slug',
            filter: `_type == "service" && slug.current == $slug`,
          },
          {
            route: '/locations/:city',
            filter: `_type == "location" && slug.current == $city`,
          },
        ]),
      },
    }),
  ],
  schema,
});
