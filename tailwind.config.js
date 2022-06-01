module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './common-components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
