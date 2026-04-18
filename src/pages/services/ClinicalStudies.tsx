import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const clinicalStudiesData: ServiceData = {
  heroTitle: "Clinical Studies",
  seoDescription: "ESCR manages Phase I-III clinical studies with regulatory alignment, site monitoring, data quality oversight, and structured project execution across Algeria.",
  seoKeywords: "Phase I-III clinical studies, clinical trials Algeria, clinical research organization, CRO services, site management, clinical monitoring, biostatistics, data management, pharmacovigilance",
  seoUrl: "/services/clinical-studies",
  topImage: "/services/clinical-studies/clinical-studies-overview-cro.png",
  topTitle: "What phases do we support?",
  topParagraphs: [
    "ESCR supports Phase I, II and III studies through structured planning, operational coordination and regulatory alignment.",
    "Our activities include protocol development, site identification, study start-up support, monitoring and data quality oversight throughout study conduct.",
    "Working with investigators and sponsors, ESCR contributes to study continuity, timeline follow-up and generation of clinical evidence supporting development decisions."
  ],
  topSubTitle: (
    <>Focused support for<br />clinical studies</>
  ),
  topList: [
    "Optimized study setup",
    "Smooth operational flow",
    "Strong quality oversight",
    "Consistent monitoring",
    "Reliable data outputs"
  ],
  banners: [
    {
      image: "/services/clinical-studies/regulatory-management-clinical-studies.png",
      title: "Regulatory Management",
      description: "We ensure the preparation, compliance review, and submission of regulatory documents required for study start-up, in alignment with applicable requirements.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/clinical-studies/clinical-operations-site-management.png",
      title: "Clinical Operations",
      description: "We develop protocols, select optimal investigational sites, and manage all operational setup and logistics to ensure a clear, structured, and efficient project execution.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/clinical-studies/monitoring-quality-control-clinical.png",
      title: "Monitoring",
      description: "We provide continuous oversight, early deviation detection, and quality control to safeguard scientific integrity and maintain full compliance throughout the study.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/clinical-studies/data-management-biostatistics-cro.png",
      title: "Data Management & Biostatistics",
      description: "We structure, validate, and analyze data to produce reliable, interpretable, and scientifically sound results that support decision-making.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/clinical-studies/final-report-pharmacovigilance-cro.png",
      title: "Final Report & Pharmacovigilance",
      description: "We prepare the final report, ensure complete documentation, and manage pharmacovigilance to maintain transparency, safety, and full regulatory compliance.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function ClinicalStudies() {
  return <ServiceLayout data={clinicalStudiesData} />;
}