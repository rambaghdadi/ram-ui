import type {Meta, StoryObj} from "@storybook/react"
import _NAME_ from "./_NAME_"

const meta: Meta<typeof _NAME_> = {
  title: "_NAME_",
  component: _NAME_,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const props = {}

const _NAME_Template: Story = {
  render: (args) => {
    return <_NAME_ {...props} {...args} />
  },
}

export const Default: Story = {
  ..._NAME_Template,
  args: {},
}
