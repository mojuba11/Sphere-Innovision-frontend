import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-auto">
      <div className="max-container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-400">Sphere Innovision Ventures</h3>
            <p className="text-slate-400 text-sm mt-1">Driving Digital Transformation & Security</p>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-300">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
            <a href="/tarmarket" className="hover:text-blue-400 transition-colors">Tarmarket</a>
          </div>
          
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Sphere Innovision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;