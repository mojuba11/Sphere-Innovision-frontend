import React from 'react';

const Footer = () => (
  <footer className="bg-slate-900 text-white py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-70 text-sm">
      <p>© {new Date().getFullYear()} Sphere Innovision Ventures</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span>Software</span>
        <span>Transformation</span>
        <span>Security</span>
      </div>
    </div>
  </footer>
);

export default Footer;