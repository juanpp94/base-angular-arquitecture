/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "iq-light-blue": "#002841",
        "iq-dark-blue": "#082334",
        "iq-light-black": "#191919",
        "iq-dark-black": "#111E26",
        "iq-light-orange": "#FFC055",
        "iq-dark-orange": "#F8A33F",
        "iq-darker-orange": "#F28629",
        "iq-darkest-orange": "#EB6913",

      }
    },
  },
  plugins: [],
}
