import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const realWorldData: ServiceData = {
  heroTitle: "Real-World Evidence",
  seoDescription: "Generate actionable real-world evidence with ESCR: Phase IV studies, observational research, patient registries, surveys, and pharmaco-epidemiological analysis.",
  seoKeywords: "real-world evidence, RWE, Phase IV studies, observational studies, patient registries, pharmaco-epidemiology, post-marketing surveillance",
  seoUrl: "/services/real-world-evidence",
  topImage: "/services/rwe/real-world-evidence-overview-cro.png",
  topTitle: (
    <>
      How do we generate insights<br className="hidden md:block" /> grounded in real-world practice?
    </>
  ),
  topParagraphs: [
    "ES-CR conducts real-world studies that capture the full patient journey, care pathways, treatments, and clinical practices outside of controlled clinical trials.",
    "Through Phase IV, observational studies, patient registries, surveys, and pharmaco-epidemiological analyses, we generate data based on real-world conditions and clinical practices.",
    "Our approach supports patient safety monitoring by providing reliable data that help inform public health policies and improve care pathways."
  ],
  topSubTitle: (
    <>Reliable insights from<br />real-world settings</>
  ),
  topList: [
    "Real-life treatment evidence",
    "Structured observational workflows",
    "Clear population insights",
    "Consistent data collection",
    "Strong outcome interpretation"
  ],
  banners: [
    {
      image: "/services/rwe/phase-iv-studies-post-marketing.png",
      title: "Phase IV Studies",
      description: "We design and manage Phase IV studies to assess treatment effectiveness, safety, and adherence in real-world clinical practice settings.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/rwe/observational-studies-clinical-practice.png",
      title: "Observational Studies",
      description: "We conduct research that captures patient pathways and treatment patterns to generate data and insights reflecting real-world clinical practice.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/rwe/patient-registries-data-collection.png",
      title: "Patient Registries",
      description: "We design and manage registries to collect data supporting long-term outcome evaluation and trend monitoring in routine clinical practice.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/rwe/patient-surveys-questionnaires-rwe.png",
      title: "Patient Surveys & Questionnaires",
      description: "We Implement surveys to capture patient perceptions and behaviours, providing complementary evidence to support real-world understanding.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/rwe/pharmaco-epidemiology-risk-management.png",
      title: "Pharmaco-epidemiology & RMP",
      description: "We perform epidemiological analyses and support RMP development to ensure continuous safety evaluation and risk mitigation.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function RealWorld() {
  return <ServiceLayout data={realWorldData} />;
}