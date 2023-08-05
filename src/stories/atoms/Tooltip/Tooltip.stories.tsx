import type {Meta, StoryObj} from "@storybook/react"
import Tooltip from "./Tooltip"

const meta = {
  title: "ATOMS/Tooltip",
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
    children: "Hello World",
    label: "This is a label asdfjal;sdk fjasl; djfal; sdjf",
  },
}

export const Default: Story = {
  args: {
    ...props.args,
  },
}
