/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "#1a1c23",
        black2: "#24262d",
        black3: "#121317",
        blue1: "#cabffd",
        blue2: "#6c2bd9",
        blue3: "#6a22e3",
        green1: "#046c4e",
        red1: "#c81e1e",
        grey1: "#9e9e9e",
        white1: "#ffffff0d",
      },
    },
  },
  plugins: [],
};
