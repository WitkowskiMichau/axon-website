import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        russo: ['Russo One', 'sans-serif'],
      },
      colors: {
        primaryYellow: '#fbff12',  // Main bright yellow
        lightGray: '#f8f8f8'
      },
    },
  },
  plugins: [],
};
export default config;
