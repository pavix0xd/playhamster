/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      "./index.html",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        },
      },
    },
    theme: {
      extend: {},
    },
    plugins: [],
  };
  