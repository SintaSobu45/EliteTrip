import React, { useState } from 'react';
import { Award, Heart, Shield, Sparkles, ArrowRight, Check } from 'lucide-react';
import './Whywhitetrip.css';

const Whywhitetrip = () => {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      title: 'Handcrafted Heritage & Luxury',
      subtitle: 'Uncompromising Quality',
      description: 'Every property on EliteTrip goes through a rigorous curation process. We handpick private estates, secluded houseboats, and romantic retreats that offer genuine local architecture blended with modern five-star luxury.',
      stat: '100%',
      statLabel: 'Inspected & Verified',
      icon: <Award size={24} />
    },
    {
      title: 'Direct Host Connections',
      subtitle: 'Transparent & Personal',
      description: 'No hidden booking markups or corporate middlemen. We connect you directly with passionate property owners who know the best hidden spots, local cuisine, and secret trails across Kerala.',
      stat: '0%',
      statLabel: 'Hidden Commission Fees',
      icon: <Heart size={24} />
    },
    {
      title: 'Soulful & Sustainable',
      subtitle: 'Eco-Conscious Travel',
      description: 'We believe travel should heal both you and the environment. Our properties actively support local communities, champion eco-friendly practices, and preserve the pristine beauty of God\'s Own Country.',
      stat: '45+',
      statLabel: 'Local Communities Empowered',
      icon: <Sparkles size={24} />
    }
  ];

  return (
    <section className="whitetrip-pillar-section">
      <div className="whitetrip-pillar-container">

        {/* Section Header */}
        <div className="pillar-header-group">
          <div className="pillar-badge">
            <Shield size={14} />
            <span>The EliteTrip Difference</span>
          </div>
          <h2 className="pillar-main-title">Redefining How You Experience Kerala</h2>
          <p className="pillar-subtitle">
            More than just a booking platform—we are your gateway to authentic, soulful luxury travel.
          </p>
        </div>

        {/* Interactive Tabbed Showcase */}
        <div className="pillar-showcase-box">

          {/* Navigation Controls / Selectors */}
          <div className="pillar-tabs-list">
            {highlights.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pillar-tab-btn ${activeTab === index ? 'active' : ''}`}
              >
                <div className="tab-icon-wrap">{item.icon}</div>
                <div className="tab-text-info">
                  <span className="tab-title">{item.title}</span>
                  <span className="tab-subtitle">{item.subtitle}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Display Card */}
          <div className="pillar-content-pane">
            <div className="pane-inner-animation" key={activeTab}>
              <div className="pane-badge-tag">
                <Sparkles size={14} />
                <span>Core Pillar 0{activeTab + 1}</span>
              </div>

              <h3 className="pane-title">{highlights[activeTab].title}</h3>
              <p className="pane-description">{highlights[activeTab].description}</p>

              <div className="pane-divider" />

              <div className="pane-stats-row">
                <div className="stat-number-box">
                  <span className="stat-val">{highlights[activeTab].stat}</span>
                  <span className="stat-lbl">{highlights[activeTab].statLabel}</span>
                </div>

                <div className="pane-perks-list">
                  <div className="perk-row"><Check size={16} /> Curated for deep relaxation</div>
                  <div className="perk-row"><Check size={16} /> 24/7 dedicated concierge</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Whywhitetrip;