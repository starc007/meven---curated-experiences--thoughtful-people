/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'sand': {
          50: '#f8f7f4',
          100: '#f2f0ea',
          200: '#e8e4d9',
          300: '#d8d0be',
          400: '#c5b9a1',
          500: '#b4a487',
          600: '#a89376',
          700: '#8d7a61',
          800: '#736551',
          900: '#5f5445',
          950: '#332e25',
        },
        'charcoal': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
        'cream': {
          50: '#fbfaf6',
          100: '#f6f4eb',
          200: '#efebdc',
          300: '#e5ddca',
          400: '#d6cbb1',
          500: '#c3b391',
          600: '#b59d75',
          700: '#97835f',
          800: '#7b6a51',
          900: '#655845',
          950: '#353026',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-up': 'fadeUp 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderWidth: {
        'hairline': '0.5px',
      }
    },
  },
  plugins: [],
}