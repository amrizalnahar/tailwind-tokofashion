/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ["Satoshi", "cursive"]
    },
    container :{
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center : true,
    
    },
    extend: {
      colors :{
        'primary-1' : '#003E29',
        'primary-2' : '#E4BBA1',
        'primary-3' : '#D9D9D9',
        'secondary-1' : '#EDEDED',
        'secondary-2' : '#023423',
        'secondary-3' : '#787878'
      }
    },
  },
  plugins: [],
}
