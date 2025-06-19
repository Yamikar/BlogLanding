/** @type {import('tailwindcss').Config} */
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
      },
      height: {
        mını: "320px",
        card: "400px",
        long: "600px",
      },
      width: {
        mını: "360px",
        long: "550px",
        main: "1200px",
        header: "800px",
      },
    },
  },
  plugins: [],
};
