import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { clinicalStudiesTranslations } from '../../data/translations/serviceClinicalStudies';

export default function ClinicalStudies() {
  const { language } = useLanguage();
  const t = clinicalStudiesTranslations[language as keyof typeof clinicalStudiesTranslations] || clinicalStudiesTranslations.en;

  const clinicalStudiesData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/clinical-studies",
    topImage: "/services/clinical-studies/clinical-studies-overview-cro.webp",
    topTitle: t.topTitle,
    topParagraphs: t.topParagraphs,
    topSubTitle: (
      <span className="whitespace-pre-line">{t.topSubTitle}</span>
    ),
    topList: t.topList,
    banners: t.banners.map((b, i) => {
      const originalImages = [
        "/services/clinical-studies/regulatory-management-clinical-studies.webp",
        "/services/clinical-studies/clinical-operations-site-management.webp",
        "/services/clinical-studies/monitoring-quality-control-clinical.webp",
        "/services/clinical-studies/data-management-biostatistics-cro.webp",
        "/services/clinical-studies/final-report-pharmacovigilance-cro.webp"
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

  return <ServiceLayout data={clinicalStudiesData} />;
}
