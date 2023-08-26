export interface IDrawerProps {
  children: React.ReactNode
  isVisible: boolean
  onBackdropClick: () => void
  onXClick: () => void
  drawerTitle: string
  withHeader?: boolean
  width?: string
  height?: string
  position?: "left" | "right" | "top" | "bottom"
}
