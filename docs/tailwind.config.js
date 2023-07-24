/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {
      colors: {
        mainbody: "#F2F1EF",
        navFooter: "#A5978B",
        // card: "#C4BBAF",
        buttonColor: "#E84855",
        buttonHover: "#BC4749",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
