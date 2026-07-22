import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyNavbar from './PropertyNavbar';

export default function PropertyDetail() {
  const { slug } = useParams();

  // Booking & Modal States
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const basePricePerNight = 12500;
  const extraGuestFee = 1200;
  const standardGuests = 4;

  const totalGuests = adults + children;
  const extraGuestsCount = Math.max(0, totalGuests - standardGuests);
  const calculatedAmount = basePricePerNight + (extraGuestsCount * extraGuestFee);

  const galleryImages = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80"
  ];

  const handleBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      alert(`Successfully booked ${slug ? slug.replace(/-/g, ' ') : 'The Colonial Plantation Manor'} for ${totalGuests} guests! Total: ₹${calculatedAmount.toLocaleString()}`);
    }, 100);
  };

  return (
    <>
      <PropertyNavbar />

      <div style={{ minHeight: '100vh', backgroundColor: '#fcfbfa', color: '#2c2c2c', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }}>

        {/* Global Styles for Mobile Responsiveness & Layout Control */}
        <style>{`
          * { box-sizing: border-box; }
          
          .property-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 100px 24px 80px 24px;
          }

          .property-hero-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 16px;
            margin-bottom: 36px;
            border-radius: 12px;
            overflow: hidden;
          }

          .hero-main-img {
            height: 480px;
            position: relative;
            cursor: pointer;
            overflow: hidden;
          }
          .hero-main-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .hero-main-img:hover img {
            transform: scale(1.02);
          }

          .hero-side-stack {
            display: grid;
            grid-template-rows: 1fr 1fr;
            gap: 16px;
            height: 480px;
          }

          .hero-sub-img {
            position: relative;
            cursor: pointer;
            overflow: hidden;
            border-radius: 8px;
          }
          .hero-sub-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .hero-sub-img:hover img {
            transform: scale(1.02);
          }

          .property-main-layout {
            display: grid;
            grid-template-columns: 1fr 420px;
            gap: 48px;
            align-items: start;
          }

          .amenities-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .cottage-profile-card {
            border: 1px solid #e3dec3;
            border-radius: 12px;
            padding: 32px;
            background-color: #ffffff;
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 28px;
            align-items: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          }

          .booking-sidebar-wrapper {
            position: sticky;
            top: 96px;
          }

          /* Mobile Gallery Button Visibility Logic */
          .mobile-gallery-btn {
            display: none;
          }

          /* Responsive Breakpoints */
          @media (max-width: 1024px) {
            .property-main-layout {
              grid-template-columns: 1fr !important;
            }
            .booking-sidebar-wrapper {
              position: static !important;
              margin-top: 24px;
            }
          }

          @media (max-width: 768px) {
            .property-container {
              padding: 80px 16px 60px 16px;
            }
            .property-hero-grid {
              grid-template-columns: 1fr !important;
              height: auto !important;
            }
            .hero-main-img {
              height: 320px !important;
              border-radius: 8px;
            }
            .hero-side-stack {
              display: none !important;
            }
            .mobile-gallery-btn {
              display: flex !important;
            }
            .cottage-profile-card {
              grid-template-columns: 1fr !important;
            }
            .amenities-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>

        <div className="property-container">

          {/* Title Header Section */}
          <div style={{ marginBottom: '28px', borderBottom: '1px solid #e3dec3', paddingBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontStyle: 'italic', color: '#8c7853', fontSize: '1.05rem', letterSpacing: '0.04em' }}>
                Heritage Collection &bull; Estate #08
              </span>
              <span style={{ backgroundColor: '#8c7853', color: '#ffffff', padding: '3px 10px', borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Verified Signature Stay
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '400', fontFamily: 'Georgia, serif', color: '#1a1a1a', margin: '0 0 10px 0', lineHeight: '1.15' }}>
              {slug ? slug.replace(/-/g, ' ') : 'The Colonial Plantation Manor'}
            </h1>
            <p style={{ fontFamily: 'sans-serif', fontSize: '1rem', color: '#666666', margin: 0 }}>
              Munnar Mist Valleys, Kerala, India &bull; Nestled amidst 200 acres of organic cardamom &amp; tea plantations.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="property-hero-grid">
            <div className="hero-main-img" onClick={() => { setActiveImageIndex(0); setIsGalleryOpen(true); }}>
              <img src={galleryImages[0]} alt="Estate View" />

              {/* Mobile View All Photos Overlay Badge (Visible only on mobile) */}
              <div
                className="mobile-gallery-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(0);
                  setIsGalleryOpen(true);
                }}
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontFamily: 'sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                <span>📷</span> View All Photos ({galleryImages.length})
              </div>
            </div>

            <div className="hero-side-stack">
              <div className="hero-sub-img" onClick={() => { setActiveImageIndex(1); setIsGalleryOpen(true); }}>
                <img src={galleryImages[1]} alt="Estate Interior" />
              </div>
              <div className="hero-sub-img" onClick={() => { setActiveImageIndex(2); setIsGalleryOpen(true); }}>
                <img src={galleryImages[2]} alt="Estate Balcony" style={{ filter: 'brightness(0.85)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontFamily: 'sans-serif', fontWeight: '600', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                  View All Photos ({galleryImages.length})
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout Grid (Content Left, Sticky Sidebar Right) */}
          <div className="property-main-layout">

            {/* Left Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', minWidth: 0 }}>

              {/* Cottage Profile Card */}
              <div className="cottage-profile-card">
                <div>
                  <span style={{ fontFamily: 'sans-serif', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8c7853', fontWeight: '700', display: 'block', marginBottom: '8px' }}>Accommodation Profile</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '400', color: '#1a1a1a', margin: '0 0 12px 0', fontFamily: 'Georgia, serif' }}>Private Heritage Cottage</h3>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '0.88rem', color: '#555555', lineHeight: '1.7', margin: '0 0 18px 0' }}>
                    Constructed in 1928 with Burma teak wood and granite stonework, restored meticulously to offer timeless luxury alongside modern wellness privileges.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontFamily: 'sans-serif' }}>
                    <span style={{ fontSize: '0.75rem', background: '#f4efe6', padding: '5px 10px', borderRadius: '4px', color: '#444' }}>🛏️ 2 Master Suites</span>
                    <span style={{ fontSize: '0.75rem', background: '#f4efe6', padding: '5px 10px', borderRadius: '4px', color: '#444' }}>🔥 Fireplace Lounge</span>
                    <span style={{ fontSize: '0.75rem', background: '#f4efe6', padding: '5px 10px', borderRadius: '4px', color: '#444' }}>🌿 Valley Verandah</span>
                  </div>
                </div>
                <div style={{ height: '240px', borderRadius: '8px', overflow: 'hidden', width: '100%' }}>
                  <img src={galleryImages[3]} alt="Cottage Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Host Curator Note */}
              <div style={{ backgroundColor: '#f4efe6', padding: '32px', borderRadius: '10px', borderLeft: '4px solid #8c7853' }}>
                <span style={{ fontFamily: 'sans-serif', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8c7853', fontWeight: '700', display: 'block', marginBottom: '8px' }}>The Curator’s Note</span>
                <blockquote style={{ margin: 0, fontSize: '1.08rem', fontStyle: 'italic', lineHeight: '1.7', color: '#2c2c2c' }}>
                  "We welcome you not merely as visitors, but as custodians of our family’s century-old mountain legacy. Here, time slows down to the rhythm of rustling leaves and brewing estate teas."
                </blockquote>
                <div style={{ marginTop: '14px', fontFamily: 'sans-serif', fontSize: '0.82rem', fontWeight: '700', color: '#555' }}>
                  &mdash; Commander &amp; Mrs. Thomas, Estate Owners
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '400', marginBottom: '20px', color: '#1a1a1a' }}>Estate Amenities &amp; Privileges</h2>
                <div className="amenities-grid">
                  {[
                    { title: 'Guided Plantation Walk', icon: '🌿' },
                    { title: 'Heated Infinity Pool', icon: '🏊' },
                    { title: 'Organic Farm-to-Table', icon: '🍲' },
                    { title: 'Bonfire & Acoustic Eve', icon: '🔥' },
                    { title: 'In-house Spa Therapy', icon: '💆' },
                    { title: 'High-speed Fiber Wi-Fi', icon: '📶' }
                  ].map((amenity, idx) => (
                    <div key={idx} style={{ border: '1px solid #e3dec3', padding: '18px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#ffffff' }}>
                      <span style={{ fontSize: '1.4rem' }}>{amenity.icon}</span>
                      <span style={{ fontFamily: 'sans-serif', fontSize: '0.86rem', fontWeight: '600', color: '#333' }}>{amenity.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Description */}
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '400', marginBottom: '16px', color: '#1a1a1a' }}>The Heritage Experience</h2>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.92rem', lineHeight: '1.8', color: '#555555', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <p style={{ margin: 0 }}>
                    Perched 5,500 feet above sea level, The Colonial Plantation Manor offers uninterrupted vistas of emerald green mist-laden hills. Designed for discerning travelers seeking profound privacy, soulful quietude, and bespoke hospitality.
                  </p>
                  <p style={{ margin: 0 }}>
                    Every culinary creation served at our dining pavilion features hand-plucked estate spices and organic vegetables harvested from our own hillside greenhouses. Enjoy personalized butler service, curated tea-tasting sessions, and timeless evenings by the stone hearth.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sticky Booking Sidebar Column */}
            <div className="booking-sidebar-wrapper">
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e3dec3', borderRadius: '12px', boxShadow: '0 16px 40px rgba(0,0,0,0.04)', overflow: 'hidden' }}>

                {/* Header Ticket Style */}
                <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '22px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <div>
                    <span style={{ fontFamily: 'sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#b3a388', display: 'block', marginBottom: '3px' }}>Tariff Structure</span>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>Estate Manor Villa</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', color: '#d4af37' }}>₹ {basePricePerNight.toLocaleString()}</span>
                    <span style={{ fontFamily: 'sans-serif', fontSize: '0.68rem', color: '#b3a388', display: 'block' }}>Per Night</span>
                  </div>
                </div>

                <div style={{ padding: '24px' }}>

                  {/* Occupancy Notice */}
                  <div style={{ backgroundColor: '#f4efe6', border: '1px solid #e3dec3', borderRadius: '6px', padding: '12px 14px', marginBottom: '20px', fontFamily: 'sans-serif' }}>
                    <p style={{ fontSize: '0.8rem', color: '#444444', margin: 0, lineHeight: '1.5' }}>
                      Includes base occupancy for <b>4 guests</b>. Additional guests (up to 8 max) are accommodated at <b>₹1,200 / night</b> per guest.
                    </p>
                  </div>

                  {/* Dates Box */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', marginBottom: '20px', background: '#e3dec3', border: '1px solid #e3dec3', borderRadius: '6px', overflow: 'hidden', fontFamily: 'sans-serif' }}>
                    <div style={{ background: '#fdfbf7', padding: '10px', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.65rem', color: '#777777', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Arrival</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1a1a1a' }}>22/07/2026</span>
                    </div>
                    <div style={{ background: '#fdfbf7', padding: '10px', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.65rem', color: '#777777', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Departure</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1a1a1a' }}>23/07/2026</span>
                    </div>
                  </div>

                  {/* Guests Section Title */}
                  <div style={{ fontFamily: 'sans-serif', fontSize: '0.78rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid #e3dec3', paddingBottom: '6px' }}>
                    Guest Composition
                  </div>

                  {/* Adults Counter */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontFamily: 'sans-serif' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '600', color: '#1a1a1a' }}>Adults</div>
                      <div style={{ fontSize: '0.7rem', color: '#777777' }}>Ages 12 &amp; above</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => setAdults(Math.max(1, adults - 1))} style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid #cccccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>−</button>
                      <span style={{ fontFamily: 'Georgia, serif', fontWeight: '700', width: '16px', textAlign: 'center', fontSize: '0.95rem' }}>{adults}</span>
                      <button onClick={() => setAdults(adults + 1)} style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid #cccccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>+</button>
                    </div>
                  </div>

                  {/* Children Counter */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', fontFamily: 'sans-serif' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '600', color: '#1a1a1a' }}>Children</div>
                      <div style={{ fontSize: '0.7rem', color: '#777777' }}>Ages 6 to 11</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => setChildren(Math.max(0, children - 1))} style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid #cccccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>−</button>
                      <span style={{ fontFamily: 'Georgia, serif', fontWeight: '700', width: '16px', textAlign: 'center', fontSize: '0.95rem' }}>{children}</span>
                      <button onClick={() => setChildren(children + 1)} style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid #cccccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>+</button>
                    </div>
                  </div>

                  {/* Infants Counter */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontFamily: 'sans-serif' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '600', color: '#1a1a1a' }}>Infants</div>
                      <div style={{ fontSize: '0.7rem', color: '#777777' }}>Under 6 years</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button onClick={() => setInfants(Math.max(0, infants - 1))} style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid #cccccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>−</button>
                      <span style={{ fontFamily: 'Georgia, serif', fontWeight: '700', width: '16px', textAlign: 'center', fontSize: '0.95rem' }}>{infants}</span>
                      <button onClick={() => setInfants(infants + 1)} style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid #cccccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>+</button>
                    </div>
                  </div>

                  {/* Financial Ledger Summary */}
                  <div style={{ background: '#f4efe6', padding: '14px', borderRadius: '6px', marginBottom: '20px', fontFamily: 'sans-serif', border: '1px solid #e3dec3' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.82rem', color: '#555555' }}>
                      <span>Base Tariff (4 Guests)</span>
                      <span>₹ {basePricePerNight.toLocaleString()}</span>
                    </div>
                    {extraGuestsCount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.82rem', color: '#8c7853', fontWeight: '600' }}>
                        <span>Extra Guests ({extraGuestsCount} × ₹1,200)</span>
                        <span>+ ₹ {(extraGuestsCount * extraGuestFee).toLocaleString()}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #e3dec3' }}>
                      <span style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '0.88rem' }}>Estimated Total</span>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: '700', color: '#1a1a1a' }}>₹ {calculatedAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Interactive Booking Action Button */}
                  <button
                    onClick={handleBooking}
                    style={{
                      width: '100%',
                      backgroundColor: bookingConfirmed ? '#15803d' : '#8c7853',
                      color: '#ffffff',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '6px',
                      fontFamily: 'sans-serif',
                      fontWeight: '700',
                      cursor: 'pointer',
                      marginBottom: '14px',
                      fontSize: '0.88rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    {bookingConfirmed ? '✓ Booking Requested' : 'Request Reservation'}
                  </button>

                  {/* Concierge Support Links */}
                  <div style={{ display: 'flex', gap: '10px', fontFamily: 'sans-serif' }}>
                    <a href="tel:8848591955" style={{ flex: 1, textAlign: 'center', padding: '10px', border: '1px solid #e3dec3', borderRadius: '6px', color: '#1a1a1a', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600', background: '#fdfbf7' }}>
                      📞 Concierge Call
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', padding: '10px', border: '1px solid #e3dec3', borderRadius: '6px', color: '#1a1a1a', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600', background: '#fdfbf7' }}>
                      💬 WhatsApp Desk
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Simple Interactive Fullscreen Gallery Modal */}
        {isGalleryOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <button
              onClick={() => setIsGalleryOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer' }}
            >
              &times;
            </button>
            <div style={{ maxWidth: '900px', width: '100%', maxHeight: '75vh', overflow: 'hidden', borderRadius: '8px' }}>
              <img src={galleryImages[activeImageIndex]} alt="Expanded View" style={{ width: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', overflowX: 'auto', maxWidth: '100%', padding: '10px' }}>
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Thumbnail"
                  onClick={() => setActiveImageIndex(idx)}
                  style={{ width: '80px', height: '55px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer', border: activeImageIndex === idx ? '2px solid #d4af37' : '2px solid transparent' }}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}