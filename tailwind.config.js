/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        color: '#B3B3B3',
        backgroundColor: '#191414',
        width: '4px',
        borderRadius: '2px',
      },
    },
  },
  plugins: [],
}