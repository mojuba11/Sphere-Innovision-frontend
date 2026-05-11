import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Cpu, Zap, ArrowRight, ChevronLeft, ChevronRight, Globe, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Engineering Scalability",
      subtitle: "Securing Innovation with a Vision",
      accent: "Digitalizing Global Maritime Logistics",
      cta: "Explore Solutions",
      link: "/services/software"
    },
    {
      title: "Hardened Security",
      subtitle: "Intelligence Driven Infrastructure",
      accent: "VMS & Ruggedized Hardware Integration",
      cta: "View Tech",
      link: "/services/security"
    },
    {
      title: "Business Automation",
      subtitle: "Workflow Optimization",
      accent: "ERP Systems & Internal Logistics Portals",
      cta: "See Transformation",
      link: "/services/transformation"
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Slider Section */}
      <section className="relative h-[600px] md:h-[700px] bg-slate-900 overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004a99] to-slate-900 opacity-90 z-10"></div>
        
        {/* Slider Content */}
        <div className="relative z-20 h-full flex items-center px-6 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-700">
            <p className="text-[#00d2ff] font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
              {slides[currentSlide].accent}
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 italic mb-10 border-l-4 border-[#00d2ff] pl-6">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={slides[currentSlide].link} className="bg-[#00d2ff] text-[#004a99] px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl active:scale-95">
                {slides[currentSlide].cta} <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 right-6 md:right-20 z-30 flex gap-4">
          <button onClick={prevSlide} className="p-3 border border-white/30 text-white rounded-full hover:bg-[#00d2ff] hover:text-[#004a99] transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 border border-white/30 text-white rounded-full hover:bg-[#00d2ff] hover:text-[#004a99] transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-white py-12 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#004a99]">100%</p>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-1">Integrity</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#004a99]">24/7</p>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-1">Uptime</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#004a99]">SECURE</p>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-1">Protocols</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#004a99]">Global</p>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-1">Reach</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Industrial Pillars</h2>
          <div className="w-24 h-1.5 bg-[#00d2ff] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Software */}
          <div className="p-10 bg-slate-50 rounded-2xl border-b-8 border-[#004a99] hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#004a99]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="text-[#004a99]" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Software Solutions</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Bespoke full-stack development and high-integrity ERPs designed for rigorous environments.</p>
            <Link to="/services/software" className="text-[#004a99] font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Details <ArrowRight size={18} />
            </Link>
          </div>

          {/* Transformation */}
          <div className="p-10 bg-slate-50 rounded-2xl border-b-8 border-[#00d2ff] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="bg-[#00d2ff]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-[#00d2ff]" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#004a99]">Digital Transformation</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Industrial automation for requisitions, portals, and waste management tracking.</p>
            <Link to="/services/transformation" className="text-[#004a99] font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Details <ArrowRight size={18} />
            </Link>
          </div>

          {/* Security */}
          <div className="p-10 bg-slate-50 rounded-2xl border-b-8 border-slate-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-slate-800/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Shield className="text-slate-800" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Security via Tech</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Ruggedized intelligence, VMS systems, and cyber-infrastructure hardening.</p>
            <Link to="/services/security" className="text-slate-800 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Innovate?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join the leading maritime and industrial firms using Sphere Innovision to secure their future.</p>
          <Link to="/contact" className="inline-block bg-white text-[#004a99] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00d2ff] transition-all">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;