import React, { useState } from 'react';
import {
  User,
  MapPin,
  Mail,
  Calendar,
  Phone,
  Navigation,
  Clock,
  Users,
  Compass,
  HeartHandshake,
  Send,
  Sparkles,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import './EnquirySection.css';

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    email: '',
    period: '',
    mobile: '',
    location: '',
    days: '',
    people: '',
    type: '',
    travelType: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="enquiry-master-section">
      <div className="enquiry-wrapper">

        {/* Left Visual & Branding Pane (Using High-Contrast Dark Slate/Navy Palette matching the pillars section) */}
        <div className="enquiry-hero-pane">
          <div className="pane-content-overlay">
            <div className="pane-badge">
              <Sparkles size={16} />
              <span>Soulful Travel Experts</span>
            </div>

            <h2 className="pane-headline">Let Us Design Your Dream Kerala Escape</h2>
            <p className="pane-desc">
              From misty Munnar tea plantations to the tranquil backwaters of Alleppey—tell us your vision, and our local experts will craft a bespoke journey just for you.
            </p>

            <div className="perks-grid">
              <div className="perk-badge-item">
                <CheckCircle2 size={18} />
                <span>100% Custom Itineraries</span>
              </div>
              <div className="perk-badge-item">
                <ShieldCheck size={18} />
                <span>Zero Hidden Costs</span>
              </div>
              <div className="perk-badge-item">
                <CheckCircle2 size={18} />
                <span>Dedicated Local Concierge</span>
              </div>
            </div>
          </div>

          {/* Copyright-Free Clean Unsplash Travel/Scenic Graphic */}
          <div className="pane-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
              alt="Serene Kerala landscape with palm trees and water"
            />
            <div className="image-fade-gradient"></div>
          </div>
        </div>

        {/* Right Form Pane */}
        <div className="enquiry-form-pane">
          <div className="form-pane-header">
            <h3>Start Planning Today</h3>
            <p>Fill out the quick questionnaire below and we&apos;ll be in touch within 2 hours.</p>
          </div>

          {isSubmitted ? (
            <div className="success-state-box">
              <div className="success-icon-wrap">
                <CheckCircle2 size={48} />
              </div>
              <h4>Enquiry Received Successfully!</h4>
              <p>Thank you, {formData.name || 'Traveler'}. Our luxury travel curator will reach out to your phone / email shortly with a customized proposal.</p>
              <button
                type="button"
                className="reset-form-btn"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '', destination: '', email: '', period: '',
                    mobile: '', location: '', days: '', people: '', type: '', travelType: ''
                  });
                }}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form className="modern-enquiry-form" onSubmit={handleSubmit}>

              <div className="form-grid-layout">

                {/* Name */}
                <div className="input-group-modern">
                  <User size={18} className="input-prefix-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Destination */}
                <div className="input-group-modern">
                  <MapPin size={18} className="input-prefix-icon" />
                  <input
                    type="text"
                    name="destination"
                    placeholder="Choice of Destination (e.g., Munnar)"
                    value={formData.destination}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="input-group-modern">
                  <Mail size={18} className="input-prefix-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Period of Travel */}
                <div className="input-group-modern">
                  <Calendar size={18} className="input-prefix-icon" />
                  <input
                    type="text"
                    name="period"
                    placeholder="Travel Period (MM/DD/YYYY)"
                    value={formData.period}
                    onChange={handleChange}
                  />
                </div>

                {/* Mobile */}
                <div className="input-group-modern">
                  <Phone size={18} className="input-prefix-icon" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Current Location */}
                <div className="input-group-modern">
                  <Navigation size={18} className="input-prefix-icon" />
                  <input
                    type="text"
                    name="location"
                    placeholder="Your Current City/Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                {/* Number of Days */}
                <div className="input-group-modern">
                  <Clock size={18} className="input-prefix-icon" />
                  <input
                    type="number"
                    name="days"
                    placeholder="Number of Days"
                    min="1"
                    value={formData.days}
                    onChange={handleChange}
                  />
                </div>

                {/* Number of People */}
                <div className="input-group-modern">
                  <Users size={18} className="input-prefix-icon" />
                  <input
                    type="number"
                    name="people"
                    placeholder="Number of Travelers"
                    min="1"
                    value={formData.people}
                    onChange={handleChange}
                  />
                </div>

                {/* Type Selection */}
                <div className="input-group-modern select-wrap">
                  <Compass size={18} className="input-prefix-icon" />
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="">Select Stay or Package</option>
                    <option value="Stay">Exclusive Stay</option>
                    <option value="Package">Complete Package</option>
                  </select>
                </div>

                {/* Travel Type Selection */}
                <div className="input-group-modern select-wrap">
                  <HeartHandshake size={18} className="input-prefix-icon" />
                  <select
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleChange}
                  >
                    <option value="">Travel Companion Style</option>
                    <option value="Family">Family Vacation</option>
                    <option value="Couple">Romantic Couple Getaway</option>
                    <option value="Friends">Friends Trip / Group</option>
                  </select>
                </div>

              </div>

              <button type="submit" className="submit-action-btn">
                <span>Send Enquiry Now</span>
                <Send size={18} />
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default EnquirySection;