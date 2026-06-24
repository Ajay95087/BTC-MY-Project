import { useState, useRef, useEffect } from 'react';
import './Navbar.css';


interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  const handleNav = (page: string) => {
    onNavigate(page);
    setDropOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
        if (dropRef.current && !dropRef.current.contains(e.target as Node))
        {
            setDropOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="btc-nav">
      <ul className="btc-links">
        <li><a href="/" onClick={(e) => 
          { e.preventDefault(); handleNav('home'); }}>Home</a>
        </li>

        <li><a href="#" onClick={(e) => 
          { e.preventDefault(); onNavigate('about-us'); }}>About Us </a>
        </li>
 
        {/* Dropdown */}
        <li className={`btc-dropdown ${dropOpen ? 'open' : ''}`} ref={dropRef}>
          <button className="btc-drop-btn" onClick={() => setDropOpen(!dropOpen)}>
            Services
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="btc-drop-menu">
            <a href="/" onClick={(e) => { e.preventDefault(); handleNav('technical-seo'); }}>Technical SEO</a>
            <a href="/" onClick={(e) => { e.preventDefault(); handleNav('social-media-marketing'); }}>Social Media Marketing</a>
            <a href="/" onClick={(e) => { e.preventDefault(); handleNav('content-writing'); }}>Content Writing</a>
            <div className="btc-drop-divider" />
            <a href="/" onClick={(e) => { e.preventDefault(); handleNav('web-development'); }}>Web Development</a>
            <a href="/" onClick={(e) => { e.preventDefault(); handleNav('erp'); }}>ERP</a>
            <a href="/" onClick={(e) => { e.preventDefault(); handleNav('digital-marketing'); }}>Digital Marketing</a>
          </div>
        </li>
        
        <li><a href="/" onClick={(e) => { e.preventDefault(); 
          handleNav('digital'); }}>Digital</a></li>

        <li><a href="#" onClick={(e) => 
          { e.preventDefault(); onNavigate('Blog'); }}> Blog </a></li>

        <li><a href="/" onClick={(e) =>{e.preventDefault();
          handleNav('FAQ');}}>FAQ</a></li>

        <li><a href="/" onClick={(e) => {e.preventDefault();
          handleNav('Contact');}}>Contact</a></li>
      </ul>
 
      <button className="btc-support" onClick={() => console.log('Support clicked')}>
        Support
      </button>
    </nav>
  );
};

export default Navbar;