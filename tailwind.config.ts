import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: "#dbe9e1",
        mint: "#edf5ef",
        sand: "#f3eee7",
        stone: "#6d756f",
        ink: "#243328"
      },
      boxShadow: {
        soft: "0 14px 40px rgba(26, 43, 35, 0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
