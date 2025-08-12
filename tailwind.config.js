/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6A00"
        }
      },
      boxShadow: {
        header: "0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)"
      }
    }
  },
  plugins: []
};


