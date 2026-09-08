import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { pharmacoeconomicTranslations } from '../../data/translations/servicePharmacoeconomic';

export default function Pharmacoeconomic() {
  const { language } = useLanguage();
  const t = pharmacoeconomicTranslations[language as keyof typeof pharmacoeconomicTranslations] || pharmacoeconomicTranslations.en;

  const pharmacoeconomicData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/pharmacoeconomic-studies",
    topImage: "/services/pharmacoeconomic/pharmacoeconomic-studies-overview.webp",
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
        "/services/pharmacoeconomic/value-dossier-market-access.webp",
        "/services/pharmacoeconomic/descriptive-cost-studies-analysis.webp",
        "/services/pharmacoeconomic/cost-effectiveness-modeling-health.webp",
        "/services/pharmacoeconomic/budget-impact-analysis-healthcare.webp",
        "/services/pharmacoeconomic/local-adaptation-global-economic-models.webp"
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

  return <ServiceLayout data={pharmacoeconomicData} />;
}
