/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
        30: '7.5rem',
        40: '10rem',
      },
    },
    fontFamily: {
      RegoReg: ['"RegoReg"', 'Arial'],
    },
  },
  plugins: [],
};
