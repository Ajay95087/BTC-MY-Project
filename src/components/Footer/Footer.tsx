import {  FaLinkedin, FaTwitter, FaYoutube, FaInstagram,} from "react-icons/fa";
import "./Footer.css";

const services: string[] = [
  "Technical SEO",
  "Social Media Marketing",
  "Content Creater",
  "Web Development",
  "ERP Solutions",
];

const company: string[] = [
  "About Us",
  "Blog",
  "SEO",
  "Digital Marketing",
  "Company",
  "Contact",
];


const socialIcons = [
  { icon: <FaLinkedin size={18} />, label: "LinkedIn" , url:"https://www.linkedin.com/feed/"},
  { icon: <FaTwitter size={18} />,  label: "Twitter" , url:" https://www.youtube.com/" },
  { icon: <FaYoutube size={18} />,  label: "YouTube", url:"https://www.youtube.com/"  },
  { icon: <FaInstagram size={18} />, label: "Instagram",url: "https://www.instagram.com/" },
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Top Grid ── */}   
      
      <div className="footer__grid">

        {/* Brand Column */}

        <div>
          <div className="footer__brand-logo">
            <span className="footer__brand-btc"> BTC </span>
            <span className="footer__brand-name">
               Born to Code IT Solutions Private Limited
            </span>
          </div>

          <p className="footer__tagline">
            We build software that feels amazing— clean, purposeful, and made to last.
          </p>


          <div className="footer__socials">
            {socialIcons.map(({ icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
          

           {/* Content Area */}

          <div className="div_Contents">
            <div>
                <span className="footer__E-mail"> E-mail : </span>
                <a href="mailto:yourmail@gmail.com" className="footer-email">
                    info@borntocodeitsolutions.com
                </a>

                 <br></br>

                <span className="footer__Content"> Content : </span>
                <a href="mailto:yourmail@gmail.com" className="footer-email">
                    +91 939585 3427
                </a>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="footer__col-heading">Services</h4>
          <ul className="footer__nav-list">
            {services.map((service) => (
              <li key={service}>
                <a href="#" className="footer__nav-link">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="footer__col-heading">Company</h4>
          <ul className="footer__nav-list">
            {company.map((item) => (
              <li key={item}>
                <a href="#" className="footer__nav-link">{item}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Divider ── */}
      <hr className="footer__divider" />

      {/* ── Bottom Row ── */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 Born to Code IT Solutions. All rights reserved.
        </p>

        <div className="footer__legal-links">
          <a href="#" className="footer__legal-link">Privacy Policy</a>
          <a href="#" className="footer__legal-link">Terms of Use.</a>
        </div>
      </div>

    </footer>
  );
}