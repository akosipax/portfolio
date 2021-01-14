module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      minWidth: {
        '1/3': '33.33%',
      }
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.trans': {
          transition: 'all .25s',
        },
        '.trans-bgc': {
          transitionProperty: 'background color',
        }
      }

      addUtilities(newUtilities)
    }
  ]
}
