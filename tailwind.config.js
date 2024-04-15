/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#27305e",
        secondary: "#aaa6c3",
        tertiary: "#151f4e",
        readMore: "#0CCCFB",
        description: '#F5F5F7',
        link: '#eae9f0',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};