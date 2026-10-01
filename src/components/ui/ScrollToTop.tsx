'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Si la URL tiene un hash (ej: #services), no forzamos el scroll to top
    // porque queremos que el navegador salte a ese ancla.
    if (!window.location.hash) {
      // Un pequeño timeout asegura que Next.js ya montó la nueva página
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 10);
    }
  }, [pathname]);

  return null;
}
