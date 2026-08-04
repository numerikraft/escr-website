import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import PageHero from '../components/PageHero';
import { GeneralButton } from '../components/Button';
import SEO from '../components/SEO';
import CTA from '../components/CTA';
import { BLOG_POSTS } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';
import { blogTranslations } from '../data/translations/blog';

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
export default function Blog() {
  const { language } = useLanguage();
  const t = blogTranslations[language as keyof typeof blogTranslations] || blogTranslations.en;

  const allPosts = BLOG_POSTS;

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);
  const POSTS_PER_PAGE = 4;

  // Filter posts by category
  const filteredPosts = activeCategory === 'ALL' 
    ? allPosts 
    : allPosts.filter(p => p.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, 
    currentPage * POSTS_PER_PAGE
  );

  // Build categories with real counts
  const categoryNames = ['ALL', 'PROJECTS', 'ANNOUNCEMENTS', 'EXPERT INSIGHTS', 'PERSPECTIVES', 'NEWS'];
  const categories = categoryNames.map(name => ({
    name,
    count: name === 'ALL' ? allPosts.length : allPosts.filter(p => p.category === name).length
  }));

  // Scroll to results when page or category changes
  useEffect(() => {
    if (currentPage > 1 || activeCategory !== 'ALL') {
      const offset = 120; // Account for sticky header
      if (resultsRef.current) {
        const elementPosition = resultsRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }, [currentPage, activeCategory]);

  // Handlers
  const handleCategoryChange = (name: string) => {
    setActiveCategory(name);
    setCurrentPage(1);
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
            { name: language === 'en' ? 'Blog' : 'Blog', url: '/blog' }
          ]}
        />

        {/* 1. HERO SECTION */}
        <PageHero
            tag={t.hero.tag}
            title={t.hero.title}
            subtitle={t.hero.subtitle}
            hasMargin={true}
        />

        {/* 2. BLOG CONTENT SECTION */}
        <section className="py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-[30px]">

            {/* 2.1 SEARCH BAR */}
            <motion.div 
              {...fadeUp(0.1)} 
              className="mb-16 max-w-xl mx-auto"
            >
              <div className="relative group/search">
                <div className="flex items-center bg-white rounded-full px-7 py-4 border-[1.5px] border-[#e2dced] transition-all duration-500 group-focus-within/search:border-[#50298e] group-focus-within/search:shadow-[0_8px_30px_rgb(80,41,142,0.04)]">
                  <Search size={20} strokeWidth={2.5} className="text-[#b2abbd]/40 group-focus-within/search:text-[#50298e] transition-colors duration-500 flex-shrink-0 mr-4" />
                  <input
                    type="text"
                    placeholder={t.search.placeholder}
                    aria-label="Search blog articles"
                    id="blog-search"
                    className="w-full bg-transparent text-[15px] font-medium text-[#50298e] placeholder-[#b2abbd]/40 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* 2.2 CATEGORY NAVIGATION - Modern Minimalist Design */}
            <motion.div 
              {...fadeUp(0.2)} 
              className="mb-16"
            >
              {/* Category Tabs with Animated Underline */}
              <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`relative px-3 sm:px-4 py-3.5 text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-300 ${
                      activeCategory === cat.name 
                        ? 'text-[#4c005a]' 
                        : 'text-[#6b5f7a] hover:text-[#7f2191]'
                    }`}
                  >
                    <span className="flex items-baseline gap-1.5">
                      {t.categories[cat.name as keyof typeof t.categories] || cat.name}
                      <span className={`text-[11px] font-bold transition-colors duration-300 ${
                        activeCategory === cat.name 
                          ? 'text-[#7f2191]' 
                          : 'text-[#9b8bb0]'
                      }`}>
                        ({cat.count})
                      </span>
                    </span>
                    
                    {/* Animated underline indicator - plus épais et visible */}
                    {activeCategory === cat.name && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#7f2191] rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
                
                {/* Static underline - plus visible */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e2dced] rounded-full" />
              </div>

              {/* Results indicator - Minimal */}
              <div ref={resultsRef} className="flex items-center justify-center">
                <span className="text-[13px] font-bold tracking-[0.06em] text-[#6b5f7a]">
                  {filteredPosts.length} {filteredPosts.length !== 1 ? t.pagination.articles : t.pagination.article}
                </span>
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-16 mb-8">
              {paginatedPosts.map((post, idx) => (
                <BlogCard
                  key={post.id}
                  date={language === 'fr' && post.dateFr ? post.dateFr : post.date}
                  title={language === 'en' ? post.title : post.titleFr || post.title}
                  description={language === 'en' ? post.description : post.descriptionFr || post.description}
                  image={post.img}
                  link={`/blog/${post.id}`}
                  delay={idx * 0.1}
                />
              ))}
            </div>

            {/* Pagination (only if more than 1 page) */}
            {totalPages > 1 && (
              <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-6 mt-20">
                {/* Prev */}
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors ${
                    currentPage === 1 
                      ? 'text-[#e2dced] cursor-not-allowed' 
                      : 'text-[#9b8bb0] hover:text-[#7f2191]'
                  }`}
                >
                  {t.pagination.prev}
                </button>
                
                {/* Page Numbers */}
                <div className="flex items-center gap-4 relative">
                  {/* Static underline */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#e2dced]/60" />
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative px-2 py-2 text-[13px] font-medium transition-all duration-300 ${
                        currentPage === page 
                          ? 'text-[#50298e]' 
                          : 'text-[#9b8bb0] hover:text-[#7f2191]'
                      }`}
                    >
                      {page}
                      {/* Animated underline for active page */}
                      {currentPage === page && (
                        <motion.div
                          layoutId="activePage"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7f2191]"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Next */}
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors ${
                    currentPage === totalPages 
                      ? 'text-[#e2dced] cursor-not-allowed' 
                      : 'text-[#9b8bb0] hover:text-[#7f2191]'
                  }`}
                >
                  {t.pagination.next}
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA SECTION */}
        <CTA />
      </div>
  );
}
