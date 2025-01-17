/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Scans all HTML, JS, and JSX files inside the src directory
    "./index.html", // Scans the index.html file
    "./script/**/*.js", // Corrected glob pattern for all JS files in the script directory
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"DM Sans"', "serif"],
      },
    },
  },
  plugins: [],
};
