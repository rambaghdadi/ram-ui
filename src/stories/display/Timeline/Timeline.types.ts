import {Color} from "../../../styles/colors"

export interface ITimelineProps {
  active: number
  color?: Color
  data: Data[]
}

interface Data {
  branchName: string
  branchDetails: string
  branchTime: string
}
