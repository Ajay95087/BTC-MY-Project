import { useState } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navebar';

interface HeaderProps {
  onNavigate: (page: string) => void;
}
const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false); 
  };

  return (
    <header className="btc-header">
      <div className="btc-header-inner">

        {/* Logo */}
        <a className="btc-logo" href="/">
          <span className="btc-logo-main">BTC</span>
          <span className="btc-logo-sub">Born to Code</span>
        </a>


        {/* Desktop Navbar */}
        <Navbar onNavigate={onNavigate} />


        {/* Hamburger — mobile only */}
        <button
          className="btc-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Gold accent line */}
      <div className="btc-accent-bar" />

      {/* Mobile Menu */}
      <div className={`btc-mobile-menu ${mobileOpen ? 'open' : ''}`}>
         <a href="/" onClick={(e) => { e.preventDefault();
           handleNav('home'); }}>Home</a>

        <a href="/" onClick={(e) => {e.preventDefault();
          handleNav('about-us');}}>About-Us</a>


        <p className="btc-mobile-label">Services</p>
        <div className="btc-mobile-section">
          <a href="/" onClick={(e) => { e.preventDefault(); handleNav('technical-seo'); }}>Technical SEO</a>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNav('social-media-marketing'); }}>Social Media Marketing</a>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNav('content-writing'); }}>Content Writing</a>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNav('web-development'); }}>Web Development</a>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNav('erp'); }}>ERP</a>
          <a href="/" onClick={(e) => { e.preventDefault(); handleNav('digital-marketing'); }}>Digital Marketing</a>
        </div>
        <li><a href="/" onClick={(e) => { e.preventDefault(); 
          handleNav('digital'); }}>Digital</a></li>

        <a href="/" onClick={(e) => {e.preventDefault();
          handleNav('Blog');}}>Blog</a>

        <a href="/" onClick={(e) =>{e.preventDefault();
          handleNav('FAQ');}}>FAQ</a>

        <a href="/" onClick={(e) => {e.preventDefault();
          handleNav('Contact');}}>Contact</a>

        <button className="btc-mobile-support">Support</button>
      </div>
    </header>
  );
};

export default Header;