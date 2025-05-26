/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7ffe6',
          500: '#b6ff00',
          600: '#92cc00',
          700: '#6d9900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/capa.png')",
      },
    },
  },
  plugins: [],
};