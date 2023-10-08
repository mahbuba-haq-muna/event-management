/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobstar: "'Lobster Two', cursive",
        josefin: "'Josefin Sans', sans-serif",
      },

    },
  },
  plugins: [require("daisyui")],
}

