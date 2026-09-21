import { type SchemaTypeDefinition } from 'sanity';
import { seo } from './seo';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { contactPage } from './contactPage';
import { galleryPage } from './galleryPage';
import { location } from './location';
import { service } from './service';
import { project } from './project';
import { testimonial } from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seo,
    siteSettings,
    homePage,
    aboutPage,
    contactPage,
    galleryPage,
    location,
    service,
    project,
    testimonial,
  ],
};
