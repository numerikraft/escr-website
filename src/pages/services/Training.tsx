import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const trainingData: ServiceData = {
  heroTitle: "Training",
  seoDescription: "ESCR delivers professional training: clinical trials & GCP, pharmacovigilance, biostatistics, scientific writing, and INEAS-accredited programs for healthcare teams.",
  seoKeywords: "clinical research training, GCP training, pharmacovigilance training, biostatistics training, scientific writing course, INEAS accredited, CRO training",
  seoUrl: "/services/training",
  topImage: "/services/training/training-overview-clinical-research.png",
  topTitle: (
    <>
      How do we build strong<br className="hidden md:block" /> professional skills?
    </>
  ),
  topParagraphs: [
    "ES-CR provides structured training programs to develop competencies in clinical research, regulatory requirements, data management, scientific communication, and study operations.",
    "Our modules combine theoretical foundations with practical applications tailored to professionals and future experts.",
    "ES-CR delivers customized continuous learning programs for clinical teams, study coordinators, investigators, and industry professionals."
  ],
  topSubTitle: (
    <>Building Expertise in<br />Clinical Research</>
  ),
  topList: [
    "Solid scientific foundations",
    "Practical skill development",
    "Clear, structured modules",
    "Industry-aligned training",
    "Flexible learning formats",
    "Field experts sharing knowledge"
  ],
  banners: [
    {
      image: "/services/training/clinical-trials-gcp-training.png",
      title: "Clinical Trials & GCP Training",
      description: "Introduces fundamentals of clinical trials and GCP, covering regulatory requirements, study design, patient safety, and data integrity, with practical guidance by clinical teams, coordinators and investigators.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/training/specialized-professional-courses-cro.png",
      title: "Specialized Professional Courses",
      description: "We provide targeted training for CRAs, study coordinators, investigators, and medical teams, focusing on operational processes and discipline-specific competencies.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/training/pharmacovigilance-training-clinical.png",
      title: "Pharmacovigilance in Clinical Trials",
      description: "We train participants on safety reporting, risk identification, and regulatory expectations to ensure compliance with pharmacovigilance requirements during studies.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/training/data-management-biostatistics-training.png",
      title: "Data Management & Biostatistics",
      description: "We teach the principles of data handling, validation, and statistical interpretation to strengthen participants’ analytical capabilities and understanding of study outcomes.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/training/scientific-writing-communication-course.png",
      title: "Scientific Writing & Communication Skills",
      description: "We train participants in critical reading, scientific writing, and effective communication to support publication quality and professional scientific exchange.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/training/ineas-accredited-training-program.png",
      title: "Accredited Training Sessions (INEAS)",
      description: "We offer accredited programs recognized by INEAS, ensuring learners follow validated, high-standard training pathways supported by certified instructors and official recognition.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/training/distance-in-person-learning-cro.png",
      title: "Distance & In-Person Learning",
      description: "We deliver courses both online and on-site, offering flexible formats that maintain interactivity, engagement, and consistent learning quality across all environments.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function Training() {
  return <ServiceLayout data={trainingData} />;
}