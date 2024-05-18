/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#D6E3ED",
          100: "#425E6F",
          200: "#E2EBF0",
          300: "#008EC4",
          700: "#031634",
        },
      },
    },
  },
  plugins: [],
};
