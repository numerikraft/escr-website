import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
  id: string;
}

/**
 * Injects a JSON-LD structured data script into the document head.
 * Automatically cleans up on unmount.
 */
export default function StructuredData({ data, id }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = `structured-data-${id}`;
    let scriptEl = document.querySelector(`script[data-sd="${scriptId}"]`) as HTMLScriptElement;
    
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-sd', scriptId);
      document.head.appendChild(scriptEl);
    }
    
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      ...data
    });

    return () => {
      const el = document.querySelector(`script[data-sd="${scriptId}"]`);
      if (el) el.remove();
    };
  }, [data, id]);

  return null;
}
