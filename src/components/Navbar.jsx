import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Activity, Globe, Shield, Zap, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceLinks = [
    { name: 'Software Solutions', path: '/services/software', icon: <Cpu size={18} /> },
    { name: 'Digital Transformation', path: '/services/transformation', icon: <Zap size={18} /> },
    { name: 'Security via Tech', path: '/services/security', icon: <Shield size={18} /> },
  ];

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-[100] w-full">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Section - Serves as Home Link */}
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
              <div className="absolute left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-xl py-2 mt-0 z-[110] animate-in fade-in slide-in-from-top-2 duration-200">
                {serviceLinks.map((service) => (
                  <Link 
                    key={service.name} 
                    to={service.path} 
                    className="block px-4 py-3 hover:bg-slate-50 font-black text-[10px] text-slate-800 uppercase tracking-tight"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" className="hover:text-[#004a99] transition-colors">Projects</Link>
          <Link to="/contact" className="bg-[#004a99] text-white px-6 py-3 rounded text-[10px] hover:bg-[#00d2ff] hover:text-[#004a99] transition-all font-black shadow-lg shadow-[#004a99]/20">
            INITIALIZE
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden relative z-[110] p-2 text-slate-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Simplified Mobile Overlay Menu */}
        <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col pt-32 px-10 gap-10">
            
            {/* The Three Pillars List */}
            <div className="space-y-8">
              {serviceLinks.map((service) => (
                <Link 
                  key={service.name} 
                  to={service.path} 
                  onClick={closeMobile}
                  className="flex items-center gap-4 group"
                >
                  <div className="text-[#004a99] group-hover:text-[#00d2ff] transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-2xl font-black uppercase tracking-tighter text-slate-800 group-hover:text-[#004a99]">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px bg-slate-100 w-full"></div>

            {/* Main Links */}
            <Link 
              to="/projects" 
              onClick={closeMobile} 
              className="text-2xl font-black uppercase tracking-tighter text-slate-800 hover:text-[#004a99]"
            >
              Projects
            </Link>
            
            <Link 
              to="/contact" 
              onClick={closeMobile}
              className="bg-[#004a99] text-white text-center py-5 rounded font-black uppercase tracking-widest text-sm hover:bg-[#00d2ff] transition-all"
            >
              Contact Us
            </Link>

            {/* Hub Info */}
            <div className="mt-auto pb-10 flex items-center gap-4 text-slate-400">
              <Globe size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Lagos Hub | Global Operations</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;