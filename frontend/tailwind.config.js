/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Capsule Sans Text', '-apple-system ', 'BlinkMacSystemFont', 'sans-serif'],
      'serif': ['Capsule Sans Text', '-apple-system ', 'BlinkMacSystemFont', 'sans-serif'],
      'mono': ['Capsule Sans Text', '-apple-system ', 'BlinkMacSystemFont', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'intro': "url('./src/images/intro-background.png')"
      }
    },
  },
  plugins: [],
}
