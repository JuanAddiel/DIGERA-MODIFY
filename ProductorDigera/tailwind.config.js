/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    /* src folder, for example */
  ],
  theme: {
    extend: {
      colors: {
        crusoe: {
          50: "#f0fdf2",
          100: "#dcfce1",
          200: "#bcf6c5",
          300: "#87ee99",
          400: "#4bdd65",
          500: "#24c340",
          600: "#17a230",
          700: "#167f29",
          800: "#176426",
          900: "#134c1f",
          950: "#052e0e",
        },
        aquamarine: {
          50: "#ebfef6",
          100: "#cffce8",
          200: "#a3f7d5",
          300: "#53eab7",
          400: "#2ddaa5",
          500: "#08c18f",
          600: "#009d75",
          700: "#007d60",
          800: "#02634e",
          900: "#035142",
          950: "#002e26",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
