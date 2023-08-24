import type {Meta, StoryObj} from "@storybook/react"
import Stepper from "./Stepper"
import {data} from "./_mock/data"

const meta: Meta<typeof Stepper> = {
  title: "NAVIGATION/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    steps: data,
    active: 2,
    color: "blue",
    goToStep: (step: number) => {
      console.log(step)
    },
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
