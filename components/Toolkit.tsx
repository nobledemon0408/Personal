
import React from 'react';

const Toolkit: React.FC = () => {
  const tools = [
    "Excel", "PowerPoint", "Statista", "Marketline", "Traction", 
    "Private Circle", "Crisil Research", "CMIE", "Statista", 
    "Secondary Research", "Market Analysis", "AI Tools", 
    "Canva", "AI Studio", "Presentation Storytelling"
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="md:w-1/3">
             <h3 className="text-3xl font-serif mb-4">My Toolkit</h3>
             <p className="text-neutral-500">The technical and analytical pillars that support my strategic thinking.</p>
           </div>
           
           <div className="flex-1 flex flex-wrap gap-3 justify-center md:justify-end">
             {tools.map((tool, idx) => (
               <span 
                 key={idx} 
                 className="px-6 py-3 bg-white border border-neutral-200 text-sm font-bold rounded-full hover:border-rose-300 hover:text-rose-600 transition-all cursor-default shadow-sm"
               >
                 {tool}
               </span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
