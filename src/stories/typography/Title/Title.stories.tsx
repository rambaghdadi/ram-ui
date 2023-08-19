import type {Meta, StoryObj} from "@storybook/react"
import Title from "./Title"

const meta = {
  title: "TYPOGRAPHY/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    children: "Hello World",
    size: 1,
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
