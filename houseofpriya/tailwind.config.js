/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gabriola: ["Gabriola", "cursive"],
        readex: ["'Readex Pro'", "sans-serif"],
        nanum: ["'Nanum Myeongjo'", "serif"],
        geist: ["Geist", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
