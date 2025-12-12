/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'quiz-bg': '#eef2ff',
        'quiz-accent': '#4f46e5',
      }
    },
  },
  plugins: [],
}
