import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        joinBg: "url('/join-bg.jpg')",
        heroSectionBg : "url('/heroSectionBg.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height:{
        560 : "560px;",
        570 : "570px;",
        500: "500px;",
        410: "410px;",
        640: "640px;",
        1300: "1300px;",
        "10/12": "83.3333333%", 
      },
      backgroundColor:{
        cyanBg: "rgb(196 , 229 , 252)"
        ,main: "rgb(240 , 235 , 225)"
      }
    },
  },
  plugins: [],
};
export default config;
