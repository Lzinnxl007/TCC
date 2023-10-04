const { withTV } = require('tailwind-variants/transformer')
/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fit: 'repeat(auto-fit, minmax(280px, 1fr))'
      },
      keyframes: {
        open: {
          '0%': { top: '-100%' },
          '100%': { top: '50%' },
        },
      },
      animation: {
        'open-modal': 'open 1s linear',
        'close-modal': 'close 1s linear'
      },
    },
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },
  },
  plugins: [],
})

