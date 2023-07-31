export interface IModalProps {
  children: React.ReactNode
  isVisible: boolean
  title?: string
  withHeader?: boolean
  onXClick: () => void
  onBackdropClick: () => void

  isBlured?: boolean
}
