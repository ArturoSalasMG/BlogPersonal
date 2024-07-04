/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#33DD8B',
      bg: '#0A0D1D',
      button_primary:' #0F142C',
      rose: '#ef4444',
      danna: '#fde047'
    }
  },
  plugins: [],
}

