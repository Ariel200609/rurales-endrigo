// src/pages/Servicios.tsx
import { motion } from 'framer-motion';

const categorias = [
  {
    titulo: "Fabricación Propia",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
    ),
    items: [
      "Mangas reforzadas completas",
      "Tranqueras de madera dura",
      "Guardaganados de hierro",
      "Balanzas para hacienda",
      "Cargadores curvos y rectos",
      "Cepos y bretes de trabajo"
    ]
  },
  {
    titulo: "Insumos Agro",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    items: [
      "Postes de Quebracho y Eucalipto",
      "Varillas y varillones",
      "Torniquetas y alambres",
      "Tanques australianos",
      "Bebederos y comederos",
      "Accesorios para alambrados"
    ]
  },
  {
    titulo: "Corralón",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    items: [
      "Hierros y perfilería a medida",
      "Chapas acanaladas y lisas",
      "Mallas cima para hormigón",
      "Cementos y cales",
      "Áridos (Arena, Piedra)",
      "Ladrillos y bloques"
    ]
  }
];

export const Servicios = () => {
  return (
    <section id="servicios" className="py-24 bg-[#0a0a0a] text-white font-sans border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO ANIMADO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
            Soluciones Integrales
          </span>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-none">
            Proveeduría <span className="text-brand-orange">Rural y Corralón</span>
          </h2>
        </motion.div>

        {/* GRILLA DE CATEGORÍAS (Animación en cascada) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {categorias.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#121212] border border-white/5 p-8 md:p-10 hover:border-brand-orange/50 transition-colors duration-500 rounded-sm group flex flex-col h-full"
            >
              <div className="text-brand-orange mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter italic border-b border-white/10 pb-4">
                {cat.titulo}
              </h3>
              <ul className="space-y-4 flex-grow">
                {cat.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-400 group-hover:text-stone-300 transition-colors">
                    <span className="text-brand-orange mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="font-light text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FRANJA INFERIOR ANIMADA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="flex items-center gap-6 bg-brand-orange p-8 rounded-sm">
            <div className="text-white">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-1">Logística Propia</h4>
              <p className="text-white/80 text-sm font-light">Entregas directas en el campo o en obra.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-brand-iron border border-white/5 p-8 rounded-sm">
            <div className="text-brand-orange">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-1">Presupuestos Rápidos</h4>
              <p className="text-stone-400 text-sm font-light">Calculamos los materiales exactos para tu proyecto.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};