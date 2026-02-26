import React from 'react';
import {
    Share2,
    Rocket,
    PenTool,
    TrendingUp,
    BarChart3,
    Laptop,
    Palette,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

const ServicesPage = ({ onStartProject }) => {
    const services = [
        {
            title: "Social Media Management",
            desc: "We manage your social platforms end-to-end so you stay consistent, professional, and engaging.",
            features: ["Account optimization", "Monthly content calendar", "Creative post & reel designs", "Caption writing & niche SEO", "Hashtag strategy", "Posting & scheduling", "Audience engagement", "Monthly reports"],
            outcome: "Strong online presence + steady audience growth.",
            icon: Share2,
            color: "#ff751f"
        },
        {
            title: "Digital Marketing",
            desc: "We build multi-channel digital strategies designed to drive traffic, leads, and conversions.",
            features: ["Market & competitor analysis", "Funnel planning", "SEO fundamentals", "Lead generation strategy", "Campaign execution", "Conversion tracking", "Performance review"],
            outcome: "More visibility + measurable ROI.",
            icon: Rocket,
            color: "#005d30"
        },
        {
            title: "Content Planning",
            desc: "Content is king — but strategy is emperor. We create structured plans aligned with your goals.",
            features: ["Monthly content roadmap", "Reel & post ideas", "Hook strategies", "Brand tone definition", "Campaign themes", "Caption frameworks", "Posting schedules"],
            outcome: "Consistent content that attracts and converts.",
            icon: PenTool,
            color: "#ff751f"
        },
        {
            title: "Brand Growth",
            desc: "We position your brand for long-term success, not short-term likes.",
            features: ["Brand identity direction", "Audience targeting", "Growth campaigns", "Influencer guidance", "Reputation management", "Engagement strategies", "Visibility planning"],
            outcome: "Strong brand recall + loyal audience.",
            icon: TrendingUp,
            color: "#005d30"
        },
        {
            title: "Ad Management",
            desc: "We design, run, optimize, and scale paid ads across platforms.",
            features: ["Ad strategy planning", "Creative ad designs", "Copywriting", "Audience targeting", "Pixel setup & tracking", "Lead form integration", "Cost optimization"],
            outcome: "High-quality leads at optimized cost.",
            icon: BarChart3,
            color: "#ff751f"
        },
        {
            title: "Web Development",
            desc: "We build fast, responsive, conversion-optimized websites.",
            features: ["Business website design", "Landing pages", "Mobile responsive layout", "SEO-friendly structure", "Contact forms", "Speed optimization", "Basic security setup"],
            outcome: "Professional presence that converts visitors.",
            icon: Laptop,
            color: "#005d30"
        },
        {
            title: "Designing Support",
            desc: "Visuals matter. We ensure your brand looks premium everywhere.",
            features: ["Social media creatives", "Poster designs", "Banner designs", "Ad creatives", "Brand templates", "Presentation designs"],
            outcome: "Consistent, high-impact brand visuals.",
            icon: Palette,
            color: "#ff751f"
        }
    ];

    return (
        <section className="bg-white text-slate-900 py-24 px-6 relative overflow-hidden min-h-screen mt-14">
            {/* Background Aesthetics */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-[#005d30]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <div className="max-w-3xl">
                        <div data-aos="fade-right" className="h-0.5 w-20 bg-[#ff751f] mb-8" />
                        <span data-aos="fade-up" className="text-[10px] uppercase tracking-[0.5em] font-black text-[#ff751f] block mb-4">
                            Solutions Portfolio
                        </span>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                            Service <br />
                            <span className="text-[#005d30] italic font-serif">Catalog.</span>
                        </h1>
                    </div>
                    <p data-aos="fade-left" className="text-slate-500 font-medium max-w-sm text-lg leading-relaxed border-l-4 border-slate-100 pl-8">
                        Comprehensive digital systems engineered for scalability and measurable business impact.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            className="group relative p-10 rounded-[45px] bg-[#fcfcfc] border border-slate-100 hover:border-[#ff751f]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-md"
                                    style={{ backgroundColor: `${service.color}10` }}
                                >
                                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-[#ff751f] transition-colors">
                                    DV-S.{index + 1}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black mb-4 group-hover:text-slate-900 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                                {service.desc}
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 mb-10 grow">
                                {service.features.slice(0, 6).map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-[#005d30]/40" />
                                        <span className="text-xs font-bold text-slate-600 italic">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                                {service.features.length > 6 && (
                                    <span className="text-[10px] font-black text-slate-300 uppercase pl-7">+ More features</span>
                                )}
                            </div>

                            {/* Outcome Badge */}
                            <div className="pt-6 border-t border-slate-100 mt-auto">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-black uppercase tracking-tighter text-[#ff751f]">Expected Outcome</span>
                                </div>
                                <p className="text-xs font-black text-slate-800 leading-snug">
                                    {service.outcome}
                                </p>
                            </div>

                            {/* Arrow Hover Reveal */}
                            <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                <ArrowRight className="text-[#ff751f] w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Performance CTA Section */}
                <div
                    data-aos="zoom-in"
                    className="mt-32 p-12 md:p-20 rounded-[60px] bg-slate-900 relative overflow-hidden text-center"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                            Let's Build Your <br />
                            <span className="text-[#005d30] italic font-serif">Revenue Engine.</span>
                        </h2>
                        <button onClick={onStartProject} className="group relative px-10 py-5 bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span  className="relative z-10 font-black uppercase tracking-widest text-xs flex items-center gap-3 text-slate-900 group-hover:text-white">
                                Start Scaling Today
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </button>
                    </div>
                    {/* Ghost Background Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/2 select-none pointer-events-none">
                        PERFORM
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesPage;