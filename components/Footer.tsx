
import React from 'react';
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-neutral-800 pb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Let's solve problems &<br />
              <span className="italic text-rose-500">chase possibilities.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              Always open to conversations about consumer psychology, strategy, or even healthy recipes. Let's connect!
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <a 
                href="mailto:aditi.verma.cal@gmail.com" 
                className="flex items-center space-x-3 text-2xl font-bold hover:text-rose-500 transition-colors underline decoration-rose-500 decoration-4 underline-offset-8"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={28} />
              </a>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/aditi-verma0408/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZnu%2BmCzbRiKr6CqICeQ5MQ%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-neutral-800 rounded-full hover:bg-rose-600 transition-all transform hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/aditiverma.0408?igsh=MXFoM3B6djNvbGM4OQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-neutral-800 rounded-full hover:bg-rose-600 transition-all transform hover:-translate-y-1"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <div className="w-48 h-48 rounded-[2rem] overflow-hidden border-4 border-neutral-800 mb-6 rotate-3">
                <img src="https://image2url.com/r2/default/images/1770920701268-ee8ba54c-3ebc-4137-9496-c97ef194e29a.jpeg" alt="Aditi Verma Smile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
             </div>
             <div className="p-8 bg-neutral-800/40 rounded-3xl border border-neutral-700 backdrop-blur-sm w-full md:w-64 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6">Quick Jump</p>
                <div className="space-y-4 font-bold text-lg">
                  <a href="#about" className="block hover:text-rose-500 transition-colors">About</a>
                  <a href="#experience" className="block hover:text-rose-500 transition-colors">Work</a>
                  <a href="#lifestyle" className="block hover:text-rose-500 transition-colors">Lifestyle</a>
                  <a href="https://drive.google.com/file/d/1PcuyqLOnw7_u7TKQsRsqJUlRi8iW3tE6/view?usp=sharing" target="_blank" className="block text-rose-400">Resume</a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm gap-6">
          <p>© 2025 ADITI VERMA. Crafted with curiosity.</p>
          <div className="flex flex-wrap justify-center gap-8 font-mono tracking-widest text-[10px] uppercase">
            <span>Born: Kanpur</span>
            <span>Raised: Delhi NCR</span>
            <span>Current: IIM Calcutta</span>
          </div>
        </div>
      </div>
      
      {/* Dynamic Background Text */}
      <div className="absolute bottom-[-10%] right-[-10%] text-[25vw] font-serif opacity-[0.03] select-none pointer-events-none whitespace-nowrap leading-none italic">
        Verma. Verma.
      </div>
    </footer>
  );
};

export default Footer;
