module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Press Start 2P"', 'cursive'],
        serif: ['receipt', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-radix')()],
}
