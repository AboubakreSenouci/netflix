/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../src/**/*.stories.tsx",
  ],
  theme: {
    extend: {
      colors: {
        red: "#B9090B",
        black: "#141414",
        white: "#ffffff",
        grey: "#ffffff4d",
        grey100: "#bdbdbd",
        grey200: "#9f9f9f",
        grey300: "#808080",
        grey400: "#424242",
      }
    },
  },
  plugins: [],
}
