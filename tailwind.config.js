const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      jua: ['Jua', ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
