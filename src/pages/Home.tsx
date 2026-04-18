import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import { Award, Clock, Handshake, Linkedin, ArrowUpRight, ShieldCheck, Zap, Users, Shuffle, Scale, Lock, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button, { NavbarButton } from '../components/Button';
import ServiceBottom from '../components/ServiceBottom';
import AnimatedSection from '../components/AnimatedSection';
import BlogCard from '../components/BlogCard';
import { ServiceParagraph, ServiceH3 } from '../components/Typography';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = Math.round(v) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const slides = [
  {
    id: 0,
    badge: "Clinical Studies",
    title: (
        <>
          Trusted Partner, reliable studies and precise outcomes.
        </>
    ),
    image: "/hero/hero-clinical-studies-cro-algeria.png"
  },
  {
    id: 1,
    badge: "Pharmacoeconomic Studies",
    title: (
        <>
          Transforming data into strategic economic insights.
        </>
    ),
    image: "/hero/hero-pharmacoeconomic-studies-cro.png"
  },
  {
    id: 2,
    badge: "Patient Support Program",
    title: (
        <>
          Empowering patient journeys through supportive guidance.
        </>
    ),
    image: "/hero/hero-patient-support-program-cro.png"
  },
  {
    id: 3,
    badge: "Real-World Evidence",
    title: (
        <>
          Turning real-world data into scientific evidence.
        </>
    ),
    image: "/hero/hero-real-world-evidence-cro.png"
  },
  {
    id: 4,
    badge: "Medical Writing",
    title: (
        <>
          Turning data into communication and publication.
        </>
    ),
    image: "/hero/hero-medical-writing-cro.png"
  },
  {
    id: 5,
    badge: "Expert Support",
    title: (
        <>
          Bring specialized expertise to add value at every phase.
        </>
    ),
    image: "/hero/hero-expert-support-cro.png"
  },
  {
    id: 6,
    badge: "Training",
    title: (
        <>
          Advancing professional skills via targeted training.
        </>
    ),
    image: "/hero/hero-training-clinical-research.png"
  }
];

function CountUp({ target, suffix = '+', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const[currentSlide, setCurrentSlide] = useState(0);
  const featuredPosts = BLOG_POSTS.slice(0, 2);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(timer);
  },[]);
  const curtainReveal = (delay = 0) => ({
    initial: { height: "100%" },
    whileInView: { height: "0%" },
    viewport: { once: true },
    transition: { duration: 1, ease:[0.77, 0, 0.175, 1], delay }
  });

  // Animation variant for Bottom-to-Top fade
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" }
  });
  return (
      <div className="pt-4 sm:pt-12">
        <SEO
          title="ES Clinical Research | Leading CRO in Algeria"
          description="ES Clinical Research is a trusted CRO in Algeria offering clinical studies, pharmacoeconomic analysis, real-world evidence, medical writing, and expert support."
          keywords="CRO Algeria, contract research organization, clinical research, clinical studies, pharmacoeconomic studies, real-world evidence, medical writing, expert support, ESCR, clinical trials Algeria"
          image="/escr-og.png"
          breadcrumbs={[{ name: 'Home', url: '/' }]}
        />
        {/* Hero Section */}
        {/* FIX: 10px outer gap for container */}
        <div className="max-w-[1232px] mx-auto px-3 sm:px-0 mb-[30px] sm:mb-0">
          <section
              className="relative overflow-hidden h-[480px] sm:h-[540px] lg:h-[601px] rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-center bg-gray-100"
          >
            {/* Animated Background Image */}
            <AnimatePresence>
              <motion.div
                  key={`bg-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
              />
            </AnimatePresence>
            <div className="relative z-10 px-[30px] sm:px-[15px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                    key={`content-${currentSlide}`}
                    className="max-w-[675px]"
                >
                  {/* 1. BADGE - Appears first */}
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                      className="inline-flex items-center bg-transparent text-[#7f2191] border border-[#7f2191] px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
                  >
                    {slides[currentSlide].badge}
                  </motion.div>

                  {/* 2. TITLE - Appears with a slight offset */}
                  <motion.h1
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                      className="text-[36px] sm:text-5xl lg:text-[64px] font-normal text-[#50298e] tracking-tight mb-10 sm:mb-12 leading-[1.15]"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  {/* 3. BUTTON - Appears third */}
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    <NavbarButton to="/contact" className="shadow-lg hover:shadow-xl">
                      Start Your Project
                    </NavbarButton>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4. PAGINATION DOTS - Highest delay */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20"
            >
              {slides.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                          index === currentSlide ? 'bg-[#6f1888]' : 'bg-[#6f1888]/25 hover:bg-[#6f1888]/40'
                      }`}
                  />
              ))}
            </motion.div>
          </section>
        </div>



        {/* Our DNA Section — Spacing Refined for Mobile */}
        <section className="py-12 sm:py-24 bg-gray-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-[30px] text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[0.7rem] font-bold tracking-widest uppercase mb-6">
                # OUR DNA
              </div>
              <h2 className="text-[28px] md:text-[42px] font-normal text-[#50298e] mb-8 sm:mb-20 leading-[1.15] tracking-tight max-w-4xl mx-auto">
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
                      <p className="text-[#392874] font-medium text-[0.9rem] sm:text-[1.05rem] leading-snug tracking-tight text-center">
                        {item.text}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-24 bg-white">
          {/* Increased to 1440px for a very wide look while staying centered */}
          <div className="max-w-[1440px] mx-auto px-[10px]">

            {/* Outer Purple Container */}
            {/* FIX: Content starts 30px inside the container */}
            {/* Outer Purple Container — Spacing Refined for Mobile */}
            <div
                className="rounded-[2rem] px-[20px] sm:px-[30px] py-8 sm:py-12 md:py-24 lg:py-36 relative overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
                }}
            >
              <img src="/escr-pattern-top-right.png" alt="" className="absolute top-0 right-0 w-64 sm:w-96 md:w-[440px] lg:w-[500px] object-contain object-right-top opacity-30 pointer-events-none select-none z-0" />
              <AnimatedSection>
                          {/* Tag */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-white text-[0.7rem] font-bold tracking-widest uppercase mb-8">
                              # WHY CHOOSE US
                            </div>

                            {/* Heading */}
                            <h2 className="text-[28px] md:text-[42px] font-normal mb-6 sm:mb-16 leading-[1.15] max-w-2xl text-white">
                              The key reasons leading<br />
                              partners rely on us
                            </h2>
              </AnimatedSection>

              {/* Unified White Container with Overlapping Cards */}
              <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] flex flex-col lg:flex-row w-full relative overflow-hidden lg:h-[400px]">

                {/* Card 1 - No left shadow */}
                <AnimatedSection delay={0.1} className="flex-1 bg-white relative z-10 p-8 flex flex-col items-start justify-start">
                  <div className="w-[4.25rem] h-[4.25rem] rounded-full bg-[#f9effb] flex items-center justify-center text-[#6f1888] mb-6">
                    <ShieldCheck size={32} strokeWidth={2} />
                  </div>
                  <ServiceH3>
                    Compliant<br />Methodologies
                  </ServiceH3>
                  <ServiceParagraph>
                    We use scientifically and ethically validated methods, aligned ICH guidelines and local requirements, to produce reliable and practical results.
                  </ServiceParagraph>
                </AnimatedSection>

                {/* Card 2 - Centered Brand Shadow */}
                <AnimatedSection
                    delay={0.2}
                    className="flex-1 bg-white relative z-20 p-8 shadow-[0_0_25px_rgba(80,41,142,0.18)] max-lg:border-t border-gray-50 flex flex-col items-start justify-start"
                >
                  <div className="w-[4.25rem] h-[4.25rem] rounded-full bg-[#f9effb] flex items-center justify-center text-[#6f1888] mb-6">
                    <Zap size={32} strokeWidth={2} />
                  </div>
                  <ServiceH3>
                    Effective and<br />Prompt Outputs
                  </ServiceH3>
                  <ServiceParagraph>
                    Our processes are set up to deliver projects on schedule, with accuracy and consistent quality.
                  </ServiceParagraph>
                </AnimatedSection>

                {/* Card 3 - Centered Brand Shadow */}
                <AnimatedSection
                    delay={0.3}
                    className="flex-1 bg-white relative z-30 p-8 shadow-[0_0_25px_rgba(80,41,142,0.18)] max-lg:border-t border-gray-50 flex flex-col items-start justify-start"
                >
                  <div className="w-[4.25rem] h-[4.25rem] rounded-full bg-[#f9effb] flex items-center justify-center text-[#6f1888] mb-6">
                    <Users size={32} strokeWidth={2} />
                  </div>
                  <ServiceH3>
                    Trusted<br />Partnerships
                  </ServiceH3>
                  <ServiceParagraph>
                    We collaborate closely with our partners, ensuring open communication at every stage of the project.
                  </ServiceParagraph>
                </AnimatedSection>

                {/* Right Image - Narrower column (22%) with White Frame */}
                <AnimatedSection
                    delay={0.4}
                    className="flex-none lg:w-[22%] relative z-40 bg-white p-3 h-[280px] lg:h-full"
                >
                  <img
                      src="/escr-cro-why-choose-us.png"
                      alt="ES Clinical Research team collaboration and clinical expertise"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[1.5rem] lg:rounded-l-none"
                      referrerPolicy="no-referrer"
                  />
                </AnimatedSection>

              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServiceBottom />

        {/* Company In Numbers */}
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
              <img src="/escr-pattern-bottom-right.png" alt="" className="absolute bottom-0 right-0 w-16 sm:w-24 md:w-[120px] lg:w-[150px] object-contain object-right-bottom opacity-30 pointer-events-none select-none z-0" />
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-white text-[0.7rem] font-bold tracking-widest uppercase mb-6">
                  # COMPANY IN NUMBERS
                </div>
                <h2 className="text-[28px] md:text-[42px] font-normal text-white mb-10 sm:mb-16 leading-[1.15] tracking-tight">
                  Our Scientific Impact
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-5 max-w-7xl mx-auto mt-6">
                <AnimatedSection delay={0.1} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-8">
                    <div className="text-[40px] sm:text-[60px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={2} suffix="+" />
                    </div>
                    <p className="text-[15px] sm:text-[17px] text-white/80 font-medium tracking-wide">Years of Experience</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-8">
                    <div className="text-[40px] sm:text-[60px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={12} suffix="+" />
                    </div>
                    <p className="text-[15px] sm:text-[17px] text-white/80 font-medium tracking-wide">Clinical Studies</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                <AnimatedSection delay={0.3} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-8">
                    <div className="text-[40px] sm:text-[60px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={15} suffix="+" />
                    </div>
                    <p className="text-[15px] sm:text-[17px] text-white/80 font-medium tracking-wide">Trusted Partners</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>
                
                <AnimatedSection delay={0.4} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-8">
                    <div className="text-[40px] sm:text-[60px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={500} suffix="+" />
                    </div>
                    <p className="text-[15px] sm:text-[17px] text-white/80 font-medium tracking-wide">Patients Managed</p>
                  </div>
                  {/* Vertical Line */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/25" />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <div className="flex flex-col items-center justify-center text-center h-full py-8">
                    <div className="text-[40px] sm:text-[60px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={37} suffix="+" />
                    </div>
                    <p className="text-[15px] sm:text-[17px] text-white/80 font-medium tracking-wide">Scientific Publication</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 sm:py-24 bg-white overflow-hidden">
          {/* FIX: No container, so outer gap is exactly 30px */}
          <div className="max-w-7xl mx-auto px-[30px]">

            {/* --- HEADER AREA --- */}
            <div className="mb-10 sm:mb-20">
              <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[0.7rem] font-bold tracking-widest uppercase mb-6">
                # BLOG
              </motion.div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[42px] font-normal text-[#392874] leading-[1.15]">
                  Our Production & insights
                </motion.h2>

                <motion.div {...fadeUp(0.3)} className="hidden md:block">
                  <Button to="/blog" variant="primary">
                    Check All Blog
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* --- BLOG GRID --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2">
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  image={post.img}
                  link={`/blog/${post.id}`}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>

            {/* Mobile CTA (Visible only on small screens) */}
            <motion.div 
               {...fadeUp(0.6)}
               className="mt-10 flex justify-start md:hidden"
            >
              <Button to="/blog" variant="primary">
                Check All Blog
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
