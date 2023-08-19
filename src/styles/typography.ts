export type Size = keyof typeof sizes
export const sizes = {
  xs: "var(--text-xs)",
  sm: "var(--text-sm)",
  md: "var(--text-base)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
} as const
