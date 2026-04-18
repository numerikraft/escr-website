export interface BlogPostSummary {
  id: number;
  title: string;
  description: string;
  date: string;
  img: string;
  heroImage: string;
  seoImage: string;
  category: string;
  readTime: string;
  author: string;
}

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    id: 1,
    title: 'The Value of Real-World Evidence in Modern Healthcare',
    description: 'Discover how Real-World Evidence (RWE) complements clinical trials.',
    date: 'April 1, 2026',
    img: '/blog/1/real-world-evidence-blog-card.png',
    heroImage: '/blog/1/hero-real-world-evidence-healthcare.png',
    seoImage: '/blog/1/escr-og.png',
    category: 'EXPERT INSIGHTS',
    readTime: '5 MIN READ',
    author: 'Samy Bekrar'
  },
  {
    id: 2,
    title: 'Cancer Burden in the Maghreb: A Regional Analysis',
    description: 'Regional cancer burden, epidemiology and economic impact in Maghreb',
    date: 'May 02, 2026',
    img: '/blog/2/cancer-burden-maghreb-blog-card.png',
    heroImage: '/blog/2/hero-cancer-epidemiology-maghreb.png',
    seoImage: '/blog/2/hero-cancer-burden-maghreb-analysis.png',
    category: 'EXPERT INSIGHTS',
    readTime: '4 MIN READ',
    author: 'ES Clinical Research'
  }
];

export const getBlogPostById = (id: number) =>
  BLOG_POSTS.find((post) => post.id === id);
