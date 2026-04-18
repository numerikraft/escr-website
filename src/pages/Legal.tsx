import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

export default function Legal() {
  const [activeSection, setActiveSection] = useState('publisher');

  const sections = React.useMemo(() => [
    { id: 'publisher', label: '1. Website Publisher' },
    { id: 'hosting', label: '2. Hosting Provider' },
    { id: 'agency', label: '3. Digital Agency' },
    { id: 'editorial', label: '4. Editorial Guidelines' },
    { id: 'intellectual', label: '5. Intellectual Property' },
    { id: 'liability', label: '6. Website Liability' },
    { id: 'data', label: '7. Personal Data Policy' },
    { id: 'applicable', label: '8. Applicable Law' },
    { id: 'contact', label: '9. Official Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      // We use a threshold closer to the scroll-mt-32 (128px) plus some buffer
      const threshold = 150;
      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 128,
        behavior: 'smooth'
      });
    }
  };

  return (
      <div className="bg-white font-sans">
        <SEO
          title="Legal Notice | ES Clinical Research"
          description="Legal notice for ES Clinical Research. Publisher information, hosting details, intellectual property, editorial guidelines, and applicable law under Algerian jurisdiction."
          keywords="legal notice, CRO legal, ES Clinical Research publisher, Algerian law, intellectual property"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Legal Notice', url: '/legal-notice' }
          ]}
        />
        <PageHero 
          tag="#LEGAL"
          title="Legal Notice"
          subtitle="(Last Updated: 01/01/2026)"
          smallSubtitle={true}
          hasMargin={true}
        />

        <section className="py-12 sm:py-24 relative bg-white">
          <div className="max-w-[76rem] mx-auto px-[30px] relative z-10 flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            
            {/* STICKY TOC */}
            <motion.div 
               {...fadeUp(0.1)}
               className="hidden lg:block w-72 shrink-0 sticky top-32"
            >
              <h3 className="text-[#50298e] font-bold text-[11px] tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#7f2191]"></span>
                Table of Contents
              </h3>
              <div className="flex flex-col border-l border-[#e2dced]/60 relative">
                <motion.div 
                  className="absolute left-0 w-[2px] bg-[#7f2191] transition-all duration-300 ease-out"
                  style={{
                    height: `${100 / sections.length}%`,
                    top: `${(sections.findIndex(s => s.id === activeSection) / sections.length) * 100}%`
                  }}
                />
                
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block py-2 pl-5 text-[13px] font-normal transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'text-[#7f2191] bg-gradient-to-r from-[#f9effb] to-transparent font-medium' 
                        : 'text-[#8a7c9e] hover:text-[#50298e] hover:translate-x-1'
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div 
               {...fadeUp(0.2)}
               className="flex-1 max-w-[840px] text-[16px] text-[#50298e] font-normal leading-[1.85]"
            >
              <p className="mb-14 text-[18px] leading-[1.8] text-[#50298e]">
                In strict compliance with international digital transparency mandates and the applicable legal statutes governing corporate web broadcasts in the People's Democratic Republic of Algeria, the following Legal Notice intricately details the sovereign corporate identity, precise technical hosting architecture, and rigorous editorial responsibilities intertwined with the ES Clinical Research (ES-CR) platform.
              </p>

              {/* SECTION: Publisher */}
              <div id="publisher" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  1. Website Publisher & Corporate Entity
                </h2>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] p-6 rounded-2xl mb-12">
                  <p className="text-[#50298e] italic font-medium">
                    The digital ecosystem accessible via this domain is comprehensively published, legally commanded, and aggressively maintained by <strong>ES Clinical Research (ES-CR)</strong>, a high-tier Contract Research Organization (CRO) deeply specialized in orchestrating advanced clinical trials, real-world evidence pipelines, pharmacovigilance, and complex medical writing parameters.
                  </p>
                </div>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <ul className="space-y-4">
                    {[
                      'Registered Corporate Name: ES Clinical Research [ES-CR]',
                      'Corporate Structural Form: Specialized Contract Research Organization (CRO)',
                      'Registered Legal Headquarters: 76, Coop Mina Benhaddadi Dar Diaf, Cheraga, Algiers.',
                      'Primary Telecommunications: +213 20 33 91 20',
                      'Director of Publications: Chief Executive Board, ES-CR'
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="mt-1 bg-white shadow-sm border border-[#e2dced] rounded-full p-0.5 text-[#7f2191] shrink-0">
                            <ChevronRight size={13} strokeWidth={2.5} />
                          </div>
                          <span className="text-[#50298e] font-normal">{item}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SECTION: Hosting */}
              <div id="hosting" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  2. Elite Technical Hosting
                </h2>
                <p className="mb-16">
                  To absolutely guarantee zero-downtime, impenetrable geographic redundancy, and rapid global content delivery for our healthcare and pharmaceutical partners, this vast digital platform is securely tethered to heavily fortified, internationally compliant cloud infrastructure servers. For security reasons concerning penetration vectors, the exact node clusters are classified, but all physical server footprints conform flawlessly to high-grade ISO 27001 data center compliances.
                </p>
              </div>

              {/* SECTION: Agency */}
              <div id="agency" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  3. Digital Agency & UX Architecture
                </h2>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-white shadow-sm border border-[#e2dced] rounded-full p-0.5 text-[#7f2191] shrink-0">
                        <ChevronRight size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[#50298e] font-normal leading-[1.8]">
                        The Site was designed and developed by Numerikraft (<a href="https://numerikraft.com" target="_blank" rel="noopener noreferrer" className="underline decoration-[#50298e]/50 underline-offset-4 hover:opacity-70 transition-opacity whitespace-nowrap font-medium text-[#7f2191]">numerikraft.com</a>), an agency specializing in premium digital experiences and strategic branding for the healthcare and pharmaceutical sectors.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SECTION: Editorial */}
              <div id="editorial" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  4. Editorial Guidelines & Clinical Independence
                </h2>
                <p className="mb-12 text-[#50298e]">
                  The Director of Publications functions as the absolute guarantor regarding the integrity of all digital artifacts published herein. All medical literature, pharmacovigilance reports, whitepapers, and operational blueprints broadcasted by ES-CR are rigorously scrutinized by internal quality-control doctors and scientific committees. ES-CR strictly shields its editorial independence from illicit pharmaceutical coercion, ensuring all displayed data patterns remain statistically uncorrupted.
                </p>
              </div>

              {/* SECTION: Intellectual */}
              <div id="intellectual" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  5. Total Intellectual Property Shield
                </h2>
                <p className="mb-10">The holistic integration of this specific website architecture—incorporating its unique brand identity, proprietary color-spaces, complex clinical wireframes, and raw underlying code—forms an indivisible digital asset legally monopolized by ES-CR and its design partners at Numerikraft. Any attempt to:</p>
                <ul className="space-y-4 mb-12 ml-2">
                  {[
                    'Mechanically scrape, extract, or scrape-mine corporate directories.',
                    'Screenshot and blindly republish ES-CR\'s proprietary study frameworks.',
                    'Plagiarize the unique UX flow for competing Contract Research Organizations.',
                    'Directly hyperlink to internal staging servers or private expert portals.'
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#7f2191] mt-[8px] text-[8px]">●</span>
                        <span className="font-normal">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* SECTION: Liability */}
              <div id="liability" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  6. Technical & Medical Liability Disclaimers
                </h2>
                <p className="mb-16">
                  ES-CR strategically deploys immense continuous effort to ensure all telemetry, statistics, and clinical information beamed via this website are surgically precise and current. However, we definitively reject any binding legal warranty regarding algorithmic perfection. ES-CR cannot be subjected to hostile litigation stemming from localized internet blackouts, corrupted packet routing, devastating hardware failures on the user's end, or third-party digital infiltration that briefly manipulates website text. Absolutely no content here substitutes strict medical advisory workflows.
                </p>
              </div>

              {/* SECTION: Data */}
              <div id="data" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  7. Subservience to Personal Data Frameworks
                </h2>
                <p className="mb-16">
                  ES Clinical Research intrinsically operates under a paranoid, zero-trust ethos regarding incoming data streams. Our digital data-handling doctrines are brutally enforced in complete harmony with our expansive Privacy Policy and local strictures mandated by the Algerian National Authority for the Protection of Personal Data (ANPDP). For sweeping details regarding your sovereign rights to obliterate, view, or freeze your data footprint, please navigate directly to our dedicated Privacy Policy hub.
                </p>
              </div>

              {/* SECTION: Applicable */}
              <div id="applicable" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  8. Enforceable Applicable Law
                </h2>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] p-6 rounded-2xl mb-12">
                  <p className="text-[#50298e] italic font-medium">
                    The semantic structure, technical operation, and corporate assertions encapsulated within these Legal Notices are exclusively governed, interpreted, and weaponized under the unvarnished laws of the People's Democratic Republic of Algeria. Should an irresolvable corporate dispute ignite, it will be forcefully remanded to the singular jurisdiction of the commercial courts physically positioned in Algiers.
                  </p>
                </div>
              </div>

              {/* SECTION: Contact */}
              <div id="contact" className="scroll-mt-32 pb-10 border-b border-[#e2dced]/60">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  9. Official Corporate Contact
                </h2>
                <p className="mb-12">
                  For formal notifications, regulatory audits, or demanding strategic digital takedowns regarding specific clinical literature displayed across our domain architecture, immediately mobilize communications to our established nerve center:
                </p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <p className="mb-6 font-semibold text-[#50298e] text-[18px]">ES-CR Executive Directorate</p>
                  
                  <div className="space-y-4 text-[15.5px]">
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Management:</span>
                      <a href="mailto:direction@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        direction@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">General:</span>
                      <a href="mailto:contact@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        contact@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Phone:</span>
                      <a href="tel:+21320339120" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        +213 20 33 91 20
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Legal Base:</span>
                      <span className="text-[#50298e] font-normal">
                        76, Coop Mina Benhaddadi Dar Diaf, Cheraga, Algiers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      </div>
  );
}