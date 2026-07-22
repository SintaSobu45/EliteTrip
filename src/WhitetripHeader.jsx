import React, { useState, useEffect } from 'react';
import {
  Home,
  Ship,
  Heart,
  Building2,
  Sparkles
} from 'lucide-react';
import './WhitetripHeader.css';

const WhitetripHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState('Honeymoon Suites');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const categories = [
    { name: 'Holiday Homes', icon: <Home size={22} />, count: '120+ Stays' },
    { name: 'Houseboats', icon: <Ship size={22} />, count: '45+ Cruises' },
    { name: 'Honeymoon Suites', icon: <Heart size={22} />, count: '80+ Retreats' },
    { name: 'Resorts', icon: <Building2 size={22} />, count: '60+ Properties' },
  ];

  return (
    <div
      className="whitetrip-header-container"
      style={{ backgroundImage: `url('${backgroundImages[currentBgIndex]}')` }}
    >
      <main className="whitetrip-hero-content">
        <div className="whitetrip-hero-badge">
          <Sparkles size={14} />
          Handpicked Luxury Stays Across Kerala
        </div>

        <h1 className="whitetrip-hero-title">
          Find Your Perfect Escape
        </h1>
        <p className="whitetrip-hero-subtitle">
          Immerse yourself in breathtaking landscapes, curated houseboats, and private luxury resorts.
        </p>

        {/* Category Quick Selector Chips */}
        <div className="whitetrip-categories-wrapper">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`whitetrip-category-chip ${isSelected ? 'active' : ''}`}
              >
                <div className="whitetrip-chip-icon">{cat.icon}</div>
                <div className="whitetrip-chip-text">
                  <span className="name">{cat.name}</span>
                  <span className="count">{cat.count}</span>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* Background Slide Indicators */}
      <div className="whitetrip-bg-indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`whitetrip-bg-dot ${currentBgIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentBgIndex(index)}
            aria-label={`Slide background ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhitetripHeader;