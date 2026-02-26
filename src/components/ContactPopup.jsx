import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield } from 'lucide-react';

const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                data-aos="zoom-in"
                data-aos-duration="400"
                className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-[#ff751f] hover:bg-white transition-all shadow-sm"
                >
                    <X size={20} />
                </button>

                {/* Left Side: Branding/Trust (Visible on Desktop) */}
                <div className="hidden md:flex md:w-2/5 bg-slate-900 p-10 flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#ff751f] rounded-2xl flex items-center justify-center mb-6">
                            <Shield className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-white leading-tight mb-4">
                            Let's Build <br /> Your Legacy.
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed font-medium">
                            Join elite brands scaling with Digi-Via's performance systems.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={14} className="text-[#005d30]" />
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Global Strategy</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={14} className="text-[#005d30]" />
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">ROI Focused</span>
                        </div>
                    </div>

                    {/* Ghost Text */}
                    <div className="absolute -bottom-4 -left-4 text-6xl font-black text-white/3 select-none uppercase">
                        Digi
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-8 md:p-12">
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Contact Sales</h2>
                        <p className="text-slate-500 text-sm font-medium mt-2">Fill out the form below and our team will get back to you shortly.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text" placeholder="Name"
                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                            />
                            <input
                                type="text" placeholder="Company"
                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                            />
                        </div>
                        <input
                            type="email" placeholder="Email Address"
                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                        />
                        <input
                            type="tel" placeholder="Phone"
                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all"
                        />
                        <textarea
                            placeholder="Your Message" rows="3"
                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] focus:bg-white transition-all resize-none"
                        ></textarea>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] py-4 rounded-full hover:bg-[#ff751f] transition-all duration-300 shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
                            >
                                Submit Request
                                <Send size={14} />
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-8 py-4 bg-slate-100 text-slate-500 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-slate-200 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;