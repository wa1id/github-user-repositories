const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx,jsx}",
    "./components/**/*.{html,js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#1ba0fc",

      //Default Tailwind colors
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
    },
  },
  plugins: [],
};
