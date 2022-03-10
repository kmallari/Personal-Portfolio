module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jb_mono: ["JetBrains Mono", "monospace"],
        dm: ["DM Sans", "sans serif"],
      },
    },
    colors: {
      "dark-neutral": "#0A0F0D",
      "dark-colored": "#2A1E5C",
      "primary-light": "#C4CBCA",
      "primary-1": "#3CBBB1",
      "primary-2": "#EE4266",
      "white": "#fff"
    },
  },
  plugins: [],
};
