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
      // animation: {
      //   wobble: "wobble 1.5s ease-in-out infinite",
      // },
      // keyframes: {
      //   wobble: {
      //     "0%": {
      //       transform: "translateX(0)",
      //     },
      //     "100%": {
      //       transform: "translateX(2rem)",
      //     },
      //   },
      // },
      transitionProperty: {
        fader: "transform, opacity",
        transform: "transform",
      },
    },
  },
  plugins: [],
};
