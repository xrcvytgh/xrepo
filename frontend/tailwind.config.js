/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        darkPrimary: '#3b82f6',
        bgLight: '#ffffff',
        bgDark: '#0f172a',
        cardLight: '#f8fafc',
        cardDark: '#1e293b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  darkMode: 'media',
  plugins: [],
}
