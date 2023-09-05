import {SVGProps} from "react"

type InvisibleIconProps = SVGProps<SVGSVGElement>

export default function VisibleIcon(props: InvisibleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{width: "100%", height: "100%"}}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"></path>
      <path d="M15 19l2 2l4 -4"></path>
    </svg>
  )
}
