/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blur: "#5B5CE2",
        greener: "#1BC58D",
        whiter: "#F7F7FF",
        grayer: "#EEEEF5",
        pinker: "#F1419D",
      },
      container: {
        center: true,
        screens: {
          lg: "1440px"
        }
      }
    },
  },
  plugins: [],
}