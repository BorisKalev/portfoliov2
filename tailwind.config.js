/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amulya: ["Amulya", "sans-serif"],
        synonym: ["Synonym", "serif"],
        calibre: ["Calibre", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      screens: {
        "sm-max": { max: "640px" },
        "md-max": { max: "768px" },
        "lg-max": { max: "1024px" },
        "xl-max": { max: "1280px" },
        "2xl-max": { max: "1536px" },
        "3xl-max": { max: "1920px" },
        "4xl-max": { max: "2560px" },
        "2xl": { min: "1536px" },
        "3xl": { min: "1920px" },
        "4xl": { min: "2560px" },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
