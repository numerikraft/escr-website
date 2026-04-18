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

export default function Terms() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = React.useMemo(() => [
    { id: 'acceptance', label: '1. Acceptance of Terms' },
    { id: 'scope', label: '2. Scope of Services' },
    { id: 'obligations', label: '3. User Obligations' },
    { id: 'intellectual', label: '4. Intellectual Property' },
    { id: 'disclaimer', label: '5. Medical Disclaimer' },
    { id: 'confidentiality', label: '6. Confidentiality' },
    { id: 'liability', label: '7. Limitation of Liability' },
    { id: 'termination', label: '8. Termination' },
    { id: 'governing', label: '9. Governing Law' },
    { id: 'modifications', label: '10. Modifications' },
    { id: 'contact', label: '11. Contact Information' },
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
          title="Terms of Use | ES Clinical Research"
          description="Read the Terms of Use for ES Clinical Research website. Understand the rules, legal provisions, and user obligations governing access to our clinical research services."
          keywords="terms of use, CRO terms, clinical research terms, ES Clinical Research legal"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Terms of Use', url: '/terms-of-use' }
          ]}
        />
        <PageHero 
          tag="#LEGAL"
          title="Terms of Use"
          subtitle="(Last Updated: 01/01/2026)"
          hasMargin={true}
          smallSubtitle={true}
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
                Welcome strictly to the ES Clinical Research (ES-CR) digital ecosystem. These comprehensive "Terms & Conditions" meticulously outline the exact rules, rigid provisions, and bounding legal agreements governing your access, browsing, and utilization of our corporate website, proprietary clinical data portals, and expansive consultative services.
              </p>

              {/* SECTION: Acceptance */}
              <div id="acceptance" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  1. Acceptance of Terms
                </h2>
                <div className="border-l-2 border-[#7f2191] pl-6 py-1 mb-12">
                  <p className="text-[#50298e] italic">
                    By continuing to scroll, browse, consume literature, or transmit data through any ES-CR digital property, you proactively signal your absolute, legally indisputable consent to be permanently bound by these exact Terms, our Privacy Policy, and all forthcoming amendments. If you conceptually disagree or lack corporate authorization, you must instantly disconnect.
                  </p>
                </div>
              </div>

              {/* SECTION: Scope */}
              <div id="scope" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  2. Scope of Services
                </h2>
                <p className="mb-10">ES-CR operates as a high-tier Contract Research Organization. We strictly provide the following vast categories of highly specialized services directly to pharmaceutical firms, healthcare conglomerates, and sovereign medical authorities:</p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <ul className="space-y-4">
                    {[
                      'End-to-End Clinical Study Control encompassing phase monitoring and flawless pharmacoeconomic analysis layers.',
                      'Real-World Evidence (RWE) accumulation and elite data analytics for post-marketing surveillance dynamics.',
                      'Medical Writing & Compliance crafting to successfully navigate complex regulatory hurdles and publishing endpoints.',
                      'Comprehensive Patient Support & Adherence Programs seamlessly orchestrated via deep expert consultancy.',
                      'Strategic Local Representation and massive research logistics throughout the MENA region and specific European borders.'
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

              {/* SECTION: Obligations */}
              <div id="obligations" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  3. User Obligations & Permitted Conduct
                </h2>
                <p className="mb-10">Your access to this high-end corporate infrastructure is explicitly granted strictly under the uncompromising promise that you will:</p>
                <ul className="space-y-4 mb-12 ml-2">
                  {[
                    'Utilize all deployed content and proprietary tools strictly for legitimate, declared professional purposes.',
                    'Absolutely refrain from engaging in any disruptive, malicious, or unlawfully competitive digital activities.',
                    'Never execute automated scraping, robotic data harvesting, or forceful extraction of our registered expert directories.',
                    'Maintain total secrecy regarding any credentials, private links, or portal pass-codes assigned by ES-CR administrators.',
                    'Proactively instantly notify our security team regarding any suspected systemic vulnerabilities.'
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#7f2191] mt-[8px] text-[8px]">●</span>
                        <span className="font-normal">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* SECTION: Intellectual */}
              <div id="intellectual" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  4. Intellectual Property Rights (IP)
                </h2>
                <p className="mb-12">
                  Every singular pixel, sophisticated logo, complex clinical protocol layout, proprietary service trademark, algorithmic process, whitepaper text, corporate graphic, and unique UX architecture displayed resides under the aggressive and absolute intellectual ownership of ES-CR. You possess precisely zero rights to blindly copy, heavily modify, re-brand, mass distribute, or reverse-engineer any content parameter without securing a heavily documented, physically signed executive waiver from our legal directorate. Violators will face immediate, merciless civil injunctions.
                </p>
              </div>

              {/* SECTION: Disclaimer */}
              <div id="disclaimer" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  5. Explicit Medical Disclaimer
                </h2>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] p-6 rounded-2xl mb-12">
                  <p className="text-[#50298e] italic font-medium">
                    Despite our vast clinical expertise, absolutely nothing on this website structurally constitutes direct medical advice, prescriptive guidance, or individual diagnostic consulting. All sophisticated scientific information broadcasted here is engineered strictly for pharmaceutical organizations, institutional researchers, regulatory bodies, and licensed healthcare professionals conducting macro-level study design. Never pivot personal health strategies based on corporate CRO marketing collateral.
                  </p>
                </div>
              </div>

              {/* SECTION: Confidentiality */}
              <div id="confidentiality" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  6. Corporate Confidentiality
                </h2>
                <p className="mb-12">
                  If you engage formally with ES-CR to execute clinical ventures, you will inevitably interface with volatile trade secrets, embargoed drug data, and non-public market strategies. These Terms function as a baseline non-disclosure matrix. All "insider" data transmitted through secure channels, virtual data rooms (VDRs), or physical meetings remains the strictly protected property of the inciting sponsor and ES-CR.
                </p>
              </div>

              {/* SECTION: Liability */}
              <div id="liability" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  7. Absolute Limitation of Liability
                </h2>
                <p className="mb-10">To the absolute maximal extreme permitted under international and local sovereign limits, ES-CR categorically disclaims all liability for:</p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-12">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Financial Loss</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Direct, cascading, indirect, punitive, or consequential losses stemming from catastrophic data loss or missed business targets.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Digital Failures</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Unforeseen technical implosions, prolonged service delays, or crippling cyber-security breaches outside our immediate firewall control.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Decision Vectors</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Any independent corporate or clinical verdicts you execute after digesting our generic whitepapers or unverified public website statistics.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Third-Parties</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">The erratic behaviors, toxic payloads, or unexpected bankruptcies of interconnected third-party vendors or hyper-linked sponsors.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Termination */}
              <div id="termination" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  8. Administrative Termination
                </h2>
                <p className="mb-12">
                  We arbitrarily reserve the unchallengeable right to permanently blacklist your IP, nuke your corporate portal credentials, and totally terminate your digital access without issuing prior warnings, explanations, or grace periods if we detect severe violations of these Terms, suspected espionage, or disruptive hostile actions targeted at our research infrastructure.
                </p>
              </div>

              {/* SECTION: Governing */}
              <div id="governing" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  9. Governing Law & Dispute Resolution
                </h2>
                <p className="mb-12">
                  These relentless Terms are systematically governed by the prevailing legal doctrines and constitutional statutes of the People's Democratic Republic of Algeria. Should an irreconcilable conflict, breach of contract, or severe corporate dispute detonate relative to this website's usage, it shall be decisively dragged before the exclusive jurisdiction of the competent judicial courts anchored in Algiers, rendering all other regional venues totally invalid.
                </p>
              </div>

              {/* SECTION: Modifications */}
              <div id="modifications" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  10. Unannounced Modifications
                </h2>
                <p className="mb-12">
                  ES-CR's board of directors can stealthily tweak, massively overhaul, or critically rewrite these Terms at any unannounced second to mirror shifting compliance laws or internal strategic pivots. The updated Terms act with instant lethal force upon deployment to this URL. We do not owe you an email alert regarding these structural shifts.
                </p>
              </div>

              {/* SECTION: Contact */}
              <div id="contact" className="scroll-mt-32 pb-10 border-b border-[#e2dced]/60">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  11. Direct Legal Contact
                </h2>
                <p className="mb-12">
                  For formal legal serving, contract negotiations, IP clearance, or detailed inquiries regarding the enforcement of these rigid Terms, directly invoke our corporate contact lines:
                </p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <p className="mb-6 font-semibold text-[#50298e] text-[18px]">ES Clinical Research Headquarters</p>
                  
                  <div className="space-y-4 text-[15.5px]">
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Legal Dept:</span>
                      <a href="mailto:legal@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        legal@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Operations:</span>
                      <a href="mailto:contact@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        contact@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Corporate:</span>
                      <a href="tel:+21320339120" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        +213 20 33 91 20
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">HQ Address:</span>
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