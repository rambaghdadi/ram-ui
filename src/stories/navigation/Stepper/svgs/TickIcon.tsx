export default function TickIcon({className}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 10 7"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{width: "20px", height: "20px", flexShrink: 0}}
    >
      <path
        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}
