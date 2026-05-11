import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Cpu, Zap, ArrowRight, ChevronLeft, ChevronRight, Globe, BarChart, Terminal, Database, HardDrive, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState({ projects: 0, uptime: 0, partners: 0, codeLines: 0 });

  const slides = [
    {
      title: "Architecting Industrial Intelligence",
      subtitle: "Full-Stack engineering meeting rugged maritime requirements.",
      accent: "Maritime Digitalization Specialist",
      link: "/services/software"
    },
    {
      title: "Hardened Cyber Infrastructure",
      subtitle: "Defending the gateway of maritime logistics and global trade.",
      accent: "Domain & Extension Security",
      link: "/services/security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    const statsTimer = setInterval(() => {
      setCounts(prev => ({
        projects: prev.projects < 62 ? prev.projects + 1 : 62,
        uptime: prev.uptime < 99 ? prev.uptime + 1 : 99,
        partners: prev.partners < 18 ? prev.partners + 1 : 18,
        codeLines: prev.codeLines < 550 ? prev.codeLines + 10 : 550
      }));
    }, 40);
    return () => { clearInterval(timer); clearInterval(statsTimer); };
  }, [slides.length]);

  return (
    <div className="bg-slate-100 min-h-screen font-sans selection:bg-[#00d2ff] selection:text-[#004a99]">
      {/* MAIN BOXED CONTAINER */}
      <div className="max-w-[1440px] mx-auto bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] min-h-screen overflow-hidden border-x border-slate-200">
        
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="relative h-[80vh] bg-slate-900 flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          </div>

          <div className="relative z-20 w-full px-8 md:px-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-[#00d2ff]"></span>
                <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">{slides[currentSlide].accent}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase">
                {slides[currentSlide].title}
              </h1>
              <p className="text-slate-400 text-xl md:text-2xl max-w-xl mb-10 font-light border-l-4 border-[#004a99] pl-6 italic">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={slides[currentSlide].link} className="bg-[#004a99] text-white px-10 py-5 rounded-sm font-black tracking-widest hover:bg-[#00d2ff] hover:text-[#004a99] transition-all flex items-center gap-3">
                  ACCESS SYSTEM <ArrowRight size={20} />
                </Link>
                <div className="flex items-center gap-4 px-6 py-5 bg-white/5 backdrop-blur-md rounded-sm border border-white/10">
                  <Activity className="text-[#00d2ff] animate-pulse" size={20} />
                  <span className="text-white text-xs font-mono tracking-tighter uppercase">Status: Core Operational</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CLEAN BOLD SCROLLING TICKER --- */}
        <section className="bg-white py-6 border-b border-slate-100 overflow-hidden relative">
          <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-24 items-center">
                <span className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Bricks Limited</span>
                <span className="text-4xl font-black text-[#004a99] tracking-tighter italic uppercase">VMS Intelligence</span>
                <span className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Maritime Secure</span>
                <span className="text-4xl font-black text-[#004a99] tracking-tighter italic uppercase">EcoFlow Logistics</span>
                <span className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Mursten Mattoni</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- DATA STRIP --- */}
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            <div className="p-10 text-center md:text-left">
              <span className="text-5xl font-black text-slate-800 block">{counts.projects}+</span>
              <span className="text-[10px] text-[#004a99] uppercase font-black tracking-[0.3em] mt-2 block">Deployments</span>
            </div>
            <div className="p-10 text-center md:text-left">
              <span className="text-5xl font-black text-[#004a99] block">{counts.uptime}.9%</span>
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-[0.3em] mt-2 block">System Uptime</span>
            </div>
            <div className="p-10 text-center md:text-left">
              <span className="text-5xl font-black text-slate-800 block">{counts.partners}</span>
              <span className="text-[10px] text-[#004a99] uppercase font-black tracking-[0.3em] mt-2 block">Global Partners</span>
            </div>
            <div className="p-10 text-center md:text-left">
              <span className="text-5xl font-black text-[#00d2ff] block">{counts.codeLines}K</span>
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-[0.3em] mt-2 block">Code Integrity</span>
            </div>
          </div>
        </section>

        {/* --- TECHNICAL CAPABILITIES --- */}
        <section className="py-24 px-8 md:px-16">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-black text-slate-900 leading-none mb-8 uppercase tracking-tighter">
                Operational <br/><span className="text-[#004a99]">Infrastructure</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed border-l-2 border-slate-200 pl-6">
                Specializing in the intersection of industrial hardware and high-level software for the maritime and logistics sectors.
              </p>
              <div className="space-y-3">
                {["Full-Stack VMS Development", "Enterprise Requisition Hubs", "Ruggedized Intelligence Integration"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 font-bold text-slate-700 uppercase text-xs tracking-widest">
                    <div className="w-2 h-2 bg-[#004a99]"></div> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
              <div className="p-10 border border-slate-100 bg-white hover:bg-slate-900 group transition-all duration-500">
                <Cpu className="text-[#004a99] group-hover:text-[#00d2ff] mb-6" size={40} />
                <h3 className="text-xl font-black mb-4 group-hover:text-white uppercase">Software</h3>
                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">Bespoke backends managing complex logistics and procurement workflows.</p>
              </div>
              <div className="p-10 border border-slate-100 bg-white hover:bg-slate-900 group transition-all duration-500">
                <Shield className="text-[#004a99] group-hover:text-[#00d2ff] mb-6" size={40} />
                <h3 className="text-xl font-black mb-4 group-hover:text-white uppercase">Security</h3>
                <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed">Hardening maritime intelligence against evolving global cyber threats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORPORATE VISION --- */}
        <section className="bg-slate-900 py-24 px-8 md:px-16 text-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004a99] to-[#00d2ff]"></div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-10 uppercase tracking-tighter">
                Securing <br/>The Digital <br/><span className="text-[#00d2ff]">Frontier.</span>
              </h2>
              <div className="flex gap-10">
                <div className="max-w-[200px]">
                  <h5 className="font-black text-[#00d2ff] mb-4 uppercase text-[10px] tracking-[0.3em]">The Mission</h5>
                  <p className="text-slate-400 text-xs leading-loose uppercase">Empowering leaders with 100% operational visibility.</p>
                </div>
                <div className="max-w-[200px]">
                  <h5 className="font-black text-[#00d2ff] mb-4 uppercase text-[10px] tracking-[0.3em]">The Edge</h5>
                  <p className="text-slate-400 text-xs leading-loose uppercase">Grit-driven tech built for the complexity of global trade.</p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-[#004a99]/10 border border-white/5 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-20 grayscale"></div>
               <Globe className="text-[#00d2ff] relative z-10 animate-spin-slow opacity-50" size={120} />
               <div className="absolute bottom-6 right-6 text-right">
                  <p className="text-2xl font-black italic tracking-tighter uppercase">Lagos | Global</p>
               </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="bg-[#004a99] py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase">Ready to Engineer Your Scale?</h2>
          <Link to="/contact" className="inline-block bg-white text-[#004a99] px-16 py-6 font-black text-lg hover:bg-[#00d2ff] transition-all tracking-[0.2em] uppercase shadow-2xl">
            Request Strategy Session
          </Link>
        </section>

        {/* --- MINIMALIST FOOTER --- */}
        <footer className="py-12 px-16 bg-white border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-black text-xl text-[#004a99] uppercase tracking-tighter italic">
            Sphere <span className="text-[#00d2ff]">Innovision</span>
          </span>
          <span className="text-slate-400 text-[10px] font-black tracking-[0.4em] uppercase">
            © 2026 Ventures | Engineering Scalability
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;