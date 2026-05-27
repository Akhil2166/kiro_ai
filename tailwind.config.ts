import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Six B inspired color palette
        primary: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
          dark: '#0f0f1a',
        },
        accent: {
          DEFAULT: '#c8f169',
          light: '#d4f58a',
          dark: '#a8d44a',
        },
        cream: {
          DEFAULT: '#f5f0eb',
          light: '#faf7f4',
          dark: '#ebe4dc',
        },
        mint: {
          DEFAULT: '#a8e6cf',
          light: '#c4f0de',
          dark: '#7dd4b0',
        },
        navy: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
