/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#fdfffc', // 
        'sky-blue': '#acd4f8',    // 
        'dark-bg': '#03050b',     // 
        'primary-indigo': '#4b45cb', // 
      },
      fontFamily: {
        stencil: ['"Allerta Stencil"', 'sans-serif'], // 
        body: ['Anybody', 'sans-serif'], // 
      },
    },
  },
  plugins: [],
}