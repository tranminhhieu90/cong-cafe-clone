module.exports = {
  mode: "jit",
  content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          "2xl": "1280px",
          lg: "960px",
        },
      },
    },
  },
  plugins: [],
};