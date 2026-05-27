import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#88c9f7',
        heading: '#333c4c',
        body: '#606979',
        muted: '#8594ae',
        border: '#f2f4f8',
        surface: '#f2f4f8',
      },
      fontFamily: {
        figtree: ['var(--font-figtree)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'btn': '12px',
        'card': '16px',
        'pill': '50px',
      },
      maxWidth: {
        'site': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
