import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        christmasGreen: "#008000", // Custom green color
        christmasRed: "#FF0000",   // Custom red color
        christmasWhite: "#FFFFFF", // Custom white color
      },
    },
  },
  plugins: [],
} satisfies Config;