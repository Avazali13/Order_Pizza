/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:'Roboto Mono, monospace'
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '510',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {},
  },
  plugins: [],
}

