import "./ERP.css";
import heroerp from "../../../assets/ERP/1ERP.png";    
import Darkerp from "../../../assets/ERP/2ERP.png"; 

interface Props { onBack: () => void; }

const benefits = [
  { icon: "🏭", title: "Inventory Management", desc: "Real-time tracking of stock levels, orders, and supply chain across all locations." },
  { icon: "💰", title: "Accounting & Finance", desc: "Automated invoicing, payroll, tax reports, and financial statements in one place." },
  { icon: "👥", title: "HR Management", desc: "Manage employees, attendance, leaves, and payroll with ease." },
  { icon: "📦", title: "Order Management", desc: "Streamline purchase orders, sales orders, and delivery tracking end-to-end." },
  { icon: "📊", title: "Real-time Reports", desc: "Instant dashboards and reports to make data-driven business decisions." },
  { icon: "🔗", title: "System Integration", desc: "Seamlessly integrates with your existing tools, CRM, and e-commerce platforms." },
];

const steps = [
  { step: "01", title: "Business Analysis", desc: "We study your current workflows, pain points, and business requirements." },
  { step: "02", title: "ERP Setup", desc: "Configure and customize the ERP system to fit your exact business processes." },
  { step: "03", title: "Data Migration", desc: "Safely migrate all your existing data to the new system." },
  { step: "04", title: "Training & Support", desc: "Full team training and ongoing technical support after go-live." },
];

const ERP = ({ onBack }: Props) => (
  <div className="erp">
    <section className="erp__hero"
    style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${heroerp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <button className="erp__back-btn" onClick={onBack}>← Back to Services</button>
      <span className="erp__badge">ERP Solutions</span>
      <h1 className="erp__hero-heading">
        Run Your Business <span className="erp__accent">Smarter & Faster</span>
      </h1>
      <p className="erp__hero-sub">
        Our ERP solutions unify all your business processes — from inventory to finance — in one powerful, easy-to-use platform.
      </p>
      <div className="erp__hero-btns">
        <button className="erp__btn-primary">Get Free Demo →</button>
        <button className="erp__btn-secondary">Learn More</button>
      </div>
    </section>

    <section className="erp__section">
      <div className="erp__section-header">
        <span className="erp__badge">What You Get</span>
        <h2 className="erp__section-heading">Everything <span className="erp__accent">Integrated</span></h2>
        <p className="erp__section-sub">One system to manage your entire business — no more scattered tools.</p>
      </div>
      <div className="erp__grid">
        {benefits.map((b) => (
          <div key={b.title} className="erp__card">
            <span className="erp__card-icon">{b.icon}</span>
            <h3 className="erp__card-title">{b.title}</h3>
            <p className="erp__card-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="erp__section erp__section--dark"
    style={{
        backgroundImage: `linear-gradient(135deg, 
        rgba(13,27,42,0.85) 0%, rgba(22,32,48,0.80) 100%), 
        url(${Darkerp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

      <div className="erp__section-header">
        <span className="erp__badge erp__badge--light">Our Process</span>
        <h2 className="erp__section-heading erp__section-heading--light">How We <span className="erp__accent">Implement</span></h2>
        <p className="erp__section-sub erp__section-sub--light">A smooth implementation process with zero business disruption.</p>
      </div>
      <div className="erp__steps">
        {steps.map((s) => (
          <div key={s.step} className="erp__step">
            <span className="erp__step-number">{s.step}</span>
            <h3 className="erp__step-title">{s.title}</h3>
            <p className="erp__step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="erp__cta">
      <h2 className="erp__cta-heading">Ready to <span className="erp__accent">Transform Your Business?</span></h2>
      <p className="erp__cta-sub">Book a free demo and see how our ERP can streamline your operations.</p>
      <button className="erp__btn-primary">Book Free Demo →</button>
    </section>
  </div>
);

export default ERP;