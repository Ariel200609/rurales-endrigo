// src/pages/Nosotros.tsx

export const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-stone font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: TEXTO RESUMIDO Y CHICO */}
          <div>
            <span className="text-brand-orange font-bold uppercase text-[10px] tracking-widest mb-3 block">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark leading-tight mb-6 uppercase">
              Tres generaciones <br/> forjando el campo.
            </h2>
            
            <p className="text-stone-600 leading-relaxed text-sm md:text-base  mb-8">
              Fundada en <strong className="font-bold text-brand-dark">1948</strong>  el Sr. Santos Endrigo padre del actual dueño decidió poner una carpintería y herrería rural, en la cual había trabajado desde los 16 años comprándole las instalaciones a su padre Don
Antonio Endrigo.
Don Santos, casado con Isabel Calles y padre de tres hijos: Patricia
Isabel, Silvia Elena y Raúl Santos; el cual al faltar su padre, tomó el control de la empresa para hacerse cargo de ella hoy RURALES ENDRIGO, contando hoy con una sucursal en Daireaux, transporte propio y la ocupación de 9 empleados a fijos.
            </p>

            <a href="#contacto" className="text-sm font-bold text-brand-dark border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
              Contactar con nosotros
            </a>
          </div>

          {/* LADO DERECHO: GRILLA MINIMALISTA DE DATOS */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <p className="text-3xl font-black text-brand-orange mb-1">78</p>
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Años de oficio</p>
              <p className="text-xs text-stone-500 mt-2 font-light">Desde 1948.</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <p className="text-3xl font-black text-brand-orange mb-1">09</p>
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Empleados</p>
              <p className="text-xs text-stone-500 mt-2 font-light">Mano de obra local.</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <p className="text-2xl font-black text-brand-dark mb-2 mt-1">Propia</p>
              <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Logística</p>
              <p className="text-xs text-stone-500 mt-2 font-light">Entregas inmediatas.</p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-brand-iron p-6 rounded-2xl shadow-sm border-b-4 border-brand-orange hover:shadow-md transition-shadow">
              <p className="text-xl font-black text-white mb-2 mt-2 leading-none">Bonifacio</p>
              <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Sede Central</p>
              <p className="text-xs text-white/50 mt-2 font-light">Laguna Alsina.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};