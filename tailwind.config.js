/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#960606",
        black: "#000000",
        white: "#ffffff",
        grey100: "#bdbdbd",
        grey200: "#9f9f9f",
        grey300: "#696969",
        grey400: "#424242",
      }
    },
  },
  plugins: [],
}
