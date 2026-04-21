// src/pages/Footer.tsx
import { FaWhatsapp } from "react-icons/fa";

const sections = [
  {
    title: "Productos",
    links: [
      { name: "Mangas", href: "#productos" },
      { name: "Tranqueras", href: "#productos" },
      { name: "Báscula para vacuno", href: "#productos" },
      { name: "Postes", href: "#productos" },
      { name: "Clavaderas", href: "#productos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { name: "Fabricación Propia", href: "#servicios" },
      { name: "Insumos Agro", href: "#servicios" },
      { name: "Corralón", href: "#servicios" },
      { name: "Logística Propia", href: "#servicios" },
      { name: "Presupuestos", href: "#contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Quiénes somos", href: "#nosotros" },
      { name: "Obras realizadas", href: "#obras" },
      { name: "Contacto", href: "#contacto" },
      { name: "Cómo llegar", href: "https://maps.google.com/?q=Rurales+Endrigo,+Alfredo+Palacios+118,+Bonifacio" },
    ],
  },
];

const socialLinks = [
  /*
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/ruralesendrigo",
    label: "Instagram de Rurales Endrigo",
  },
  {
    icon: <FaFacebook size={20} />,
    href: "https://www.facebook.com/ruralesendrigo",
    label: "Facebook de Rurales Endrigo",
  },*/
  {
    icon: <FaWhatsapp size={20} />,
    href: "https://wa.me/5492923696961",
    label: "WhatsApp de Rurales Endrigo",
  },
];

const legalLinks = [
  { name: "Política de Privacidad", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* CUERPO PRINCIPAL */}
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">

          {/* COLUMNA IZQUIERDA — Logo + descripción + redes */}
          <div className="flex w-full max-w-xs flex-col gap-6 lg:items-start">
            {/* Logo */}
            <a href="#inicio" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img
                src="/logoEndrigo.png"
                alt="Logo Rurales Endrigo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>

            {/* Descripción */}
            <p className="text-sm text-stone-400 leading-relaxed">
              Carpintería de diseño industrial para el sector agropecuario.
              Tres generaciones forjando calidad en Bonifacio, Buenos Aires.
            </p>

            {/* Dato rápido de contacto */}
            <div className="text-sm text-stone-400 space-y-1">
              <p>
                <span className="text-brand-orange font-semibold">Tel:</span>{" "}
                <a href="tel:+5492923696961" className="hover:text-white transition-colors">
                  +54 9 2923 69-6961
                </a>
              </p>
              <p>
                <span className="text-brand-orange font-semibold">Email:</span>{" "}
                <a href="mailto:ruralesendrigo@hotmail.com" className="hover:text-white transition-colors">
                  ruralesendrigo@hotmail.com
                </a>
              </p>
              <p>
                <span className="text-brand-orange font-semibold">Dirección:</span>{" "}
                <span>Alfredo Palacios 118, Bonifacio</span>
              </p>
            </div>

            {/* Redes sociales */}
            <ul className="flex items-center gap-5 text-stone-400">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA DERECHA — Links por sección */}
          <div className="grid w-full gap-8 grid-cols-2 md:grid-cols-3 lg:gap-16">
            {sections.map((section, sIdx) => (
              <div key={sIdx}>
                <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-brand-orange">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-stone-400 font-medium hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DIVISOR */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-600 font-medium">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} Rurales Endrigo. Todos los derechos reservados.
          </p>
          <ul className="order-1 md:order-2 flex gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-stone-300 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <span>Bonifacio, Buenos Aires, Argentina</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};
