/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        420: "470px",
      },
      fontFamily: {
        body: ["Helvetica Neue", "Helvetica"],
      },
      backgroundImage: {
        mv: "url('/images/mv.jpg')",
        contact: "url('/images/bg2.jpg')",
      },
    },
  },
  plugins: [],
};
