module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pt_mono: ["PT Mono", "monospace"],
        dm_mono: ["DM Mono", "monospace"],
        dm: ["DM Sans", "sans serif"],
      },
      blur: {
        fourXL: "128px",
      },
      backgroundImage: {
        noise: "url('https://grainy-gradients.vercel.app/noise.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "dark-neutral": "#0A0F0D",
        "dark-colored": "#2A1E5C",
        "primary-light": "#C4CBCA",
        "primary-1": "#3CBBB1",
        "primary-2": "#EE4266",
      },
      fontSize: {
        tiny: [
          "0.69rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
      backgroundImage: {
        "dark-grid":
          "linear-gradient(to right, rgb(19, 19, 20) 1px, transparent 1px), linear-gradient(to bottom, rgb(19, 19, 20) 1px, transparent 1px);",
        "light-grid":
          "linear-gradient(to right, rgb(225, 225, 238) 1px, transparent 1px), linear-gradient(to bottom, rgb(225, 225, 238) 1px, transparent 1px);",
      },
    },
  },
  plugins: [],
};
