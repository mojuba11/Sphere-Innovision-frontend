/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sphereBlue: '#004a99',
        innovationCyan: '#00d2ff',
        sphereDark: '#0a2e5c',
      },
    },
  },
  plugins: [],
}