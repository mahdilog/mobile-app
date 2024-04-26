/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: "iransans",
        niconne: "niconne",
      },
      colors: {
        dark: {
          primary: "#1B262C",
          cyanBlue: "#0F4C75",
          windowsBlue: "#3282B8",
          lightBlue: "#BBE1FA",
          text: "#9F9F9F",
        },
        primary: "#f8f0fd",
        blueDianne: "#16425B",
        denim: "#2F6690",
        dirtyBlue: "#3A7CA5",
        windowsBlue: "#3282B8",
        halfBaked: "#81C3D7",
        lightGrey: "#D9DCD6",
      },
    },
  },
  plugins: [],
};
