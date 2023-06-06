/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#64e08e",

          secondary: "#f224a6",

          accent: "#f4cdb5",

          neutral: "#302338",

          "base-100": "#f9fafb",

          info: "#43b0ea",

          success: "#75e1a0",

          warning: "#f9cd3e",

          error: "#f4806c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
