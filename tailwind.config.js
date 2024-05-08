/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow': '2px 0px 0px 2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}