import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Cpu, Zap, ArrowRight, ChevronLeft, ChevronRight, Globe, BarChart, Server, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState({ projects: 0, uptime: 0, partners: 0 });

  const slides = [
    {
      title: "Engineering Scalability",
      subtitle: "Securing Innovation with a Vision",
      accent: "Digitalizing Global Maritime Logistics",
      cta: "Explore Solutions",
      link: "/services/software",
      image: "bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')]"
    },
    {
      title: "Hardened Security",
      subtitle: "Intelligence Driven Infrastructure",
      accent: "VMS & Ruggedized Hardware Integration",
      cta: "View Tech",
      link: "/services/security",
      image: "bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80')]"
    },
    {
      title: "Business Automation",
      subtitle: "Workflow Optimization",
      accent: "ERP Systems & Internal Logistics Portals",
      cta: "See Transformation",
      link: "/services/transformation",
      image: "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')]"
    }
  ];

  // Partners List
  const partners = ["Bricks Limited", "Maritime Authority", "Global Logistics Co", "SecurePort", "TechStream", "EcoWaste"];

  // Auto-slide and Stats Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    const statsTimer = setInterval(() => {
      setCounts(prev => ({
        projects: prev.projects < 45 ? prev.projects + 1 : 45,
        uptime: prev.uptime < 99 ? prev.uptime + 1 : 99,
        partners: prev.partners < 12 ? prev.partners + 1 : 12
      }));
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(statsTimer);
    };
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#00d2ff] selection:text-[#004a99]">
      <Navbar />

      {/* --- HERO SLIDER --- */}
      <section className="relative h-screen min-h-[700px] bg-slate-900 overflow-hidden">
        {/* Animated Background Layers */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${slide.image} ${
              index === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-[10000ms]`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-10"></div>
        
        {/* Tech Overlay Grid */}
        <div className="absolute inset-0 opacity-10 z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-20 h-full flex items-center px-6 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-[#00d2ff] mb-6 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-[#00d2ff]"></div>
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase">{slides[currentSlide].accent}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to={slides[currentSlide].link} className="bg-[#004a99] text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#00d2ff] hover:text-[#004a99] transition-all shadow-2xl hover:shadow-[#00d2ff]/20 active:scale-95 group">
                {slides[currentSlide].cta} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="backdrop-blur-md bg-white/5 border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center">
                System Integration
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 left-6 md:left-20 z-30 flex gap-4">
          <button onClick={prevSlide} className="p-4 bg-white/5 hover:bg-white/20 border border-white/10 text-white rounded-xl transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-4 bg-white/5 hover:bg-white/20 border border-white/10 text-white rounded-xl transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* --- PARTNERS INFINITE SCROLL --- */}
      <section className="py-12 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Trusted by Industrial Leaders</p>
        </div>
        <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-2xl md:text-3xl font-black text-slate-200 hover:text-[#004a99] transition-colors cursor-default grayscale hover:grayscale-0">
              {p.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {/* --- STATS SHOWCASE --- */}
      <section className="relative py-20 bg-[#004a99]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2">{counts.projects}+</h4>
            <p className="text-[#00d2ff] font-bold text-sm tracking-widest uppercase">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2">{counts.uptime}%</h4>
            <p className="text-[#00d2ff] font-bold text-sm tracking-widest uppercase">System Uptime</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2">{counts.partners}</h4>
            <p className="text-[#00d2ff] font-bold text-sm tracking-widest uppercase">Core Partners</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl md:text-6xl font-black text-white mb-2">24/7</h4>
            <p className="text-[#00d2ff] font-bold text-sm tracking-widest uppercase">Active Monitoring</p>
          </div>
        </div>
      </section>

      {/* --- INNOVATION PILLARS --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-none mb-6">Built for the <br/><span className="text-[#004a99]">Next Industrial Age</span></h2>
            <p className="text-slate-500 text-xl italic">Bridging the gap between physical infrastructure and digital intelligence.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-[#00d2ff]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-[#004a99] transition-all duration-500 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#004a99] transition-colors">
              <Cpu className="text-[#004a99] group-hover:text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
            <p className="text-slate-500 leading-relaxed mb-8">Developing proprietary full-stack solutions and VMS systems tailored for maritime operations.</p>
            <div className="h-1 w-0 group-hover:w-full bg-[#004a99] transition-all duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="group p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-[#00d2ff] transition-all duration-500 hover:shadow-2xl scale-105 z-10 bg-gradient-to-b from-white to-slate-50">
            <div className="w-16 h-16 rounded-2xl bg-[#00d2ff]/10 flex items-center justify-center mb-8 group-hover:bg-[#00d2ff] transition-colors">
              <Zap className="text-[#00d2ff] group-hover:text-[#004a99]" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Flow</h3>
            <p className="text-slate-500 leading-relaxed mb-8">Architecting internal requisition portals and ERP integrations that eliminate logistical friction.</p>
            <div className="h-1 w-0 group-hover:w-full bg-[#00d2ff] transition-all duration-500"></div>
          </div>

          {/* Card 3 */}
          <div className="group p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-slate-800 transition-all duration-500 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-slate-800 transition-colors">
              <Shield className="text-slate-800 group-hover:text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Cyber Hardening</h3>
            <p className="text-slate-500 leading-relaxed mb-8">Ensuring system integrity via domain-based attack prevention and ruggedized hardware testing.</p>
            <div className="h-1 w-0 group-hover:w-full bg-slate-800 transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECT HIGHLIGHT --- */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00d2ff] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Engineering Work" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
            />
          </div>
          <div>
            <h4 className="text-[#004a99] font-bold tracking-widest uppercase text-sm mb-4">Recent Milestone</h4>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Proprietary VMS Deployment</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We recently completed Phase 2 of our specialized Video Management Software, integrating ruggedized bodycam hardware with real-time backend synchronization for maritime security personnel.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-800 font-bold">
                <div className="w-6 h-6 rounded-full bg-[#00d2ff] flex items-center justify-center text-[10px]">✓</div>
                Real-time Analytics Dashboard
              </div>
              <div className="flex items-center gap-4 text-slate-800 font-bold">
                <div className="w-6 h-6 rounded-full bg-[#00d2ff] flex items-center justify-center text-[10px]">✓</div>
                High-Integrity Data Encryption
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-slate-900 py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00d2ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Let's Secure Your <br/><span className="text-[#00d2ff]">Digital Frontier.</span></h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto italic">Architecting the intelligent industrial solutions of tomorrow, starting today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-[#00d2ff] text-[#004a99] px-12 py-5 rounded-xl font-black text-lg hover:bg-white transition-all shadow-2xl shadow-[#00d2ff]/20">
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;