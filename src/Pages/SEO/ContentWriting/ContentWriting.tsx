import "./ContentWriting.css";
import herocw from "../../../assets/CONTENT/image.png";    
import Darkcw from "../../../assets/Pages/Card/ContentWriting.png"; 
interface Props { onBack: () => void; }

const benefits = [
  { icon: "✍️", title: "SEO-Friendly Content", desc: "Every piece is optimized with the right keywords to rank higher on Google." },
  { icon: "🎯", title: "Audience-Focused", desc: "Content tailored to your target audience's needs, pain points, and interests." },
  { icon: "📝", title: "Blog & Articles", desc: "Engaging long-form content that establishes your brand as an industry authority." },
  { icon: "📢", title: "Copywriting", desc: "Persuasive website copy, ad copy, and landing pages that convert visitors." },
  { icon: "📧", title: "Email Content", desc: "Compelling email campaigns that drive opens, clicks, and conversions." },
  { icon: "🔁", title: "Consistent Delivery", desc: "Regular content calendar with on-time delivery — no delays, ever." },
];

const steps = [
  { step: "01", title: "Topic Research", desc: "We research trending topics and high-ranking keywords for your niche." },
  { step: "02", title: "Content Planning", desc: "Create a content calendar aligned with your business goals." },
  { step: "03", title: "Writing & Editing", desc: "Expert writers craft and polish every piece for quality and clarity." },
  { step: "04", title: "Deliver & Publish", desc: "On-time delivery with SEO metadata, images, and formatting ready." },
];

const ContentWriting = ({ onBack }: Props) => (
  <div className="cw">
    <section className="cw__hero"
      style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${herocw})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <button className="cw__back-btn" onClick={onBack}>← Back to Services</button>
      <span className="cw__badge">Content Writing</span>
      <h1 className="cw__hero-heading">
        Words That <span className="cw__accent">Attract, Engage</span> & Convert
      </h1>
      <p className="cw__hero-sub">
        We craft high-quality, SEO-friendly content that builds trust, drives traffic, and grows your business.
      </p>
      <div className="cw__hero-btns">
        <button className="cw__btn-primary">Get Content Now →</button>
        <button className="cw__btn-secondary">See Samples</button>
      </div>
    </section>

    <section className="cw__section">
      <div className="cw__section-header">
        <span className="cw__badge">What You Get</span>
        <h2 className="cw__section-heading">Content That <span className="cw__accent">Performs</span></h2>
        <p className="cw__section-sub">From blogs to email campaigns — we handle every word.</p>
      </div>
      <div className="cw__grid">
        {benefits.map((b) => (
          <div key={b.title} className="cw__card">
            <span className="cw__card-icon">{b.icon}</span>
            <h3 className="cw__card-title">{b.title}</h3>
            <p className="cw__card-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section
      className="wd__section wd__section--dark"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.88) 0%, rgba(22,32,48,0.85) 100%), url(${Darkcw})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="cw__section-header">
        <span className="cw__badge cw__badge--light">Our Process</span>
        <h2 className="cw__section-heading cw__section-heading--light">How We <span className="cw__accent">Write</span></h2>
        <p className="cw__section-sub cw__section-sub--light">A structured process that ensures quality every time.</p>
      </div>
      <div className="cw__steps">
        {steps.map((s) => (
          <div key={s.step} className="cw__step">
            <span className="cw__step-number">{s.step}</span>
            <h3 className="cw__step-title">{s.title}</h3>
            <p className="cw__step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="cw__cta">
      <h2 className="cw__cta-heading">Ready for <span className="cw__accent">Content That Converts?</span></h2>
      <p className="cw__cta-sub">Let our writers tell your brand story in the most compelling way.</p>
      <button className="cw__btn-primary">Start Writing →</button>
    </section>
  </div>
);

export default ContentWriting;