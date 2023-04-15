/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black1: "#0B0B0B",
      dark1: "#1C1C1E",
      dark2: "#2C2C2E",
      dark3: "#3A3A3C",
      gray1: "#9A9A9A",
      gray2: "#CACACA",
      background: "#F1F1F1",
      white: "#FFFFFF",
      orange1: "#FF9601",
      orange2: "#FFC470",
      gradient_dark: "linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%)",
    },
    fontFamily: {
      barlow: ["Barlow", "ui-monospace", "SFMono-Regular"],
      roboto: ["Roboto", "ui-monospace", "SFMono-Regular"],
      roboto_condensed: ["Roboto Condensed", "ui-monospace", "SFMono-Regular"],
    },
    extend: {},
  },
  plugins: [],
}

