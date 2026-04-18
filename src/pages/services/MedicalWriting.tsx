import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const medicalWritingData: ServiceData = {
  heroTitle: "Medical Writing",
  seoDescription: "Professional medical writing services by ESCR: scientific publications, white papers, conference materials, publication strategy, and editorial quality control.",
  seoKeywords: "medical writing, scientific publications, white papers, publication strategy, conference materials, editorial review, CRO documentation",
  seoUrl: "/services/medical-writing",
  topImage: "/services/medical-writing/medical-writing-overview-cro.png",
  topTitle: (
    <>
      How do we enhance your<br className="hidden md:block" /> scientific content ?
    </>
  ),
  topParagraphs: [
    "ES-CR provides structured medical writing services designed to turn complex data into clear, accurate, and impactful scientific content.",
    "Our team supports publications, communications, white papers, and conference materials with rigorous methodology and precise editorial standards and manages the entire submission process to international journals, ensuring transparent interactions with reviewers."
  ],
  topSubTitle: (
    <>High-Quality Support for<br />Scientific Content</>
  ),
  topList: [
    "Clear scientific messages",
    "Structured editorial workflow",
    "Accurate content development",
    "Strong publication alignment",
    "Reliable documentation support"
  ],
  banners: [
    {
      image: "/services/medical-writing/scientific-communication-management.png",
      title: "Scientific Communication Management",
      description: "We manage scientific publications and communication materials, ensuring accuracy, clarity, and alignment with international guidelines to strengthen visibility and impact.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/medical-writing/publication-strategy-scientific.png",
      title: "Publication Strategy",
      description: "We define publication plans, select target journals, and coordinate timelines to position scientific findings effectively and support visibility and strategic objectives.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/medical-writing/scientific-white-paper-writing.png",
      title: "Scientific & White Paper Writing",
      description: "We draft scientific papers, white papers, and supporting documents using rigorous methodology to ensure clarity, consistency, and strong scientific credibility.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/medical-writing/conference-materials-presentation.png",
      title: "Presentation & Conference Materials",
      description: "We prepare presentations, posters, and conference materials that communicate key insights and support scientific dissemination.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/medical-writing/editorial-review-quality-control.png",
      title: "Editorial Review & Quality Control",
      description: "We review and refine documents through editorial checks, ensuring accuracy, coherence, language quality, and alignment with scientific and regulatory expectations.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function MedicalWriting() {
  return <ServiceLayout data={medicalWritingData} />;
}