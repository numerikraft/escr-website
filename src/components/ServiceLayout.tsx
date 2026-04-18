import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceBottom from './ServiceBottom';
import PageHero from './PageHero';
import { ServiceData } from '../types/service';
import { ServiceParagraph } from './Typography';
import { CheckList } from './CheckList';
import ShadowBox from './ShadowBox';
import GeneralButton from './Button';
import SEO from './SEO';
import StructuredData from './StructuredData';

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

interface ServiceLayoutProps {
  data: ServiceData;
}

export default function ServiceLayout({ data }: ServiceLayoutProps) {
  const serviceStructuredData = {
    '@type': 'Service',
    'name': data.heroTitle,
    'description': data.seoDescription || `${data.heroTitle} services by ES Clinical Research`,
    'provider': {
      '@type': 'Organization',
      'name': 'ES Clinical Research',
      'url': 'https://esclinical.com'
    },
    'url': data.seoUrl ? `https://esclinical.com${data.seoUrl}` : undefined
  };

  return (
    <div className="bg-white font-sans overflow-hidden">
      <SEO
        title={`${data.heroTitle} | ES Clinical Research`}
        description={data.seoDescription || `${data.heroTitle} services provided by ES Clinical Research, a trusted CRO in Algeria.`}
        keywords={data.seoKeywords || `${data.heroTitle}, CRO services, clinical research, ES Clinical Research`}
        image="/escr-og.png"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: data.heroTitle, url: data.seoUrl || '/services' }
        ]}
      />
      <StructuredData data={serviceStructuredData} id={`service-${data.heroTitle.toLowerCase().replace(/\s+/g, '-')}`} />
      
      {/* 1. HERO SECTION */}
      <PageHero
        tag="#SERVICE DETAILS"
        title={data.heroTitle}
      />

      {/* 2. SPREAD TITLE SECTION */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-[30px]">
          <div className=" rounded-[2.5rem] py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
              
              {/* Desktop Image (Hidden on Mobile) */}
              <div className="hidden lg:block lg:col-span-4 relative rounded-[2rem] overflow-hidden shadow-sm h-full min-h-[450px]">
                <motion.div {...curtainReveal(0.2)} className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top" />
                <img src={data.topImage} alt={typeof data.topTitle === 'string' ? data.topTitle : "Service Detail"} loading="lazy" className="w-full h-full object-cover" />
              </div>

              <div className="lg:col-span-8 flex flex-col pt-2">
                <motion.div {...fadeUp(0.1)} className="w-full mb-12">
                  <h2 className="text-[#50298e] text-[28px] md:text-[42px] font-normal leading-[1.05] tracking-tight">
                    {data.topTitle}
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-12 lg:gap-16 items-start">
                  {/* Paragraphs */}
                  <motion.div {...fadeUp(0.2)} className="space-y-5 pb-4">
                    {data.topParagraphs.map((paragraph, idx) => (
                      <ServiceParagraph key={idx}>
                        {paragraph}
                      </ServiceParagraph>
                    ))}
                  </motion.div>

                  {/* Mobile Image (Visible only on mobile, placed between paragraphs and list) */}
                  <div className="lg:hidden relative rounded-[2rem] overflow-hidden shadow-sm h-[450px] my-4">
                    <motion.div {...curtainReveal(0.2)} className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top" />
                    <img src={data.topImage} alt={`${data.heroTitle} — ES Clinical Research CRO service overview`} loading="lazy" className="w-full h-full object-cover" />
                  </div>

                  {/* Checklist */}
                  <motion.div {...fadeUp(0.3)} className="flex flex-col justify-start">
                    <h3 className="text-[24px] font-normal text-[#7f2191] mb-[30px] leading-snug">
                      {data.topSubTitle}
                    </h3>
                    <CheckList items={data.topList} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC BANNERS LOOP (ALTERNATING COLORS) */}
      {data.banners.map((banner, idx) => {
        const isPurple = idx % 2 === 0;
        const isLast = idx === data.banners.length - 1;

        if (isPurple) {
          return (
            <section key={idx} className={`${isLast ? 'mb-10' : 'mb-24'}`}>
              <div className="max-w-7xl mx-auto px-[30px]">
                <motion.div {...fadeUp(0.1)} className="rounded-[2.5rem]">
                  <ShadowBox className="rounded-[2.5rem] px-[30px] py-8 lg:py-12" style={{ background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                      <div className="bg-white p-1.5 rounded-[2rem] w-full h-[220px] lg:h-[390px] shadow-sm">
                        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                          <motion.div {...curtainReveal(0.3)} className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top" />
                        <motion.img {...imageZoom} src={banner.image} alt={`${banner.title} — ${data.heroTitle} service by ES Clinical Research`} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center lg:pr-10">
                        <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[42px] font-normal text-white mb-6 leading-tight">{banner.title}</motion.h2>
                        <motion.div {...fadeUp(0.3)}>
                          <ServiceParagraph className="text-white/95 mb-10 max-w-lg">{banner.description}</ServiceParagraph>
                        </motion.div>
                        <motion.div {...fadeUp(0.4)}>
                          <GeneralButton 
                            to={banner.linkTo || '/contact'} 
                            variant="outline" 
                            className="border-none shadow-md w-fit"
                            height="h-[45px]"
                            fontSize="text-[15px]" 
                            iconSize={16}
                            iconContainerSize="w-8 h-8"
                          >
                            {banner.linkText || 'Schedule a Meeting'}
                          </GeneralButton>
                        </motion.div>
                      </div>
                    </div>
                  </ShadowBox>
                </motion.div>
              </div>
            </section>
          );
        } else {
          return (
            <section key={idx} className={`${isLast ? 'mb-10' : 'mb-24'}`}>
              <div className="max-w-7xl mx-auto px-[30px]">
                <ShadowBox className="rounded-[2.5rem] overflow-hidden">
                  <motion.div {...fadeUp(0.1)} className="bg-white px-[30px] py-8 lg:py-12 border border-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                      <div className="flex flex-col justify-center order-2 lg:order-1 lg:pl-10">
                        <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[42px] font-normal text-[#50298e] mb-6 leading-tight">{banner.title}</motion.h2>
                        <motion.div {...fadeUp(0.3)}>
                          <ServiceParagraph className="mb-10 max-w-lg">{banner.description}</ServiceParagraph>
                        </motion.div>
                        <motion.div {...fadeUp(0.4)}>
                          <GeneralButton 
                            to={banner.linkTo || '/contact'} 
                            className="shadow-md w-fit"
                            height="h-[45px]"
                            fontSize="text-[15px]" 
                            iconSize={16}
                            iconContainerSize="w-8 h-8"
                          >
                            {banner.linkText || 'Schedule a Meeting'}
                          </GeneralButton>
                        </motion.div>
                      </div>
                      <div className="relative rounded-[2rem] overflow-hidden w-full h-[220px] lg:h-[390px] order-1 lg:order-2 shadow-sm">
                        <motion.div {...curtainReveal(0.3)} className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top" />
                        <motion.img {...imageZoom} src={banner.image} alt={`${banner.title} — ${data.heroTitle} service by ES Clinical Research`} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </motion.div>
                </ShadowBox>
              </div>
            </section>
          );
        }
      })}

      <ServiceBottom />
    </div>
  );
}
