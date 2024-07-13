/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-polygon': 'polygon(0 0, 100% 0, 100% 56%, 0 81%)',
      },
      colors: {
        primary: "#2C3E50",
        primary2: "#1ABC9C",
        grayText: "#ccc"
      }
    },
  },
  plugins: [],
};