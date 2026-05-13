import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Cpu, Code, Database, Globe, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareSolutions = () => {
  const capabilities = [
    {
      title: "Custom Full-Stack Development",
      desc: "Architecting scalable web and mobile ecosystems using modern frameworks and secure, ruggedized code.",
      icon: <Code className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Enterprise ERP Systems",
      desc: "Bespoke Resource Planning tools designed to centralize complex business operations into a single digital backbone.",
      icon: <Layers className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Management Portals",
      desc: "Secure, role-based dashboards for real-time tracking of assets, personnel, and operational data.",
      icon: <Database className="text-[#00d2ff]" size={24} />
    },
    {
      title: "API & System Integration",
      desc: "Seamlessly connecting legacy infrastructure with modern cloud services for fluid data synchronization.",
      icon: <Globe className="text-[#00d2ff]" size={24} />
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
            <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">Pillar One</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tighter uppercase">
            Software <br /> <span className="text-[#004a99]">Solutions.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-light leading-relaxed border-l-2 border-slate-700 pl-6">
            Engineering bespoke digital ecosystems that solve complex operational bottlenecks through secure, scalable, and user-centric software development.
          </p>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, idx) => (
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

      {/* --- THE METHODOLOGY SECTION --- */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
              The Engineering <br /><span className="text-[#00d2ff]">Workflow.</span>
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Discovery", text: "Deep analysis of business workflows to find hidden inefficiencies." },
                { step: "02", title: "Architecture", text: "Designing secure, scalable data structures and UI/UX roadmaps." },
                { step: "03", title: "Development", text: "Clean-room coding with a focus on ruggedized system integrity." }
              ].map((phase, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-[#004a99] font-black text-2xl">{phase.step}</span>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm mb-1">{phase.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{phase.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
            <h4 className="text-[#00d2ff] font-black uppercase text-xs tracking-[0.3em] mb-6">Core Tech Stack</h4>
            <div className="grid grid-cols-2 gap-4">
              {['React.js', 'Node.js', 'PostgreSQL', 'Cloud Native', 'REST APIs', 'Docker'].map((tech) => (
                <div key={tech} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={16} className="text-[#00d2ff]" />
                  <span className="font-mono text-xs uppercase">{tech}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-[#004a99]/20 rounded-lg border border-[#004a99]/30">
              <p className="text-sm italic text-slate-300">"Solving local challenges with global technology standards."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Ready to Build Your Digital Backbone?</h2>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-[#004a99] text-white px-10 py-5 rounded-md font-black hover:bg-[#00d2ff] transition-all uppercase tracking-widest">
          Initiate Discovery Phase <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default SoftwareSolutions;