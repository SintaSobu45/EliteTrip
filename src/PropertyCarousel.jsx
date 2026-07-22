import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PropertyCarousel.css';

const PropertyCarousel = ({ title, items }) => {
  return (
    <section className="property-section">
      <div className="property-header">
        <h2 className="property-title">{title}</h2>
        <div className="property-header-actions">
          <button className="property-explore-btn">Explore</button>
        </div>
      </div>

      <div className="property-carousel-container">
        <div className="property-track">
          {/* Duplicate array to create a seamless infinite loop effect */}
          {[...items, ...items].map((item, index) => (
            <div key={index} className="property-card">
              <div className="property-card-img-wrap">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="property-card-body">
                <h3 className="property-card-name" title={item.name}>{item.name}</h3>
                <p className="property-card-details">{item.details}</p>
                <p className="property-card-price">{item.price}</p>
                <span className="property-badge">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;