/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "figtree",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#111111",
        black1: "#707070",
        black2: "#414141",
        gray1: "#A0A0A0",
        gray2: "#F1F1F1",
        gray3: "#FAFAFA",
        gray4: "#C7C7CC",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "3rem", md: "1rem" },
      },
    },
  },
  plugins: [],
};