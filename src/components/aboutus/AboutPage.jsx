import React from 'react';
import {
    Target,
    Eye,
    TrendingUp,
    Users,
    BarChart,
    ShieldCheck,
    Zap,
    ArrowRight
} from 'lucide-react';

const AboutPage = ({ onStartProject }) => {
    const whyChooseUs = [
        { title: "Strategy before execution", icon: Target },
        { title: "Performance-driven marketing", icon: Zap },
        { title: "Creative backed by data", icon: BarChart },
        { title: "Transparent reporting", icon: Eye },
        { title: "Dedicated support", icon: ShieldCheck },
        { title: "Scalable solutions", icon: TrendingUp },
    ];

    return (
        <section className="bg-white text-slate-900 py-24 px-6 relative overflow-hidden min-h-screen mt-14">
            {/* Soft Ambient Accents */}
            <div className="absolute top-0 left-0 w-150 h-150 bg-[#005d30]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#ff751f]/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- Hero Section: Who We Are --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
                            <span className="h-0.5 w-12 bg-[#ff751f]"></span>
                            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#ff751f]">Who We Are</span>
                        </div>

                        <h1
                            className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-900"
                            data-aos="fade-up"
                        >
                            Growth-Driven <br />
                            <span className="text-[#005d30] italic font-serif">Authority.</span>
                        </h1>

                        <div className="space-y-6 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-xl text-slate-700 leading-relaxed font-semibold">
                                Digi-Via is a growth-driven Digital Marketing and IT solutions company built to help brands scale smarter.
                            </p>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                We don’t believe in vanity metrics — we believe in real visibility, qualified leads, and measurable business growth. Our approach blends strategy, creativity, and performance marketing to create digital systems that actually work.
                            </p>
                            <div className="p-8 border-l-4 border-[#ff751f] bg-slate-50 rounded-r-3xl italic text-slate-600 font-medium shadow-sm">
                                "How does this help your business grow?" — The question that starts every Digi-Via campaign.
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative" data-aos="zoom-in" data-aos-duration="1200">
                        <div className="relative rounded-[50px] overflow-hidden border-8 border-slate-50 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Strategy"
                                className="w-full h-137.5 object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* High-Contrast Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-slate-900 p-8 rounded-3xl shadow-2xl">
                            <Users className="w-8 h-8 text-[#ff751f] mb-2" />
                            <div className="text-2xl font-black text-white">Partner</div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-400">Global Scale</div>
                        </div>
                    </div>
                </div>

                {/* --- Mission & Vision Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div
                        className="p-12 rounded-[40px] bg-[#fcfcfc] border border-slate-100 hover:border-[#005d30]/30 hover:shadow-xl transition-all duration-500 group"
                        data-aos="fade-right"
                    >
                        <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#005d30] transition-all duration-500">
                            <Target className="w-7 h-7 text-[#005d30] group-hover:text-white" />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900">Our Mission</h2>
                        <p className="text-slate-500 leading-relaxed font-medium">
                            • Help businesses build a strong digital presence. <br />
                            • Generate high-quality leads and conversions. <br />
                            • Deliver innovative and scalable IT solutions. <br />
                            • Support brands in achieving sustainable digital growth.

                        </p>
                    </div>

                    <div
                        className="p-12 rounded-[40px] bg-[#fcfcfc] border border-slate-100 hover:border-[#ff751f]/30 hover:shadow-xl transition-all duration-500 group"
                        data-aos="fade-left"
                    >
                        <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#ff751f] transition-all duration-500">
                            <Eye className="w-7 h-7 text-[#ff751f] group-hover:text-white" />
                        </div>
                        <h2 className="text-3xl font-black mb-4 text-slate-900">Our Vision</h2>
                        <p className="text-slate-500 leading-relaxed font-medium">
                            To become a trusted digital growth partner for businesses by delivering innovative marketing and technology solutions that drive measurable results.
                        </p>
                    </div>
                </div>

                {/* --- Why Digi-Via Section --- */}
                <div className="mb-32">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-[#ff751f] font-black uppercase tracking-[0.5em] text-[10px]">The Advantage</span>
                        <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900 tracking-tighter">Why Digi-Via?</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="flex items-center gap-5 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#ff751f]/20 transition-all group"
                            >
                                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-[#ff751f]/10 transition-colors">
                                    <item.icon className="w-6 h-6 text-[#ff751f]" />
                                </div>
                                <span className="font-bold text-lg text-slate-800">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Bottom CTA: Luxury Capsule --- */}
                <div
                    className="relative p-12 md:p-24 rounded-[60px] bg-slate-900 overflow-hidden text-center shadow-2xl"
                    data-aos="zoom-in"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-white">
                            Ready to transform your <br />
                            <span className="italic font-serif text-[#005d30]">Online Presence?</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg font-medium">
                            We partner with startups, SMEs, and established businesses to transform their online presence into a revenue-generating engine.
                        </p>
                        <button onClick={onStartProject} className="group relative px-12 py-6 bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span  className="relative z-10 font-black uppercase tracking-widest text-sm flex items-center gap-3 text-slate-900 group-hover:text-white transition-colors">
                                Partner With Us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </div>
                    {/* Ghost text background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/2 select-none pointer-events-none">
                        GROWTH
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;