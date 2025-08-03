/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f8',
          100: '#cceff0',
          200: '#99dfe1',
          300: '#66cfd2',
          400: '#33bfc3',
          500: '#00b9bf',
          600: '#009aa0',
          700: '#007b80',
          800: '#005c60',
          900: '#003d40',
        }
      },
      fontFamily: {
        sans: ['var(--font-bai-jamjuree)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-bai-jamjuree)', 'monospace'],
      },
    },
  },
  plugins: [],
} 