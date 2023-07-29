/** @type {import('tailwindcss').Config} */ 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        gridRow: {
          'span-10': 'span 10 / span 10',
        }
    },
  },
  plugins: [],
}

