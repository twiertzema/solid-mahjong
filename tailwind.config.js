/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tile-back": "green",
        "tile-border": "black",
        "tile-front": "beige",
        "tile-text": "black",
      },
      fontSize: {
        "tile-lg": "1rem",
        "tile-md": "0.5rem",
        "tile-sm": "0.25rem",
      },
      height: {
        "tile-lg": "106px",
        "tile-md": "59px",
        "tile-sm": "38px",
      },
      width: {
        "tile-lg": "88px",
        "tile-md": "50px",
        "tile-sm": "33px",
      },
    },
    borderRadius: {
      none: "0",
      DEFAULT: "5px",
      sm: "3px",
      md: "5px",
      lg: "10px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      sm: "1px",
      md: "2px",
      lg: "6px",
    },
  },
  plugins: [],
};
