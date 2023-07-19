/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite-react/**/*.js"],
  theme: {
    extend: {
      colors: {
        mainbody: "#EAE7DC",
        navFooter: "#D8C3A5",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
