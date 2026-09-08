/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import ScrollNav from './components/ScrollNav';
import Chatbot from './components/Chatbot';

// Code Splitting — Lazy load all pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Legal = React.lazy(() => import('./pages/Legal'));
const ClinicalStudies = React.lazy(() => import('./pages/services/ClinicalStudies'));
const Pharmacoeconomic = React.lazy(() => import('./pages/services/Pharmacoeconomic'));
const PatientSupportProgram = React.lazy(() => import('./pages/services/PatientSupportProgram'));
const RealWorld = React.lazy(() => import('./pages/services/RealWorld'));
const MedicalWriting = React.lazy(() => import('./pages/services/MedicalWriting'));
const ExpertSupport = React.lazy(() => import('./pages/services/ExpertSupport'));
const Training = React.lazy(() => import('./pages/services/Training'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Global Structured Data
const organizationData = {
  '@type': 'Organization',
  'name': 'ES-CR',
  'url': 'https://esclinical.com',
  'logo': 'https://esclinical.com/logo.svg',
  'description': 'Contract Research Organization (CRO) specializing in clinical studies, pharmacoeconomic studies, real-world evidence, medical writing, expert support, and training.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '76, Coop Mina Benhaddadi Dar Diaf',
    'addressLocality': 'Cheraga',
    'addressRegion': 'Algiers',
    'addressCountry': 'DZ'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+213-20-33-91-20',
    'contactType': 'customer service',
    'email': 'contact@esclinical.com',
    'availableLanguage': ['English', 'French']
  },
  'sameAs': [
    'https://linkedin.com/company/es-cr'
  ]
};

const websiteData = {
  '@type': 'WebSite',
  'name': 'ES-CR',
  'url': 'https://esclinical.com',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://esclinical.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-[#7f2191]/20 border-t-[#7f2191] rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollNav />
      {/* Global Structured Data — injected once */}
      <StructuredData data={organizationData} id="organization" />
      <StructuredData data={websiteData} id="website" />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/clinical-studies" element={<ClinicalStudies />} />
              <Route path="/services/pharmacoeconomic-studies" element={<Pharmacoeconomic />} />
              <Route path="/services/patient-support-program" element={<PatientSupportProgram />} />
              <Route path="/services/real-world-evidence" element={<RealWorld />} />
              <Route path="/services/medical-writing" element={<MedicalWriting />} />
              <Route path="/services/expert-support" element={<ExpertSupport />} />
              <Route path="/services/training" element={<Training />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-of-use" element={<Terms />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/legal-notice" element={<Legal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
