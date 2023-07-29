/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
        jost: ['Jost', "sans-serif"],
        crimson: ['Crimson Text', "sans-serif"],
      },
    },
  },
  plugins: [],
}

