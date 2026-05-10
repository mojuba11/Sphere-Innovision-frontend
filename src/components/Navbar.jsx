import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
    <div className="text-2xl font-extrabold text-[#004a99]">
      SPHERE <span className="text-[#00d2ff]">INNOVISION</span>
    </div>
    <div className="hidden md:flex gap-8 font-semibold text-slate-700">
      <a href="/" className="hover:text-[#00d2ff] transition">Home</a>
      <a href="#solutions" className="hover:text-[#00d2ff] transition">Solutions</a>
      <a href="/dashboard" className="bg-[#004a99] text-white px-5 py-2 rounded-full hover:bg-[#00d2ff] transition">Launch Demo</a>
    </div>
  </nav>
);

export default Navbar;