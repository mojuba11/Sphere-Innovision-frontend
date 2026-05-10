import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 text-[#004a99] font-bold text-xl">
        <Cpu size={28} className="text-[#00d2ff]" />
        <span>Sphere Innovision</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium text-slate-600">
        <Link to="/" className="hover:text-[#004a99]">Home</Link>
        <Link to="/dashboard" className="hover:text-[#004a99]">Dashboard</Link>
        <Link to="/tarmarket" className="hover:text-[#004a99]">Tarmarket</Link>
        <Link to="/transformation" className="hover:text-[#004a99]">Transformation</Link>
      </div>
    </nav>
  );
};

export default Navbar;