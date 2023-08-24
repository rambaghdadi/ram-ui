import {Color} from "../../../styles/colors"

export interface IStepperProps {
  steps: Step[]
  active: number
  color?: Color
  goToStep: (step: number) => void
}

interface Step {
  title: string
  description: string
}
