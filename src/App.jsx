import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Tarmarket from './pages/Tarmarket.jsx';
import Transformation from './pages/Transformation.jsx';

// Component Imports
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tarmarket" element={<Tarmarket />} />
            <Route path="/transformation" element={<Transformation />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;