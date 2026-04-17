// src/pages/Nosotros.tsx

export const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-stone font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* LADO IZQUIERDO: RELATO HISTÓRICO */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
                Nuestra Historia
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-[0.9] italic uppercase tracking-tighter">
                Una herencia <br/> 
                <span className="text-brand-orange">de oficio.</span>
              </h2>
            </div>

            <div className="space-y-6 text-brand-dark/80 leading-relaxed font-light text-lg">
              <p>
                La historia de nuestra casa comienza en **1948**, cuando el **Sr. Santos Endrigo** decidió forjar su propio camino en la carpintería y herrería rural. Tras haber trabajado desde los 16 años con su padre, Don Antonio Endrigo, Santos tomó la decisión de adquirir las instalaciones para dar vida a lo que hoy es un símbolo de confianza en el sector.
              </p>
              <p>
                Don Santos, junto a su esposa Isabel Calles, formaron una familia dedicada al trabajo, siendo padres de Patricia Isabel, Silvia Elena y **Raúl Santos**. Fue Raúl quien, tras la partida de su padre, asumió el liderazgo de la empresa con la misma pasión y compromiso.
              </p>
              <p className="font-medium text-brand-dark">
                Hoy, bajo la firma de <span className="italic">RURALES ENDRIGO</span>, continuamos ese legado combinando la sabiduría de tres generaciones con la infraestructura necesaria para los desafíos actuales del campo.
              </p>
            </div>

            {/* BOTÓN O FIRMA OPCIONAL */}
            <div className="pt-4 border-t border-stone-300 inline-block">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">
                Raúl Santos Endrigo — <span className="text-brand-orange">Director General</span>
              </p>
            </div>
          </div>

          {/* LADO DERECHO: DATOS DE LA EMPRESA (El bloque "Premium") */}
          <div className="md:col-span-5 relative">
            {/* Elemento decorativo detrás */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
            
            <div className="relative bg-brand-iron p-10 md:p-14 rounded-sm shadow-2xl transform md:rotate-2 border-l-8 border-brand-orange">
              <div className="space-y-12">
                
                {/* Dato 1 */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-black text-brand-orange italic">78</div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">Años de Trayectoria</p>
                    <p className="text-white/40 text-xs mt-1">Desde la fundación por Don Santos.</p>
                  </div>
                </div>

                {/* Dato 2 */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">Sucursal Daireaux</p>
                    <p className="text-white/40 text-xs mt-1">Presencia firme en la provincia.</p>
                  </div>
                </div>

                {/* Dato 3 */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-black text-white italic">09</div>
                  <div>
                    <p className="text-brand-orange font-bold uppercase tracking-widest text-sm">Empleados Fijos</p>
                    <p className="text-white/40 text-xs mt-1">Mano de obra calificada y comprometida.</p>
                  </div>
                </div>

                {/* Dato 4 */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">Logística Propia</p>
                    <p className="text-white/40 text-xs mt-1">Transporte directo a su establecimiento.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};