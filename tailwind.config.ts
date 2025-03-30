/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #52525B 8.51%, rgba(123, 123, 137, 0.8) 24.84%, rgba(244, 244, 245, 0) 69.55%)",
        "gradient-to-r": "linear-gradient(90deg, #D5EDFF 0%, #F4F8FF 100%)",
        // gradient to bottom
        "gradient-to-bdash":
          "linear-gradient(180deg, #D5EDFF 0%, #F4F8FF 100%)",
      },
      fontSize: {
        "2xs": "10px",
      },
      boxShadow: {
        sm: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
        top: "0 -6px 10px -2px rgba(0, 0, 0, 0.25);",
      },
      colors: {
        background: "var(--background)",
        primary: {
          DEFAULT: "#0494FC",
          hover: "#21A0FC",
          selected: "#7CC7FD",
          50: "#F5FBFF",
          100: "#E1F2FF",
          200: "#B8E1FE",
          300: "#7CC7FD",
        },
        secondary: {
          DEFAULT: "#0A2A60",
          hover: "#1149A6",
          selected: "#90B5F4",
        },
        "secondary-alt": {
          DEFAULT: "var(--secondary-alt)",
        },
        dark: {
          primary: "#1A1A1A",
          secondary: "rgba(26, 26, 26, 0.7)",
          tertiary: "rgba(26, 26, 26, 0.36)",
          gray: "#6C7E8E",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
        muted: {
          DEFAULT: "var(--muted)",
        },
        "muted-alt": {
          DEFAULT: "var(--muted-alt)",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        "accent-alt": {
          DEFAULT: "var(--accent-alt)",
        },
        "accent-2": {
          DEFAULT: "var(--accent-2)",
        },
        card: {
          DEFAULT: "var(--card)",
        },
        danger: {
          DEFAULT: "#DC2828",
          hover: "#FF6565",
          selected: "#FFC9C9",
        },
        green: {
          50: "#F2FDF5",
          200: "#BBF7D0",
          600: "#16A249",
        },
        purple: {
          50: "#FAF5FF",
          200: "#EAD6FF",
          600: "#9234EA",
        },
        highlight: {
          DEFAULT: "#E9590C",
          hover: "#FB923C",
          selected: "#FED6A9",
        },
        other: {
          lemon: "#22DF72",
          green: "#085058",
        },
        success: {
          DEFAULT: "#16A249",
          hover: "#4ADE80",
          selected: "#85EFAC",
        },
        surface: {
          2: "#FCFCFC",
        },
        modalBackground: "rgba(58,68,93,0.7)",
        loaderBg: "rgba(0,0,0, 0.5);",
      },
      /*   borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }, */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slowPing: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "75%, 100%": { opacity: 0, transform: "scale(1.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 1s linear infinite",
        "spin-reverse": "spin 1s linear infinite reverse",
        slideIn: "slideIn 0.5s ease-out",
        "very-slow-spin": "spin 5s linear infinite",
        "slow-ping": "slowPing 2s cubic-bezier(0, 0, 0.5, 1) infinite;",
      },
    },
  },
  plugins: [],
};

export default config;
