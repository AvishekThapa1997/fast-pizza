/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#eab308',
      },
      fontFamily: {
        sans: 'Roboto Mono, monospace',
      },
      height: {
        screen: '100dvh',
      },
      flexGrow: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
      },
    },
  },
  plugins: [],
};
