/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Urbanist:[" 'Urbanist', sans-serif"],
        Inter:[" 'Inter', sans-serif"]
      }
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
