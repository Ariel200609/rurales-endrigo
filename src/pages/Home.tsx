import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Productos } from './Productos';
import { Nosotros } from './Nosotros';
import { Servicios } from './Servicios';

export const Home = () => {
  return (
    <div className="w-full bg-brand-stone overflow-x-hidden">
      <Navbar />
      <Hero />
      <Productos />
      <Nosotros />
      <Servicios />
      
      {/* El id de contacto para que el último link funcione */}
      <footer id="contacto" className="h-60 bg-brand-iron flex flex-col items-center justify-center text-white space-y-4">
        <h2 className="text-2xl font-bold">Contactanos</h2>
        <p className="text-white/40 text-xs tracking-[0.3em]">RURALES ENDRIGO © 2026</p>
      </footer>
    </div>
  );
};