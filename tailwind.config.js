const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      keyframes: {
        moveGradient:{
          '0%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-50%)'},
          '100%': {transform: 'translateY(0)'},
        },
        moveGradientX: {
          '0%': {transform: 'translateX(0)'},
          '25%':{transform: 'translateY(50%)'},
          '50%': {transform: 'translateY(0)'},
          '75%': {transform: 'translateX(50%)'},
          '100%': {transform: 'translateX(0)'},
        }
      },
      animation: {
        slowMove: 'moveGradient 10s ease-in-out infinite',
        slowMoveX: 'moveGradientX 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
