import type {Meta, StoryObj} from "@storybook/react"
import _NAME_ from "./_NAME_"

const meta = {
  title: "_NAME_",
  component: _NAME_,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof _NAME_>

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
