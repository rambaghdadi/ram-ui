import {HTMLAttributes} from "react"
import {Color} from "../../../styles/colors"

const commonMobileSizes = {
  padding: "var(--p-2)",
  fontSize: "var(--text-sm)",
  width: "var(--w-1)",
  height: "var(--w-1)",
}

export const sizes = {
  mobile: {
    sm: {
      ...commonMobileSizes,
    },
    md: {
      ...commonMobileSizes,
      fontSize: "var(--text-base)",
    },
    lg: {
      ...commonMobileSizes,
      fontSize: "var(--text-lg)",
    },
  },
  tablet: {
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
  },
  desktop: {
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
  },
} as const

type Size = keyof typeof sizes.desktop

export interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {
  color?: Color
  totalPages: number
  activePage: number
  siblings?: number
  size?: Size
  onPageChange: (page: number) => void
}
