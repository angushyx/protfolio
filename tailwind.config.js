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
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        fredoka: ['"Fredoka One"', "cursive", ...defaultTheme.fontFamily.sans],
      },
      flexGrow: {
        "1/2": 0.5,
      },
      zIndex: {
        9999: "9999",
      },
      colors: {
        "regal-blue": "#0759854d",
      },

      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      skew: {
        8: "8deg",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
}
