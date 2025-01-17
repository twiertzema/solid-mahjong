/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "tile-back": "green",
      "tile-border": "black",
      "tile-front": "beige",
      "tile-text": "black"
    }
  },
  plugins: [],
}

