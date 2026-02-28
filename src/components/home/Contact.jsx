import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Clock, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    // 1. Form State Management
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Message: '',
        formType: 'contact'
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuT9EnLzOwOeLNe3KFxyTIJVe0LJoUng2KHYLXcIQQrnaOb-kYP4DI0aqQG-c81VQ/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            setSubmitted(true);
            setFormData({ Name: '', Email: '', Phone: '', Message: '', formType: 'contact' });
            // Keep success message for 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            alert("Submission failed. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                    {/* Left Column: Contact Details */}
                    <div className="space-y-12">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
                                READY TO SCALE? <br />
                                <span className="text-[#005d30] italic font-serif lowercase">let's talk strategy.</span>
                            </h2>
                            <p className="text-slate-500 text-lg max-w-md font-medium">
                                Stop guessing and start growing. Our team is ready to build your digital infrastructure.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email", val: "contact.digivia@gmail.com", sub: "Response within 24hrs" },
                                { icon: Phone, label: "Phone", val: "+91 78100 43538", sub: "Mon - Sat, 10am - 7pm" },
                                { icon: MapPin, label: "Headquarters", val: "Digital Hub, India", sub: "Global Operations" }
                            ].map((info, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#ff751f] group-hover:bg-[#ff751f] group-hover:text-white transition-all duration-500 shadow-sm">
                                        <info.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{info.label}</p>
                                        <p className="text-xl font-black text-slate-900">{info.val}</p>
                                        <p className="text-sm font-medium text-slate-400">{info.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form Container */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-8 sm:p-12 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-50 relative"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-20 text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-[#005d30]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-[#005d30]" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900">Message Received!</h3>
                                <p className="text-slate-500 font-medium">Our growth strategists will be in touch within 24 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[#ff751f] font-black text-xs uppercase tracking-widest pt-4"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                        <input
                                            required id="Name" value={formData.Name} onChange={handleChange}
                                            type="text" placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                                        <input
                                            required id="Phone" value={formData.Phone} onChange={handleChange}
                                            type="tel" placeholder="+91..."
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                                    <input
                                        required id="Email" value={formData.Email} onChange={handleChange}
                                        type="email" placeholder="john@company.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Project Overview</label>
                                    <textarea
                                        required id="Message" value={formData.Message} onChange={handleChange}
                                        placeholder="Tell us about your goals..." rows="4"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    disabled={loading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="group relative w-full py-5 bg-slate-900 text-white rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <span className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                    <span className="relative flex items-center justify-center gap-4 text-[10px] uppercase font-black tracking-[0.3em]">
                                        {loading ? <Loader2 className="animate-spin" size={16} /> : "Send Message"}
                                        {!loading && <Send className="w-4 h-4" />}
                                    </span>
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-20 text-center">
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