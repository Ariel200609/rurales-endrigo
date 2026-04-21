// src/pages/Contacto.tsx
import { motion} from 'framer-motion';
import type { Variants } from 'framer-motion';
// ==========================================
// ÍCONOS SVG SEPARADOS
// ==========================================
const Icons = {
  WhatsApp: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  Email: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  MapPin: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
};

// ==========================================
// DATOS DE CONTACTO ORDENADOS
// ==========================================
const contactInfo = {
  phoneDisplay: "+54 9 2923 69-6961",
  phoneWhatsApp: "5492923696961",
  email: "ruralesendrigo@hotmail.com",
  address: "Alfredo Palacios 118, Bonifacio (Laguna Alsina), Buenos Aires",
  // Usamos el ID del lugar exacto en Google Maps para que siempre marque la ubicación correcta
  mapUrl: "https://maps.google.com/?q=Rurales+Endrigo,+Alfredo+Palacios+118,+Bonifacio",
  embedUrl: "https://maps.google.com/maps?q=Rurales+Endrigo,+Alfredo+Palacios+118,+Bonifacio&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

// Mensaje pre-armado para WhatsApp
const whatsappMessage = encodeURIComponent("Hola Rurales Endrigo, me comunico desde su sitio web para solicitar un presupuesto.");

// ==========================================
// VARIANTES DE ANIMACIÓN
// ==========================================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

export const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-dark text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
                Contacto Directo
              </span>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-12">
                Solicitá tu <span className="text-brand-orange">Presupuesto</span>
              </h2>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              
              {/* GRILLA DE BOTONES PRINCIPALES (WSP Y MAIL) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* BOTÓN WHATSAPP */}
                <motion.a 
                  variants={itemVariants}
                  href={`https://wa.me/${contactInfo.phoneWhatsApp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-3 p-6 rounded-[1.5rem] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] group transition-all duration-300 active:scale-95 text-center"
                >
                  <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-white group-hover:text-[#25D366] transition-transform duration-300 shadow-lg">
                    {Icons.WhatsApp}
                  </div>
                  <div>
                    <p className="text-[10px] text-[#25D366] group-hover:text-white uppercase font-bold tracking-[0.2em] mb-1 transition-colors">WhatsApp</p>
                    <p className="text-sm font-bold group-hover:text-white transition-colors">{contactInfo.phoneDisplay}</p>
                  </div>
                </motion.a>

                {/* BOTÓN EMAIL */}
                <motion.a 
                  variants={itemVariants}
                  href={`mailto:${contactInfo.email}`} 
                  className="flex flex-col justify-center items-center gap-3 p-6 rounded-[1.5rem] bg-brand-orange/10 border border-brand-orange/30 hover:bg-brand-orange group transition-all duration-300 active:scale-95 text-center overflow-hidden"
                >
                  <div className="w-12 h-12 bg-brand-orange text-white flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-white group-hover:text-brand-orange transition-transform duration-300 shadow-lg">
                    {Icons.Email}
                  </div>
                  <div className="w-full">
                    <p className="text-[10px] text-brand-orange group-hover:text-white uppercase font-bold tracking-[0.2em] mb-1 transition-colors">Vía Email</p>
                    <p className="text-sm font-bold group-hover:text-white transition-colors truncate px-2">{contactInfo.email}</p>
                  </div>
                </motion.a>

              </div>

              {/* ITEM: UBICACIÓN (Ancho completo) */}
              <motion.a 
                variants={itemVariants}
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group p-4 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-brand-orange/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 bg-brand-dark border border-white/10 flex items-center justify-center rounded-[1rem] group-hover:border-brand-orange group-hover:bg-brand-orange/20 transition-all">
                  <div className="text-stone-400 group-hover:text-brand-orange transition-colors">
                    {Icons.MapPin}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold tracking-widest mb-1 group-hover:text-stone-300 transition-colors">Taller y Corralón (Ver Mapa)</p>
                  <p className="text-sm md:text-base font-medium text-stone-300 group-hover:text-white transition-colors">{contactInfo.address}</p>
                </div>
              </motion.a>

            </motion.div>
          </div>

          {/* GOOGLE MAPS INTEGRADO CON MARCADOR REAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[250px] md:h-[400px] w-full bg-stone-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl relative group"
          >
            {/* Overlay para invitar a interactuar (Se desaparece al pasar el mouse) */}
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10 flex items-end justify-center pb-4">
               <span className="bg-brand-dark/80 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 backdrop-blur-md border border-white/10">
                 Mapa Interactivo
               </span>
            </div>
            
            <iframe 
              title="Ubicación oficial de Rurales Endrigo en Google Maps"
              src={contactInfo.embedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0 w-full h-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};