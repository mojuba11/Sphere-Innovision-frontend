import React from 'react';
import Navbar from '../components/Navbar.jsx';

const Projects = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="py-20 px-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#004a99] border-l-8 border-[#00d2ff] pl-4 mb-8">
          INDUSTRIAL PORTFOLIO
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">VMS Integration</h3>
            <p className="text-slate-600">Full-scale video management system for maritime logistics.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Internal Requisition Portal</h3>
            <p className="text-slate-600">Automated workflow engine for corporate procurement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;