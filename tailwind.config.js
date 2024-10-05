/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'max-1100': {'max': '1100px'},  // Custom breakpoint for screens 1100px and below
        'max-700': {'max': '700px'},    // Custom breakpoint for screens 700px and below
        'max-550': {'max': '550px'},    // Custom breakpoint for screens 550px and below
      },
      colors: {
        "label-color": "#5d6b6c",
        "number-input-color": "#084643",
        "error-color": "#d6765d",
        "input-focus-outline": "#5aa79d", // This will need to be used as a border utility class
        "input-bg-color": "#f3f8fb",
        "inactive-resetbtn-bg-color": "#0d686d",
        "active-resetbtn-bg-color": "#9fe8df",
        "resetbtn-text-color": "#00474b",
        "tipbtn-bg-color": "#00474b",
        "tipbtn-text-color": "#feffff",
        "tipbtn-hover-bg-color": "#9fe8df",
        "tipbtn-hover-text-color": "#014946",
        "custombtn-text-color": "#5d6b6c",
        "custominput-text-color": "#084643",
        "selected-text-color":"#014946",
        "selected-bg-color":"#9fe8df"
      },
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
      },
      letterSpacing: {
        "wide-custom": "0.8rem",
      },
      
    },
  },
  plugins: [],
};

