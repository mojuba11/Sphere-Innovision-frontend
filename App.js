import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tarmarket from './pages/Tarmarket';
import Transformation from './pages/Transformation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tarmarket" element={<Tarmarket />} />
          <Route path="/transformation" element={<Transformation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;