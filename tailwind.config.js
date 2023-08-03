/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#89ABE3",
          secondary: "#6F9CEB",
          tertiary: "#FF9AA2",
        },
        dark: {
          primary: "#1F2335",
          secondary: "#00a4cc",
          tertiary: "#007F7F",
          quaternary: "#6a5acd",
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
        },
        textShadow: {
          default: "0 2px 5px rgba(0, 0, 0, 0.5)",
          lg: "0 4px 10px rgba(0, 0, 0, 0.5)",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          fadeOut: {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
          },
        },
        animation: {
          fadeIn: "fadeIn 2s ease-in forwards",
          fadeOut: "fadeOut 2s ease-in forwards",
        },
      },
    },
    variants: {
      extend: {
        animation: ["responsive", "motion-safe", "motion-reduce"],
      },
    },
    plugins: [],
  },
};
