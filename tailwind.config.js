/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDF7",
        sky: "#BFE8F8",
        blush: "#F8C8DC",
        butter: "#FFF3B0",
        ink: "#42526B",
        floral: {
          blue: "#BFE8F8",
          blush: "#F8C8DC",
          butter: "#FFF3B0",
          paper: "#FFFDF7",
          rose: "#D982A8",
          lily: "#F7B7CF",
          leaf: "#87BFA3",
          ink: "#42526B",
        },
        sunflower: {
          light: "#FFF3B0",
          DEFAULT: "#F8C8DC",
          dark: "#D982A8",
        },
        warm: {
          brown: "#5F6475",
          DEFAULT: "#5F6475",
        },
        dark: "#42526B",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'petal': 'petal 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        petal: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
