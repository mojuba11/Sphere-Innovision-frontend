import React from 'react';
import Navbar from '../components/Navbar';
import { Shield, Cpu, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-[#004a99] text-white py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4 uppercase tracking-wider">Engineering Scalability</h1>
        <p className="text-xl text-[#00d2ff] italic mb-8">Securing Innovation with a Vision</p>
        <p className="max-w-3xl mx-auto text-lg text-slate-200 mb-10">
          A multi-disciplinary innovation hub dedicated to "Top-Notch" solutions solving complex problems in Africa and beyond[cite: 4].
        </p>
        <button className="bg-[#00d2ff] text-[#004a99] px-10 py-4 rounded-lg font-bold text-lg flex items-center gap-3 mx-auto hover:scale-105 transition">
          View Portfolio <ArrowRight />
        </button>
      </header>

      {/* Pillars Section */}
      <section id="solutions" className="py-20 px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#004a99] border-l-8 border-[#00d2ff] pl-4 mb-12 uppercase">The Three Pillars</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#004a99]">
            <Cpu className="text-[#004a99] mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Software Solutions</h3>
            <p className="text-slate-600">Bespoke full-stack development and high-integrity ERPs like Tarmarket[cite: 46, 48].</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#00d2ff]">
            <Zap className="text-[#00d2ff] mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
            <p className="text-slate-600">Automation systems for requisitions and offshore waste management[cite: 53, 56].</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-slate-800">
            <Shield className="text-slate-800 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Security via Tech</h3>
            <p className="text-slate-600">Ruggedized bodycam intelligence and cyber-infrastructure hardening[cite: 61, 63].</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;