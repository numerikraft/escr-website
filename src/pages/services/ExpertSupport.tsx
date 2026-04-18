import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const expertSupportData: ServiceData = {
  heroTitle: "Expert Support",
  seoDescription: "ESCR organizes advisory boards, KOL engagement, recommendation synthesis, and scientific content preparation for pharmaceutical and healthcare stakeholders.",
  seoKeywords: "expert support, advisory boards, KOL engagement, scientific experts, healthcare professional support, expert recommendation, CRO consulting",
  seoUrl: "/services/expert-support",
  topImage: "/services/expert-support/expert-support-overview-cro.png",
  topTitle: (
    <>
      How do we enhance your<br className="hidden md:block" /> scientific strategy?
    </>
  ),
  topParagraphs: [
    "ES-CR provides scientific expertise and supports the organization of advisory boards through structured expert engagement and coordinated communication processes.",
    "We identify relevant experts, capture their insights, prepare discussion materials and translate recommendations into actionable outcomes.",
    "Our team ensures smooth logistics, transparent workflows, and synthesis of expert contributions."
  ],
  topSubTitle: (
    <>Specialized support for<br />scientific strategy</>
  ),
  topList: [
    "Organized scientific discussions",
    "Structured advisory workflows",
    "Clear expert selection",
    "Strong insight synthesis",
    "Reliable coordination support",
    "Showcasing Scientific Expertise"
  ],
  banners: [
    {
      image: "/services/expert-support/advisory-board-management-cro.png",
      title: "Advisory Board Management",
      description: "We organize and manage advisory boards, ensuring structured discussions, clear agendas, and efficient communication flow to capture expert insights effectively.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/expert-support/expert-identification-kol-engagement.png",
      title: "Expert Identification & Engagement",
      description: "We select relevant experts, evaluate profiles, and coordinate invitations to assemble the most qualified participants for each scientific or strategic topic.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/expert-support/recommendation-synthesis-expert.png",
      title: "Recommendation Synthesis",
      description: "We compile expert opinions into clear summaries, capturing perspectives, priorities, and actionable recommendations for internal or external decision-making.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/expert-support/healthcare-professional-support.png",
      title: "Health Care Professional Support",
      description: "We assist investigators with practical organization, documentation, and communication needs to ensure smooth study involvement and alignment with project requirements.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/expert-support/scientific-content-preparation.png",
      title: "Scientific Content Preparation",
      description: "We prepare briefing materials, slides, and structured documents to support expert discussions and ensure each session is productive and well-aligned.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/expert-support/scientific-publications-manuscripts.png",
      title: "Scientific Publications",
      description: "Writing of abstracts and scientific manuscripts, with full management of submission and follow-up until acceptance.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function ExpertSupport() {
  return <ServiceLayout data={expertSupportData} />;
}