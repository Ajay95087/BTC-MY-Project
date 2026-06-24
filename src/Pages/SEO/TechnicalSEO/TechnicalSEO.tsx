import "./TechnicalSEO.css";
import herotseo from "../../../assets/technical/1image.png";    
import Darktseo from "../../../assets/technical/2image.png"; 
// onBack prop — App.tsx se aayega
interface TechnicalSEOProps {
  onBack: () => void;
}

const benefits = [
  {
    icon: "⚡",
    title: "Faster Page Speed",
    desc: "Optimized loading times improve user experience and boost Google rankings.",
  },
  {
    icon: "🔍",
    title: "Better Crawlability",
    desc: "Search engines can easily discover and index all your important pages.",
  },
  {
    icon: "📱",
    title: "Mobile Optimization",
    desc: "Fully responsive structure ensures perfect experience on all devices.",
  },
  {
    icon: "🔗",
    title: "Clean URL Structure",
    desc: "Logical, keyword-rich URLs that both users and bots love.",
  },
  {
    icon: "🛡️",
    title: "HTTPS & Security",
    desc: "Secure site structure builds trust and improves search rankings.",
  },
  {
    icon: "🗺️",
    title: "XML Sitemap & Robots.txt",
    desc: "Properly configured files guide search engines through your site.",
  },
];

const steps = [
  { step: "01", title: "Site Audit", desc: "Full technical analysis of your website's current health." },
  { step: "02", title: "Issue Detection", desc: "Identify broken links, duplicate content, slow pages, and errors." },
  { step: "03", title: "Fix & Optimize", desc: "Implement fixes for speed, structure, indexing, and security." },
  { step: "04", title: "Monitor & Report", desc: "Track improvements with detailed monthly performance reports." },
];

const TechnicalSEO = ({ onBack }: TechnicalSEOProps) => {
  return (
    <div className="tseo">

      {/* ── Hero ── */}
      <section className="tseo__hero"
      style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${herotseo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>


        <button className="tseo__back-btn" onClick={onBack}>
          ← Back to Services
        </button>
        <span className="tseo__badge">Technical SEO</span>
        <h1 className="tseo__hero-heading">
          Rank Higher with a{" "}
          <span className="tseo__accent">Technically Perfect</span> Website
        </h1>
        <p className="tseo__hero-sub">
          We audit, fix, and optimize your website's technical foundation — so
          search engines can crawl, index, and rank your pages with confidence.
        </p>
        <div className="tseo__hero-btns">
          <button className="tseo__btn-primary">Get Free Audit →</button>
          <button className="tseo__btn-secondary">Learn More</button>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="tseo__section">
        <div className="tseo__section-header">
          <span className="tseo__badge">What You Get</span>
          <h2 className="tseo__section-heading">
            Everything We <span className="tseo__accent">Optimize</span>
          </h2>
          <p className="tseo__section-sub">
            A complete technical overhaul — from site speed to structured data.
          </p>
        </div>
        <div className="tseo__benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} className="tseo__benefit-card">
              <span className="tseo__benefit-icon">{b.icon}</span>
              <h3 className="tseo__benefit-title">{b.title}</h3>
              <p className="tseo__benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="tseo__section tseo__section--dark"
      style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${Darktseo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="tseo__section-header">
          <span className="tseo__badge tseo__badge--light">Our Process</span>
          <h2 className="tseo__section-heading tseo__section-heading--light">
            How We <span className="tseo__accent">Work</span>
          </h2>
          <p className="tseo__section-sub tseo__section-sub--light">
            A proven 4-step process that delivers real, measurable results.
          </p>
        </div>
        <div className="tseo__steps">
          {steps.map((s) => (
            <div key={s.step} className="tseo__step">
              <span className="tseo__step-number">{s.step}</span>
              <div>
                <h3 className="tseo__step-title">{s.title}</h3>
                <p className="tseo__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="tseo__cta">
        <h2 className="tseo__cta-heading">
          Ready to Fix Your{" "}
          <span className="tseo__accent">Technical SEO?</span>
        </h2>
        <p className="tseo__cta-sub">
          Get a free website audit and discover what's holding your rankings back.
        </p>
        <button className="tseo__btn-primary">Start Free Audit →</button>
      </section>

    </div>
  );
};

export default TechnicalSEO;