// src/pages/Navbar.tsx
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Productos', href: '#productos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${
        isScrolled 
          ? 'bg-[#121212]/90 backdrop-blur-md py-3 shadow-xl' // Más fino al scrollear
          : 'bg-transparent py-4' // Más fino al inicio
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO NUEVO - Tamaño ajustado */}
        <a href="LOGO" className="flex items-center">
          <img 
            src="/logoEndrigo.png" 
            alt="Rurales Endrigo Logo" 
            className="h-8 md:h-10 w-auto object-contain brightness-0 invert transition-transform hover:scale-105"
          />
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/80 hover:text-brand-orange text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-brand-orange hover:bg-brand-red text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            Presupuesto
          </a>
        </div>

        {/* BOTÓN MENÚ MOBILE */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#121212] border-t border-white/5 transition-all duration-500 overflow-hidden md:hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/70 hover:text-white text-lg font-bold uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};