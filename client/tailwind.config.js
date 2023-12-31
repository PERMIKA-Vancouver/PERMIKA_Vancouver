/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        smVertical: { raw: '(min-height: 700px)' },
        mdVertical: { raw: '(min-height: 900px)' },
        lgVertical: { raw: '(min-height: 1100px)' },
      },
      spacing: {
        15: '3.75rem',
        30: '7.5rem',
        40: '10rem',
      },

      fontFamily: {
        RegoBook: ['"RegoBook"'],
        AveRom: ['"AveRom"'],
        AveMed: ['"AveMed"'],
      },

      colors: {
        'sunset-orange': '#D07D14',
        'light-grey': '#BCBCBC',
        'black-permika': '#0A0A0A',
        'forest-green': '#102713',
        'light-green': '#4C7435',
      },

      keyframes: {
        growDown: {
          '0%': { transform: 'scaleY(0)' },
          '50%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },

      animation: {
        growDown: 'growDown 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
