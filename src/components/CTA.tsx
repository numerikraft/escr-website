import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GeneralButton } from './Button';
import { ServiceParagraph } from './Typography';
import { useLanguage } from '../contexts/LanguageContext';

// Reuse high-fidelity animation variants
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

interface CTAProps {
  tag?: string;
  title?: React.ReactNode;
  description?: string;
  image?: string;
  buttonText?: string;
  to?: string;
  email?: string;
}

export default React.memo(function CTA({ 
  tag,
  title,
  description,
  image = "/escr-cro-clinical-research-partnership.webp",
  buttonText,
  to = "/contact",
  email = "contact@es-cr.com"
}: CTAProps) {
  const { language } = useLanguage();

  const finalTag = tag || '# CONTACT';
  const finalTitle = title || (language === 'en' ? "Let's keep in touch" : "Restons en contact");
  const finalDescription = description || (language === 'en' 
    ? "We remain at your disposal to discuss your projects and build a lasting collaboration together." 
    : "Nous restons à votre entière disposition pour discuter de vos projets et bâtir ensemble une collaboration durable.");
  const finalButtonText = buttonText || (language === 'en' ? "Work With Us" : "Travailler Avec Nous");
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-[30px]">
        {/* items-start on mobile, items-stretch on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-x-16 lg:gap-y-2 items-start lg:items-stretch lg:grid-rows-[auto_1fr]">

          {/* 1. TITLE (Mobile: Order 1, Desktop: Col 2, Row 1) */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            {finalTag && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[13px] font-bold tracking-widest uppercase mb-6">
                {finalTag}
              </div>
            )}
            <h2 className="text-[#50298e] text-[28px] md:text-[42px] font-normal mb-4 sm:mb-5 leading-[1.2]">
              {finalTitle}
            </h2>
          </div>

          {/* 2. IMAGE COLUMN (Mobile: Order 2, Desktop: Col 1, Row 1-2) */}
          <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="relative rounded-[2rem] overflow-hidden w-full h-[280px] sm:h-[400px] lg:h-full">
              <motion.div
                  {...curtainReveal(0.2)}
                  className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
              />
              <motion.img
                  {...imageZoom}
                  src={image}
                  alt="ES-CR — trusted CRO partner for clinical studies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 3. CONTENT (Mobile: Order 3, Desktop: Col 2, Row 2) */}
          <motion.div
              {...fadeUp(0.3)}
              className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 flex flex-col justify-between h-full"
          >
            <div>
              <ServiceParagraph className="mb-6 sm:mb-8 max-w-xl">
                {finalDescription}
              </ServiceParagraph>

              {/* Email Block */}
              <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="w-14 h-14 rounded-full bg-[#f9effb] flex items-center justify-center text-[#7f2191] flex-shrink-0">
                  <Mail size={24} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[#50298e] font-medium text-[14px] mb-0.5">{language === 'en' ? 'Send us an email' : 'Envoyez-nous un email'}</p>
                  <a href={`mailto:${email}`} className="text-[#50298e] text-xl font-semibold tracking-wide border-b border-[#50298e]/20 pb-0.5 hover:text-[#7f2191] hover:border-[#7f2191] transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Button Group - Pushed to the very bottom of the flex container */}
            <div className="flex items-start">
              <GeneralButton to={to}>
                {finalButtonText}
              </GeneralButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});
