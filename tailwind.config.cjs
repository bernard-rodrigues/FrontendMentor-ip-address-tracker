/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif"
      },
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)"
      },
      fontSize: {
        textInput: "18px"
      },
      fontWeight: {
        myLight: 400,
        mySemiBold: 500,
        myBold: 700
      },
      backgroundImage: {
        myPattern: "url('/src/assets/pattern-bg.png')"
      }
    },
  },
  plugins: [],
}