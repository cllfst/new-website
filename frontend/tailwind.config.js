/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hacked: ["HACKED"],
        mokoto: ['Mokoto Glitch Two', 'sans-serif'], // Add the font family here

       
      },
     
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
