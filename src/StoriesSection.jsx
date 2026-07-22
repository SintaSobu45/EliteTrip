import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';

const guestReviews = [
  {
    text: "The resort was absolutely beautiful. Perfect combination, best of experiences, support was excellent. From start to finish the experience has been superb. Customer service greatly appreciated.",
    author: "Dr. Saritha Rajeev",
    location: "Kochi",
    rating: 5
  },
  {
    text: "An unforgettable stay! The view from the balcony was breathtaking and the room amenities exceeded our expectations. Highly recommended for families.",
    author: "Rahul Menon",
    location: "Bangalore",
    rating: 5
  },
  {
    text: "Seamless booking process and wonderful hospitality. The caretaker was very helpful throughout our stay in Vagamon.",
    author: "Ananya Sharma",
    location: "Chennai",
    rating: 5
  }
];

const hostReviews = [
  {
    text: "Partnering with EliteTrip has been one of the best decisions for my property. From day one, their team has handled everything with clarity, care, and professional excellence.",
    author: "Siddique Oliyath",
    experience: "3 Years Hosting",
    rating: 5
  },
  {
    text: "Listing my villa with EliteTrip significantly boosted my occupancy rates. Their platform brings in genuine guests who treat properties with utmost respect.",
    author: "Mathew Kurian",
    experience: "5 Years Hosting",
    rating: 5
  },
  {
    text: "Professional management and timely payouts. As a host, working with their supportive team makes property management completely stress-free.",
    author: "Priya Nair",
    experience: "2 Years Hosting",
    rating: 5
  }
];

const StoriesSection = () => {
  const [activeTab, setActiveTab] = useState('guests');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentList = activeTab === 'guests' ? guestReviews : hostReviews;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTab, currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % currentList.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + currentList.length) % currentList.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <style>{`
        .stories-modern-section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          font-family: inherit;
        }

        .stories-top-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 40px;
        }

        .stories-badge {
          background: #eff6ff;
          color: #3b82f6;
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .stories-main-heading {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .google-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
        }

        .google-trust-badge .stars-group {
          color: #fbbf24;
          display: flex;
          gap: 2px;
        }

        /* Toggle Tabs */
        .stories-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .story-tab-btn {
          background: #f1f5f9;
          border: none;
          color: #64748b;
          padding: 10px 24px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .story-tab-btn.active {
          background: #1e293b;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(30, 41, 59, 0.2);
        }

        /* Showcase Card Container */
        .story-showcase-card {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 28px;
          padding: 48px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.3);
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .story-bg-pattern {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 250px;
          height: 250px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
        }

        .story-card-inner {
          position: relative;
          z-index: 2;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .story-card-inner.fade {
          opacity: 0;
          transform: translateY(10px);
        }

        .story-quote-icon {
          color: #3b82f6;
          margin-bottom: 16px;
        }

        .story-quote-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #f8fafc;
          margin: 0 0 24px 0;
          font-weight: 400;
          max-width: 900px;
        }

        .story-author-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
        }

        .story-author-info h4 {
          margin: 0 0 4px 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .story-author-info p {
          margin: 0;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .story-navigation-controls {
          display: flex;
          gap: 10px;
        }

        .story-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .story-nav-btn:hover {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        /* Dots Indicator */
        .story-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .story-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: width 0.3s ease, background 0.3s ease;
        }

        .story-dot.active {
          width: 24px;
          background: #3b82f6;
        }

        @media (max-width: 768px) {
          .story-showcase-card {
            padding: 28px;
          }
          .stories-main-heading {
            font-size: 1.75rem;
          }
          .story-quote-text {
            font-size: 1rem;
          }
          .story-author-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="stories-modern-section">
        <div className="stories-top-header">
          <div className="stories-badge">
            <HeartHandshake size={14} />
            Community Love
          </div>
          <h2 className="stories-main-heading">Stories of Our Guests & Hosts</h2>
          <div className="google-trust-badge">
            <svg height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            <span>Google Rating <strong>4.9</strong></span>
            <div className="stars-group">
              <Star size={14} fill="#fbbf24" />
              <Star size={14} fill="#fbbf24" />
              <Star size={14} fill="#fbbf24" />
              <Star size={14} fill="#fbbf24" />
              <Star size={14} fill="#fbbf24" />
            </div>
          </div>
        </div>

        <div className="stories-tabs">
          <button
            className={`story-tab-btn ${activeTab === 'guests' ? 'active' : ''}`}
            onClick={() => { setActiveTab('guests'); setCurrentIndex(0); }}
          >
            What Guests Say
          </button>
          <button
            className={`story-tab-btn ${activeTab === 'hosts' ? 'active' : ''}`}
            onClick={() => { setActiveTab('hosts'); setCurrentIndex(0); }}
          >
            What Hosts Say
          </button>
        </div>

        <div className="story-showcase-card">
          <div className="story-bg-pattern"></div>

          <div className={`story-card-inner ${isAnimating ? 'fade' : ''}`}>
            <div className="story-quote-icon">
              <Quote size={36} />
            </div>
            <p className="story-quote-text">
              &ldquo;{currentList[currentIndex].text}&rdquo;
            </p>

            <div className="story-author-row">
              <div className="story-author-info">
                <h4>{currentList[currentIndex].author}</h4>
                <p>{currentList[currentIndex].location || currentList[currentIndex].experience}</p>
              </div>

              <div className="story-navigation-controls">
                <button className="story-nav-btn" onClick={handlePrev} aria-label="Previous story">
                  <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button className="story-nav-btn" onClick={handleNext} aria-label="Next story">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="story-dots">
          {currentList.map((_, idx) => (
            <button
              key={idx}
              className={`story-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default StoriesSection;