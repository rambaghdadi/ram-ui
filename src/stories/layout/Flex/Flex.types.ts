import {PropsWithChildren} from "react"

export interface IFlexProps extends PropsWithChildren {
  /**
   *  The ID of the element
   */
  id?: string
  /**
   *  The class of the element
   */
  className?: string
  /**
   * The gap between the elements
   */
  gap?: number
  /**
   * The direction of the elements
   */
  flexDirection?: "column" | "row"
  /**
   * The alignment of the elements
   */
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
  /**
   * Whether the container takes the full width of the parent
   */
  isFullWidth?: boolean
  /**
   * Wraps the children elements
   */
  wrap?: boolean
  /**
   * Defines the alignment of the children elements along the main axis
   */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
  /**
   * Adds Margin
   */
  margin?: string
  /**
   * Adds Padding
   */
  padding?: string
}
