import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Linkedin, Facebook, Twitter, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { GeneralButton } from '../components/Button';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPostTwoTranslations } from '../data/translations/blogPost2';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
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

const blogTwoSections = [
  { id: 'abstract', title: 'Abstract' },
  { id: 'full-analysis', title: 'Full analysis' }
];

export default function BlogPostTwo() {
  const { language } = useLanguage();
  const t = blogPostTwoTranslations[language as keyof typeof blogPostTwoTranslations] || blogPostTwoTranslations.en;

  const relatedPosts = BLOG_POSTS.filter((post) => post.id !== 2).slice(0, 2);
  const handleTocClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);

    if (!target) return;

    const headerOffset = 160;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, '', `#${sectionId}`);
    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth'
    });
  };

  return (
      <div className="bg-white font-sans">
        <SEO
          title={t.seo.title}
          description={t.seo.description}
          keywords={t.seo.keywords}
          image="/blog/2/hero-cancer-epidemiology-maghreb.webp"
          type="article"
        />

        <div className="max-w-7xl mx-auto px-[10px] pt-24">
          <section className="relative overflow-hidden rounded-b-[2.5rem] pt-12 pb-20 md:pt-22 md:pb-30 bg-[#4c005a] mb-[30px] lg:mb-0">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/blog/2/hero-cancer-epidemiology-maghreb.webp')" }}
            />

            <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 0% 0%, rgba(127, 33, 145, 0.85) 0%, rgba(76, 0, 90, 0.85) 100%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-[30px] relative z-10">
              <div className="max-w-6xl">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                      {...fadeUp(0.1)}
                      className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/50 text-white text-[13px] font-bold tracking-widest uppercase"
                  >
                    {t.meta.tag}
                  </motion.div>
                  <motion.div
                      {...fadeUp(0.2)}
                      className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/50 text-white text-[13px] font-bold tracking-widest uppercase"
                  >
                    <Clock size={14} />
                    {t.meta.readTime}
                  </motion.div>
                </div>

                <motion.h1
                    {...fadeUp(0.3)}
                    className="text-[36px] sm:text-4xl md:text-[3.5rem] font-normal text-white tracking-tight mb-10 leading-[1.15]"
                >
                  {t.meta.title}
                </motion.h1>

                <motion.div
                    {...fadeUp(0.4)}
                    className="text-white/90 text-[13px] flex flex-wrap items-center gap-6 font-medium"
                >
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <span>{t.meta.publishedBy} <span className="font-bold ml-1 text-white">{t.meta.author}</span></span>
                    <span className="opacity-40 hidden md:block">•</span>
                    <span>{t.meta.publishedOn} <span className="font-bold ml-1 text-white">{t.meta.date}</span></span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-[30px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              <motion.div {...fadeUp(0.1)} className="lg:col-span-8">
                <div className="lg:hidden mb-16 px-6 py-5 bg-[#faf8fc] rounded-2xl border border-[#e2dced]">
                  <h3 className="text-[11px] font-bold text-[#9b8bb0] mb-4 uppercase tracking-widest">{t.ui.toc}</h3>
                  <ul className="space-y-4 text-[14px] font-semibold text-[#50298e]">
                    {t.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          onClick={(event) => handleTocClick(event, section.id)}
                          className="hover:text-[#7f2191] transition-colors block"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 id="abstract" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">{t.sections[0].title}</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-6 font-medium">
                  {t.content.abstract_p1}
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-6 font-medium">
                  {t.content.abstract_p2}
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-6 font-medium">
                  {t.content.abstract_p3}
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-6 font-medium">
                  {t.content.abstract_p4}
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-20 font-medium">
                  {t.content.abstract_p5}
                </p>

                <h2 id="full-analysis" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">{t.sections[1].title}</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  {t.content.full_analysis_text} <a href="https://www.ispor.org/heor-resources/presentations-database/presentation-cti/ispor-2026/poster-session-2-4/overview-of-the-epidemiological-and-economic-burden-of-cancer-in-the-maghreb" target="_blank" rel="noopener noreferrer" className="text-[#7f2191] hover:underline transition-colors">{t.content.full_analysis_link}</a>
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="lg:col-span-4 sticky top-28 self-start mb-10 lg:mb-24">
                <div className="flex flex-col gap-6">
                  <div className="hidden lg:block bg-white rounded-2xl px-6 py-5 border border-[#d8cfe3]">
                    <h3 className="text-[11px] font-medium text-[#9b8bb0] mb-4">{t.ui.toc}</h3>
                    <ul className="space-y-3.5 text-[13px] font-semibold text-[#50298e]">
                      {t.sections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            onClick={(event) => handleTocClick(event, section.id)}
                            className="hover:text-[#7f2191] transition-colors leading-snug block"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-1">
                    <div className="flex items-center justify-end gap-5 mb-5">
                      <span className="text-[13px] font-semibold text-[#50298e]">{t.ui.share}</span>
                      <div className="flex gap-2">
                        <button
                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`)}
                            aria-label="Share on X (Twitter)"
                            className="cursor-pointer w-[34px] h-[34px] rounded-[10px] border-[1.5px] border-[#d8cfe3] flex items-center justify-center text-[#7f2191] hover:bg-[#f9effb] hover:border-[#7f2191] transition-colors"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16"/><path d="M4 20L20 4"/></svg>
                        </button>
                        <button
                            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`)}
                            aria-label="Share on LinkedIn"
                            className="cursor-pointer w-[34px] h-[34px] rounded-[10px] border-[1.5px] border-[#d8cfe3] flex items-center justify-center text-[#7f2191] hover:bg-[#f9effb] hover:border-[#7f2191] transition-colors"
                        >
                          <Linkedin size={16} fill="currentColor" strokeWidth={0} />
                        </button>
                        <button
                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}
                            aria-label="Share on Facebook"
                            className="cursor-pointer w-[34px] h-[34px] rounded-[10px] border-[1.5px] border-[#d8cfe3] flex items-center justify-center text-[#7f2191] hover:bg-[#f9effb] hover:border-[#7f2191] transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </button>
                      </div>
                    </div>

                    <button
                        onClick={(e) => {
                          const url = window.location.href;
                          navigator.clipboard.writeText(url);
                          const span = e.currentTarget.querySelector('span');
                          if (span) {
                            const original = span.innerText;
                            span.innerText = t.ui.copied;
                            setTimeout(() => { span.innerText = original; }, 2000);
                          }
                        }}
                        aria-label="Copy link to this article"
                        className="cursor-pointer w-full flex items-center justify-between px-6 py-2.5 rounded-full border border-[#e2dced] text-[11px] font-semibold tracking-wider uppercase text-[#7f2191] hover:border-[#7f2191] hover:bg-white transition-all duration-300"
                    >
                      <span>{t.ui.copyLink}</span>
                      <Copy size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-[10px]">
            <motion.div
                {...fadeUp(0.1)}
                className="rounded-[2rem] px-[30px] py-12 md:py-24 lg:py-36 relative overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
                }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 gap-6">
                <motion.h2 {...fadeUp(0.2)} className="text-[28px] md:text-[42px] font-normal leading-tight text-white mb-0">
                  {t.ui.similarReads}
                </motion.h2>

                <motion.div {...fadeUp(0.3)} className="hidden md:block">
                  <GeneralButton variant="outline" className="border-none hover:shadow-lg" to="/blog">
                    {t.ui.checkAll}
                  </GeneralButton>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {relatedPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    date={language === 'fr' && post.dateFr ? post.dateFr : post.date}
                    title={language === 'en' ? post.title : post.titleFr || post.title}
                    description={language === 'en' ? post.description : post.descriptionFr || post.description}
                    image={post.img}
                    link={`/blog/${post.id}`}
                    delay={0.4 + index * 0.1}
                    variant="outline"
                  />
                ))}
              </div>

              <motion.div
                  {...fadeUp(0.6)}
                  className="mt-10 flex justify-start md:hidden"
              >
                <GeneralButton variant="outline" className="border-none hover:shadow-lg" to="/blog">
                  {t.ui.checkAll}
                </GeneralButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
