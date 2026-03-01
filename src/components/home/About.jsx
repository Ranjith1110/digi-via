import React from 'react';
import {
    Briefcase, Compass, Zap, Award,
    MessageSquare, Layers, ArrowRight
} from 'lucide-react';

const About = ({ onStartProject }) => {
    const differentiators = [
        { title: "Business-first mindset", desc: "We look at your bottom line and overall ROI, not just clicks.", icon: Briefcase, featured: true },
        { title: "Clear strategies", desc: "No shortcuts. Every action is part of a high-level roadmap.", icon: Compass, featured: false },
        { title: "Performance-focused", desc: "Advertising built for conversion, not vanity metrics.", icon: Zap, featured: true },
        { title: "Strong branding", desc: "Premium identities that build instant authority.", icon: Award, featured: false },
        { title: "Transparent communication", desc: "Direct access with clear, honest reporting.", icon: MessageSquare, featured: false },
        { title: "Scalable systems", desc: "Marketing infrastructure designed for long-term growth.", icon: Layers, featured: false },
    ];

    return (
        <section
            className="bg-white py-16 md:py-32 px-4 sm:px-6 overflow-hidden relative scroll-smooth"
            id='about'
            style={{ scrollBehavior: 'smooth' }}
        >
            {/* Ghost Typography */}
            <div className="absolute top-0 right-0 text-[8rem] md:text-[20rem] font-black text-slate-50/80 select-none pointer-events-none tracking-tighter leading-none z-0">
                DIGI
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section 1: The Narrative Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-32 md:mb-48">

                    {/* Left Column: Narrative Content */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6 md:mb-8" data-aos="fade-right">
                            <span className="h-[1.5px] bg-[#ff751f] w-15" />
                            <span className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-black text-[#ff751f]">
                                Established Growth
                            </span>
                        </div>

                        <h2
                            className="text-4xl md:text-8xl font-black text-slate-900 leading-none md:leading-[0.9] tracking-tighter mb-8 md:mb-10"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Digital <br />
                            <span className="text-[#005d30] italic font-serif">Authority.</span>
                        </h2>

                        <div className="space-y-6 max-w-xl" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                Digi-Via was created with one goal to make digital marketing <span className="text-slate-900 underline decoration-[#ff751f] decoration-4 underline-offset-8">profitable</span> for businesses.
                            </p>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                We combine creativity with data and strategy with execution. Every campaign is built as a high-performance system to deliver ROI without compromise.
                            </p>
                        </div>

                        <div className="flex gap-4 md:gap-8 mt-10 md:mt-12" data-aos="fade-up" data-aos-delay="300">
                            <div className="border-l-[3px] border-[#ff751f] pl-4 md:pl-6">
                                <span className="block text-2xl md:text-3xl font-black text-[#ff751f]">01.</span>
                                <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-slate-400">Pure Results</span>
                            </div>
                            <div className="border-l-[3px] border-[#005d30] pl-4 md:pl-6">
                                <span className="block text-2xl md:text-3xl font-black text-[#005d30]">02.</span>
                                <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-slate-400">Elite Strategy</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative Image */}
                    <div className="lg:col-span-6 relative order-1 lg:order-2" data-aos="zoom-out" data-aos-duration="1500">
                        <div className="relative z-10 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl group">
                            <img src="/2.jpg" alt="Excellence" className="w-full h-[400px] md:h-[650px] object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out" />
                        </div>
                        {/* CSS-only rotating border instead of framer-motion rotate */}
                        <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 border-2 border-dashed border-[#ff751f]/20 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                    </div>
                </div>

                {/* Section 2: The Edge Mosaic */}
                <div className="mb-32 md:mb-48">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                        <div className="max-w-2xl" data-aos="fade-right">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-2 w-2 bg-[#ff751f] rounded-full" />
                                <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#ff751f]">The Advantage</span>
                            </div>
                            <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter">
                                Why We Are <br className="hidden md:block" /> <span className="text-[#005d30] italic font-serif">Different.</span>
                            </h2>
                        </div>
                        <p
                            className="text-slate-400 font-bold max-w-60 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] leading-loose border-l-2 border-[#ff751f] pl-6 md:pl-8"
                            data-aos="fade-left"
                        >
                            Innovation driven by measurable outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className={`group relative p-8 md:p-12 rounded-[40px] md:rounded-[55px] transition-all duration-700 border overflow-hidden hover:-translate-y-4
                                ${item.featured
                                        ? 'bg-slate-900 border-slate-800 shadow-xl'
                                        : 'bg-[#FCFCFC] border-slate-100 hover:border-[#ff751f]/30 hover:shadow-xl'
                                    }`}
                            >
                                {item.featured && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff751f] rounded-full blur-[80px] opacity-10 -translate-y-1/2 translate-x-1/2" />
                                )}

                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 transition-all duration-500
                                    ${item.featured
                                        ? 'bg-[#ff751f] text-white'
                                        : 'bg-white text-[#ff751f] shadow-sm group-hover:bg-[#005d30] group-hover:text-white'}`}
                                >
                                    <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>

                                <h3 className={`text-xl md:text-2xl font-black mb-4 tracking-tight ${item.featured ? 'text-white' : 'text-slate-900 group-hover:text-[#ff751f]'}`}>
                                    {item.title}
                                </h3>

                                <p className={`text-xs md:text-sm leading-relaxed font-medium ${item.featured ? 'text-gray-400' : 'text-slate-500'}`}>
                                    {item.desc}
                                </p>

                                <div className={`absolute bottom-8 right-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-10 transition-all
                                    ${item.featured ? 'text-[#ff751f]' : 'text-[#005d30]'}`}>
                                    DV.{index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Vision - Responsive Luxury White Capsule */}
                <div
                    data-aos="fade-up"
                    className="relative bg-[#02100a] rounded-[40px] md:rounded-[80px] p-10 md:p-32 overflow-hidden text-center border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
                >
                    {/* Floating Orbs using standard CSS animation */}
                    <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-[#ff751f]/5 blur-[100px] rounded-full animate-pulse" />
                    <div className="absolute -bottom-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-[#005d30]/5 blur-[100px] rounded-full animate-pulse" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <span className="uppercase tracking-[0.4em] md:tracking-[0.8em] text-[9px] md:text-[10px] font-black text-slate-300 mb-8 block">
                            Visionary Partners
                        </span>
                        <h2 className="text-3xl md:text-8xl font-black text-slate-300 leading-[1.1] mb-12 tracking-tighter">
                            Your Global <br />
                            <span className="text-[#005d30] italic font-serif">Growth Engine.</span>
                        </h2>

                        <button
                            onClick={onStartProject} className="group relative px-8 md:px-16 py-5 md:py-7 bg-white font-black rounded-full overflow-hidden transition-all shadow-xl hover:scale-105 active:scale-95"
                        >
                            <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative flex items-center justify-center gap-4 md:gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-white transition-colors">
                                Start Your Legacy
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;