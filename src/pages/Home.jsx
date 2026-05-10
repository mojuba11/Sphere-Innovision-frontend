import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Cpu, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <header className="bg-[#004a99] text-white py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4 uppercase tracking-wider">Engineering Scalability</h1>
        <p className="text-xl text-[#00d2ff] italic mb-8">Securing Innovation with a Vision</p>
        <button className="bg-[#00d2ff] text-[#004a99] px-10 py-4 rounded-lg font-bold text-lg flex items-center gap-3 mx-auto hover:scale-105 transition">
          View Portfolio <ArrowRight />
        </button>
      </header>
      <section className="py-20 px-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#004a99]">
          <Cpu className="text-[#004a99] mb-4" size={40} />
          <h3 className="text-xl font-bold mb-2">Software Solutions</h3>
          <p className="text-slate-600">Bespoke full-stack development and high-integrity ERPs.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#00d2ff]">
          <Zap className="text-[#00d2ff] mb-4" size={40} />
          <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
          <p className="text-slate-600">Automation systems for requisitions and waste management.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-slate-800">
          <Shield className="text-slate-800 mb-4" size={40} />
          <h3 className="text-xl font-bold mb-2">Security via Tech</h3>
          <p className="text-slate-600">Ruggedized intelligence and cyber-infrastructure hardening.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;