import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { ServiceData } from '../../types/service';

const pharmacoeconomicData: ServiceData = {
  heroTitle: "Pharmacoeconomic Studies",
  seoDescription: "ES Clinical Research delivers pharmacoeconomic evaluations: value dossiers, cost-effectiveness modeling, budget impact analysis, and global model adaptation.",
  seoKeywords: "pharmacoeconomic studies, health economics, cost-effectiveness, budget impact analysis, value dossier, market access, CRO pharmacoeconomics",
  seoUrl: "/services/pharmacoeconomic-studies",
  topImage: "/services/pharmacoeconomic/pharmacoeconomic-studies-overview.png",
  topTitle: (
    <>
      Turning data into<br className="hidden md:block" /> healthcare decisions
    </>
  ),
  topParagraphs: [
    "ES-CR translates clinical and economic data into evidence supporting market access and planning activities for pharmaceutical and biotechnology companies.",
    "We integrate clinical evidence, cost structures, health outcomes and real-world parameters to develop health economic models supporting analysis and decision processes.",
    "Our work contributes to resource allocation assessment, budget impact evaluation and market access activities through transparent and structured results."
  ],
  topSubTitle: (
    <>Strategic support for<br />economic evaluation</>
  ),
  topList: [
    "Clear value assessment",
    "Strong analytical models",
    "Evidence-based comparisons",
    "Resource optimization insights",
    "Actionable economic outputs"
  ],
  banners: [
    {
      image: "/services/pharmacoeconomic/value-dossier-market-access.png",
      title: "Value Dossiers",
      description: "We prepare structured value dossiers that synthesize clinical evidence, economics, and strategic arguments to support market access and decision-making.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/pharmacoeconomic/descriptive-cost-studies-analysis.png",
      title: "Descriptive Cost Studies",
      description: "We conduct descriptive analyses, including cost-of-illness studies, to quantify the economic burden associated with diseases and healthcare interventions.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/pharmacoeconomic/cost-effectiveness-modeling-health.png",
      title: "Cost-Effectiveness Modeling",
      description: "We develop cost-effectiveness models integrating clinical outcomes, resource utilization, and cost data to support health technology assessment and reimbursement decision-making.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/pharmacoeconomic/budget-impact-analysis-healthcare.png",
      title: "Budget Impact Analysis",
      description: "We evaluate short- and long-term budget consequences linked to treatment adoption, offering clear forecasts to guide resource allocation strategies.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    },
    {
      image: "/services/pharmacoeconomic/local-adaptation-global-economic-models.png",
      title: "Local Adaptation of Global Models",
      description: "We adapt international economic models to local contexts by adjusting epidemiology, cost inputs, and market parameters for accurate regional relevance.",
      linkText: "Schedule a Meeting",
      linkTo: "/contact"
    }
  ]
};

export default function Pharmacoeconomic() {
  return <ServiceLayout data={pharmacoeconomicData} />;
}