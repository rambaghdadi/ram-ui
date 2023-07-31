import type {Meta, StoryObj} from "@storybook/react"

import Button from "./Button"

const meta = {
  title: "ATOMS/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    children: "Button",
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
