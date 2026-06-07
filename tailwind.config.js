/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        ink: "#0d0f12",
        ink2: "#3a3d44",
        ink3: "#7c8290",
        surface: "#f7f7f5",
        card: "#ffffff",
        border: "#e8e8e4",
        accent: "#1a56db",
        accent2: "#0e3fa8",
        success: "#0d9f6e",
        danger: "#e53935",
        warn: "#f59e0b",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        pill: "100px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
