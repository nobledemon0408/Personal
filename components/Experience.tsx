
import React from 'react';
import { ExternalLink, Search, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Reliance Industries",
      role: "Treasury Intern (Luxury Focus)",
      period: "Apr 2025 — Jun 2025",
      impact: "Architected a ₹150 Cr growth opportunity via a first-of-its-kind luxury credit card.",
      points: [
        "Conceptualized a 3-tier luxury loyalty program for 85+ premium brands—my own brainchild.",
        "Benchmarked 25+ banking programs to identify lifestyle gaps in the HNI/UHNI segment.",
        "Conducted multi-format field audits to solve UI/UX friction in sales and card adoption.",
        "Liaised between three departments to implement virtual account management solutions."
      ],
      insight: "Impact: Transformed vague ambiguity into a concrete, multi-crore strategic roadmap.",
      color: "bg-blue-50 border-blue-100 text-blue-900"
    },
    {
      company: "X-Culture International",
      role: "Global Strategy Consultant",
      period: "2025 (8 Weeks)",
      impact: "Designed an India market-entry strategy for a $2.2B U.S. industrial-tech giant.",
      points: [
        "Led a global 4-member team (US, France) to build entry mode, sales, and HR strategies.",
        "Conducted deep market sizing and competitor analysis across five major industrial players.",
        "Segmented industries (Aerospace, Medical, Energy) to tailor the GTM approach.",
        "Produced comprehensive reports on logistics, trade compliance, and hiring channels."
      ],
      insight: "Impact: Built a bridge between global industrial-tech and the Indian market.",
      color: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-900"
    },
    {
      company: "Event & Sponsorships",
      role: "Operations & Alliances",
      period: "May 2023 — Aug 2023",
      impact: "Directed logistics for national broadcasts and secured ₹10L+ in brand deals.",
      points: [
        "Managed operations for the Premier Handball League, broadcasted on Sports18.",
        "Facilitated relationships for 'ET Excellence Awards' with high-profile dignitaries.",
        "Secured a ₹7.7 Lacs sponsorship deal with top sportswear brands like Nivia.",
        "Managed relationships across 10+ vendors to ensure seamless event execution."
      ],
      insight: "Impact: Coordinated high-pressure execution across multiple stakeholders.",
      color: "bg-amber-50 border-amber-100 text-amber-900"
    },
    {
      company: "Commerce Society, KMC",
      role: "Marketing Head",
      period: "2021",
      impact: "Spearheaded a marketing engine that boosted society visibility by 25%.",
      points: [
        "Directed a 20-member team for a Campus Ambassador Program across 15 colleges.",
        "Negotiated 30+ college MoUs and secured sponsorships through cold-calling grit.",
        "Drove social media expansion and acted as POC for 700+ event participants."
      ],
      insight: "Impact: Built a high-performance student brand from the ground up.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-900"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-400 mb-6 uppercase">Experience In Action</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-[1.1]">
              Turning complex market patterns<br/>
              <span className="text-rose-600 italic">into actionable strategies.</span>
            </h3>
          </div>
          <div className="block pb-2">
             <a href="https://drive.google.com/file/d/1PcuyqLOnw7_u7TKQsRsqJUlRi8iW3tE6/view?usp=sharing" target="_blank" className="group flex items-center space-x-3 text-rose-600 font-bold hover:text-rose-700 transition-colors">
               <span className="border-b-2 border-rose-100 group-hover:border-rose-600 pb-1 transition-all">Full Professional CV</span>
               <ExternalLink size={20} />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`group p-10 rounded-[3rem] border ${exp.color} transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden`}>
              {/* Subtle background storytelling detail */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform pointer-events-none">
                 <ChevronRight size={180} />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-[10px] font-bold opacity-50 uppercase tracking-[0.3em]">{exp.company}</h4>
                    <h5 className="text-3xl font-serif mt-2">{exp.role}</h5>
                  </div>
                  <span className="text-[10px] font-bold opacity-60 bg-white/70 px-4 py-1.5 rounded-full border border-black/5 uppercase tracking-widest">{exp.period}</span>
                </div>
                
                <p className="font-bold text-xl mb-10 leading-snug tracking-tight">"{exp.impact}"</p>
                
                <ul className="space-y-5 mb-12">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-4 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 flex-shrink-0 opacity-40"></div>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-black/5 relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3">Professional Insight</p>
                <p className="text-sm font-bold italic group-hover:text-rose-600 transition-colors">{exp.insight}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Research Project Callout - Storytelling focused */}
        <div className="mt-20 p-8 md:p-16 bg-white rounded-[4rem] shadow-sm border border-neutral-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3">
             <div className="relative group">
                <div className="absolute inset-0 bg-neutral-100 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform"></div>
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                    <img src="https://image2url.com/r2/default/images/1770920327237-e3575e7f-5034-4346-83d8-73729b61b66e.jpeg" alt="Aditi Verma - Research Journey" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
          <div className="flex-1">
             <div className="flex items-center space-x-5 mb-8">
                <div className="p-4 bg-rose-50 rounded-3xl">
                    <Search size={32} className="text-rose-500" />
                </div>
                <div>
                    <p className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em] mb-1">Deep-Dive Primary Research</p>
                    <h4 className="text-3xl md:text-5xl font-serif italic">The Gender of Innovation</h4>
                </div>
             </div>
             <p className="text-neutral-500 leading-relaxed text-lg md:text-xl font-light">
               I embarked on a three-month research journey, engaging with <span className="text-neutral-900 font-bold">400+ respondents</span> to decode the structural and behavioral barriers in entrepreneurship. My work identified critical gaps in how perception influences funding—turning qualitative interviews into a strategic narrative for inclusive growth.
             </p>
             <div className="mt-12 flex flex-wrap gap-4">
               {["400+ Primary Data Points", "Structural Barrier Mapping", "Market Gap Analysis"].map((tag, i) => (
                 <span key={i} className="px-6 py-3 bg-neutral-50 border border-neutral-100 rounded-full text-xs font-bold text-neutral-600 shadow-sm italic hover:bg-rose-50 hover:text-rose-600 transition-all cursor-default">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
