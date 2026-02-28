import React, { useState } from 'react';
import {
    Mail,
    Phone,
    Globe,
    Instagram,
    Facebook,
    Linkedin,
    ArrowRight,
    CheckCircle,
    MessageCircle,
    MapPin,
    Loader2,
    Send
} from 'lucide-react';

const ContactPage = ({ onStartProject }) => {
    // Lead Submission Logic
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuT9EnLzOwOeLNe3KFxyTIJVe0LJoUng2KHYLXcIQQrnaOb-kYP4DI0aqQG-c81VQ/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({
                    Email: email,
                    formType: 'subscribe'
                }),
            });
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            alert("Submission failed.");
            setStatus('idle');
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email Us",
            value: "contact.digivia@gmail.com",
            subValue: "info@digivia.in",
            link: "mailto:contact.digivia@gmail.com"
        },
        {
            icon: Phone,
            label: "Call Us",
            value: "+91 78100 43538",
            subValue: "Mon - Sat, 10am - 7pm",
            link: "tel:+917810043538"
        },
        {
            icon: Globe,
            label: "Visit Us",
            value: "www.digi-via.com",
            subValue: "Digital Headquarters",
            link: "https://www.digi-via.com"
        }
    ];

    const socialLinks = [
        { icon: Instagram, link: "https://www.instagram.com/digi_via", color: "#E4405F" },
        { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61561791954807", color: "#1877F2" },
        { icon: Linkedin, link: "https://www.linkedin.com/company/112436330/", color: "#0A66C2" }
    ];

    const steps = [
        "We understand your business",
        "We analyze your current digital presence",
        "We create a custom strategy",
        "We execute with precision",
        "You track growth with clear reports"
    ];

    return (
        <section className="bg-white text-slate-900 py-24 px-6 relative overflow-hidden min-h-screen mt-14">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-125 h--125 bg-[#005d30]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#ff751f]/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#ff751f] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Contact Us</span>
                    </div>
                    <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                        Let’s Build Your <br />
                        <span className="text-[#005d30] italic font-serif">Success Story.</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-slate-500 text-lg font-medium">
                        Ready to grow your business online? Whether you need branding, marketing, or a complete digital transformation — Digi-Via is your growth partner.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">

                    {/* Left Column: Contact Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        {contactInfo.map((item, index) => (
                            <a
                                href={item.link}
                                key={index}
                                data-aos="fade-right"
                                data-aos-delay={index * 100}
                                className="group flex items-center gap-6 p-8 rounded-[35px] bg-[#fcfcfc] border border-slate-100 hover:border-[#ff751f]/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#ff751f] transition-colors duration-500">
                                    <item.icon className="w-6 h-6 text-[#ff751f] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                                    <p className="text-lg font-black text-slate-800">{item.value}</p>
                                    <p className="text-xs font-medium text-slate-500">{item.subValue}</p>
                                </div>
                            </a>
                        ))}

                        {/* Social Ecosystem Box */}
                        <div data-aos="fade-up" className="p-8 rounded-[35px] bg-slate-900 text-white overflow-hidden relative group">
                            <div className="relative z-10">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Social Ecosystem</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, sIndex) => (
                                        <a
                                            key={sIndex}
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:rotate-12 transition-transform duration-700">
                                <MessageCircle size={120} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Roadmap & Internal CTA */}
                    <div className="lg:col-span-7 bg-[#fcfcfc] border border-slate-100 rounded-[50px] p-10 md:p-16 relative overflow-hidden">
                        <div data-aos="fade-up" className="mb-12">
                            <h2 className="text-3xl font-black tracking-tight mb-2">What Happens Next?</h2>
                            <p className="text-slate-500 font-medium">No guesswork. Just results.</p>
                        </div>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="mt-1 shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-[#005d30]/10 flex items-center justify-center border border-[#005d30]/20 group-hover:bg-[#005d30] transition-all">
                                            <CheckCircle className="w-3 h-3 text-[#005d30] group-hover:text-white" />
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-slate-200/60">
                            <button onClick={onStartProject} className="group w-full md:w-auto px-10 py-5 bg-slate-900 rounded-full overflow-hidden relative transition-all active:scale-95 shadow-lg">
                                <div className="absolute inset-0 bg-[#ff751f] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black uppercase tracking-widest text-xs">
                                    Start Your Growth Journey
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>
                        </div>

                        <div className="absolute top-10 right-10 text-8xl font-black text-slate-200/20 select-none pointer-events-none">
                            NEXT
                        </div>
                    </div>
                </div>

                {/* Headquarters & Map Section */}
                <div data-aos="fade-up" className="relative mt-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                                    <MapPin className="text-[#ff751f] w-5 h-5" />
                                </div>
                                <h2 className="text-3xl font-black tracking-tight uppercase">Digital Headquarters</h2>
                            </div>
                            <p className="text-slate-500 font-medium max-w-xl">
                                Strategically located to serve businesses globally. While our work spans continents, our foundation is built on local excellence.
                            </p>
                        </div>

                        {/* Quick Subscribe in Contact Page */}
                        <div className="bg-slate-50 p-6 rounded-[30px] border border-slate-100 w-full md:w-auto">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Instant Updates</p>
                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="bg-white border border-slate-200 rounded-full py-2 px-4 text-xs focus:outline-none focus:border-[#ff751f]"
                                />
                                <button type="submit" className="bg-slate-900 text-white p-2 rounded-full hover:bg-[#ff751f] transition-all">
                                    {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                </button>
                            </form>
                            {status === 'success' && <p className="text-[#005d30] text-[10px] font-bold mt-2">Email Added!</p>}
                        </div>
                    </div>

                    {/* The Map Capsule */}
                    <div className="w-full h-[500px] rounded-[60px] overflow-hidden border-8 border-[#fcfcfc] shadow-2xl relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160990432!2d72.741099234857!3d19.08219783958223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x1bb999c0d959513!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="DigiVia Location"
                            className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                        ></iframe>

                        {/* Glassmorphism Map Overlay */}
                        <div className="absolute top-10 right-10 bg-white/60 backdrop-blur-xl p-8 rounded-[40px] border border-white/20 shadow-2xl max-w-xs hidden lg:block">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-[#005d30] animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Operational Now</span>
                            </div>
                            <h4 className="text-xl font-black mb-2">Visit Us</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Sector 12, Growth Hub, <br />
                                Digital Avenue, India
                            </p>
                            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ff751f] font-black text-[10px] uppercase tracking-widest group/link">
                                Get Directions
                                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactPage;