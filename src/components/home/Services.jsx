import React from 'react';
import { motion } from 'framer-motion';
import {
    Share2,
    Rocket,
    PenTool,
    TrendingUp,
    BarChart3,
    Laptop,
    Palette,
    ArrowRight,
    Check
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Social Media Management",
            desc: "We turn attention into trust through consistent, high-impact systems.",
            features: ["Content creation", "Posting & scheduling", "Community management", "Profile optimization", "Growth strategy"],
            icon: Share2,
            tag: "Engagement"
        },
        {
            title: "Digital Marketing",
            desc: "Strategic marketing that drives real business outcomes.",
            features: ["Lead generation", "Funnel strategy", "Campaign execution", "Performance tracking", "Optimization"],
            icon: Rocket,
            tag: "Performance"
        },
        {
            title: "Content Planning",
            desc: "Structured content that builds authority and designed to convert.",
            features: ["Monthly calendars", "Campaign concepts", "Reel & video strategies", "Caption writing", "Storytelling"],
            icon: PenTool,
            tag: "Authority"
        },
        {
            title: "Brand Growth",
            desc: "Position your brand for long-term success and credibility.",
            features: ["Brand strategy", "Audience targeting", "Online presence", "Reputation management"],
            icon: TrendingUp,
            tag: "Scaling"
        },
        {
            title: "Ad Management",
            desc: "Performance marketing that maximizes ROI with purpose.",
            features: ["Meta Ads", "Google Ads", "Audience research", "Creative testing", "Conversion optimization"],
            icon: BarChart3,
            tag: "ROI"
        },
        {
            title: "Web Development",
            desc: "High-performance websites built as a 24/7 sales engine.",
            features: ["Business websites", "Landing pages", "Mobile-first design", "SEO-friendly", "Speed optimization"],
            icon: Laptop,
            tag: "Conversion"
        },
        {
            title: "Designing Support",
            desc: "Design that makes your brand look premium and trustworthy.",
            features: ["Social media design", "Ad creatives", "Logo design", "Brand identity kits", "Website UI/UX"],
            icon: Palette,
            tag: "Creativity"
        }
    ];

    // Animation Config
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 70, damping: 15 }
        }
    };

    return (
        <section className="bg-[#02100a] py-24 px-6 relative overflow-hidden min-h-screen">
            {/* Dynamic Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005d30]/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff751f]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Luxury Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1 }}
                            className="h-[1px] bg-[#ff751f] mb-8"
                        />
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#ff751f] block mb-4"
                        >
                            Elite Digital Solutions
                        </motion.span>
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                            Bespoke <br />
                            <span className="text-[#005d30] italic font-serif">Excellence.</span>
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-400 font-medium max-w-sm text-lg leading-relaxed border-l border-white/10 pl-8"
                    >
                        We deliver end-to-end digital systems engineered for brand visibility and measurable performance.
                    </motion.p>
                </div>

                {/* Mosaic Service Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -12 }}
                            className={`group relative p-8 md:p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-700 
                ${index === 6 ? 'lg:col-span-3 lg:flex lg:items-center lg:gap-16' : ''}`}
                        >
                            {/* Subtle Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#005d30]/10 via-transparent to-[#ff751f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className={index === 6 ? 'lg:flex-1' : ''}>
                                <div className="flex justify-between items-center mb-10">
                                    <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:bg-[#005d30] transition-all duration-500 shadow-2xl">
                                        <service.icon className="w-8 h-8 text-[#ff751f] group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2 rounded-full group-hover:text-[#ff751f] group-hover:border-[#ff751f]/40 transition-all">
                                        {service.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ff751f] transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Dynamic Feature List */}
                            <div className={`space-y-4 ${index === 6 ? 'lg:flex-1 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-4' : ''}`}>
                                {service.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3 group/item">
                                        <div className="w-5 h-5 rounded-full bg-[#005d30]/10 flex items-center justify-center border border-[#005d30]/20 group-hover/item:bg-[#ff751f] group-hover/item:border-[#ff751f] transition-all duration-300">
                                            <Check className="w-3 h-3 text-[#ff751f] group-hover/item:text-white" />
                                        </div>
                                        <span className="text-xs font-bold text-gray-500 group-hover/item:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Hidden Arrow Reveal */}
                            <div className="absolute bottom-6 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                <ArrowRight className="text-[#ff751f] w-6 h-6" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Luxury Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 text-center relative"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-10 text-white/[0.03] font-black text-[10rem] uppercase tracking-tighter select-none pointer-events-none">
                        SERVICES
                    </div>

                    <button className="group relative bg-transparent border border-white/20 px-12 py-5 rounded-full overflow-hidden transition-all hover:border-[#ff751f] active:scale-95">
                        <div className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 text-white font-black text-xs uppercase tracking-widest flex items-center gap-4">
                            Explore Our Portfolio
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;