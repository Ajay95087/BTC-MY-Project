import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  
  {
    id: 1,
    category: 'General',
    question: 'What is Born To Code IT Solutions?',
    answer:
      'Born To Code IT Solutions Private Limited is a premier Microsoft Dynamics 365 consultancy. We help businesses across India and the Middle East implement, customise, and support enterprise ERP systems — covering Finance, Supply Chain, Sales, and Customer Service modules.',
  },
  {
    id: 2,
    category: 'General',
    question: 'Which industries do you serve?',
    answer:
      'We have delivered projects across manufacturing, retail, healthcare, logistics, real estate, and professional services. Our methodology adapts to your industry\'s specific compliance needs, workflows, and reporting requirements.',
  },
  {
    id: 3,
    category: 'General',
    question: 'Where are you based, and do you work remotely?',
    answer:
      'Our headquarters are in India, with active project delivery across the Middle East. We work in hybrid mode — on-site for discovery, workshops, and go-live, and remotely for configuration, testing, and ongoing support. Distance has never been a barrier to a successful project.',
  },
  // Dynamics 365
  {
    id: 4,
    category: 'Dynamics 365',
    question: 'Which Dynamics 365 modules do you implement?',
    answer:
      'We implement D365 Finance, Supply Chain Management, Sales, Customer Service, Field Service, and Business Central. We also build custom extensions, portals, and integrations on top of any of these modules.',
  },
  {
    id: 5,
    category: 'Dynamics 365',
    question: 'How long does a typical D365 implementation take?',
    answer:
      'A focused single-module implementation typically takes 3–5 months. Multi-module enterprise rollouts range from 6–12 months depending on data complexity, customisation scope, and stakeholder availability. We provide a fixed timeline estimate after the initial discovery workshop.',
  },
  {
    id: 6,
    category: 'Dynamics 365',
    question: 'Can you migrate data from our existing ERP or accounting system?',
    answer:
      'Yes. We handle migrations from SAP, Oracle, Tally, Sage, Odoo, and custom legacy systems. Our migration process includes data profiling, cleansing rules, test loads, and a formal sign-off before go-live — zero data loss is our commitment.',
  },
  {
    id: 7,
    category: 'Dynamics 365',
    question: 'Do you support AI Copilot features in D365?',
    answer:
      'Yes. We help clients enable and configure Microsoft Copilot across Finance, Sales, and Customer Service. We assess which Copilot features deliver real ROI for your team, handle licensing, and train your users so the features get adopted — not just switched on.',
  },
  // Support
  {
    id: 8,
    category: 'Support',
    question: 'What does your post-go-live support include?',
    answer:
      'Our support plans cover L1 (user queries), L2 (configuration fixes), and L3 (development defects). We offer monthly retainer packages with guaranteed SLAs — 4-hour response for critical issues, 1 business day for standard requests. All plans include a dedicated named consultant.',
  },
  {
    id: 9,
    category: 'Support',
    question: 'Is support available outside business hours?',
    answer:
      'Yes. Our Premium Support plan includes 24/7 coverage for P1 critical issues (system down, data corruption, payroll blocking). Standard and Professional plans cover business hours across IST and Gulf Standard Time zones.',
  },
  {
    id: 10,
    category: 'Support',
    question: 'Do you provide training for end users?',
    answer:
      'Absolutely. We deliver role-based training sessions (Finance team, warehouse staff, sales reps) in person or via Teams. Every engagement includes a training pack: recorded walkthroughs, quick-reference cards, and a process manual tailored to your configuration.',
  },
  // Pricing
  {
    id: 11,
    category: 'Pricing',
    question: 'How is your consulting work priced?',
    answer:
      'We offer both fixed-price project engagements and time-and-materials contracts. For clearly scoped implementations, fixed price gives you cost certainty. For evolving requirements or ongoing work, T&M provides flexibility. We discuss both options during the initial proposal.',
  },
  {
    id: 12,
    category: 'Pricing',
    question: 'Do you assist with Microsoft licensing?',
    answer:
      'Yes. We are a Microsoft partner and can advise on the right D365 licensing model for your user count, module mix, and budget. We help you avoid over-licensing and ensure you are compliant from day one.',
  },
];

const categories = ['All', 'General', 'Dynamics 365', 'Support', 'Pricing'];

interface FAQProps {
  onNavigate: (page: string) => void;
}

const FAQ = ({ onNavigate }: FAQProps) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="faq-container">

      {/* ── HERO ── */}
      <div className="faq-hero">
        <div className="faq-hero-content">
          <span className="faq-eyebrow">Got Questions?</span>
          <h1>Frequently Asked<br />Questions</h1>
          <p className="faq-hero-sub">
            Everything you need to know about our services, process, and support.
            Can't find what you're looking for?{' '}
            <button className="faq-hero-link" onClick={() => onNavigate('Contact')}>
              Ask us directly.
            </button>
          </p>
        </div>
      </div>

      <div className="faq-content">

        {/* ── CATEGORY TABS ── */}
        <div className="faq-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`faq-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── ACCORDION ── */}
        <div className="faq-list">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className={`faq-item ${openId === item.id ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="faq-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-chevron">
                  {openId === item.id ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── STILL HAVE QUESTIONS ── */}
        <div className="faq-cta">
          <div className="faq-cta-icon">💬</div>
          <h2>Still have questions?</h2>
          <p>
            Our consultants are happy to answer anything specific to your business
            situation — no sales pitch, just a straight conversation.
          </p>
          <button className="faq-cta-btn" onClick={() => onNavigate('Contact')}>
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;