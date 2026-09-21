import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `true` permite respuesta instantánea vía CDN global de Sanity
  perspective: 'published',
});
