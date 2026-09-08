/**
 * Centralized Service Data Source
 * Used across Navbar, Service pages, Home, and About checklists
 * Ensures DRY architecture and URL consistency.
 */

export const SERVICES_DATA = [
  {
    id: 'clinical-studies',
    title: 'Clinical Studies',
    titleFr: 'Études Cliniques',
    description: 'Design and manage trials to generate reliable data.',
    descriptionFr: 'Concevoir et gérer des essais pour générer des données fiables.',
    path: '/services/clinical-studies',
    image: '/services/card-clinical-studies-cro-service.webp?v=4',
  },
  {
    id: 'pharmacoeconomic',
    title: 'Pharmacoeconomic Studies',
    titleFr: 'Études Pharmacoéconomiques',
    description: 'Assess therapy value and cost-effectiveness for informed decisions.',
    descriptionFr: 'Évaluer la valeur et le rapport coût-efficacité pour des décisions éclairées.',
    path: '/services/pharmacoeconomic-studies',
    image: '/services/card-pharmacoeconomic-studies-service.webp?v=4',
  },
  {
    id: 'patient-support',
    title: 'Patient Support Program',
    titleFr: 'Programme Support Patient',
    description: 'Support patients throughout their treatment journey.',
    descriptionFr: 'Soutenir les patients tout au long de leur parcours de soins.',
    path: '/services/patient-support-program',
    image: '/services/card-patient-support-program-service.webp?v=4',
  },
  {
    id: 'real-world',
    title: 'Real-World Evidence',
    titleFr: 'Données de vie réelle (RWE)',
    description: 'Use real-world data to inform clinical and market strategies.',
    descriptionFr: 'Utiliser les données en vie réelle pour guider les stratégies cliniques et de marché.',
    path: '/services/real-world-evidence',
    image: '/services/card-real-world-evidence-service.webp?v=4',
  },
  {
    id: 'medical-writing',
    title: 'Medical Writing',
    titleFr: 'Rédaction Médicale',
    description: 'High-quality scientific & regulatory documents ensuring clarity, compliance, and international standards.',
    descriptionFr: 'Documents scientifiques & réglementaires de haute qualité garantissant clarté, conformité et standards internationaux.',
    path: '/services/medical-writing',
    image: '/services/card-medical-writing-service.webp?v=4',
  },
  {
    id: 'expert-support',
    title: 'Expert Support',
    titleFr: "Support d'Experts",
    description: 'Connect with scientific and medical experts for guidance.',
    descriptionFr: 'Collaborer avec des experts scientifiques et médicaux pour être guidé.',
    path: '/services/expert-support',
    image: '/services/card-expert-support-service.webp?v=4',
  },
  {
    id: 'training',
    title: 'Training',
    titleFr: 'Formations',
    description: 'Professional training programs aligned with national and international requirements.',
    descriptionFr: 'Programmes de formation professionnelle alignés sur les exigences nationales et internationales.',
    path: '/services/training',
    image: '/services/card-training-clinical-research-service.webp?v=4',
  }
];
