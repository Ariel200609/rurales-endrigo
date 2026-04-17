/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Acá vas a poner los colores que te pase la diseñadora
        // ej: 'brand-green': '#2d4a22',
      },
    },
  },
  plugins: [],
}