import type {Meta, StoryObj} from "@storybook/react"
import SegmentedControlInput from "./SegmentedControlInput"

const meta = {
  title: "BUTTONS/SegmentedControlInput",
  component: SegmentedControlInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentedControlInput>

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