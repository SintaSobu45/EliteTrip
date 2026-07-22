import React, { useState, useEffect } from 'react';
import { Phone, Headphones, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle disabling body scroll when the mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`whitetrip-navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo Text Only */}
        <div className="whitetrip-logo-group">
          <a href="#home" className="whitetrip-logo-circle" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{
              fontWeight: '800',
              fontSize: '22px',
              color: '#ffffff',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.4)'
            }}>
              Elite<span style={{ fontWeight: '400', color: '#4ade80' }}>Trip</span>
            </span>
          </a>
        </div>

        {/* Navigation Links (Hidden on mobile via CSS) */}
        <nav className="whitetrip-nav-links">
          <a href="#holiday-homes">Holiday Homes</a>
          <a href="#honeymoon-suites">Honeymoon Suites</a>
          <a href="#houseboats">Houseboats</a>
          <a href="#resorts">Resorts</a>
          <a href="#help" className="whitetrip-help-link">
            <Headphones size={16} /> Help
          </a>
        </nav>

        {/* Right Actions: Call Button & Hamburger */}
        <div className="whitetrip-nav-actions">
          <a href="tel:+917561022227" className="whitetrip-call-btn" aria-label="Call Us">
            <Phone size={16} />
            <span>Call us on +91 1234567212</span>
          </a>
          <button
            className="whitetrip-menu-btn"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Sidebar */}
      <div className={`whitetrip-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`whitetrip-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>

          {/* Drawer Top Header (Login / Signup & Close) */}
          <div className="drawer-header">
            <div className="drawer-auth-links">
              <a href="#login" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
              <span className="auth-separator">|</span>
              <a href="#signup" onClick={() => setIsMobileMenuOpen(false)}>Signup</a>
            </div>
            <button className="drawer-close-btn" aria-label="Close Menu" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="drawer-nav-links">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#holiday-home" onClick={() => setIsMobileMenuOpen(false)}>Holiday Home</a>
            <a href="#resorts" onClick={() => setIsMobileMenuOpen(false)}>Resorts</a>
            <a href="#honeymoon-suites" onClick={() => setIsMobileMenuOpen(false)}>Honeymoon Suites</a>
            <a href="#house-boat" onClick={() => setIsMobileMenuOpen(false)}>House Boat</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>

          {/* Drawer Footer Action */}
          <div className="drawer-footer">
            <a href="#hosting" className="drawer-hosting-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Try Hosting
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;