
import React from 'react';
import { Target, MessageCircle, Search, TrendingUp, HelpCircle } from 'lucide-react';

const HowIWork: React.FC = () => {
  const strengths = [
    {
      icon: <Target className="text-rose-500" />,
      title: "Embracing Ambiguity",
      desc: "I don't need a roadmap to start. I'm comfortable navigating 'vague' projects with zero guidance, building the path as I go."
    },
    {
      icon: <Search className="text-blue-500" />,
      title: "Pattern Recognition",
      desc: "I synthesize qualitative vibes and quantitative data points into cohesive strategic narratives. I see the story in the noise."
    },
    {
      icon: <HelpCircle className="text-amber-500" />,
      title: "The Right Questions",
      desc: "My skill lies in information seeking. I know how to interview upper management and experts to extract the missing 'why'."
    },
    {
      icon: <MessageCircle className="text-emerald-500" />,
      title: "Stakeholder Pulse",
      desc: "I believe in keeping the loop closed. Whether it's a manager or a client, I provide consistent, clear, and proactive updates."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-400 mb-4 uppercase">How I Work</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Ambiguity is my workspace.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((s, idx) => (
            <div key={idx} className="group p-8 bg-[#fafafa] rounded-[2rem] hover:bg-neutral-900 hover:text-white transition-all duration-500">
               <div className="mb-6 transform group-hover:scale-110 transition-transform">
                 {s.icon}
               </div>
               <h4 className="text-xl font-bold mb-3">{s.title}</h4>
               <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed">
                 {s.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
