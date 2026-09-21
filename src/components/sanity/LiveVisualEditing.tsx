'use client';

import { useEffect, useState } from 'react';
import { VisualEditing } from '@sanity/visual-editing/react';

export default function LiveVisualEditing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only activate handshake if embedded inside an iframe (Sanity Studio) or preview mode
    if (typeof window !== 'undefined') {
      const isIframe = window.self !== window.top;
      const isPreview = window.location.search.includes('preview');
      if (isIframe || isPreview) {
        setMounted(true);
      }
    }
  }, []);

  if (!mounted) return null;

  return <VisualEditing portal={true} />;
}
