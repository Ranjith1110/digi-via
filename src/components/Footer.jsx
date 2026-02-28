import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Instagram,
    Linkedin,
    Twitter,
    ArrowUpRight,
    Send,
    Globe,
    Heart,
    Facebook,
    Loader2,
    CheckCircle
} from 'lucide-react';
import companyLogo from '/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // --- Submission Logic State ---
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT URL
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
            // Reset button after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error("Subscription error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/' },
        { name: 'Contact', href: '/contact' }
    ];

    const socials = [
        { icon: Instagram, href: 'https://www.instagram.com/digi_via', label: 'IG' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/112436330/admin/dashboard', label: 'LN' },
        { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61561791954807', label: 'FB' },
    ];

    return (
        <footer className="relative bg-[#02100a] pt-24 pb-12 px-6 overflow-hidden">
            {/* Ghost Typography Watermark - Architectural Backdrop */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] lg:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap z-0">
                DIGI-VIA
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand Identity Column */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#ff751f] rounded-xl flex items-center justify-center">
                                <Send className="text-white w-5 h-5" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">Digi-Via</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Architecting digital dominance through performance systems and precision execution. Join elite brands scaling with Digi-Via.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5 }}
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff751f] hover:border-[#ff751f] transition-all"
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-500 hover:text-[#ff751f] text-sm font-bold transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#005d30]">Headquarters</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Email</p>
                                <a href="mailto:contact.digivia@gmail.com" className="text-gray-500 font-bold hover:text-[#ff751f] transition-colors">contact.digivia@gmail.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Mobile </p>
                                <a href="tel:+919876543210" className="text-gray-500 font-bold hover:text-[#ff751f] transition-colors">+91 78100 43538</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Office</p>
                                <p className="text-gray-500 font-bold">Hyderabad, India, <br />Digital Growth Center</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Subscription Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Stay Ahead</h4>
                        <div className="relative max-w-md">
                            <form onSubmit={handleSubscribe} className="relative group">
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white focus:outline-none focus:border-[#ff751f] transition-all"
                                />
                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 bg-[#ff751f] text-white px-8 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="animate-spin" size={14} />
                                    ) : status === 'success' ? (
                                        <CheckCircle size={14} />
                                    ) : (
                                        'Join Now'
                                    )}
                                </button>
                            </form>
                            {status === 'success' && (
                                <p className="text-[#005d30] bg-white rounded-2xl p-3 text-[12px] font-bold mt-3 ml-4">
                                    Subscribed successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-[10px] font-bold mt-3 ml-4">
                                    Something went wrong. Try again.
                                </p>
                            )}
                        </div>
                        <p className="text-gray-600 text-[10px] font-medium leading-relaxed uppercase tracking-widest">
                            Exclusive insights. No spam. Just growth systems delivered to your inbox.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar - Copyright & Localization & Legal Links */}
                <div className="pt-12 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center">
                            © {currentYear} Digi-Via Strategy. All Rights Reserved.
                        </p>

                        {/* Legal Links (Terms & Privacy) */}
                        <div className="flex items-center gap-4">
                            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                            <a href="/privacy-policy" className="text-gray-500 hover:text-[#ff751f] text-[10px] font-bold uppercase tracking-widest transition-colors">
                                Privacy Policy
                            </a>
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <a href="/terms-conditions" className="text-gray-500 hover:text-[#ff751f] text-[10px] font-bold uppercase tracking-widest transition-colors">
                                Terms & Conditions
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Crafted for Excellence</span>
                            <div className="flex items-center gap-1 px-3 py-1 bg-[#005d30]/20 rounded-full border border-[#005d30]/30">
                                <Globe className="w-3 h-3 text-[#005d30]" />
                                <span className="text-[9px] font-black text-[#005d30]">IND</span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll to Top Circle */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#ff751f] transition-all group"
                    >
                        <ArrowUpRight className="w-6 h-6 group-hover:text-[#ff751f] transition-colors" />
                    </motion.button>
                </div>
            </div>

            {/* Decorative Luxury Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#005d30]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff751f]/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </footer>
    );
};

export default Footer;