// src/pages/Productos.tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EsqueletoInterno = () => (
  <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
    <svg className="w-12 h-12 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

const ImageLoader = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <EsqueletoInterno />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 relative z-10`}
      />
    </>
  );
};

const items = [
  { id: 1, nombre: 'Manga', img: '/mangainicio.webp', descripcion: 'Manga reforzada de 6 metros con andén lateral y baranda volcable. Madera de primera selección.', galeria: ['/mangainicio.webp',  '/manga1.webp', '/manga2.webp', '/manga3.webp'] },
  { id: 2, nombre: 'Báscula fija para vacuno', img: '/balanza.webp', descripcion: 'Báscula fija para vacuno con capacidad de 1500 kg.', galeria: ['/balanza.webp', '/balanza2.webp', '/balanza3.webp'] },
  { id: 3, nombre: 'Cargador Aéreo reforzado', img: '/cargador.webp', descripcion: 'Con parantes de 3x4 forrado con tablas ciegas.', galeria: ['/cargador.webp'] },
  { id: 4, nombre: 'Postes', img: '/poste.webp', descripcion: 'Postes tratados para cercos perimetrales y alumbrado rural. Disponibles en varias medidas.', galeria: ['/poste.webp', '/poste2.webp', '/poste3.webp'] },
  { id: 5, nombre: 'Clavaderas', img: '/clavaderas.webp', descripcion: 'Clavaderas. Personalizadas según necesidad del cliente.', galeria: ['/clavaderas.webp', '/clavaderas2.webp', '/clavaderas3.webp'] },
  { id: 6, nombre: 'Maderas', img: '/maderas.webp', descripcion: 'Brete completo con apretavacíos y puertas de inspección para veterinaria.', galeria: ['/maderas.webp', '/maderas2.webp', '/maderas3.webp'] },
  { id: 7, nombre: 'Tranqueras', img: '/tranqueras.webp', descripcion: 'Condos diagonales dobles y parantes dobles con tablas de 1x4. Personalizadas según necesidad del cliente.', galeria: ['/tranqueras.webp', '/tranqueras2.webp'] },
];

export const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  // REFERENCIAS PARA EL DRAG-TO-SCROLL
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 1. BLOQUEAR EL SCROLL DEL BODY CUANDO EL MODAL SE ABRE
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup por si el componente se desmonta con el modal abierto
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  // CERRAR CON ESCAPE
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // LOGICA DE DRAG PARA EL CARRUSEL
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
    const walk = (x - startX.current) * 2; // Multiplicador de velocidad del arrastre
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Función para distinguir click real de un arrastre
  const handleProductClick = (p: any, e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    // Si la distancia entre donde apretó y donde soltó es mayor a 10px, fue un arrastre. No abrimos modal.
    if (Math.abs(x - startX.current) > 10) return; 
    
    setSelectedProduct(p);
  };

  return (
    <section id="productos" className="relative z-10 py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-2">Catálogo</h2>
        <h3 className="text-4xl font-black text-brand-dark mb-12 italic">Fabricación Propia</h3>
        
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          // Quitamos 'snap-x' y 'snap-mandatory' porque chocan con el Drag manual en PC.
          className="flex overflow-x-auto gap-8 pb-10 no-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {items.map((p) => (
            <div 
              key={p.id} 
              className="min-w-[280px] md:min-w-[400px] group"
              // Usamos mouseUp en vez de onClick para calcular bien el Drag vs Click
              onMouseUp={(e) => handleProductClick(p, e)} 
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-stone mb-6 relative pointer-events-none">
                <ImageLoader 
                  src={p.img}
                  alt={p.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                   <span className="bg-white text-brand-dark px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">Ver Galería</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-brand-dark uppercase italic tracking-tighter pointer-events-none">{p.nombre}</h4>
              <p className="text-stone-400 text-sm mt-1 group-hover:text-brand-orange transition-colors pointer-events-none">Click para ver más fotos</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ANIMACIÓN DEL MODAL CON FRAMER MOTION */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 cursor-pointer"
            onClick={() => setSelectedProduct(null)} 
          >
            <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col md:flex-row shadow-2xl cursor-auto"
              onClick={handleModalClick}
            >
              <button 
                className="absolute top-4 right-4 z-30 text-brand-dark bg-white/70 backdrop-blur-sm rounded-full p-1 hover:scale-110 hover:bg-white transition-all shadow-md"
                onClick={() => setSelectedProduct(null)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="md:w-2/3 bg-brand-stone grid grid-cols-1 gap-1">
                {selectedProduct.galeria.map((img: string, idx: number) => (
                  <div key={idx} className="relative w-full min-h-[300px]">
                    <ImageLoader 
                      src={img}
                      alt={`Detalle de ${selectedProduct.nombre} - foto ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white sticky top-0">
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4">Detalle de Producto</span>
                <h2 className="text-3xl font-black text-brand-dark mb-6 italic uppercase leading-none">{selectedProduct.nombre}</h2>
                <div className="w-10 h-1 bg-brand-orange mb-6" />
                <p className="text-stone-600 leading-relaxed mb-8 font-light">
                  {selectedProduct.descripcion}
                </p>
                <a 
                  href="#contacto" 
                  onClick={() => setSelectedProduct(null)}
                  className="inline-block text-center bg-brand-orange text-white py-4 font-bold rounded-xl shadow-lg hover:bg-brand-red transition-colors active:scale-95"
                >
                  Consultar por este trabajo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};