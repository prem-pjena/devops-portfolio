/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",  // For all JS, TS, JSX, TSX, and HTML files in the src folder
    "./public/index.html",  // To ensure Tailwind CSS scans the public/index.html for class names
  ],
  theme: {
    extend: {
      // Example of extending the theme with custom colors, fonts, etc.
      colors: {
        primary: '#1DA1F2',  // Custom primary color
        secondary: '#14171A',  // Custom secondary color
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],  // Example of adding a custom font
      },
    },
  },
  plugins: [
    // Add any additional Tailwind plugins here if needed
  ],
}
