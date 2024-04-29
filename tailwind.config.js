/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rem: ['var(--font-rem)'],
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        '5xl':'15px 15px 30px rgba(0, 0, 0, 0.5)',
      },
      
      animation: {
        marquee: 'marquee 20s linear infinite',
        spin: 'spin 0.2s linear',
        spinreverse: 'spinreverse 0.2s linear',
        blob: "blob 7s infinite",
        txt:'txt 2s ease infinite',
      },
      
      keyframes: {
        marquee: {
          '0%': { left: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(180deg)'
          }
        },
        spinreverse:{
          '0%': {transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(0deg)'
          }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        txt: {
          '0%, 100%': {
             'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
             'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      },

      letterSpacing: {
        mwider: '.15em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
