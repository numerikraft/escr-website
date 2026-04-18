import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const patientSupportData: ServiceData = {
  heroTitle: "Patient Support Program",
  seoDescription: "ESCR designs patient support programs for chronic treatments: education, adherence monitoring, call center logistics, and end-to-end program coordination.",
  seoKeywords: "patient support program, PSP, patient adherence, treatment support, chronic treatment, patient education, call center clinical",
  seoUrl: "/services/patient-support-program",
  topImage: "/services/patient-support-program/patient-support-program-overview.png",
  topTitle: (
    <>
      Why is PSP essential<br className="hidden md:block" /> for chronic treatment?
    </>
  ),
  topParagraphs: [
    "ES-CR designs and operates structured Patient Support Programs that improve engagement, adherence, and overall study or treatment continuity.",
    "Our approach combines education, follow-up, logistical assistance, and clear communication pathways to ensure that patients remain informed, supported, and effectively guided.",
    "Through our coordinated workflows and trained teams, we help organizations deliver consistent, high-quality support tailored to patient needs while maintaining compliance and operational efficiency."
  ],
  topSubTitle: (
    <>Comprehensive Support<br />for Patient Programs</>
  ),
  topList: [
    "Continuous patient adherence",
    "Clear guidance and follow-up",
    "Accessible assistance channels",
    "Consistent communication flow",
    "Reliable program coordination"
  ],
  banners: [
    {
      image: "/services/patient-support-program/patient-education-training-program.png",
      title: "Patient Education & Training",
      description: "We provide educational materials and structured training sessions to help patients understand their treatment, expectations, and program requirements.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/patient-support-program/adherence-support-patient-followup.png",
      title: "Adherence Support",
      description: "We implement follow-up plans and touchpoints to strengthen patient adherence and ensure continuity throughout the program.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/patient-support-program/call-center-logistical-assistance.png",
      title: "Logistical Assistance (Call Center)",
      description: "We offer accessible logistical support, including call-center assistance to address questions, coordinate schedules, and facilitate patient navigation.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/patient-support-program/public-health-information-awareness.png",
      title: "Public Information",
      description: "We develop clear and accessible information materials to raise awareness, enhance understanding, and support communication with the broader public.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/patient-support-program/program-coordination-patient-management.png",
      title: "Program Coordination",
      description: "We manage program workflows, documentation, and communication channels to ensure smooth coordination between patients, healthcare teams, and project stakeholders.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function PatientSupportProgram() {
  return <ServiceLayout data={patientSupportData} />;
}