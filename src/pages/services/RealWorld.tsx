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
    topImage: "/services/rwe/real-world-evidence-overview-cro.png",
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
        "/services/rwe/phase-iv-studies-post-marketing.png",
        "/services/rwe/observational-studies-clinical-practice.png",
        "/services/rwe/patient-registries-data-collection.png",
        "/services/rwe/patient-surveys-questionnaires-rwe.png",
        "/services/rwe/pharmaco-epidemiology-risk-management.png"
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