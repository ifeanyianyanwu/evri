/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-one": "url('/src/assets/Home-Background-One.webp')",
        "hero-two": "url('/src/assets/Home-Background-Two.webp')",
        "hero-three": "url('/src/assets/Home-Background-Three.webp')",
      },
      animation: {
        slideup: "slideup 1s ease",
      },
      keyframes: {
        slideup: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      transitionProperty: {
        fader: "transform, opacity",
        transform: "transform",
      },
      boxShadow: {
        normal: "0px 5px 30px -5px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
