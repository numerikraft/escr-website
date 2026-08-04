import { motion, useInView, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Phone } from "lucide-react";
import { GeneralButton } from '../components/Button';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import ShadowBox from '../components/ShadowBox';
import { ServiceH3, ServiceParagraph } from '../components/Typography';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import { SERVICES_DATA } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import { servicesTranslations } from '../data/translations/services';

function AnimatedNumber({ value, prefix = "", suffix = "", formatSpace = false, overrideValue }: { value: number, prefix?: string, suffix?: string, formatSpace?: boolean, overrideValue?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      if (overrideValue) {
        node.textContent = overrideValue;
        return;
      }
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          const rounded = Math.round(v);
          const numStr = formatSpace 
            ? rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            : rounded.toString();
          node.textContent = prefix + numStr + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix, formatSpace, overrideValue]);

  return <span ref={ref}>{overrideValue || `${prefix}0${suffix}`}</span>;
}

// Animation Variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease:[0.21, 0.47, 0.32, 0.98] }
});

const curtainReveal = (delay = 0) => ({
  initial: { height: "100%" },
  whileInView: { height: "0%" },
  viewport: { once: true },
  transition: { duration: 1.2, ease:[0.77, 0, 0.175, 1], delay }
});

const imageZoom = {
  initial: { scale: 1.2 },
  whileInView: { scale: 1 },
  viewport: { once: true },
  transition: { duration: 1.5, ease: "easeOut" }
};

export default function Services() {
  const { language } = useLanguage();
  const t = servicesTranslations[language as keyof typeof servicesTranslations] || servicesTranslations.en;

  const duplicatedServices = [...SERVICES_DATA, ...SERVICES_DATA];

  return (
      <div className="bg-white font-sans overflow-hidden">
        <SEO
          title={t.seo.title}
          description={t.seo.description}
          keywords={t.seo.keywords}
          image="/escr-og.png"
          breadcrumbs={[
            { name: language === 'en' ? 'Home' : 'Accueil', url: '/' },
            { name: language === 'en' ? 'Services' : 'Services', url: '/services' }
          ]}
        />


        <PageHero
          tag="#SERVICES"
          title=""
          subtitle={t.hero.subtitle}
          hasMargin={true}
        />

        {/* 2. SERVICES MARQUEE (Continuous Left-Scroll) */}
        <section className="py-12 sm:py-24 overflow-hidden relative">
          <div className="flex w-max animate-marquee gap-6 px-6">
            {duplicatedServices.map((service, idx) => (
                <div
                    key={`${service.id}-${idx}`}
                    className="w-[280px] sm:w-[320px] lg:w-[340px] flex shrink-0"
                >
                  <Link
                      to={service.path}
                      className="group w-full h-full flex flex-col transition-transform duration-500 hover:-translate-y-1.5"
                  >
                    <ShadowBox className="bg-white rounded-[1.5rem] flex flex-col w-full h-full overflow-hidden">
                      {/* Image with Reveal */}
                      <div className="relative overflow-hidden h-[180px] shrink-0 w-full bg-[#fdfbff]">
                        <motion.div
                            {...curtainReveal(0.1 + (idx % SERVICES_DATA.length) * 0.1)}
                            className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
                        />
                        <motion.img
                            {...imageZoom}
                            src={service.image}
                            alt={`${service.title} — clinical research service by ES-CR CRO`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#6f1888]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                      </div>

                      {/* Card Content */}
                      <div className="px-6 py-7 flex-1 flex flex-col">
                        <ServiceH3 className="text-[#7f2191] tracking-tight">
                          {language === 'en' ? service.title : service.titleFr || service.title}
                        </ServiceH3>
                        <ServiceParagraph>
                          {language === 'en' ? service.description : service.descriptionFr || service.description}
                        </ServiceParagraph>
                      </div>
                    </ShadowBox>
                  </Link>
                </div>
            ))}
          </div>
        </section>

        {/* 3. COMPANY IN NUMBERS */}
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-[10px]">
            <div
                className="rounded-[2rem] px-[20px] sm:px-[30px] py-8 sm:py-12 md:py-24 lg:py-36 relative overflow-hidden text-center"
                style={{
                  background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
                }}
            >
              {/* Patterns */}
              <img src="/escr-pattern-top-left.png" alt="" className="absolute top-0 left-0 w-32 sm:w-48 md:w-[240px] lg:w-[300px] object-contain object-left-top opacity-45 pointer-events-none select-none z-0" />
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-white text-[13px] font-bold tracking-widest uppercase mb-6">
                  {t.achievements.tag}
                </div>
                <h2 className="text-[28px] md:text-[42px] font-normal text-white mb-10 sm:mb-16 leading-[1.15] tracking-tight">
                  {t.achievements.title}
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-6 gap-y-10 md:gap-y-14 gap-x-6">
                {/* Row 1, Col 1 */}
                <AnimatedSection delay={0.1} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={20} prefix="+" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{t.achievements.stats.yearsExpertise}</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                {/* Row 1, Col 2 */}
                <AnimatedSection delay={0.2} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={9} prefix="+" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{t.achievements.stats.studiesRnd}</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                {/* Row 1, Col 3 */}
                <AnimatedSection delay={0.3}>
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={7000} prefix="+" formatSpace={true} />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{t.achievements.stats.patientsEnrolled}</p>
                  </div>
                </AnimatedSection>

                {/* Row 2, Col 1 */}
                <AnimatedSection delay={0.4} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={144} prefix="+" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{t.achievements.stats.investigatorSites}</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                {/* Row 2, Col 2 */}
                <AnimatedSection delay={0.5} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={7} prefix="+0" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{t.achievements.stats.therapeuticAreas}</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                {/* Row 2, Col 3 */}
                <AnimatedSection delay={0.6}>
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={2} prefix="+0" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{t.achievements.stats.pharmacoeconomicStudies}</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CUSTOM CTA SECTION */}
        <CTA />
      </div>
  );
}