import "./DigitalMarketing.css";
import herodm from "../../../assets/DigitalMarketing/2Marketing.png";    
import Darkedm from "../../../assets/DigitalMarketing/1Marketing.png"; 

interface Props { onBack: () => void; }

const benefits = [
  { icon: "🚀", title: "Google Ads (PPC)", desc: "Drive instant traffic with targeted pay-per-click campaigns on Google and Bing." },
  { icon: "🔍", title: "SEO Optimization", desc: "Rank higher on search engines and get consistent organic traffic to your site." },
  { icon: "📧", title: "Email Marketing", desc: "Nurture leads and retain customers with personalized email campaigns." },
  { icon: "📱", title: "Social Media Ads", desc: "Targeted ads on Facebook, Instagram, and LinkedIn to reach your ideal customers." },
  { icon: "📊", title: "Data & Analytics", desc: "Track every campaign's ROI with detailed reports and conversion tracking." },
  { icon: "🎯", title: "Lead Generation", desc: "Strategies designed to bring in qualified leads that convert into real customers." },
];

const steps = [
  { step: "01", title: "Goal Setting", desc: "Define your KPIs, budget, and target audience for the campaign." },
  { step: "02", title: "Strategy Build", desc: "Create a multi-channel digital marketing strategy tailored to your goals." },
  { step: "03", title: "Execute & Launch", desc: "Launch campaigns across SEO, PPC, social, and email simultaneously." },
  { step: "04", title: "Optimize & Scale", desc: "Monitor performance daily and scale what works for maximum ROI." },
];

const DigitalMarketing = ({ onBack }: Props) => (
  <div className="dm">
    <section className="dm__hero"
    style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${herodm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <button className="dm__back-btn" onClick={onBack}>← Back to Services</button>
      <span className="dm__badge">Digital Marketing</span>
      <h1 className="dm__hero-heading">
        Grow Your Business with <span className="dm__accent">Data-Driven Marketing</span>
      </h1>
      <p className="dm__hero-sub">
        We create and manage result-driven digital marketing campaigns that generate leads, boost sales, and grow your brand online.
      </p>
      <div className="dm__hero-btns">
        <button className="dm__btn-primary">Get Free Strategy →</button>
        <button className="dm__btn-secondary">View Results</button>
      </div>
    </section>

    <section className="dm__section">
      <div className="dm__section-header">
        <span className="dm__badge">What You Get</span>
        <h2 className="dm__section-heading">Full-Scale <span className="dm__accent">Digital Growth</span></h2>
        <p className="dm__section-sub">Every channel, every strategy — all working together to grow your business.</p>
      </div>
      <div className="dm__grid">
        {benefits.map((b) => (
          <div key={b.title} className="dm__card">
            <span className="dm__card-icon">{b.icon}</span>
            <h3 className="dm__card-title">{b.title}</h3>
            <p className="dm__card-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="dm__section dm__section--dark"
    style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${Darkedm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div className="dm__section-header">
        <span className="dm__badge dm__badge--light">Our Process</span>
        <h2 className="dm__section-heading dm__section-heading--light">How We <span className="dm__accent">Market</span></h2>
        <p className="dm__section-sub dm__section-sub--light">A proven 4-step process that turns budget into results.</p>
      </div>
      <div className="dm__steps">
        {steps.map((s) => (
          <div key={s.step} className="dm__step">
            <span className="dm__step-number">{s.step}</span>
            <h3 className="dm__step-title">{s.title}</h3>
            <p className="dm__step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="dm__cta">
      <h2 className="dm__cta-heading">Ready to <span className="dm__accent">Dominate Digital?</span></h2>
      <p className="dm__cta-sub">Let's build a marketing engine that works 24/7 for your business.</p>
      <button className="dm__btn-primary">Get Free Strategy →</button>
    </section>
  </div>
);

export default DigitalMarketing;