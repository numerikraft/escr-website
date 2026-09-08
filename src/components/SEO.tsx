import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

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
  noindex?: boolean;
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
  breadcrumbs,
  noindex = false
}: SEOProps) {
  const location = useLocation();
  const { language } = useLanguage();

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

    // 3. Helper to set link tags
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      let selector = `link[rel="${rel}"]`;
      if (hreflang) selector += `[hreflang="${hreflang}"]`;
      
      let element = document.querySelector(selector) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 4. Generate absolute URLs
    // Note: We remove any trailing slash for consistency except for root
    const cleanPath = location.pathname.endsWith('/') && location.pathname.length > 1 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
      
    const absoluteUrl = url || `${SITE_URL}${cleanPath}`;
    const absoluteImage = image 
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) 
      : `${SITE_URL}${DEFAULT_IMAGE}`;

    // 5. Canonical URL
    setLinkTag('canonical', absoluteUrl);

    // 6. Basic Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) setMetaTag('name', 'keywords', keywords);
    
    // 7. Robots (noindex if requested)
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 8. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', absoluteUrl);
    setMetaTag('property', 'og:image', absoluteImage);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', language === 'fr' ? 'fr_FR' : 'en_US');

    // 9. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteImage);

    // 10. SEO Hreflang for multilinguism
    // Since our app routes are the same for both languages, we use ?lang=en and ?lang=fr
    // For x-default, we use the english one (or without parameter).
    const enUrl = `${absoluteUrl}?lang=en`;
    const frUrl = `${absoluteUrl}?lang=fr`;
    
    setLinkTag('alternate', enUrl, 'en');
    setLinkTag('alternate', frUrl, 'fr');
    setLinkTag('alternate', absoluteUrl, 'x-default');

    // 11. Breadcrumb JSON-LD
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
  }, [title, description, keywords, image, url, type, breadcrumbs, location.pathname, language, noindex]);

  return null;
}
