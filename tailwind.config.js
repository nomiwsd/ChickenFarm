/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
  primarycl:'#83ca13',
  secondarybg:'#2DBF00',
  linkscl:'#545454',
  btncl:'#39C36E',
      },
      fontFamily: {
        opensans:'Open Sans',
        merriweather:'Merriweather',
      montserrat:'Montserrat'  
      },
      

    },
  },
  plugins: [],
}