/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue": "hsl(240, 38%, 20%)",
        "grayish-blue": "hsl(240, 18%, 77%)"
      },
      fontFamily:{
        "inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

