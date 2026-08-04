import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { expertSupportTranslations } from '../../data/translations/serviceExpertSupport';

export default function ExpertSupport() {
  const { language } = useLanguage();
  const t = expertSupportTranslations[language as keyof typeof expertSupportTranslations] || expertSupportTranslations.en;

  const expertSupportData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/expert-support",
    topImage: "/services/expert-support/expert-support-overview-cro.png",
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
        "/services/expert-support/advisory-board-management-cro.png",
        "/services/expert-support/expert-identification-kol-engagement.png",
        "/services/expert-support/recommendation-synthesis-expert.png",
        "/services/expert-support/healthcare-professional-support.png",
        "/services/expert-support/scientific-content-preparation.png",
        "/services/expert-support/scientific-publications-manuscripts.png"
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

  return <ServiceLayout data={expertSupportData} />;
}