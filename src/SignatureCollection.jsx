import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import './SignatureCollection.css';

const SignatureCollection = () => {
  const items = [
    {
      name: 'Vagamon Paradise',
      details: 'Entire place | 3-Bedroom | Max 10 guests',
      price: '₹ 20,000 for 8 Guests',
      location: 'Vagamon',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Vandhanam Stays',
      details: 'Entire place | 8-Bedrooms | Max 24 guests',
      price: '₹ 4,000 for 2 Guests',
      location: 'Vagamon',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Private Pool Villa Vagamon - Indus...',
      details: 'Entire home | 1 bedroom | Max 10 guests',
      price: '₹ 12,000 for 5 Guests',
      location: 'Vagamon',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Woodlands Casa',
      details: 'Glasshouse | Tiny Home | Max 9 guests',
      price: '₹ 12,000 for 5 Guests',
      location: 'Vagamon',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Munnar Mist Valley',
      details: 'Entire villa | 4-Bedroom | Max 12 guests',
      price: '₹ 15,000 for 6 Guests',
      location: 'Munnar',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Wayanad Green Retreat',
      details: 'Treehouse | 1-Bedroom | Max 3 guests',
      price: '₹ 8,000 for 2 Guests',
      location: 'Wayanad',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Helper function to turn names into clean URL slugs (e.g., "Vagamon Paradise" -> "vagamon-paradise")
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  return (
    <section className="signature-section">
      <div className="signature-header">
        <h2 className="signature-title">EliteTrip Signature Collection</h2>
        <div className="signature-header-actions">
          <button className="explore-btn">Explore</button>
        </div>
      </div>

      <div className="signature-carousel-container">
        <div className="signature-track">
          {/* Duplicate array to create a seamless infinite loop effect */}
          {[...items, ...items].map((item, index) => {
            const slug = createSlug(item.name);

            return (
              /* 2. Wrap the card in a Link component pointing to the dynamic route */
              <Link to={`/${slug}`} key={index} className="signature-card" style={{ textDecoration: 'none' }}>
                <div className="signature-card-img-wrap">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="signature-card-body">
                  <h3 className="signature-card-name" title={item.name}>{item.name}</h3>
                  <p className="signature-card-details">{item.details}</p>
                  <p className="signature-card-price">{item.price}</p>
                  <span className="signature-badge">{item.location}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;