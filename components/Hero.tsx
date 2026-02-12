
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-[#fafafa]">
      <div className="flex-1 space-y-8 max-w-2xl animate-fade-in-up z-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
             <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 text-xs font-bold tracking-widest rounded-full">
               ADITI VERMA • 23
             </span>
             <span className="flex items-center space-x-1 text-xs font-bold text-neutral-400 tracking-widest uppercase">
               <Sparkles size={14} className="text-amber-400" />
               <span>Creative Professional</span>
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Curious about consumers.<br />
            <span className="italic text-neutral-400 font-normal underline decoration-rose-300 decoration-wavy underline-offset-8">Drawn to complexity.</span><br />
            Comfortable in ambiguity.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed">
            I'm Aditi — an MBA student at IIM Calcutta exploring the intersection of human psychology and business growth. I find patterns where others see noise.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#experience" 
            className="group flex items-center space-x-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-rose-600 transition-all shadow-xl"
          >
            <span className="font-bold tracking-widest text-xs">VIEW MY WORK</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 border-2 border-neutral-200 text-neutral-900 font-bold rounded-full hover:border-neutral-900 transition-all text-xs tracking-widest"
          >
            THE HUMAN SIDE
          </a>
        </div>
      </div>

      <div className="flex-1 relative mt-16 md:mt-0 flex justify-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-8 border-white group">
          <img 
            src="https://image2url.com/r2/default/images/1770920032039-ff4007e0-1c47-424c-a37b-6c23f321bea2.jpeg" 
            alt="Aditi Verma - Creative Professional" 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-8 left-8 right-8 text-white">
             <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-80 mb-1">Portrait of a</p>
             <p className="text-2xl font-serif italic font-light">Creative Mind</p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block absolute -bottom-6 -left-12 glass p-6 rounded-2xl shadow-xl -rotate-6 max-w-[240px] animate-bounce-slow border border-rose-100">
           <p className="text-[10px] font-bold text-rose-600 mb-2 tracking-[0.2em] uppercase">The Styling Edge</p>
           <p className="text-sm italic font-serif leading-tight">"A minimal wardrobe, but always a deeply personal, edgy expression."</p>
        </div>
        
        <div className="hidden lg:block absolute top-10 -right-8 glass p-6 rounded-2xl shadow-xl rotate-12 max-w-[200px] border border-blue-100">
           <p className="text-[10px] font-bold text-blue-600 mb-2 tracking-[0.2em] uppercase">Strategic Pulse</p>
           <p className="text-sm font-bold leading-tight italic">Conceptualized India's first luxury HNI fashion credit card.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
