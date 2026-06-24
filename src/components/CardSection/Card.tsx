import "./Card.css";
import ContentWritingImg from "../../assets/Pages/Card/ContentWriting.png";
import Technical from "../../assets/Pages/Card/TechnicalSEO.png";
import SocialMedia from "../../assets/Pages/Card/SocialMedia.png";
import WebDev from "../../assets/Pages/Card/WebDev.png";
import ERP from "../../assets/Pages/Card/ERP.png";
import Marketing from "../../assets/Pages/Card/Marketing.png";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  page?: string;
}

interface CardSectionProps { onNavigate?: (page: string) => void;}

const cards: Card[] = [
  {
    id: 1,
    title: "Technical SEO",
    description:
      "Optimize your website's technical structure, speed, indexing, crawlability, and performance to improve search engine rankings and user experience.",
    image: Technical,
    page: "technical-seo",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Grow your brand presence, engage your audience, and increase leads through effective social media marketing strategies across multiple platforms.",
    image: SocialMedia,
    page: "social-media-marketing",
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Create high-quality, engaging, and SEO-friendly content that attracts your audience, builds trust, and drives business growth.",
    image: ContentWritingImg,
    page: "content-writing",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Build fast, responsive, and modern websites that deliver excellent user experiences and help your business grow online.",
    image: WebDev,
    page: "web-development",
  },
  {
    id: 5,
    title: "ERP",
    description:
      "Streamline and automate your business operations with a powerful ERP system that integrates inventory, sales, accounting, and management processes.",
    image: ERP,
    page: "erp",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Boost your online presence, generate quality leads, and grow your business with result-driven digital marketing strategies.",
    image: Marketing,
    page: "digital-marketing",
  },
];

const CardSection = ({ onNavigate }: CardSectionProps) => {
  return (
    <section className="card-section">

      {/* ── Section Header ── */}
      <div className="card-section__header">
        <h2 className="card-section__heading">
          Services Built to Grow Business{" "}
        </h2>
        <p className="card-section__subtext">
          <span>
          From technical SEO to full-scale ERP — we cover every layer of your
          digital presence with precision and purpose.</span>
        </p>
        <div className="card-section__divider" />
      </div>

      {/* ── Cards Grid ── */}
      <div className="card-section__grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card__image-wrapper">
              <img src={card.image} alt={card.title} className="card__image" />
              <div className="card__overlay" />
            </div>
            <div className="card__content">
              <h3 className="card__title">{card.title}</h3>
              <p className="card__description">{card.description}</p>
              <button
                className="card__btn"
                onClick={() => card.page && onNavigate && onNavigate(card.page)}
              >
                Explore →
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CardSection;