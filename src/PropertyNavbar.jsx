import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyNavbar() {
  return (
    <>
      <style>{`
        .property-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #1e293b; /* Modern slate dark color */
          color: white;
          padding: 14px 24px;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .property-navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .property-brand-logo {
          text-decoration: none;
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .property-brand-circle {
          width: 36px;
          height: 36px;
          background: #3b82f6; /* Vibrant modern blue accent */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .property-brand-text {
          color: white;
        }

        .property-back-btn {
          color: white;
          text-decoration: none;
          background-color: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.4);
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          margin-right: 24px;
        }

        .property-back-btn:hover {
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
      `}</style>

      <header className="property-navbar">
        <div className="property-navbar-container">
          {/* Distinct Brand Identity with a Slate & Blue Palette */}
          <Link to="/" className="property-brand-logo">
            <div className="property-brand-circle">E</div>
            <span className="property-brand-text">EliteTrip</span>
          </Link>

          {/* Back Button with New Accent Theme */}
          <Link to="/" className="property-back-btn">
            ← Back to Home
          </Link>
        </div>
      </header>
    </>
  );
}