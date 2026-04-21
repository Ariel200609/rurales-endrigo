// src/pages/Navbar.tsx
import { useState, useEffect } from 'react';

// ==========================================
// CUSTOM HOOK: SCROLL SPY (Detecta sección activa)
// ==========================================
const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // El margen superior negativo hace que detecte la sección un poco antes de que llegue al tope
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lista de IDs para que el Scroll Spy los rastree
  const activeSection = useActiveSection(['inicio', 'productos', 'servicios', 'obras', 'nosotros', 'contacto']);

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario scrollea más de 50px, marcamos isScrolled
      setIsScrolled(window.scrollY > 50);
      
      // UX Mejorada: Si scrollea con el menú mobile abierto, lo cerramos automáticamente
      if (window.scrollY > 50 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Productos', href: '#productos', id: 'productos' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Obras', href: '#obras', id: 'obras' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  // Función suave para ir arriba en vez de recargar agresivamente
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${
        isScrolled 
          ? 'bg-[#121212]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO (Animación suave y cambio de color) */}
        <a 
          href="#inicio"
          onClick={scrollToTop} 
          className="flex items-center group relative z-50"
        >
          <img 
            src="/logoEndrigo.png" 
            alt="Rurales Endrigo Logo" 
            // Si el fondo es oscuro (scrolled), el logo toma sus colores originales. 
            // Si es transparente al inicio, se pone todo blanco.
            className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'brightness-100 invert-0 scale-95' : 'brightness-0 invert scale-100'
            } group-hover:opacity-80`}
          />
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 group py-2 ${
                activeSection === link.id ? 'text-brand-orange' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              
              {/* SUBRAYADO ANIMADO AL HOVER Y SECCIÓN ACTIVA */}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-300 ease-out ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          
          {/* BOTÓN PRESUPUESTO (Destacado) */}
          <a 
            href="#contacto" 
            className="ml-2 relative overflow-hidden bg-white/5 border border-brand-orange/50 hover:border-brand-orange text-brand-orange hover:text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(155,38,20,0)] hover:shadow-[0_0_20px_rgba(155,38,20,0.3)] active:scale-95 group"
          >
            <span className="relative z-10">Presupuesto</span>
            {/* Efecto de llenado del botón */}
            <div className="absolute inset-0 bg-brand-orange w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
          </a>
        </div>

        {/* BOTÓN MENÚ MOBILE (Hamburguesa a Cruz animada) */}
        <button 
          className="lg:hidden text-white p-2 relative z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </div>
        </button>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE (Animación controlada) */}
      <div 
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 transition-all duration-500 overflow-hidden lg:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-widest transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-brand-orange scale-110' 
                  : 'text-white/60 hover:text-white hover:scale-105'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-16 h-px bg-white/20 my-2" />
          
          <a 
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-brand-orange text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
          >
            Pedir Presupuesto
          </a>
        </div>
      </div>
    </nav>
  );
};