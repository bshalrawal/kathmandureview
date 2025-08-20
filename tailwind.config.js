const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e76f51',
        accent: '#f4a261',
        surfaceLight: '#fff5f4',
        surfaceDark: '#121214',
        textLight: '#1f2937',
        textDark: '#e5e7eb',
        mutedLight: '#f8f7f6',
        mutedDark: '#1a1b1e'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      borderRadius: {
        '2xl': '1rem',
        full: '9999px'
      },
      boxShadow: {
        card: '0 4px 10px rgba(0,0,0,0.05)',
        hover: '0 6px 14px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: []
}
