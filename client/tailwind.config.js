/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shanty: "#000000",
        primary: "#0174DF",
        bgmenu: "#d4d4d8",
        mySecond: "#E8E8E8",
        accents2: ["#F9EBEA", "#D8CDD1"],
        accents3: ["#FFFCF9", "#FAFBFB"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
