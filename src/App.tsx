import { useState } from 'react';
import type { ComponentType } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import TechnicalSEO from './Pages/SEO/TechnicalSEO/TechnicalSEO';
import SocialMediaMarketing from './Pages/SEO/SocialMediaMarketing/SocialMedia';
import ContentWriting from './Pages/SEO/ContentWriting/ContentWriting';
import WebDevelopment from './Pages/SEO/WebDevelopment/WebDevelopment';
import ERP from './Pages/SEO/ERP/ERP';
import DigitalMarketing from './Pages/SEO/DigitalMarketing/DigitalMarketing';
import Blog from './Pages/Blog/Blog';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/ContactSection/Contact';



const HeaderComponent = Header as ComponentType<{ onNavigate: (p: string) => void }>;

const App = () => {
  const [page, setPage] = useState('home');

  const goHome = () => { setPage('home'); window.scrollTo(0, 0); };
  const navigate = (p: string) => { setPage(p); window.scrollTo(0, 0); };


  const renderPage = () => {
    if (page === 'about-us')               return <AboutUs onNavigate={navigate} />;
    if (page === 'Blog')               return <Blog onNavigate={navigate} />;
    if (page === 'FAQ')               return <FAQ onNavigate={navigate} />;
    if (page === 'Contact')               return <Contact onNavigate={navigate} />;
    if (page === 'technical-seo')          return <TechnicalSEO onBack={goHome} />;
    if (page === 'social-media-marketing') return <SocialMediaMarketing onBack={goHome} />;
    if (page === 'content-writing')        return <ContentWriting onBack={goHome} />;
    if (page === 'web-development')        return <WebDevelopment onBack={goHome} />;
    if (page === 'erp')                    return <ERP onBack={goHome} />;
    if (page === 'digital-marketing')      return <DigitalMarketing onBack={goHome} />;
    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="container">
      <HeaderComponent onNavigate={navigate} />
      {renderPage()}
      
      <Footer />
    </div>
  );
};

export default App;