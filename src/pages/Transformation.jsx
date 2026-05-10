import React from 'react';
import Navbar from '../components/Navbar';
import { Database, Recycle, Settings } from 'lucide-react';

const Transformation = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <section className="py-20 px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#004a99] mb-12 uppercase tracking-tight">Digital Transformation Suite</h2>
        
        <div className="space-y-12">
          {/* Requisition Automation */}
          <div className="bg-white p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-10 border-l-8 border-[#004a99]">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Requisition Automation System</h3>
              <p className="text-slate-600 mb-6">
                Revolutionizing internal procurement by eliminating manual bottlenecks and ensuring 100% auditability[cite: 55].
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-sm text-slate-500"><CheckCircle size={16} className="text-green-500" /> Automated Approvals</li>
                <li className="flex items-center gap-2 text-sm text-slate-500"><CheckCircle size={16} className="text-green-500" /> Real-time Logging</li>
              </ul>
            </div>
          </div>

          {/* Offshore Waste */}
          <div className="bg-white p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-10 border-l-8 border-[#00d2ff]">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Offshore Waste Management System</h3>
              <p className="text-slate-600 mb-6">
                A specialized solution for maritime and industrial logistics, automating the tracking and disposal of offshore waste in compliance with international standards[cite: 57, 58].
              </p>
              <button className="text-[#004a99] font-bold flex items-center gap-2 hover:underline">
                View Compliance Standards <Settings size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformation;