import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import FloatingWidgets from './FloatingWidgets';

// Pages
import HomePage from './HomePage';
import PropertyDetail from './PropertyDetail';

function App() {
  return (
    <Router>
      {/* Navbar is removed from here so it won't show on property pages */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<PropertyDetail />} />
      </Routes>

      <Footer />
      <FloatingWidgets />
    </Router>
  );
}

export default App;