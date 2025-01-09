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
        footh: "400px",
        bıgcard: "500px",
        mıdcard: "300px",
        mınıcard: "150px",
        xmını: "100px",
      },
      width: {
        random: "550px",
        small: "200px",
        large: "500px",
        medium: "400px",
        normal: "300px",
      },
    },
  },
  plugins: [],
};
