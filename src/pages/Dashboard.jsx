import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#f0f4f8]">
      {/* Sidebar */}
      <div className="w-64 bg-[#004a99] text-white p-6">
        <h2 className="text-xl font-bold mb-10">Sphere Intel</h2>
        <ul className="space-y-6 opacity-80">
          <li className="font-bold border-b border-[#00d2ff] pb-2">VMS Overview</li>
          <li>Waste Logistics</li>
          <li>Requisition Logs</li>
          <li>Security Audits</li>
        </ul>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-[#004a99]">Strategic Command Center</h1>
          <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">System Integrity: 100%</div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bodycam Intel Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-slate-800">
            <h3 className="text-lg font-bold mb-4">Bodycam Intelligence Feed</h3>
            <div className="aspect-video bg-slate-900 rounded flex items-center justify-center text-slate-500 italic">
              [Encrypted Stream Active - Field Unit 04]
            </div>
            <p className="mt-4 text-sm text-slate-500 font-mono">Status: Remote Oversight Engaged [cite: 66]</p>
          </div>

          {/* Waste Management Stats */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#00d2ff]">
            <h3 className="text-lg font-bold mb-4">Offshore Waste Management</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Compliance Level</span>
                <span className="font-bold">International Std.</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#00d2ff] w-[92%] h-full"></div>
              </div>
              <p className="text-xs text-slate-400">Automated tracking of industrial disposal in progress[cite: 57].</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;