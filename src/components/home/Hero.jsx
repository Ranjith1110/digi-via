import React from 'react';

const Hero = ({ onStartProject }) => {
  return (
    <section className="relative min-h-screen bg-[#F8F9FA] pt-32 pb-20 px-6 rounded-b-[50px] md:rounded-b-[80px] overflow-hidden flex flex-col justify-center">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-20 left-10 opacity-10 animate-pulse">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
          <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45L50 0Z" fill="#005d30" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <div className="w-64 h-64 border-40 border-[#ff751f] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Updated Headline with Digi-Via Content */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-center text-slate-900 leading-[1.1] tracking-tighter">
            Your Growth <span className="text-[#005d30] italic font-serif">Partner</span> <br className="hidden lg:block" /> 
            in the <span className="text-[#ff751f]">Digital World</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: New Agency Description */}
          <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-12 bg-[#ff751f]"></span>
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400">Our Mission</span>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We don’t just run ads. We build <span className="text-slate-900 font-bold">digital systems</span> that generate leads and scale brands through performance-driven execution.
            </p>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 rounded-full font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:text-white">
              <span className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">Innovate Your Brand</span>
            </button>
          </div>

          {/* Center Column: The Visual Focus (Unchanged) */}
          <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white rounded-full shadow-2xl"></div>
            
            <div className="relative group">
              {/* <img 
                src="/digi-via.png" 
                alt="Creativity" 
                className="w-full max-w-md h-[500px] object-cover rounded-[60px] z-10 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
              /> */}
              <img 
                src="/digi-via.png" 
                alt="Creativity" 
                className="w-full max-w-md h-112.5 object-cover rounded-[60px] z-10  transition-all duration-700 cursor-pointer"
              />
              
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-white/40 backdrop-blur-2xl p-2 rounded-full z-20 border border-white shadow-xl min-w-max">
                <button onClick={onStartProject} className="bg-[#005d30] text-white px-8 py-4 rounded-full text-[10px] font-black tracking-widest hover:bg-[#ff751f] hover:scale-105 transition-all active:scale-95 shadow-lg">
                  START PROJECT
                </button>
                <button className="text-slate-900 px-6 py-4 text-[10px] font-black tracking-widest hover:text-[#005d30] group flex items-center gap-2 transition-all">
                  COLLABORATE
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Trust Signals (Unchanged) */}
          <div className="lg:col-span-3 lg:text-right space-y-10 order-3 flex flex-col items-center lg:items-end">
            <div className="bg-white p-6 rounded-[30px] shadow-sm border border-slate-100 max-w-50">
               <div className="flex space-x-1 mb-3 justify-center lg:justify-end">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff751f] text-sm">★</span>
                ))}
              </div>
              <h2 className="text-4xl font-black text-slate-900">10+</h2>
              <p className="text-slate-400 font-bold uppercase tracking-tighter text-[10px]">Years of Excellence</p>
            </div>

            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-[#005d30] flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                +2k
              </div>
            </div>
            <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">Trusted by Global Brands</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;