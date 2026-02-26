import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Clock } from 'lucide-react';

const Contact = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white py-24 sm:py-32 px-4 sm:px-6 overflow-hidden relative"
            id='contact'
        >
            {/* Ghost Typography Watermark */}
            <div className="absolute top-10 left-0 text-[10rem] lg:text-[18rem] font-black text-slate-50 select-none pointer-events-none tracking-tighter leading-none">
                CONNECT
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                        <span className="h-[1.5px] w-12 bg-[#ff751f]" />
                        <span className="uppercase tracking-[0.5em] text-[10px] font-black text-[#ff751f]">Get in Touch</span>
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                        Let’s Build Your <br />
                        <span className="text-[#005d30] italic font-serif">Success.</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-slate-500 max-w-xl text-lg font-medium">
                        Have a project in mind? Ready to scale your business? We combine elite strategy with world-class execution.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Contact Info Badges */}
                    <motion.div variants={containerVariants} className="lg:col-span-5 space-y-8">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { icon: Mail, label: "Email Us", val: "your@email.com", color: "text-[#ff751f]", bg: "bg-[#ff751f]/5" },
                                { icon: Phone, label: "Call Us", val: "+91 XXXXX XXXXX", color: "text-[#005d30]", bg: "bg-[#005d30]/5" },
                                { icon: MapPin, label: "Location", val: "India", color: "text-[#ff751f]", bg: "bg-[#ff751f]/5" },
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    className="group flex items-center gap-6 p-6 rounded-[30px] border border-slate-50 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all cursor-default"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${info.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                        <info.icon className={`w-6 h-6 ${info.color}`} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">{info.label}</p>
                                        <p className="text-lg font-bold text-slate-900">{info.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* High-End Response Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 rounded-[40px] bg-[#005d30] text-white relative overflow-hidden group shadow-2xl shadow-[#005d30]/20"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="w-4 h-4 text-[#ff751f]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#ff751f]">Rapid Response</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-white">Growth doesn't wait.</h4>
                                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                                    Our team typically responds within 2 business hours for new strategic inquiries.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                        </motion.div>
                    </motion.div>

                    {/* Right Column: The Luxury Form */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-7 bg-[#FCFCFC] border border-slate-100 p-8 md:p-12 rounded-[60px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] relative"
                    >
                        <div className="absolute top-10 right-10 opacity-10">
                            <Sparkles className="w-12 h-12 text-[#ff751f]" />
                        </div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-8 py-4 rounded-full bg-white border border-slate-100 focus:border-[#ff751f] focus:ring-4 focus:ring-[#ff751f]/5 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-8 py-4 rounded-full bg-white border border-slate-100 focus:border-[#005d30] focus:ring-4 focus:ring-[#005d30]/5 outline-none transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full px-8 py-4 rounded-full bg-white border border-slate-100 focus:border-[#ff751f] focus:ring-4 focus:ring-[#ff751f]/5 outline-none transition-all font-medium text-slate-900"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project goals..."
                                    className="w-full px-8 py-6 rounded-[40px] bg-white border border-slate-100 focus:border-[#005d30] focus:ring-4 focus:ring-[#005d30]/5 outline-none transition-all font-medium text-slate-900 resize-none"
                                />
                            </div>

                            {/* UPDATED: Signature Luxury Hover Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full group relative px-10 py-6 bg-[#005d30] text-white font-black rounded-full overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,93,48,0.2)]"
                            >
                                {/* Slide-up background accent */}
                                <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />

                                <span className="relative flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em]">
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Subtle Text */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 text-center"
                >
                    <div className="flex items-center justify-center gap-4 text-[#005d30] opacity-30">
                        <div className="h-0.5 w-12 bg-current" />
                        <MessageCircle className="w-5 h-5" />
                        <div className="h-0.5 w-12 bg-current" />
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Contact;