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

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('scope');

  const sections = React.useMemo(() => [
    { id: 'scope', label: '1. Scope of the Policy' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'usage', label: '3. How We Use Data' },
    { id: 'cookies', label: '4. Cookies & Tracking' },
    { id: 'sharing', label: '5. Data Sharing & Third-Parties' },
    { id: 'transfers', label: '6. International Transfers' },
    { id: 'security', label: '7. Data Security Measures' },
    { id: 'retention', label: '8. Data Retention' },
    { id: 'rights', label: '9. Your Rights & Choices' },
    { id: 'changes', label: '10. Changes to Policy' },
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
          title="Privacy Policy | ES Clinical Research"
          description="Learn how ES Clinical Research collects, uses, and protects your personal data. Our privacy policy covers data security, cookies, user rights, and GDPR compliance."
          keywords="privacy policy, data protection, GDPR, clinical research privacy, ES Clinical Research data"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy-policy' }
          ]}
        />
        <PageHero 
          tag="#LEGAL"
          title="Privacy Policy"
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
                ES Clinical Research ("ES-CR", "we", "our", "the Company") is committed to safeguarding the privacy, confidentiality, and security of personal information entrusted to us. This Comprehensive Privacy Policy outlines exactly how we collect, use, store, and protect personal data when individuals or corporate entities interact with our digital platforms, corporate services, clinical studies, and other administrative operations.
              </p>

              {/* SECTION: Scope */}
              <div id="scope" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  1. Scope of the Policy
                </h2>
                <p className="mb-12">
                  This multi-faceted Privacy Policy governs all personal data processed by ES-CR, spanning across our public website surfaces, backend digital tools, on-site research operations, and daily service deliverables. It is strictly applicable to both online and offline data collection streams systematically related to clinical trials, expert collaboration panels, digital training events, high-end medical writing, strategic regulatory support services, and B2B vendor management systems within the pharmaceutical and healthcare sectors.
                </p>
              </div>

              {/* SECTION: Collection */}
              <div id="collection" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  2. Information We Collect
                </h2>
                <p className="mb-10">During standard operations, ES-CR may ethically collect and aggregate the following comprehensive categories of information to ensure optimal service delivery:</p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <ul className="space-y-4">
                    {[
                      'Identity Data: Full name, title, date of birth, gender, and photographic identification.',
                      'Contact Data: Professional email addresses, corporate and mobile phone numbers, billing addresses.',
                      'Clinical & Study Data: Strictly regulated health data, biometric variations, and medical history points voluntarily provided by trial participants or clinical investigators (always pseudonomized where legally mandated).',
                      'Technical & Usage Data: Internet Protocol (IP) addresses, browser type/version, time zone setting and location.',
                      'Professional Portfolios: Comprehensive CVs, credentials, and compliance documentation shared for expert network engagement.',
                      'Financial Transactons: Limited corporate banking details processed strictly for B2B procurement.'
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

              {/* SECTION: Usage */}
              <div id="usage" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  3. How We Use Personal Data
                </h2>
                <p className="mb-10">Data is considered a strategic and delicate asset. ES-CR uses collected personal information strictly for lawful, explicitly stated, and operationally necessary activities:</p>
                <ul className="space-y-4 mb-12 ml-2">
                  {[
                    'To efficiently execute, manage, and monitor complex clinical studies, observational registries, and real-world evidence pipelines.',
                    'To orchestrate high-quality patient support programs and coordinate vast expert key-opinion-leader (KOL) panels.',
                    'To execute contractual obligations gracefully and bill corporate clients via structured accounting workflows.',
                    'To enhance website capability, debug UX/UI anomalies, and ensure digital infrastructure operates securely without disruption.',
                    'To strictly adhere to local, regional, and international regulatory compliance vectors dictated by pharmaceutical authorities.',
                    'To conduct internal corporate vetting during advanced recruitment lifecycles or high-tier vendor alignments.'
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#7f2191] mt-[8px] text-[8px]">●</span>
                        <span className="font-normal">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* SECTION: Cookies */}
              <div id="cookies" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  4. Cookies & Tracking Technologies
                </h2>
                <p className="mb-12">
                  Our web ecosystem leverages intelligent "cookies" and highly optimized tracking beacons to distinguish you from other generalized traffic. This is essential to provide a fluid, robust browsing experience and to structurally improve our site architectures. We deploy strictly necessary cookies to ensure basic logic/authentication functions, alongside performance (analytics) and functional cookies. You maintain total sovereign control over your browser's cookie settings and can flush these tiny local footprint files at any given time without severely breaking core functionality, though hyper-personalized workflows might default.
                </p>
              </div>

              {/* SECTION: Sharing */}
              <div id="sharing" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  5. Data Sharing & Third-Parties
                </h2>
                <p className="mb-10">
                  Absolute confidentiality is our standard. We do not sell, aggressively syndicate, or casually rent your proprietary data to unsanctioned third parties for direct marketing. However, specialized fragments of data may be shared under strict legal embargoes with:
                </p>
                <ul className="space-y-4 mb-12 ml-2">
                  {[
                    'Trusted IT infrastructure providers and cloud hosting nodes ensuring zero-downtime service architectures.',
                    'Appointed auditors, legal counsel, and corporate insurers bindingly sworn to rigorous non-disclosure agreements.',
                    'International or localized health authorities (e.g., Ministries of Health, Ethical Review Boards) strictly when commanded by imperative legal statutes regarding clinical safety.',
                    'Pharmaceutical sponsors or associated clinical partners firmly contractually restricted solely to utilizing data as defined by the protocol boundaries.'
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#7f2191] mt-[8px] text-[8px]">●</span>
                        <span className="font-normal">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* SECTION: Transfers */}
              <div id="transfers" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  6. International Data Transfers
                </h2>
                <p className="mb-12">
                  Given the inherently global nature of clinical trials and multi-centric studies, it may be necessary to route, bounce, or permanently house selected data blocks across international borders. Whenever ES-CR exports data away from its primary operational theater, we forcefully guarantee that robust contractual clauses, advanced technical scramblers, and equal protective equivalents are applied instantly, ensuring the data's legal invulnerability matches the region of origin.
                </p>
              </div>

              {/* SECTION: Security */}
              <div id="security" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  7. Data Security Measures
                </h2>
                <p className="mb-10">ES-CR implements a multi-tiered fortress of administrative, operational, and software-driven safeguards explicitly engineered to thwart unapproved processing, accidental deletion, or malignant structural hacks:</p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-12">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Network Level</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Military-grade secure socket layers (SSL), end-to-end encrypted tunnels, and continuous traffic scrubbing via advanced enterprise firewalls.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Access Control</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Strick Role-based Access Control (RBAC), biometric checks for sensitive data-rooms, and persistent active directory mapping.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Procedural</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Quarterly zero-trust security audits, mandatory personnel data-hygiene training, and ruthless incident-response simulations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">Anonymization</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">Rigorous algorithmic pseudonomization mapping applied to all baseline clinical variables prior to sponsor transit.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Retention */}
              <div id="retention" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  8. Data Retention Policies
                </h2>
                <p className="mb-12">
                  We actively oppose data hoarding. ES-CR only retains personal and operational data for the strictly calculated duration necessary to fulfill its original collection parameters. Once a clinical study naturally concludes, an expert contract expires, or regulatory archives reach their mandated expiration (e.g., 15-25 years for clinical trial master files depending on national law), the referenced data vectors are securely destroyed or irreversibly anonymized beyond all mathematical reconstruction.
                </p>
              </div>

              {/* SECTION: Rights */}
              <div id="rights" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  9. Your Rights & Choices
                </h2>
                <p className="mb-10">Depending on shifting geographical jurisdictions and evolving applicable laws, distinguished individuals universally command deeply respected sovereign rights regarding their data blueprint:</p>
                <ul className="space-y-4 mb-12 ml-2">
                  {[
                    'Right of Access: You may demand a transparent accounting of what exact data we hold.',
                    'Right to Rectification: You may compel us to actively fix flawed or obsolete demographic profiles.',
                    'Right to Erasure / "Right to be Forgotten": Subject to clinical trial retention caveats, you may ask us to completely flush your data.',
                    'Right to Restrict or Object: You may aggressively freeze how we process specific chunks of your information in disputes.',
                    'Right to Data Portability: You may request your data exported in a clean, machine-readable format for transfer to competing ecosystems.'
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#7f2191] mt-[8px] text-[8px]">●</span>
                        <span className="font-normal">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* SECTION: Changes */}
              <div id="changes" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="mb-12">
                  Due to the volatile nature of global compliance and our own scaling technical operations, we may dynamically recalibrate and overwrite segments of this document without overt proactive broadcasting. The most critically updated iteration will perpetually be anchored to this URL with an adjusted timestamp located securely within the header structure. Continuous subsequent use implies unbroken acknowledgement.
                </p>
              </div>

              {/* SECTION: Contact */}
              <div id="contact" className="scroll-mt-32 pb-10 border-b border-[#e2dced]/60">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  11. Contact Information & Data Protection Officer
                </h2>
                <p className="mb-12">
                  For rigorous inquiries demanding swift resolution spanning privacy concerns, suspected breaches, or formal requests to enact your sovereign data rights, please directly invoke our corporate communication channels explicitly designed for legal routing:
                </p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <p className="mb-6 font-semibold text-[#50298e] text-[18px]">ES Clinical Research Headquarters</p>
                  
                  <div className="space-y-4 text-[15.5px]">
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Data Officer:</span>
                      <a href="mailto:privacy@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        privacy@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">General:</span>
                      <a href="mailto:contact@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        contact@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">Hotline:</span>
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