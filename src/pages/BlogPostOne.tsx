import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Linkedin, Facebook, Twitter, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { GeneralButton } from '../components/Button';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

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

const blogOneSections = [
  { id: 'understanding-rwe', title: 'Understanding Real-World Evidence' },
  { id: 'why-rwe-matters', title: 'Why Real-World Evidence Matters' },
  { id: 'from-insight-to-impact', title: 'From Insight to Impact: A Practical Perspective' },
  { id: 'challenges', title: 'Challenges and Considerations' },
  { id: 'future', title: 'The Future of Real-World Evidence' },
  { id: 'our-approach', title: 'Our Approach to Real-World Evidence' },
  { id: 'conclusion', title: 'Conclusion' }
];

export default function BlogPostOne() {
  const relatedPosts = BLOG_POSTS.filter((post) => post.id !== 1).slice(0, 2);
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
          title="Real-World Evidence in Healthcare | Expert Analysis — ESCR"
          description="Discover how real-world evidence complements clinical trials, reshaping regulatory strategies and patient outcomes in modern healthcare. Expert analysis by ESCR."
          keywords="Real-World Evidence, RWE, clinical trials, modern healthcare, patient outcomes, regulatory strategy, healthcare data, market access, Samy Bekrar"
          image="/blog/1/escr-og.png"
          type="article"
        />

        <div className="max-w-7xl mx-auto px-[10px] pt-24">
          <section className="relative overflow-hidden rounded-b-[2.5rem] pt-12 pb-20 md:pt-22 md:pb-30 bg-[#4c005a] mb-[30px] lg:mb-0">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/blog/1/hero.png')" }}
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
                      className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/50 text-white text-[11px] font-bold tracking-widest uppercase"
                  >
                    EXPERT INSIGHTS
                  </motion.div>
                  <motion.div
                      {...fadeUp(0.2)}
                      className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/50 text-white text-[11px] font-bold tracking-widest uppercase"
                  >
                    <Clock size={14} />
                    5 MIN READ
                  </motion.div>
                </div>

                <motion.h1
                    {...fadeUp(0.3)}
                    className="text-[36px] sm:text-4xl md:text-[3.5rem] font-normal text-white tracking-tight mb-10 leading-[1.15]"
                >
                  The Value of Real-World <br className="hidden md:block" />Evidence in Modern Healthcare
                </motion.h1>

                <motion.div
                    {...fadeUp(0.4)}
                    className="text-white/90 text-[13px] flex flex-wrap items-center gap-6 font-medium"
                >
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <span>Published by <span className="font-bold ml-1 text-white">Samy Bekrar</span></span>
                    <span className="opacity-40 hidden md:block">•</span>
                    <span>Published on <span className="font-bold ml-1 text-white">April 1, 2026</span></span>
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
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-6 font-medium">
                  In today’s rapidly evolving healthcare environment, decision-making can no longer rely solely on controlled clinical trials. While these trials remain essential for demonstrating the safety and efficacy of treatments, they often fail to capture how therapies perform in real-life conditions. This is where Real-World Evidence (RWE) plays a critical role.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 md:mb-16 font-medium">
                  As healthcare systems increasingly shift toward patient-centered and value-based models, stakeholders require insights that reflect actual clinical practice. Real-World Evidence provides this perspective by offering a more comprehensive understanding of how treatments are used, how patients respond, and what outcomes are achieved outside controlled environments.
                </p>

                <div className="lg:hidden mb-16 px-6 py-5 bg-[#faf8fc] rounded-2xl border border-[#e2dced]">
                  <h3 className="text-[11px] font-bold text-[#9b8bb0] mb-4 uppercase tracking-widest">Table of content</h3>
                  <ul className="space-y-4 text-[14px] font-semibold text-[#50298e]">
                    {blogOneSections.map((section) => (
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

                <h2 id="understanding-rwe" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">Understanding Real-World Evidence</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  Real-World Evidence refers to clinical insights derived from Real-World Data, which is collected during routine healthcare delivery rather than through traditional randomized clinical trials. This data reflects the complexity and variability of real-life patient populations, making it highly valuable for both clinical and strategic decision-making.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-20 font-normal">
                  Unlike clinical trials, which operate under strict protocols and often involve carefully selected participants, Real-World Evidence captures a broader and more diverse patient population. It includes data from everyday interactions within healthcare systems, such as electronic health records, insurance claims, patient registries, pharmacy records, and digital health tools. By integrating and analyzing these diverse data sources, organizations can gain a more realistic and actionable understanding of treatment effectiveness, safety, and long-term outcomes.
                </p>

                <div className="relative rounded-[2rem] overflow-hidden w-full h-[220px] sm:h-[300px] md:h-[400px] mb-20">
                  <motion.div
                      {...curtainReveal(0.2)}
                      className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
                  />
                  <motion.img
                      {...imageZoom}
                      src="/blog/1/understanding-real-world-evidence.png"
                      alt="Understanding real-world evidence in modern healthcare and clinical decision-making"
                      loading="lazy"
                      className="w-full h-full object-cover"
                  />
                </div>

                <h2 id="why-rwe-matters" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">Why Real-World Evidence Matters</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  The growing importance of Real-World Evidence lies in its ability to complement and extend the insights generated by clinical trials. While trials provide controlled and reliable data, they often lack the breadth needed to fully understand how treatments perform across different populations and over extended periods.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  Real-World Evidence fills this gap by capturing variations in patient characteristics, comorbidities, and treatment adherence. It allows healthcare stakeholders to observe how therapies perform in routine clinical practice, providing insights that are more representative of actual patient experiences.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-20 font-normal">
                  Beyond its clinical value, Real-World Evidence has become a key asset in regulatory and market access strategies. Regulatory authorities increasingly consider RWE to support approvals, label extensions, and post-marketing commitments. At the same time, market access teams rely on RWE to demonstrate cost-effectiveness, real-world utilization, and long-term value, all of which are essential for securing reimbursement and pricing decisions. In clinical practice, RWE contributes to more informed and personalized care. By analyzing real-world treatment patterns and outcomes, clinicians can better understand which therapies are most effective for specific patient groups. This leads to improved decision-making, enhanced patient outcomes, and a more efficient allocation of healthcare resources.
                </p>

                <h2 id="from-insight-to-impact" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">From Insight to Impact: A Practical Perspective</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-20 font-normal">
                  The true strength of Real-World Evidence lies in its ability to translate data into meaningful action. For example, in fields such as oncology, RWE is frequently used to evaluate how treatments perform across broader and more heterogeneous populations than those included in clinical trials. These insights can reveal differences in long-term effectiveness, safety profiles, and patient adherence, ultimately guiding both clinical practice and strategic decisions. Such applications demonstrate that Real-World Evidence is not just a complementary data source, but a powerful tool for understanding the real impact of healthcare interventions.
                </p>

                <div className="relative rounded-[2rem] overflow-hidden w-full h-[220px] sm:h-[300px] md:h-[400px] mb-20">
                  <motion.div
                      {...curtainReveal(0.2)}
                      className="absolute top-0 left-0 w-full bg-[#620f78] z-20 origin-top"
                  />
                  <motion.img
                      {...imageZoom}
                      src="/blog/1/practical-perspective-real-world-evidence.png"
                      alt="Translating real-world evidence into practical impact for clinical practice"
                      loading="lazy"
                      className="w-full h-full object-cover"
                  />
                </div>
                <h2 id="challenges" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">Challenges and Considerations</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  Despite its significant advantages, the use of Real-World Evidence also presents important challenges that must be carefully addressed. Data quality remains a primary concern, as information collected from multiple sources may vary in accuracy, completeness, and consistency. Additionally, the presence of bias and confounding factors can influence outcomes and must be managed through rigorous analytical methods.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-20 font-normal">
                  Another challenge lies in the lack of standardization across healthcare systems and regions, which can complicate data integration and comparison. At the same time, ethical considerations and data privacy regulations require strict governance to ensure that patient information is handled responsibly. To ensure credibility and reliability, organizations must adopt robust methodologies, transparent processes, and high standards of data governance. Only under these conditions can Real-World Evidence deliver its full value.
                </p>

                <h2 id="future" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mt-20 mb-10">The Future of Real-World Evidence</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  The future of Real-World Evidence is closely linked to technological innovation. Advances in artificial intelligence, machine learning, and digital health are transforming the way data is collected, analyzed, and interpreted. These technologies enable faster processing of large and complex datasets, leading to more accurate and timely insights.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-6 md:mb-16 font-normal">
                  As healthcare systems continue to evolve, Real-World Evidence is becoming an essential component of the decision-making ecosystem. It is no longer viewed as a secondary source of information, but as a strategic asset that supports innovation, improves outcomes, and accelerates access to effective treatments.
                </p>

                <h2 id="our-approach" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">Our Approach to Real-World Evidence</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  At our organization, we recognize the transformative potential of Real-World Evidence and its role in shaping the future of healthcare. Our approach is designed to help partners fully leverage RWE by combining scientific rigor with practical applicability.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-20 font-normal">
                  We support healthcare stakeholders across the entire RWE lifecycle, from study design and data integration to advanced analytics and strategic insights. By working with diverse and high-quality data sources, we generate evidence that is both reliable and actionable. Our objective is to enable better decisions at every level, whether in clinical development, regulatory strategy, or market access. Through a tailored and data-driven approach, we help transform complex information into clear, impactful outcomes.
                </p>

                <h2 id="conclusion" className="scroll-mt-40 text-[28px] md:text-[42px] font-medium text-[#7f2191] mb-6">Conclusion</h2>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  Real-World Evidence is redefining how healthcare decisions are made. By complementing clinical trials with insights drawn from real-life practice, it provides a more complete and accurate understanding of treatment impact.
                </p>
                <p className="text-[#50298e] text-[1.05rem] leading-relaxed mb-10 font-normal">
                  As the demand for value-based and patient-centered care continues to grow, the importance of Real-World Evidence will only increase. Organizations that effectively harness its potential will be better positioned to improve outcomes, optimize strategies, and drive meaningful progress in healthcare. Real-World Evidence is not simply an evolution of data-it is a fundamental shift toward more informed, more efficient, and more impactful decision-making.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="lg:col-span-4 sticky top-28 self-start mb-10 lg:mb-24">
                <div className="flex flex-col gap-6">
                  <div className="hidden lg:block bg-white rounded-2xl px-6 py-5 border border-[#d8cfe3]">
                    <h3 className="text-[11px] font-medium text-[#9b8bb0] mb-4">Table of content</h3>
                    <ul className="space-y-3.5 text-[13px] font-semibold text-[#50298e]">
                      {blogOneSections.map((section) => (
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
                      <span className="text-[13px] font-semibold text-[#50298e]">Share this post</span>
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
                            span.innerText = "COPIED!";
                            setTimeout(() => { span.innerText = original; }, 2000);
                          }
                        }}
                        aria-label="Copy link to this article"
                        className="cursor-pointer w-full flex items-center justify-between px-6 py-2.5 rounded-full border border-[#e2dced] text-[11px] font-semibold tracking-wider uppercase text-[#7f2191] hover:border-[#7f2191] hover:bg-white transition-all duration-300"
                    >
                      <span>COPY LINK</span>
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
                  Similar Reads
                </motion.h2>

                <motion.div {...fadeUp(0.3)} className="hidden md:block">
                  <GeneralButton variant="outline" className="border-none hover:shadow-lg" to="/blog">
                    Check All Blog
                  </GeneralButton>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {relatedPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    date={post.date}
                    title={post.title}
                    description={post.description}
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
                  Check All Blog
                </GeneralButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
