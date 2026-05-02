// src/pages/Servicios.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

// ==========================================
// ÍCONOS
// ==========================================
const Icons = {
  Herramienta: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
  ),
  Tractor: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Corralon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

// ==========================================
// DATOS REALES
// ==========================================
const categorias = [
  {
    id: 'fabricacion',
    titulo: 'Fabricación Propia',
    icon: Icons.Herramienta,
    bajada: 'Productos fabricados en nuestro taller de Bonifacio con madera de primera selección.',
    items: [
      'Mangas reforzadas completas',
      'Tranqueras de madera dura',
      'Guardaganados de hierro',
      'Balanzas para hacienda',
      'Cargadores curvos y rectos',
      'Cepos y bretes de trabajo',
    ],
  },
  {
    id: 'insumos',
    titulo: 'Insumos Agro',
    icon: Icons.Tractor,
    bajada: 'Todo lo que necesitás para alambrados, aguadas y manejo del campo.',
    items: [
      'Postes de Quebracho y Eucalipto',
      'Varillas y varillones',
      'Torniquetas y alambres',
      'Tanques australianos',
      'Bebederos y comederos',
      'Accesorios para alambrados',
    ],
  },
  {
    id: 'corralon',
    titulo: 'Corralón',
    icon: Icons.Corralon,
    bajada: 'Materiales para construcción rural y de obra. Hierros, chapas y áridos a medida.',
    items: [
      'Hierros y perfilería a medida',
      'Chapas acanaladas y lisas',
      'Mallas cima para hormigón',
      'Cementos y cales',
      'Áridos — Arena y Piedra',
      'Ladrillos y bloques',
    ],
  },
];

// ==========================================
// ANIMACIONES
// ==========================================
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const pillContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const pillItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export const Servicios = () => {
  const [activo, setActivo] = useState(0);
  const cat = categorias[activo];

  return (
    <section
      id="servicios"
      className="py-24 bg-[#0a0a0a] text-white font-sans overflow-hidden"
      aria-label="Nuestros servicios y productos"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* ENCABEZADO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14 text-center"
        >
          <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-3 block">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-none">
            Nuestros <span className="text-brand-orange">Productos</span>
          </h2>
        </motion.div>

        {/* TABS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          {categorias.map((c, i) => {
            const isActive = i === activo;
            return (
              <button
                key={c.id}
                onClick={() => setActivo(i)}
                className={`
                  flex-1 flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl
                  font-bold uppercase text-xs tracking-widest transition-all duration-300
                  ${isActive
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/25 scale-[1.02]'
                    : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }
                `}
                aria-selected={isActive}
              >
                <span className={isActive ? 'text-white' : 'text-brand-orange'}>
                  {c.icon}
                </span>
                {c.titulo}
              </button>
            );
          })}
        </motion.div>

        {/* PANEL DE CONTENIDO ANIMADO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12"
          >
            {/* Bajada de categoría */}
            <p className="text-stone-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              {cat.bajada}
            </p>

            {/* PILLS / CHIPS */}
            <motion.div
              variants={pillContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3"
            >
              {cat.items.map((item) => (
                <motion.span
                  key={item}
                  variants={pillItem}
                  className="
                    flex items-center gap-2 px-5 py-3
                    bg-white/5 border border-white/8 rounded-full
                    text-sm font-medium text-stone-200
                    hover:border-brand-orange/60 hover:text-white hover:bg-brand-orange/10
                    transition-all duration-300 cursor-default
                  "
                >
                  {/* Punto naranja decorativo */}
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* FRANJA INFERIOR */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="flex items-center gap-4 bg-brand-orange p-6 rounded-2xl">
            <svg className="w-7 h-7 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-0.5">Logística Propia</h4>
              <p className="text-white/75 text-xs font-light">Entregas directas en el campo o en obra.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl">
            <svg className="w-7 h-7 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-0.5">Presupuestos Rápidos</h4>
              <p className="text-stone-400 text-xs font-light">Calculamos los materiales exactos para tu proyecto.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};