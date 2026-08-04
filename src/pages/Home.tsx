import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import { Award, Clock, Handshake, Linkedin, ArrowUpRight, Shuffle, Scale, Lock, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button, { NavbarButton } from '../components/Button';
import ServiceBottom from '../components/ServiceBottom';
import AnimatedSection from '../components/AnimatedSection';
import BlogCard from '../components/BlogCard';
import { ServiceParagraph, ServiceH3 } from '../components/Typography';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';
import { homeTranslations } from '../data/translations/home';

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

// We'll move the slides definition inside the component to access translations

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
  const { language } = useLanguage();
  const tData = homeTranslations[language];

  const slides = [
    {
      id: 0,
      badge: tData.hero.slides[0].badge,
      title: <>{tData.hero.slides[0].title}</>,
      image: "/hero/hero-clinical-studies-cro-algeria.png"
    },
    {
      id: 1,
      badge: tData.hero.slides[1].badge,
      title: <>{tData.hero.slides[1].title}</>,
      image: "/hero/hero-pharmacoeconomic-studies-cro.png"
    },
    {
      id: 2,
      badge: tData.hero.slides[2].badge,
      title: <>{tData.hero.slides[2].title}</>,
      image: "/hero/hero-patient-support-program-cro.png"
    },
    {
      id: 3,
      badge: tData.hero.slides[3].badge,
      title: <>{tData.hero.slides[3].title}</>,
      image: "/hero/hero-real-world-evidence-cro.png"
    },
    {
      id: 4,
      badge: tData.hero.slides[4].badge,
      title: <>{tData.hero.slides[4].title}</>,
      image: "/hero/hero-medical-writing-cro.png"
    },
    {
      id: 5,
      badge: tData.hero.slides[5].badge,
      title: <>{tData.hero.slides[5].title}</>,
      image: "/hero/hero-expert-support-cro.png"
    },
    {
      id: 6,
      badge: tData.hero.slides[6].badge,
      title: <>{tData.hero.slides[6].title}</>,
      image: "/hero/hero-training-clinical-research.png"
    }
  ];

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
          title={tData.seo.title}
          description={tData.seo.description}
          keywords={tData.seo.keywords}
          image="/escr-og.png"
          breadcrumbs={[{ name: language === 'en' ? 'Home' : 'Accueil', url: '/' }]}
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
                      className="inline-flex items-center bg-transparent text-[#7f2191] border border-[#7f2191] px-4.5 sm:px-6 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[15px] font-bold tracking-wide mb-6 sm:mb-8"
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
                      {tData.hero.button}
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[13px] font-bold tracking-widest uppercase mb-6">
                # {tData.dna.badge}
              </div>
              <h2 className="text-[28px] md:text-[42px] font-normal text-[#50298e] mb-8 sm:mb-20 leading-[1.15] tracking-tight max-w-4xl mx-auto">
                {tData.dna.title}
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
                    text: tData.dna.items[0]
                  },
                  {
                    icon: <Handshake size={52} strokeWidth={1.8} />,
                    text: tData.dna.items[1]
                  },
                  {
                    icon: <Clock size={52} strokeWidth={1.8} />,
                    text: tData.dna.items[2]
                  },
                  {
                    icon: <Lock size={52} strokeWidth={1.8} />,
                    text: tData.dna.items[3]
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
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-white text-[13px] font-bold tracking-widest uppercase mb-6">
                  # {tData.trackRecord.badge}
                </div>
                <h2 className="text-[28px] md:text-[42px] font-normal text-white mb-10 sm:mb-16 leading-[1.15] tracking-tight">
                  {tData.trackRecord.title}
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-6 gap-y-10 md:gap-y-14 gap-x-6">
                {/* Row 1, Col 1 */}
                <AnimatedSection delay={0.1} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={20} prefix="+" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{tData.trackRecord.labels[0]}</p>
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
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{tData.trackRecord.labels[1]}</p>
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
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{tData.trackRecord.labels[2]}</p>
                  </div>
                </AnimatedSection>

                {/* Row 2, Col 1 */}
                <AnimatedSection delay={0.4} className="relative">
                  <div className="flex flex-col items-center justify-center text-center h-full py-4 px-3">
                    <div className="text-[38px] sm:text-[54px] lg:text-[58px] font-semibold text-white mb-2 flex items-center leading-none tracking-tight">
                      <AnimatedNumber value={144} prefix="+" />
                    </div>
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{tData.trackRecord.labels[3]}</p>
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
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{tData.trackRecord.labels[4]}</p>
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
                    <p className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium tracking-wider uppercase leading-snug max-w-[230px]">{tData.trackRecord.labels[5]}</p>
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
              <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7f2191] text-[#7f2191] text-[13px] font-bold tracking-widest uppercase mb-6">
                # {tData.blog.badge}
              </motion.div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[42px] font-normal text-[#392874] leading-[1.15]">
                  {tData.blog.title}
                </motion.h2>

                <motion.div {...fadeUp(0.3)} className="hidden md:block">
                  <Button to="/blog" variant="primary">
                    {tData.blog.button}
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2">
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  date={language === 'fr' && post.dateFr ? post.dateFr : post.date}
                  title={language === 'fr' ? post.titleFr : post.title}
                  description={language === 'fr' ? post.descriptionFr : post.description}
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
                {tData.blog.button}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
