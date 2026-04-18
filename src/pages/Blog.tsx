import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import PageHero from '../components/PageHero';
import { GeneralButton } from '../components/Button';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

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
          title="Blog | Clinical Research Insights & Expert Analysis — ESCR"
          description="Read expert insights, scientific analysis, and clinical research perspectives from ES Clinical Research. Stay updated on RWE, healthcare trends, and CRO innovation."
          keywords="clinical research blog, CRO insights, healthcare analysis, clinical studies news, real-world evidence articles, ES Clinical Research"
          image="/escr-og.png"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' }
          ]}
        />

        {/* 1. HERO SECTION */}
        <PageHero
            tag="#BLOG"
            title="Insights & Expertise"
            subtitle="The Future of Clinical Research"
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
                    placeholder="Search articles..."
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
                      {cat.name}
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
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-16 mb-8">
              {paginatedPosts.map((post, idx) => (
                <BlogCard
                  key={post.id}
                  date={post.date}
                  title={post.title}
                  description={post.description}
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
                  ← Prev
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
                  Next →
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* 3. CUSTOM CTA SECTION (No container, so outer gap is exactly 30px) */}
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-[30px]">
            {/* items-stretch is the key: it forces both columns to be the exact same height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

              {/* Left Image Column - Now perfectly synced to text height */}
              <div className="relative rounded-[2rem] overflow-hidden w-full">
                <motion.div
                    {...curtainReveal(0.2)}
                    className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
                />
                <motion.img
                    {...imageZoom}
                    src="/about/expert-cro-team-partnership.png"
                    alt="ES Clinical Research CRO team ready for clinical study partnerships"
                    className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content Column */}
              <motion.div
                  {...fadeUp(0.3)}
                  className="flex flex-col justify-between"
              >
                {/* Top Content Group */}
                <div>
                  <h2 className="text-[#50298e] text-[28px] md:text-[42px] font-normal mb-5 leading-[1.2]">
                    Ready to Enhance Your<br className="hidden md:block" />Scientific Outcomes?
                  </h2>
                  <p className="text-[#50298e] text-[0.95rem] mb-8 leading-relaxed max-w-xl">
                    Your projects benefit from careful support and practical expertise. Reach out to our team to discuss your needs and find solutions tailored to each stage of your work.
                  </p>

                  {/* Phone Block */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[#f9effb] flex items-center justify-center text-[#7f2191] flex-shrink-0">
                      <Phone size={24} fill="currentColor" strokeWidth={0} />
                    </div>
                    <div>
                      <p className="text-[#50298e] font-medium text-[14px] mb-0.5">Call us</p>
                      <a href="tel:+21320339120" className="text-[#50298e] text-xl font-semibold tracking-wide border-b border-[#50298e]/20 pb-0.5 hover:text-[#7f2191] hover:border-[#7f2191] transition-colors">
                        +213 20 33 91 20
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Button Group - Pushed to the very bottom of the flex container */}
                <div className="flex items-start">
                  <GeneralButton to="/contact">
                    Work With Us
                  </GeneralButton>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </div>
  );
}
