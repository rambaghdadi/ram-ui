import type {Meta, StoryObj} from "@storybook/react"
import Text from "./Text"

const meta = {
  title: "TYPOGRAPHY/Text",
  component: Text,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {
    color: "blue",
    size: "md",
    weight: 400,
    isCapitalized: false,
    isUppercase: false,
    children: "hello world",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
