import type {Meta, StoryObj} from "@storybook/react"
import ActionIcon from "./ActionIcon"
import VisibleIcon from "./SVGs/VisibleIcon"

const meta: Meta<typeof ActionIcon> = {
  title: "BUTTONS/ActionIcon",
  component: ActionIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    children: <VisibleIcon />,
    color: "blue",
    size: "md",
    isLoading: false,
    disabled: false,
    variant: "filled",
    dropShadow: false,
  },
}

export const Filled: Story = {
  args: {
    ...props.args,
    variant: "filled",
  },
}

export const Light: Story = {
  args: {
    ...props.args,
    variant: "light",
  },
}
export const Outline: Story = {
  args: {
    ...props.args,
    variant: "outline",
  },
}
export const Sm: Story = {
  args: {
    ...props.args,
    size: "sm",
  },
}
export const Md: Story = {
  args: {
    ...props.args,
    size: "md",
  },
}
export const Lg: Story = {
  args: {
    ...props.args,
    size: "lg",
  },
}
