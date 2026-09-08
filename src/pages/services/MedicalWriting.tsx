import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { medicalWritingTranslations } from '../../data/translations/serviceMedicalWriting';

export default function MedicalWriting() {
  const { language } = useLanguage();
  const t = medicalWritingTranslations[language as keyof typeof medicalWritingTranslations] || medicalWritingTranslations.en;

  const medicalWritingData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/medical-writing",
    topImage: "/services/medical-writing/medical-writing-overview-cro.webp",
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
        "/services/medical-writing/scientific-communication-management.webp",
        "/services/medical-writing/publication-strategy-scientific.webp",
        "/services/medical-writing/scientific-white-paper-writing.webp",
        "/services/medical-writing/conference-materials-presentation.webp",
        "/services/medical-writing/editorial-review-quality-control.webp"
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

  return <ServiceLayout data={medicalWritingData} />;
}
