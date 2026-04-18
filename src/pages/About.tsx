import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Phone, ArrowUpRight, Linkedin, Scale, Handshake, Clock, Lock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { GeneralButton } from '../components/Button';
import { CheckList } from '../components/CheckList';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ShadowBox from '../components/ShadowBox';
import { ServiceH3, ServiceParagraph } from '../components/Typography';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import { SERVICES_DATA } from '../data/services';

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
  transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1], delay }
});

const imageZoom = {
  initial: { scale: 1.2 },
  whileInView: { scale: 1 },
  viewport: { once: true },
  transition: { duration: 1.5, ease: "easeOut" }
};

export default function About() {
  return (
      <div className="font-sans bg-white">
        <SEO
          title="About ESCR | Our Mission, Team & Clinical Expertise"
          description="Meet the ES Clinical Research team. Discover our mission, values, and clinical expertise driving ethical, high-quality research outcomes across Algeria and beyond."
          keywords="about ESCR, clinical research team, CRO Algeria, mission vision, clinical research experts, ethical integrity, contract research organization"
          image="/escr-og.png"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' }
          ]}
        />

        {/* 1. HERO SECTION (10px outer gap for container) */}
        <div className="max-w-7xl mx-auto px-[10px] pt-24">
          <section
              className="relative overflow-hidden rounded-b-[2rem] pt-25 pb-48"
              style={{
                background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
              }}
          >
            {/* Content starts 30px inside the container */}
            <div className="max-w-7xl mx-auto px-[30px] relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.p
                    {...fadeUp(0.1)}
                    className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6"
                >
                  #ABOUT US
                </motion.p>
                <motion.h1
                    {...fadeUp(0.2)}
                    className="text-[36px] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white tracking-tight mb-2 leading-[1.1]"
                >
                  Trusted for
                </motion.h1>
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white/90 tracking-tight leading-[1.1]"
                >
                  Precision & Excellence
                </motion.p>
              </div>
            </div>
          </section>
        </div>

        {/* 2. THE OVERLAP (Image + Mission) (No container, so outer gap is exactly 30px) */}
        <div className="max-w-7xl mx-auto px-[30px] relative z-20 -mt-32 mb-10 sm:mb-24">
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-stretch">

            {/* Left: Image with Curtain Reveal */}
            <div className="w-full lg:w-[55%]">
              <motion.div {...fadeUp(0.3)} className="bg-white p-1 md:p-2 rounded-[2.5rem] h-full relative overflow-hidden shadow-[0_0_25px_rgba(80,41,142,0.18)]">
                <div className="relative rounded-[2rem] overflow-hidden h-[300px] lg:h-[380px]">
                  <motion.div
                      {...curtainReveal(0.5)}
                      className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
                  />
                  <motion.img
                      {...imageZoom}
                      src="/about/about-hero.png?v=2"
                      alt="ES Clinical Research laboratory and clinical study management"
                      className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right: Mission Content */}
            <motion.div {...fadeUp(0.4)} className="w-full lg:w-[45%] flex">
              <ShadowBox className="bg-white/98 rounded-[2.5rem] p-8 flex flex-col justify-center w-full h-full">
                <div className="mb-5 text-[#7f2191]">
                  <Crown size={36} strokeWidth={2} />
                </div>
                <ServiceH3>Our Mission & Vision</ServiceH3>
                <div className="flex flex-col gap-5">
                  <ServiceParagraph>At ES Clinical Research, we act as an operational partner and a link between all stakeholders, supporting the management of clinical studies in line with protocols, regulatory requirements, and timelines.</ServiceParagraph>
                  <ServiceParagraph>We coordinate study activities, monitor progress, and contribute to data quality across the project lifecycle, bringing added value through practical and structured execution at each stage.</ServiceParagraph>
                </div>
              </ShadowBox>
            </motion.div>
          </div>
        </div>

        {/* Our DNA Section */}
        <section className="py-12 sm:py-24 bg-gray-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-[30px] text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[0.7rem] font-bold tracking-widest uppercase mb-6">
                # OUR DNA
              </div>
              <h2 className="text-[28px] md:text-[42px] font-normal text-[#50298e] mb-10 sm:mb-20 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                Patients and partners are our priority
              </h2>
            </AnimatedSection>

            <div className="relative">
              {/* Horizontal connecting pathway — desktop only */}
              <div className="hidden lg:block absolute top-[62px] left-0 right-0 -translate-y-[1px] z-0">
                <div
                  className="h-[2px] mx-[12%]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(127,33,145,0.18) 10%, rgba(127,33,145,0.18) 90%, transparent)'
                  }}
                />
                {/* Midpoint connector nodes */}
                {[25, 50, 75].map((pos) => (
                  <div
                    key={pos}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="w-[7px] h-[7px] rounded-full bg-[#7f2191]/20 ring-[3px] ring-[#7f2191]/[0.06]" />
                  </div>
                ))}
              </div>

              {/* Vertical connectors — tablet 2-col only */}
              <div className="hidden sm:block lg:hidden absolute left-1/2 top-0 bottom-0 -translate-x-[1px] z-0">
                <div
                  className="w-[2px] h-full"
                  style={{
                    background: 'linear-gradient(180deg, transparent, rgba(127,33,145,0.15) 15%, rgba(127,33,145,0.15) 85%, transparent)'
                  }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8 justify-items-center relative z-10">
                {[
                  {
                    icon: <Scale size={52} strokeWidth={1.8} />,
                    text: "Ethical Integrity & Transparency"
                  },
                  {
                    icon: <Handshake size={52} strokeWidth={1.8} />,
                    text: "Expert Sharing & Communication"
                  },
                  {
                    icon: <Clock size={52} strokeWidth={1.8} />,
                    text: "Reliability & Proactivity"
                  },
                  {
                    icon: <Lock size={52} strokeWidth={1.8} />,
                    text: "Secure Confidentiality & Trust"
                  }
                ].map((item, idx) => (
                  <AnimatedSection key={idx} delay={0.2 + idx * 0.15}>
                    <div className="flex flex-col items-center group">
                      <div className="relative mb-5 sm:mb-8">
                        {/* Outer decorative box */}
                        <div className="absolute -inset-[10px] rounded-3xl border border-[#7f2191]/[0.12] group-hover:border-[#7f2191]/30 group-hover:scale-110 transition-all duration-700" />
                        {/* Subtle glow on hover */}
                        <div className="absolute -inset-4 rounded-3xl bg-[#7f2191]/0 group-hover:bg-[#7f2191]/[0.05] transition-all duration-700 blur-md" />
                        {/* Main rounded square - Original gradient & white icons */}
                        <div
                          className="w-[90px] h-[90px] sm:w-[124px] sm:h-[124px] rounded-[1.2rem] sm:rounded-[1.5rem] text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[0_10px_30px_-10px_rgba(127,33,145,0.4)] relative z-10"
                          style={{
                            background: 'radial-gradient(circle at 0% 0%, rgb(127, 33, 145) 0%, rgb(76, 0, 90) 100%)'
                          }}
                        >
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-[#392874] font-medium text-[1.05rem] leading-snug tracking-tight whitespace-nowrap">
                        {item.text}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. BORN FROM ONE IDEA */}
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-[30px]">
            {/* items-start on mobile, items-stretch on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-x-16 lg:gap-y-5 items-start lg:items-stretch lg:grid-rows-[auto_1fr]">

              {/* 1. HEADER (Mobile: Order 1, Desktop: Col 2, Row 1) */}
              <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
                <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[0.7rem] font-bold tracking-widest uppercase mb-6 w-fit">
                  # ABOUT ESCR
                </motion.div>

                <motion.h2 {...fadeUp(0.2)} className="text-[#50298e] text-[28px] md:text-[42px] font-normal mb-6 leading-[1.15]">
                  Built around one idea: improving patient care
                </motion.h2>
              </div>

              {/* 2. IMAGE COLUMN (Mobile: Order 2, Desktop: Col 1, Row 1-2) */}
              <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
                <div className="relative rounded-[2rem] overflow-hidden h-[400px] sm:h-[450px] lg:h-full w-full">
                  {/* The Violet Reveal Overlay */}
                  <motion.div
                      {...curtainReveal(0.3)}
                      className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
                  />
                  <img
                      src="/about/strategic-planning-clinical-research-cro.png"
                      alt="Strategic planning meeting for clinical research operations"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* 3. TEXT CONTENT (Mobile: Order 3, Desktop: Col 2, Row 2) */}
              <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 flex flex-col justify-between h-full">
                <div>
                  <motion.div {...fadeUp(0.3)}>
                    <ServiceParagraph className="mb-10">
                      Our story began with the meeting of a founding team from clinical research and the healthcare sector, who shared a common vision. They decided to organize their skills and knowledge within an entity focused on conducting clinical studies.
                    </ServiceParagraph>
                  </motion.div>

                  {/* Green Check List */}
                  <CheckList 
                    items={SERVICES_DATA.map((s) => ({ name: s.title, path: s.path }))}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-10"
                    delayOffset={0.4}
                  />
                </div>

                {/* BUTTON - Anchored to the bottom of the flex flow on Desktop */}
                <motion.div {...fadeUp(0.6)} className="mt-4 sm:mt-8 lg:mt-0">
                  <GeneralButton to="/contact">
                    Schedule A Meeting
                  </GeneralButton>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. OUR TEAM — Sticky Left + Scrolling Right */}
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-[10px]">
            {/* Background Container for Branding */}
            <div
              className="rounded-[2rem] px-[20px] sm:px-[30px] py-10 md:py-24 lg:py-36 relative"
              style={{
                background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
              }}
            >
              {/* Pattern bas droit */}
              <img src="/escr-pattern-bottom-right.png" alt="" className="absolute bottom-0 right-0 w-20 sm:w-32 md:w-[160px] lg:w-[200px] object-contain object-right-bottom opacity-30 pointer-events-none select-none z-0" />
              <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                {/* LEFT COLUMN — Sticky */}
                <div className="lg:w-[45%] lg:sticky lg:top-36 text-white">
                  <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-[0.7rem] font-bold tracking-widest uppercase mb-6 w-fit">
                    # OUR TEAM
                  </motion.div>

                  <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[42px] font-normal mb-8 leading-[1.15]">
                    Minds Behind<br />Our Work
                  </motion.h2>

                  {/* Button visible only on Desktop in the sidebar */}
                  <motion.div {...fadeUp(0.3)} className="hidden lg:block">
                    <GeneralButton variant="outline" to="/contact" className="border-none hover:shadow-lg">
                      Explore Our Capabilities
                    </GeneralButton>
                  </motion.div>
                </div>

                {/* RIGHT COLUMN — Scrolling Team Cards */}
                <div className="lg:w-[55%] flex flex-col gap-10 md:gap-24">
                  {[
                    { name: 'Fayçal CHALAL', role: 'Founder | CEO', img: '/about/faycal-chalal-ceo-founder-cro.png', linkedin: 'https://www.linkedin.com/in/fay%C3%A7al-chalal-153422145/' },
                    { name: 'Dr. Meriem HEDIBEL', role: 'Co Founder | Clinical Operation Director', img: '/about/meriem-hedibel-clinical-operation-director.png', linkedin: 'https://www.linkedin.com/in/meriem-hedibel-59855a50/' },
                    { name: 'Dr. Tarik MEBARKI', role: 'Medical Director', img: '/about/tarik-mebarki-medical-director.png', linkedin: 'https://www.linkedin.com/in/tarik-mebarki-bb04a213b/' },
                    { name: 'Mr. Samy BEKRAR', role: 'Project Lead | CRA', img: '/about/samy-bekrar-clinical-research-associate.png', linkedin: 'https://www.linkedin.com/in/samy-bekrar-b9a383158/' }
                  ].map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      {/* Image Container with White Border */}
                      <div className="bg-white rounded-[1.5rem] overflow-hidden mb-6 group border-[6px] border-white shadow-lg">
                        <img
                          src={member.img}
                          alt={`${member.name} — ${member.role} at ES Clinical Research`}
                          loading="lazy"
                          className="w-full aspect-square object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop&crop=face";
                          }}
                        />
                      </div>
                      {/* Name & Role */}
                      <h3 className="text-[22px] font-bold text-white mb-1.5">{member.name}</h3>
                      <p className="text-white/90 text-[1rem] font-medium mb-5">{member.role}</p>
                      
                      {/* LinkedIn Icon */}
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-transparent border-[1.5px] border-white hover:bg-white/15 transition-colors text-white">
                        <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                      </a>
                    </motion.div>
                  ))}

                  {/* Button visible only on Mobile at the end of the member list */}
                  <motion.div {...fadeUp(0.3)} className="lg:hidden">
                    <GeneralButton variant="outline" to="/contact" className="border-none hover:shadow-lg justify-center">
                      Explore Our Capabilities
                    </GeneralButton>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 6. CUSTOM CTA SECTION */}
        <CTA />
      </div>
  );
}