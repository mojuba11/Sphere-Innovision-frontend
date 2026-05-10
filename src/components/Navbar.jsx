import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Cpu, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section - Using Icon and Text */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-[#004a99] p-1.5 rounded-lg group-hover:bg-[#00d2ff] transition-colors">
          <Cpu size={22} className="text-white" />
        </div>
        <span className="text-[#004a99] font-bold text-xl tracking-tighter">
          SPHERE <span className="text-[#00d2ff]">INNOVISION</span>
        </span>
      </Link>

      {/* Main Menu */}
      <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
        <Link to="/" className="hover:text-[#004a99] transition-colors">Home</Link>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#004a99] transition-colors py-2">
            Services <ChevronDown size={16} className={isDropdownOpen ? 'rotate-180 transition-transform' : ''} />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-xl py-3 mt-0 z-50">
              <Link to="/services/software" className="block px-4 py-3 hover:bg-slate-50 group">
                <span className="font-bold block text-sm text-slate-800 group-hover:text-[#004a99]">Software Solutions</span>
                <span className="text-xs text-slate-400">Bespoke Full-Stack & ERPs</span>
              </Link>
              <Link to="/services/transformation" className="block px-4 py-3 hover:bg-slate-50 group">
                <span className="font-bold block text-sm text-slate-800 group-hover:text-[#004a99]">Digital Transformation</span>
                <span className="text-xs text-slate-400">Automation & Logistics</span>
              </Link>
              <Link to="/services/security" className="block px-4 py-3 hover:bg-slate-50 group">
                <span className="font-bold block text-sm text-slate-800 group-hover:text-[#004a99]">Security via Tech</span>
                <span className="text-xs text-slate-400">Intelligence & Infrastructure</span>
              </Link>
            </div>
          )}
        </div>

        <Link to="/projects" className="hover:text-[#004a99] transition-colors">Projects</Link>
        <Link to="/contact" className="bg-[#004a99] text-white px-6 py-2.5 rounded-lg hover:bg-[#00d2ff] hover:text-[#004a99] transition-all font-bold shadow-md">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;