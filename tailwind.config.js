/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f0691b',
          50: '#fef6ee',
          100: '#fdebd6',
          200: '#fad4ad',
          300: '#f7b578',
          400: '#f38b41',
          500: '#f0691b',
          600: '#e14e11',
          700: '#ba3910',
          800: '#942e14',
          900: '#782813',
        },
      },
    },
  },
  plugins: [],
}