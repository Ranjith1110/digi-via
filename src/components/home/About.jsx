import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase, Compass, Zap, Award,
    MessageSquare, Layers, ArrowRight
} from 'lucide-react';

const About = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0, filter: "blur(15px)" },
        visible: {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const differentiators = [
        { title: "Business-first mindset", desc: "We look at your bottom line and overall ROI, not just clicks.", icon: Briefcase, featured: true },
        { title: "Clear strategies", desc: "No shortcuts. Every action is part of a high-level roadmap.", icon: Compass, featured: false },
        { title: "Performance-focused", desc: "Advertising built for conversion, not vanity metrics.", icon: Zap, featured: true },
        { title: "Strong branding", desc: "Premium identities that build instant authority.", icon: Award, featured: false },
        { title: "Transparent communication", desc: "Direct access with clear, honest reporting.", icon: MessageSquare, featured: false },
        { title: "Scalable systems", desc: "Marketing infrastructure designed for long-term growth.", icon: Layers, featured: false },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white py-24 sm:py-32 px-4 sm:px-6 overflow-hidden relative"
        >
            {/* Ghost Typography - Luxury Watermark */}
            <div className="absolute top-0 right-0 text-[12rem] lg:text-[20rem] font-black text-slate-50/80 select-none pointer-events-none tracking-tighter leading-none -z-0">
                DIGI
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section 1: The Narrative Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-48">

                    {/* Left Column: Narrative Content */}
                    <motion.div variants={containerVariants} className="lg:col-span-6 order-2 lg:order-1">
                        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                className="h-[1.5px] bg-[#ff751f]"
                            />
                            <span className="uppercase tracking-[0.5em] text-[10px] font-black text-[#ff751f]">Established Growth</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
                            Digital <br />
                            <span className="text-[#005d30] italic font-serif">Authority.</span>
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-6 max-w-xl">
                            <p className="text-slate-600 text-xl leading-relaxed font-medium">
                                Digi-Via was created with one goal: to make digital marketing <span className="text-slate-900 underline decoration-[#ff751f] decoration-4 underline-offset-8">profitable</span> for businesses.
                            </p>
                            <p className="text-slate-500 text-base leading-relaxed">
                                We combine creativity with data and strategy with execution. Every campaign is built as a high-performance system to deliver ROI without compromise.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-8 mt-12">
                            <motion.div whileHover={{ y: -5 }} className="border-l-[3px] border-[#ff751f] pl-6 cursor-default">
                                <span className="block text-3xl font-black text-[#ff751f]">01.</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Pure Results</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="border-l-[3px] border-[#005d30] pl-6 cursor-default">
                                <span className="block text-3xl font-black text-[#005d30]">02.</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Elite Strategy</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Narrative Image */}
                    <div className="lg:col-span-6 relative order-1 lg:order-2">
                        <motion.div variants={imageVariants} className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] group">
                            <img src="/demo.jpg" alt="Excellence" className="w-full h-[650px] object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#005d30]/20 to-transparent mix-blend-overlay" />
                        </motion.div>
                        {/* Luxury Frame Accents */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-12 -right-12 w-48 h-48 border-[2px] border-dashed border-[#ff751f]/20 rounded-full -z-10"
                        />
                        <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#005d30]/5 blur-[100px] rounded-full -z-10" />
                    </div>
                </div>

                {/* Section 2: The Mosaic Grid Redesign */}
                <div className="mb-48">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-2 w-2 bg-[#ff751f] rounded-full" />
                                <span className="uppercase tracking-[0.6em] text-[10px] font-black text-[#ff751f]">The Edge</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
                                Why We Are <br /> <span className="text-[#005d30]">Different.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 font-bold max-w-[240px] text-xs uppercase tracking-[0.3em] leading-loose border-l-2 border-[#ff751f] pl-8">
                            Innovation driven by measurable outcomes.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -20, scale: 1.02 }}
                                className={`group relative p-12 rounded-[55px] transition-all duration-700 border overflow-hidden
                                ${item.featured
                                        ? 'bg-slate-900 border-slate-800 lg:scale-105 z-20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]'
                                        : 'bg-[#FCFCFC] border-slate-100 hover:border-[#ff751f]/30 hover:shadow-[0_30px_60px_-10px_rgba(255,117,31,0.1)]'
                                    }`}
                            >
                                {/* Luxury background glow for featured cards */}
                                {item.featured && (
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff751f] rounded-full blur-[90px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                                )}

                                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500
                                    ${item.featured
                                        ? 'bg-[#ff751f] text-white shadow-[0_15px_30px_rgba(255,117,31,0.4)]'
                                        : 'bg-white text-[#ff751f] shadow-sm group-hover:bg-[#005d30] group-hover:text-white group-hover:shadow-[0_15px_30px_rgba(0,93,48,0.3)]'}`}
                                >
                                    <item.icon className="w-8 h-8" />
                                </div>

                                <h3 className={`text-2xl font-black mb-6 tracking-tight ${item.featured ? 'text-white' : 'text-slate-900 group-hover:text-[#ff751f]'}`}>
                                    {item.title}
                                </h3>

                                <p className={`text-sm leading-relaxed font-medium ${item.featured ? 'text-gray-400' : 'text-slate-500'}`}>
                                    {item.desc}
                                </p>

                                {/* Luxury Monogram Detail */}
                                <div className={`absolute bottom-10 right-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-10 group-hover:opacity-100 transition-all
                                    ${item.featured ? 'text-[#ff751f]' : 'text-[#005d30]'}`}>
                                    DV.{index + 1}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Section 3: Vision - Elegant White Capsule */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative bg-[#02100a] rounded-[80px] p-16 md:p-32 overflow-hidden text-center border-[1px] border-slate-100 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.08)]"
                >
                    {/* Animated Luxury Orbs */}
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff751f]/5 blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
                        transition={{ duration: 12, repeat: Infinity }}
                        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#005d30]/5 blur-[120px] rounded-full"
                    />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.span
                            variants={itemVariants}
                            className="uppercase tracking-[0.8em] text-[10px] font-black text-slate-300 mb-10 block"
                        >
                            Visionary Partners
                        </motion.span>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-8xl font-black text-[#005d30] leading-[1] mb-16 tracking-tighter">
                            A Global <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff751f] to-[#005d30]">Success Engine.</span>
                        </motion.h2>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 117, 31, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-16 py-7 bg-white text-[#005d30] font-black rounded-full overflow-hidden transition-all"
                        >
                            <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                            <span className="relative flex items-center gap-6 text-[11px] uppercase tracking-[0.3em]">
                                Create Your Legacy
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                            </span>
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default About;