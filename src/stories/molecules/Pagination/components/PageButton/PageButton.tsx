import {ButtonHTMLAttributes} from "react"
import classes from "./PageButton.module.css"

interface IPageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function PageButton({
  children,
  className,
  ...props
}: IPageButtonProps) {
  return (
    <button
      {...props}
      className={`${classes.button} ${className}`}
      type="button"
    >
      {children}
    </button>
  )
}
