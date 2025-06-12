/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          50: "#f0f4ff",
          100: "#e5edff",
          200: "#cddbfe",
          300: "#a4bcfe",
          400: "#8b5cf6",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3c1361",
          950: "#1e0a2e",
        },
         cosmics: {
          deep: '#0A0A23',
          navy: '#1A1A3A',
          violet: '#3A1A5C',
          indigo: '#4C2A85',
          purple: '#6B46C1',
          cyan: '#06B6D4',
          gold: '#F59E0B',
          neon: '#00FFFF'
        },
        chakra: {
          crown: "#9333ea",
          third: "#3730a3",
          throat: "#0ea5e9",
          heart: "#10b981",
          solar: "#f59e0b",
          sacral: "#f97316",
          root: "#dc2626",
        },
        neon: {
          cyan: "#00ffd5",
          purple: "#8b5cf6",
          gold: "#fbbf24",
          pink: "#f472b6",
          green: "#10b981",
        },
        mystic: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        sacred: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      fontFamily: {
        cosmic: ["Orbitron", "Inter", "system-ui", "sans-serif"],
        sacred: ["Cinzel", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, #0A0A23 0%, #1A1A3A 25%, #3A1A5C 50%, #4C2A85 75%, #6B46C1 100%)",
        "chakra-gradient":
          "linear-gradient(135deg, #C53030 0%, #DD6B20 14%, #D69E2E 28%, #38A169 42%, #3182CE 57%, #805AD5 71%, #9F7AEA 85%, #06B6D4 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        starfield:
          "radial-gradient(2px 2px at 20px 30px, #00FFFF, transparent), radial-gradient(2px 2px at 40px 70px, #9F7AEA, transparent), radial-gradient(1px 1px at 90px 40px, #F59E0B, transparent), radial-gradient(1px 1px at 130px 80px, #06B6D4, transparent), radial-gradient(2px 2px at 160px 30px, #00FFFF, transparent)",
        "aurora": "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(16, 185, 129, 0.3), rgba(245, 158, 11, 0.3))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 20s linear infinite",
        "pulse-glow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "sacred-spin": "spin 20s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
        "aurora": "aurora 8s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "drift": "drift 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "reverse-spin": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        aurora: {
          "0%, 100%": { 
            backgroundPosition: "0% 50%",
            filter: "hue-rotate(0deg)"
          },
          "50%": { 
            backgroundPosition: "100% 50%",
            filter: "hue-rotate(180deg)"
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            filter: "brightness(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(6, 182, 212, 0.4)",
            filter: "brightness(1.2)"
          },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "33%": { transform: "translateX(30px) translateY(-20px)" },
          "66%": { transform: "translateX(-20px) translateY(10px)" },
        },
      },
      boxShadow: {
        'cosmic': '0 0 50px rgba(139, 92, 246, 0.3)',
        'neon': '0 0 30px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.2)',
      },
    },
  },
  plugins: [],
};