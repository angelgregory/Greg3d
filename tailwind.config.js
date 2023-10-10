/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            light: ["Inter"],
            bold: ["Inter"],
            nav: ["IBM Plex Mono"],
         },
      },
   },
   plugins: [],
};
