/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // scan your React files
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",  // default padding for all containers
    },
    extend: {},
  },
  plugins: [],
}
