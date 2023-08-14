import type {Meta, StoryObj} from "@storybook/react"
import TextArea from "./TextArea"

const meta = {
  title: "TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

const props: Story = {
  args: {},
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
