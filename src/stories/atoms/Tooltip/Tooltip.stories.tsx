import type {Meta, StoryObj} from "@storybook/react"
import Tooltip from "./Tooltip"

const meta = {
  title: "OVERLAYS/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    color: "white",
    children: "Hello World",
    label: "This is a label",
    isActive: false,
    visibleOnHover: true,
    followMouse: false,
    placement: "top",
    offset: 15,
  },
}

export const OnHover: Story = {
  args: {
    ...props.args,
  },
}

export const Active: Story = {
  args: {
    ...props.args,
    isActive: true,
  },
}
export const Blue: Story = {
  args: {
    ...props.args,
    isActive: true,
    color: "blue",
  },
}
