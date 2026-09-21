import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { schema } from './src/sanity/schemaTypes';
import { projectId, dataset } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'American Pavers & Turf Studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        preview: '/',
      },
    }),
  ],
  schema,
});
