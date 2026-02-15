/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // Deep Navy
        secondary: "#112240", // Light Navy
        accent: "#64ffda", // Cyan/Teal (Standard for this look) - User asked for "Cyan" but usually it's this teal-ish color in these themes. I'll stick to a vibrant cyan/teal mix.
        // User specifically asked for "high-contrast blue accents", let's make accent a bright cyan.
        cyan: "#64ffda",
        textLight: "#ccd6f6", // Lightest Slate
        textDim: "#8892b0", // Slate
        navy: "#0a192f",
        lightNavy: "#112240",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(100, 255, 218, 0.5), 0 0 20px rgba(100, 255, 218, 0.3)',
      }
    },
  },
  plugins: [],
}
