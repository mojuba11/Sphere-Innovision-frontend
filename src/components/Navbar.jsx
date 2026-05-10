import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-[#004a99] font-bold text-xl">
        <Cpu size={28} className="text-[#00d2ff]" />
        <span>Sphere Innovision</span>
      </Link>

      {/* Main Menu */}
      <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
        <Link to="/" className="hover:text-[#004a99] transition-colors">Home</Link>
        
        {/* Services Dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#004a99] transition-colors py-2">
            Services <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-lg py-2 z-50">
              <Link to="/services/software" className="block px-4 py-3 hover:bg-slate-50 hover:text-[#004a99] border-b border-slate-50">
                <span className="font-bold block text-sm">Software Solutions</span>
                <span className="text-xs text-slate-400 font-normal">Bespoke Full-Stack & ERPs</span>
              </Link>
              <Link to="/services/transformation" className="block px-4 py-3 hover:bg-slate-50 hover:text-[#004a99] border-b border-slate-50">
                <span className="font-bold block text-sm">Digital Transformation</span>
                <span className="text-xs text-slate-400 font-normal">Automation & Logistics</span>
              </Link>
              <Link to="/services/security" className="block px-4 py-3 hover:bg-slate-50 hover:text-[#004a99]">
                <span className="font-bold block text-sm">Security via Tech</span>
                <span className="text-xs text-slate-400 font-normal">Intelligence & Infrastructure</span>
              </Link>
            </div>
          )}
        </div>

        <Link to="/projects" className="hover:text-[#004a99] transition-colors">Projects</Link>
        <Link to="/contact" className="bg-[#004a99] text-white px-5 py-2 rounded-md hover:bg-[#00d2ff] hover:text-[#004a99] transition-all font-semibold shadow-md">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;