/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1f1e33",
      secondary: "#2C2B3D",
      tertiary: "#1b1a1e",
      text: "#fdfcfc",
    },
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
