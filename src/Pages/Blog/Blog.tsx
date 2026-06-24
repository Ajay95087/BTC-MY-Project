import { useState } from 'react';
import './Blog.css';
import aboutVdo from '../../assets/AboutUs/About.mp4';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorEmoji: string;
  emoji: string;
  featured?: boolean;
  isCopilot?: boolean;
}

/* ── Microsoft Copilot SVG Logo ── */
const CopilotLogo = ({ size = 56 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
      fill="url(#copilot-bg)"
    />
    <path
      d="M10 11.5C10 9.567 11.567 8 13.5 8H16v6h-2.5A3.5 3.5 0 0110 10.5v1z"
      fill="#74B9FF"
    />
    <path
      d="M16 8h2.5C20.433 8 22 9.567 22 11.5S20.433 15 18.5 15H16V8z"
      fill="#A29BFE"
    />
    <path
      d="M10 16h6v6h-2.5C11.567 22 10 20.433 10 18.5V16z"
      fill="#55EFC4"
    />
    <path
      d="M16 16h6v2.5C22 20.433 20.433 22 18.5 22H16v-6z"
      fill="#FDCB6E"
    />
    <defs>
      <radialGradient id="copilot-bg" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="100%" stopColor="#0d1b2a" />
      </radialGradient>
    </defs>
  </svg>
);

/* ── Render card icon: Copilot logo or emoji ── */
const CardIcon = ({ post }: { post: BlogPost }) => {
  if (post.isCopilot) {
    return (
      <div className="blog-card-emoji copilot-icon-wrap">
        <CopilotLogo size={64} />
        <span className="copilot-label">Microsoft Copilot</span>
      </div>
    );
  }
  return <div className="blog-card-emoji">{post.emoji}</div>;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Microsoft Dynamics 365 is the Right ERP for Growing Indian Businesses',
    excerpt:
      "India's mid-market is evolving fast. Legacy accounting tools and siloed spreadsheets can no longer keep pace with GST compliance, multi-state operations, and real-time reporting demands. Here's why D365 is the platform built for this moment.",
    category: 'ERP Strategy',
    date: '12 Jun 2025',
    readTime: '7 min read',
    author: 'Dharmendra Singh',
    authorRole: 'CEO & Founder',
    authorEmoji: '👨‍💼',
    emoji: '🏗️',
    featured: true,
  },
  {
    id: 2,
    title: 'Power Automate vs Azure Logic Apps: Which Should You Use?',
    excerpt:
      'Both tools automate workflows, but choosing the wrong one costs time and money. We break down the decision by use case, licensing model, and technical complexity so your team picks the right tool first.',
    category: 'Power Platform',
    date: '28 May 2025',
    readTime: '5 min read',
    author: 'Chandani Kumari',
    authorRole: 'Integration Engineer',
    authorEmoji: '👨‍🔧',
    emoji: '🔗',
  },
  {
    id: 3,
    title: 'A Practical Guide to D365 Finance Go-Live Readiness',
    excerpt:
      "Going live is not a finish line — it's a starting gun. This checklist covers data migration sign-off, user acceptance testing, cutover planning, and hypercare setup so your first week of production is uneventful.",
    category: 'Implementation',
    date: '14 May 2025',
    readTime: '8 min read',
    author: 'Dharmendra Singh',
    authorRole: 'Lead D365 Architect',
    authorEmoji: '👩‍💻',
    emoji: '✅',
  },
  {
    id: 4,
    title: "Copilot in Dynamics 365: What's Actually Useful Today",
    excerpt:
      "Microsoft's AI Copilot is embedded across D365 apps, but not every feature delivers equal value. After hands-on testing across Finance, Sales, and Customer Service, here's what we recommend enabling on day one.",
    category: 'AI & Copilot',
    date: '2 May 2025',
    readTime: '6 min read',
    author: 'Priya Mehta',
    authorRole: 'Lead D365 Architect',
    authorEmoji: '👩‍💻',
    emoji: '🤖',
    isCopilot: true,
  },
  {
    id: 5,
    title: 'How to Build a Real-Time Power BI Dashboard from D365 Data',
    excerpt:
      'Step-by-step guide to connecting Dataverse and Azure Synapse Link to Power BI, designing a finance dashboard with live KPIs, and sharing it securely across your organisation without extra licensing costs.',
    category: 'Business Intelligence',
    date: '18 Apr 2025',
    readTime: '10 min read',
    author: 'Vijay Maurya',
    authorRole: 'Business Analyst',
    authorEmoji: '👩‍📊',
    emoji: '📊',
  },
  {
    id: 6,
    title: 'Change Management: The Hidden Risk in Every ERP Project',
    excerpt:
      "Technical go-lives fail when people don't adopt the system. We've seen it happen even on perfectly configured implementations. This post covers the five change management practices that separate successful rollouts from expensive ones.",
    category: 'Project Management',
    date: '5 Apr 2025',
    readTime: '6 min read',
    author: 'Ajay Kumar',
    authorRole: 'Business Analyst',
    authorEmoji: '👩‍📊',
    emoji: '🎯',
  },
  {
    id: 7,
    title: 'D365 Supply Chain: Demand Forecasting with AI Builder',
    excerpt:
      "Seasonal demand spikes, supplier delays, and stockouts cost more than most businesses realise. Here's how AI Builder integrated with D365 Supply Chain Management can predict demand accurately without a data science team.",
    category: 'Supply Chain',
    date: '22 Mar 2025',
    readTime: '7 min read',
    author: 'Dharmendra Singh',
    authorRole: 'CEO & Founder',
    authorEmoji: '👨‍💼',
    emoji: '🚚',
  },
  {
    id: 8,
    title: 'Zero Trust Security for Your Dynamics 365 Environment',
    excerpt:
      "Cloud ERP systems are high-value targets. This guide walks through Microsoft's Security Baseline for D365, Azure AD Conditional Access policies, and Privileged Identity Management — all configured for a typical mid-market deployment.",
    category: 'Security',
    date: '10 Mar 2025',
    readTime: '9 min read',
    author: 'Dharmendra Singh',
    authorRole: 'Integration Engineer',
    authorEmoji: '👨‍🔧',
    emoji: '🔐',
  },
];

const categories = [
  'All', 'ERP Strategy', 'Power Platform', 'Implementation',
  'AI & Copilot', 'Business Intelligence', 'Project Management',
  'Supply Chain', 'Security',
];

interface BlogProps {
  onNavigate: (page: string) => void;
}

const Blog = ({ onNavigate }: BlogProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = blogPosts.find((p) => p.featured)!;
  const rest = blogPosts.filter((p) => !p.featured);

  const filtered = (
    activeCategory === 'All' ? rest : rest.filter((p) => p.category === activeCategory)
  ).filter(
    (p) =>
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="blog-container">

      {/* ── HERO WITH VIDEO BG ── */}
      <div className="blog-hero">
        <video
          className="blog-hero-video"
          src={aboutVdo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="blog-hero-overlay" />

        <div className="blog-hero-content">
          <span className="blog-hero-eyebrow">Insights & Updates</span>
          <h1>The Born To Code Blog</h1>
          <p className="blog-hero-sub">
            Practical guides, deep dives, and real-world lessons from our consultants
            on Microsoft Dynamics 365, Power Platform, and enterprise technology.
          </p>
          <div className="blog-search-wrap">
            <span className="blog-search-icon">🔍</span>
            <input
              className="blog-search"
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="blog-search-clear" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
      </div>

      <div className="blog-content">

        {/* ── FEATURED POST ── */}
        {activeCategory === 'All' && searchQuery === '' && (
          <div className="blog-featured-wrap">
            <span className="section-label-blog">Featured Article</span>
            <div className="blog-featured-card">
              <div className="featured-emoji-block">
                <span>{featured.emoji}</span>
              </div>
              <div className="featured-text">
                <div className="featured-meta">
                  <span className="blog-tag">{featured.category}</span>
                  <span className="blog-meta-dot">·</span>
                  <span className="blog-meta-info">{featured.date}</span>
                  <span className="blog-meta-dot">·</span>
                  <span className="blog-meta-info">{featured.readTime}</span>
                </div>
                <h2 className="featured-title">{featured.title}</h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <div className="featured-footer">
                  <div className="blog-author">
                    <span className="blog-author-avatar">{featured.authorEmoji}</span>
                    <div>
                      <span className="blog-author-name">{featured.author}</span>
                      <span className="blog-author-role">{featured.authorRole}</span>
                    </div>
                  </div>
                  <button className="blog-read-btn">Read Article →</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── CATEGORY FILTERS ── */}
        <div className="blog-filters-wrap">
          <div className="blog-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── RESULTS COUNT ── */}
        {(searchQuery || activeCategory !== 'All') && (
          <p className="blog-results-info">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
            {searchQuery ? ` for "${searchQuery}"` : ` in ${activeCategory}`}
          </p>
        )}

        {/* ── BLOG GRID ── */}
        {filtered.length > 0 ? (
          <div className="blog-grid">
            {filtered.map((post) => (
              <article className="blog-card" key={post.id}>
                <CardIcon post={post} />
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-tag">{post.category}</span>
                    <span className="blog-meta-dot">·</span>
                    <span className="blog-meta-info">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="blog-author-avatar">{post.authorEmoji}</span>
                    <div>
                      <span className="blog-author-name">{post.author}</span>
                      <span className="blog-author-role">{post.date}</span>
                    </div>
                  </div>
                  <button className="blog-card-link">Read →</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <span className="blog-empty-icon">📭</span>
            <h3>No articles found</h3>
            <p>Try a different search term or browse all categories.</p>
            <button className="blog-read-btn" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
              Clear filters
            </button>
          </div>
        )}

        {/* ── NEWSLETTER ── */}
        <div className="blog-newsletter">
          <div className="blog-newsletter-text">
            <h2>Stay ahead of the curve</h2>
            <p>New articles on Dynamics 365, Power Platform, and ERP strategy — straight to your inbox, twice a month.</p>
          </div>
          <div className="blog-newsletter-form">
            <input type="email" className="blog-email-input" placeholder="your@email.com" />
            <button className="blog-subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="blog-cta-block">
          <h2>Have a question for our experts?</h2>
          <p>Our consultants publish what they know — and they're happy to talk about your specific situation.</p>
          <button className="call-support-blog" onClick={() => onNavigate('Contact')}>
            Talk to an Expert
          </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;