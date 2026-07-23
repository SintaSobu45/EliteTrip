import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo-wrap">
            <div className="footer-logo-circle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Vector Logo Icon matching Navbar */}
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#0b3820" />
                <path d="M12 24L20 14L28 24H12Z" fill="white" />
                <path d="M10 28H30" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="footer-brand-name" style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>
              Elite<span style={{ fontWeight: '400', color: '#4ade80' }}>Trip</span>
            </span>
          </div>

          <div className="footer-contact-info">
            <a href="tel:+910000000000" className="footer-contact-item">
              <span>+91 00000 00000</span>
            </a>
            <a href="mailto:support@elitetrip.in" className="footer-contact-item">
              <span>support@elitetrip.in</span>
            </a>
          </div>

          <div className="footer-socials">
            <a href="#facebook" className="social-icon-btn" aria-label="Facebook" style={{ textDecoration: "none" }}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#instagram" className="social-icon-btn" aria-label="Instagram" style={{ textDecoration: "none" }}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#youtube" className="social-icon-btn" aria-label="YouTube" style={{ textDecoration: "none" }}>
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Top Categories */}
        <div className="footer-col">
          <h3 className="footer-col-title">Top Categories</h3>
          <ul className="footer-links-list">
            <li><a href="#holiday-home" className="footer-link">Holiday Home</a></li>
            <li><a href="#resorts" className="footer-link">Resorts</a></li>
            <li><a href="#honeymoon-suites" className="footer-link">Honeymoon Suites</a></li>
            <li><a href="#house-boat" className="footer-link">House Boat</a></li>
          </ul>
        </div>

        {/* Top Collection */}
        <div className="footer-col">
          <h3 className="footer-col-title">Top collection</h3>
          <ul className="footer-links-list">
            <li><a href="#signature" className="footer-link">EliteTrip Signature Collection</a></li>
            <li><a href="#trending-honeymoon" className="footer-link">Trending Honeymoon Suites</a></li>
            <li><a href="#guest-favorite" className="footer-link">Guest Favorite</a></li>
            <li><a href="#unique-stays" className="footer-link">Unique Stays</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">Useful links</h3>
          <ul className="footer-links-list">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#gallery" className="footer-link">Gallery</a></li>
            {/* <li><a href="#hosting" className="footer-link">Try Hosting</a></li> */}
            <li><a href="#login" className="footer-link">Login</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3 className="footer-col-title">Support</h3>
          <ul className="footer-links-list">
            <li><a href="#contact" className="footer-link">Contact</a></li>
            <li><a href="#terms" className="footer-link">Terms &amp; Condition</a></li>
            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="#refund" className="footer-link">Refund &amp; Cancellation Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2026 EliteTrip. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;