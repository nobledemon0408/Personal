
import React from 'react';
import { Heart, Stethoscope, Dog, Coffee, Palette } from 'lucide-react';

const Lifestyle: React.FC = () => {
  const lifestyles = [
    {
      icon: <Stethoscope className="text-rose-500" />,
      title: "Pre-Doctor Advisor",
      desc: "Deeply curious about nutrition and health. Lost 15kg and now I help friends decode their blood tests and lifestyle habits."
    },
    {
      icon: <Palette className="text-indigo-500" />,
      title: "Fashion as Styling",
      desc: "Minimal capsule, maximum identity. My style is my edge—compact, expressive, and always well-curated."
    },
    {
      icon: <Coffee className="text-amber-500" />,
      title: "The Healthy Foodie",
      desc: "Experimenting with traditional recipes and healthy twists. Always hunting for flavors that defy simple description."
    },
    {
      icon: <Dog className="text-rose-400" />,
      title: "Shih Tzu Mom",
      desc: "My shih tzu is my child. Animal lover, pet parent, and unconditional care-taker."
    }
  ];

  return (
    <section id="lifestyle" className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
             <div className="grid grid-cols-2 gap-6 items-start">
                <div className="space-y-6">
                   <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500">
                      <img src="https://image2url.com/r2/default/images/1770920194219-e2d64c6d-b9d8-4a92-a53f-199ad6743547.jpeg" alt="Aditi and her IIM books" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold">IIM LIFE</div>
                   </div>
                   <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                      <img src="https://image2url.com/r2/default/images/1770920816566-f66d4d2a-b79f-4415-bf3a-90d441256e5a.jpeg" alt="Aditi with her shih tzu" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold">MOM MOMENTS</div>
                   </div>
                </div>
                <div className="pt-16 space-y-6">
                   <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-500">
                      <img src="https://image2url.com/r2/default/images/1770920914859-c0e00bea-93ea-406d-a83e-c88f37ef7be7.jpeg" alt="Creative portrait" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-all duration-500">
                      <img src="https://image2url.com/r2/default/images/1770920745305-4a61ca4e-9592-409a-9d88-4c45463c8ff5.jpeg" alt="Outdoor candid" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white transform rotate-6 hover:rotate-0 transition-all duration-500">
                      <img src="https://image2url.com/r2/default/images/1770920701268-ee8ba54c-3ebc-4137-9496-c97ef194e29a.jpeg" alt="Expressive smile" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-400 mb-4 uppercase">Beyond The MBA</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-12">Candidly human, <br/><span className="text-rose-500 italic">forever curious.</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {lifestyles.map((l, idx) => (
                <div key={idx} className="space-y-4 border-b border-neutral-100 pb-8 hover:bg-neutral-50/50 p-4 rounded-2xl transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-xl group-hover:scale-110">
                      {l.icon}
                    </div>
                    <h4 className="text-xl font-bold">{l.title}</h4>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-10 bg-rose-50 rounded-[3rem] border border-rose-100 relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-rose-900 font-bold text-lg mb-2 underline decoration-rose-300 decoration-wavy underline-offset-4">Currently into:</p>
                  <p className="text-rose-700 italic text-xl">"New sensory experiences, diverse cultures, and the evolving art of self-expression."</p>
               </div>
               <Heart className="absolute -bottom-4 -right-4 text-rose-200 fill-rose-100" size={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
