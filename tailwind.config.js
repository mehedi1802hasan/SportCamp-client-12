/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: { colors: {
      darkBg: '#1F2937',
      darkText: '#FFFFFF',
      lightBg: '#FFFFFF',
      lightText: '#000000',
    },},
  },
  plugins: [require("daisyui")],
}

