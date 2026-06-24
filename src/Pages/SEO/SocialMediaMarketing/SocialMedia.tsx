import "./SocialMediaMarketing.css";
import herotsmm from "../../../assets/Social Media/1image.png";    
import Darktsmm from "../../../assets/Social Media/2image.png"; 

interface Props { onBack: () => void; }

const benefits = [
  { icon: "📈", title: "Brand Awareness", desc: "Reach thousands of potential customers and build a recognizable brand identity across platforms." },
  { icon: "🎯", title: "Targeted Ads", desc: "Run laser-focused ad campaigns that reach your exact audience by age, interest, and location." },
  { icon: "💬", title: "Community Building", desc: "Build a loyal community around your brand with consistent and engaging content." },
  { icon: "📊", title: "Analytics & Insights", desc: "Track every post, story, and ad with detailed performance reports and insights." },
  { icon: "🤝", title: "Influencer Marketing", desc: "Partner with relevant influencers to amplify your brand message and reach." },
  { icon: "🔄", title: "Content Scheduling", desc: "Consistent posting schedule across all platforms to keep your audience engaged." },
];

const steps = [
  { step: "01", title: "Strategy Planning", desc: "We analyze your brand, audience, and competitors to craft the perfect strategy." },
  { step: "02", title: "Content Creation", desc: "Eye-catching graphics, reels, and copy tailored to each platform." },
  { step: "03", title: "Publishing & Ads", desc: "Scheduled posting and targeted ad campaigns for maximum reach." },
  { step: "04", title: "Report & Optimize", desc: "Monthly reports with actionable insights to continuously improve results." },
];

const SocialMediaMarketing = ({ onBack }: Props) => (
  <div className="smm">
    <section className="smm__hero"
    style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${herotsmm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <button className="smm__back-btn" onClick={onBack}>← Back to Services</button>
      <span className="smm__badge">Social Media Marketing</span>
      <h1 className="smm__hero-heading">
        Grow Your Brand with <span className="smm__accent">Powerful Social Media</span>
      </h1>
      <p className="smm__hero-sub">
        We create, manage, and grow your social media presence — turning followers into loyal customers.
      </p>
      <div className="smm__hero-btns">
        <button className="smm__btn-primary">Get Started →</button>
        <button className="smm__btn-secondary">View Packages</button>
      </div>
    </section>

    <section className="smm__section">
      <div className="smm__section-header">
        <span className="smm__badge">What You Get</span>
        <h2 className="smm__section-heading">Everything We <span className="smm__accent">Handle</span></h2>
        <p className="smm__section-sub">End-to-end social media management across all major platforms.</p>
      </div>
      <div className="smm__grid">
        {benefits.map((b) => (
          <div key={b.title} className="smm__card">
            <span className="smm__card-icon">{b.icon}</span>
            <h3 className="smm__card-title">{b.title}</h3>
            <p className="smm__card-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="smm__section smm__section--dark"
    style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${Darktsmm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div className="smm__section-header">
        <span className="smm__badge smm__badge--light">Our Process</span>
        <h2 className="smm__section-heading smm__section-heading--light">How We <span className="smm__accent">Work</span></h2>
        <p className="smm__section-sub smm__section-sub--light">A proven process that delivers consistent growth.</p>
      </div>
      <div className="smm__steps">
        {steps.map((s) => (
          <div key={s.step} className="smm__step">
            <span className="smm__step-number">{s.step}</span>
            <h3 className="smm__step-title">{s.title}</h3>
            <p className="smm__step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="smm__cta">
      <h2 className="smm__cta-heading">Ready to <span className="smm__accent">Grow on Social Media?</span></h2>
      <p className="smm__cta-sub">Let's build your brand presence and turn your audience into customers.</p>
      <button className="smm__btn-primary">Start Today →</button>
    </section>
  </div>
);

export default SocialMediaMarketing;