/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anz: {
          blue: '#003366',
          teal: '#00D1C1',
        }
      }
    },
  },
  plugins: [],
}
