import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { ShoppingCart, Gavel, Home as HomeIcon } from 'lucide-react';

const Tarmarket = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="py-20 px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl font-extrabold text-[#004a99]">Tarmarket</h1>
            <p className="text-lg text-slate-600 mt-6 mb-8">Digital backbone for high-stakes trade and workforce management.</p>
            <button className="bg-[#004a99] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#00d2ff] transition">Request Demo</button>
          </div>
          <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 font-mono">[Visualizer]</div>
        </div>
      </div>
    </div>
  );
};

export default Tarmarket;