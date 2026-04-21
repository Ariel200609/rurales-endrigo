// src/pages/Nosotros.tsx
import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import type {Variants} from 'framer-motion';
// ==========================================
// COMPONENTE INTELIGENTE: CONTADOR ANIMADO
// ==========================================
const AnimatedNumber = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  // El margen negativo asegura que dispare recién cuando entra bien en pantalla
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5, // Tiempo de la animación en segundos
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            // Formatea a dos dígitos si es menor a 10 (ej: 09)
            const formatted = value < 10 ? `0${Math.round(v)}` : Math.round(v);
            ref.current.textContent = `${formatted}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

// ==========================================
// VARIANTES DE ANIMACIÓN (Efecto Cascada / Stagger)
// ==========================================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // Retraso entre cada tarjeta
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-stone font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cambiamos a lg:grid-cols-2 para que en mobile y tablets chicas sea 1 columna */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LADO IZQUIERDO: IMAGEN + LÍNEA DE TIEMPO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden bg-brand-dark text-white p-8 md:p-12 shadow-2xl h-full flex flex-col justify-center min-h-[500px]"
          >
            {/* Fondo de foto con superposición oscura */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/cartel.webp" // Reemplazar por la foto del taller si la tenés
                alt="Taller Rurales Endrigo" 
                className="w-full h-full object-cover opacity-30 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-dark/40" />
            </div>

            <div className="relative z-10">
              <span className="text-brand-orange font-bold uppercase text-[10px] tracking-widest mb-3 block">
                Nuestras Raíces
              </span>
              {/* Cambiamos el título para no repetir el "78" de las tarjetas */}
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-10 uppercase italic tracking-tighter">
                Forjando <br/> <span className="text-brand-orange">Historia</span>
              </h2>
              
              {/* LÍNEA DE TIEMPO VERTICAL */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-orange before:via-brand-orange/50 before:to-transparent">
                
                {/* Hito 1 */}
                <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-brand-dark bg-brand-orange shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                    <h3 className="font-bold text-brand-orange text-lg">1948</h3>
                    <p className="text-sm text-stone-300 font-light mt-1">Don Santos Endrigo funda la carpintería rural original, comprando las instalaciones a su padre.</p>
                  </div>
                </div>

                {/* Hito 2 */}
                <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-brand-dark bg-brand-orange shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                    <h3 className="font-bold text-white text-lg">El Legado</h3>
                    <p className="text-sm text-stone-300 font-light mt-1">Tras toda una vida de trabajo, Raúl Santos Endrigo toma el control para modernizar la producción.</p>
                  </div>
                </div>

                {/* Hito 3 */}
                <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-brand-dark bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-6 md:group-even:pl-6">
                    <h3 className="font-bold text-white text-lg">Actualidad</h3>
                    <p className="text-sm text-stone-400 font-light mt-1">Con sede en Bonifacio y Daireaux, transporte propio y un equipo especializado de planta.</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* LADO DERECHO: GRILLA DE DATOS ANIMADA */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            
            {/* Tarjeta 1 */}
            <motion.div variants={cardVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <p className="text-4xl font-black text-brand-orange mb-1 italic">
                <AnimatedNumber value={78} />
              </p>
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest mt-2">Años de oficio</p>
              <p className="text-xs text-stone-500 mt-1 font-light">Desde 1948.</p>
            </motion.div>

            {/* Tarjeta 2 */}
            <motion.div variants={cardVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <p className="text-4xl font-black text-brand-orange mb-1 italic">
                <AnimatedNumber value={9} />
              </p>
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest mt-2">Empleados</p>
              <p className="text-xs text-stone-500 mt-1 font-light">Mano de obra local.</p>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div variants={cardVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow flex flex-col justify-center">
              <p className="text-2xl font-black text-brand-dark mb-2 mt-1">Propia</p>
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Logística</p>
              <p className="text-xs text-stone-500 mt-2 font-light">Entregas a campo.</p>
            </motion.div>

            {/* Tarjeta 4 */}
            <motion.div variants={cardVariants} className="bg-brand-iron p-6 rounded-2xl shadow-lg border-b-4 border-brand-orange flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-orange/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-black text-white mb-2 mt-2 leading-none">Bonifacio</p>
                <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Sede Central</p>
                <p className="text-xs text-white/50 mt-2 font-light">Laguna Alsina.</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};