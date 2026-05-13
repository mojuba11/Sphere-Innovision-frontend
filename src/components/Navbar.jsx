import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Cpu, Menu, X, Activity, Globe, Zap, Shield } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ];

  const serviceLinks = [
    { 
      name: 'Software Solutions', 
      path: '/services/software', 
      desc: 'Bespoke Full-Stack & ERPs',
      icon: <Cpu size={16} />
    },
    { 
      name: 'Digital Transformation', 
      path: '/services/transformation', 
      desc: 'Automation & Logistics',
      icon: <Zap size={16} />
    },
    { 
      name: 'Security via Tech', 
      path: '/services/security', 
      desc: 'Intelligence & Infrastructure',
      icon: <Shield size={16} />
    },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-[100] w-full">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="bg-[#004a99] p-1.5 rounded-lg group-hover:bg-[#00d2ff] transition-colors">
            <Activity size={22} className="text-white" />
          </div>
          <span className="text-[#004a99] font-black text-xl tracking-tighter uppercase">
            SPHERE <span className="text-[#00d2ff]">INNOVISION</span>
          </span>
        </Link>

        {/* Desktop Main Menu */}
        <div className="hidden md:flex gap-8 items-center font-bold text-[10px] uppercase tracking-widest text-slate-600">
          <Link to="/" className="hover:text-[#004a99] transition-colors">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#004a99] transition-colors py-8">
              Services <ChevronDown size={14} className={isDropdownOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 w-72 bg-white border border-slate-100 shadow-2xl rounded-xl py-3 mt-0 z-[110] animate-in fade-in slide-in-from-top-2 duration-200">
                {serviceLinks.map((service) => (
                  <Link key={service.name} to={service.path} className="block px-4 py-3 hover:bg-slate-50 group">
                    <div className="flex items-center gap-3">
                      <div className="text-slate-400 group-hover:text-[#004a99]">{service.icon}</div>
                      <div>
                        <span className="font-black block text-xs text-slate-800 group-hover:text-[#004a99] uppercase tracking-tight">{service.name}</span>
                        <span className="text-[10px] text-slate-400 lowercase font-normal">{service.desc}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" className="hover:text-[#004a99] transition-colors">Projects</Link>
          <Link to="/contact" className="bg-[#004a99] text-white px-6 py-3 rounded text-[10px] hover:bg-[#00d2ff] hover:text-[#004a99] transition-all font-black shadow-lg shadow-[#004a99]/20">
            INITIALIZE STRATEGY
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden relative z-[110] p-2 text-slate-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay Menu */}
        <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col pt-28 px-8 gap-8 h-full overflow-y-auto">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter text-slate-900">Home</Link>
            
            <div className="space-y-6">
              <p className="text-[10px] font-black text-[#00d2ff] tracking-[0.4em] uppercase">The Three Pillars</p>
              {serviceLinks.map((service) => (
                <Link 
                  key={service.name} 
                  to={service.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between group"
                >
                  <div>
                    <span className="block text-2xl font-black uppercase tracking-tighter text-slate-800 group-hover:text-[#004a99]">{service.name}</span>
                    <span className="text-xs text-slate-400">{service.desc}</span>
                  </div>
                  <ChevronDown className="-rotate-90 text-slate-200" size={20} />
                </Link>
              ))}
            </div>

            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter text-slate-900">Projects</Link>
            
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-[#004a99] text-white text-center py-5 rounded-lg font-black uppercase tracking-widest text-sm"
            >
              Initiate Discovery Phase
            </Link>

            <div className="mt-auto pb-10 flex items-center gap-4 text-slate-400">
              <Globe size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Global Operations | Lagos Hub</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;