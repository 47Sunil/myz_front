/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-myzer':
          'radial-gradient(50rem at left top,rgba(172, 32, 1, 1),rgba(172, 32, 1, 0.14)),radial-gradient(150rem at center left,rgba(28, 146, 255, 1),rgba(28, 146, 255, 0.52)),radial-gradient(150rem at right,rgba(97, 23, 255, 1),rgba(97, 23, 255, 0.57));',
        'gradient-report':
          'linear-gradient(121.92deg, #5e36ce 53.35%, #4200ff 105.85%);',
        'gradient-reddot':
          'linear-gradient(136.47deg, #ff3939 12.64%, #ff9900 82.33%);',
        'gradient-transparent-white':
          'linear-gradient(174.78deg, rgba(255, 255, 255, 0.07) 4.18%,rgba(255, 255, 255, 0.0105) 101.95% );',
        'gradient-orange-text':
          'linear-gradient(98.02deg, #ff6b00 6.92%, #ff9900 97.15%);',
        'gradient-sidebar':
          'linear-gradient(180deg,rgba(255, 255, 255, 0.0153) 0%, rgba(255, 255,255, 0.09) 100%);',
      },
      gridTemplateColumns: {
        reports: 'repeat(2,minmax(300px,1fr))',
      },
      gridTemplateRows: {
        reports: 'repeat(2,minmax(300px,1fr))',
      },
      boxShadow: {
        'white-inner': 'inset 6px 9px 40px rgba(255, 255, 255, 0.25);',
        bitmoji:
          '0px 0px 15px rgba(0, 0, 0, 0.25), inset 6px 9px 40px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
