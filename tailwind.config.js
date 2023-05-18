/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
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
        'gradient-banner-domain-purple':
          'linear-gradient(91.27deg, #8063FF 10.8%, #6117FF 81.13%);',
        'gradient-banner-domain-orange':
          'linear-gradient(93.18deg, #FFCC17 -1.04%, #E98519 100%);',
        'gradient-banner-text-orange':
          'linear-gradient(94.48deg, #FFA15E 41.84%, #F76F47 60%);',
        'gradient-banner-text-purple':
          'linear-gradient(92.61deg, #1C32FF 33.49%, #B71DFF 97.55%);',
        'gradient-border-dashed':
          'linear-gradient(269.59deg, #2D2935 15.84%, #1D2B38 71.25%);',
        'gradient-add-icon':
          'linear-gradient(203.96deg, #F26E57 9.69%, #C663D4 101.69%);',
        'gradient-transparent-domain':
          'linear-gradient(269.59deg, #2D2935 15.84%, #1D2B38 71.25%);',
        'gradient-add-domain-orange':
          'linear-gradient(153.67deg, #FF9900 0%, #FF6B00 100%);',
        'gradient-add-domain-purple-text':
          'linear-gradient(267.98deg, rgba(189, 97, 236, 0.71) 25.42%, rgba(187, 164, 255, 0.71) 38.73%);',
      },
      gridTemplateColumns: {
        reports: 'repeat(2,minmax(300px,1fr))',
        domain: '183px 183px 50px',
      },
      gridTemplateRows: {
        reports: 'repeat(2,minmax(300px,1fr))',
      },
      boxShadow: {
        'white-inner': 'inset 6px 9px 40px rgba(255, 255, 255, 0.25);',
        bitmoji:
          '0px 0px 15px rgba(0, 0, 0, 0.25), inset 6px 9px 40px rgba(255, 255, 255, 0.25)',
      },
      borderColor: {
        'gradient-border-dashed':
          'linear-gradient(269.59deg, #2D2935 15.84%, #1D2B38 71.25%);',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
