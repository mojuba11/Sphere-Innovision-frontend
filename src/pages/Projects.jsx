import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Shield, Anchor, Briefcase, CheckCircle, Search, Monitor, Eye, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const completedProjects = [
    {
      title: "Bodycam Intelligence Management",
      category: "Security via Tech",
      desc: "An end-to-end VMS ecosystem (Phase 1 & 2) designed for hardware synchronization, real-time data ingestion, and forensic accountability.",
      icon: <Monitor className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Offshore Waste Management System",
      category: "Maritime Logistics",
      desc: "Digital reporting and compliance architecture for tracking offshore waste disposal and environmental regulation adherence.",
      icon: <Anchor className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Enterprise Requisition Portal",
      category: "Digital Transformation",
      desc: "Automated corporate procurement workflow engine, reducing bottleneck delays in industrial requisition cycles.",
      icon: <Briefcase className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Certificate Verification Portal",
      category: "Security & Validation",
      desc: "Secure cryptographic validation system for industrial and maritime certifications to prevent credential fraud.",
      icon: <CheckCircle className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Tarmarket E-commerce Platform",
      category: "Software Solutions",
      desc: "A scalable, full-stack marketplace ecosystem engineered for high-volume transactions and secure user management.",
      icon: <ShoppingCart className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Domain Hardening & Phishing Defense",
      category: "Cyber-Security",
      desc: "Infrastructure security project focused on domain attack prevention and corporate phishing defense strategies.",
      icon: <Shield className="text-[#00d2ff]" size={24} />
    }
  ];

  const researchProjects = [
    {
      title: "Reading Software for the Blind",
      category: "Assistive AI Research",
      desc: "Ongoing R&D into intelligent OCR and neural network processing to convert visual text into high-fidelity audible intelligence.",
      icon: <Eye className="text-[#004a99]" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="bg-slate-900 py-20 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#00d2ff]"></span>
            <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">Case Studies</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tighter uppercase">
            Industrial <br /> <span className="text-[#004a99]">Portfolio.</span>
          </h1>
        </div>
      </section>

      {/* --- COMPLETED PROJECTS --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-black text-[#004a99] uppercase tracking-[0.3em] flex items-center gap-4">
            Deployed Infrastructure <span className="h-px flex-1 bg-slate-100"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, idx) => (
            <div key={idx} className="group p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#004a99]/10 transition-all flex flex-col h-full">
              <div className="mb-6 group-hover:scale-110 transition-transform">{project.icon}</div>
              <p className="text-[#004a99] text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              <div className="pt-6 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Status: Operational
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ONGOING RESEARCH --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="text-sm font-black text-[#004a99] uppercase tracking-[0.3em] flex items-center gap-4">
              Intelligence R&D <span className="h-px flex-1 bg-slate-200"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project, idx) => (
              <div key={idx} className="p-10 bg-white border border-slate-200 rounded-2xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
                <div className="bg-slate-900 p-4 rounded-xl text-white group-hover:bg-[#004a99] transition-colors">
                  {project.icon}
                </div>
                <div>
                   <p className="text-[#004a99] text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</p>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{project.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed mb-6">
                     {project.desc}
                   </p>
                   <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                     <Search size={14} /> Phase: Alpha Testing
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL --- */}
      <section className="py-20 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.5em] mb-4">Sphere Innovision Ventures</p>
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Solving Local Challenges with Global Standards.</h2>
      </section>
    </div>
  );
};

export default Projects;