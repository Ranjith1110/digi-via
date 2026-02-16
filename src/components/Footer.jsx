import React from 'react';
import { motion } from 'framer-motion';
import {
    Instagram,
    Linkedin,
    Twitter,
    ArrowUpRight,
    Send,
    Globe,
    Heart
} from 'lucide-react';
import companyLogo from '/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    const socials = [
        { icon: Instagram, href: '#', label: 'IG' },
        { icon: Linkedin, href: '#', label: 'LN' },
        { icon: Twitter, href: '#', label: 'TW' },
    ];

    return (
        <footer className="relative bg-[#02100a] pt-24 pb-12 px-6 overflow-hidden">
            {/* Ghost Typography Watermark - Architectural Backdrop */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15rem] lg:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap">
                DIGI-VIA
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

                    {/* Column 1: Brand Essence */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4"
                        >
                            <div className="bg-white p-2 rounded-xl w-50">
                                <img src={companyLogo} alt="Digi-Via" className="object-contain" />
                            </div>
                        </motion.div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            We don’t just build systems; we build <span className="text-white font-bold">legacies</span>. Your partner in digital dominance and scalable growth.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((soc, i) => (
                                <motion.a
                                    key={i}
                                    href={soc.href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#ff751f] hover:border-[#ff751f] transition-all duration-500 group"
                                >
                                    <soc.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation Pillar */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#ff751f]">Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold text-sm">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#005d30] transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#005d30]">Headquarters</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Email</p>
                                <a href="mailto:hello@digivia.com" className="text-white font-bold hover:text-[#ff751f] transition-colors">hello@digivia.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Mobile </p>
                                <a href="tel:+919876543210" className="text-white font-bold hover:text-[#ff751f] transition-colors">+91 98765 43210</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Office</p>
                                <p className="text-white font-bold">India, <br />Digital Growth Center</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Luxury Newsletter Suite */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-8 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden">
                            <h4 className="text-xl font-black text-white mb-4">Elite Insights.</h4>
                            <p className="text-gray-400 text-xs font-medium mb-8 leading-loose uppercase tracking-widest">
                                Join our exclusive circle for high-level marketing strategy.
                            </p>

                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-black/40 border border-white/5 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-[#ff751f] transition-all"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#ff751f] flex items-center justify-center text-white hover:scale-110 active:scale-90 transition-all shadow-lg shadow-[#ff751f]/20">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Architectural Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        <span>© {currentYear} Digi-Via</span>
                        <span className="w-1 h-1 bg-[#ff751f] rounded-full" />
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Crafted for Excellence</span>
                        <div className="flex items-center gap-1 px-3 py-1 bg-[#005d30]/20 rounded-full border border-[#005d30]/30">
                            <Globe className="w-3 h-3 text-[#005d30]" />
                            <span className="text-[9px] font-black text-[#005d30]">IND</span>
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