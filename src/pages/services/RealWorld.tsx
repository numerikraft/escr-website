import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { realWorldTranslations } from '../../data/translations/serviceRealWorld';

export default function RealWorld() {
  const { language } = useLanguage();
  const t = realWorldTranslations[language as keyof typeof realWorldTranslations] || realWorldTranslations.en;

  const realWorldData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/real-world-evidence",
    topImage: "/services/rwe/real-world-evidence-overview-cro.webp",
    topTitle: (
      <span className="whitespace-pre-line">{t.topTitle}</span>
    ),
    topParagraphs: t.topParagraphs,
    topSubTitle: (
      <span className="whitespace-pre-line">{t.topSubTitle}</span>
    ),
    topList: t.topList,
    banners: t.banners.map((b, i) => {
      const originalImages = [
        "/services/rwe/phase-iv-studies-post-marketing.webp",
        "/services/rwe/observational-studies-clinical-practice.webp",
        "/services/rwe/patient-registries-data-collection.webp",
        "/services/rwe/patient-surveys-questionnaires-rwe.webp",
        "/services/rwe/pharmaco-epidemiology-risk-management.webp"
      ];
      return {
        image: originalImages[i],
        title: b.title,
        description: b.description,
        linkText: b.linkText,
        linkTo: "/contact"
      };
    })
  };

  return <ServiceLayout data={realWorldData} />;
}
