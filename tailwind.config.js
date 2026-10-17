/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#FFC9A0", // fondo de la página
        ink: "#1B1530", // texto principal
        lilac: "#D9D4FB", // superficie protagonista
        mint: "#C9F2E0", // superficie secundaria
        coral: "#F6C6C2", // superficie de énfasis
        sand: "#FFE3C2", // superficie cálida
        grape: "#6B3FD0", // acento (botones, enlaces)
        tangerine: "#FF8A5B", // acento de íconos activos
        arcade: "#05050F", // fondo del bloque arcade
        maze: "#2121DE", // azul de los muros
        pac: "#FFE600", // amarillo de Pac-Man
      },
      fontFamily: {
        display: ['"Poppins"', "sans-serif"],
        pixel: ['"Press Start 2P"', "monospace"],
      },
      // Escala fija: 14, 16, 20, 28, 40, 64
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "26px"],
        xl: ["20px", "28px"],
        "2xl": ["28px", "36px"],
        "4xl": ["40px", "44px"],
        "6xl": ["64px", "64px"],
      },
    },
  },
  plugins: [],
};
