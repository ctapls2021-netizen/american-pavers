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
            // Menú de Páginas del Sitio
            S.listItem()
              .title('📄 Todas las Páginas del Sitio')
              .child(
                S.list()
                  .title('Páginas del Sitio Web')
                  .items([
                    // 1. Portada
                    S.listItem()
                      .title('🏠 Página de Inicio (Home)')
                      .child(S.document().schemaType('homePage').documentId('homePage')),

                    // 2. Páginas de Servicios individuales
                    S.listItem()
                      .title('🛠️ Páginas de Servicios (6 Servicios)')
                      .child(
                        S.documentList()
                          .title('Páginas de Servicios')
                          .filter('_type == "service"')
                      ),

                    // 3. Páginas por Ciudad
                    S.listItem()
                      .title('📍 Páginas de Ciudades (6 Ubicaciones)')
                      .child(
                        S.documentList()
                          .title('Páginas de Ciudades')
                          .filter('_type == "location"')
                      ),

                    // 4. Nosotros
                    S.listItem()
                      .title('ℹ️ Nosotros (About Us)')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

                    // 5. Galería
                    S.listItem()
                      .title('📸 Galería de Trabajos (Gallery)')
                      .child(S.document().schemaType('galleryPage').documentId('galleryPage')),

                    // 6. Contacto
                    S.listItem()
                      .title('📞 Contacto (Contact Us)')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                  ])
              ),

            S.divider(),

            // Acceso Directo a Colecciones
            S.documentTypeListItem('service').title('🛠️ Catálogo de Servicios'),
            S.documentTypeListItem('location').title('📍 Catálogo de Ciudades'),
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
