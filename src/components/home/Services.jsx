import React from 'react';
import { 
  Share2, 
  Rocket, 
  PenTool, 
  TrendingUp, 
  BarChart3, 
  Laptop, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      desc: "We turn attention into trust through consistent, high-impact content and community engagement.",
      icon: Share2,
      tag: "Engagement"
    },
    {
      title: "Digital Marketing",
      desc: "Strategic growth systems engineered to drive real business outcomes and measurable ROI.",
      icon: Rocket,
      tag: "Performance"
    },
    {
      title: "Content Planning",
      desc: "Structured storytelling and authority-building calendars designed to convert followers into fans.",
      icon: PenTool,
      tag: "Authority"
    },
    {
      title: "Brand Growth",
      desc: "Positioning your brand for long-term dominance by building visibility and credibility.",
      icon: TrendingUp,
      tag: "Scaling"
    },
    {
      title: "Ad Management",
      desc: "Precision-targeted performance marketing across Meta and Google to maximize every dollar spent.",
      icon: BarChart3,
      tag: "ROI"
    },
    {
      title: "Web Development",
      desc: "High-performance, conversion-optimized websites built to be your 24/7 sales engine.",
      icon: Laptop,
      tag: "Conversion"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Fixed Responsiveness */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 sm:w-12 bg-[#ff751f]"></span>
              <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black text-[#005d30]">Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              What We Do <br /> 
              <span className="text-[#005d30] italic font-serif">Best</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right text-sm leading-relaxed">
            We don't believe in one-size-fits-all. Every strategy is custom-built for your brand's unique DNA.
          </p>
        </div>

        {/* Services Grid - Optimized for Mobile/Tab/Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#F8F9FA] p-6 sm:p-8 md:p-10 rounded-[30px] sm:rounded-[40px] border border-transparent hover:border-[#005d30]/10 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Background Shape */}
              <div className="absolute -top-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-[#005d30]/5 rounded-full group-hover:bg-[#ff751f]/10 transition-colors duration-500"></div>
              
              {/* Icon & Tag */}
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#005d30] group-hover:text-[#ff751f] transition-colors duration-500" />
                </div>
                <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-white rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#ff751f] transition-colors shadow-sm">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 group-hover:text-[#005d30] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-medium pr-4 sm:pr-0">
                {service.desc}
              </p>

              {/* Interactive Bottom Accent */}
              <div className="mt-6 sm:mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="h-[1px] sm:h-[2px] w-6 sm:w-8 bg-[#ff751f]"></div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#ff751f]">Learn More</span>
              </div>

              {/* Subtle Numbering - Adjusted for small screens */}
              <span className="absolute bottom-4 right-6 sm:bottom-6 sm:right-10 text-slate-100 font-black text-4xl sm:text-6xl group-hover:text-[#005d30]/5 transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-20 flex justify-center">
          <button className="bg-slate-900 text-white w-full sm:w-auto px-10 py-4 sm:py-5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-[#005d30] hover:scale-105 active:scale-95 shadow-xl transition-all flex items-center justify-center gap-4 group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;