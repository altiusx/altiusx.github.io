/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hideout: {
          bg: '#0f172a', // Dark Slate
          card: '#1e293b', // Lighter Slate
          accent: '#fb923c', // Mae Borowski Orange
          text: '#e2e8f0', // Soft White
          muted: '#94a3b8', // Grey
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
