import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Cpu, Zap, ArrowRight, ChevronLeft, ChevronRight, Globe, BarChart, Terminal, Database, HardDrive, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState({ projects: 0, uptime: 0, partners: 0 });

  const slides = [
    {
      title: "Engineering Scalability",
      subtitle: "Securing Innovation with a Vision",
      accent: "MARITIME DIGITALIZATION",
      link: "/services/software"
    },
    {
      title: "Hardened Security",
      subtitle: "Intelligence Driven Infrastructure",
      accent: "CYBER-PHYSICAL SYSTEMS",
      link: "/services/security"
    }
  ];

  // Auto-slide and Stats Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    const statsTimer = setInterval(() => {
      setCounts(prev => ({
        projects: prev.projects < 60 ? prev.projects + 1 : 60,
        uptime: prev.uptime < 99 ? prev.uptime + 1 : 99,
        partners: prev.partners < 12 ? prev.partners + 1 : 12
      }));
    }, 50);
    return () => { clearInterval(timer); clearInterval(statsTimer); };
  }, [slides.length]);

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* BOXED LAYOUT CONTAINER */}
      <div className="max-w-[1440px] mx-auto bg-white shadow-2xl min-h-screen border-x border-slate-200 overflow-hidden">
        
        <Navbar />

        {/* --- DYNAMIC HERO SECTION --- */}
        <section className="relative h-[650px] bg-slate-900 flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <div className="relative z-20 w-full px-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-10 bg-[#00d2ff]"></span>
                <span className="text-[#00d2ff] uppercase tracking-[0.3em] text-xs font-black">{slides[currentSlide].accent}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tighter">
                {slides[currentSlide].title}
              </h1>
              <p className="text-slate-400 text-xl md:text-2xl mb-10 font-light max-w-xl italic">
                "{slides[currentSlide].subtitle}"
              </p>
              <Link to={slides[currentSlide].link} className="inline-flex items-center gap-4 bg-[#004a99] text-white px-10 py-5 rounded-sm font-black tracking-widest hover:bg-[#00d2ff] hover:text-[#004a99] transition-all">
                ACCESS PORTAL <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* --- BOLD SCROLLING PARTNER TICKER --- */}
        <section className="bg-[#004a99] py-8 border-y-4 border-slate-900 overflow-hidden relative">
          <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap items-center">
            {[1, 2].map((group) => (
              <div key={group} className="flex gap-24 items-center">
                <span className="text-4xl font-black text-white tracking-tighter opacity-100 italic">BRICKS MURSTEN MATTONI</span>
                <span className="text-4xl font-black text-[#00d2ff] tracking-tighter opacity-100 italic">VMS INTELLIGENCE</span>
                <span className="text-4xl font-black text-white tracking-tighter opacity-100 italic">MARITIME SECURE</span>
                <span className="text-4xl font-black text-[#00d2ff] tracking-tighter opacity-100 italic">ECOFLOW LOGISTICS</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- TECHNICAL CORE SECTION --- */}
        <section className="py-20 px-12">
          <div className="grid md:grid-cols-3 gap-1 divide-x divide-slate-100">
            <div className="p-8 hover:bg-slate-50 transition-colors">
              <Cpu className="text-[#004a99] mb-6" size={48} />
              <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase">Software</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Proprietary VMS and full-stack ERP architectures built for industrial resilience.</p>
            </div>
            <div className="p-8 hover:bg-slate-50 transition-colors">
              <Zap className="text-[#00d2ff] mb-6" size={48} />
              <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase">Automation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Digitalizing maritime waste and assets through intelligent requisition portals.</p>
            </div>
            <div className="p-8 hover:bg-slate-50 transition-colors">
              <Shield className="text-slate-800 mb-6" size={48} />
              <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase">Security</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Ruggedized hardware integration and cyber-infrastructure hardening.</p>
            </div>
          </div>
        </section>

        {/* --- STATS STRIP --- */}
        <section className="bg-slate-900 py-16 grid grid-cols-3 text-center border-t border-slate-800">
          <div>
            <p className="text-5xl font-black text-[#00d2ff]">{counts.projects}+</p>
            <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">Projects</p>
          </div>
          <div>
            <p className="text-5xl font-black text-white">{counts.uptime}%</p>
            <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">Integrity</p>
          </div>
          <div>
            <p className="text-5xl font-black text-[#00d2ff]">{counts.partners}</p>
            <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">Alliances</p>
          </div>
        </section>

        {/* --- MINIMALIST CLEAN FOOTER (NO MENU) --- */}
        <footer className="py-12 px-12 bg-white flex flex-col md:flex-row justify-between items-center border-t border-slate-100">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-[#004a99] rounded-sm"></div>
            <span className="font-black text-xl text-[#004a99] tracking-tighter uppercase">Sphere <span className="text-[#00d2ff]">Innovision</span></span>
          </div>
          <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">
            © 2026 SPHERE INNOVISION VENTURES | LAGOS HUB
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;