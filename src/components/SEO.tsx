import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_NAME = 'ES-CR';
const SITE_URL = 'https://esclinical.com';
const DEFAULT_IMAGE = '/escr-og.png';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  breadcrumbs 
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Helper to create/update meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 4. Generate absolute URLs
    const absoluteUrl = url || `${SITE_URL}${location.pathname}`;
    const absoluteImage = image 
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) 
      : `${SITE_URL}${DEFAULT_IMAGE}`;

    // 5. Canonical URL
    setLinkTag('canonical', absoluteUrl);

    // 6. Basic Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow');

    // 7. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', absoluteUrl);
    setMetaTag('property', 'og:image', absoluteImage);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_US');

    // 8. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteImage);

    // 9. Breadcrumb JSON-LD
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': item.name,
          'item': item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
        }))
      };

      let scriptEl = document.querySelector('script[data-seo="breadcrumb"]') as HTMLScriptElement;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.setAttribute('data-seo', 'breadcrumb');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(breadcrumbJsonLd);
    }

    // Cleanup: remove breadcrumb script when component unmounts
    return () => {
      const scriptEl = document.querySelector('script[data-seo="breadcrumb"]');
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, keywords, image, url, type, breadcrumbs, location.pathname]);

  return null;
}
