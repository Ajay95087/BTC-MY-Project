import './AboutUs.css';
import aboutImg from '../../assets/image/image.png';

interface AboutUsProps {
  onNavigate: (page: string) => void;
}

const teamMembers = [
  {
    emoji: '👨‍💼',
    name: 'Dharmendra Singh',
    role: 'CEO & Founder',
    bio: '13+ years in enterprise ERP consulting. Led 50+ Dynamics 365 rollouts across India and the Middle East.',
  },
  {
    emoji: '👩‍💻',
    name: 'Soniya Singh',
    role: 'Lead D365 Architect',
    bio: 'Microsoft Certified Solutions Expert. Specialises in Finance & Supply Chain modules.',
  },
  {
    emoji: '👨‍🔧',
    name: 'Bittu Singh',
    role: 'Integration Engineer',
    bio: 'Expert in Power Platform, Azure Logic Apps, and third-party ERP connectors.',
  },
  {
    emoji: '👩‍📊',
    name: 'Chandani Singh',
    role: 'Business Analyst',
    bio: 'Bridges client requirements and technical delivery. Certified in Agile & Scrum methodologies.',
  },
];

const services = [
  {
    icon: '⚙️',
    title: 'Microsoft Dynamics 365 Implementation',
    desc: 'End-to-end D365 deployment covering Finance, Supply Chain, Sales, and Customer Service modules — customised for your business workflows.',
  },
  {
    icon: '🔗',
    title: 'ERP Integration & Migration',
    desc: 'Seamlessly migrate your legacy systems to D365 with zero data loss. We integrate third-party tools via Power Platform and Azure APIs.',
  },
  {
    icon: '📊',
    title: 'Business Intelligence & Reporting',
    desc: 'Transform raw data into actionable insights using Power BI dashboards connected live to your Dynamics 365 environment.',
  },
  {
    icon: '🛡️',
    title: 'Post-Go-Live Support',
    desc: '24/7 dedicated helpdesk and L1–L3 support plans to keep your ERP running smoothly long after launch.',
  },
  {
    icon: '🎓',
    title: 'Training & Change Management',
    desc: 'Role-based user training, documentation, and adoption programmes so your team hits the ground running on day one.',
  },
  {
    icon: '🏗️',
    title: 'Custom Software Development',
    desc: 'Bespoke hardware and software solutions — from IoT device integrations to custom D365 extensions and portals.',
  },
];

const techBadges = [
  'Microsoft Dynamics 365',
  'Azure Cloud',
  'Power Platform',
  'Power BI',
  'Power Automate',
  'Azure Logic Apps',
  'DataBase',
  'SharePoint',
  'SQL Server',
  'C# / .NET',
  'C / C++' ,
  'TypeScript / React',
  'REST & OData APIs',
];

const AboutUs = ({ onNavigate }: AboutUsProps) => {
  return (
    <div className="about-container">

      {/* ── HERO ── */}
      <div className="about-hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Who We Are</span>
          <h1>Turning Complexity<br />Into Clarity</h1>
          <p className="hero-sub">
            Born To Code IT Solutions is a premier Microsoft Dynamics 365 consultancy,
            helping businesses across India and the Middle East unlock the full power of
            modern ERP — on time and on budget.
          </p>
        </div>
      </div>

      <div className="about-content">

        {/* ── WHO WE ARE ── */}
        <div className="section-grid">
          <div className="text-side">
            <span className="section-label">Our Story</span>
            <h2>Built by Consultants,<br />for Businesses</h2>
            <p>
              Born To Code IT Solutions Private Limited was founded with a singular purpose:
              to make enterprise-grade technology accessible and practical for every kind of
              business. What began as a small team of Dynamics 365 specialists has grown into
              a full-service IT consultancy trusted by clients across manufacturing, retail,
              healthcare, and logistics.
            </p>
            <p>
              We don't believe in one-size-fits-all solutions. Every engagement starts with
              listening — understanding your processes, your pain points, and your ambitions —
              before we write a single line of configuration. That discipline is what keeps
              our go-live success rate at 100% and our clients coming back.
            </p>
            <p>
              From initial scoping through post-live hypercare, our consultants stay with you
              at every stage, giving you a single accountable partner rather than a
              revolving door of vendors.
            </p>
          </div>
          <div className="image-side">
            <img src={aboutImg} alt="Born To Code team at work" />
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="stats-bar">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Expert Support</p>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <div className="services-section">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>What We Do</span>
          <h2>Our Services</h2>
          <p className="services-intro">
            We offer the full spectrum of Microsoft Dynamics 365 and business technology
            services — from first consultation to long-term managed support.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CORE VALUES ── */}
        <div className="values-section">
          <span className="section-label">What Drives Us</span>
          <h2>Our Core Values</h2>
          <p className="values-intro">
            These principles shape every project we take on and every relationship we build.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🎯</span>
              <h4>Expertise</h4>
              <p>
                Our consultants hold deep, current Microsoft certifications. We invest in
                continuous learning so your solution is always built on best-practice,
                up-to-date architecture.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">💡</span>
              <h4>Innovation</h4>
              <p>
                We combine proven ERP methodology with forward-looking tools — AI Copilot,
                Power Platform automations, IoT integrations — to future-proof your operations.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h4>Integrity</h4>
              <p>
                We give honest assessments, realistic timelines, and transparent pricing.
                If something isn't right, we say so early — and we fix it together.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">⚡</span>
              <h4>Agility</h4>
              <p>
                Business requirements evolve. Our iterative delivery approach means we adapt
                quickly, keeping scope, budget, and stakeholder expectations aligned throughout.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">🌏</span>
              <h4>Client-Centricity</h4>
              <p>
                Your success is our metric. We measure project outcomes by the real impact on
                your team's productivity and your bottom line — not just ticket closure.
              </p>
            </div>
            <div className="value-card">
              <span className="value-icon">🔐</span>
              <h4>Security-First</h4>
              <p>
                Every solution we deliver follows Microsoft's Security Baseline and Zero Trust
                principles, ensuring your business data stays protected at every layer.
              </p>
            </div>
          </div>
        </div>

        {/* ── TEAM ── */}
        <div className="team-section">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Meet the Team</span>
          <h2>The People Behind the Work</h2>
          <p className="team-intro">
            Experienced consultants, certified architects, and passionate problem-solvers —
            united by a commitment to delivering real results.
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">{member.emoji}</div>
                <h4>{member.name}</h4>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div className="tech-section">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Technology</span>
          <h2>Our Tech Stack</h2>
          <div className="tech-badges">
            {techBadges.map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="cta-block">
          <h2>Ready to transform your business?</h2>
          <p>
            Talk to one of our Dynamics 365 experts today — no commitment, just a
            straightforward conversation about what's possible for your organisation.
          </p>
          <button className="call-support" onClick={() => onNavigate('Contact')}>
            Work With Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;