// src/pages/Hero.tsx
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const [animate, setAnimate] = useState(false);
  
  const { scrollY } = useScroll();
  const yFondo = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      
      {/* IMAGEN DE FONDO CON PARALLAX Y AJUSTE PARA CELULAR */}
      <motion.div 
        style={{ y: yFondo }}
        className="absolute -top-[10%] left-0 w-full h-[120%] z-0 -translate-y-20 md:translate-y-0" 
      >
        <img 
          src="/mangainicio.webp" 
          className="w-full h-full object-cover object-center" 
          alt="Fondo Rurales Endrigo" 
        />
      </motion.div>
      
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a]/90 md:via-[#0a0a0a]/40 md:to-transparent z-0" /> 

      {/* TARJETA DE CRISTAL OSCURO */}
      <div className={`absolute z-10 bg-[#121212]/10 backdrop-blur-xl border-t border-white/10 md:border-t-0 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
        
        /* MOBILE: padding reducido para mostrar más foto */
        bottom-0 left-0 w-full rounded-t-[2.5rem] px-7 pt-5 pb-9

        /* DESKTOP: sin cambios */
        md:top-0 md:bottom-auto md:h-full md:w-[480px] md:rounded-none md:rounded-r-[4rem] md:px-20 md:pb-20 md:pt-32 md:border-r
        
        ${animate ? 'translate-y-0 md:translate-x-0 opacity-100' : 'translate-y-24 md:translate-y-0 md:-translate-x-full opacity-0'}`}
      >
        
        <div className="w-full space-y-4 md:space-y-6 max-w-[400px] mx-auto md:max-w-none md:mx-0">

          {/* BADGE */}
          <div className={`transition-all duration-700 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="inline-flex items-center bg-brand-orange text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
              Desde 1948
            </span>
          </div>

          {/* TÍTULO */}
          <div className={`transition-all duration-700 delay-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-[2.6rem] md:text-7xl font-black tracking-tighter text-white leading-[0.9] italic">
              RURALES <br/> 
              <span className="text-brand-orange">ENDRIGO</span>
            </h1>
          </div>

          {/* LÍNEA */}
          <div className={`w-16 h-1 bg-brand-orange rounded-full transition-all duration-700 delay-700 ${animate ? 'w-16 opacity-100' : 'w-0 opacity-0'}`} />

          {/* DESCRIPCIÓN */}
          <div className={`transition-all duration-700 delay-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-sm md:text-xl text-stone-300 leading-relaxed font-light">
              Carpintería de diseño industrial para el sector agropecuario. <br className="hidden md:block"/>
              <span className="font-semibold text-white">Tres generaciones</span> forjando calidad en Bonifacio.
            </p>
          </div>

          {/* BOTÓN */}
          <div className={`transition-all duration-700 delay-[1200ms] ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <a href="#contacto" className="group relative flex md:inline-flex items-center justify-center w-full md:w-auto px-8 py-3 md:py-4 font-bold text-white transition-all duration-300 bg-brand-orange rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(155,38,20,0.4)] hover:bg-brand-red">
              <span className="relative z-10">Solicitar Presupuesto</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR DESKTOP */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4 text-white/30 animate-bounce z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 mb-8 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
      
    </section>
  );
};