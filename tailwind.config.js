/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'primary': '#010F58',
      },
      fontFamily: {
        'Osan': ['Open Sans', 'sans-serif'],
        'Man': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}