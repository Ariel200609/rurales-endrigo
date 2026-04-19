# 🚜 Rurales Endrigo - Web Institucional Premium

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Plataforma web de alto rendimiento desarrollada para **Rurales Endrigo**, una empresa con tres generaciones de experiencia en carpintería rural, herrería y proveeduría de insumos agropecuarios ubicada en Bonifacio, Buenos Aires.

El proyecto está enfocado en ofrecer una experiencia de usuario (UX) fluida, con animaciones de nivel agencia, rendimiento optimizado para zonas con baja conectividad (entornos rurales) y un diseño moderno que transmite solidez y confianza.

---

## ✨ Características Principales

* **Animaciones Fluidas (Scroll Reveal):** Implementación de `framer-motion` para transiciones suaves, entradas en cascada y efectos de micro-interacción al hacer hover o tap, brindando una experiencia "App-like" en dispositivos móviles.
* **Catálogo Interactivo:** Carruseles horizontales con `snap-mandatory` para explorar productos y obras terminadas, con soporte táctil nativo.
* **Modales de Detalle Dinámicos:** Visualización de galerías de productos con cierre inteligente (click outside o tecla `Escape`).
* **Performance Extrema:** * Uso estricto de formatos de nueva generación (`.webp`).
    * Pre-carga (`preload`) del hero image crítico.
    * Implementación de `loading="lazy"` para diferir la carga de imágenes secundarias, ahorrando datos móviles.
* **SEO y Open Graph Optimizados:** Meta-etiquetas configuradas para un posicionamiento local fuerte y generación de "Rich Cards" elegantes al compartir el enlace por WhatsApp o redes sociales.
* **Diseño Totalmente Responsivo:** Maquetación *Mobile-First* utilizando Tailwind CSS, garantizando una visualización perfecta desde un celular en el campo hasta un monitor ultrawide.
* **Scrollbar Personalizada:** Modificación global de la barra de desplazamiento nativa para coincidir con la identidad visual de la marca (estilo oscuro e industrial).

---

## 🛠️ Tecnologías Utilizadas

* **Core:** React 18, TypeScript, Vite.
* **Estilos:** Tailwind CSS (con utilidades personalizadas en `index.css`).
* **Animaciones:** Framer Motion.
* **Analíticas:** Vercel Analytics (`@vercel/analytics`).
* **Deploy:** Vercel.

---

## 📂 Estructura del Proyecto

La arquitectura del proyecto sigue una estructura modular dentro del directorio `src/pages/`, separando lógicamente cada sección de la landing page:

```text
src/
├── pages/
│   ├── Home.tsx          # Contenedor principal de la Single Page
│   ├── Navbar.tsx        # Navegación fija con menú hamburguesa
│   ├── Hero.tsx          # Portada principal con animaciones de entrada
│   ├── Productos.tsx     # Catálogo con modal de galerías
│   ├── Servicios.tsx     # Grilla de servicios (Corralón, Agro, etc.)
│   ├── Obras.tsx         # Portfolio de proyectos entregados en el campo
│   ├── Nosotros.tsx      # Historia de la empresa
│   ├── Contacto.tsx      # Formulario y datos de ubicación
│   ├── WspButton.tsx     # Botón flotante de WhatsApp
│   └── ScrollReveal.tsx  # Componente HOC reutilizable para animaciones de entrada
├── index.css             # Estilos globales y Scrollbar custom
└── App.tsx               # Entry point de la aplicación