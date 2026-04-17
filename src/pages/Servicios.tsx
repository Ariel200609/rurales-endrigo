// src/pages/Servicios.tsx

const servicios = [
  {
    title: "Venta de Materiales",
    desc: "Contamos con stock permanente de áridos, cementos, cales y ladrillos para la construcción.",
    icon: "🏗️"
  },
  {
    title: "Hierros y Perfilería",
    desc: "Todo en hierros a medida, mallas cima y perfiles para estructuras metálicas pesadas.",
    icon: "⚙️"
  },
  {
    title: "Entrega en Obra",
    desc: "Logística propia con camiones preparados para descargar materiales en su establecimiento o ciudad.",
    icon: "🚚"
  },
  {
    title: "Asesoramiento Técnico",
    desc: "Tres generaciones de experiencia para ayudarte a calcular los materiales de tu proyecto.",
    icon: "📋"
  }
];

export const Servicios = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-iron text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
            Más que carpintería
          </span>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-none">
            Servicio de <span className="text-brand-orange">Corralón</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((s, i) => (
            <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-brand-orange transition-all duration-500 cursor-default">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">
                {s.title}
              </h3>
              <p className="text-white/50 group-hover:text-white/90 text-sm leading-relaxed font-light transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};