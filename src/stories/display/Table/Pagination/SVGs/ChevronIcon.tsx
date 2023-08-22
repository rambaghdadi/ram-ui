type Direction = "top" | "bottom" | "left" | "right"

export default function ChevronIcon({
  onClick,
  direction,
  isActive,
  translate,
}: {
  translate?: string
  onClick: () => void
  direction: Direction
  isActive?: boolean
}) {
  const dir = {
    right: "0deg",
    left: "180deg",
    top: "270deg",
    bottom: "90deg",
  }

  return (
    <svg
      onClick={onClick}
      style={{
        cursor: "pointer",
        width: "1rem",
        height: "1rem",
        rotate: dir[direction],
        transform: translate,
      }}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={isActive ? "var(--bg-dark)" : "var(--bg-gray-300)"}
    >
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
    </svg>
  )
}
