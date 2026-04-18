/**
 * Centralized Service Data Source
 * Used across Navbar, Service pages, Home, and About checklists
 * Ensures DRY architecture and URL consistency.
 */

export const SERVICES_DATA = [
  {
    id: 'clinical-studies',
    title: 'Clinical Studies',
    description: 'Design and manage trials to generate reliable data.',
    path: '/services/clinical-studies',
    image: '/services/card-clinical-studies-cro-service.png?v=4',
  },
  {
    id: 'pharmacoeconomic',
    title: 'Pharmacoeconomic Studies',
    description: 'Assess therapy value and cost-effectiveness for informed decisions.',
    path: '/services/pharmacoeconomic-studies',
    image: '/services/card-pharmacoeconomic-studies-service.png?v=4',
  },
  {
    id: 'patient-support',
    title: 'Patient Support Program',
    description: 'Support patients throughout their treatment journey.',
    path: '/services/patient-support-program',
    image: '/services/card-patient-support-program-service.png?v=4',
  },
  {
    id: 'real-world',
    title: 'Real-World Evidence',
    description: 'Use real-world data to inform clinical and market strategies.',
    path: '/services/real-world-evidence',
    image: '/services/card-real-world-evidence-service.png?v=4',
  },
  {
    id: 'medical-writing',
    title: 'Medical Writing',
    description: 'High-quality scientific & regulatory documents ensuring clarity, compliance, and international standards.',
    path: '/services/medical-writing',
    image: '/services/card-medical-writing-service.png?v=4',
  },
  {
    id: 'expert-support',
    title: 'Expert Support',
    description: 'Connect with scientific and medical experts for guidance.',
    path: '/services/expert-support',
    image: '/services/card-expert-support-service.png?v=4',
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Professional training programs aligned with national and international requirements.',
    path: '/services/training',
    image: '/services/card-training-clinical-research-service.png?v=4',
  }
];
