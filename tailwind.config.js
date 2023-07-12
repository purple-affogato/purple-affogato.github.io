/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      'light-purple' : '#c9adf0',
      'medium-purple' : '#8034eb',
      'dark-purple' : '#40078f'
    },
    fontFamily: {
      'sans' : ['Impact', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

