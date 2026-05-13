import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, video, Eye, Lock, ArrowRight, Radio, HardDrive, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
  const securityFeatures = [
    {
      title: "VMS Ecosystems",
      desc: "Proprietary Video Management Software designed for high-integrity data synchronization and real-time oversight.",
      icon: <Eye className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Bodycam Integration",
      desc: "Ruggedized hardware-software ecosystems providing transparency and accountability for field operations.",
      icon: <Radio className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Cyber-Security",
      desc: "Domain hardening and proactive threat mitigation to protect the digital backbone of your infrastructure.",
      icon: <Lock className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Data Hardening",
      desc: "End-to-end encryption and secure storage protocols for sensitive operational intelligence.",
      icon: <ShieldAlert className="text-[#00d2ff]" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="bg-slate-900 py-20 md:py-32 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#00d2ff]"></span>
            <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">Pillar Three</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tighter uppercase">
            Security Via <br /> <span className="text-[#004a99]">Technology.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-light leading-relaxed border-l-2 border-slate-700 pl-6">
            Integrating physical security hardware with advanced software engineering to provide real-time transparency and data-driven accountability.
          </p>
        </div>
      </section>

      {/* --- SECURITY PILLARS GRID --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((item, idx) => (
            <div key={idx} className="p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#004a99]/10 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INNOVATION SPOTLIGHT: VMS & BODYCAMS --- */}
      <section className="py-24 bg-slate-900 text-white px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h4 className="text-[#00d2ff] font-black uppercase text-xs tracking-[0.3em] mb-4">Innovation Spotlight</h4>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Security-Software <br/>Convergence.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80" 
                alt="Monitoring System" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <span className="bg-[#004a99] text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest mb-4 inline-block">Proprietary Tech</span>
                <h3 className="text-3xl font-black uppercase tracking-tight">Intelligent Monitoring</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <HardDrive className="text-[#00d2ff] mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">Ruggedized Infrastructure</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Hardware engineered to survive complex field environments, synchronized with cloud-native storage.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <Shield className="text-[#00d2ff] mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">Proactive Threat Mitigation</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Domain hardening and cyber protocols designed to protect the backbone of industrial operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Harden Your Operational Security</h2>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-[#004a99] text-white px-10 py-5 rounded-md font-black hover:bg-[#00d2ff] transition-all uppercase tracking-widest">
          Initiate Discovery Phase <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Security;