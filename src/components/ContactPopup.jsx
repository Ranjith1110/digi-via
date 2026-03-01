import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Loader2 } from 'lucide-react';

const ContactPopup = ({ isOpen, onClose }) => {
    // 1. State for Form Data
    const [formData, setFormData] = useState({
        Name: '',
        Company: '',
        Email: '',
        Phone: '',
        Message: ''
    });

    // 2. Loading and Success States
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
            // Reset form
            setFormData({ Name: '', Company: '', Email: '', Phone: '', Message: '' });
            // Close after 2 seconds
            setTimeout(() => {
                setSubmitted(false);
                onClose();
            }, 2500);
        } catch (error) {
            alert("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div data-aos="zoom-in" className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Side Branding */}
                <div className="hidden md:flex md:w-2/5 bg-slate-900 p-10 flex-col justify-between relative">
                    <div>
                        <div className="w-12 h-12 bg-[#ff751f] rounded-2xl flex items-center justify-center mb-6">
                            <Shield className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-white leading-tight">Let's Build <br /> Your Legacy.</h3>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-1 p-8 md:p-12">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                            <CheckCircle2 size={60} className="text-[#005d30]" />
                            <h2 className="text-2xl font-black text-slate-900">Request Sent!</h2>
                            <p className="text-slate-500">Our team will contact you shortly.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 text-slate-900">
                                <h2 className="text-3xl font-black tracking-tighter">Contact Digi Via</h2>
                                <p className="text-slate-500 text-sm font-medium">We'll get back to you shortly.</p>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input required name="Name" value={formData.Name} onChange={handleChange} type="text" placeholder="Name" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f]" />
                                    <input required name="Company" value={formData.Company} onChange={handleChange} type="text" placeholder="Company" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f]" />
                                </div>
                                <input required name="Email" value={formData.Email} onChange={handleChange} type="email" placeholder="Email Address" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f]" />
                                <input required name="Phone" value={formData.Phone} onChange={handleChange} type="tel" placeholder="Phone" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f]" />
                                <textarea required name="Message" value={formData.Message} onChange={handleChange} placeholder="Your Message" rows="3" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#ff751f] resize-none"></textarea>

                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <button disabled={loading} type="submit" className="flex-1 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] py-4 rounded-full hover:bg-[#ff751f] transition-all flex items-center justify-center gap-2">
                                        {loading ? <Loader2 className="animate-spin" size={14} /> : "Submit Request"}
                                        {!loading && <Send size={14} />}
                                    </button>
                                    <button type="button" onClick={onClose} className="px-8 py-4 bg-slate-100 text-slate-500 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-slate-200 transition-all">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;