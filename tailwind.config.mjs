import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import borders from '@tailwindcss/borders';


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.vue',
    './src/View/*.vue',
    './public/**/*.html',
  ],
  // purge: [
  //   './public/**/*.html',
  //   './src/**/*.vue',
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '4xl': '32px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      forms,
      typography,
      borders,
  ],
}
