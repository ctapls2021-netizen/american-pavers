import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from './siteSettings';
import { service } from './service';
import { project } from './project';
import { testimonial } from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, service, project, testimonial],
};
