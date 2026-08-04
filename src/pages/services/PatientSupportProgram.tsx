import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';
import { useLanguage } from '../../contexts/LanguageContext';
import { patientSupportTranslations } from '../../data/translations/servicePatientSupport';

export default function PatientSupportProgram() {
  const { language } = useLanguage();
  const t = patientSupportTranslations[language as keyof typeof patientSupportTranslations] || patientSupportTranslations.en;

  const patientSupportData: ServiceData = {
    heroTitle: t.heroTitle,
    seoDescription: t.seoDescription,
    seoKeywords: t.seoKeywords,
    seoUrl: "/services/patient-support-program",
    topImage: "/services/patient-support-program/patient-support-program-overview.png",
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
        "/services/patient-support-program/patient-education-training-program.png",
        "/services/patient-support-program/adherence-support-patient-followup.png",
        "/services/patient-support-program/call-center-logistical-assistance.png",
        "/services/patient-support-program/public-health-information-awareness.png",
        "/services/patient-support-program/program-coordination-patient-management.png"
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

  return <ServiceLayout data={patientSupportData} />;
}