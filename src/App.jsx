import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Home from './pages/Home.jsx';
import SoftwareSolutions from './pages/SoftwareSolutions.jsx'; // Pillar 1
import Transformation from './pages/Transformation.jsx';     // Pillar 2
import Security from './pages/Security.jsx';                 // Pillar 3
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

// Component Imports
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Main Landing */}
          <Route path="/" element={<Home />} />
          
          {/* The Three Pillars of Innovation */}
          <Route path="/services/software" element={<SoftwareSolutions />} />
          <Route path="/services/transformation" element={<Transformation />} />
          <Route path="/services/security" element={<Security />} />
          
          {/* Secondary Pages */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Global Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;