import React from 'react';
import Navbar from '../components/Navbar.jsx';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-20 px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#004a99] mb-4">Connect with Sphere Innovision</h2>
        <p className="text-slate-600 mb-10">Ready to engineer your digital scalability? Reach out to our specialist team.</p>
        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
          <p className="text-xl font-semibold">Email: info@sphereinnovision.com</p>
          <p className="text-slate-500 mt-2">Lagos, Nigeria | Maritime Logistics Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;