export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
  extend: {
    fontSize: {
      '2xs': '0.65rem',
    },
    colors: {
      surface: {
        base: "var(--surface-base)",
        raised: "var(--surface-raised)",
        muted: "var(--surface-muted)",
        border: "var(--surface-border)",
      },
      ink: {
        primary: "var(--ink-primary)",
        muted: "var(--ink-muted)",
        disabled: "var(--ink-disabled)",
      },
      accent: "var(--accent)",
    },
  },
},
  plugins: [],
};