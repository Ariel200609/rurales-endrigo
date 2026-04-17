// src/pages/Productos.tsx
import { useState } from 'react';

// Reemplazá el array 'items' por este con 10 productos
const items = [
  { 
    id: 1, 
    nombre: 'Manga de Tratamiento', 
    img: '/mangainicio.webp',
    descripcion: 'Manga reforzada de 6 metros con andén lateral y baranda volcable. Madera de primera selección.',
    galeria: ['/mangainicio.webp', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800' ]
  },
  { 
    id: 2, 
    nombre: 'Tranquera de Lapacho', 
    img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800',
    descripcion: 'Tranquera de 4 metros en Lapacho puro, herrajes reforzados pintados en epoxi negro.',
    galeria: ['https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800']
  },
  { 
    id: 3, 
    nombre: 'Balanza de Hacienda', 
    img: 'https://images.unsplash.com/photo-1596716035249-14a938c35b80?q=80&w=800',
    descripcion: 'Balanza electrónica de alta precisión con jaula de madera dura y puertas guillotina.',
    galeria: ['https://images.unsplash.com/photo-1596716035249-14a938c35b80?q=80&w=800']
  },
  { 
    id: 4, 
    nombre: 'Cargador Curvo', 
    img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800',
    descripcion: 'Diseño curvo para facilitar el flujo del ganado hacia el camión. Piso antideslizante.',
    galeria: ['https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800']
  },
  { 
    id: 5, 
    nombre: 'Guardaganado de Hierro', 
    img: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=800',
    descripcion: 'Estructura de hierro doble T con base de hormigón. Resistencia para transporte pesado.',
    galeria: ['https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=800']
  },
  { 
    id: 6, 
    nombre: 'Brete de Trabajo', 
    img: 'https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=800',
    descripcion: 'Brete completo con apretavacíos y puertas de inspección para veterinaria.',
    galeria: ['https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=800']
  },
  { 
    id: 7, 
    nombre: 'Comedero de Autoconsumo', 
    img: 'https://images.unsplash.com/photo-1527859282247-975000961729?q=80&w=800',
    descripcion: 'Comedero de gran capacidad construido en madera y chapa galvanizada. Alta durabilidad.',
    galeria: ['https://images.unsplash.com/photo-1527859282247-975000961729?q=80&w=800']
  },
  { 
    id: 8, 
    nombre: 'Cepo Reforzado', 
    img: 'https://images.unsplash.com/photo-1545468241-016c0268153c?q=80&w=800',
    descripcion: 'Cepo de cierre rápido con protección de cogote. Ideal para trabajos de vacunación rápida.',
    galeria: ['https://images.unsplash.com/photo-1545468241-016c0268153c?q=80&w=800']
  },
  { 
    id: 9, 
    nombre: 'Casilla de Operar', 
    img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800',
    descripcion: 'Casilla techada para trabajos de inseminación y tacto. Máxima seguridad para el operario.',
    galeria: ['https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800']
  },
  { 
    id: 10, 
    nombre: 'Postes de Alumbrado', 
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800',
    descripcion: 'Postes de Eucalipto tratado para instalaciones eléctricas rurales y cercos perimetrales.',
    galeria: ['https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800']
  },
];

export const Productos = () => {
  // Estado para saber qué producto se está viendo en detalle
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section id="productos" className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-2">Catálogo</h2>
        <h3 className="text-4xl font-black text-brand-dark mb-12 italic">Fabricación Propia</h3>
        
        {/* CARRUSEL HORIZONTAL */}
        <div className="flex overflow-x-auto gap-8 pb-10 snap-x no-scrollbar">
          {items.map((p) => (
            <div 
              key={p.id} 
              className="min-w-[280px] md:min-w-[400px] snap-start group cursor-pointer"
              onClick={() => setSelectedProduct(p)} // Al clickear, seleccionamos el producto
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-stone mb-6 relative">
                <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.nombre} />
                {/* Overlay sutil que aparece al hacer hover */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-white text-brand-dark px-4 py-2 text-xs font-bold uppercase tracking-widest">Ver Galería</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-brand-dark uppercase italic tracking-tighter">{p.nombre}</h4>
              <p className="text-stone-400 text-sm mt-1">Click para ver más fotos</p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MODAL DE DETALLE (Sólo se ve si hay algo seleccionado)
          ========================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Fondo desenfocado con click para cerrar */}
          <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col md:flex-row shadow-2xl">
            {/* Botón Cerrar */}
            <button 
              className="absolute top-4 right-4 z-10 text-brand-dark hover:scale-110 transition-transform"
              onClick={() => setSelectedProduct(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Galería de fotos (Izquierda) */}
            <div className="md:w-2/3 bg-brand-stone grid grid-cols-1 gap-1">
              {selectedProduct.galeria.map((img: string, idx: number) => (
                <img key={idx} src={img} className="w-full h-auto object-cover" alt={`Detalle ${idx}`} />
              ))}
            </div>

            {/* Información (Derecha) */}
            <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4">Detalle de Producto</span>
              <h2 className="text-3xl font-black text-brand-dark mb-6 italic uppercase leading-none">{selectedProduct.nombre}</h2>
              <div className="w-10 h-1 bg-brand-orange mb-6" />
              <p className="text-stone-600 leading-relaxed mb-8 font-light">
                {selectedProduct.descripcion}
              </p>
              <a 
                href="#contacto" 
                onClick={() => setSelectedProduct(null)}
                className="inline-block text-center bg-brand-orange text-white py-4 font-bold rounded-xl shadow-lg hover:bg-brand-red transition-colors"
              >
                Consultar por este trabajo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};