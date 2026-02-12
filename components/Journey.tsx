
import React from 'react';

const Journey: React.FC = () => {
  const education = [
    {
      year: "2024 — 2026",
      inst: "IIM Calcutta",
      degree: "MBA (PGDM)",
      detail: "Deep diving into strategy and consumer psychology at the 'Joka' campus. Exploring how behavioral finance influences large-scale business decisions."
    },
    {
      year: "2020 — 2023",
      inst: "Kirori Mal College, DU",
      degree: "Bachelor of Commerce (H)",
      detail: "Graduated with top academic honours. Balanced rigorous commerce studies with high-impact leadership as Marketing Head."
    },
    {
      year: "Foundations",
      inst: "Rank Holder Legacy",
      degree: "Academic Excellence",
      detail: "Consistent first rank holder throughout school (10th, 11th, 12th). Built a foundation of analytical rigour and discipline early on."
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 md:px-20 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/5 flex flex-col">
            <h2 className="text-sm font-bold tracking-[0.3em] text-rose-500 mb-6 uppercase">The Journey So Far</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Evolving at the <br/><span className="italic text-neutral-400">speed of curiosity.</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed text-lg mb-12">
              From school topper to the competitive halls of IIM Calcutta, my journey is defined by a consistent pursuit of excellence and a refusal to be confined to one function. Each step has been about asking the right questions.
            </p>
            
            {/* Improved Image Container to prevent overlap */}
            <div className="relative group mt-auto pt-4">
              <div className="absolute inset-0 bg-rose-600 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://image2url.com/r2/default/images/1770920599616-ada444f8-ffaf-46fe-ae84-88ae5f7802ed.jpeg" 
                  alt="Aditi at IIMC" 
                  className="w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl z-20 text-neutral-900 border border-neutral-200 shadow-xl max-w-[180px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Academic Home</p>
                <p className="text-sm font-serif italic font-bold">IIM Calcutta Campus</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 space-y-12 pt-4">
            {education.map((edu, idx) => (
              <div key={idx} className="group relative pl-12 border-l border-neutral-800 pb-12 last:pb-0">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-rose-600 ring-8 ring-rose-600/10 transition-all group-hover:scale-150"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                  <span className="text-rose-500 font-mono text-sm tracking-widest">{edu.year}</span>
                  <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{edu.inst}</span>
                </div>
                <h4 className="text-2xl font-serif mb-3 group-hover:text-rose-400 transition-colors">{edu.degree}</h4>
                <p className="text-neutral-400 text-lg leading-relaxed">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
