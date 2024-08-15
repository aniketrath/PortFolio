/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1440p': '2560px', // @media (min-width: 2560px) => 2560x1440 (16:9)
        '4xl': '2048px', // @media (min-width: 2048px) => 2048x1152 (16:9)
      },
      fontFamily: {
        barlow: [
          'Barlow',
          'sans-serif'
        ],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  daisyui: {
    themes: [
      {
        usertheme: {
          "primary": "#00ada1",
          "secondary": "#00ede5",
          "accent": "#737373",
          "neutral": "#0a0a0a",
          "base-100": "#0c0a09",
          "info": "#76ddff",
          "success": "#00b38f",
          "warning": "#c81100",
          "error": "#ff6772",
          "content": "#737373"
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}