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
    topImage: "/services/training/training-overview-clinical-research.png",
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
        "/services/training/clinical-trials-gcp-training.png",
        "/services/training/specialized-professional-courses-cro.png",
        "/services/training/pharmacovigilance-training-clinical.png",
        "/services/training/data-management-biostatistics-training.png",
        "/services/training/scientific-writing-communication-course.png",
        "/services/training/ineas-accredited-training-program.png",
        "/services/training/distance-in-person-learning-cro.png"
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