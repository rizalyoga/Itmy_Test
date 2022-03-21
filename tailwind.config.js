module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        success: "#4BC0C0",
        review: "#FF9F40",
        fail: "#FF6384",
        pink: "#fb9cb5",
        blue: "#4db7f7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
