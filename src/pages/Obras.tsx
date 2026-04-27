// src/pages/Obras.tsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const obras = [
  {
    id: 1,
    titulo: "Manga",
    ubicacion: "Laguna Alsina",
    img: "/manga2.webp",
    detalle: "6 metros, andén lateral y herrajes reforzados."
  },
  {
    id: 2,
    titulo: "Tranqueras Dobles",
    ubicacion: "Casey",
    img: "/tranqueramadera.webp", // Le agregué la barra '/' para que busque bien la ruta
    detalle: "Madera dura seleccionada con acabado industrial."
  },
  {
    id: 3,
    titulo: "Cargador",
    ubicacion: "Casbas",
    img: "/cargador.webp",
    detalle: "Diseño ergonómico para carga fluida de hacienda."
  },
  {
    id: 4,
    titulo: "Pedido de Postes",
    ubicacion: "Guaminí",
    img: "/poste2.webp",
    detalle: "Postes tratados de alta durabilidad para perimetrales." // Le sumé un textito para que no quede vacío
  }
];

export const Obras = () => {
  // ESTADO PARA SABER QUÉ TARJETA ESTÁ ACTIVA (Arranca en 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // REFERENCIAS PARA EL DRAG-TO-SCROLL MÁS CÁLCULO DE POSICIÓN
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // LOGICA DE DRAG (Igual que en Productos)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // LÓGICA MATEMÁTICA PARA DETECTAR QUÉ TARJETA ESTÁ EN EL MEDIO
  const handleScroll = () => {
    if (!carouselRef.current) return;
    
    // Obtenemos en qué pixel exacto está el scroll
    const scrollPosition = carouselRef.current.scrollLeft;
    // Calculamos el ancho de una tarjeta + el espacio (gap) de separación
    const cardWidth = carouselRef.current.children[0].clientWidth + 24; // 24px es aprox el gap-6
    
    // Dividimos la posición por el ancho para saber el índice (y redondeamos)
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    // Aseguramos que el índice no se pase de la cantidad de obras que tenemos
    const safeIndex = Math.min(Math.max(newIndex, 0), obras.length - 1);
    
    if (safeIndex !== activeIndex) {
      setActiveIndex(safeIndex);
    }
  };

  return (
    <section id="obras" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO LIMPIO */}
        <div className="mb-12">
          <span className="text-brand-orange font-bold uppercase text-[10px] tracking-[0.4em] mb-3 block">
            Trabajos Realizados
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-brand-dark leading-none tracking-tighter">
            Proyectos <br/> <span className="text-brand-orange text-outline-black">en el campo</span>
          </h2>
        </div>

        {/* CARRUSEL HORIZONTAL CON EVENTOS DE DRAG Y SCROLL */}
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll} // <-- Escuchamos el scroll para actualizar los puntitos
          // Quitamos snap-x para que el arrastre con mouse no rebote
          className="flex overflow-x-auto gap-6 pb-12 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {obras.map((obra) => (
            <motion.div
              key={obra.id}
              className="min-w-[85vw] md:min-w-[600px] relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* TARJETA BLANCA */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-100 flex flex-col h-full">
                
                {/* IMAGEN DE LA OBRA */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-stone pointer-events-none">
                  <img 
                    src={obra.img} 
                    alt={`${obra.titulo} — ${obra.ubicacion} | Rurales Endrigo`}
                    loading="lazy"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover" 
                  />
                  {/* TAG DE UBICACIÓN */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">{obra.ubicacion}</span>
                  </div>
                </div>

                {/* INFO PIE DE TARJETA */}
                <div className="p-8 pointer-events-none">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-brand-dark mb-2 leading-none">
                    {obra.titulo}
                  </h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    {obra.detalle}
                  </p>
                  
                  {/* SISTEMA DE NAVEGACIÓN DINÁMICO */}
                  <div className="mt-6 flex items-center justify-between">
                    
                    {/* Dots Dinámicos */}
                    <div className="flex gap-1.5">
                      {obras.map((_, dotIndex) => (
                        <div 
                          key={dotIndex}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            activeIndex === dotIndex 
                              ? 'w-8 bg-brand-orange' // El dot activo se hace largo y naranja
                              : 'w-2 bg-stone-200'    // Los otros quedan chiquitos y grises
                          }`} 
                        />
                      ))}
                    </div>

                    {/* Contador Dinámico */}
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-300">
                      {activeIndex + 1} / {obras.length}
                    </span>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* ESPACIADOR FINAL */}
          <div className="min-w-[5vw] md:min-w-[10vw]" />
        </div>

        {/* LÍNEA DE ESTILO INDUSTRIAL ABAJO */}
        <div className="w-full h-px bg-stone-100 mt-4" />
      </div>
    </section>
  );
};