/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f0f0f",
          gray: "#f5f5f5"
        }
      },
      boxShadow: {
        soft: "0 25px 50px -12px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
};
