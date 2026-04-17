// src/pages/Hero.tsx
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      
      {/* IMAGEN DE FONDO CON EFECTO ZOOM LENTO (Ken Burns) */}
      <div className="absolute inset-0 scale-110 animate-slow-zoom">
        <img 
          src="/mangainicio.webp" 
          className="w-full h-full object-cover object-center" 
          alt="Fondo Rurales Endrigo" 
        />
      </div>
      
      {/* OVERLAY DE GRADIENTE (Para mejorar lectura) */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" /> 

      {/* TARJETA DE CRISTAL OSCURO */}
      <div className={`relative z-10 bg-[#121212]/30 backdrop-blur-xl border border-white/10 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
        /* Mobile */
        w-[88%] max-w-[340px] ml-6 rounded-[2.5rem] p-8 shadow-2xl
        /* Desktop */
        md:absolute md:left-0 md:top-0 md:h-full md:w-[480px] md:max-w-none md:ml-0 md:rounded-none md:rounded-r-[4rem] md:p-20
        ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        
        <div className="w-full space-y-6">
          {/* ETIQUETA ROJA ANIMADA */}
          <div className={`transition-all duration-700 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="inline-flex items-center bg-brand-orange text-white px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
              Desde 1948
            </span>
          </div>

          {/* TÍTULO CON FUERZA */}
          <div className={`transition-all duration-700 delay-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] italic">
              RURALES <br/> 
              <span className="text-brand-orange">ENDRIGO</span>
            </h1>
          </div>

          <div className={`w-16 h-1 bg-brand-orange rounded-full transition-all duration-700 delay-700 ${animate ? 'w-16 opacity-100' : 'w-0 opacity-0'}`} />

          {/* TEXTO DESCRIPTIVO */}
          <div className={`transition-all duration-700 delay-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-sm md:text-xl text-stone-300 leading-relaxed font-light">
              Carpintería de diseño industrial para el sector agropecuario. <br className="hidden md:block"/>
              <span className="font-semibold text-white">Tres generaciones</span> forjando calidad en Daireaux.
            </p>
          </div>

          {/* BOTONES */}
          <div className={`pt-4 transition-all duration-700 delay-[1200ms] ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <a href="#contacto" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-brand-orange rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(155,38,20,0.4)] hover:bg-brand-red">
              <span className="relative z-10">Solicitar Presupuesto</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* INDICADOR DE SCROLL (Solo visible en Desktop) */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4 text-white/30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 mb-8 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};