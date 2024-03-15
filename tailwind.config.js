/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["WorkSans", "san-serif"],
      },
    },
  },
  plugins: [],
};
