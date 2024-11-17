module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source folder
    "./node_modules/flowbite/**/*.js", // Add flowbite paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
