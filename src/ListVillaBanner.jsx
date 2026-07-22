import React, { useState } from 'react';
import { Compass, Calendar, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import './ListVillaBanner.css';

const WhitetripPlannerBanner = () => {
  const [destination, setDestination] = useState('Munnar');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuickPlan = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="planner-banner-section">
      <div className="planner-banner-card">
        {/* Left Side: Engaging Text & Highlights */}
        <div className="planner-banner-content">
          <div className="planner-badge">
            <Sparkles size={16} />
            <span>AI Itinerary Concierge</span>
          </div>

          <h2 className="planner-title">
            Not Sure Where to Go? Let Us Craft Your Ideal Escape.
          </h2>

          <p className="planner-desc">
            Skip the planning stress. Tell us your dream vibe, and our Kerala travel experts will instantly curate a custom luxury itinerary tailored just for you.
          </p>

          <div className="planner-perks">
            <div className="perk-item">
              <CheckCircle2 size={18} />
              <span>Handpicked Hidden Stays</span>
            </div>
            <div className="perk-item">
              <CheckCircle2 size={18} />
              <span>Zero Planning Fees</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Quick-Plan Widget */}
        <div className="planner-widget-wrap">
          {!isSubmitted ? (
            <form onSubmit={handleQuickPlan} className="planner-form">
              <div className="form-header">
                <Compass size={22} />
                <h3>Quick Custom Trip Builder</h3>
              </div>

              <div className="form-group">
                <label>Preferred Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="planner-select"
                >
                  <option value="Munnar">Munnar Misty Hills</option>
                  <option value="Alleppey">Alleppey Houseboat Cruise</option>
                  <option value="Wayanad">Wayanad Rainforest Retreat</option>
                  <option value="Varkala">Varkala Cliffside Villas</option>
                </select>
              </div>

              <div className="form-group">
                <label>What's your vibe?</label>
                <div className="vibe-pills">
                  <span className="vibe-pill active">Romance</span>
                  <span className="vibe-pill">Relaxation</span>
                  <span className="vibe-pill">Nature</span>
                </div>
              </div>

              <button type="submit" className="planner-submit-btn">
                <Calendar size={18} />
                <span>Get Free Custom Itinerary</span>
              </button>
            </form>
          ) : (
            <div className="planner-success-state">
              <div className="success-icon">
                <CheckCircle2 size={40} />
              </div>
              <h3>Itinerary Request Received!</h3>
              <p>Our concierge is crafting your custom trip for <strong>{destination}</strong>. We'll reach out via WhatsApp shortly.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="planner-reset-btn"
              >
                Plan Another Trip
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhitetripPlannerBanner;