import React, { useState, useEffect } from 'react';
import companyLogo from '/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync navbar appearance with scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
  ];
  const rightLinks = [
    { name: 'Why Digi-Via', href: '#why-digi-via' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className={`fixed w-full z-[100] flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'} px-4`}>
      {/* Refined High-Agency Navbar */}
      <nav className={`transition-all duration-500 flex justify-between items-center shadow-2xl border border-white/10 
        ${scrolled 
          ? 'w-full max-w-4xl bg-white/90 backdrop-blur-xl py-2 px-8 rounded-full' 
          : 'w-full max-w-5xl bg-white/80 backdrop-blur-md py-4 px-10 rounded-[30px]'
        }`}
      >
        
        {/* Left Side Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-10">
          {leftLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative group text-black-300 hover:text-black text-xs font-black uppercase tracking-widest transition-colors">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff751f] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Centered Logo with Glow */}
        <div className="flex items-center group cursor-pointer relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="absolute -inset-4 bg-[#005d30]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src={companyLogo} 
            alt="Logo" 
            className={`object-contain transition-all duration-500 ${scrolled ? 'w-24 md:w-32' : 'w-28 md:w-40'}`} 
          />
        </div>

        {/* Right Side Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-10">
          {rightLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative group text-black-300 hover:text-black text-xs font-black uppercase tracking-widest transition-colors">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005d30] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black p-2">
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span className={`h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : 'w-5'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu - Matching Hero Colors */}
      <div className={`md:hidden fixed inset-0 bg-[#005d30] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'clip-path-open opacity-100' : 'clip-path-closed opacity-0 pointer-events-none'}`}
        style={{ clipPath: isOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)' }}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[...leftLinks, ...rightLinks].map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-5xl font-black text-white/30 hover:text-[#ff751f] transition-all ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => setIsOpen(false)} className="px-10 py-4 bg-[#ff751f] text-white rounded-full font-black tracking-tighter">
            CLOSE MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;