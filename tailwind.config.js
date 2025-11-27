/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // dark slate
        surface: "#020617",
        surfaceAlt: "#020617",
        accent: {
          DEFAULT: "#22c55e", // teal/green
          soft: "rgba(34,197,94,0.15)",
        },
      },
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        "soft-xl": "0 18px 45px rgba(15,23,42,0.85)",
      },
    },
  },
  plugins: [],
};
