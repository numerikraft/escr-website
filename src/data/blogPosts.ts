export interface BlogPostSummary {
  id: number;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  date: string;
  dateFr?: string;
  img: string;
  heroImage: string;
  seoImage: string;
  category: string;
  categoryFr: string;
  readTime: string;
  author: string;
}

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    id: 1,
    title: 'The Value of Real-World Evidence in Modern Healthcare',
    titleFr: 'La Valeur des Données de Vie Réelle (RWE) dans la Santé',
    description: 'Discover how Real-World Evidence (RWE) complements clinical trials.',
    descriptionFr: 'Découvrez comment les Données de Vie Réelle (RWE) complètent les essais cliniques.',
    date: 'August 02, 2026',
    dateFr: '2 Août 2026',
    img: '/blog/1/real-world-evidence-blog-card.webp',
    heroImage: '/blog/1/hero-real-world-evidence-healthcare.webp',
    seoImage: '/blog/1/escr-og.png',
    category: 'EXPERT INSIGHTS',
    categoryFr: "AVIS D'EXPERT",
    readTime: '5 MIN READ',
    author: 'Samy Bekrar'
  },
  {
    id: 2,
    title: 'Cancer Burden in the Maghreb: A Regional Analysis',
    titleFr: 'Fardeau du Cancer au Maghreb : Une Analyse Régionale',
    description: 'Regional cancer burden, epidemiology and economic impact in Maghreb',
    descriptionFr: 'Fardeau régional du cancer, épidémiologie et impact économique au Maghreb',
    date: 'August 08, 2026',
    dateFr: '8 Août 2026',
    img: '/blog/2/cancer-burden-maghreb-blog-card.webp',
    heroImage: '/blog/2/hero-cancer-epidemiology-maghreb.webp',
    seoImage: '/blog/2/hero-cancer-burden-maghreb-analysis.webp',
    category: 'EXPERT INSIGHTS',
    categoryFr: "AVIS D'EXPERT",
    readTime: '4 MIN READ',
    author: 'ES-CR'
  }
];

export const getBlogPostById = (id: number) =>
  BLOG_POSTS.find((post) => post.id === id);
