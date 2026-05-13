import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Zap, Settings, Cloud, BarChart3, ArrowRight, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transformation = () => {
  const services = [
    {
      title: "Workflow Automation",
      desc: "Eliminating manual bottlenecks by deploying intelligent automated requisition and approval systems.",
      icon: <Settings className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Process Re-engineering",
      desc: "Deep analysis and restructuring of business operations to ensure maximum efficiency and ROI.",
      icon: <RefreshCw className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Cloud Migration Strategy",
      desc: "Architecting secure transitions from on-premise legacy hardware to high-availability cloud infrastructure.",
      icon: <Cloud className="text-[#00d2ff]" size={24} />
    },
    {
      title: "Data Digitization",
      desc: "Converting physical archives and fragmented data into actionable, high-integrity digital assets.",
      icon: <BarChart3 className="text-[#00d2ff]" size={24} />
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
            <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">Pillar Two</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tighter uppercase">
            Digital <br /> <span className="text-[#004a99]">Transformation.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-light leading-relaxed border-l-2 border-slate-700 pl-6">
            Modernizing the digital backbone of enterprises through strategic automation, cloud integration, and process optimization.
          </p>
        </div>
      </section>

      {/* --- TRANSFORMATION SERVICES --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#004a99]/10 transition-all group">
              <div className="mb-6 group-hover:rotate-12 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STRATEGIC VALUE PROPOSITION --- */}
      <section className="py-24 bg-slate-50 px-6 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#004a99]/40 to-transparent z-10"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                   alt="Digital Transformation" 
                   className="w-full h-full object-cover opacity-50"
                 />
                 <div className="absolute bottom-10 left-10 z-20">
                    <p className="text-[#00d2ff] font-mono text-xs tracking-widest uppercase mb-2">Operational Excellence</p>
                    <p className="text-white text-3xl font-black uppercase tracking-tighter">Scalable <br/>Infrastructure.</p>
                 </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Migrating Legacy to <span className="text-[#004a99]">Leadership.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm h-fit">
                    <Layers size={20} className="text-[#004a99]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-sm tracking-widest mb-2">Modernized Stacks</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Replacing rigid, siloed systems with flexible architectures that support rapid enterprise growth and cross-departmental data flow.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm h-fit">
                    <ShieldCheck size={20} className="text-[#004a99]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-sm tracking-widest mb-2">Industrial Resilience</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Our transformation projects are "ruggedized"—designed to maintain high availability even in complex, data-heavy environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Ready to Automate Your Success?</h2>
        <Link to="/contact" className="inline-flex items-center gap-3 bg-[#004a99] text-white px-10 py-5 rounded-md font-black hover:bg-[#00d2ff] transition-all uppercase tracking-widest">
          Initiate Discovery Phase <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Transformation;