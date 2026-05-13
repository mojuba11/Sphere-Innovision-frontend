import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 py-20 md:py-32 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#00d2ff]"></span>
            <span className="text-[#00d2ff] uppercase tracking-[0.4em] text-xs font-black">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tighter uppercase">
            Initialize <br /> <span className="text-[#004a99]">Discovery.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-light leading-relaxed border-l-2 border-slate-700 pl-6">
            Connect with our specialist team to engineer your digital scalability and operational transparency.
          </p>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Communication Channels */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-2xl hover:shadow-[#004a99]/10 transition-all">
              <div className="w-12 h-12 bg-[#004a99]/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#004a99] transition-colors">
                <Mail className="text-[#004a99] group-hover:text-white" size={24} />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Email Infrastructure</h3>
              <a href="mailto:info@sphereinnovision.com.ng" className="text-slate-600 font-medium hover:text-[#004a99] transition-colors">
                info@sphereinnovision.com.ng
              </a>
            </div>

            <div className="p-10 border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-2xl hover:shadow-[#004a99]/10 transition-all">
              <div className="w-12 h-12 bg-[#004a99]/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#004a99] transition-colors">
                <Phone className="text-[#004a99] group-hover:text-white" size={24} />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Direct Lines</h3>
              <div className="space-y-2">
                <p className="text-slate-600 font-medium">+234 906 825 5540</p>
                <p className="text-slate-600 font-medium">+234 905 339 3973</p>
              </div>
            </div>

            <div className="md:col-span-2 p-10 border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-2xl hover:shadow-[#004a99]/10 transition-all flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-12 h-12 bg-[#004a99]/10 flex items-center justify-center rounded-lg group-hover:bg-[#004a99] transition-colors shrink-0">
                <MapPin className="text-[#004a99] group-hover:text-white" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Operational Hub</h3>
                <p className="text-slate-600 font-medium">No 6 Glory Estate, Ikola, Lagos, Nigeria.</p>
              </div>
            </div>
          </div>

          {/* Office Hours / Global Status */}
          <div className="bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#00d2ff] mb-8">
                <Globe size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Global Presence</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Lagos Maritime <br />Logistics Hub</h3>
              <div className="space-y-4 border-t border-white/10 pt-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Availability</span>
                  <span className="text-green-400 text-xs font-black uppercase">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Support</span>
                  <span className="text-white text-xs font-black uppercase tracking-widest">24/7 Operations</span>
                </div>
              </div>
              <button className="mt-12 w-full bg-[#004a99] hover:bg-[#00d2ff] hover:text-[#004a99] transition-all py-4 rounded font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3">
                Send Message <MessageSquare size={16} />
              </button>
            </div>
            {/* Aesthetic Background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#004a99] blur-[100px] opacity-20"></div>
          </div>

        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.5em] mb-4">Engineering the Future</p>
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Sphere Innovision Ventures</h2>
      </section>
    </div>
  );
};

export default Contact;