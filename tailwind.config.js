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
        slideup: "slideup 0.8s ease-in-out",
      },
      keyframes: {
        slideup: {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0",
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
    },
  },
  plugins: [],
};
