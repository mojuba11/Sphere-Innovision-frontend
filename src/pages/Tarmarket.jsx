import React from 'react';
import Navbar from '../components/Navbar';
import { ShoppingCart, Gavel, Home, CheckCircle } from 'lucide-react';

const Tarmarket = () => {
  const features = [
    {
      title: "Integrated Marketplace",
      desc: "Seamless B2B and B2C transaction handling engineered for scalability.",
      icon: <ShoppingCart className="text-[#00d2ff]" />
    },
    {
      title: "Digital Auctioning",
      desc: "High-integrity bidding engines for transparent asset liquidation.",
      icon: <Gavel className="text-[#00d2ff]" />
    },
    {
      title: "Work-From-Home Suite",
      desc: "Collaborative tools specifically designed for distributed digital workforces.",
      icon: <Home className="text-[#00d2ff]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="py-20 px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[#004a99] font-bold tracking-widest uppercase text-sm">Flagship Product</span>
            <h1 className="text-5xl font-extrabold text-[#004a99] mt-4 mb-6">Tarmarket</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              A robust, multi-dimensional digital ecosystem designed for modern commerce and remote operations. 
              Tarmarket provides the digital backbone for high-stakes trade and workforce management.
            </p>
            <button className="bg-[#004a99] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#00d2ff] transition">
              Request Demo
            </button>
          </div>
          <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border-2 border-dashed border-slate-300">
            <span className="text-slate-400 font-mono">[Tarmarket Ecosystem Visualization]</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#004a99] mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tarmarket;