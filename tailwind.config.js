/** @type {import('tailwindcss').Config} */
//const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        s1: "8px",
        s2: "12px",
        s3: "16px",
        s4: "24px",
        s5: "32px",
        s6: "48px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
