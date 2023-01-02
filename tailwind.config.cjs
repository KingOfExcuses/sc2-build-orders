/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#082032',
        gray: {
          dark: '#2C394B',
          light: '#334756',
        },
        orange: '#FF4C29',
      },
    },
  },
  plugins: [],
}
