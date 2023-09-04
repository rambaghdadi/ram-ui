import type {Meta, StoryObj} from "@storybook/react"
import Rating from "./Rating"
import {useState} from "react"

const meta: Meta<typeof Rating> = {
  title: "INPUTS/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {
  count: 5,
}

const RatingTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState(3)
    return <Rating {...args} value={value} onChange={setValue} />
  },
}

export const Default: Story = {
  ...RatingTemplate,
  args: {
    ...props,
  },
}
export const Orange: Story = {
  ...RatingTemplate,
  args: {
    ...props,
    color: "orange",
  },
}
export const MoreStars: Story = {
  ...RatingTemplate,
  args: {
    ...props,
    count: 10,
  },
}
