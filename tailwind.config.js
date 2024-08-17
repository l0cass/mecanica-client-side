/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#1F3A93",
        secundary: "#7F8C8D",

        accent: "#E74C3C",
        neutral: "#2C3E50",
        background: "#ECF0F1",
      },
      backgroundImage: {
        article: "url('/public/article.jpg')",
      },
    },
    container: {
      padding: {
        xl: "4rem",
        DEFAULT: "1rem",
      },
    },
  },
};
