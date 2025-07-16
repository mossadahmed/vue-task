/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,pug}"],
  theme: {
    extend: {
      colors: {
        Page: 'rgba(242, 240, 241, 1)',
      },
      screens: {
        sm: '400px' 
          
      }
    },
  },
  plugins: [],
};
