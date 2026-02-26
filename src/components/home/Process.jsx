import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const Process = ({ onStartProject }) => {
    const steps = [
        {
            title: "Strategy",
            desc: "Deep-dive into your brand DNA to build a custom roadmap.",
            icon: Target,
            color: "text-[#005d30]",
            bg: "bg-[#005d30]/5",
            border: "border-[#005d30]/20"
        },
        {
            title: "Execution",
            desc: "Deploying high-performance systems with precision and speed.",
            icon: Zap,
            color: "text-[#ff751f]",
            bg: "bg-[#ff751f]/5",
            border: "border-[#ff751f]/20"
        },
        {
            title: "Optimization",
            desc: "Analyzing data to refine, trim waste, and boost performance.",
            icon: BarChart3,
            color: "text-[#005d30]",
            bg: "bg-[#005d30]/5",
            border: "border-[#005d30]/20"
        },
        {
            title: "Growth",
            desc: "Scaling winning systems to dominate your market share.",
            icon: TrendingUp,
            color: "text-[#ff751f]",
            bg: "bg-[#ff751f]/5",
            border: "border-[#ff751f]/20"
        }
    ];

    // Animation Variants
    const cardVariants = (isEven) => ({
        hidden: { opacity: 0, x: isEven ? -50 : 50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 }
        }
    });

    const trunkVariants = {
        hidden: { height: 0 },
        visible: {
            height: "100%",
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-[#F8F9FA] py-24 px-6 rounded-[50px] md:rounded-[100px] my-10 overflow-hidden"
            id='why-digi-via'
        >
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="h-0.5 w-8 bg-[#ff751f]"></span>
                        <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#005d30]">The Methodology</span>
                        <span className="h-0.5 w-8 bg-[#ff751f]"></span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6"
                    >
                        Why <span className="text-[#005d30] italic font-serif">Digi-Via?</span>
                    </motion.h2>
                </div>

                {/* Tree Layout */}
                <div className="relative mb-40">
                    {/* Animated Central Trunk (Desktop) */}
                    <motion.div
                        variants={trunkVariants}
                        className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-linear-to-b from-[#005d30] via-[#ff751f] to-[#005d30] origin-top"
                    />

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex items-center justify-center lg:justify-between w-full lg:mb-5">

                                    {/* Left Side Content (Even) */}
                                    <motion.div
                                        variants={cardVariants(true)}
                                        className={`hidden lg:block w-[45%] ${isEven ? 'block' : 'invisible'}`}
                                    >
                                        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-default">
                                            <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-all duration-500`}>
                                                <step.icon className={`w-6 h-6 ${step.color} group-hover:text-white transition-colors`} />
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{step.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                                        </div>
                                    </motion.div>

                                    {/* The Node/Branch (Center) */}
                                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.5 }}
                                            className={`w-12 h-12 rounded-full bg-white shadow-xl border-4 ${step.border} flex items-center justify-center`}
                                        >
                                            <span className="text-[10px] font-black text-slate-900">0{index + 1}</span>
                                        </motion.div>
                                        {/* Animated Branch Line */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: 64 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className={`absolute h-0.5 bg-slate-200 -z-10 ${isEven ? 'right-full' : 'left-full'}`}
                                        />
                                    </div>

                                    {/* Right Side Content (Odd + Mobile Stack) */}
                                    <motion.div
                                        variants={cardVariants(false)}
                                        className={`w-full lg:w-[45%] ${!isEven ? 'block' : 'lg:invisible'}`}
                                    >
                                        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-default">
                                            <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-all duration-500`}>
                                                <step.icon className={`w-6 h-6 ${step.color} group-hover:text-white transition-colors`} />
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{step.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                                            <div className="lg:hidden mt-6 text-[10px] font-black text-[#ff751f] tracking-widest uppercase">Step 0{index + 1}</div>
                                        </div>
                                    </motion.div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mission Section (Animated) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#02100a] rounded-[50px] md:rounded-[80px] p-8 md:p-20 overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#005d30] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-2 w-2 bg-[#ff751f] rounded-full"></div>
                                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#ff751f]">Our Core Purpose</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                                Building <span className="text-[#005d30] italic font-serif">Smart</span> Marketing Systems.
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Strong Digital Presence",
                                    "Consistent Lead Generation",
                                    "Scalable Revenue Growth"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#005d30]/20 flex items-center justify-center group-hover:bg-[#005d30] transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-[#005d30] group-hover:text-white" />
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[40px] text-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Ready to grow your brand?</h3>
                            <p className="text-gray-400 font-medium mb-10 text-sm">Let’s build something powerful together.</p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full group relative px-8 py-5 bg-[#005d30] text-white font-black rounded-full overflow-hidden shadow-2xl" onClick={onStartProject} 
                            >
                                <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                <span className="relative flex items-center justify-center gap-3 tracking-widest uppercase text-xs">
                                    Get Started Today
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Process;