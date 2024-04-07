/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "320px",
        "tablet": "720px",
        "laptop": "1024px",
        "desktop": "1280px",
        "larger-screen": "1400px"
      }
    },
  },
  plugins: [],
}