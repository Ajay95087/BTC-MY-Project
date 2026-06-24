import './Home.css';
import homeimg from '../../assets/image/image.png';
import Card from '../CardSection/Card';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const items = ['About Us', 'Blog', 'Services', 'Digital', 'Contact'];

  if (items.length === 0) {
    return <p style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>No items available.</p>;
  }

  return (
    
    <div>
      {/* ── HERO ── */}
      <div className="home-container">
        <img src={homeimg} alt="Home" className="home-image" />

        <div className="overlay-text">
          <h1 className="home-title">Born to Code IT Solutions</h1>
          <p className="home-description">
            Born To Code IT Solutions Private Limited
Provides Microsoft Dynamics 365 expert consultants. We develop software and ERP for all kinds of businesses. We integrate hardware with business software and ERP.
          </p>
          <div className="hero-actions">
            <button className="btn-success">See our work</button>
            <button className="btn-danger">Get in touch</button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-cue">
          <span>scroll</span>
          <svg viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* CARD SECTION */}
      
      <Card onNavigate={onNavigate} />


      {/* ── CONTENT ── */}
      <div className="content-section">
        <p className="section-label">What we offer</p>

        <ul className="list-group">
          {items.map((item) => (
            <li className="list-group-item" key={item}>{item}</li>
          ))}
        </ul>

        <div className="section-divider">
          <span>also on</span>
        </div>

        <h2 className="youtube-heading">IT Solutions</h2>

        <div className="actions-row">
        <p>Application Development We 
          develop software and ERP applications
           for different businesses. 
           We are an expert group of developers 
           with capabilities ranging from business 
           analysis to requirement gathering to delivery
            and post-live support.</p>

        </div>
      </div>
    </div>
  );
};

export default Home;