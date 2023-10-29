/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'mobile': {'max': '480px'},
      'tablet': {'max': '768px'}
    },
    fontFamily: 
    {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

