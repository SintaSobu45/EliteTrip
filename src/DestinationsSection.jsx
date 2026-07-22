import React from 'react';
import './DestinationsSection.css';

const DestinationsSection = () => {
  const showcaseCards = [
    {
      title: 'Holiday Homes',
      location: 'Global Estates',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Honeymoon Suites',
      location: 'Romantic Retreats',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'House Boats',
      location: 'Serene Waters',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Resorts',
      location: 'Luxury Escapes',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <>
      <section className="category-cards-section">
        <div className="section-header-box">
          <span className="section-subtitle">Curated Experiences</span>
          <h2 className="section-main-heading">Your Favourite Destinations</h2>
        </div>

        <div className="category-cards-grid">
          {showcaseCards.map((card, index) => (
            <div key={card.title} className={`category-photo-card shape-variant-${index + 1}`}>
              <img src={card.image} alt={card.title} />

              {/* Floating Top Badge */}
              <div className="category-top-badge">
                <span>{card.location}</span>
              </div>

              {/* Bottom Glass Content Card */}
              <div className="category-photo-overlay">
                <div className="category-text-content">
                  <h3 className="category-photo-title">{card.title}</h3>
                </div>
                <button className="category-explore-btn">
                  <span>Explore</span>
                  <svg className="explore-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DestinationsSection;