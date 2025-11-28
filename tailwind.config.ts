import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gestalty Color Palette
        primaryYellow: "#fbc10d",      // Primary Yellow - Main accent, highlights, CTAs
        darkBlue: "#19254c",            // Dark Blue - Primary text, headings, backgrounds
        offWhite: "#fefefe",             // Off-White - Light backgrounds, text contrast
        grayBlue: "#6a7188",             // Gray-Blue - Secondary text, borders, dividers
        beige: "#d8d1b2",                // Beige - Subtle backgrounds, accents
        dark_black: "#1b1d1e",          // Dark black for navbar background
        
        // Legacy support (mapped to new colors)
        background: "#fefefe",
        secondry: "#19254c",
        marquee: "#19254c",
        about: "#d8d1b2",
        heroPrimary: "#fbc10d",
        heroSecondary: "#fefefe",
        heroAccent: "#d8d1b2",
        heroTertiary: "#6a7188",
      },
      boxShadow: {
        header_shadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'hero-primary': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-secondary': ['36px', { lineHeight: '1.2', fontWeight: '500' }],
        'hero-body': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
    fontFamily: {
      FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
      NeueMontreal: ["NeueMontreal", "sans-serif"],
    },
    screens: {
      xm: { max: "400px" },
      sm: { min: "401px", max: "768px" },
      md: { min: "769px", max: "1023px" },
      lg: { min: "1024px" },
      xl: { min: "1491px" },
      "2xl": { min: "2400px" },
    }
  },
  plugins: [],
};
export default config;
