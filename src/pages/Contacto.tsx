// src/pages/Contacto.tsx

export const Contacto = () => {
  const phone = "+5492923696961";
  const email = "ruralesendrigo@hotmail.com";
  const address = "Calle Palacios 118, Bonifacio, Buenos Aires";

  return (
    <section id="contacto" className="py-24 bg-brand-dark text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
              Contacto Directo
            </span>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-12">
              Solicitá tu <span className="text-brand-orange">Presupuesto</span>
            </h2>

            <div className="space-y-10">
              <a href={`tel:${phone}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl group-hover:bg-brand-orange transition-all">
                  <svg className="w-6 h-6 text-brand-orange group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">Llamanos</p>
                  <p className="text-lg font-bold">+54 9 2923 69-6961</p>
                </div>
              </a>

              <a href={`mailto:${email}`} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl group-hover:bg-brand-orange transition-all">
                  <svg className="w-6 h-6 text-brand-orange group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">Escribinos</p>
                  <p className="text-lg font-bold">{email}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase font-bold tracking-widest">Ubicación</p>
                  <p className="text-lg font-bold">{address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAPS INTEGRADO */}
          <div className="h-[400px] w-full bg-stone-900 rounded-sm border border-white/5 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.2374668612185!2d-62.2458421!3d-36.6341496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592f8e1e7798363%3A0x633630f785e7836b!2sPalacios%20118%2C%20Bonifacio%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1713374400000!5m2!1ses!2sar"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};