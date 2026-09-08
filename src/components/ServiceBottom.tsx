import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "lucide-react";
import Button from './Button';
import ShadowBox from './ShadowBox';
import { ServiceH3 } from './Typography';
import { SERVICES_DATA } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServiceBottom() {
  const { language } = useLanguage();

  // Logic for the "Rectangle Cut" reveal
  const cutReveal = (delay = 0) => ({
    initial: { clipPath: 'inset(100% 0% 0% 0%)' },
    whileInView: { clipPath: 'inset(0% 0% 0% 0%)' },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease:[0.77, 0, 0.175, 1] }
  });

  return (
      <section className="py-12 sm:py-24 bg-white overflow-hidden">
        {/* FIX: Exactly 30px padding to match the non-container sections from the Homepage */}
        <div className="max-w-7xl mx-auto px-[30px]">

          {/* --- Top Header Row (Bottom to Top Reveal) --- */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 sm:mb-[80px] gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#712b8b] text-[#712b8b] text-[13px] font-bold tracking-widest uppercase mb-6">
                # SERVICES
              </div>
              <h2 className="text-[28px] md:text-[42px] font-normal text-[#50298e] leading-[1.15] max-w-4xl">
                {language === 'en' ? (
                  <>
                    Scientific and operational expertise for<br className="hidden md:block" />
                    pharma and healthcare stakeholders.
                  </>
                ) : (
                  <>
                    Expertise scientifique et opérationnelle pour<br className="hidden md:block" />
                    les acteurs de la pharma et de la santé.
                  </>
                )}
              </h2>
            </div>
            <div className="shrink-0 lg:pb-2 hidden lg:block">
              <Button to="/services" variant="primary">
                {language === 'en' ? 'More Services' : 'Plus de Services'}
              </Button>
            </div>
          </motion.div>

          {/* --- Bottom Layout --- */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 mt-4 sm:mt-6 lg:h-[380px]">

            {/* Column 1: Services List (Staggered Left-to-Right Swipe) */}
            <div className="lg:w-[30%] flex flex-col justify-between h-full">
              {SERVICES_DATA.slice(0, 5).map((service, index) => (
                  <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + (index * 0.1), // Starts at 0.2s, then 0.3s, 0.4s, etc.
                        ease: "easeOut"
                      }}
                      className="flex-1 border-b border-[#e2dced] flex items-center py-3 lg:py-0"
                  >
                    <Link
                        to={service.path}
                        className="block w-full transition-all hover:translate-x-2 duration-300"
                    >
                      <ServiceH3 className="mb-0 text-[#50298e] hover:text-[#7f2191] transition-colors">
                        {language === 'fr' ? service.titleFr : service.title}
                      </ServiceH3>
                    </Link>
                  </motion.div>
              ))}

              {/* Mobile CTA Button (Visible only on small screens) */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-10 flex justify-start lg:hidden"
              >
                <Button to="/services" variant="primary">
                  {language === 'en' ? 'More Services' : 'Plus de Services'}
                </Button>
              </motion.div>
            </div>

            {/* Column 2: Image (Violet Rectangle Reveal) */}
            <div className="lg:w-[45%] h-[240px] sm:h-[360px] lg:h-full relative overflow-hidden rounded-[2rem]">
              {/* The Violet Curtain Overlay */}
              <motion.div
                  initial={{ height: "100%" }}
                  whileInView={{ height: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease:[0.77, 0, 0.175, 1], delay: 0.4 }}
                  className="absolute top-0 left-0 w-full bg-[#6f1888] z-20 origin-top"
              />
              {/* The Image itself */}
              <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  src="/escr-cro-services-team-meeting.webp"
                  alt="ES-CR multidisciplinary team planning clinical operations"
                  className="w-full h-full object-cover rounded-[2rem]"
                  referrerPolicy="no-referrer"
              />
            </div>

            {/* Column 3: Quote Card (Bottom to Top Fade) */}
            <div className="lg:w-[25%] flex flex-col justify-end h-full">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-fit"
              >
                <ShadowBox className="bg-white rounded-[2rem] p-7">
                  <p className="text-[#392874] italic text-[1rem] leading-relaxed mb-5 font-normal">
                    {language === 'en' 
                      ? '"Every clinical study is a step forward for those waiting to heal."'
                      : '"Chaque étude clinique est un pas en avant pour ceux qui attendent de guérir."'}
                  </p>
                  <div>
                    <p className="text-[#712b8b] text-[0.95rem] font-medium mb-0.5">
                      {language === 'en' ? 'Team ES-CR' : "L'équipe ES-CR"}
                    </p>
                  </div>
                </ShadowBox>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
  );
}
