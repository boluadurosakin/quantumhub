/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core surface system
        surface: {
          base:    '#0a0a0b',   // page background
          raised:  '#111113',   // card / panel
          overlay: '#18181b',   // modal / hover state
          border:  '#27272a',   // default border
          muted:   '#3f3f46',   // muted border / divider
        },
        // Text hierarchy
        ink: {
          primary:   '#f4f4f5',
          secondary: '#a1a1aa',
          muted:     '#71717a',
          disabled:  '#52525b',
        },
        // Accent — single cyan line, kept tight
        accent: {
          DEFAULT: '#06b6d4',
          dim:     '#0e7490',
          glow:    'rgba(6,182,212,0.15)',
        },
        // Status badges
        status: {
          production:   { bg: 'rgba(16,185,129,0.1)', text: '#34d399', border: 'rgba(52,211,153,0.2)' },
          experimental: { bg: 'rgba(245,158,11,0.1)',  text: '#fbbf24', border: 'rgba(251,191,36,0.2)' },
          archived:     { bg: 'rgba(113,113,122,0.1)', text: '#71717a', border: 'rgba(113,113,122,0.2)' },
        },
      },
      fontFamily: {
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(39,39,42,0.8)',
        glow:  '0 0 20px rgba(6,182,212,0.12)',
        focus: '0 0 0 2px rgba(6,182,212,0.4)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.secondary'),
            'h1,h2,h3,h4': { color: theme('colors.ink.primary') },
            a: { color: theme('colors.accent.DEFAULT') },
            code: { color: theme('colors.accent.DEFAULT') },
          },
        },
      }),
    },
  },
  plugins: [],
};
