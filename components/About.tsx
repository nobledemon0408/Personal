
import React from 'react';
import { Palette, BrainCircuit, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const drivers = [
    {
      icon: <Palette className="text-rose-500" />,
      title: "Complexity Over Comfort",
      desc: "I'm fascinated by high-stakes business strategy and the nuances of a perfect aesthetic alike. I dive deep into the 'why' that drives desire."
    },
    {
      icon: <BrainCircuit className="text-indigo-500" />,
      title: "The Curious Generalist",
      desc: "I refuse to be confined. Strategy, finance, and marketing are all tools in my kit for solving multidimensional problems."
    },
    {
      icon: <Users className="text-amber-500" />,
      title: "Natural Communicator",
      desc: "I thrive in client-facing environments. Translating dense data into compelling human stories is where I feel most at home."
    },
    {
      icon: <Zap className="text-green-500" />,
      title: "Pure Grit Research",
      desc: "Starting with a blank page doesn't scare me. I built a ₹150Cr roadmap using nothing but sharp secondary research and curiosity."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-400 mb-6 uppercase">The Narrative</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
              A complex consumer myself,<br />
              <span className="text-rose-600 italic">I bridge insight & action.</span>
            </h3>
            
            <p className="text-neutral-600 text-lg mb-12 leading-relaxed italic border-l-4 border-rose-100 pl-6">
              "I am someone who is interested in understanding consumers on a complex level. Because I am a complex consumer myself, I love understanding what someone goes through when making a buying decision—whether it's fashion, finance, or tech."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {drivers.map((item, idx) => (
                <div key={idx} className="group space-y-4 p-4 rounded-3xl hover:bg-neutral-50 transition-all border border-transparent hover:border-neutral-100">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-neutral-50 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700 border-[16px] border-white -rotate-1">
               <img 
                 src="https://image2url.com/r2/default/images/1770920745305-4a61ca4e-9592-409a-9d88-4c45463c8ff5.jpeg" 
                 alt="Aditi Verma - Playful & Professional" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            {/* Artistic accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-blue-100 rounded-full blur-[80px] opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
