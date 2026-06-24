import "./WebDevelopment.css";
import heroBg from "../../../assets/devlopment/image.png";     
import buildBg from "../../../assets/devlopment/Dev WEB.png";    

interface Props { onBack: () => void; }

const benefits = [
  { icon: "⚡", title: "Fast & Responsive", desc: "Lightning-fast websites that work perfectly on all devices and screen sizes." },
  { icon: "🎨", title: "Custom Design", desc: "Unique, modern designs tailored to your brand identity and business goals." },
  { icon: "🔒", title: "Secure & Reliable", desc: "Built with best security practices — SSL, secure forms, and regular updates." },
  { icon: "📈", title: "SEO Ready", desc: "Clean code structure and fast load times built for top search engine rankings." },
  { icon: "🛒", title: "E-Commerce", desc: "Full-featured online stores with payments, inventory, and order management." },
  { icon: "🔧", title: "Easy Maintenance", desc: "Clean codebase and CMS integration so you can update content easily." },
];

const steps = [
  { step: "01", title: "Discovery", desc: "We understand your goals, audience, and requirements in detail." },
  { step: "02", title: "Design", desc: "Wireframes and UI mockups crafted for the best user experience." },
  { step: "03", title: "Development", desc: "Clean, scalable code built with modern frameworks and best practices." },
  { step: "04", title: "Launch & Support", desc: "Testing, deployment, and ongoing support after launch." },
];

const WebDevelopment = ({ onBack }: Props) => (
  <div className="wd">

    <section
      className="wd__hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        
      <button className="wd__back-btn" onClick={onBack}>← Back to Services</button>
      <span className="wd__badge">Web Development</span>
      <h1 className="wd__hero-heading">
        Websites That <span className="wd__accent">Look Great</span> & Perform Better
      </h1>
      <p className="wd__hero-sub">
        We build fast, modern, and scalable websites that deliver real business results and exceptional user experiences.
      </p>
      <div className="wd__hero-btns">
        <button className="wd__btn-primary">Start Your Project →</button>
        <button className="wd__btn-secondary">View Portfolio</button>
      </div>
    </section>

    <section className="wd__section">
      <div className="wd__section-header">
        <span className="wd__badge">What You Get</span>
        <h2 className="wd__section-heading">Built for <span className="wd__accent">Performance</span></h2>
        <p className="wd__section-sub">Every website we build is fast, secure, and designed to convert.</p>
      </div>
      <div className="wd__grid">
        {benefits.map((b) => (
          <div key={b.title} className="wd__card">
            <span className="wd__card-icon">{b.icon}</span>
            <h3 className="wd__card-title">{b.title}</h3>
            <p className="wd__card-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section
      className="wd__section wd__section--dark"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.88) 0%, rgba(22,32,48,0.85) 100%), url(${buildBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wd__section-header">
        <span className="wd__badge wd__badge--light">Our Process</span>
        <h2 className="wd__section-heading wd__section-heading--light">How We <span className="wd__accent">Build</span></h2>
        <p className="wd__section-sub wd__section-sub--light">From idea to launch — a smooth, transparent process.</p>
      </div>
      <div className="wd__steps">
        {steps.map((s) => (
          <div key={s.step} className="wd__step">
            <span className="wd__step-number">{s.step}</span>
            <h3 className="wd__step-title">{s.title}</h3>
            <p className="wd__step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="wd__cta">
      <h2 className="wd__cta-heading">Ready to Build Your <span className="wd__accent">Dream Website?</span></h2>
      <p className="wd__cta-sub">Let's turn your vision into a high-performing website.</p>
      <button className="wd__btn-primary">Start Building →</button>
    </section>
  </div>
);

export default WebDevelopment;