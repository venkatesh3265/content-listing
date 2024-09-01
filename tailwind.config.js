/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  
      backgroundImage: {
        'nav-bar': "url('https://test.create.diagnal.com/images/nav_bar.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}