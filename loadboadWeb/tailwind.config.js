// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // white
        secondary: "#1C1C1C", // white
        primgradient: "#CF4C39", // red
        secgradient: "#2D119F", // dark purple
        OnSecondary: "#DFDFDF", // gray

        // for dark mode
        darkPrimary: "#3F3FB0", // dark purple
        darkOnPrimary: "#f3f3f3", // text white
        darkServices: "#282828", // dark gray
        darkSecondary: "#212121", //black background
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
});
