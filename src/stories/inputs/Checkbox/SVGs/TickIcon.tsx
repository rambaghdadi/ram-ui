export default function TickIcon({
  className,
  isActive,
  id,
}: {
  className: string
  isActive: boolean
  id: string
}) {
  const clipPathID = `clip-${id}`
  const animationName = isActive ? "revealTick" : "hideTick"

  return (
    <svg
      viewBox="0 0 10 7"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipPathID}>
          <rect
            width="10"
            height="7"
            style={{
              animation: `${animationName} 0.4s forwards`,
              animationDelay: `1s`,
              transformOrigin: "0 0",
            }}
          />
        </clipPath>
      </defs>
      <style>
        {`
          @keyframes revealTick {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          @keyframes hideTick {
            from {
              transform: scaleX(1);
            }
            to {
              transform: scaleX(0);
            }
          }
        `}
      </style>
      <path
        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        style={{
          stroke: "white",
          strokeWidth: 0.1,
          clipPath: `url(#${clipPathID})`,
        }}
      />
    </svg>
  )
}
