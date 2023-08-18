/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html", "./node_modules/flowbite/**/*.{js, jsx, html}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        light: {
          primary: "#FFFFFF",
          secondary: "#50D890",
          tertiary: "#4F98CA",
          quaternary: "#272727",
        },
        dark: {
          primary: "#090030",
          secondary: "#0C3C78",
          tertiary: "#04879C",
          quaternary: "#F30A49",
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
    plugins: [
      require('flowbite/plugin')
    ],
  },
};
