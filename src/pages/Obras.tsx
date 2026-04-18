// src/pages/Obras.tsx
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
    img: "tranqueramadera.webp",
    detalle: "Madera dura seleccionada con acabado industrial."
  },
  {
    id: 3,
    titulo: "Cargador ",
    ubicacion: "Casbas",
    img: "cargador.webp",
    detalle: "Diseño ergonómico para carga fluida de hacienda."
  },
  {
    id: 4,
    titulo: "Pedido de Postes",
    ubicacion: "Guaminí",
    img: "poste2.webp",
    detalle: ""
  }
];

export const Obras = () => {
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

        {/* CARRUSEL HORIZONTAL CON SNAP */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
          {obras.map((obra) => (
            <motion.div
              key={obra.id}
              className="min-w-[85vw] md:min-w-[600px] snap-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* TARJETA BLANCA */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-100 flex flex-col h-full">
                
                {/* IMAGEN DE LA OBRA (Abarca la mayor parte) */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={obra.img} 
                    alt={obra.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                  {/* TAG DE UBICACIÓN */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <svg className="w-3 h-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">{obra.ubicacion}</span>
                  </div>
                </div>

                {/* INFO PIE DE TARJETA */}
                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-brand-dark mb-2 leading-none">
                    {obra.titulo}
                  </h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    {obra.detalle}
                  </p>
                  
                  {/* INDICADOR DE DESLIZE (Solo visual) */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-8 h-1 bg-brand-orange rounded-full" />
                      <div className="w-2 h-1 bg-stone-200 rounded-full" />
                      <div className="w-2 h-1 bg-stone-200 rounded-full" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-300">Deslizar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* ESPACIADOR FINAL para que el último elemento centre bien */}
          <div className="min-w-[5vw] md:min-w-[10vw]" />
        </div>

        {/* LÍNEA DE ESTILO INDUSTRIAL ABAJO */}
        <div className="w-full h-px bg-stone-100 mt-4" />
      </div>
    </section>
  );
};