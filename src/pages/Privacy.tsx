import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { privacyTranslations } from '../data/translations/privacy';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

export default function Privacy() {
  const { language } = useLanguage();
  const t = privacyTranslations[language as 'en' | 'fr'] || privacyTranslations.en;

  const [activeSection, setActiveSection] = useState('scope');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = t.sections[0].id;
      const threshold = 150;
      for (const { id } of t.sections) {
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
  }, [t.sections]);

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
          title={t.seoTitle}
          description={t.seoDescription}
          keywords={t.seoKeywords}
          breadcrumbs={[
            { name: t.breadcrumbHome, url: '/' },
            { name: t.breadcrumbPrivacy, url: '/privacy-policy' }
          ]}
        />
        <PageHero 
          tag="#LEGAL"
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
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
                {t.tocTitle}
              </h3>
              <div className="flex flex-col border-l border-[#e2dced]/60 relative">
                <motion.div 
                  className="absolute left-0 w-[2px] bg-[#7f2191] transition-all duration-300 ease-out"
                  style={{
                    height: `${100 / t.sections.length}%`,
                    top: `${(t.sections.findIndex(s => s.id === activeSection) / t.sections.length) * 100}%`
                  }}
                />
                
                {t.sections.map((section) => (
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
                {t.intro}
              </p>

              {/* SECTION: Scope */}
              <div id="scope" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.scope.title}
                </h2>
                <p className="mb-12">
                  {t.scope.text}
                </p>
              </div>

              {/* SECTION: Collection */}
              <div id="collection" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.collection.title}
                </h2>
                <p className="mb-10">{t.collection.text}</p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <ul className="space-y-4">
                    {t.collection.items.map((item, idx) => (
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
                  {t.usage.title}
                </h2>
                <p className="mb-10">{t.usage.text}</p>
                <ul className="space-y-4 mb-12 ml-2">
                  {t.usage.items.map((item, idx) => (
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
                  {t.cookies.title}
                </h2>
                <p className="mb-12">
                  {t.cookies.text}
                </p>
              </div>

              {/* SECTION: Sharing */}
              <div id="sharing" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.sharing.title}
                </h2>
                <p className="mb-10">
                  {t.sharing.text}
                </p>
                <ul className="space-y-4 mb-12 ml-2">
                  {t.sharing.items.map((item, idx) => (
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
                  {t.transfers.title}
                </h2>
                <p className="mb-12">
                  {t.transfers.text}
                </p>
              </div>

              {/* SECTION: Security */}
              <div id="security" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.security.title}
                </h2>
                <p className="mb-10">{t.security.text}</p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-12">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">{t.security.network.title}</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">{t.security.network.text}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">{t.security.access.title}</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">{t.security.access.text}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">{t.security.procedural.title}</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">{t.security.procedural.text}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7f2191] mb-2 uppercase text-[12px] tracking-widest">{t.security.anonymization.title}</h4>
                      <p className="text-[14.5px] font-normal leading-relaxed">{t.security.anonymization.text}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Retention */}
              <div id="retention" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.retention.title}
                </h2>
                <p className="mb-12">
                  {t.retention.text}
                </p>
              </div>

              {/* SECTION: Rights */}
              <div id="rights" className="scroll-mt-32">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.rights.title}
                </h2>
                <p className="mb-10">{t.rights.text}</p>
                <ul className="space-y-4 mb-12 ml-2">
                  {t.rights.items.map((item, idx) => (
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
                  {t.changes.title}
                </h2>
                <p className="mb-12">
                  {t.changes.text}
                </p>
              </div>

              {/* SECTION: Contact */}
              <div id="contact" className="scroll-mt-32 pb-10 border-b border-[#e2dced]/60">
                <h2 className="text-[28px] md:text-[42px] font-normal text-[#7f2191] mt-24 mb-10 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                  {t.contact.title}
                </h2>
                <p className="mb-12">
                  {t.contact.text}
                </p>
                <div className="bg-white shadow-[0_0_25px_rgba(80,41,142,0.18)] rounded-2xl p-6 md:p-8 mb-16">
                  <p className="mb-6 font-semibold text-[#50298e] text-[18px]">{t.contact.boxTitle}</p>
                  
                  <div className="space-y-4 text-[15.5px]">
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">{t.contact.officer}</span>
                      <a href="mailto:privacy@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        privacy@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">{t.contact.general}</span>
                      <a href="mailto:contact@esclinical.com" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        contact@esclinical.com
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">{t.contact.hotline}</span>
                      <a href="tel:+21320339120" className="text-[#50298e] font-normal hover:opacity-70 transition-opacity">
                        +213 20 33 91 20
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start gap-4">
                      <span className="font-medium text-[#7c6a96]">{t.contact.address}</span>
                      <span className="text-[#50298e] font-normal">
                        {t.contact.addressValue}
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