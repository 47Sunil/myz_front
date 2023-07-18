/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-myzer':
          'radial-gradient(50rem at left top,rgba(172, 32, 1, 1),rgba(172, 32, 1, 0.14)),radial-gradient(150rem at center left,rgba(28, 146, 255, 1),rgba(28, 146, 255, 0.52)),radial-gradient(150rem at right,rgba(97, 23, 255, 1),rgba(97, 23, 255, 0.57));',
        'gradient-report': 'linear-gradient(147deg, #5E36CE 0%, #4200FF 100%);',
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
        'gradient-landing-text':
          'linear-gradient(96.2deg, #FF6B00 31.5%, #BD61EC 95.56%);',
        'gradient-landing-purple':
          'linear-gradient(121.92deg, #8605C8 53.35%, #6117FF 105.85%);',
        'gradient-landing-orange':
          'linear-gradient(95.61deg, #E98519 45.52%, #E16717 98.77%);',
        'gradient-landing-text-purple':
          'linear-gradient(180deg, #210C4D 0%, #8E0FCE 100%);',
        'gradient-landing-blue':
          'linear-gradient(153.67deg, #5E36CE 0%, #4616AD 100%);',
        'gradient-add-page-purple':
          'linear-gradient(145.22deg, #A561EC 20.49%, #365DCE 99.83%);',
        'gradient-add-page-orange':
          'linear-gradient(117.81deg, #FFCC17 -11.33%, #FF9900 65.05%);',
        'gradient-add-page-blue':
          ' linear-gradient(232.71deg, #3360FF 31.44%, #10D4FF 108.73%);',
        'gradient-ai-magic':
          'linear-gradient(92.24deg, #8F5AFF 7.51%, #5E36CE 104.06%);',
        'gradient-ai-magic-toggle':
          'linear-gradient(180deg, #FF6B00 0%, #FF9900 97.4%);',
        'gradient-template-eye':
          'linear-gradient(180deg, #FF9900 0%, #FF6B00 100%)',
        'gradient-ai-bg-enabled':
          'linear-gradient(92.24deg, #282038 7.51%, #282038 104.06%)',
        'gradient-ai-solar':
          'linear-gradient(196.17deg, #7649D6 9.37%, #2F1369 54.7%);',
      },
      gridTemplateColumns: {
        reports: 'repeat(2,minmax(300px,1fr))',
        domain: '183px 183px 50px',
        landingPage: 'repeat(4,minmax(220px,1fr))',
        dashboard: 'repeat(5, minmax(100px, 1fr))',
        dashboardLG: '1fr 1fr 1fr 1fr 350px',
      },
      gridTemplateRows: {
        reports: 'repeat(2,minmax(300px,1fr))',
        dashboard: 'repeat(20, minmax(50px, 1fr))',
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
