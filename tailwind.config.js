/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'shadow': 'rgba(0, 0, 0, 0.45) 0px 25px 20px - 20px',
      },
      colors: {
        grape: 'rgba(var(--grape))',
        darkprimary: 'rgba(var(--darkprimary))',
        darksecondary: 'rgba(var(--darksecondary))',
        darkthird: 'rgba(var(--darkthird))'
      },
    },
  },
  plugins: [],
}

