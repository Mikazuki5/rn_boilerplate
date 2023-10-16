/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/screen/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0AC2FF',
        primary2: '#008FC7',
        gray: '#919DA1',
        gray2: '#D3D8D9',
        ebony1: '#151012',
      },
    },
  },
};
