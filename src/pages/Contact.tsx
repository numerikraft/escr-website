import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react';
import { ContactButton } from '../components/Button';
import PageHero from '../components/PageHero';
import ShadowBox from '../components/ShadowBox';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { contactTranslations } from '../data/translations/contact';

// Animation Variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease:[0.21, 0.47, 0.32, 0.98] }
});

// subjectOptions is now dynamically resolved from translations inside the component

export default function Contact() {
  const { language } = useLanguage();
  const t = contactTranslations[language as keyof typeof contactTranslations] || contactTranslations.en;

  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setIsSubjectOpen(false);
  };

  return (
      <div className="bg-white font-sans overflow-hidden">
        <SEO
          title={t.seo.title}
          description={t.seo.description}
          keywords={t.seo.keywords}
          image="/escr-og.png"
          breadcrumbs={[
            { name: language === 'en' ? 'Home' : 'Accueil', url: '/' },
            { name: language === 'en' ? 'Contact' : 'Contact', url: '/contact' }
          ]}
        />

        {/* 1. HERO SECTION */}
        <PageHero
          tag={t.hero.tag}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          hasMargin={true}
        />

        {/* 2. CONTACT INFO BLOCKS (No container, so outer gap is exactly 30px) */}
        <section className="py-12 sm:py-24">
          <div className="max-w-6xl mx-auto px-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 lg:gap-14 text-center">

              {/* Phone */}
              <motion.div {...fadeUp(0.1)} className="flex flex-col items-center">
                <div className="w-[5rem] h-[5rem] rounded-full bg-[#f4effc] flex items-center justify-center text-[#7f2191] mb-9">
                  <Phone size={30} strokeWidth={2} />
                </div>
                <p className="text-[#7c6a96] text-[14px] font-medium mb-3">{t.info.phone}</p>
                <a 
                  href="tel:+21320339120" 
                  className="text-[#50298e] text-[18px] font-semibold hover:text-[#7f2191] transition-all"
                >
                  +213 20 33 91 20
                </a>
              </motion.div>

              {/* Email */}
              <motion.div {...fadeUp(0.2)} className="flex flex-col items-center">
                <div className="w-[5rem] h-[5rem] rounded-full bg-[#f4effc] flex items-center justify-center text-[#7f2191] mb-9">
                  <Mail size={30} strokeWidth={2} />
                </div>
                <p className="text-[#7c6a96] text-[14px] font-medium mb-3">{t.info.email}</p>
                <a 
                  href="mailto:contact@esclinical.com" 
                  className="text-[#50298e] text-[18px] font-semibold hover:text-[#7f2191] transition-all"
                >
                  contact@esclinical.com
                </a>
              </motion.div>

              {/* Operating Hours */}
              <motion.div {...fadeUp(0.3)} className="flex flex-col items-center">
                <div className="w-[5rem] h-[5rem] rounded-full bg-[#f4effc] flex items-center justify-center text-[#7f2191] mb-9">
                  <Clock size={30} strokeWidth={2} />
                </div>
                <p className="text-[#7c6a96] text-[14px] font-medium mb-3">{t.info.hours}</p>
                <div className="text-[#50298e] text-[18px] font-semibold flex flex-col items-center leading-relaxed">
                  <span>{t.info.days}</span>
                  <span>{t.info.time}</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. OUR OFFICE SECTION - Purple Background Style */}
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-[10px]">
            
            {/* Purple Container with Map and Info */}
            <div
                className="rounded-[2rem] px-[20px] sm:px-[30px] py-12 sm:py-16 md:py-24 relative overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
                }}
            >
              {/* Pattern Overlay */}
              <img src="/escr-pattern-top-left.png" alt="" className="absolute top-0 left-0 w-32 sm:w-48 md:w-[240px] lg:w-[300px] object-contain object-left-top opacity-45 pointer-events-none select-none z-0" />
              
              {/* Header */}
              <div className="text-center mb-12 sm:mb-16 flex flex-col items-center relative z-10">
                <motion.div 
                  {...fadeUp(0.1)} 
                  className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 text-white text-[13px] font-bold tracking-widest uppercase mb-6"
                >
                  {t.office.tag}
                </motion.div>
                <motion.h2 
                  {...fadeUp(0.2)} 
                  className="text-[28px] md:text-[42px] font-normal text-white leading-[1.15] max-w-2xl whitespace-pre-line"
                >
                  {t.office.title}
                </motion.h2>
              </div>

              {/* Map Container */}
              <motion.div {...fadeUp(0.3)} className="relative z-10 max-w-4xl mx-auto">
                <div className="bg-white rounded-[2rem] p-3 shadow-2xl">
                  <div className="rounded-[1.5rem] overflow-hidden h-[300px] sm:h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.1363864422724!2d2.972166674514284!3d36.76729546955595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb11213608419%3A0xb5b8a77bcdd929bc!2sSensya%20Pharma%20Care!5e0!3m2!1sfr!2sdz!4v1776181794038"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={t.office.mapTitle}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 4. CONTACT FORM */}
        <section className="py-12 sm:py-24">
          <div className="max-w-[65rem] mx-auto px-[30px]">

            {/* Header */}
            <div className="text-center mb-16 flex flex-col items-center">
              <motion.div {...fadeUp(0.1)} className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#e2dced] text-[#7f2191] text-[13px] font-bold tracking-widest uppercase mb-6">
                {t.form.tag}
              </motion.div>
              <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[3rem] font-normal text-[#50298e] leading-[1.15] whitespace-pre-line">
                {t.form.title}
              </motion.h2>
            </div>

            {/* Form Box */}
            <motion.div {...fadeUp(0.3)}>
              <ShadowBox className="rounded-[2.5rem] p-6 md:p-10 lg:p-12 bg-white">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {/* First Name - Required */}
                    <input
                        type="text"
                        placeholder={t.form.firstName}
                        required
                        aria-label="First name"
                        id="contact-firstname"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors"
                    />
                    {/* Last Name - Required */}
                    <input
                        type="text"
                        placeholder={t.form.lastName}
                        required
                        aria-label="Last name"
                        id="contact-lastname"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors"
                    />
                    {/* Email - Required */}
                    <input
                        type="email"
                        placeholder={t.form.email}
                        required
                        aria-label="Email address"
                        id="contact-email"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors"
                    />
                    {/* Phone - Optional */}
                    <input
                        type="tel"
                        placeholder={t.form.phone}
                        aria-label="Phone number"
                        id="contact-phone"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors"
                    />
                    {/* Company - Optional */}
                    <input
                        type="text"
                        placeholder={t.form.company}
                        aria-label="Company name"
                        id="contact-company"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors"
                    />
                    {/* Position - Optional */}
                    <input
                        type="text"
                        placeholder={t.form.position}
                        aria-label="Position or job title"
                        id="contact-position"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors"
                    />
                    {/* Subject - Required Dropdown */}
                    <div className="relative md:col-span-2">
                      <button
                        type="button"
                        onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-left text-[15px] font-medium focus:outline-none focus:border-[#7f2191] transition-colors flex items-center justify-between"
                      >
                        <span className={selectedSubject ? 'text-[#50298e]' : 'text-[#8e7fa5]'}>
                          {selectedSubject || t.form.subject}
                        </span>
                        <ChevronDown 
                          size={18} 
                          strokeWidth={2}
                          className={`text-[#7f2191] transition-transform duration-300 ${isSubjectOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {isSubjectOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2dced] rounded-xl shadow-lg z-50 max-h-[250px] overflow-y-auto">
                          {t.form.subjects.map((subject, index) => (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => handleSubjectSelect(subject)}
                              className={`w-full px-4 py-3 text-left text-[14px] font-medium text-[#50298e] hover:bg-[#f9effb] hover:text-[#7f2191] transition-colors ${
                                index !== t.form.subjects.length - 1 ? 'border-b border-[#f4effc]' : ''
                              }`}
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message - Required */}
                  <div className="relative pt-0">
                    <textarea
                        placeholder={t.form.message}
                        required
                        rows={4}
                        aria-label="Your message"
                        id="contact-message"
                        className="w-full border-b border-[#bcb0d1] py-2 bg-transparent text-[#50298e] text-[15px] font-medium placeholder-[#8e7fa5] focus:outline-none focus:border-[#7f2191] transition-colors resize-none min-h-[120px]"
                    />
                  </div>

                  <div className="pt-2">
                    <ContactButton
                        type="submit"
                        className="w-full justify-center px-10 h-11 text-[14.5px] font-bold"
                    >
                      {t.form.submit}
                    </ContactButton>
                  </div>

                </form>
              </ShadowBox>
            </motion.div>

          </div>
        </section>

      </div>
  );
}