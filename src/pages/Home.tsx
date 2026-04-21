// src/pages/Home.tsx
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Productos } from './Productos';
import { Nosotros } from './Nosotros';
import { Servicios } from './Servicios';
import { Contacto } from './Contacto';
import { WspButton } from './WspButton';
import { ScrollReveal } from './ScrollReveal'; 
import { Obras } from './Obras';

export const Home = () => {
  return (
    <div className="w-full bg-brand-stone overflow-x-hidden scroll-smooth">
      <Navbar />
      <WspButton />
      
      <Hero />

      <ScrollReveal>
        <Productos />
      </ScrollReveal>

      <ScrollReveal>
        <Servicios />
      </ScrollReveal>

      <ScrollReveal>
        <Obras />
      </ScrollReveal>

      <ScrollReveal>
        <Nosotros />
      </ScrollReveal>

      <ScrollReveal>
        <Contacto />
      </ScrollReveal>

      <footer className="py-10 bg-[#0a0a0a] text-center border-t border-white/5">
        <p className="text-stone-600 text-[10px] uppercase tracking-[0.5em]">
          Rurales Endrigo © 2026 — Bonifacio, Buenos Aires
        </p>
      </footer>
    </div>
  );
};