/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html", "./script/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"DM Sans"', "serif"],
      },
    },
  },
  plugins: [],
};
