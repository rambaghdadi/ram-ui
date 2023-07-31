import {HTMLAttributes} from "react"

export const colors = {
  blue: "var(--bg-blue-600)",
  green: "var(--bg-emerald-600)",
} as const

type Color = keyof typeof colors

export const sizes = {
  sm: {
    padding: "var(--p-2)",
    fontSize: "var(--text-sm)",
    width: "var(--w-1)",
    height: "var(--w-1)",
  },
  md: {
    padding: "var(--p-3)",
    fontSize: "var(--text-base)",
    width: "var(--w-2)",
    height: "var(--w-2)",
  },
  lg: {
    padding: "var(--p-4)",
    fontSize: "var(--text-lg)",
    width: "var(--w-3)",
    height: "var(--w-3)",
  },
} as const

type Size = keyof typeof sizes

export interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {
  color?: Color
  totalPages: number
  activePage: number
  siblings?: number
  size?: Size
  onPageChange: (page: number) => void
}
