const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },

    extend: {
      fontFamily: {
        fredoka: ['"Fredoka One"', "cursive", ...defaultTheme.fontFamily.sans],
      },

      colors: {},
    },
  },
  plugins: [],
}
