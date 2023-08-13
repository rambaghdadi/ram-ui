import {ButtonHTMLAttributes} from "react"

export const colors = {
  blue: {
    filled: {
      background: "var(--bg-blue-600)",
      hover: "var(--bg-blue-700)",
      font: "var(--bg-white)",
    },
    outline: {
      background: "var(--bg-white)",
      font: "var(--bg-blue-600)",
      hover: "var(--bg-blue-200)",
    },
    light: {
      background: "var(--bg-blue-300)",
      font: "var(--bg-blue-600)",
      hover: "var(--bg-blue-400)",
    },
  },
  green: {
    filled: {
      background: "var(--bg-emerald-600)",
      hover: "var(--bg-emerald-700)",
      font: "var(--bg-white)",
    },
    outline: {
      background: "var(--bg-white)",
      font: "var(--bg-emerald-600)",
      hover: "var(--bg-emerald-200)",
    },
    light: {
      background: "var(--bg-emerald-300)",
      font: "var(--bg-emerald-600)",
      hover: "var(--bg-emerald-400)",
    },
  },
  red: {
    filled: {
      background: "var(--bg-red-600)",
      hover: "var(--bg-red-700)",
      font: "var(--bg-white)",
    },
    outline: {
      background: "var(--bg-white)",
      font: "var(--bg-red-600)",
      hover: "var(--bg-red-200)",
    },
    light: {
      background: "var(--bg-red-300)",
      font: "var(--bg-red-600)",
      hover: "var(--bg-red-400)",
    },
  },
  purple: {
    filled: {
      background: "var(--bg-purple-600)",
      hover: "var(--bg-purple-700)",
      font: "var(--bg-white)",
    },
    outline: {
      background: "var(--bg-white)",
      font: "var(--bg-purple-600)",
      hover: "var(--bg-purple-200)",
    },
    light: {
      background: "var(--bg-purple-300)",
      font: "var(--bg-purple-600)",
      hover: "var(--bg-purple-400)",
    },
  },
  orange: {
    filled: {
      background: "var(--bg-orange-600)",
      hover: "var(--bg-orange-700)",
      font: "var(--bg-white)",
    },
    outline: {
      background: "var(--bg-white)",
      font: "var(--bg-orange-600)",
      hover: "var(--bg-orange-200)",
    },
    light: {
      background: "var(--bg-orange-300)",
      font: "var(--bg-orange-600)",
      hover: "var(--bg-orange-400)",
    },
  },
} as const

export const sizes = {
  sm: {
    padding: "var(--p-1) var(--p-2)",
    fontSize: "var(--text-sm)",
  },
  md: {
    padding: "var(--p-2) var(--p-4)",
    fontSize: "var(--text-base)",
  },
  lg: {
    padding: "var(--p-3) var(--p-5)",
    fontSize: "var(--text-lg)",
  },
} as const

type Size = keyof typeof sizes
type Color = keyof typeof colors
type Variant = keyof typeof colors.blue

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isLoading?: boolean
  color?: Color
  size?: Size
  variant?: Variant
  dropShadow?: boolean
}
