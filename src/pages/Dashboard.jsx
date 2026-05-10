import React from 'react';
import Navbar from '../components/Navbar.jsx';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f4f8]">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-64 bg-[#004a99] text-white p-6 hidden md:block">
          <h2 className="text-xl font-bold mb-10">Sphere Intel</h2>
          <ul className="space-y-6 opacity-80">
            <li className="font-bold border-b border-[#00d2ff] pb-2">VMS Overview</li>
            <li>Waste Logistics</li>
            <li>Requisition Logs</li>
            <li>Security Audits</li>
          </ul>
        </div>
        <div className="flex-1 p-10">
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-bold text-[#004a99]">Strategic Command Center</h1>
            <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">Integrity: 100%</div>
          </header>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-slate-800">
              <h3 className="text-lg font-bold mb-4">Intelligence Feed</h3>
              <div className="aspect-video bg-slate-900 rounded flex items-center justify-center text-slate-500 italic">[Encrypted Stream Active]</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#00d2ff]">
              <h3 className="text-lg font-bold mb-4">Offshore Waste Management</h3>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-4"><div className="bg-[#00d2ff] w-[92%] h-full"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;