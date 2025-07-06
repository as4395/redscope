import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/renderer/**/*.{js,ts,jsx,tsx,html}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FF2E2E',
          dark: '#8B0000',
        },
      },
    },
  },
  darkMode: 'class', // or 'media'
  plugins: [],
};

export default config;
