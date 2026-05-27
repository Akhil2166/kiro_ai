import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f6f3ef',
        'bg-warm': '#efe9e0',
        'warm-black': '#2a2a2a',
        'warm-dark': '#1d1a16',
        muted: '#8c8578',
        border: '#e8e2da',
        accent: '#88c9f7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Cinematic oversized scale
        'hero': ['clamp(100px, 14vw, 220px)', { lineHeight: '0.85', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-sm': ['clamp(60px, 10vw, 140px)', { lineHeight: '0.85', letterSpacing: '-0.03em', fontWeight: '800' }],
        'subtitle': ['18px', { lineHeight: '28px', fontWeight: '400', letterSpacing: '0.01em' }],
        'caption': ['13px', { lineHeight: '20px', fontWeight: '400', letterSpacing: '0.04em' }],
      },
      spacing: {
        'cinematic': '80px',
        'breath': '120px',
      },
      maxWidth: {
        'site': '1600px',
      },
      borderRadius: {
        'btn': '12px',
        'card': '16px',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
export default config
