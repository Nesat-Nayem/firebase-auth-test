import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our 2023 stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">88.5K+</h3>
          <p className="text-gray-700">Attendees</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">50%</h3>
          <p className="text-gray-700">Director and above</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">2,400</h3>
          <p className="text-gray-700">Exhibitors</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">202</h3>
          <p className="text-gray-700">Countries and Territories</p>
        </div>
        
      </div>
    </section>
  );
};

export default StatsSection;
