import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Cpu, Zap, ArrowRight, ChevronLeft, ChevronRight, Globe, BarChart, Server, Award, Users, Terminal, Database, HardDrive, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counts, setCounts] = useState({ projects: 0, uptime: 0, partners: 0, codeLines: 0 });

  const slides = [
    {
      title: "Top-Notch Technology Innovation",
      subtitle: "Solving complex problems in Africa and beyond through digital excellence.",
      accent: "Software | Transformation | Security",
      cta: "Explore Solutions",
      link: "/services/software"
    },
    {
      title: "Empowering Enterprises to Scale",
      subtitle: "Providing the digital backbone required for the 21st-century economy.",
      accent: "Problem-Solving Engineering",
      cta: "View Roadmap",
      link: "/services/security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    const statsTimer = setInterval(() => {
      setCounts(prev => ({
        projects: prev.projects < 58 ? prev.projects + 1 : 58,
        uptime: prev.uptime < 99 ? prev.uptime + 1 : 99,
        partners: prev.partners < 15 ? prev.partners + 1 : 15,
        codeLines: prev.codeLines < 500 ? prev.codeLines + 10 : 500
      }));
    }, 40);
    return () => { clearInterval(timer); clearInterval(statsTimer); };
  }, [slides.length]);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] bg-slate-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="w-full h-full bg-[#004a99]/20 animate-pulse"></div>
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#00d2ff]"></span>
              <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">{slides[currentSlide].accent}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-[#00d2ff] block" : "block"}>{word}</span>
              ))}
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-xl mb-10 font-light border-l-2 border-slate-700 pl-6">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={slides[currentSlide].link} className="bg-[#004a99] text-white px-8 py-4 rounded-md font-bold hover:bg-[#00d2ff] hover:text-[#004a99] transition-all flex items-center gap-3">
                DEPLOY SOLUTIONS <ArrowRight size={18} />
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-md border border-white/10">
                <Activity className="text-[#00d2ff] animate-pulse" size={20} />
                <span className="text-white text-sm font-mono tracking-tighter uppercase">Operational Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DATA STRIP: THE THREE PILLARS --- */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
          <div className="p-8 flex flex-col items-center md:items-start">
            <span className="text-4xl font-black text-slate-800">Software</span>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Full-Stack | ERP | APIs</span>
          </div>
          <div className="p-8 flex flex-col items-center md:items-start">
            <span className="text-4xl font-black text-[#004a99]">Transformation</span>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Automation | Cloud | Digitization</span>
          </div>
          <div className="p-8 flex flex-col items-center md:items-start">
            <span className="text-4xl font-black text-slate-800">Security</span>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">VMS | Bodycams | Cyber</span>
          </div>
          <div className="p-8 flex flex-col items-center md:items-start">
            <span className="text-4xl font-black text-[#00d2ff]">Methodology</span>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Problem-Solving Engineering</span>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC METHODOLOGY SECTION --- */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6 uppercase">
              Strategic <br/>Methodology
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We combine the agility of modern software development with the strategic depth of digital transformation and the rigor of tech-driven security.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-[#004a99]">
                <Terminal size={20} className="text-[#004a99]" />
                <span className="font-bold text-sm text-slate-700">Discovery & Workflow Analysis</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-[#00d2ff]">
                <Database size={20} className="text-[#00d2ff]" />
                <span className="font-bold text-sm text-slate-700">Secure & Scalable Development</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-800">
                <HardDrive size={20} className="text-slate-800" />
                <span className="font-bold text-sm text-slate-700">Deployment & Long-term Support</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            <div className="p-10 border border-slate-100 bg-white hover:bg-[#004a99] group transition-all duration-500">
              <h4 className="text-xs font-black text-[#00d2ff] mb-4 tracking-[0.2em]">SOFTWARE SOLUTIONS</h4>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Enterprise Ecosystems</h3>
              <p className="text-slate-500 group-hover:text-slate-200 text-sm leading-loose">
                Bespoke management portals and ERP systems designed to solve complex operational bottlenecks through custom full-stack excellence.
              </p>
            </div>
            <div className="p-10 border border-slate-100 bg-white hover:bg-[#004a99] group transition-all duration-500">
              <h4 className="text-xs font-black text-[#00d2ff] mb-4 tracking-[0.2em]">SECURITY VIA TECH</h4>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Intelligent Monitoring</h3>
              <p className="text-slate-500 group-hover:text-slate-200 text-sm leading-loose">
                Proprietary Bodycam and VMS ecosystems providing real-time transparency and data-driven accountability for global field operations.
              </p>
            </div>
            <div className="p-10 border border-slate-100 bg-white hover:bg-[#004a99] group transition-all duration-500">
              <h4 className="text-xs font-black text-[#00d2ff] mb-4 tracking-[0.2em]">DIGITAL TRANSFORMATION</h4>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Process Re-engineering</h3>
              <p className="text-slate-500 group-hover:text-slate-200 text-sm leading-loose">
                Migrating legacy systems to the cloud and automating manual workflows to ensure your enterprise scales seamlessly.
              </p>
            </div>
            <div className="p-10 border border-slate-100 bg-white hover:bg-[#004a99] group transition-all duration-500">
              <h4 className="text-xs font-black text-[#00d2ff] mb-4 tracking-[0.2em]">HARDENED SYSTEMS</h4>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Cyber-Physical Convergence</h3>
              <p className="text-slate-500 group-hover:text-slate-200 text-sm leading-loose">
                Integrating physical hardware with proactive threat mitigation and domain hardening to protect the backbone of your digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORPORATE VISION BLOCK --- */}
      <section className="bg-slate-900 py-24 px-6 md:px-12 text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black leading-none mb-8 uppercase tracking-tighter">
              The Roadmap <br/>For <span className="text-[#00d2ff]">Growth.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h5 className="font-bold text-[#00d2ff] mb-2 uppercase text-xs tracking-widest underline decoration-2 underline-offset-8">Productization</h5>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  Turning custom-built client solutions into scalable, globally competitive products that solve localized African challenges.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-[#00d2ff] mb-2 uppercase text-xs tracking-widest underline decoration-2 underline-offset-8">Collaboration</h5>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  Partnering with industry leaders to drive the next wave of industrial AI and ruggedized automation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-[#004a99]/20 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-30 bg-cover"></div>
               <div className="relative z-10 text-center px-10">
                  <Globe className="text-[#00d2ff] mx-auto mb-6 animate-spin-slow" size={60} />
                  <p className="text-2xl font-bold italic tracking-tighter">Solving Local Challenges with Global Tech</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERS MARQUEE: BOLD TEXT --- */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap">
          {["Software", "Transformation", "Security", "Scale", "Engineering", "Software", "Transformation"].map((p, i) => (
            <span key={i} className="text-4xl font-black text-slate-100 uppercase tracking-tighter hover:text-[#004a99] transition-colors cursor-default">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-[#004a99] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Ready to Scaling Your Enterprise?</h2>
        <Link to="/contact" className="inline-block bg-[#00d2ff] text-[#004a99] px-12 py-5 rounded-md font-black text-lg hover:bg-white transition-all uppercase tracking-widest">
          Initiate Discovery Phase
        </Link>
      </section>
    </div>
  );
};

export default Home;