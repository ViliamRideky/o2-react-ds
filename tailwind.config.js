module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        onair: ["On Air Var", "sans-serif"],
      },
      colors: {
        surface: {
          "x-high": "var(--color-surface-x-high)",
          "x-low": "var(--color-surface-x-low)",
          brand: "var(--color-surface-brand)",
          danger: "var(--color-surface-danger)",
          "danger-variant": "var(--color-surface-danger-variant)",
          warning: "var(--color-surface-warning)",
          "warning-variant": "var(--color-surface-warning-variant)",
        },
        content: {
          "on-neutral": {
            "xx-high": "var(--color-content-on-neutral-xx-high)",
            medium: "var(--color-content-on-neutral-medium)",
            low: "var(--color-content-on-neutral-low)",
            danger: "var(--color-content-on-neutral-danger)",
            warning: "var(--color-content-on-neutral-warning)",
          },
        },
        state: {
          default: {
            hover: "var(--color-state-default-hover)",
            focus: "var(--color-state-default-focus)",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontSize: {
        "label-m": "var(--font-label-m-size)",
        "label-s": "var(--font-label-s-size)",
        "body-m": "var(--font-body-m-size)",
      },
      fontWeight: {
        "label-m": "var(--font-label-m-weight)",
        "label-s": "var(--font-label-s-weight)",
        "body-m": "var(--font-body-m-weight)",
      },
      lineHeight: {
        "label-m": "var(--font-label-m-line-height)",
        "label-s": "var(--font-label-s-line-height)",
        "body-m": "var(--font-body-m-line-height)",
      },
      letterSpacing: {
        "label-m": "var(--font-label-m-letter-spc)",
        "label-s": "var(--font-label-s-letter-spc)",
        "body-m": "var(--font-body-m-letter-spc)",
      },
      spacing: {
        "dimension-xs": "var(--dimension-xs)",
        "dimension-s": "var(--dimension-s)",
        "dimension-m": "var(--dimension-m)",
        "dimension-l": "var(--dimension-l)",
      },
      borderRadius: {
        "dimension-input": "var(--dimension-radius-input)"
      },
    },
  },
  plugins: [],
}