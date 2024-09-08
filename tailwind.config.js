/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#5E8591", //Turquesa oscuro
          200: "#9cd3f4", //Turquesa claro
          300: "#42b5ff", //Lima claro
        },
        secondary: {
          100: "#91504d", //Corinto oscuro
          200: "#cf8a82", //Naranja claro
          300: "#f1bfb2", //Rojo palido
        },
      },
    },
  },
  plugins: [],
};
/*
#5E8591 //Turquesa oscuro
#9cd3f4 //Turquesa claro
#bedecf //Lima claro
*/
