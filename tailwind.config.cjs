/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-glow": "hsl(var(--primary-glow))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        success: "hsl(var(--success))",
        danger: "hsl(var(--danger))",
        muted: "hsl(var(--muted))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};
