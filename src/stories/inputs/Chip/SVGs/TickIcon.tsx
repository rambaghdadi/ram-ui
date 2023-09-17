import {HTMLProps} from "react"

interface ITickIconProps extends HTMLProps<SVGSVGElement> {}

export default function TickIcon(props: ITickIconProps) {
  return (
    <svg
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}