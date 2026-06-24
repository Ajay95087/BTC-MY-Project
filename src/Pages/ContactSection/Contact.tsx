import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface ContactProps {}

const office = {
  emoji: '🇮🇳',
  city: 'Born To Code IT Solutions Pvt. Ltd.',
  line2: 'Dwarka Mor, New Delhi – 110059',
  phone: '+91 93958 53427',
  email: 'info@borntocodeitsolutions.com',
  hours: 'Mon–Fri, 9 AM – 7 PM IST',
};

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const serviceOptions = [
  'Microsoft Dynamics 365 Implementation',
  'ERP Integration & Migration',
  'Business Intelligence & Power BI',
  'Post-Go-Live Support',
  'Training & Change Management',
  'Custom Software Development',
  'Other / Not sure yet',
];


const EMAILJS_SERVICE_ID  = 'service_wrab1n9';  
const EMAILJS_TEMPLATE_ID = 'template_0ghgx0v';  
const EMAILJS_PUBLIC_KEY  = 'VswsbSA1OEHxwWoRC';  

const Contact = ({}: ContactProps) => {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};

    // Name
    if (!form.name.trim()) {
      e.name = 'Name is required';
    } else if (form.name.trim().length < 2) {
      e.name = 'Name must be at least 2 characters';
    }

    // Email — strict format check
    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) {
      e.email = 'Enter a valid email address (e.g. name@example.com)';
    }

    // Phone — optional but if filled must be valid (7–15 digits, optional +, spaces, dashes)
    if (form.phone.trim()) {
      const digits = form.phone.replace(/[\s\-().+]/g, '');
      if (!/^\d{7,15}$/.test(digits)) {
        e.phone = 'Enter a valid phone number (7–15 digits)';
      }
    }

    // Message
    if (!form.message.trim()) {
      e.message = 'Please tell us a bit about your project';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message is too short — please add a bit more detail';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (sendError) setSendError('');
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSending(true);
    setSendError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          company:      form.company || 'Not provided',
          phone:        form.phone   || 'Not provided',
          service:      form.service || 'Not specified',
          message:      form.message,
          to_email:     'info@borntocodeitsolutions.com',
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setSendError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-container">

      {/* ── HERO ── */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">Get In Touch</span>
          <h1>Let's Talk About<br />Your Project</h1>
          <p className="contact-hero-sub">
            Whether you're planning a new ERP rollout, need expert support, or just
            want an honest opinion on your Dynamics 365 setup — we're here.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-grid">

          {/* ── LEFT: FORM ── */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="contact-success">
                <span className="success-icon">✅</span>
                <h2>Message received!</h2>
                <p>
                  Thanks for reaching out. One of our consultants will be in touch
                  within 1 business day.
                </p>
                <button
                  className="contact-submit-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="contact-form">
                <h2 className="form-title">Send us a message</h2>
                <p className="form-sub">We'll get back to you within 1 business day.</p>

                <div className="form-row">
                  <div className={`form-field ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" placeholder="Full Name"
                      value={form.name} onChange={handleChange} />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className={`form-field ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Work Email *</label>
                    <input id="email" name="email" type="email" placeholder="btc@gmail.com"
                      value={form.email} onChange={handleChange} />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" placeholder="Your Company Ltd."
                      value={form.company} onChange={handleChange} />
                  </div>
                  <div className={`form-field ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 9334512327"
                      value={form.phone} onChange={handleChange} />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">What can we help with?</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className={`form-field ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea id="message" name="message" rows={5}
                    placeholder="Briefly describe your current system, what you're looking to achieve, and your timeline…"
                    value={form.message} onChange={handleChange} />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                {/* Send error */}
                {sendError && (
                  <div className="send-error">
                    ⚠️ {sendError}
                  </div>
                )}

                <button
                  className={`contact-submit-btn ${sending ? 'sending' : ''}`}
                  onClick={handleSubmit}
                  disabled={sending}
                >
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>
              </div>
            )}
          </div>

          {/* ── RIGHT: INFO ── */}
          <div className="contact-info-col">

            <h3 className="info-heading">Our Office</h3>
            <div className="office-card">
              <div className="office-flag">{office.emoji}</div>
              <div className="office-details">
                <h4>{office.city}</h4>
                <p>{office.line2}</p>
                <a href={`tel:${office.phone}`} className="office-link">📞 {office.phone}</a>
                <a href={`mailto:${office.email}`} className="office-link">✉️ {office.email}</a>
                <span className="office-hours">🕐 {office.hours}</span>
              </div>
            </div>

            {/* ── LIVE MAP ── */}
            <div className="map-wrap">
              <div className="map-header">
                <span className="map-pin">📍</span>
                <div>
                  <strong>Dwarka Mor, New Delhi</strong>
                  <a
                    href="https://maps.google.com/?q=Dwarka+Mor,+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-directions"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
              <iframe
                className="map-iframe"
                title="Dwarka Mor, New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1965386158!2d77.02596317550613!3d28.61379897566587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3f4b3a3a3b%3A0x7c3c3c3c3c3c3c3c!2sDwarka%20Mor%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* What to expect */}
            <div className="expect-section">
              <h3 className="info-heading" style={{ marginTop: '2rem' }}>What to expect</h3>
              <div className="promise-list">
                <div className="promise-item">
                  <span className="promise-icon">⚡</span>
                  <div>
                    <strong>Within 1 business day</strong>
                    <p>A consultant reviews your message and responds with initial thoughts.</p>
                  </div>
                </div>
                <div className="promise-item">
                  <span className="promise-icon">📋</span>
                  <div>
                    <strong>Discovery call</strong>
                    <p>30-minute call to understand your requirements — no sales pitch.</p>
                  </div>
                </div>
                <div className="promise-item">
                  <span className="promise-icon">📄</span>
                  <div>
                    <strong>Tailored proposal</strong>
                    <p>Scoped estimate with timeline, team, and approach — within 5 days.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;