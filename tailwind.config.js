module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      vali: ['VALORANT']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}