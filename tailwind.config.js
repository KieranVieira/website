module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '490px',
      md: '680px',
      lg: '748px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        gray: '#5F5E62',
        lightGray: '#D6D6D6',
        darkGray: '#353535',
        blue: '#333AC2',
        lightBlue: '#AFAEE3',
        paleBlue: '#1B1D32',
        darkPaleBlue: '#141428',
        deepBlue: '#110F2B',
        darkDeepBlue: '#090815'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
