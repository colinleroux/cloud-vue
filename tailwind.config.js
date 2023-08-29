/** tailwindconfig.js*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],


daisyui: {
      themes: [
        {
          mytheme: {

 "primary": "#0c4a6e",

 "secondary": "#2563eb",

 "accent": "#06b6d4",

 "neutral": "#2b3440",

 "base-100": "#ffffff",

 "info": "#93c5fd",

 "success": "#0d9488",

 "warning": "#f59e0b",

 "error": "#be123c",
          },
        },
      ],
    },  

    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}