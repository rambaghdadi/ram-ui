import type {Meta, StoryObj} from "@storybook/react"
import ProgressBar from "./ProgressBar"

const meta = {
  title: "MOLECULES/ProgressBar",
  component: ProgressBar,
  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    value: 10,
    color: "blue",
    radius: "md",
    size: "md",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}

export const GreenAndLarge: Story = {
  args: {
    ...props.args,
    color: "green",
    value: 78,
    size: "lg",
  },
}

export const PurpleAndSmall: Story = {
  args: {
    ...props.args,
    color: "purple",
    value: 35,
    size: "sm",
  },
}
