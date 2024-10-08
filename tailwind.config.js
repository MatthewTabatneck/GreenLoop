/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F5f5dc",
        rgreen: "#00C805",
        back: "#FFFBF3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace 'Inter' with your desired font
      },
    },
  },
  plugins: [],
};
