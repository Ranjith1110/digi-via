import React from 'react';
import {
    Briefcase,
    Compass,
    Zap,
    Award,
    MessageSquare,
    Layers,
    ArrowRight,
    ShieldCheck,
    ZapIcon
} from 'lucide-react';

const About = () => {
    const differentiators = [
        {
            title: "Business-first mindset",
            desc: "We don't just look at clicks; we look at your bottom line and overall ROI.",
            icon: Briefcase,
            featured: true
        },
        {
            title: "Clear strategies",
            desc: "No random posts. Every action is part of a high-level roadmap.",
            icon: Compass,
            featured: false
        },
        {
            title: "Performance-focused",
            desc: "Advertising built for conversion, not just vanity metrics.",
            icon: Zap,
            featured: true
        },
        {
            title: "Strong branding",
            desc: "Creating premium identities that build instant authority.",
            icon: Award,
            featured: false
        },
        {
            title: "Transparent communication",
            desc: "Direct access to our team with clear, honest reporting.",
            icon: MessageSquare,
            featured: false
        },
        {
            title: "Scalable systems",
            desc: "Marketing infrastructure designed for long-term growth.",
            icon: Layers,
            featured: false
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section 1: The Narrative (Unchanged for flow) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-12 bg-[#ff751f]"></span>
                            <span className="uppercase tracking-[0.3em] text-[10px] font-black text-[#005d30]">Our Story</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
                            Simple. Effective. <br />
                            <span className="text-[#005d30] italic font-serif">Profitable.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                            Digi-Via was created with one goal: to make digital marketing profitable for businesses.
                            We are a results-driven agency focused on helping startups and growing brands succeed online.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-[#005d30]/5 rounded-xl border border-[#005d30]/10">
                                <span className="block text-xl font-black text-[#005d30]">No Fluff.</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Just Results</span>
                            </div>
                            <div className="px-6 py-3 bg-[#ff751f]/5 rounded-xl border border-[#ff751f]/10">
                                <span className="block text-xl font-black text-[#ff751f]">No Shortcuts.</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Pure Strategy</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img src="/about-main.jpg" alt="Our Team" className="w-full h-[500px] object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-full h-full bg-[#005d30] rounded-[40px] -z-10 opacity-5"></div>
                    </div>
                </div>

                {/* Section 2: REDESIGNED - The Digi-Via Edge (Mosaic Grid) */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[2px] w-8 bg-[#ff751f]"></span>
                                <span className="uppercase tracking-[0.3em] text-[10px] font-black text-[#005d30]">The Edge</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                                What Makes Us <br />
                                <span className="text-[#ff751f]">Different</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-medium max-w-[280px] text-sm leading-relaxed">
                            We don't believe in "one-size-fits-all" marketing. Your brand is unique—your strategy should be too.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-[40px] transition-all duration-500 overflow-hidden border
                ${item.featured
                                        ? 'lg:col-span-2 lg:row-span-1 bg-slate-900 border-slate-800'
                                        : 'bg-[#F8F9FA] border-transparent hover:bg-white hover:border-[#005d30]/20 hover:shadow-2xl hover:shadow-[#005d30]/5'
                                    }`}
                            >
                                {/* Background Accent for featured cards */}
                                {item.featured && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#005d30] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                                )}

                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                  ${item.featured ? 'bg-[#005d30] text-white' : 'bg-white text-[#005d30] shadow-sm group-hover:bg-[#ff751f] group-hover:text-white'}`}
                                >
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <h3 className={`text-xl font-black leading-tight mb-3 transition-colors
                  ${item.featured ? 'text-white' : 'text-slate-900 group-hover:text-[#005d30]'}`}
                                >
                                    {item.title}
                                </h3>

                                <p className={`text-sm font-medium leading-relaxed transition-colors
                  ${item.featured ? 'text-gray-400' : 'text-slate-500'}`}
                                >
                                    {item.desc}
                                </p>

                                {/* Aesthetic Indicator */}
                                <div className={`absolute bottom-6 right-8 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500
                  ${item.featured ? 'text-[#005d30]' : 'text-[#ff751f]'}`}
                                >
                                    Standard 0{index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Vision (Unchanged for flow) */}
                <div className="relative bg-slate-900 rounded-[50px] md:rounded-[80px] p-10 md:p-24 overflow-hidden text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#005d30]/20 to-transparent"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#ff751f] mb-6 block">Our Vision</span>
                        <h2 className="text-3xl md:text-6xl font-black text-white leading-tight mb-10">
                            To become your trusted <br />
                            <span className="text-[#005d30]">Digital Growth Partner</span> <br />
                            worldwide.
                        </h2>
                        <button className="group relative px-10 py-5 bg-[#005d30] text-white font-black rounded-full overflow-hidden transition-all shadow-2xl hover:scale-105 active:scale-95">
                            <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            <span className="relative flex items-center gap-3 text-xs uppercase tracking-widest">
                                Start Your Journey
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff751f] blur-[100px] opacity-20"></div>
                </div>

            </div>
        </section>
    );
};

export default About;