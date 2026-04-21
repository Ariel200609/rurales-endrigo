// src/pages/Home.tsx
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Productos } from './Productos';
import { Nosotros } from './Nosotros';
import { Servicios } from './Servicios';
import { Contacto } from './Contacto';
import { WspButton } from './WspButton';
import { Footer } from './Footer';
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

      <Footer />
    </div>
  );
};