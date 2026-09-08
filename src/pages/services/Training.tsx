import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { trainingTranslations } from '../../data/translations/serviceTraining';

export default function Training() {
  const { language } = useLanguage();
  const t = trainingTranslations[language as keyof typeof trainingTranslations] || trainingTranslations.en;

  const trainingData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/training",
    topImage: "/services/training/training-overview-clinical-research.webp",
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
        "/services/training/clinical-trials-gcp-training.webp",
        "/services/training/specialized-professional-courses-cro.webp",
        "/services/training/pharmacovigilance-training-clinical.webp",
        "/services/training/data-management-biostatistics-training.webp",
        "/services/training/scientific-writing-communication-course.webp",
        "/services/training/ineas-accredited-training-program.webp",
        "/services/training/distance-in-person-learning-cro.webp"
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

  return <ServiceLayout data={trainingData} />;
}
