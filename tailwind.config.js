module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        blue: '#333AC2',
        paleBlue: '#1B1D32',
        darkPaleBlue: '#141428',
        deepBlue: '#110F2B',
        darkDeepBlue: '#090815'
      }
    }
  },
  plugins: [],
}
