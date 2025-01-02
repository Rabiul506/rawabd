/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xsm': '480px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '980px',

      'xl': '1400px', // 1200px
    },

    extend: {
      scale: {
        '101': '1.01',
      },
      borderWidth: {
        '0.5': '0.5px'
      },
      fontSize: {
        'mini': '.9rem'
      }
    },
    fontFamily: {
      sans: [],
      serif: ['Roboto', 'serif'],
    },
  },
  plugins: [],
}