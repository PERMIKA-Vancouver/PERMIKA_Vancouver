/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        "xs": "500px",
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
        'black-text': '#050505',
        'grey-body': '#9A9A9A',
        'forest-green': '#06170E',
        'sunset-orange': '#D07D14',
        'light-green': '#4C7435',
        'light-grey': '#BCBCBC',
        'grey-footer': '#5B5B5B',
        'cream-bg': '#F7F6F4',
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
  plugins: [
    function ({addUtilities}) {
        const newUtilities = {
            '.line-through-red': {
                'textDecoration': 'line-through',
                'text-decoration-color': 'red',
            },
        }
        addUtilities(newUtilities)
    }
  ],
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: [
                  'style-loader', // Injects styles into DOM
                  'css-loader',   // Translates CSS into CommonJS
                  'sass-loader'   // Compiles Sass to CSS
              ]
          }
      ]
  }
};
