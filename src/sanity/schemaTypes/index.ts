import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { contactPage } from './contactPage';
import { financingPage } from './financingPage';
import { galleryPage } from './galleryPage';
import { location } from './location';
import { service } from './service';
import { project } from './project';
import { testimonial } from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homePage,
    aboutPage,
    contactPage,
    financingPage,
    galleryPage,
    location,
    service,
    project,
    testimonial,
  ],
};
