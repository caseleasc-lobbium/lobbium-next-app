/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lblue: "#2E6FBE",
        ldark: "#223A5E",
        lorange: "#FF8A00",
      },
      borderRadius: {
        'xl2': '1rem',
      }
    },
  },
  plugins: [],
};
