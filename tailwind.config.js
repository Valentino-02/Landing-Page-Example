/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,html,png}",
    "./src/components/**/*.{js,ts,jsx,tsx,html,png}",
    "./src/app/**/*.{js,ts,jsx,tsx,html,png}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["var(--font-alegreya)"],
      },
      colors: {
        "deep-blue": "#000533",
        blue: "#3B74BA",
        red: "#F0609E",
        yellow: "#FBAD18",
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
