export interface IProgressBarProps {
  size?: Size
  radius?: Radius
  color?: Color
  value: number
}

export const sizes = {
  sm: "0.5rem",
  md: "0.8rem",
  lg: "1rem",
} as const

export const radiuses = {
  sm: "var(--rounded)",
  md: "var(--rounded-md)",
  lg: "var(--rounded-2xl)",
} as const

export const colors = {
  blue: "var(--bg-blue-600)",
  green: "var(--bg-green-600)",
  purple: "var(--bg-purple-600)",
}

type Size = keyof typeof sizes
type Radius = keyof typeof radiuses
type Color = keyof typeof colors
